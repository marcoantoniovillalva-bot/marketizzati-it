// Blog covers, step 1 of 2 (step 2: make-blog-covers-v3.mjs). Sources in scripts/.cover-src, not committed.
// cover into a sharp landscape (16:9) and portrait (4:5) scene, same person, expression and badges,
// WITHOUT text; step 2 (make-blog-covers-v3.mjs) puts the title on top.
// The token is read from the video renderer's .env.local at runtime and never printed.
// node scripts/ai-cover-scenes.mjs [--model google/nano-banana-pro] [slug ...]
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import sharp from 'sharp'
import { COVERS } from './blog-covers.config.mjs'

const SRC = 'scripts/.cover-src'
const OUT = 'scripts/.cover-src/scenes'
await mkdir(OUT, { recursive: true })

const args = process.argv.slice(2)
const modelFlag = args.indexOf('--model')
const MODEL = modelFlag >= 0 ? args.splice(modelFlag, 2)[1] : 'google/nano-banana'
const force = args.includes('--force') ? (args.splice(args.indexOf('--force'), 1), true) : false
const only = args

const env = (await readFile('../marketizzati-video-renderer/.env.local', 'utf8')).replace(/^﻿/, '')
const TOKEN = /^REPLICATE_API_TOKEN=(.*)$/m.exec(env)?.[1]?.trim()
if (!TOKEN) throw new Error('REPLICATE_API_TOKEN missing in the renderer .env.local')

const FRAME = {
  wide: 'a 16:9 LANDSCAPE YouTube thumbnail. Put the man on the RIGHT half of the frame, head and badges fully inside with margin above the head. Keep the LEFT half as clean, sharp background (office, plants, warm light) with no objects, where a big title will be added later.',
  tall: 'a 4:5 PORTRAIT thumbnail. Put the man in the LOWER 65% of the frame, centred, head and badges fully inside. Keep the TOP 35% as clean, sharp background with no objects, where a big title will be added later.',
}

function prompt(cover, layout) {
  const who = cover.icons
    ? `Same man, same face, same glasses, same clothes and same expression. REMOVE the floating icon badges of the original and instead put exactly two new glossy 3D app-style icon badges floating next to his face: ${cover.icons}.`
    : 'Same man (or men), same faces, same glasses, same clothes, same hand gestures and the same floating 3D icon badges next to the face, with the same look.'
  return [
    `Recreate this vertical video cover as ${FRAME[layout]}`,
    who,
    'Same bright modern office with plants and warm orange light, and the same big orange glowing circle behind him.',
    'Everything SHARP and in focus, photorealistic, high contrast, vivid YouTube thumbnail look. No blur on the background.',
    'REMOVE ALL TEXT, letters, titles, captions and the orange underline: the image must contain no writing at all.',
  ].join(' ')
}

async function run(input) {
  const res = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', Prefer: 'wait=60' },
    body: JSON.stringify({ input }),
  })
  let p = await res.json()
  if (!res.ok) throw new Error(`replicate ${res.status}: ${p.detail ?? p.title ?? 'error'}`)
  while (p.status === 'starting' || p.status === 'processing') {
    await new Promise((r) => setTimeout(r, 2500))
    p = await (await fetch(p.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } })).json()
  }
  if (p.status !== 'succeeded') throw new Error(`prediction ${p.status}: ${p.error ?? ''}`)
  const url = Array.isArray(p.output) ? p.output[0] : p.output
  return Buffer.from(await (await fetch(url)).arrayBuffer())
}

for (const cover of COVERS) {
  if (only.length && !only.includes(cover.slug)) continue
  const src = await sharp(await readFile(`${SRC}/${cover.src}.jpg`)).resize({ height: 1600 }).jpeg({ quality: 88 }).toBuffer()
  const image = `data:image/jpeg;base64,${src.toString('base64')}`
  for (const layout of ['wide', 'tall']) {
    const file = `${OUT}/${cover.slug}-${layout}.png`
    if (existsSync(file) && !force) continue
    try {
      const out = await run({ prompt: prompt(cover, layout), image_input: [image], aspect_ratio: layout === 'wide' ? '16:9' : '4:5', output_format: 'png' })
      await writeFile(file, out)
      console.log('ok', cover.slug, layout)
    } catch (e) {
      console.log('FAIL', cover.slug, layout, String(e.message).slice(0, 160))
    }
  }
}
