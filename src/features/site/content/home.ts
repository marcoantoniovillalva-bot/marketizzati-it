import type { Locale } from '../lib/routes'
import { homeIt } from './home-it'
import { homeEs } from './home-es'
import { homeEn } from './home-en'
import type { HomeCopy } from './home-types'
import { FUNNEL } from './home-funnel'

const HOME: Record<Locale, HomeCopy> = { it: homeIt, es: homeEs, en: homeEn }

const META: Record<Locale, { title: string; description: string }> = {
  it: { title: 'Siti web e marketing digitale | Marketizzati', description: 'Realizzazione siti web, Google Ads e intelligenza artificiale per piccole imprese in tutta Italia, anche da remoto.' },
  es: { title: 'Páginas web y marketing digital | Marketizzati', description: 'Diseño web, Google Ads e inteligencia artificial para pequeñas empresas en toda Italia, también a distancia.' },
  en: { title: 'Websites and digital marketing | Marketizzati', description: 'Website design, Google Ads and artificial intelligence for small businesses across Italy, including remote service.' },
}
const HERO: Record<Locale, [string, string]> = { it: ['Siti web e marketing digitale', 'per piccole imprese'], es: ['Páginas web y marketing digital', 'para pequeñas empresas'], en: ['Websites and digital marketing', 'for small businesses'] }
export const getHomeCopy = (locale: Locale): HomeCopy => {
  const copy = HOME[locale] ?? homeIt
  return { ...copy, meta: META[locale], hero: { ...copy.hero, title: HERO[locale][0], italic: HERO[locale][1], lead: FUNNEL[locale].lead }, faq: { ...copy.faq, items: FUNNEL[locale].faq }, problem: { ...copy.problem, text: FUNNEL[locale].method }, steps: { ...copy.steps, items: FUNNEL[locale].process.map((text, i) => ({ title: `${i + 1}`, text })) } }
}
