// Screenshots of the app-tour sections on the projects page, 2 s into the tour.
// node scripts/qa/shoot-tours.mjs <outDir> [width] [url]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [outDir, w = 1280, url = 'http://localhost:3040/it/progetti'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +w, height: 900 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
const sections = page.locator('section:has([aria-live="polite"])')
const n = await sections.count()
for (let i = 0; i < n; i++) {
  await sections.nth(i).evaluate((el) => el.scrollIntoView({ block: 'center' }))
  await page.waitForTimeout(2500)
  await sections.nth(i).screenshot({ path: `${outDir}/${i}.png` })
}
console.log('tours', n, 'errors', errors.length, errors.slice(0, 3).join(' | ').slice(0, 300))
await browser.close()
