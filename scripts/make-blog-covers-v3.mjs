// Step 2 of the blog covers: title on top of the sharp scenes made by ai-cover-scenes.mjs.
// YouTube-thumbnail style: huge Inter 900 uppercase, white + orange, thick black outline and hard shadow,
// orange underline. wide 1600x1000 (title left), tall 1080x1350 (title on top).
// node scripts/make-blog-covers-v3.mjs [slug ...]
import { readFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import sharp from 'sharp'
import { COVERS } from './blog-covers.config.mjs'

const SCENES = 'scripts/.cover-src/scenes'
const args = process.argv.slice(2)
const langIndex = args.indexOf('--lang')
let lang
if (langIndex !== -1) {
  lang = args[langIndex + 1]
  if (!['es', 'en'].includes(lang)) throw new Error('--lang must be es or en')
  args.splice(langIndex, 2)
}
const only = args

/** Scene resized to the cover: wide crops the left edge (Marco is on the right), tall is already 4:5. */
async function scene(slug, layout, w, h) {
  const img = sharp(await readFile(`${SCENES}/${slug}-${layout}.png`))
  const buf = await img.resize(w, h, { fit: 'cover', position: layout === 'wide' ? 'right' : 'centre' }).jpeg({ quality: 92 }).toBuffer()
  return `data:image/jpeg;base64,${buf.toString('base64')}`
}

/** short words (IL, O, TI, SU...) stay glued to the next one, so a line never starts with an orphan */
const glue = (t) => t.replace(/(^|\s)(\S{1,2})\s+/g, (_, a, b) => `${a}${b} `)

const html = ({ w, h, bg, l1, l2, wide, titleW = 640 }) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=block" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box}
body{width:${w}px;height:${h}px;overflow:hidden;position:relative;background:url(${bg}) center/cover}
.title{position:absolute;${wide ? `left:56px;top:0;bottom:0;width:${titleW}px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start` : 'left:40px;right:40px;top:56px;display:flex;flex-direction:column;align-items:center'}}
.l{font-family:Inter,sans-serif;font-weight:900;text-transform:uppercase;line-height:.95;letter-spacing:-.015em;display:block;width:100%;overflow-wrap:normal;${wide ? '' : 'text-align:center;'}
  paint-order:stroke fill;-webkit-text-stroke:${wide ? 22 : 20}px #111;text-shadow:0 ${wide ? 12 : 11}px 0 #111}
.l1{color:#fff}.l2{color:#FF7A1A;margin-top:${wide ? 16 : 12}px}
.u{height:${wide ? 14 : 13}px;width:70%;border-radius:99px;background:#F2541B;margin-top:${wide ? 30 : 24}px;box-shadow:0 0 0 5px #111}
</style></head><body><div class="title"><div class="l l1">${glue(l1)}</div><div class="l l2">${glue(l2)}</div><div class="u"></div></div></body></html>`

const browser = await chromium.launch()
const page = await browser.newPage()
for (const c of COVERS) {
  if (only.length && !only.includes(c.slug)) continue
  const title = lang ? c[`title_${lang}`] ?? c.title : c.title
  for (const [layout, w, h] of [['wide', 1600, 1000], ['tall', 1080, 1350]]) {
    const wide = layout === 'wide'
    await page.setViewportSize({ width: w, height: h })
    await page.setContent(html({ w, h, bg: await scene(c.slug, layout, w, h), l1: title[0], l2: title[1], wide, titleW: c.titleW }), { waitUntil: 'networkidle' })
    // biggest size where no word overflows and the (wrapped) lines fit the title area
    // each line on one row while the letters stay big; only below `minOneRow` it may wrap (balanced)
    await page.evaluate(async ({ max, maxH, minOneRow }) => {
      await document.fonts.ready
      const lines = [...document.querySelectorAll('.l')]
      const fit = (wrap) => {
        lines.forEach((l) => { l.style.whiteSpace = wrap ? 'normal' : 'nowrap'; l.style.textWrap = 'balance' })
        let size = max
        const set = () => lines.forEach((l) => (l.style.fontSize = `${size}px`))
        set()
        const tooWide = () => lines.some((l) => l.scrollWidth > l.clientWidth + 1)
        const tooTall = () => lines.reduce((sum, l) => sum + l.offsetHeight, 0) > maxH
        while ((tooWide() || tooTall()) && size > 40) { size -= 2; set() }
        return size
      }
      if (fit(false) < minOneRow) fit(true)
    }, { max: wide ? 175 : 150, maxH: wide ? 600 : 400, minOneRow: wide ? 135 : 112 })
    await sharp(await page.screenshot()).webp({ quality: 86 }).toFile(`public/images/blog/${c.dir}/${c.slug}-${layout}${lang ? `.${lang}` : ''}.webp`)
  }
  console.log(c.dir, c.slug)
}
await browser.close()
