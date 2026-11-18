// Full-page screenshot of a live site (scrolled first so lazy images and scroll animations are in),
// saved as webp for the scrollable project previews. node scripts/qa/shoot-fullpage.mjs <url> <out.webp> <width>
import { chromium } from '@playwright/test'
import sharp from 'sharp'
const [url, out, w = '1280'] = process.argv.slice(2)
const browser = await chromium.launch()
const phone = +w < 600
const page = await browser.newPage({ viewport: { width: +w, height: phone ? 844 : 800 }, deviceScaleFactor: phone ? 2 : 1, isMobile: phone, hasTouch: phone })
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(1500)
const decline = page.getByRole('button', { name: /^(Rifiuta|Solo necessari|Decline|Reject)/i }).first()
if (await decline.isVisible().catch(() => false)) await decline.click()
const total = await page.evaluate(() => document.documentElement.scrollHeight)
for (let y = 0; y < total; y += 500) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(250) }
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(1200)
const png = await page.screenshot({ fullPage: true })
const img = sharp(png)
const meta = await img.metadata()
const maxH = phone ? 9000 : 6000
await img.extract({ left: 0, top: 0, width: meta.width, height: Math.min(meta.height, maxH) }).resize({ width: phone ? 780 : 1280 }).webp({ quality: 78 }).toFile(out)
console.log(out, meta.width, meta.height)
await browser.close()
