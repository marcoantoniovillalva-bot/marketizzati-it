import type { FaqItem } from '../components/ui'
import { BASE_URL, BUSINESS, SOCIAL } from './links'
import { OFFER } from './offer'

/** schema.org blocks shared by the public pages (Google rich results, and ChatGPT / Bing reading prices). */
export function professionalService(locale: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${BASE_URL}/#business`,
    name: BUSINESS.name,
    founder: { '@type': 'Person', name: BUSINESS.person },
    url: `${BASE_URL}/${locale}`,
    image: `${BASE_URL}/images/logo-light.png`,
    vatID: `IT${BUSINESS.vat}`,
    address: { '@type': 'PostalAddress', addressLocality: BUSINESS.city, addressRegion: 'PV', addressCountry: 'IT' },
    areaServed: [...BUSINESS.areaServed, 'Italia'].map((name) => ({ '@type': 'Place', name })),
    email: 'marco.villalva@marketizzati.it',
    sameAs: Object.values(SOCIAL),
    priceRange: `${OFFER.monthly}–${OFFER.oneOff} €`,
  }
}

export function websiteOffer(locale: string, name: string, url: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: 'IT',
    url,
    inLanguage: locale,
    offers: [
      { '@type': 'Offer', price: OFFER.oneOff, priceCurrency: 'EUR', url, availability: 'https://schema.org/InStock' },
      {
        '@type': 'Offer',
        url,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: OFFER.monthly,
          priceCurrency: 'EUR',
          billingDuration: OFFER.months,
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
    ],
  }
}

export function faqPage(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/\*\*/g, '') },
    })),
  }
}

export function breadcrumb(locale: string, name: string, url: string): Record<string, unknown> {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/${locale}` },
    { '@type': 'ListItem', position: 2, name, item: url },
  ] }
}
