import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { fulfilCheckout, setOrderStatus } from '@/features/checkout/lib/fulfil'
import { getStripe } from '@/features/checkout/lib/stripe'

/** Subscription id of an invoice (API 2025+: under parent.subscription_details). */
function invoiceSubscription(invoice: Stripe.Invoice): string | null {
  const sub = invoice.parent?.subscription_details?.subscription
  return typeof sub === 'string' ? sub : sub?.id ?? null
}

/**
 * Stripe webhook (STRIPE_WEBHOOK_SECRET). Events to enable in the dashboard:
 * checkout.session.completed, invoice.payment_failed, invoice.paid, customer.subscription.deleted.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get('stripe-signature')
  if (!secret || !signature) return NextResponse.json({ error: 'not configured' }, { status: 400 })

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, secret)
  } catch {
    return NextResponse.json({ error: 'bad signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        if (event.data.object.payment_status !== 'unpaid') await fulfilCheckout(event.data.object)
        break
      case 'invoice.payment_failed': {
        const sub = invoiceSubscription(event.data.object)
        if (sub) await setOrderStatus(sub, 'suspended')
        break
      }
      case 'invoice.paid': {
        const sub = invoiceSubscription(event.data.object)
        if (sub && event.data.object.billing_reason !== 'subscription_create') await setOrderStatus(sub, 'active')
        break
      }
      case 'customer.subscription.deleted': {
        const sub = event.data.object
        // ended by unpaid instalments → the site stays closed; ended by the schedule (last instalment paid) → it is the client's
        await setOrderStatus(sub.id, sub.cancellation_details?.reason === 'payment_failed' ? 'canceled' : 'completed')
        break
      }
      default:
        break
    }
  } catch (err) {
    console.error('stripe webhook:', event.type, err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'handler failed' }, { status: 500 })
  }
  return NextResponse.json({ received: true })
}
