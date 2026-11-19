import createIntlMiddleware from 'next-intl/middleware'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './i18n/routing'
import { internalSlug, isLocale, pageHref, type PageKey } from './features/site/lib/routes'

/** Pages of the old site that moved: permanent redirects keep their Google ranking. */
const MOVED: Record<string, PageKey> = {
  servizi: 'siti',
  metodo: 'home',
  'chi-siamo': 'chiSono',
  consulenza: 'contatti',
  termini: 'condizioni',
}

/** Spanish/English slugs are served by the Italian page folders; old URLs redirect to the new ones. */
function publicRoute(request: NextRequest): NextResponse | null {
  const [, locale, slug, ...rest] = request.nextUrl.pathname.split('/')
  if (!locale || !isLocale(locale) || !slug || rest.length) return null
  const moved = MOVED[slug]
  if (moved) return NextResponse.redirect(new URL(pageHref(moved, locale), request.url), 308)
  const internal = internalSlug(locale, slug)
  if (!internal) return null
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}/${internal}`
  return NextResponse.rewrite(url)
}

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
  const routed = publicRoute(request)
  if (routed) return routed

  const intlResponse = intlMiddleware(request)

  if (intlResponse.headers.get('location')) {
    return intlResponse
  }

  const response = intlResponse

  // Local dev without Supabase keys: public pages still render; protected ones keep failing loudly.
  const hasSupabaseEnv = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  if (!hasSupabaseEnv && !isProtectedRoute(request.nextUrl.pathname)) {
    return response
  }

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
