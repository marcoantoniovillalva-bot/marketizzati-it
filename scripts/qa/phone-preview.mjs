// Phone preview of a page as the visitor sees it: scrolls screen by screen (so animations and the
// tinted background play), then stitches the screens into tall images of at most 6 screens each.
// node scripts/qa/phone-preview.mjs <outDir> <name> <url>
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const [outDir, name, url] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const W = 390
const H = 844
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
await page.waitForTimeout(1500)
const total = await page.evaluate(() => document.documentElement.scrollHeight)
const shots = []
for (let y = 0; y < total; y += H - 60) {
  await page.evaluate((v) => window.scrollTo(0, v), y)
  await page.waitForTimeout(5500)
  shots.push(await page.screenshot())
}
await browser.close()

const perImage = 6
for (let part = 0; part * perImage < shots.length; part++) {
  const group = shots.slice(part * perImage, (part + 1) * perImage)
  const gap = 16
  const height = group.length * H * 2 + (group.length - 1) * gap
  await sharp({ create: { width: W * 2, height, channels: 3, background: '#d9d4cf' } })
    .composite(group.map((input, i) => ({ input, left: 0, top: i * (H * 2 + gap) })))
    .jpeg({ quality: 82 })
    .toFile(`${outDir}/${name}-${part + 1}.jpg`)
}
console.log(name, shots.length, 'screens')
