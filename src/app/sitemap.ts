import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.marketizzati.it'

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
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  )

  return entries
}
