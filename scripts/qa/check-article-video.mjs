// Desktop article with the TikTok video in the sticky side column: before and after play, and after scrolling.
// node scripts/qa/check-article-video.mjs <outDir> [slug] [baseUrl]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [outDir, slug = 'rtk-meno-token-claude-code', base = 'http://localhost:3040'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })
await page.goto(`${base}/it/blog/${slug}`, { waitUntil: 'networkidle' })
await page.screenshot({ path: `${outDir}/1-top.png` })
await page.locator('aside button').click()
await page.waitForTimeout(10000)
await page.screenshot({ path: `${outDir}/2-playing.png` })
await page.mouse.wheel(0, 1400)
await page.waitForTimeout(1500)
await page.screenshot({ path: `${outDir}/3-scrolled.png` })
console.log('ok')
await browser.close()
