import { CheckoutForm } from '@/features/checkout/components/checkout-form'
import type { HomeCopy } from '../content/home-types'
import type { PricesCopy } from '../content/prezzi-it'
import { euro, OFFER, totalInstalments } from '../lib/offer'
import { pageHref, type Locale } from '../lib/routes'
import { getVisualCopy } from '../content/visuals'
import { AdsFlow, AdsPriceChart } from './explainers-services'
import { OwnershipTimeline, PriceStack } from './explainers-site'
import { Heading, Section } from './section'
import { CheckList, Faq, Rich } from './ui'

/** The price page: plain-text answer first (Google, ChatGPT), then comparison, ads add-on and checkout. */
export function PrezziView({ copy, offer, locale }: { copy: PricesCopy; offer: HomeCopy['offer']; locale: Locale }) {
  const v = getVisualCopy(locale)
  return (
    <>
      <Section tint="white" className="pt-24 md:pt-32">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading as="h1" label={copy.label} title={copy.title} italic={copy.italic} />
            <p className="mt-8 max-w-3xl text-xl leading-relaxed">
              <Rich text={copy.answer} />
            </p>
          </div>
          <PriceStack v={v} locale={locale} />
        </div>
        <div className="mt-6 md:mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-brand-cream p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">{offer.marketLabel}</p>
            <p className="mt-1 text-3xl font-bold text-ink-muted line-through decoration-brand decoration-2">{euro(OFFER.marketValue, locale)}</p>
            <p className="mt-1 text-sm text-ink-muted">{offer.marketDetail}</p>
          </div>
          <div className="rounded-3xl bg-ink p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-soft">{offer.oneOff.title}</p>
            <p className="mt-1 text-5xl font-bold">{euro(OFFER.oneOff, locale)}</p>
            <p className="mt-1 text-white/70">{offer.oneOff.note}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">{offer.monthly.title}</p>
            <p className="mt-1 text-5xl font-bold">
              {euro(OFFER.monthly, locale)}
              <span className="text-lg text-ink-muted"> × {OFFER.months}</span>
            </p>
            <p className="mt-1 text-ink-soft">
              {offer.monthly.note} · {euro(totalInstalments, locale)}
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-10 grid gap-8 rounded-3xl bg-white/80 p-7 ring-1 ring-ink/5 md:grid-cols-2 md:p-9">
          <div>
            <p className="mb-5 text-lg font-bold">{offer.includedTitle}</p>
            <CheckList items={offer.included} />
          </div>
          <div className="space-y-3 self-end text-ink-soft">
            <p className="rounded-2xl bg-brand-cream p-4 text-ink">
              <Rich text={offer.ownership} />
            </p>
            <p className="text-sm">{offer.hosting}</p>
            <p className="text-sm">{offer.stamp}</p>
          </div>
        </div>
        <div className="mt-8">
          <OwnershipTimeline v={v} locale={locale} />
        </div>
      </Section>

      <Section tint="peach">
        <Heading label={copy.compare.label} title={copy.compare.title} italic={copy.compare.italic} />
        <div className="mt-6 md:mt-10 overflow-x-auto rounded-3xl bg-white/90 ring-1 ring-ink/5">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="p-5" />
                {copy.compare.columns.map((c, i) => (
                  <th key={c} className={`p-5 text-sm font-bold ${i === 0 ? 'text-brand' : 'text-ink-soft'}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.compare.rows.map((row) => (
                <tr key={row.label} className="border-b border-ink/5 last:border-0">
                  <th className="p-5 text-sm font-semibold">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={`p-5 text-sm ${i === 0 ? 'bg-brand-cream/70 font-semibold' : 'text-ink-soft'}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-muted">{copy.compare.note}</p>
      </Section>

      <Section tint="cream">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Heading label={copy.ads.label} title={copy.ads.title} italic={copy.ads.italic} intro={copy.ads.text} />
          <div className="rounded-3xl bg-white/85 p-7 ring-1 ring-ink/5">
            <CheckList items={copy.ads.points} />
          </div>
        </div>
        <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 md:items-center">
          <AdsPriceChart v={v} locale={locale} />
          <AdsFlow v={v} />
        </div>
      </Section>

      <Section tint="orange" id="acquista">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading label={copy.buy.label} title={copy.buy.title} italic={copy.buy.italic} intro={copy.buy.intro} />
          <CheckoutForm copy={copy.checkout} locale={locale} termsHref={pageHref('condizioni', locale)} />
        </div>
      </Section>

      <Section tint="white">
        <Heading label={copy.faq.label} title={copy.faq.title} italic={copy.faq.italic} />
        <div className="mt-6 md:mt-10">
          <Faq items={copy.faq.items} />
        </div>
      </Section>
    </>
  )
}
