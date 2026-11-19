import 'server-only'
import Stripe from 'stripe'

let client: Stripe | null = null

/** Server-side Stripe client. The secret key lives only in the server env (STRIPE_SECRET_KEY). */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY non configurata')
  client ??= new Stripe(key)
  return client
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marketizzati.it').replace(/\/$/, '')
}
