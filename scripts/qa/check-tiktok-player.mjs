// Opens an article with a TikTok video, presses play and screenshots the player.
// node scripts/qa/check-tiktok-player.mjs <outDir> [slug] [baseUrl]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [outDir, slug = 'audit-sicurezza-skill-cloudflare', base = 'http://localhost:3040'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
await page.goto(`${base}/it/blog/${slug}`, { waitUntil: 'networkidle' })
const fig = page.locator('figure:has(button[aria-label])').first()
await fig.scrollIntoViewIfNeeded()
await fig.screenshot({ path: `${outDir}/before.png` })
await fig.locator('button').click()
await page.waitForTimeout(8000)
const player = page.locator('figure:has(iframe)').first()
const src = await player.locator('iframe').getAttribute('src')
await player.screenshot({ path: `${outDir}/after.png` })
console.log('iframe', src, 'errors', errors.length)
await browser.close()
