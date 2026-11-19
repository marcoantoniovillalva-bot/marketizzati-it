import type { Metadata } from 'next'
import { BASE_URL } from './links'
import { LOCALES, pageHref, type Locale, type PageKey } from './routes'

/** Title, description, canonical and hreflang for a public page. */
export function pageMetadata(key: PageKey, locale: Locale, title: string, description: string): Metadata {
  const url = `${BASE_URL}${pageHref(key, locale)}`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}${pageHref(key, l)}`])),
        'x-default': `${BASE_URL}${pageHref(key, 'it')}`,
      },
    },
    openGraph: { title, description, url, siteName: 'Marketizzati', locale, type: 'website' },
  }
}
