import * as Sentry from '@sentry/nextjs'

/** Server and edge errors go to Sentry (only errors, no tracing; no personal data). */
export function register(): void {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.VERCEL_ENV ?? 'development',
    tracesSampleRate: 0,
  })
}

export const onRequestError = Sentry.captureRequestError
