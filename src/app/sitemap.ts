import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/features/blog/posts'
import { BASE_URL } from '@/features/site/lib/links'
import { LOCALES, PAGES, pageHref, type PageKey } from '@/features/site/lib/routes'

const MONEY: PageKey[] = ['home', 'prezzi', 'siti', 'artigiani']
const SKIP: PageKey[] = ['grazie']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const keys = (Object.keys(PAGES) as PageKey[]).filter((k) => !SKIP.includes(k))
  const pages = keys.flatMap((key) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}${pageHref(key, locale)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: MONEY.includes(key) ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}${pageHref(key, l)}`])) },
    })),
  )

  // Blog: Italian articles (Spanish and English are added as they get translated)
  const posts = await getAllPosts('it')
  const blog = posts.map((post) => ({
    url: `${BASE_URL}/it/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...pages, ...blog]
}
