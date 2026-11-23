import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/features/blog/posts'
import { BASE_URL } from '@/features/site/lib/links'
import { LOCALES, PAGES, pageHref, type PageKey } from '@/features/site/lib/routes'

const MONEY: PageKey[] = ['home', 'prezzi', 'siti', 'artigiani']
const SKIP: PageKey[] = ['grazie']

/** Static pages change only with a deploy: their date is the build date (posts keep their own date). */
const BUILT_AT = new Date()

const xml = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const keys = (Object.keys(PAGES) as PageKey[]).filter((k) => !SKIP.includes(k))
  const pages = keys.flatMap((key) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}${pageHref(key, locale)}`,
      lastModified: BUILT_AT,
      changeFrequency: 'weekly' as const,
      priority: MONEY.includes(key) ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}${pageHref(key, l)}`])) },
    })),
  )

  // Blog: every article in every language it exists in, linked to its translations (hreflang)
  const byLocale = Object.fromEntries(await Promise.all(LOCALES.map(async (l) => [l, await getAllPosts(l)] as const)))
  const has = (l: string, slug: string): boolean => byLocale[l].some((p) => p.slug === slug)
  const blog = LOCALES.flatMap((locale) =>
    byLocale[locale].map((post) => {
      const langs = LOCALES.filter((l) => has(l, post.slug))
      return {
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        // the article's YouTube Short: video sitemap entry so Google links the video to this page (Next does not escape XML)
        ...(post.youtube ? {
          videos: [{
            title: xml(post.title),
            description: xml(post.description),
            thumbnail_loc: `https://i.ytimg.com/vi/${post.youtube}/hqdefault.jpg`,
            player_loc: `https://www.youtube.com/embed/${post.youtube}`,
            publication_date: `${post.date}T00:00:00+00:00`,
          }],
        } : {}),
        ...(langs.length > 1 ? { alternates: { languages: Object.fromEntries(langs.map((l) => [l, `${BASE_URL}/${l}/blog/${post.slug}`])) } } : {}),
      }
    }),
  )

  return [...pages, ...blog]
}
