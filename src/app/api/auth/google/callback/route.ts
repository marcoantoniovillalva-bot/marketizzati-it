import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

function getRequestOrigin(request: NextRequest) {
  const origin = new URL(request.url).origin
  if (process.env.NODE_ENV !== 'production') {
    return origin
  }

  return origin.replace('http://', 'https://')
}

function clearStateAndRedirect(url: string) {
  const response = NextResponse.redirect(url)
  response.cookies.delete('g_oauth_state')
  response.cookies.delete('g_oauth_next')
  return response
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const oauthError = searchParams.get('error')

  const storedState = request.cookies.get('g_oauth_state')?.value
  const nextPath = request.cookies.get('g_oauth_next')?.value || '/it/dashboard'
  const origin = getRequestOrigin(request)
  const failUrl = `${origin}/it/login?error=oauth`

  if (oauthError || !code || !storedState || storedState !== state) {
    return clearStateAndRedirect(failUrl)
  }

  const clientId = (
    process.env.GOOGLE_CLIENT_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    ''
  ).trim()
  const clientSecret = (process.env.GOOGLE_CLIENT_SECRET || '').trim()

  if (!clientId || !clientSecret) {
    return clearStateAndRedirect(failUrl)
  }

  const redirectUri = `${origin}/api/auth/google/callback`
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  })

  if (!tokenRes.ok) {
    return clearStateAndRedirect(failUrl)
  }

  const { id_token, access_token } = (await tokenRes.json()) as {
    id_token?: string
    access_token?: string
  }

  if (!id_token) {
    return clearStateAndRedirect(failUrl)
  }

  const response = NextResponse.redirect(`${origin}${nextPath}`)
  response.cookies.delete('g_oauth_state')
  response.cookies.delete('g_oauth_next')

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const { error: signInError } = await supabase.auth.signInWithIdToken({
    provider: 'google',
    token: id_token,
    access_token,
  })

  if (signInError) {
    return clearStateAndRedirect(failUrl)
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.from('profiles').upsert(
      {
        id: user.id,
        full_name:
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          null,
        avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' }
    )
  }

  return response
}
