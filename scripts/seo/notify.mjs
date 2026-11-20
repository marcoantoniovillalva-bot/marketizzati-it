// Tells search engines and AI search that pages changed. Run after every publish/deploy:
//   node scripts/seo/notify.mjs                 -> every URL in the live sitemap
//   node scripts/seo/notify.mjs /it/blog/slug   -> only these paths (plus the sitemap resubmission)
// 1. Google Search Console: resubmits sitemap.xml (service account in .secrets/, see .env.local)
// 2. IndexNow: Bing (Copilot, ChatGPT search), Yandex, Seznam, Naver. Key served at /<INDEXNOW_KEY>.txt
// Google's Indexing API is only for job posts and livestreams, and the sitemap "ping" was retired in 2023:
// resubmitting the sitemap is the official way. Secrets are read from .env.local and never printed.
import { createSign } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE = 'https://www.marketizzati.it'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const env = Object.fromEntries(readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)
  .map((l) => /^([A-Z0-9_]+)=(.*)$/.exec(l)).filter(Boolean).map((m) => [m[1], m[2].trim().replace(/^['"]|['"]$/g, '')]))

/** Access token for the Search Console API, signed locally with the service account key. */
async function googleToken() {
  const file = path.resolve(root, env.GOOGLE_SERVICE_ACCOUNT_FILE || '.secrets/google-seo-publisher.json')
  if (!existsSync(file)) throw new Error('Google key missing: put it in .secrets/ (see GOOGLE_SERVICE_ACCOUNT_FILE)')
  const sa = JSON.parse(readFileSync(file, 'utf8'))
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`
  const assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(sa.private_key, 'base64url')}`
  const res = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }) })
  const json = await res.json()
  if (!json.access_token) throw new Error(`Google token refused (${res.status})`)
  return json.access_token
}

export async function submitSitemap() {
  const token = await googleToken()
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(`${BASE}/`)}/sitemaps/${encodeURIComponent(`${BASE}/sitemap.xml`)}`
  const res = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) throw new Error(`Search Console sitemap: ${res.status}`)
  return 'Google Search Console: sitemap resubmitted'
}

export async function indexNow(urls) {
  if (!env.INDEXNOW_KEY) throw new Error('INDEXNOW_KEY missing in .env.local')
  const res = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(BASE).host, key: env.INDEXNOW_KEY, keyLocation: `${BASE}/${env.INDEXNOW_KEY}.txt`, urlList: urls.slice(0, 10000) }) })
  if (![200, 202].includes(res.status)) throw new Error(`IndexNow: ${res.status} ${(await res.text()).slice(0, 200)}`)
  return `IndexNow (Bing, Copilot, ChatGPT search): ${urls.length} URLs sent (${res.status})`
}

/** Notifies everything; never throws, so a failed ping never blocks a publish. */
export async function notifySearchEngines(paths = []) {
  let urls = paths.map((p) => (p.startsWith('http') ? p : BASE + p))
  if (!urls.length) {
    const xml = await (await fetch(`${BASE}/sitemap.xml`)).text()
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  }
  for (const job of [submitSitemap, () => indexNow(urls)]) {
    try { console.log(`  ${await job()}`) } catch (e) { console.log(`  ! ${e.message}`) }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await notifySearchEngines(process.argv.slice(2))
