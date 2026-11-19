// Re-imports EVERY lead magnet folder from scratch. Careful: it overwrites the posts that were edited by hand
// afterwards (covers, tiktok, categories). For a new resource use scripts/publish-resource.mjs instead.
import { readdir, writeFile, mkdir, access } from 'node:fs/promises'
import path from 'node:path'
import { buildPost, postFile, postsDir, readSlugs, slugify, source } from './lib/lead-magnet.mjs'
import { readFile } from 'node:fs/promises'

await mkdir(postsDir, { recursive: true })
const SLUGS = await readSlugs()
const posts = []
let imageCount = 0

for (const folder of (await readdir(source)).filter((name) => name.startsWith('video-')).sort()) {
  const contentPath = path.join(source, folder, 'content.json')
  try { await access(contentPath) } catch { continue }
  const slug = SLUGS[folder] ?? slugify(JSON.parse(await readFile(contentPath, 'utf8')).title)
  if (posts.some((post) => post.slug === slug)) throw new Error(`Duplicate slug: ${slug}`)
  const built = await buildPost(folder, slug)
  imageCount += built.imageCount
  await writeFile(path.join(postsDir, `${slug}.ts`), postFile(built.post))
  posts.push(built.post)
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
await writeFile(path.join(postsDir, 'index.ts'), `import type { BlogPost } from '../../../types'\n${posts.map((p, i) => `import post${i} from './${p.slug}'`).join('\n')}\n\nexport const risorsePosts: BlogPost[] = [${posts.map((_, i) => `post${i}`).join(', ')}]\n`)
console.log(JSON.stringify({ slugs: posts.map((p) => p.slug), imagesConverted: imageCount }, null, 2))
