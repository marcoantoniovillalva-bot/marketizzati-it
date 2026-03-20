import createIntlMiddleware from 'next-intl/middleware'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './i18n/routing'

type CookieToSet = {
  name: string
  value: string
  options: CookieOptions
}

const intlMiddleware = createIntlMiddleware(routing)

const protectedPaths = ['/dashboard', '/corso', '/percorso', '/workspace', '/task', '/automazioni', '/risorse', '/profilo', '/supporto', '/admin']
const authPaths = ['/login', '/signup']

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(it|en|es)/)
  return match ? match[1] : 'it'
}

function getPathWithoutLocale(pathname: string): string {
  return pathname.replace(/^\/(it|en|es)/, '') || '/'
}

function isProtectedRoute(pathname: string): boolean {
  const clean = getPathWithoutLocale(pathname)
  return protectedPaths.some((path) => clean.startsWith(path))
}

function isAuthRoute(pathname: string): boolean {
  const clean = getPathWithoutLocale(pathname)
  return authPaths.some((path) => clean.startsWith(path))
}

export default async function proxy(request: NextRequest) {
  const intlResponse = intlMiddleware(request)

  if (intlResponse.headers.get('location')) {
    return intlResponse
  }

  const response = intlResponse

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
        },
      },
    }
  )

  const pathname = request.nextUrl.pathname
  const locale = getLocaleFromPath(pathname)

  if (isProtectedRoute(pathname)) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.redirect(new URL(`/${locale}/login`, request.url))
    }
  }

  if (isAuthRoute(pathname)) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|auth|_next|_vercel|.*\\..*).*)'],
}
