// Screenshot of every section that holds an animated explainer, after it has built up.
// node scripts/qa/shoot-explainers.mjs <outDir> <url> [width]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [outDir, url, w = 1280] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +w, height: 900 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push(e.message))
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
const sections = page.locator('section:has(.mk-scope)')
const count = await sections.count()
for (let i = 0; i < count; i++) {
  const s = sections.nth(i)
  await s.locator('.mk-scope').first().evaluate((el) => el.scrollIntoView({ block: 'center' }))
  await page.waitForTimeout(6500)
  await s.screenshot({ path: `${outDir}/${String(i).padStart(2, '0')}.png` })
}
console.log(url, 'sections', count, 'errors', errors.length, errors.slice(0, 3).join(' | ').slice(0, 300))
await browser.close()
