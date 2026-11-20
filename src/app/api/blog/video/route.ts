import { timingSafeEqual } from 'node:crypto'
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createServiceClient } from '@/lib/supabase/server'
import { BLOG_TAG } from '@/features/blog/lib/public-posts'

/**
 * Links an article to its YouTube Short: called by marketizzati-flow right after the upload, or by hand.
 * Auth: "Authorization: Bearer <BLOG_PUBLISH_TOKEN>". The article (every language) then shows the YouTube player.
 */
const schema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(90),
  youtube: z.string().regex(/^[A-Za-z0-9_-]{11}$/),
  title: z.string().max(200).optional(),
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
  if (!parsed.success) return NextResponse.json({ error: 'Invalid body', issues: parsed.error.issues.slice(0, 5) }, { status: 400 })
  const { slug, youtube, title } = parsed.data
  const { error } = await createServiceClient()
    .from('blog_videos')
    .upsert({ slug, youtube_id: youtube, title: title ?? null, updated_at: new Date().toISOString() }, { onConflict: 'slug' })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  revalidateTag(BLOG_TAG, { expire: 0 })
  for (const l of ['it', 'es', 'en']) revalidatePath(`/${l}/blog/${slug}`)
  return NextResponse.json({ ok: true, slug, youtube })
}
