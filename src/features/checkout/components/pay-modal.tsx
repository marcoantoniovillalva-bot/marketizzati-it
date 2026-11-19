'use client'

import { useCallback, useEffect, useState } from 'react'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { X } from 'lucide-react'
import { WA_LINK } from '@/features/site/lib/links'
import type { Locale } from '@/features/site/lib/routes'
import type { PlanKey } from '../lib/plans'

/** The publishable key is public by design (pk_...); the secret key never leaves the server. */
const KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
let stripePromise: Promise<Stripe | null> | null = null
const getStripeJs = (): Promise<Stripe | null> | null => (KEY ? (stripePromise ??= loadStripe(KEY)) : null)

const TEXT: Record<Locale, { title: string; error: string; wa: string; close: string }> = {
  it: { title: 'Pagamento sicuro', error: 'Il pagamento non si è aperto. Riprova tra poco o scrivimi su WhatsApp.', wa: 'Scrivimi su WhatsApp', close: 'Chiudi' },
  es: { title: 'Pago seguro', error: 'El pago no se ha abierto. Inténtalo de nuevo o escríbeme por WhatsApp.', wa: 'Escríbeme por WhatsApp', close: 'Cerrar' },
  en: { title: 'Secure payment', error: 'The payment did not open. Try again shortly or message me on WhatsApp.', wa: 'Message me on WhatsApp', close: 'Close' },
}

/**
 * Stripe's checkout INSIDE the page: one form for card, name, email, address, tax code and SDI/PEC.
 * Opened by the "Pay" buttons of the plan cards; after paying Stripe takes the buyer to /grazie.
 */
export function PayModal({ plan, adsLaunch = false, locale, onClose }: { plan: PlanKey; adsLaunch?: boolean; locale: Locale; onClose: () => void }) {
  const t = TEXT[locale]
  const [failed, setFailed] = useState(!KEY)

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = overflow }
  }, [onClose])

  const fetchClientSecret = useCallback(async (): Promise<string> => {
    const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan, adsLaunch, locale }) })
    const json = (await res.json().catch(() => ({}))) as { clientSecret?: string }
    if (!res.ok || !json.clientSecret) { setFailed(true); throw new Error('checkout') }
    return json.clientSecret
  }, [plan, adsLaunch, locale])

  const stripe = getStripeJs()
  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={t.title} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/5 bg-white/95 px-5 py-3 backdrop-blur">
          <p className="text-sm font-semibold">🔒 {t.title}</p>
          <button type="button" onClick={onClose} className="rounded-full p-1.5 hover:bg-ink/5" aria-label={t.close}>
            <X size={20} />
          </button>
        </div>
        {failed || !stripe ? (
          <div className="p-8 text-center">
            <p className="text-ink-soft">{t.error}</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white">
              {t.wa}
            </a>
          </div>
        ) : (
          <div className="min-h-[420px] p-2 sm:p-4">
            <EmbeddedCheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        )}
      </div>
    </div>
  )
}
