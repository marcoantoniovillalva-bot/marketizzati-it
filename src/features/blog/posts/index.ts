import type { BlogPost } from '../types'
import { costiRealizzazioneSitoWeb } from './it/costi-realizzazione-sito-web'
import { facebookAdsLeadGeneration } from './it/facebook-ads-lead-generation'
import { sceglierAgenziaSocialMedia } from './it/scegliere-agenzia-social-media'

const postsByLocale: Record<string, BlogPost[]> = {
  it: [
    sceglierAgenziaSocialMedia,
    facebookAdsLeadGeneration,
    costiRealizzazioneSitoWeb,
  ],
  en: [],
  es: [],
}

export function getAllPosts(locale: string): BlogPost[] {
  return postsByLocale[locale] ?? postsByLocale.it
}

export function getPostBySlug(locale: string, slug: string): BlogPost | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug)
}
