import type { ServiceCopy } from '../content/service-types'
import { LAYOUT } from '../content/layout'
import { getHomeCopy } from '../content/home'
import { ADS, euro, OFFER } from '../lib/offer'
import { pageHref, type Locale } from '../lib/routes'
import type { ServicePageKey } from '../content/service-pages'
import { getAutomationCopy } from '../content/automation'
import { AutomationPricing } from './automation-pricing'
import { PlanCards } from './plan-cards'
import { RelatedPosts } from '@/features/blog/components/related-posts'
import { adsPlans, sitePlans, socialPlans } from '../content/plans'
import { Explainer, SERVICE_EXPLAINERS } from './explainer'
import { IconTile, iconFor } from './icons'
import { BrowserBuild, PhoneChat } from './mockups'
import { Heading, Section, type Tint } from './section'
import { ArrowLink, Button, CheckList, Faq, Rich, WhatsAppButton } from './ui'

const CTA_COPY: Record<Locale, { buy: string; ads: string; quote: string; talk: string; related: string; faq: string; price: string; adsPrice: string; quoteNote: string; quoteTitle: string; quoteItalic: string }> = {
  it: { buy: 'Vedi prezzi e acquista', ads: 'Attiva la gestione', quote: 'Scrivimi su WhatsApp', talk: 'Preferisci parlarne prima?', related: 'Leggi anche', faq: 'Domande frequenti', price: `${euro(OFFER.oneOff, 'it')} o ${euro(OFFER.monthly, 'it')}/mese × ${OFFER.months}`, adsPrice: `${euro(ADS.monthly, 'it')}/mese · ${euro(ADS.launchMonthly, 'it')}/mese per ${ADS.launchMonths} mesi se la prendi col sito`, quoteNote: 'Su preventivo: raccontami cosa ti serve e ti preparo una proposta.', quoteTitle: 'Raccontami cosa ti serve,', quoteItalic: 'ti preparo una proposta.' },
  es: { buy: 'Ver precios y comprar', ads: 'Activar la gestión', quote: 'Escríbeme por WhatsApp', talk: '¿Prefieres hablarlo antes?', related: 'Lee también', faq: 'Preguntas frecuentes', price: `${euro(OFFER.oneOff, 'es')} o ${euro(OFFER.monthly, 'es')}/mes × ${OFFER.months}`, adsPrice: `${euro(ADS.monthly, 'es')}/mes · ${euro(ADS.launchMonthly, 'es')}/mes durante ${ADS.launchMonths} meses si la contratas con la web`, quoteNote: 'Con presupuesto: cuéntame qué necesitas y te preparo una propuesta.', quoteTitle: 'Cuéntame qué necesitas,', quoteItalic: 'te preparo una propuesta.' },
  en: { buy: 'See pricing and buy', ads: 'Start the management', quote: 'Message me on WhatsApp', talk: 'Rather talk first?', related: 'Read next', faq: 'FAQ', price: `${euro(OFFER.oneOff, 'en')} or ${euro(OFFER.monthly, 'en')}/month × ${OFFER.months}`, adsPrice: `${euro(ADS.monthly, 'en')}/month · ${euro(ADS.launchMonthly, 'en')}/month for ${ADS.launchMonths} months with a website`, quoteNote: 'Custom quote: tell me what you need and I will prepare a proposal.', quoteTitle: 'Tell me what you need,', quoteItalic: 'I will prepare a proposal.' },
}

const TINTS: Tint[] = ['peach', 'cream', 'white', 'orange']

const PLANS_LABEL: Record<Locale, string> = { it: 'Vedi piani e prezzi', es: 'Ver planes y precios', en: 'See plans and prices' }

const PLANS_HEADING: Record<Locale, { label: string; title: string; italic: string }> = {
  it: { label: 'Prezzi', title: 'Il prezzo è scritto,', italic: 'paghi qui.' },
  es: { label: 'Precios', title: 'El precio está aquí,', italic: 'pagas aquí.' },
  en: { label: 'Prices', title: 'The price is right here,', italic: 'pay here.' },
}

