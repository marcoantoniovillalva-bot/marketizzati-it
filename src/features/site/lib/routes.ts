/**
 * Public pages and their slug in each language. The app folders use the Italian slug; Spanish and English
 * slugs are rewritten to it in src/proxy.ts. Links are always built with `pageHref`.
 */
export type Locale = 'it' | 'es' | 'en'

export const LOCALES: Locale[] = ['it', 'es', 'en']

export const PAGES = {
  home: { it: '', es: '', en: '' },
  prezzi: { it: 'quanto-costa-un-sito-web', es: 'cuanto-cuesta-una-pagina-web', en: 'how-much-does-a-website-cost' },
  siti: { it: 'realizzazione-siti-web', es: 'diseno-de-paginas-web', en: 'website-design' },
  artigiani: { it: 'sito-web-per-artigiani', es: 'pagina-web-para-artesanos', en: 'website-for-tradespeople' },
  schedaGoogle: { it: 'scheda-google-business-profile', es: 'ficha-google-business-profile', en: 'google-business-profile' },
  googleAds: { it: 'pubblicita-google-ads', es: 'publicidad-google-ads', en: 'google-ads-management' },
  chatgptAds: { it: 'chatgpt-ads', es: 'chatgpt-ads', en: 'chatgpt-ads' },
  agenti: { it: 'agenti-ai-whatsapp', es: 'agentes-ia-whatsapp', en: 'ai-whatsapp-agents' },
  sistemi: { it: 'sistemi-automatizzati', es: 'sistemas-automatizados', en: 'custom-automation' },
  social: { it: 'social-media-manager', es: 'gestion-redes-sociales', en: 'social-media-management' },
  video: { it: 'contenuti-video', es: 'contenido-video', en: 'video-content' },
  progetti: { it: 'progetti', es: 'proyectos', en: 'projects' },
  chiSono: { it: 'chi-sono', es: 'sobre-mi', en: 'about' },
  blog: { it: 'blog', es: 'blog', en: 'blog' },
  contatti: { it: 'contatti', es: 'contacto', en: 'contact' },
  milano: { it: 'web-agency-milano', es: 'agencia-web-milan', en: 'web-agency-milan' },
  pavia: { it: 'web-agency-pavia', es: 'agencia-web-pavia', en: 'web-agency-pavia' },
  lodi: { it: 'web-agency-lodi', es: 'agencia-web-lodi', en: 'web-agency-lodi' },
  crema: { it: 'web-agency-crema', es: 'agencia-web-crema', en: 'web-agency-crema' },
  condizioni: { it: 'condizioni-sito-web', es: 'condiciones-de-venta', en: 'terms-of-sale' },
  grazie: { it: 'grazie', es: 'gracias', en: 'thank-you' },
  privacy: { it: 'privacy', es: 'privacy', en: 'privacy' },
  cookie: { it: 'cookie', es: 'cookie', en: 'cookie' },
} as const satisfies Record<string, Record<Locale, string>>

export type PageKey = keyof typeof PAGES

export const isLocale = (value: string): value is Locale => (LOCALES as string[]).includes(value)

export function pageHref(key: PageKey, locale: string, hash = ''): string {
  const l: Locale = isLocale(locale) ? locale : 'it'
  const slug = PAGES[key][l]
  return `/${l}${slug ? `/${slug}` : ''}${hash}`
}

/** For the proxy: the Italian (folder) slug behind a localized one, or null when nothing to rewrite. */
export function internalSlug(locale: Locale, slug: string): string | null {
  if (locale === 'it') return null
  for (const page of Object.values(PAGES)) {
    if (page[locale] === slug && page.it !== slug) return page.it
  }
  return null
}

/** The same page in another language (language switcher, hreflang). */
export function translatePath(pathname: string, to: Locale): string {
  const [, from, first = '', ...rest] = pathname.split('/')
  if (!isLocale(from)) return `/${to}`
  const entry = Object.values(PAGES).find((p) => p[from] === first)
  const slug = entry ? entry[to] : first
  return `/${to}${slug ? `/${slug}` : ''}${rest.length ? `/${rest.join('/')}` : ''}`
}
