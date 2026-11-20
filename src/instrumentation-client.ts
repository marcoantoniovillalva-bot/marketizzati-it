import * as Sentry from '@sentry/nextjs'

/** Browser errors go to Sentry: errors only, no session replay, no personal data. */
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
    tracesSampleRate: 0,
    // noise from browser extensions and old cached pages
    ignoreErrors: ['ResizeObserver loop', 'ChunkLoadError', 'Loading chunk'],
  })
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
