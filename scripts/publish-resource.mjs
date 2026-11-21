// One command from a finished lead magnet to a live article:
//   node scripts/publish-resource.mjs --folder video-23-ahrefs --slug seo-gratis-strumenti-ia \
//     --title "SEO GRATIS|CON L'IA!" --category "Scheda Google e SEO locale" [--tiktok <url>] [--skip-covers] [--draft] [--no-translate] [--git [--no-push]]
// 1. imports lead-magnets/<folder> (content.json, slides, PDF -> /guide/<slug>.pdf) as a free-guide article
// 2. covers: renders/covers/video-N-cover-*.jpg -> AI scene (Replicate) -> wide + tall cover with the title
// 3. 5-second preview from renders/talking-head/<folder>-social.mp4
// 4. DEFAULT (no git, no deploy): uploads slides, PDF, covers and preview to Supabase (bucket blog-media), sends the
//    article to /api/blog/publish (live in seconds, also in sitemap and llms.txt), checks the URL answers 200,
//    tells Google (sitemap) and Bing/Copilot/ChatGPT search (IndexNow), prints the URL. --draft saves it unpublished.
//    --git: the old way (article as a .ts file, commit, push, Vercel deploy).
// Re-running it for the same folder updates the article (keeps the TikTok link if not passed again).
import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { buildPost, postFile, postsDir, readSlugs, renderer, site, slugify } from './lib/lead-magnet.mjs'
import { notifySearchEngines } from './seo/notify.mjs'
import { env, mediaUrl, publishPost, rewriteUrls, uploadDir, uploadFile } from './lib/blog-publish.mjs'
import { translatePost } from './lib/translate.mjs'

const CATEGORIES = ['Siti web', 'Scheda Google e SEO locale', 'Pubblicità Google e ChatGPT', 'AI e automazioni', 'Contenuti e social']
const BASE = 'https://www.marketizzati.it'

const argv = process.argv.slice(2)
const flag = (name) => argv.includes(`--${name}`)
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : undefined }
const folder = opt('folder')
if (!folder) throw new Error('Missing --folder (e.g. video-23-ahrefs)')
const category = opt('category') ?? 'AI e automazioni'
if (!CATEGORIES.includes(category)) throw new Error(`--category must be one of: ${CATEGORIES.join(', ')}`)
const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { cwd: site, stdio: 'inherit', shell: process.platform === 'win32' && cmd === 'npx', ...opts })
const out = (cmd, args) => execFileSync(cmd, args, { cwd: site, encoding: 'utf8' }).trim()
const step = (text) => console.log(`\n▶ ${text}`)
const useGit = flag('git')

