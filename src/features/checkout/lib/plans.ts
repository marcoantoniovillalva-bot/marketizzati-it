import { z } from 'zod'
import { ADS, OFFER } from '@/features/site/lib/offer'

/** Bump when the terms of sale (/condizioni-sito-web) change: stored with every order. */
export const TERMS_VERSION = '2026-11-17'

/** Invoices above this amount carry a 2 € stamp duty (regime forfettario). */
const STAMP_THRESHOLD = 77.47

export const checkoutSchema = z.object({
  plan: z.enum(['site_oneoff', 'site_monthly', 'ads_only']),
  adsLaunch: z.boolean().default(false),
  fullName: z.string().trim().min(2).max(120),
  businessName: z.string().trim().min(2).max(160),
  taxCode: z.string().trim().min(11).max(16),
  invoiceChannel: z.string().trim().min(6).max(160),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(6).max(30),
  locale: z.enum(['it', 'es', 'en']).default('it'),
  acceptTerms: z.literal(true),
})

export type CheckoutInput = z.infer<typeof checkoutSchema>

interface Line {
  name: string
  amount: number
  recurring: boolean
}

/** What goes in the Stripe Checkout and what the webhook schedules afterwards. */
export interface PlanLines {
  mode: 'payment' | 'subscription'
  lines: Line[]
  /** Months the subscription lasts; null = until the client cancels. */
  months: number | null
  /** Ads launch item to drop after ADS.launchMonths (monthly site + ads launch). */
  dropAdsAfterLaunch: boolean
}

export function planLines({ plan, adsLaunch }: Pick<CheckoutInput, 'plan' | 'adsLaunch'>): PlanLines {
  const site = 'Sito web Marketizzati'
  const ads = (amount: number): Line => ({ name: 'Gestione pubblicità Google Ads + ChatGPT Ads', amount, recurring: true })
  const stamp = (recurring: boolean): Line => ({ name: 'Marca da bollo', amount: OFFER.stampDuty, recurring })

  if (plan === 'ads_only') {
    return { mode: 'subscription', lines: [ads(ADS.monthly), stamp(ADS.monthly > STAMP_THRESHOLD)], months: null, dropAdsAfterLaunch: false }
  }
  if (plan === 'site_oneoff') {
    const oneOff: Line = { name: `${site} (pagamento unico)`, amount: OFFER.oneOff, recurring: false }
    if (!adsLaunch) return { mode: 'payment', lines: [oneOff, stamp(false)], months: null, dropAdsAfterLaunch: false }
    // first invoice 800 + 50 + bollo; the next two (50 €) are under the stamp threshold
    return { mode: 'subscription', lines: [oneOff, stamp(false), ads(ADS.launchMonthly)], months: ADS.launchMonths, dropAdsAfterLaunch: false }
  }
  const monthly: Line = { name: `${site} (rata mensile, ${OFFER.months} mesi)`, amount: OFFER.monthly, recurring: true }
  const lines = [monthly, stamp(true), ...(adsLaunch ? [ads(ADS.launchMonthly)] : [])]
  return { mode: 'subscription', lines, months: OFFER.months, dropAdsAfterLaunch: adsLaunch }
}
