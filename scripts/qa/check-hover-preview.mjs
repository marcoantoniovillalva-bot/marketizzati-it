// Hovers the first blog card with a video and screenshots it before/after; also checks touch autoplay.
// node scripts/qa/check-hover-preview.mjs <outDir> [baseUrl]
import { mkdir } from 'node:fs/promises'
import { chromium } from '@playwright/test'
const [outDir, base = 'http://localhost:3040'] = process.argv.slice(2)
await mkdir(outDir, { recursive: true })
const browser = await chromium.launch()

const desk = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const errors = []
desk.on('pageerror', (e) => errors.push(e.message))
await desk.goto(`${base}/it/blog?categoria=ai-e-automazioni`, { waitUntil: 'networkidle' })
const card = desk.locator('a:has(video)').first()
await card.scrollIntoViewIfNeeded()
await card.screenshot({ path: `${outDir}/desk-before.png` })
await card.hover()
await desk.waitForTimeout(2500)
const deskState = await card.locator('video').evaluate((v) => ({ paused: v.paused, time: v.currentTime.toFixed(2), opacity: getComputedStyle(v).opacity }))
await card.screenshot({ path: `${outDir}/desk-hover.png` })

const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
await phone.goto(`${base}/it/blog?categoria=ai-e-automazioni`, { waitUntil: 'networkidle' })
const pCard = phone.locator('a:has(video)').first()
await pCard.evaluate((el) => el.scrollIntoView({ block: 'center' }))
await phone.waitForTimeout(2500)
const phoneState = await pCard.locator('video').evaluate((v) => ({ paused: v.paused, time: v.currentTime.toFixed(2) }))
await pCard.screenshot({ path: `${outDir}/phone-inview.png` })

console.log('desktop', deskState, 'phone', phoneState, 'errors', errors.length)
await browser.close()
