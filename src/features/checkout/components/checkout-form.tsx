'use client'

import { useState, type FormEvent } from 'react'
import { ADS, euro, OFFER } from '@/features/site/lib/offer'
import { WA_LINK } from '@/features/site/lib/links'
import type { Locale } from '@/features/site/lib/routes'
import type { CheckoutInput } from '../lib/plans'

export interface CheckoutCopy {
  planTitle: string
  plans: Record<CheckoutInput['plan'], { title: string; note: string }>
  adsLaunch: string
  fields: { fullName: string; businessName: string; taxCode: string; invoiceChannel: string; email: string; phone: string }
  /** Text with a {link} placeholder for the terms page. */
  accept: string
  termsLabel: string
  submit: string
  loading: string
  error: string
  talk: string
  secure: string
}

const input = 'w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

/** Plan choice, billing data and the mandatory terms checkbox, then off to Stripe Checkout. */
export function CheckoutForm({ copy, locale, termsHref }: { copy: CheckoutCopy; locale: Locale; termsHref: string }) {
  const [plan, setPlan] = useState<CheckoutInput['plan']>('site_oneoff')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const prices: Record<CheckoutInput['plan'], string> = {
    site_oneoff: euro(OFFER.oneOff, locale),
    site_monthly: `${euro(OFFER.monthly, locale)} × ${OFFER.months}`,
    ads_only: `${euro(ADS.monthly, locale)}/${locale === 'en' ? 'mo' : 'mese'}`,
  }

  const submit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('loading')
    const body = {
      plan,
      adsLaunch: data.get('adsLaunch') === 'on',
      fullName: data.get('fullName'),
      businessName: data.get('businessName'),
      taxCode: data.get('taxCode'),
      invoiceChannel: data.get('invoiceChannel'),
      email: data.get('email'),
      phone: data.get('phone'),
      locale,
      acceptTerms: data.get('acceptTerms') === 'on',
    }
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const json = (await res.json()) as { url?: string }
      if (!res.ok || !json.url) throw new Error('checkout')
      window.location.href = json.url
    } catch {
      setStatus('error')
    }
  }

  const [before, after] = copy.accept.split('{link}')
  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(22,18,15,0.35)] ring-1 ring-ink/5 md:p-9">
      <fieldset>
        <legend className="mb-4 text-lg font-bold">{copy.planTitle}</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {(Object.keys(copy.plans) as CheckoutInput['plan'][]).map((key) => (
            <label key={key} className={`cursor-pointer rounded-2xl border-2 p-4 transition ${plan === key ? 'border-brand bg-brand-cream' : 'border-ink/10 hover:border-ink/25'}`}>
              <input type="radio" name="plan" value={key} checked={plan === key} onChange={() => setPlan(key)} className="sr-only" />
              <span className="block text-sm font-semibold text-ink-soft">{copy.plans[key].title}</span>
              <span className="mt-1 block text-2xl font-bold">{prices[key]}</span>
              <span className="mt-1 block text-xs leading-snug text-ink-muted">{copy.plans[key].note}</span>
            </label>
          ))}
        </div>
        {plan !== 'ads_only' && (
          <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl bg-brand-cream p-4 text-sm leading-relaxed">
            <input type="checkbox" name="adsLaunch" className="mt-1 h-4 w-4 accent-[#F2541B]" />
            <span>{copy.adsLaunch}</span>
          </label>
        )}
      </fieldset>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {(
          [
            ['fullName', 'text', 'name'],
            ['businessName', 'text', 'organization'],
            ['taxCode', 'text', 'off'],
            ['invoiceChannel', 'text', 'off'],
            ['email', 'email', 'email'],
            ['phone', 'tel', 'tel'],
          ] as const
        ).map(([name, type, autoComplete]) => (
          <label key={name} className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">{copy.fields[name]}</span>
            <input name={name} type={type} autoComplete={autoComplete} required className={input} />
          </label>
        ))}
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
        <input type="checkbox" name="acceptTerms" required className="mt-1 h-4 w-4 accent-[#F2541B]" />
        <span>
          {before}
          <a href={termsHref} target="_blank" className="font-semibold text-brand underline">
            {copy.termsLabel}
          </a>
          {after}
        </span>
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'loading'} className="rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-12px_rgba(242,84,27,0.8)] transition hover:bg-brand-dark disabled:opacity-60">
          {status === 'loading' ? copy.loading : copy.submit}
        </button>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink-soft underline">
          {copy.talk}
        </a>
      </div>
      {status === 'error' && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{copy.error}</p>}
      <p className="mt-4 text-xs text-ink-muted">{copy.secure}</p>
    </form>
  )
}
