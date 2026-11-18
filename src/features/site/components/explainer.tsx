import type { ServicePageKey } from '../content/service-pages'
import { getVisualCopy } from '../content/visuals'
import type { Locale } from '../lib/routes'
import { AdsFlow, AdsPriceChart, AutomationFlow, AutomationShowcase, SocialCalendar, VideoEditor, VoiceCall } from './explainers-services'
import { KeywordPages, MapsCard, OwnershipTimeline, PhoneSite, PriceStack, UploadFlow } from './explainers-site'

export type ExplainerKind = 'price' | 'own' | 'keywords' | 'phone' | 'upload' | 'maps' | 'adsPrice' | 'ads' | 'voice' | 'automation' | 'social' | 'video' | 'showcase'

/** One animated explainer by name, with labels in the page language. */
export function Explainer({ kind, locale, city }: { kind: ExplainerKind; locale: Locale; city?: string }) {
  const v = getVisualCopy(locale)
  switch (kind) {
    case 'price': return <PriceStack v={v} locale={locale} />
    case 'own': return <OwnershipTimeline v={v} locale={locale} />
    case 'keywords': return <KeywordPages v={v} city={city} />
    case 'phone': return <PhoneSite v={v} />
    case 'upload': return <UploadFlow v={v} />
    case 'maps': return <MapsCard v={v} />
    case 'adsPrice': return <AdsPriceChart v={v} locale={locale} />
    case 'ads': return <AdsFlow v={v} />
    case 'voice': return <VoiceCall v={v} />
    case 'automation': return <AutomationFlow v={v} />
    case 'social': return <SocialCalendar v={v} />
    case 'video': return <VideoEditor v={v} />
    case 'showcase': return <AutomationShowcase v={v} />
  }
}

const CITIES: Partial<Record<ServicePageKey, string>> = { milano: 'Milano', pavia: 'Pavia', lodi: 'Lodi', crema: 'Crema' }
const local: (ExplainerKind | null)[] = ['keywords', 'upload']

/** Which explainer goes where on each service page: in the hero (pages without a mockup) and next to each block. */
export const SERVICE_EXPLAINERS: Record<ServicePageKey, { hero?: ExplainerKind; blocks: (ExplainerKind | null)[]; city?: string }> = {
  siti: { blocks: ['keywords', 'phone', 'own'] },
  artigiani: { blocks: [null, 'upload'] },
  schedaGoogle: { hero: 'maps', blocks: [null, null, 'upload'] },
  googleAds: { hero: 'ads', blocks: ['adsPrice', null] },
  chatgptAds: { hero: 'ads', blocks: [null, 'adsPrice', null] },
  agenti: { blocks: ['voice', null] },
  sistemi: { hero: 'automation', blocks: [null, 'showcase'] },
  social: { hero: 'social', blocks: [null] },
  video: { hero: 'video', blocks: [null] },
  milano: { blocks: local, city: CITIES.milano },
  pavia: { blocks: local, city: CITIES.pavia },
  lodi: { blocks: local, city: CITIES.lodi },
  crema: { blocks: local, city: CITIES.crema },
}
