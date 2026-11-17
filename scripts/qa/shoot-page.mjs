// Full-page shot of a URL + console errors, after scrolling through so lazy images load.
// Also saves viewport shots every screen as <out>-NN.png when SHOTS=1.
// node scripts/qa/shoot-page.mjs <out.png> <url> [width]
import { chromium } from '@playwright/test'
const [out, url, w = 1280] = process.argv.slice(2)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +w, height: 900 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push(e.message))
const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
const total = await page.evaluate(() => document.documentElement.scrollHeight)
let n = 0
for (let y = 0; y < total; y += 700) {
  await page.evaluate((v) => window.scrollTo(0, v), y)
  await page.waitForTimeout(250)
  if (process.env.SHOTS && y % 1400 === 0) await page.screenshot({ path: out.replace(/\.png$/, `-${String(n++).padStart(2, '0')}.png`) })
}
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(800)
await page.screenshot({ path: out, fullPage: true })
console.log('status', res?.status(), 'errors', errors.length, errors.slice(0, 3).join(' | ').slice(0, 400))
await browser.close()
