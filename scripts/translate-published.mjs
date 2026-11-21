// Publishes the missing Spanish/English versions of articles already online in Italian (database articles):
//   node scripts/translate-published.mjs                 -> every Italian article without its ES/EN version
//   node scripts/translate-published.mjs <slug> [<slug>] -> only these
// Uses Groq (scripts/lib/translate.mjs). If the daily limit is reached it stops: run it again later, it resumes.
import { existsSync } from 'node:fs'
import path from 'node:path'
import { env, publishPost } from './lib/blog-publish.mjs'
import { site } from './lib/lead-magnet.mjs'
import { translatePost } from './lib/translate.mjs'
import { notifySearchEngines } from './seo/notify.mjs'

const BASE = 'https://www.marketizzati.it'
const rest = async (q) => {
  const res = await fetch(`${env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blog_posts?${q}`, {
    headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` },
  })
  if (!res.ok) throw new Error(`Supabase ${res.status}`)
  return res.json()
}
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const rows = await rest('select=*&locale=eq.it&published=eq.true')
const all = await rest('select=locale,slug')
const has = (lang, slug) => all.some((r) => r.locale === lang && r.slug === slug) || existsSync(path.join(site, `src/features/blog/posts/${lang}/${slug}.ts`))
const toPost = (r) => ({
  slug: r.slug, title: r.title, description: r.description, date: String(r.date).slice(0, 10), readTime: r.read_time, category: r.category,
  keywords: r.keywords ?? [], image: r.image, imageAlt: r.image_alt ?? '', sections: r.sections,
  ...(r.image_tall ? { imageTall: r.image_tall } : {}), ...(r.video_preview ? { videoPreview: r.video_preview } : {}),
  ...(r.tiktok ? { tiktok: r.tiktok } : {}), ...(r.free_guide ? { freeGuide: true } : {}),
})
const urls = []
for (const row of rows.filter((r) => !only.length || only.includes(r.slug))) {
  for (const lang of ['es', 'en']) {
    if (has(lang, row.slug)) continue
    process.stdout.write(`${row.slug} -> ${lang} ... `)
    try {
      const r = await publishPost(BASE, { locale: lang, ...(await translatePost(toPost(row), lang)), published: true })
      urls.push(`/${lang}/blog/${row.slug}`)
      console.log(r.url)
    } catch (e) {
      console.log(`not done: ${e.message}`)
      if (/daily token limit/.test(e.message)) { if (urls.length) await notifySearchEngines(urls); process.exit(1) }
    }
  }
}
if (urls.length) await notifySearchEngines([...urls, '/es/blog', '/en/blog'])
console.log(urls.length ? `done: ${urls.length} translations published` : 'nothing missing')
