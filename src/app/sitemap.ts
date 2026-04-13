import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/features/blog/posts'

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticEntries = pages.flatMap((page) =>
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

  // Blog posts (Italian only for now)
  const itPosts = await getAllPosts('it')
  const blogEntries = itPosts.map((post) => ({
    url: `${baseUrl}/it/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
