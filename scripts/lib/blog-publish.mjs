// Publishing without git: files go to the Supabase bucket "blog-media", the article to /api/blog/publish.
// Keys come from .env.local and are never printed.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { site } from './lead-magnet.mjs'

export const env = Object.fromEntries(readFileSync(path.join(site, '.env.local'), 'utf8').split(/\r?\n/)
  .map((l) => /^([A-Z0-9_]+)=(.*)$/.exec(l)).filter(Boolean).map((m) => [m[1], m[2].trim().replace(/^['"]|['"]$/g, '')]))

const BUCKET = 'blog-media'
const TYPES = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.pdf': 'application/pdf', '.mp4': 'video/mp4' }

/** Public URL of an object in the bucket. */
export const mediaUrl = (key) => `${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${key}`

/** Uploads (or replaces) one local file; returns its public URL. */
export async function uploadFile(localPath, key) {
  const type = TYPES[path.extname(localPath).toLowerCase()]
  if (!type) throw new Error(`Unsupported file type: ${localPath}`)
  const res = await fetch(`${env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/${BUCKET}/${key}`, {
    method: 'POST',
    headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`, 'Content-Type': type, 'x-upsert': 'true', 'Cache-Control': 'max-age=31536000' },
    body: readFileSync(localPath),
  })
  if (!res.ok) throw new Error(`Upload ${key}: ${res.status} ${(await res.text()).slice(0, 160)}`)
  return mediaUrl(key)
}

/** Uploads every file of a local folder under prefix/; returns a map "local public path" -> URL. */
export async function uploadDir(localDir, publicPrefix, keyPrefix) {
  const map = {}
  for (const name of readdirSync(localDir)) {
    const file = path.join(localDir, name)
    if (statSync(file).isFile()) map[`${publicPrefix}/${name}`] = await uploadFile(file, `${keyPrefix}/${name}`)
  }
  return map
}

/** Replaces site-relative asset paths (/images/..., /guide/..., /videos/...) with their uploaded URLs everywhere in the post. */
export function rewriteUrls(post, map) {
  let json = JSON.stringify(post)
  for (const [from, to] of Object.entries(map)) json = json.split(from).join(to)
  return JSON.parse(json)
}

/** Sends the article to the site; it is live (and in sitemap/llms.txt) as soon as this returns. */
export async function publishPost(base, article) {
  if (!env.BLOG_PUBLISH_TOKEN) throw new Error('BLOG_PUBLISH_TOKEN missing in .env.local')
  const res = await fetch(`${base}/api/blog/publish`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.BLOG_PUBLISH_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Publish failed ${res.status}: ${JSON.stringify(body).slice(0, 400)}`)
  return body
}
