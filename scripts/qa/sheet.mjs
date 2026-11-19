// Cut a tall full-page screenshot into side-by-side columns. node scripts/qa/sheet.mjs <in.png> <out.png> [cols] [width]
import sharp from 'sharp'
const [input, out, cols = 4, width = 2000] = process.argv.slice(2)
const m = await sharp(input).metadata()
const seg = Math.ceil(m.height / +cols)
const tiles = []
for (let i = 0; i < +cols; i++) {
  const h = Math.min(seg, m.height - i * seg)
  if (h > 0) tiles.push({ input: await sharp(input).extract({ left: 0, top: i * seg, width: m.width, height: h }).toBuffer(), left: i * m.width, top: 0 })
}
const big = await sharp({ create: { width: m.width * +cols, height: seg, channels: 3, background: '#fff' } }).composite(tiles).png().toBuffer()
await sharp(big).resize({ width: +width }).png().toFile(out)
