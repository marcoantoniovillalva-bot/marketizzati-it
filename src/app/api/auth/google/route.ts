import crypto from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

function getRequestOrigin(request: NextRequest) {
  const origin = new URL(request.url).origin
  if (process.env.NODE_ENV !== 'production') {
    return origin
  }

  return origin.replace('http://', 'https://')
}

export async function GET(request: NextRequest) {
  const clientId = (
    process.env.GOOGLE_CLIENT_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    ''
  ).trim()

  if (!clientId) {
    return NextResponse.json(
      { error: 'Google OAuth non configurato correttamente.' },
      { status: 500 }
    )
  }

  const origin = getRequestOrigin(request)
  const redirectUri = `${origin}/api/auth/google/callback`
  const next = request.nextUrl.searchParams.get('next') || '/it/dashboard'
  const state = crypto.randomBytes(16).toString('hex')

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    state,
    prompt: 'select_account',
  })

  const response = NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  )

  response.cookies.set('g_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 600,
    path: '/',
    sameSite: 'lax',
    ...(process.env.NODE_ENV === 'production' ? { domain: '.marketizzati.it' } : {}),
  })

  response.cookies.set('g_oauth_next', next, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 600,
    path: '/',
    sameSite: 'lax',
    ...(process.env.NODE_ENV === 'production' ? { domain: '.marketizzati.it' } : {}),
  })

  return response
}
