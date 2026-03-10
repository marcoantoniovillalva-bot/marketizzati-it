import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketizzati.com'

const pages = [
  '',
  '/servizi',
  '/metodo',
  '/chi-siamo',
  '/consulenza',
  '/blog',
  '/privacy',
  '/cookie',
  '/termini',
]

const locales = ['it', 'en', 'es']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === 'it' ? '' : `/${locale}`}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}${l === 'it' ? '' : `/${l}`}${page}`])
        ),
      },
    }))
  )

  return entries
}
