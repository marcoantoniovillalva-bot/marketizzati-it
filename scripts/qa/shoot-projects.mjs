// Screenshots (posters) of the live project sites, plus a scroll video for sites that cannot be embedded.
// node scripts/qa/shoot-projects.mjs [name ...]   (no names = all)
import { execFileSync } from 'node:child_process'
import { mkdir, readdir, rm } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const SITES = {
  lurumi: 'https://lurumi.it',
  'cargo-service': 'https://cargo-service-landing.vercel.app/',
  aigent: 'https://officeaigent.com/',
  gfmemories: 'https://gfmemories.vercel.app/',
  'pasticceria-certosa': 'https://pasticceria-certosa.vercel.app/',
  jpower: 'https://jpower-usa.vercel.app/',
}
/** Sites that send X-Frame-Options / frame-ancestors: shown as a recorded scroll instead of live. */
const VIDEO = new Set(['pasticceria-certosa'])
const only = process.argv.slice(2)
const out = 'public/images/progetti'
const videoTmp = 'scripts/qa/.video-tmp'

async function declineCookies(page) {
  const decline = page.getByRole('button', { name: /^(Rifiuta|Solo necessari|Decline|Reject)/i }).first()
  if (await decline.isVisible().catch(() => false)) await decline.click()
}

async function smoothScroll(page, ms) {
  await page.evaluate(async (duration) => {
    const max = document.documentElement.scrollHeight - innerHeight
    const start = performance.now()
    await new Promise((done) => {
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration)
        scrollTo(0, max * (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2))
        t < 1 ? requestAnimationFrame(step) : done()
      }
      requestAnimationFrame(step)
    })
  }, ms)
}

const browser = await chromium.launch()
for (const [name, url] of Object.entries(SITES)) {
  if (only.length && !only.includes(name)) continue
  for (const [kind, viewport] of [['desk', { width: 1280, height: 800 }], ['phone', { width: 390, height: 844 }]]) {
    const record = VIDEO.has(name)
    if (record) await mkdir(videoTmp, { recursive: true })
    const context = await browser.newContext({ viewport, deviceScaleFactor: kind === 'phone' ? 2 : 1, ...(record ? { recordVideo: { dir: videoTmp, size: viewport } } : {}) })
    const page = await context.newPage()
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
      await page.waitForTimeout(1500)
      await declineCookies(page)
      await page.waitForTimeout(800)
      const png = await page.screenshot()
      await sharp(png).resize({ width: kind === 'desk' ? 1280 : 780 }).webp({ quality: 80 }).toFile(`${out}/${name}-${kind}.webp`)
      if (record) {
        await smoothScroll(page, 14000)
        await page.waitForTimeout(800)
        await smoothScroll(page, 0)
      }
      console.log(name, kind, 'ok')
    } catch (e) { console.log(name, kind, 'FAIL', String(e).slice(0, 120)) }
    await context.close()
    if (record) {
      const [webm] = (await readdir(videoTmp)).filter((f) => f.endsWith('.webm'))
      // drop the first 2.5 s (page load), H.264 mp4 so every browser plays it
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', '2.5', '-i', `${videoTmp}/${webm}`, '-an', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '28', '-preset', 'slow', '-movflags', '+faststart', `${out}/${name}-${kind}.mp4`])
      await rm(videoTmp, { recursive: true, force: true })
      console.log(name, kind, 'video ok')
    }
  }
}
await browser.close()