/** The article already online (database), to keep its date and TikTok link when re-publishing. */
async function existingRow(slug) {
  const res = await fetch(`${env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blog_posts?select=date,tiktok&locale=eq.it&slug=eq.${slug}`, {
    headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}` },
  }).catch(() => null)
  return res?.ok ? (await res.json())[0] ?? null : null
}

// --- 1. article ---------------------------------------------------------------------------------------
const slugs = await readSlugs()
const content = JSON.parse(readFileSync(path.join(renderer, 'lead-magnets', folder, 'content.json'), 'utf8'))
const slug = opt('slug') ?? slugs[folder] ?? slugify(content.title)
if (slugs[folder] !== slug) {
  slugs[folder] = slug
  writeFileSync(path.join(site, 'scripts/lead-magnet-slugs.json'), JSON.stringify(slugs, null, 2) + '\n')
}
step(`article ${slug}`)
const file = path.join(postsDir, `${slug}.ts`)
const previous = existsSync(file) ? readFileSync(file, 'utf8') : ''
const online = useGit ? null : await existingRow(slug)
const tiktok = opt('tiktok') ?? online?.tiktok ?? /"tiktok": "([^"]+)"/.exec(previous)?.[1]
const { post, coverSlide } = await buildPost(folder, slug)
const coverDir = 'public/images/blog/covers'
const article = {
  ...post,
  date: online?.date?.slice(0, 10) ?? /"date": "([^"]+)"/.exec(previous)?.[1] ?? new Date().toLocaleDateString('sv-SE'),
  category,
  freeGuide: true,
  image: `/images/blog/covers/${slug}-wide.webp`,
  imageTall: `/images/blog/covers/${slug}-tall.webp`,
  videoPreview: `/videos/preview/${slug}.mp4`,
  ...(tiktok ? { tiktok } : {}),
  imageAlt: `${post.title} — guida gratuita`,
  // the first slide (the guide's cover) opens the article, the YouTube-style cover is for the cards
  sections: [{ type: 'image', url: coverSlide, alt: `${post.title} — guida gratuita` }, ...post.sections],
}
if (useGit) writeFileSync(file, postFile(article))

// index: newest first, keeps every existing import (git mode only)
const indexFile = path.join(postsDir, 'index.ts')
const listed = [...readFileSync(indexFile, 'utf8').matchAll(/import \w+ from '\.\/([^']+)'/g)].map((m) => m[1])
const order = [slug, ...listed.filter((s) => s !== slug)]
if (useGit) writeFileSync(indexFile, `import type { BlogPost } from '../../../types'\n${order.map((s, i) => `import post${i} from './${s}'`).join('\n')}\n\nexport const risorsePosts: BlogPost[] = [${order.map((_, i) => `post${i}`).join(', ')}]\n`)

// --- 2. covers ----------------------------------------------------------------------------------------
const n = /^video-(\d+)/.exec(folder)?.[1]
if (!flag('skip-covers')) {
  step('covers')
  const configFile = path.join(site, 'scripts/blog-covers.config.mjs')
  let config = readFileSync(configFile, 'utf8')
  if (!config.includes(`slug: '${slug}'`)) {
    const title = opt('title')?.split('|').map((s) => s.trim().toUpperCase())
    if (title?.length !== 2) throw new Error('New cover: pass --title "LINE 1|LINE 2" (as on the video cover)')
    const entry = `  { slug: '${slug}', dir: 'covers', src: '${slug}', title: ${JSON.stringify(title).replace(/'/g, '’').replace(/"/g, "'")} },\n`
    const at = config.indexOf("  { slug: 'agente-ai-whatsapp-piccola-impresa'") // video covers before the guides
    config = at >= 0 ? config.slice(0, at) + entry + config.slice(at) : config.replace(/\n\]\s*$/, `\n${entry}]\n`)
    writeFileSync(configFile, config)
  }
  const coversDir = path.join(renderer, 'renders/covers')
  const cover = readdirSync(coversDir).find((f) => new RegExp(`^video-${n}-cover.*\\.(jpe?g|png)$`, 'i').test(f))
  if (!cover) throw new Error(`No cover in ${coversDir} for video ${n}`)
  mkdirSync(path.join(site, 'scripts/.cover-src'), { recursive: true })
  copyFileSync(path.join(coversDir, cover), path.join(site, `scripts/.cover-src/${slug}.jpg`))
  run('node', ['scripts/ai-cover-scenes.mjs', '--model', 'google/nano-banana-pro', slug])
  for (const layout of ['wide', 'tall']) {
    if (!existsSync(path.join(site, `scripts/.cover-src/scenes/${slug}-${layout}.png`))) throw new Error(`AI scene missing: ${slug}-${layout}`)
  }
  run('node', ['scripts/make-blog-covers-v3.mjs', slug])
  console.log(`  check the covers: ${coverDir}/${slug}-wide.webp and -tall.webp`)
}

// --- 3. video preview ---------------------------------------------------------------------------------
step('video preview')
const talking = path.join(renderer, 'renders/talking-head')
const video = [`${folder}-social.mp4`, `${folder}.mp4`].map((f) => path.join(talking, f)).find(existsSync)
if (!video) throw new Error(`No render in ${talking} for ${folder}`)
const preview = path.join(site, `public/videos/preview/${slug}.mp4`)
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '1.5', '-t', '5', '-i', video, '-an', '-vf', 'scale=540:-2,fps=30',
  '-c:v', 'libx264', '-profile:v', 'main', '-pix_fmt', 'yuv420p', '-crf', '26', '-preset', 'slow', '-movflags', '+faststart', preview])
console.log(`  preview ${Math.round(statSync(preview).size / 1024)} KB`)

