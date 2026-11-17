import type { Locale, PageKey } from '../lib/routes'
import { cremaIt, lodiIt, milanoIt, paviaIt } from './pages-locali-it'
import { cremaEs, lodiEs, milanoEs, paviaEs } from './pages-locali-es'
import { cremaEn, lodiEn, milanoEn, paviaEn } from './pages-locali-en'
import { agentiIt, chatgptAdsIt, googleAdsIt, sistemiIt, socialIt, videoIt } from './pages-servizi-it'
import { agentiEs, chatgptAdsEs, googleAdsEs, sistemiEs, socialEs, videoEs } from './pages-servizi-es'
import { agentiEn, chatgptAdsEn, googleAdsEn, sistemiEn, socialEn, videoEn } from './pages-servizi-en'
import { artigianiIt, schedaIt, sitiIt } from './pages-siti-it'
import { artigianiEs, schedaEs, sitiEs } from './pages-siti-es'
import { artigianiEn, schedaEn, sitiEn } from './pages-siti-en'
import type { ServiceCopy } from './service-types'

export type ServicePageKey = 'siti' | 'artigiani' | 'schedaGoogle' | 'googleAds' | 'chatgptAds' | 'agenti' | 'sistemi' | 'social' | 'video' | 'milano' | 'pavia' | 'lodi' | 'crema'

const IT: Record<ServicePageKey, ServiceCopy> = {
  siti: sitiIt, artigiani: artigianiIt, schedaGoogle: schedaIt,
  googleAds: googleAdsIt, chatgptAds: chatgptAdsIt, agenti: agentiIt,
  sistemi: sistemiIt, social: socialIt, video: videoIt,
  milano: milanoIt, pavia: paviaIt, lodi: lodiIt, crema: cremaIt,
}
const ES: Record<ServicePageKey, ServiceCopy> = {
  siti: sitiEs, artigiani: artigianiEs, schedaGoogle: schedaEs,
  googleAds: googleAdsEs, chatgptAds: chatgptAdsEs, agenti: agentiEs,
  sistemi: sistemiEs, social: socialEs, video: videoEs,
  milano: milanoEs, pavia: paviaEs, lodi: lodiEs, crema: cremaEs,
}
const EN: Record<ServicePageKey, ServiceCopy> = {
  siti: sitiEn, artigiani: artigianiEn, schedaGoogle: schedaEn,
  googleAds: googleAdsEn, chatgptAds: chatgptAdsEn, agenti: agentiEn,
  sistemi: sistemiEn, social: socialEn, video: videoEn,
  milano: milanoEn, pavia: paviaEn, lodi: lodiEn, crema: cremaEn,
}
const BY_LOCALE: Record<Locale, Record<ServicePageKey, ServiceCopy>> = { it: IT, es: ES, en: EN }

export function getServiceCopy(key: ServicePageKey, locale: Locale): ServiceCopy {
  return BY_LOCALE[locale]?.[key] ?? IT[key]
}

export const isServicePage = (key: PageKey): key is ServicePageKey => key in IT
