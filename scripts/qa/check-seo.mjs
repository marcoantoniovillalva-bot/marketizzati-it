import { readFile } from 'node:fs/promises'

// node scripts/qa/check-seo.mjs [origin]   default http://localhost:3000 (npm run start); pass https://www.marketizzati.it to check the live site
const origin = process.argv[2] ?? 'http://localhost:3000'
const errors = []
async function get(path) {
  const response = await fetch(`${origin}${path}`, { redirect: 'manual' })
  if (response.status !== 200) errors.push(`${path}: HTTP ${response.status}`)
  return response.text()
}
const overview = await get('/llms.txt')
const full = await get('/llms-full.txt')
const sitemap = await get('/sitemap.xml')
const offer = await readFile('src/features/site/lib/offer.ts', 'utf8')
for (const key of ['oneOff', 'monthly']) {
  const price = offer.match(new RegExp(`\\b${key}:\\s*(\\d+)`))?.[1]
  if (!price || !overview.includes(`${price} €`)) errors.push(`Missing plan price: ${key}`)
}
for (const body of [overview, full, sitemap]) {
  if (/(?:sk_(?:live|test)_[a-z0-9]{16,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|AKIA[A-Z0-9]{16})/i.test(body)) errors.push('Secret-like string found')
}
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replaceAll('&amp;', '&'))
for (const address of urls) {
  const u = new URL(address)
  await get(`${u.pathname}${u.search}`)
}
for (const path of ['/it', '/it/realizzazione-siti-web', '/it/blog', '/es/blog', '/en/blog', ...urls.filter((u) => u.includes('/it/blog/')).slice(0, 1).map((u) => new URL(u).pathname)]) {
  const html = await get(path)
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]) } catch { errors.push(`${path}: invalid JSON-LD`) }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1 } else console.log(`SEO checks passed: ${urls.length} sitemap URLs`)
