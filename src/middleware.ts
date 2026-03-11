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

const protectedPaths = ['/dashboard', '/corso', '/risorse', '/profilo']
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
  return protectedPaths.some(p => clean.startsWith(p))
}

function isAuthRoute(pathname: string): boolean {
  const clean = getPathWithoutLocale(pathname)
  return authPaths.some(p => clean.startsWith(p))
}

export default async function middleware(request: NextRequest) {
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
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const locale = getLocaleFromPath(pathname)

  if (isProtectedRoute(pathname)) {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      const loginUrl = new URL(`/${locale}/login`, request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (isAuthRoute(pathname)) {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const dashboardUrl = new URL(`/${locale}/dashboard`, request.url)
      return NextResponse.redirect(dashboardUrl)
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|auth|_next|_vercel|.*\\..*).*)'],
}
