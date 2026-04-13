import type { BlogPost } from '../types'
import { rowToPost } from '../types'
import { costiRealizzazioneSitoWeb } from './it/costi-realizzazione-sito-web'
import { facebookAdsLeadGeneration } from './it/facebook-ads-lead-generation'
import { sceglierAgenziaSocialMedia } from './it/scegliere-agenzia-social-media'

const staticPosts: Record<string, BlogPost[]> = {
  it: [
    sceglierAgenziaSocialMedia,
    facebookAdsLeadGeneration,
    costiRealizzazioneSitoWeb,
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

// Merge DB posts (take priority) with static fallbacks
export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  try {
    const { getPublicPosts } = await import('../actions/blog')
    const rows = await getPublicPosts(locale)
    if (rows.length > 0) return rows.map(rowToPost)
  } catch {
    // DB not ready yet — use static
  }
  return getStaticPosts(locale)
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
