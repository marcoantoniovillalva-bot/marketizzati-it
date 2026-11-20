import { createClient } from '@supabase/supabase-js'
import { unstable_cache } from 'next/cache'
import type { BlogPostRow } from '../types'

/**
 * Published articles from Supabase, read without cookies so blog pages, sitemap and llms.txt stay static
 * and fast. Cached under the 'blog' tag: /api/blog/publish expires it, so a new article is live in seconds.
 */
export const BLOG_TAG = 'blog'

function anonClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Supabase is not configured')
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}

export const getPublishedRows = unstable_cache(
  async (locale: string): Promise<BlogPostRow[]> => {
    const { data, error } = await anonClient()
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .eq('locale', locale)
      .order('date', { ascending: false })
    if (error) throw new Error(error.message)
    return (data ?? []) as BlogPostRow[]
  },
  ['blog-published-rows'],
  { tags: [BLOG_TAG], revalidate: 3600 },
)

export async function getPublishedRow(locale: string, slug: string): Promise<BlogPostRow | null> {
  return (await getPublishedRows(locale)).find((row) => row.slug === slug) ?? null
}
