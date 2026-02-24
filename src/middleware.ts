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

// Portal routes that require auth (without locale prefix)
const protectedPaths = ['/dashboard', '/corso', '/risorse', '/profilo']
// Auth routes to redirect away from when logged in
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
  // Run intl middleware first to get proper response with locale handling
  const intlResponse = intlMiddleware(request)

  // If intlMiddleware returned a redirect (e.g., adding locale prefix), let it happen
  // Auth will be checked on the subsequent request
  if (intlResponse.headers.get('location')) {
    return intlResponse
  }

  // Create supabase client to refresh session and check auth
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
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          // Copy cookies to the intl response
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const locale = getLocaleFromPath(pathname)

  // Redirect unauthenticated users away from protected routes
  if (isProtectedRoute(pathname) && !user) {
    const loginUrl = new URL(`/${locale}/login`, request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect authenticated users away from auth routes
  if (isAuthRoute(pathname) && user) {
    const dashboardUrl = new URL(`/${locale}/dashboard`, request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|auth|_next|_vercel|.*\\..*).*)',
  ],
}
