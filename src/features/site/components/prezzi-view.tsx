import type { HomeCopy } from '../content/home-types'
import type { PricesCopy } from '../content/prezzi-it'
import { getAutomationCopy } from '../content/automation'
import { adsPlans, sitePlans, socialPlans } from '../content/plans'
import { getVisualCopy } from '../content/visuals'
import { euro, OFFER } from '../lib/offer'
import type { Locale } from '../lib/routes'
import { AutomationPricing } from './automation-pricing'
import { AdsPriceChart } from './explainers-services'
import { OwnershipTimeline, PriceStack } from './explainers-site'
import { PlanCards } from './plan-cards'
import { Heading, Section } from './section'
import { CheckList, Faq, Rich } from './ui'

const MORE: Record<Locale, { label: string; title: string; italic: string; intro: string }> = {
  it: { label: 'Social e video', title: 'Contenuti e social,', italic: 'su preventivo.', intro: 'Dipende da quanti contenuti e quanti canali: raccontami cosa ti serve e ti preparo una proposta.' },
  es: { label: 'Redes y vídeo', title: 'Contenidos y redes,', italic: 'con presupuesto.', intro: 'Depende de cuántos contenidos y canales: cuéntame qué necesitas y te preparo una propuesta.' },
  en: { label: 'Social and video', title: 'Content and social,', italic: 'custom quote.', intro: 'It depends on how much content and how many channels: tell me what you need and I will prepare a proposal.' },
}

/**
 * Every price in one page: website (with pay-inside-the-page), ads management, automation plans and social.
 * Plain-text answer first for Google and ChatGPT; cards in one swipe row on phones.
 */
export function PrezziView({ copy, offer, locale }: { copy: PricesCopy; offer: HomeCopy['offer']; locale: Locale }) {
  const v = getVisualCopy(locale)
  const automation = getAutomationCopy(locale)
  const more = MORE[locale]
  return (
    <>
      <Section tint="white" className="pt-24 md:pt-32" id="acquista">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <Heading as="h1" label={copy.label} title={copy.title} italic={copy.italic} />
            <p className="mt-5 max-w-3xl text-base leading-relaxed sm:text-xl md:mt-8">
              <Rich text={copy.answer} />
            </p>
          </div>
          <div className="hidden lg:block">
            <PriceStack v={v} locale={locale} />
          </div>
        </div>
        <div className="mt-6 md:mt-10">
          <PlanCards plans={sitePlans(locale)} locale={locale} />
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          {offer.marketLabel}: {euro(OFFER.marketValue, locale)} ({offer.marketDetail}). {offer.hosting} {offer.stamp}
        </p>
      </Section>

      <Section tint="cream">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-lg font-bold">{offer.includedTitle}</p>
            <CheckList items={offer.included} />
            <p className="mt-5 rounded-2xl bg-white p-4 text-ink">
              <Rich text={offer.ownership} />
            </p>
          </div>
          <OwnershipTimeline v={v} locale={locale} />
        </div>
      </Section>

      <Section tint="peach" id="pubblicita">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Heading label={copy.ads.label} title={copy.ads.title} italic={copy.ads.italic} intro={copy.ads.text} />
            <div className="mt-6">
              <PlanCards plans={adsPlans(locale)} locale={locale} />
            </div>
          </div>
          <AdsPriceChart v={v} locale={locale} />
        </div>
      </Section>

      <Section tint="orange" id="automazioni">
        <Heading label={automation.label} title={automation.title} italic={automation.italic} intro={automation.intro} />
        <div className="mt-6 md:mt-10">
          <AutomationPricing copy={automation} locale={locale} />
        </div>
      </Section>

      <Section tint="cream" id="social">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Heading label={more.label} title={more.title} italic={more.italic} intro={more.intro} />
          <PlanCards plans={socialPlans(locale)} locale={locale} />
        </div>
      </Section>

      <Section tint="peach">
        <Heading label={copy.compare.label} title={copy.compare.title} italic={copy.compare.italic} />
        <div className="mt-6 overflow-x-auto rounded-3xl bg-white/90 ring-1 ring-ink/5 md:mt-10">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="p-3 sm:p-5" />
                {copy.compare.columns.map((c, i) => (
                  <th key={c} className={`p-3 text-sm font-bold sm:p-5 ${i === 0 ? 'text-brand' : 'text-ink-soft'}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.compare.rows.map((row) => (
                <tr key={row.label} className="border-b border-ink/5 last:border-0">
                  <th className="p-3 text-sm font-semibold sm:p-5">{row.label}</th>
                  {row.values.map((val, i) => (
                    <td key={i} className={`p-3 text-sm sm:p-5 ${i === 0 ? 'bg-brand-cream/70 font-semibold' : 'text-ink-soft'}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-muted">{copy.compare.note}</p>
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
