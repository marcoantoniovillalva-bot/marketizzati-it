import type { Metadata } from 'next'
import { BASE_URL } from './links'
import { LOCALES, pageHref, type Locale, type PageKey } from './routes'

export const OG_IMAGE = {
  url: `${BASE_URL}/images/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Marketizzati — siti web, pubblicità e agenti AI per artigiani e piccole imprese',
}

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
    // openGraph here replaces the layout's one, so the share image must be repeated (WhatsApp, Facebook, LinkedIn previews)
    openGraph: { title, description, url, siteName: 'Marketizzati', locale, type: 'website', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  }
}
