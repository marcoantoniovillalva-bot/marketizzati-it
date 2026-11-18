import { z } from 'zod'
import { ADS, AUTOMATION, OFFER } from '@/features/site/lib/offer'

/** Bump when the terms of sale (/condizioni-sito-web) change: stored with every order. */
export const TERMS_VERSION = '2026-11-17'

/** Invoices above this amount carry a 2 € stamp duty (regime forfettario). */
const STAMP_THRESHOLD = 77.47

export const PLANS = ['site_oneoff', 'site_monthly', 'ads_only', 'automation_quarterly', 'automation_monthly'] as const
export type PlanKey = (typeof PLANS)[number]

/**
 * What the site sends to start a payment: only the plan. Name, email, address, phone, tax code and
 * SDI/PEC are collected by Stripe's own embedded checkout (custom fields), so the buyer fills one form.
 */
export const checkoutSchema = z.object({
  plan: z.enum(PLANS),
  /** 3 months of ads management at the launch price, only together with a website plan. */
  adsLaunch: z.boolean().default(false),
  locale: z.enum(['it', 'es', 'en']).default('it'),
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

export function planLines({ plan, adsLaunch: addAds }: Pick<CheckoutInput, 'plan' | 'adsLaunch'>): PlanLines {
  const adsLaunch = addAds && plan.startsWith('site')
  const site = 'Sito web Marketizzati'
  const ads = (amount: number): Line => ({ name: 'Gestione pubblicità Google Ads + ChatGPT Ads', amount, recurring: true })
  const stamp = (recurring: boolean): Line => ({ name: 'Marca da bollo', amount: OFFER.stampDuty, recurring })

  if (plan === 'automation_quarterly') {
    // 3 monthly invoices, then the subscription ends on its own; the client renews if needed
    return { mode: 'subscription', lines: [{ name: `Automazioni Marketizzati (abbonamento trimestrale)`, amount: AUTOMATION.quarterly, recurring: true }, stamp(true)], months: AUTOMATION.commitMonths, dropAdsAfterLaunch: false }
  }
  if (plan === 'automation_monthly') {
    return { mode: 'subscription', lines: [{ name: 'Automazioni Marketizzati (abbonamento mensile)', amount: AUTOMATION.monthly, recurring: true }, stamp(true)], months: null, dropAdsAfterLaunch: false }
  }
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
