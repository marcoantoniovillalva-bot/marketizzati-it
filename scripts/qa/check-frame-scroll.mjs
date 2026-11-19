// Wheel-scrolls inside each desktop project preview and checks that its content moved (pixel diff).
// node scripts/qa/check-frame-scroll.mjs <outDir> [baseUrl]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import sharp from 'sharp'
const [outDir, base = 'http://localhost:3040'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })
await page.goto(`${base}/it/progetti`, { waitUntil: 'networkidle' })
const frames = page.locator('section .aspect-\\[16\\/10\\]')
const n = await frames.count()
for (let i = 0; i < n; i++) {
  const f = frames.nth(i)
  await f.evaluate((el) => el.scrollIntoView({ block: 'center' }))
  await page.waitForTimeout(7000)
  const box = await f.boundingBox()
  if (!box) continue
  const before = await page.screenshot({ clip: box })
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.wheel(0, 900)
  await page.waitForTimeout(1500)
  const after = await page.screenshot({ clip: box })
  const [a, b] = await Promise.all([sharp(before).raw().toBuffer(), sharp(after).raw().toBuffer()])
  let diff = 0
  for (let k = 0; k < a.length; k += 16) if (Math.abs(a[k] - b[k]) > 24) diff++
  await sharp(after).toFile(`${outDir}/frame-${i}.png`)
  console.log(i, (await f.evaluate((el) => el.querySelector('iframe')?.src || el.querySelector('img')?.src || '')).slice(0, 60), 'changed', ((diff / (a.length / 16)) * 100).toFixed(1) + '%')
}
await browser.close()
