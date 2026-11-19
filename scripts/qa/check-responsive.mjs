// Finds horizontal overflow and elements wider than the viewport, per page and width.
// node scripts/qa/check-responsive.mjs [baseUrl]
import { chromium } from '@playwright/test'
const base = process.argv[2] ?? 'http://localhost:3040'
const paths = ['/it', '/it/quanto-costa-un-sito-web', '/it/realizzazione-siti-web', '/it/scheda-google-business-profile', '/it/pubblicita-google-ads',
  '/it/agenti-ai-whatsapp', '/it/sistemi-automatizzati', '/it/social-media-manager', '/it/contenuti-video', '/it/progetti', '/it/chi-sono', '/it/contatti',
  '/it/blog', '/it/blog/70-ganci-virali', '/es', '/en/website-cost']
const widths = [360, 412, 600, 768, 900, 1024, 1180, 1440]
const browser = await chromium.launch()
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } })
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'domcontentloaded', timeout: 90000 })
    await page.waitForTimeout(400)
    const r = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth
      const bad = []
      for (const el of document.querySelectorAll('body *')) {
        const b = el.getBoundingClientRect()
        if (b.width === 0 || getComputedStyle(el).position === 'fixed') continue
        if (b.right > vw + 1 || b.left < -1) {
          let clipped = false
          for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
            const o = getComputedStyle(a).overflowX
            if (o === 'hidden' || o === 'auto' || o === 'scroll' || o === 'clip') { clipped = true; break }
          }
          if (!clipped) bad.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} [${Math.round(b.left)}→${Math.round(b.right)}]`)
        }
      }
      return { scroll: document.documentElement.scrollWidth - vw, bad: bad.slice(0, 4) }
    })
    if (r.scroll > 0 || r.bad.length) console.log(w, p, 'overflow', r.scroll, '\n   ' + r.bad.join('\n   '))
  }
  await page.close()
}
console.log('done')
await browser.close()
