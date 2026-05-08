import { NextRequest, NextResponse } from 'next/server'

function getRequestOrigin(request: NextRequest) {
  const origin = new URL(request.url).origin
  if (process.env.NODE_ENV !== 'production') {
    return origin
  }

  return origin.replace('http://', 'https://')
}

export async function GET(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()

  if (!supabaseUrl) {
    return NextResponse.json(
      { error: 'Supabase Auth non configurato correttamente.' },
      { status: 500 }
    )
  }

  const origin = getRequestOrigin(request)
  const next = request.nextUrl.searchParams.get('next') || '/it/dashboard'
  const callbackUrl = new URL('/auth/callback', origin)
  callbackUrl.searchParams.set('next', next)

  const authorizeUrl = new URL('/auth/v1/authorize', supabaseUrl)
  authorizeUrl.searchParams.set('provider', 'google')
  authorizeUrl.searchParams.set('redirect_to', callbackUrl.toString())

  return NextResponse.redirect(authorizeUrl)
}
