import type { BlogPost } from '../types'
import { rowToPost } from '../types'
import { risorsePosts } from './it/risorse'
import { guidePosts } from './it/guide'
import { esPosts } from './es'
import { enPosts } from './en'
import { isRetiredPost } from '../retired-posts'
import { getBlogVideos, getPublishedRow, getPublishedRows } from '../lib/public-posts'

/** Adds the YouTube Short of each article (blog_videos), if it has one. */
async function withVideos(posts: BlogPost[]): Promise<BlogPost[]> {
  const videos = await getBlogVideos().catch(() => ({} as Record<string, string>))
  return posts.map((p) => (videos[p.slug] ? { ...p, youtube: videos[p.slug] } : p))
}

const staticPosts: Record<string, BlogPost[]> = {
  it: [
    ...risorsePosts,
    ...guidePosts,
  ],
  // translations (same slug and media as the Italian article)
  en: enPosts,
  es: esPosts,
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
    const rows = (await getPublishedRows(locale)).map(rowToPost)
    const slugs = new Set(rows.map((p) => p.slug))
    return withVideos([...rows, ...fallback.filter((p) => !slugs.has(p.slug))].filter((p) => !isRetiredPost(p.slug)))
  } catch {
    return fallback // DB not configured (local dev)
  }
}

export async function getPostBySlug(locale: string, slug: string): Promise<BlogPost | undefined> {
  try {
    const row = await getPublishedRow(locale, slug)
    if (row) return (await withVideos([rowToPost(row)]))[0]
  } catch {
    // fallback
  }
  const post = getStaticPostBySlug(locale, slug)
  return post ? (await withVideos([post]))[0] : undefined
}

const hasVideo = (p: BlogPost): boolean => Boolean(p.youtube || p.tiktok || p.videoPreview)

/** Blog order: articles with a video first (newest first), then the others (newest first). */
export function sortPosts(posts: BlogPost[]): BlogPost[] {
  return posts.slice().sort((a, b) => Number(hasVideo(b)) - Number(hasVideo(a)) || b.date.localeCompare(a.date))
}
