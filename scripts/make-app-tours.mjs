// Frames of the private app tours (Lurumi, ProspectBot, Zernflow), from screenshots taken in the
// signed-in apps. Personal data (names, phones, emails, links) is blurred before anything is published.
// node scripts/make-app-tours.mjs <captures dir>
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const src = process.argv[2]
if (!src) throw new Error('usage: node scripts/make-app-tours.mjs <captures dir>')
const out = 'public/images/progetti/tour'
await mkdir(out, { recursive: true })

/** [file, regions to blur as [x, y, w, h] in capture pixels] */
const FRAMES = {
  'lurumi-1-progetti': [],
  'lurumi-2-utensili': [],
  'lurumi-3-designer': [],
  'lurumi-4-progetto': [],
  'prospect-1-dashboard': [[90, 228, 570, 52], [90, 333, 570, 52], [90, 438, 570, 62], [575, 130, 120, 18]],
  'prospect-2-ricerca': [],
  'prospect-3-scheda': [[150, 26, 290, 22], [140, 180, 130, 18], [400, 180, 230, 18], [140, 247, 140, 18]],
  'prospect-4-callagent': [[120, 20, 310, 22], [412, 196, 140, 16], [120, 333, 145, 22], [358, 338, 200, 59]],
  'prospect-5-pdf': [[48, 366, 180, 20]],
  'zern-1-publish': [[436, 110, 132, 18]],
  'zern-2-channels': [[408, 118, 130, 16]],
  'zern-3-growth': [[175, 293, 480, 28], [175, 405, 480, 42]],
}

for (const [name, regions] of Object.entries(FRAMES)) {
  const input = sharp(path.join(src, `${name}.jpg`))
  const { width, height } = await input.metadata()
  const layers = await Promise.all(
    regions.map(async ([x, y, w, h]) => {
      const left = Math.max(0, x)
      const top = Math.max(0, y)
      const cw = Math.min(w, width - left)
      const ch = Math.min(h, height - top)
      const blurred = await sharp(path.join(src, `${name}.jpg`)).extract({ left, top, width: cw, height: ch }).blur(7).toBuffer()
      return { input: blurred, left, top }
    }),
  )
  await input.composite(layers).webp({ quality: 86 }).toFile(path.join(out, `${name}.webp`))
  console.log(name, width, height, regions.length ? `${regions.length} blurred` : '')
}
