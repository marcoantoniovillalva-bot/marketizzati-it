'use server'

import { createClient, createServiceClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import type { BlogPostRow, BlogSection } from '../types'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const OPENAI_KEY = process.env.OPENAI_API_KEY!

// ── Image upload (service role — bypasses RLS) ────────────────────────────────

export async function uploadBlogImage(formData: FormData): Promise<string> {
  const file = formData.get('file') as File
  const folder = (formData.get('folder') as string) || 'covers'
  if (!file || !file.size) throw new Error('File mancante')

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const path = `${folder}/${Date.now()}.${ext}`

  const supabase = createServiceClient()
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(path, buffer, { contentType: file.type || 'image/jpeg', upsert: true })

  if (error) throw new Error(error.message)

  const { data: urlData } = supabase.storage.from('blog-images').getPublicUrl(data.path)
  return urlData.publicUrl
}

// ── Public: fetch published posts ─────────────────────────────────────────────

export async function getPublicPosts(locale: string): Promise<BlogPostRow[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .eq('locale', locale)
    .order('date', { ascending: false })
  return data ?? []
}

export async function getPublicPostBySlug(locale: string, slug: string): Promise<BlogPostRow | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .eq('published', true)
    .maybeSingle()
  return data
}

// ── Admin: CRUD ───────────────────────────────────────────────────────────────

export async function getAllPostsAdmin(): Promise<BlogPostRow[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })
  return data ?? []
}

export async function getPostByIdAdmin(id: string): Promise<BlogPostRow | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .maybeSingle()
  return data
}

export async function createPost(payload: {
  title: string
  slug: string
  description: string
  date: string
  read_time: number
  category: string
  keywords: string[]
  image: string
  image_alt: string
  sections: BlogSection[]
  locale: string
}): Promise<{ id: string } | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({ ...payload, published: false })
    .select('id')
    .single()
  if (error) throw new Error(error.message)
  revalidatePath('/[locale]/blog', 'page')
  return data
}

export async function updatePost(id: string, payload: Partial<{
  title: string
  slug: string
  description: string
  date: string
  read_time: number
  category: string
  keywords: string[]
  image: string
  image_alt: string
  sections: BlogSection[]
  published: boolean
  locale: string
}>): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('blog_posts')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/[locale]/blog', 'page')
  revalidatePath('/[locale]/blog/[slug]', 'page')
}

export async function deletePost(id: string): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.from('blog_posts').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/[locale]/blog', 'page')
}

export async function togglePublish(id: string, published: boolean): Promise<void> {
  await updatePost(id, { published })
}

// ── Image upload via Supabase Storage ────────────────────────────────────────

export async function getUploadUrl(postId: string, filename: string): Promise<string> {
  // Returns the public URL pattern — actual upload done client-side
  return `${SUPABASE_URL}/storage/v1/object/public/blog-images/${postId}/${filename}`
}

// ── AI: generate article from keyword ────────────────────────────────────────

export async function generateArticleAI(keyword: string, trends: string[] = []): Promise<{
  title: string
  description: string
  category: string
  keywords: string[]
  sections: BlogSection[]
}> {
  const trendsContext = trends.length
    ? `\nTrending searches in Italy right now: ${trends.slice(0, 5).join(', ')}.`
    : ''

  const prompt = `You are an expert Italian digital marketing content writer. Write a complete SEO-optimized blog article for the keyword "${keyword}".${trendsContext}

Return ONLY valid JSON with this exact structure:
{
  "title": "Article title in Italian (include keyword, max 70 chars)",
  "description": "Meta description in Italian (include keyword, 140-155 chars)",
  "category": "One of: Marketing Digitale | Social Media | Web & Tecnologia | Advertising | SEO | Automazione",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "sections": [
    { "type": "intro", "content": "Opening paragraph 100-120 words" },
    { "type": "h2", "heading": "Section heading", "content": "2-3 paragraphs of detailed content" },
    { "type": "h2", "heading": "Section heading", "content": "..." },
    { "type": "list", "heading": "List heading", "items": ["item1", "item2", "item3", "item4", "item5"] },
    { "type": "h2", "heading": "Section heading", "content": "..." },
    { "type": "callout", "content": "Important tip or warning" },
    { "type": "h2", "heading": "Section heading", "content": "..." },
    { "type": "h2", "heading": "Section heading", "content": "..." },
    { "type": "cta", "heading": "Call to action heading", "content": "Invitation to book free consultation" }
  ]
}

Requirements:
- Write in Italian
- Total content: 1500+ words
- Include the keyword "${keyword}" naturally in title, first paragraph, headings, and throughout
- Be practical and actionable
- Include real data, numbers, prices where relevant
- At least 6 h2 sections plus intro, list, callout, cta
- Return ONLY the JSON, no other text`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_KEY}` },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  })

  const json = await res.json()
  const content = json.choices?.[0]?.message?.content ?? '{}'

  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Invalid AI response')

  return JSON.parse(jsonMatch[0])
}

// ── Trends: Google Trends Italy RSS ──────────────────────────────────────────

export async function getItalyTrends(): Promise<string[]> {
  try {
    const res = await fetch(
      'https://trends.google.com/trends/trendingsearches/daily/rss?geo=IT',
      { next: { revalidate: 3600 } }
    )
    const xml = await res.text()
    const titles = [...xml.matchAll(/<title><!\[CDATA\[([^\]]+)\]\]><\/title>/g)]
      .map(m => m[1])
      .filter(t => t !== 'Daily Search Trends')
      .slice(0, 20)
    return titles
  } catch {
    return []
  }
}
