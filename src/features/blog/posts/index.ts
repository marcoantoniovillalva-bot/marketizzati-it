import type { BlogPost } from '../types'
import { rowToPost } from '../types'
import { risorsePosts } from './it/risorse'
import { guidePosts } from './it/guide'

const staticPosts: Record<string, BlogPost[]> = {
  it: [
    ...risorsePosts,
    ...guidePosts,
  ],
  en: [],
  es: [],
}

export function getStaticPosts(locale: string): BlogPost[] {
  return staticPosts[locale] ?? staticPosts.it
}

export function getStaticPostBySlug(locale: string, slug: string): BlogPost | undefined {
  return getStaticPosts(locale).find((p) => p.slug === slug)
}

// DB posts (written in the portal editor) win over static ones with the same slug; both are listed
export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  const fallback = getStaticPosts(locale)
  try {
    const { getPublicPosts } = await import('../actions/blog')
    const rows = (await getPublicPosts(locale)).map(rowToPost)
    const slugs = new Set(rows.map((p) => p.slug))
    return [...rows, ...fallback.filter((p) => !slugs.has(p.slug))]
  } catch {
    return fallback // DB not configured (local dev)
  }
}

export async function getPostBySlug(locale: string, slug: string): Promise<BlogPost | undefined> {
  try {
    const { getPublicPostBySlug } = await import('../actions/blog')
    const row = await getPublicPostBySlug(locale, slug)
    if (row) return rowToPost(row)
  } catch {
    // fallback
  }
  return getStaticPostBySlug(locale, slug)
}

const hasVideo = (p: BlogPost): boolean => Boolean(p.tiktok || p.videoPreview)

/** Blog order: articles with a video first (newest first), then the others (newest first). */
export function sortPosts(posts: BlogPost[]): BlogPost[] {
  return posts.slice().sort((a, b) => Number(hasVideo(b)) - Number(hasVideo(a)) || b.date.localeCompare(a.date))
}
