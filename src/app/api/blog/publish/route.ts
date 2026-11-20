import { timingSafeEqual } from 'node:crypto'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServiceClient } from '@/lib/supabase/server'
import { BLOG_TAG } from '@/features/blog/lib/public-posts'

/**
 * Publishes (or updates / hides) an article without a deploy. Called by scripts/publish-resource.mjs.
 * Auth: "Authorization: Bearer <BLOG_PUBLISH_TOKEN>" (server-only secret, in .env.local and on Vercel).
 * Writes with the service key, then expires the 'blog' cache: list, article, sitemap and llms.txt update at once.
 */
const section = z.object({ type: z.string().min(1) }).passthrough()
const schema = z.object({
  locale: z.enum(['it', 'es', 'en']).default('it'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(90),
  title: z.string().min(3).max(200),
  description: z.string().min(10).max(320),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  readTime: z.number().int().min(1).max(120),
  category: z.string().min(2).max(80),
  keywords: z.array(z.string().max(120)).max(20).default([]),
  image: z.string().url(),
  imageAlt: z.string().max(300).default(''),
  imageTall: z.string().url().optional(),
  videoPreview: z.string().url().optional(),
  tiktok: z.string().url().optional(),
  freeGuide: z.boolean().default(false),
  sections: z.array(section).min(1).max(400),
  published: z.boolean().default(true),
})

function authorized(request: Request): boolean {
  const expected = process.env.BLOG_PUBLISH_TOKEN?.trim()
  const given = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim() ?? ''
  if (!expected || expected.length < 32 || given.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(given), Buffer.from(expected))
}

export async function POST(request: Request): Promise<NextResponse> {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid article', issues: parsed.error.issues.slice(0, 10) }, { status: 400 })
  const p = parsed.data
  const row = {
    locale: p.locale, slug: p.slug, title: p.title, description: p.description, date: p.date, read_time: p.readTime,
    category: p.category, keywords: p.keywords, image: p.image, image_alt: p.imageAlt, image_tall: p.imageTall ?? null,
    video_preview: p.videoPreview ?? null, tiktok: p.tiktok ?? null, free_guide: p.freeGuide, sections: p.sections,
    published: p.published, updated_at: new Date().toISOString(),
  }
  const { error } = await createServiceClient().from('blog_posts').upsert(row, { onConflict: 'locale,slug' })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  revalidateTag(BLOG_TAG, { expire: 0 })
  for (const path of ['/llms.txt', '/llms-full.txt', '/sitemap.xml', `/${p.locale}/blog`, `/${p.locale}/blog/${p.slug}`]) revalidatePath(path)
  return NextResponse.json({ ok: true, url: `https://www.marketizzati.it/${p.locale}/blog/${p.slug}`, published: p.published })
}
