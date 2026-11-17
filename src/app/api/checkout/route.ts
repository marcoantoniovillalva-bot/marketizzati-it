import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { checkoutSchema, planLines, TERMS_VERSION } from '@/features/checkout/lib/plans'
import { getStripe, siteUrl } from '@/features/checkout/lib/stripe'
import { pageHref } from '@/features/site/lib/routes'

/** Creates the Stripe Checkout session for the website offer or the ads management. */
export async function POST(request: Request) {
  const parsed = checkoutSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid', fields: parsed.error.issues.map((i) => i.path.join('.')) }, { status: 400 })
  }
  const input = parsed.data
  const { mode, lines } = planLines(input)
  const base = siteUrl()

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = lines.map((line) => ({
    quantity: 1,
    price_data: {
      currency: 'eur',
      unit_amount: Math.round(line.amount * 100),
      product_data: { name: line.name },
      ...(line.recurring ? { recurring: { interval: 'month' as const } } : {}),
    },
  }))

  // everything the webhook needs to create the client and the schedule; no secrets in here
  const metadata: Stripe.MetadataParam = {
    plan: input.plan,
    ads_launch: String(input.plan !== 'ads_only' && input.adsLaunch),
    full_name: input.fullName,
    business_name: input.businessName,
    tax_code: input.taxCode,
    invoice_channel: input.invoiceChannel,
    phone: input.phone,
    locale: input.locale,
    terms_version: TERMS_VERSION,
    terms_accepted_at: new Date().toISOString(),
  }

  try {
    const session = await getStripe().checkout.sessions.create({
      mode,
      line_items: lineItems,
      customer_email: input.email,
      locale: input.locale,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: false },
      metadata,
      ...(mode === 'subscription' ? { subscription_data: { metadata } } : { payment_intent_data: { metadata }, invoice_creation: { enabled: true, invoice_data: { metadata } } }),
      success_url: `${base}${pageHref('grazie', input.locale)}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}${pageHref('prezzi', input.locale, '#acquista')}`,
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('checkout: session failed', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'stripe' }, { status: 502 })
  }
}
