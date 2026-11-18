// Loads the two TikTok embed flavours in a clean browser (no TikTok cookies) inside a local page.
// node scripts/qa/tiktok-embed-test.mjs <outDir> <videoId>
import { mkdir } from 'node:fs/promises'
import http from 'node:http'
import { chromium } from '@playwright/test'
const [outDir, id = '7706859214056017185'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const variants = {
  v1: `https://www.tiktok.com/player/v1/${id}?autoplay=1`,
  v1plain: `https://www.tiktok.com/player/v1/${id}`,
  v2: `https://www.tiktok.com/embed/v2/${id}`,
}
const server = http.createServer((req, res) => {
  const key = req.url.slice(1)
  res.setHeader('Content-Type', 'text/html')
  res.end(`<!doctype html><body style="margin:0;background:#eee"><iframe src="${variants[key]}" style="width:340px;height:740px;border:0" allow="autoplay; fullscreen; encrypted-media"></iframe></body>`)
}).listen(3099)
const browser = await chromium.launch({ channel: 'chrome', args: process.env.BLOCK3P ? ['--test-third-party-cookie-phaseout'] : [] })
for (const key of Object.keys(variants)) {
  const page = await browser.newPage({ viewport: { width: 360, height: 760 } })
  await page.goto(`http://localhost:3099/${key}`)
  await page.waitForTimeout(12000)
  await page.screenshot({ path: `${outDir}/${key}.png` })
  await page.close()
}
await browser.close()
server.close()
console.log('done')
