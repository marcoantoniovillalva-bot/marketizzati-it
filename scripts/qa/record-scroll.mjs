// Records a real scroll through the home and collects console/page errors.
// node record-scroll.mjs <outDir> [width height]   -> <outDir>/*.webm + errors.json
import { chromium } from '@playwright/test'
import { mkdirSync, writeFileSync } from 'node:fs'

const [outDir = 'video', w = 1440, h = 860] = process.argv.slice(2)
mkdirSync(outDir, { recursive: true })
const size = { width: +w, height: +h }
const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] })
const mobile = size.width < 768
const context = await browser.newContext({ viewport: size, recordVideo: { dir: outDir, size }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 })
const page = await context.newPage()
const errors = []
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`) })
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
await page.goto(process.env.URL ?? 'http://localhost:3040/it')
await page.waitForSelector(process.env.WAIT_FOR ?? 'canvas')
await page.waitForTimeout(3500)
const total = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight)
// steady wheel-like scroll, ~1.6 s per screen, with a pause on each section
for (let y = 0; y <= total; y += 12) {
  await page.evaluate((v) => window.scrollTo(0, v), y)
  await page.waitForTimeout(22)
}
await page.waitForTimeout(1500)
// and back up quickly, to catch errors on the way out of the screens
for (let y = total; y >= 0; y -= 60) {
  await page.evaluate((v) => window.scrollTo(0, v), y)
  await page.waitForTimeout(16)
}
await page.waitForTimeout(1500)
await context.close()
await browser.close()
writeFileSync(`${outDir}/errors.json`, JSON.stringify(errors, null, 2))
console.log(`errors: ${errors.length}`)
errors.slice(0, 15).forEach((e) => console.log(e.slice(0, 300)))
