import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { checkoutSchema, planLines, TERMS_VERSION } from '@/features/checkout/lib/plans'
import { getStripe, siteUrl } from '@/features/checkout/lib/stripe'
import { pageHref } from '@/features/site/lib/routes'

const LABELS = {
  it: { business: 'Ragione sociale (se ce l’hai)', tax: 'Codice fiscale o Partita IVA', sdi: 'Codice SDI o PEC per la fattura', terms: 'Confermando il pagamento accetti le [condizioni di vendita]({url}).' },
  es: { business: 'Razón social (si la tienes)', tax: 'Código fiscal o NIF/IVA', sdi: 'Código SDI o PEC para la factura', terms: 'Al confirmar el pago aceptas las [condiciones de venta]({url}).' },
  en: { business: 'Company name (if any)', tax: 'Tax code or VAT number', sdi: 'SDI code or PEC for the invoice', terms: 'By confirming the payment you accept the [terms of sale]({url}).' },
} as const

/**
 * Creates the Stripe Checkout session shown INSIDE the page (embedded): the buyer only picks a plan on the
 * site; name, email, address, phone, tax code and SDI/PEC are asked by Stripe in the same payment form.
 * Returns the client secret for the embedded checkout.
 */
export async function POST(request: Request) {
  const parsed = checkoutSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'invalid' }, { status: 400 })
  const input = parsed.data
  const { mode, lines } = planLines(input)
  const base = siteUrl()
  const t = LABELS[input.locale]

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = lines.map((line) => ({
    quantity: 1,
    price_data: {
      currency: 'eur',
      unit_amount: Math.round(line.amount * 100),
      product_data: { name: line.name },
      ...(line.recurring ? { recurring: { interval: 'month' as const } } : {}),
    },
  }))

  // what the webhook needs to schedule the subscription; no personal data, no secrets
  const metadata: Stripe.MetadataParam = {
    plan: input.plan,
    ads_launch: String(input.adsLaunch && input.plan.startsWith('site')),
    locale: input.locale,
    terms_version: TERMS_VERSION,
    terms_accepted_at: new Date().toISOString(),
  }
  const text = (key: string, label: string, optional: boolean, min: number, max: number): Stripe.Checkout.SessionCreateParams.CustomField => ({
    key,
    label: { type: 'custom', custom: label.slice(0, 50) },
    type: 'text',
    optional,
    text: { minimum_length: min, maximum_length: max },
  })

  try {
    const session = await getStripe().checkout.sessions.create({
      ui_mode: 'embedded_page',
      mode,
      line_items: lineItems,
      locale: input.locale,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      custom_fields: [text('tax_code', t.tax, false, 11, 16), text('invoice_channel', t.sdi, false, 6, 80), text('business_name', t.business, true, 2, 100)],
      custom_text: { submit: { message: t.terms.replace('{url}', `${base}${pageHref('condizioni', input.locale)}`) } },
      metadata,
      ...(mode === 'subscription'
        ? { subscription_data: { metadata } }
        : { customer_creation: 'always' as const, payment_intent_data: { metadata }, invoice_creation: { enabled: true, invoice_data: { metadata } } }),
      return_url: `${base}${pageHref('grazie', input.locale)}?session_id={CHECKOUT_SESSION_ID}`,
    })
    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (err) {
    console.error('checkout: session failed', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'stripe' }, { status: 502 })
  }
}
