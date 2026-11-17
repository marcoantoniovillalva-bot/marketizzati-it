// Status code of every public page in every language (+ SEO files). node scripts/qa/check-routes.mjs [base]
import { PAGES } from '../../src/features/site/lib/routes.ts'
const base = process.argv[2] ?? 'http://localhost:3040'
const urls = ['/llms.txt', '/robots.txt', '/sitemap.xml']
for (const page of Object.values(PAGES)) for (const l of ['it', 'es', 'en']) urls.push(`/${l}${page[l] ? `/${page[l]}` : ''}`)
let bad = 0
for (const u of urls) {
  const res = await fetch(base + u, { redirect: 'manual' })
  if (res.status !== 200) { bad++; console.log(res.status, u, res.headers.get('location') ?? '') }
}
console.log(`${urls.length} urls, ${bad} not 200`)
