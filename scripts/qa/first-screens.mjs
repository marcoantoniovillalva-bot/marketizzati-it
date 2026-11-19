import { chromium } from '@playwright/test'
const urls = process.argv.slice(3)
const out = process.argv[2]
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
let i = 0
for (const u of urls) {
  await page.goto(u, { waitUntil: 'networkidle' })
  await page.evaluate(() => window.scrollTo(0, 500)); await page.waitForTimeout(600)
  await page.screenshot({ path: `${out}-${i++}.png` })
}
console.log('errors', errors.length, errors.slice(0, 3).join(' | ').slice(0, 300))
await browser.close()
