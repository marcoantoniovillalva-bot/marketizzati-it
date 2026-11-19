// Lists the public videos of a TikTok profile (link + caption shown on the grid). No login, no captcha
// solving: if TikTok shows a wall, it reports it and stops.
// node scripts/qa/tiktok-profile-links.mjs <handle> <out.json>
import { writeFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [handle = 'marco.villalva3', out = 'tiktok-links.json'] = process.argv.slice(2)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'it-IT' })
await page.goto(`https://www.tiktok.com/@${handle}`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(6000)
const found = new Map()
for (let i = 0; i < 25; i++) {
  const batch = await page.evaluate((h) => [...document.querySelectorAll(`a[href*="/@${h}/video/"]`)].map((a) => ({
    url: a.href.split('?')[0],
    text: (a.querySelector('img')?.getAttribute('alt') ?? a.getAttribute('aria-label') ?? a.textContent ?? '').trim().slice(0, 160),
  })), handle)
  for (const v of batch) if (!found.has(v.url)) found.set(v.url, v)
  await page.mouse.wheel(0, 1600)
  await page.waitForTimeout(1500)
}
const blocked = await page.evaluate(() => /captcha|verify|accedi|log in/i.test(document.body.innerText.slice(0, 2000)))
await page.screenshot({ path: out.replace(/\.json$/, '.png') })
await writeFile(out, JSON.stringify([...found.values()], null, 1))
console.log('videos', found.size, 'wall?', blocked)
await browser.close()
