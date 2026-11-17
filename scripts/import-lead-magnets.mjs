import { readdir, readFile, writeFile, mkdir, copyFile, stat, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const renderer = path.resolve(site, '../marketizzati-video-renderer')
const source = path.join(renderer, 'lead-magnets')
const postsDir = path.join(site, 'src/features/blog/posts/it/risorse')
const pdfDir = path.join(site, 'public/guide')   // not /risorse: that path is the private client area
const imagesDir = path.join(site, 'public/images/blog/risorse')
await Promise.all([postsDir, pdfDir, imagesDir].map((dir) => mkdir(dir, { recursive: true })))
const posts = []
let imageCount = 0
const slugify = (title) => title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/\b(?:19|20)\d{2}\b/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  .replace(/^(.{1,60})(?:-.*)?$/, '$1').replace(/-$/g, '')
const strings = (value) => typeof value === 'string' ? [value] : Array.isArray(value)
  ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : []

/** Short, readable slugs: the titles are long and get cut mid-phrase. */
const SLUGS = {
  'video-2-pluralsight': 'pluralsight-ai-mcp',
  'video-3-motionsites': 'sito-cinematografico-senza-farti-fregare',
  'video-4-claude-instagram': 'claude-per-instagram',
  'video-5-claude-duet': 'claude-duet-agenti-ia-sempre-attivi',
  'video-6-sicurezza-aggiornamenti': 'aggiornamenti-sicurezza-ottobre-2026',
  'video-7-git-github': 'git-e-github-per-costruire-con-ia',
  'video-8-codex-claude-code': 'codex-dentro-claude-code',
  'video-9-voicestudio': 'voicestudio-doppiaggio-open-source',
  'video-11-reel-con-claude': 'reel-con-claude',
  'video-12-ganci-virali': '70-ganci-virali',
  'video-13-open-webui': 'open-webui-guida',
  'video-14-whatsapp-business-agent': 'meta-business-agent-whatsapp',
  'video-15-voucher-cloud-cybersecurity': 'voucher-cloud-cybersecurity-checklist',
  'video-16-strumenti-editing': 'montare-video-con-claude-code',
  'video-17-rtk': 'rtk-meno-token-claude-code',
  'video-19-nvidia': 'scudo-checklist-installare-skill',
  'video-20-artemis': 'android-agente-su-windows',
  'video-21-cloudflare': 'audit-sicurezza-skill-cloudflare',
}

for (const folder of (await readdir(source)).filter((name) => name.startsWith('video-')).sort()) {
  const contentPath = path.join(source, folder, 'content.json')
  try { await access(contentPath) } catch { continue }
  const data = JSON.parse(await readFile(contentPath, 'utf8'))
  const slug = SLUGS[folder] ?? slugify(data.title)
  if (posts.some((post) => post.slug === slug)) throw new Error(`Duplicate slug: ${slug}`)
  const imageCache = new Map()
  async function convertImage(reference) {
    if (imageCache.has(reference)) return imageCache.get(reference)
    if (!/\.(png|jpe?g)$/i.test(reference)) throw new Error(`Unsupported image: ${reference}`)
    const name = `${String(imageCache.size + 1).padStart(2, '0')}-${path.parse(reference).name}.webp`
    const dir = path.join(imagesDir, slug)
    await mkdir(dir, { recursive: true })
    await sharp(path.resolve(renderer, reference)).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(dir, name))
    const url = `/images/blog/risorse/${slug}/${name}`
    imageCache.set(reference, url)
    imageCount++
    return url
  }
  // Convert every image reference, including references outside cover/image blocks.
  for (const reference of new Set(strings(data).filter((s) => /\.(png|jpe?g)$/i.test(s)))) await convertImage(reference)
  const cover = data.blocks.find((block) => block.type === 'cover')
  if (!cover) throw new Error(`Missing cover: ${folder}`)
  const sections = []
  let intro = false
  for (let i = 0; i < data.blocks.length; i++) {
    const block = data.blocks[i]
    switch (block.type) {
      case 'cover': case 'contacts': case 'pagebreak': break
      case 'p': sections.push({ type: intro ? 'paragraph' : 'intro', content: block.text }); intro = true; break
      case 'h1': case 'h2': {
        let content = ''
        // The first paragraph remains the intro even when preceded by a heading.
        if (intro && data.blocks[i + 1]?.type === 'p') content = data.blocks[++i].text
        sections.push({ type: block.type === 'h1' ? 'h2' : 'h3', heading: block.text, content })
        break
      }
      case 'bullets': case 'numbers': sections.push({ type: 'list', items: block.items }); break
      case 'links': sections.push({ type: 'list', items: block.items.map((item) => `[${item.label}](${item.url})`) }); break
      case 'callout': sections.push({ type: 'callout', content: `${block.label ? `**${block.label}** ` : ''}${block.text}` }); break
      case 'cta': sections.push({ type: 'cta', heading: block.title, content: block.text }); break
      case 'image': sections.push({ type: 'image', url: await convertImage(block.src), alt: block.caption || data.title, ...(block.caption ? { caption: block.caption } : {}) }); break
      case 'table': sections.push({ type: 'table', headers: block.headers, rows: block.rows, ...(block.caption ? { caption: block.caption } : {}) }); break
      case 'prompt':
        sections.push({ type: 'code', ...(block.label ? { label: block.label } : {}), content: block.text })
        if (block.why) sections.push({ type: 'paragraph', content: block.why })
        break
      case 'code': sections.push({ type: 'code', content: block.lines.join('\n') }); break
      default: throw new Error(`Unmapped block: ${block.type} in ${folder}`)
    }
  }
  const pdfs = (await readdir(path.join(source, folder))).filter((name) => /^Guida_Marketizzati_.*\.pdf$/i.test(name))
  if (pdfs.length !== 1) throw new Error(`Expected one PDF: ${folder}`)
  await copyFile(path.join(source, folder, pdfs[0]), path.join(pdfDir, `${slug}.pdf`))
  sections.push({ type: 'callout', content: `**Scarica la guida in PDF:** [${pdfs[0]}](/guide/${slug}.pdf)` })
  const phrases = `${data.title}. ${data.description}`.replace(/\*\*/g, '').split(/[.!?;:,]+/).map((s) => s.trim()).filter(Boolean)
  const words = `${data.title} ${data.description}`.replace(/[^\p{L}\p{N}\s]/gu, '').split(/\s+/).filter(Boolean)
  const keywords = [...new Set([...phrases, ...words.map((_, i) => words.slice(i, i + 3).join(' ')).filter((s) => s.split(' ').length === 3)])].slice(0, 6)
  const description = data.description.length <= 155 ? data.description : data.description.slice(0, 152).replace(/\s+\S*$/, '') + '…'
  const post = { slug, title: data.title, description, date: (await stat(contentPath)).mtime.toISOString().slice(0, 10), readTime: Math.max(1, Math.ceil(strings(sections).join(' ').split(/\s+/).length / 220)), category: 'Risorse gratuite', keywords, image: await convertImage(cover.image), imageAlt: cover.caption || data.title, sections }
  await writeFile(path.join(postsDir, `${slug}.ts`), `import type { BlogPost } from '../../../types'\n\nconst post: BlogPost = ${JSON.stringify(post, null, 2)}\n\nexport default post\n`)
  posts.push(post)
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
await writeFile(path.join(postsDir, 'index.ts'), `import type { BlogPost } from '../../../types'\n${posts.map((p, i) => `import post${i} from './${p.slug}'`).join('\n')}\n\nexport const risorsePosts: BlogPost[] = [${posts.map((_, i) => `post${i}`).join(', ')}]\n`)
async function size(dir) {
  let bytes = 0
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name)
    bytes += entry.isDirectory() ? await size(target) : (await stat(target)).size
  }
  return bytes
}
console.log(JSON.stringify({ slugs: posts.map((p) => p.slug), imagesConverted: imageCount, imageBytes: await size(imagesDir), pdfBytes: await size(pdfDir), unmappedBlockTypes: [] }, null, 2))
