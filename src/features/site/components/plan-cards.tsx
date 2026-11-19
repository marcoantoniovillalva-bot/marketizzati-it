'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { PayModal } from '@/features/checkout/components/pay-modal'
import type { PlanKey } from '@/features/checkout/lib/plans'
import { CAL_LINK } from '../content/automation'
import { PAYMENTS_ENABLED } from '../lib/offer'
import type { Locale } from '../lib/routes'

const BOOK: Record<Locale, string> = { it: 'Richiedi un appuntamento', es: 'Pide una cita', en: 'Book a call' }

export interface PlanCardData {
  title: string
  badge?: string
  /** Number counts up when the card comes into view; a string (e.g. "Su misura") is shown as is. */
  price: number | string
  /** After the price, e.g. "/ mese" or "× 12". */
  suffix?: string
  /** Struck-through reference value, e.g. the market value of the website. */
  was?: string
  note: string
  points: string[]
  /** Stripe plan bought by the primary button. Without it the card only has the "talk" button. */
  pay?: { plan: PlanKey; label: string }
  /** Optional add-on toggled on the card (the ads launch, only for website plans). */
  addon?: string
  talk: { label: string; href: string }
}

const formatter = (locale: Locale) => new Intl.NumberFormat(locale === 'en' ? 'en-IE' : `${locale}-IT`, { useGrouping: 'always' as never })

function Price({ value, locale }: { value: number; locale: Locale }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let done = false
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done) return
      done = true
      const start = performance.now()
      const from = Math.round(value * 0.55)
      const tick = (now: number): void => {
        const t = Math.min(1, (now - start) / 900)
        setShown(Math.round(from + (value - from) * (1 - (1 - t) ** 3)))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return <span ref={ref}>{formatter(locale).format(shown)} €</span>
}

/**
 * Plan cards shared by the prices, websites, ads and automation pages. Featured card with a moving glow
 * border and a light sweep, prices that count up, lift on hover. On phones the cards sit in one
 * horizontal row you swipe (with a peek of the next one), so all options are one gesture away.
 * "Pay" opens Stripe's checkout inside the page; "talk" goes to the calendar or WhatsApp.
 */
export function PlanCards({ plans, locale }: { plans: PlanCardData[]; locale: Locale }) {
  const [paying, setPaying] = useState<{ plan: PlanKey; adsLaunch: boolean } | null>(null)
  const [addons, setAddons] = useState<Record<number, boolean>>({})
  const cols = plans.length >= 3 ? 'md:grid-cols-3' : plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1 md:max-w-md'

  return (
    <>
      <div className={`-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 ${cols}`}>
        {plans.map((plan, i) => {
          const featured = Boolean(plan.badge)
          return (
            <article
              key={plan.title}
              className={`mk-plan group relative flex w-[84%] shrink-0 snap-center flex-col rounded-[1.6rem] p-[2px] transition duration-500 hover:-translate-y-1.5 sm:w-[60%] md:w-auto ${featured ? 'mk-plan-featured' : 'bg-ink/10'}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={`relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-5 sm:p-6 ${featured ? 'bg-ink text-white' : 'bg-white'}`}>
                {featured && <span className="mk-shine pointer-events-none absolute inset-0" aria-hidden />}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold sm:text-lg">{plan.title}</h3>
                  {plan.badge && <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-white">{plan.badge}</span>}
                </div>
                {plan.was && <p className={`mt-3 text-sm line-through decoration-brand decoration-2 ${featured ? 'text-white/50' : 'text-ink-muted'}`}>{plan.was}</p>}
                <p className={`${plan.was ? 'mt-0.5' : 'mt-3'} flex flex-wrap items-baseline gap-x-2`}>
                  <span className="text-[2.4rem] font-bold leading-none tracking-tight sm:text-5xl">
                    {typeof plan.price === 'number' ? <Price value={plan.price} locale={locale} /> : plan.price}
                  </span>
                  {plan.suffix && <span className={featured ? 'text-white/60' : 'text-ink-muted'}>{plan.suffix}</span>}
                </p>
                <p className={`mt-2 text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-ink-soft'}`}>{plan.note}</p>
                <ul className={`mt-4 space-y-2 border-t pt-4 ${featured ? 'border-white/10' : 'border-ink/10'}`}>
                  {plan.points.map((point) => (
                    <li key={point} className={`flex gap-2 text-[14px] leading-snug sm:text-[15px] ${featured ? 'text-white/85' : 'text-ink-soft'}`}>
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" strokeWidth={3} aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                {PAYMENTS_ENABLED && plan.addon && (
                  <label className={`mt-4 flex cursor-pointer items-start gap-2.5 rounded-xl p-3 text-[13px] leading-snug ${featured ? 'bg-white/10' : 'bg-brand-cream'}`}>
                    <input type="checkbox" checked={Boolean(addons[i])} onChange={(e) => setAddons((a) => ({ ...a, [i]: e.target.checked }))} className="mt-0.5 h-4 w-4 shrink-0 accent-[#F2541B]" />
                    <span>{plan.addon}</span>
                  </label>
                )}
                <div className="mt-auto grid gap-2 pt-5">
                  {!PAYMENTS_ENABLED && (
                    <a
                      href={CAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-2xl px-5 py-3.5 text-center text-[15px] font-semibold transition ${featured ? 'bg-brand text-white shadow-[0_12px_30px_-10px_rgba(242,84,27,0.9)] hover:bg-brand-dark' : 'bg-ink text-white hover:bg-ink-soft'}`}
                    >
                      {BOOK[locale]}
                    </a>
                  )}
                  {PAYMENTS_ENABLED && plan.pay && (
                    <button
                      type="button"
                      onClick={() => setPaying({ plan: plan.pay!.plan, adsLaunch: Boolean(addons[i]) })}
                      className={`rounded-2xl px-5 py-3.5 text-[15px] font-semibold transition ${featured ? 'bg-brand text-white shadow-[0_12px_30px_-10px_rgba(242,84,27,0.9)] hover:bg-brand-dark' : 'bg-ink text-white hover:bg-ink-soft'}`}
                    >
                      {plan.pay.label}
                    </button>
                  )}
                  {(PAYMENTS_ENABLED || plan.talk.href !== CAL_LINK) && (
                  <a
                    href={plan.talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-2xl px-5 py-3.5 text-center text-[15px] font-semibold transition ${featured ? 'ring-1 ring-white/25 hover:ring-white/60' : 'ring-1 ring-ink/20 hover:ring-ink/50'}`}
                  >
                    {plan.talk.label}
                  </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {paying && <PayModal plan={paying.plan} adsLaunch={paying.adsLaunch} locale={locale} onClose={() => setPaying(null)} />}
    </>
  )
}
