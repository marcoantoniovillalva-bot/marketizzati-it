// QA on the live site (node scripts/qa/live-audit.mjs [origin]): security headers, 404s, secrets in client JS,
// per-page SEO (one H1, title, description lengths, og:image), cron fail-closed, PageSpeed (mobile).
const origin = process.argv[2] ?? 'https://www.marketizzati.it'
const out = (label, value) => console.log(`${label.padEnd(26)} ${value}`)

const home = await fetch(`${origin}/it`)
const h = home.headers
out('headers', ['strict-transport-security', 'content-security-policy', 'x-frame-options', 'x-content-type-options', 'referrer-policy', 'permissions-policy']
  .map((k) => `${k.split('-').map((w) => w[0]).join('')}:${h.get(k) ? 'yes' : 'NO'}`).join(' '))
const http = await fetch(origin.replace('https:', 'http:') + '/it', { redirect: 'manual' })
out('http -> https', `${http.status} ${http.headers.get('location') ?? ''}`)
const apex = await fetch(origin.replace('www.', ''), { redirect: 'manual' })
out('apex -> www', `${apex.status} ${apex.headers.get('location') ?? ''}`)
for (const l of ['it', 'es', 'en']) {
  const r = await fetch(`${origin}/${l}/pagina-che-non-esiste-${Date.now()}`)
  out(`404 ${l}`, `${r.status} ${(await r.text()).includes('Marketizzati') ? 'branded' : 'plain'}`)
}
const cron = await fetch(`${origin}/api/cron/automation-runs`, { method: 'POST' })
out('cron without secret', cron.status)

// secrets in client JS
const SECRET = /sk_live_[A-Za-z0-9]{10,}|sk_test_[A-Za-z0-9]{10,}|sb_secret_[A-Za-z0-9_-]{10,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|"role":"service_role"|AKIA[A-Z0-9]{16}|sk-[A-Za-z0-9_-]{30,}|xox[bp]-[A-Za-z0-9-]{10,}/
const seen = new Set(); let scanned = 0; const hits = []; const publics = new Set()
for (const p of ['/it', '/it/quanto-costa-un-sito-web', '/it/blog', '/it/blog/seo-gratis-strumenti-ia', '/it/login']) {
  const html = await (await fetch(origin + p)).text()
  for (const m of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+\.js)"/g)) {
    if (seen.has(m[1])) continue
    seen.add(m[1]); scanned++
    const js = await (await fetch(origin + m[1])).text()
    const s = SECRET.exec(js); if (s) hits.push(`${m[1]}: ${s[0].slice(0, 12)}…`)
    for (const k of js.matchAll(/(sb_publishable_|pk_live_|pk_test_)[A-Za-z0-9_-]{4}/g)) publics.add(k[1])
    // legacy JWTs: only role is reported, never the value
    for (const j of js.matchAll(/eyJhbGciOi[A-Za-z0-9_-]+\.([A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+/g)) {
      try { const role = JSON.parse(Buffer.from(j[1], 'base64url').toString()).role; if (role === 'service_role') hits.push(`${m[1]}: service_role JWT`) } catch {}
    }
  }
}
out('client JS scanned', `${scanned} files, secrets: ${hits.length ? hits.join(', ') : 'none'}, public keys: ${[...publics].join(' ') || 'none'}`)

// per-page SEO on every sitemap URL
const xml = await (await fetch(`${origin}/sitemap.xml`)).text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const titles = new Map(); const issues = []
for (const u of urls) {
  const html = await (await fetch(u)).text()
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? ''
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? ''
  const og = /<meta property="og:image" content="([^"]*)"/.exec(html)?.[1] ?? ''
  const p = u.replace(origin, '')
  if (h1 !== 1) issues.push(`${p}: ${h1} H1`)
  if (!title) issues.push(`${p}: no title`); else if (title.length > 65) issues.push(`${p}: title ${title.length} chars`)
  if (!desc) issues.push(`${p}: no description`); else if (desc.length > 165) issues.push(`${p}: description ${desc.length} chars`)
  if (!og) issues.push(`${p}: no og:image`)
  titles.set(title, [...(titles.get(title) ?? []), p])
}
for (const [t, ps] of titles) if (ps.length > 1) issues.push(`same title on ${ps.length} pages: "${t.slice(0, 50)}" ${ps.join(' ')}`)
out('SEO pages checked', `${urls.length}, issues: ${issues.length}`)
issues.slice(0, 40).forEach((i) => console.log('   ' + i))

// PageSpeed (mobile), no key needed (may be rate limited)
for (const p of ['/it', '/it/realizzazione-siti-web', '/it/blog/seo-gratis-strumenti-ia']) {
  try {
    const r = await (await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(origin + p)}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices`)).json()
    const c = r.lighthouseResult.categories; const a = r.lighthouseResult.audits
    out(`PSI mobile ${p}`, `perf ${Math.round(c.performance.score * 100)} a11y ${Math.round(c.accessibility.score * 100)} seo ${Math.round(c.seo.score * 100)} bp ${Math.round(c['best-practices'].score * 100)} | LCP ${a['largest-contentful-paint'].displayValue} CLS ${a['cumulative-layout-shift'].displayValue} TBT ${a['total-blocking-time'].displayValue}`)
    const opp = Object.values(a).filter((x) => x.details?.type === 'opportunity' && x.score !== null && x.score < 0.9).sort((x, y) => (y.details.overallSavingsMs ?? 0) - (x.details.overallSavingsMs ?? 0)).slice(0, 4)
    opp.forEach((o) => console.log(`   - ${o.title} (${o.displayValue ?? ''})`))
    const fails = ['color-contrast', 'image-alt', 'button-name', 'link-name', 'label'].filter((k) => a[k] && a[k].score === 0)
    if (fails.length) console.log(`   a11y fails: ${fails.join(', ')}`)
  } catch (e) { out(`PSI ${p}`, 'failed ' + e.message.slice(0, 60)) }
}
