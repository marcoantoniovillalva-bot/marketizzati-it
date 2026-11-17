/**
 * The website offer, one source for copy, schema and Stripe (contract model used with Max Installazioni).
 * Amounts in euro. Marco is in the "regime forfettario": no VAT, 2 € stamp duty on every invoice over 77.47 €.
 */
export const OFFER = {
  oneOff: 800,
  monthly: 100,
  months: 12,
  /** Market value, item by item (Italy 2026, prices already lowered by AI): site 1.500 + logo 300 + Google profile 200. */
  marketValue: 2000,
  marketItems: { site: 1500, logo: 300, google: 200 },
  maxPages: 9,
  supportDays: 30,
  deliveryWeeks: 2,
  hostingPerYear: 32,
  stampDuty: 2,
} as const

/** Google Ads + ChatGPT Ads management, both channels together. Ad budget is paid to Google / OpenAI. */
export const ADS = {
  /** Only when bought together with the website. */
  launchMonthly: 50,
  launchMonths: 3,
  monthly: 150,
  minBudgetMonthly: 100,
} as const

export const totalInstalments = OFFER.monthly * OFFER.months                // 1.200 €
export const savingIfPaidNow = totalInstalments - OFFER.oneOff               // 400 €
export const perDay = Math.floor((OFFER.monthly * 12 * 100) / 365) / 100     // 3,28 €

export function euro(value: number, locale: string): string {
  const fixed = Number.isInteger(value) ? 0 : 2
  return `${value.toLocaleString(locale === 'en' ? 'en-GB' : `${locale}-IT`, { minimumFractionDigits: fixed, maximumFractionDigits: fixed, useGrouping: 'always' })} €`
}