/** Template of the service, guide and local pages: answer first, blocks, FAQ, then the right call to action. */
export function ServiceView({ copy, locale, pageKey }: { copy: ServiceCopy; locale: Locale; pageKey: ServicePageKey }) {
  const visuals = SERVICE_EXPLAINERS[pageKey]
  const automation = getAutomationCopy(locale)
  const showPlans = pageKey === 'sistemi' || pageKey === 'agenti'
  const planCards =
    pageKey === 'googleAds' || pageKey === 'chatgptAds' ? adsPlans(locale) : pageKey === 'social' || pageKey === 'video' ? socialPlans(locale) : copy.cta === 'buy' ? sitePlans(locale) : null
  const hasHeroVisual = copy.visual !== 'none' || Boolean(visuals.hero)
  const c = CTA_COPY[locale]
  const home = getHomeCopy(locale)
  const labels = Object.fromEntries(LAYOUT[locale].footer.columns.flatMap((col) => col.items).map((i) => [i.key, i.label]))
  const primary =
    copy.cta === 'quote' ? <WhatsAppButton label={c.quote} variant="primary" /> : <Button href={pageHref('prezzi', locale, '#acquista')}>{copy.cta === 'ads' ? c.ads : c.buy}</Button>
  const priceLine = copy.cta === 'buy' ? c.price : copy.cta === 'ads' ? c.adsPrice : c.quoteNote

  return (
    <>
      <Section tint="white" className="pt-24 md:pt-32">
        <div className={`grid items-center gap-8 lg:gap-12 ${hasHeroVisual ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
          <div>
            <Heading as="h1" label={copy.label} title={copy.title} italic={copy.italic} />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              <Rich text={copy.answer} />
            </p>
            <p className="mt-5 text-sm font-semibold text-brand">{priceLine}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {primary}
              {copy.cta !== 'quote' && <WhatsAppButton label={c.talk} />}
              {showPlans && <Button href={pageHref('sistemi', locale, '#piani')} variant="ghost">{PLANS_LABEL[locale]}</Button>}
            </div>
          </div>
          {copy.visual === 'browser' && <BrowserBuild {...home.hero.browser} />}
          {copy.visual === 'phone' && <PhoneChat {...home.services.chat} />}
          {copy.visual === 'none' && visuals.hero && <Explainer kind={visuals.hero} locale={locale} />}
        </div>
      </Section>

      {copy.blocks.map((b, i) => {
        const visual = visuals.blocks[i]
        const heading = <Heading label={b.label} title={b.title} italic={b.italic} intro={b.text ? <Rich text={b.text} /> : undefined} />
        const points = b.points && (
          <div className="rounded-3xl bg-white/85 p-7 ring-1 ring-ink/5">
            <CheckList items={b.points} />
          </div>
        )
        return (
          <Section key={b.title} tint={TINTS[i % TINTS.length]}>
            {visual ? (
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="space-y-8">
                  {heading}
                  {points}
                </div>
                <Explainer kind={visual} locale={locale} city={visuals.city} />
              </div>
            ) : (
              <div className={b.cards ? '' : 'grid gap-10 md:grid-cols-[1fr_1fr] md:items-start'}>
                {heading}
                {points}
              </div>
            )}
          {b.cards && (
            <div className="rail mt-6 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
              {b.cards.map((card) => (
                <div key={card.title} className="rounded-3xl bg-white/85 p-6 ring-1 ring-ink/5">
                  <IconTile icon={iconFor(`${card.title} ${card.text}`)} />
                  <p className="mt-4 text-lg font-bold">{card.title}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    <Rich text={card.text} />
                  </p>
                </div>
              ))}
            </div>
          )}
          </Section>
        )
      })}

      {pageKey === 'sistemi' || pageKey === 'agenti' ? (
        <Section tint="peach" id="piani">
          <Heading label={automation.label} title={automation.title} italic={automation.italic} intro={automation.intro} />
          <div className="mt-6 md:mt-10">
            <AutomationPricing copy={automation} locale={locale} />
          </div>
        </Section>
      ) : (
        planCards && (
          <Section tint="peach" id="piani">
            <Heading label={PLANS_HEADING[locale].label} title={PLANS_HEADING[locale].title} italic={PLANS_HEADING[locale].italic} />
            <div className="mt-6 md:mt-10">
              <PlanCards plans={planCards} locale={locale} />
            </div>
          </Section>
        )
      )}

      <Section tint="cream">
        <Heading title={c.faq} />
        <div className="mt-8">
          <Faq items={copy.faq} />
        </div>
        {copy.related.length > 0 && (
          <div className="mt-6 md:mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">{c.related}</p>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
              {copy.related.map((key) => (
                <li key={key}>
                  <ArrowLink href={pageHref(key, locale)}>{labels[key] ?? key}</ArrowLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <RelatedPosts pageKey={pageKey} locale={locale} />
      </Section>

      <Section tint="orange">
        <div className="text-center">
          <Heading center title={copy.cta === 'quote' ? c.quoteTitle : home.final.title} italic={copy.cta === 'quote' ? c.quoteItalic : home.final.italic} intro={priceLine} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primary}
            {copy.cta !== 'quote' && <WhatsAppButton label={c.talk} />}
          </div>
        </div>
      </Section>
    </>
  )
}
