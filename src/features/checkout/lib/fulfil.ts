import 'server-only'
import type Stripe from 'stripe'
import { provisionPortalForUser } from '@/features/portal/lib/portal-data'
import { createServiceClient } from '@/lib/supabase/server'
import { ADS } from '@/features/site/lib/offer'
import { planLines, type CheckoutInput } from './plans'
import { getStripe, siteUrl } from './stripe'

type Plan = CheckoutInput['plan']

/**
 * After a paid checkout: limit the subscription in time (12 site instalments, 3 ads-launch months)
 * with a subscription schedule, so it ends on its own.
 */
export async function scheduleSubscription(subscriptionId: string, plan: Plan, adsLaunch: boolean): Promise<void> {
  const { months, dropAdsAfterLaunch } = planLines({ plan, adsLaunch })
  if (!months) return
  const stripe = getStripe()
  const schedule = await stripe.subscriptionSchedules.create({ from_subscription: subscriptionId })
  const sub = await stripe.subscriptions.retrieve(subscriptionId)
  const items = sub.items.data.map((i) => ({ price: i.price.id, quantity: i.quantity ?? 1, ads: i.price.unit_amount === ADS.launchMonthly * 100 }))
  const all = items.map(({ price, quantity }) => ({ price, quantity }))
  const phases: Stripe.SubscriptionScheduleUpdateParams.Phase[] = dropAdsAfterLaunch
    ? [
        { items: all, start_date: schedule.phases[0].start_date, duration: { interval: 'month', interval_count: ADS.launchMonths } },
        { items: items.filter((i) => !i.ads).map(({ price, quantity }) => ({ price, quantity })), duration: { interval: 'month', interval_count: months - ADS.launchMonths } },
      ]
    : [{ items: all, start_date: schedule.phases[0].start_date, duration: { interval: 'month', interval_count: months } }]
  await stripe.subscriptionSchedules.update(schedule.id, { end_behavior: 'cancel', phases })
}

/** Creates (or finds) the client account, opens the portal with the onboarding tasks, stores the order. */
export async function fulfilCheckout(session: Stripe.Checkout.Session): Promise<void> {
  const md = session.metadata ?? {}
  const email = (session.customer_details?.email ?? session.customer_email ?? '').toLowerCase()
  if (!email) throw new Error('checkout without email')
  const plan = md.plan as Plan
  const adsLaunch = md.ads_launch === 'true'
  const subscriptionId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id ?? null
  const service = createServiceClient()

  const { data: existing } = await service.from('site_orders').select('id').eq('stripe_session_id', session.id).maybeSingle()
  if (existing) return // Stripe retries webhooks: do the work once

  const { data: list } = await service.auth.admin.listUsers()
  let user = list?.users.find((u) => u.email?.toLowerCase() === email) ?? null
  if (!user) {
    const invite = await service.auth.admin.inviteUserByEmail(email, {
      data: { full_name: md.full_name },
      redirectTo: `${siteUrl()}/${md.locale || 'it'}/login`,
    })
    if (invite.error || !invite.data.user) throw new Error(invite.error?.message || 'invite failed')
    user = invite.data.user
  }

  await service.from('profiles').upsert({ id: user.id, full_name: md.full_name, phone: md.phone, role: 'client', language: md.locale || 'it', updated_at: new Date().toISOString() })
  const site = plan !== 'ads_only'
  await provisionPortalForUser(service, user.id, {
    workspace: {
      business_name: md.business_name,
      offer_name: site ? 'Sito web Marketizzati' : 'Gestione pubblicità Google + ChatGPT',
      current_stage: 'Pagamento ricevuto: onboarding',
      primary_channel: site ? 'Sito web + scheda Google' : 'Google Ads + ChatGPT Ads',
      notes: `Ordine dal sito (${plan}${adsLaunch ? ' + avvio pubblicità' : ''}). Fatturazione: ${md.tax_code} · ${md.invoice_channel}.`,
      workspace_health: 30,
    },
    tasks: site
      ? [
          { step_code: 'zero-point', title: 'Carica logo e foto dei tuoi lavori', description: 'Se hai già un logo caricalo; se no lo creiamo noi. Servono anche 5–10 foto dei lavori e una tua foto.', due_label: 'Subito' },
          { step_code: 'zero-point', title: 'Scrivi servizi, zone e orari', description: 'I servizi che fai, le città dove lavori e gli orari: diventano i testi del sito e della scheda Google.', due_label: 'Subito' },
          { step_code: 'technology', title: 'Prenota la call di 20 minuti', description: 'Scegli un orario su WhatsApp: rivediamo insieme il materiale e partiamo.', due_label: 'Questa settimana' },
        ]
      : [{ step_code: 'zero-point', title: 'Dacci accesso agli account pubblicitari', description: 'Ti guidiamo noi passo passo: Google Ads e ChatGPT Ads restano intestati a te.', due_label: 'Subito' }],
  })

  if (subscriptionId) await scheduleSubscription(subscriptionId, plan, adsLaunch)

  await service.from('site_orders').insert({
    user_id: user.id,
    email,
    full_name: md.full_name,
    business_name: md.business_name,
    tax_code: md.tax_code,
    invoice_channel: md.invoice_channel,
    phone: md.phone,
    plan,
    ads_launch: adsLaunch,
    status: subscriptionId ? 'active' : 'completed',
    stripe_session_id: session.id,
    stripe_customer_id: typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null,
    stripe_subscription_id: subscriptionId,
    terms_version: md.terms_version,
    terms_accepted_at: md.terms_accepted_at,
  })
}

/** Instalments stop → the site is suspended; paid again → active; schedule finished → the site is the client's. */
export async function setOrderStatus(subscriptionId: string, status: 'active' | 'suspended' | 'completed' | 'canceled'): Promise<void> {
  await createServiceClient().from('site_orders').update({ status, updated_at: new Date().toISOString() }).eq('stripe_subscription_id', subscriptionId)
}