// --- 4a. default: publish through the site, no git -----------------------------------------------------
if (!useGit) {
  step('uploading media to Supabase')
  const map = {
    ...(await uploadDir(path.join(site, `public/images/blog/risorse/${slug}`), `/images/blog/risorse/${slug}`, `${slug}/slides`)),
    [`/guide/${slug}.pdf`]: await uploadFile(path.join(site, `public/guide/${slug}.pdf`), `${slug}/${slug}.pdf`),
    [`/videos/preview/${slug}.mp4`]: await uploadFile(preview, `${slug}/preview.mp4`),
  }
  for (const layout of ['wide', 'tall']) {
    const local = path.join(site, `${coverDir}/${slug}-${layout}.webp`)
    if (existsSync(local)) map[`/images/blog/covers/${slug}-${layout}.webp`] = await uploadFile(local, `${slug}/cover-${layout}.webp`)
  }
  console.log(`  ${Object.keys(map).length} files in ${mediaUrl(slug)}/`)
  step(flag('draft') ? 'saving the draft' : 'publishing')
  const italian = rewriteUrls(article, map)
  const result = await publishPost(BASE, { locale: 'it', ...italian, published: !flag('draft') })
  if (flag('draft')) { console.log(`\nSaved as draft (not visible): ${result.url}`); process.exit(0) }
  const live = await fetch(result.url).catch(() => null)
  if (live?.status !== 200) throw new Error(`Published but ${result.url} answers ${live?.status}`)
  // Spanish and English versions (same slug and media), unless --no-translate
  const urls = [`/it/blog/${slug}`, '/it/blog']
  if (!flag('no-translate')) {
    for (const lang of ['es', 'en']) {
      step(`translating to ${lang}`)
      try {
        const r = await publishPost(BASE, { locale: lang, ...(await translatePost(italian, lang)), published: true })
        urls.push(`/${lang}/blog/${slug}`, `/${lang}/blog`)
        console.log(`  ${r.url}`)
      } catch (e) { console.log(`  ! ${lang} not published: ${e.message} (later: node scripts/translate-published.mjs ${slug})`) }
    }
  }
  step('telling Google and Bing')
  await notifySearchEngines(urls)
  console.log(`\n✔ Live: ${result.url}`)
  process.exit(0)
}

// --- 4b. --git: check, commit, push, deploy ------------------------------------------------------------
step('typecheck')
run('npx', ['tsc', '--noEmit', '-p', '.'])
const url = `${BASE}/it/blog/${slug}`
if (flag('no-push')) {
  console.log(`\nReady, not pushed (--no-push). It will be at ${url}`)
  process.exit(0)
}
step('commit and push')
if (out('git', ['branch', '--show-current']) !== 'main') throw new Error('Run it on main')
const paths = [
  `src/features/blog/posts/it/risorse/${slug}.ts`, 'src/features/blog/posts/it/risorse/index.ts',
  `public/images/blog/risorse/${slug}`, `public/guide/${slug}.pdf`, `public/videos/preview/${slug}.mp4`,
  'scripts/lead-magnet-slugs.json', 'scripts/blog-covers.config.mjs',
  ...['wide', 'tall'].map((l) => `${coverDir}/${slug}-${l}.webp`).filter((p) => existsSync(path.join(site, p))),
]
run('git', ['add', '--', ...paths])
run('git', ['commit', '-m', `feat(blog): free guide ${slug}`, '--', ...paths])
run('git', ['push', 'origin', 'main'])
const sha = out('git', ['rev-parse', 'HEAD'])

step('waiting for the Vercel deploy')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
for (let i = 0; i < 80; i++) {
  await sleep(15000)
  let state = 'pending'
  try { state = out('gh', ['api', `repos/{owner}/{repo}/commits/${sha}/status`, '--jq', '.state']) } catch {}
  if (state === 'failure' || state === 'error') throw new Error(`Vercel deploy ${state} for ${sha}`)
  if (state !== 'success') continue
  const res = await fetch(url, { redirect: 'manual' }).catch(() => null)
  if (res?.status === 200) {
    step('telling Google and Bing')
    await notifySearchEngines([`/it/blog/${slug}`, '/it/blog'])
    console.log(`\n✔ Live: ${url}`)
    process.exit(0)
  }
}
throw new Error(`Deploy not confirmed in 20 minutes: check ${url}`)
