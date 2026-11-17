// Blog covers for the free guides, made from the vertical covers of Marco's social videos (Google Drive).
// Two files per guide: <slug>-wide.webp (16:10, desktop/tablet cards) and <slug>-tall.webp (4:5, phones).
// node scripts/make-video-covers.mjs ["G:/Il mio Drive/video reel"]
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const driveRoot = process.argv[2] ?? 'G:/Il mio Drive/video reel'
const out = 'public/images/blog/covers'
const postsDir = 'src/features/blog/posts/it/risorse'
await mkdir(out, { recursive: true })

// video number -> guide slug (same pairs as scripts/import-lead-magnets.mjs)
const VIDEOS = {
  2: 'pluralsight-ai-mcp', 3: 'sito-cinematografico-senza-farti-fregare', 4: 'claude-per-instagram', 5: 'claude-duet-agenti-ia-sempre-attivi',
  6: 'aggiornamenti-sicurezza-ottobre-2026', 7: 'git-e-github-per-costruire-con-ia', 8: 'codex-dentro-claude-code', 9: 'voicestudio-doppiaggio-open-source',
  11: 'reel-con-claude', 12: '70-ganci-virali', 13: 'open-webui-guida', 14: 'meta-business-agent-whatsapp', 15: 'voucher-cloud-cybersecurity-checklist',
  16: 'montare-video-con-claude-code', 17: 'rtk-meno-token-claude-code', 19: 'scudo-checklist-installare-skill', 20: 'android-agente-su-windows',
  21: 'audit-sicurezza-skill-cloudflare',
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])))
  return files.flat()
}
const covers = (await walk(driveRoot)).filter((f) => /copertina.*\.jpe?g$/i.test(path.basename(f)))
const coverFor = (n) => covers.find((f) => new RegExp(`(^|\\D)video ${n}(\\D|$)`, 'i').test(path.basename(f)))

for (const [n, slug] of Object.entries(VIDEOS)) {
  const src = coverFor(n)
  if (!src) { console.log('missing cover for video', n, slug); continue }
  const input = await readFile(src)
  // wide: blurred, warm-tinted backdrop + the whole vertical cover in the middle, so title and faces always show
  const backdrop = await sharp(input).resize(1600, 1000, { fit: 'cover' }).blur(40).modulate({ brightness: 0.75 }).toBuffer()
  const front = await sharp(input).resize({ height: 1000 }).toBuffer()
  const { width } = await sharp(front).metadata()
  await sharp(backdrop).composite([{ input: front, left: Math.round((1600 - width) / 2), top: 0 }]).webp({ quality: 82 }).toFile(path.join(out, `${slug}-wide.webp`))
  // tall: top of the cover (title + faces), for phones
  await sharp(input).resize(1080, 1350, { fit: 'cover', position: 'top' }).webp({ quality: 82 }).toFile(path.join(out, `${slug}-tall.webp`))

  // the post: video cover as cover image, the robot slide (old cover) moves to the top of the body
  const file = path.join(postsDir, `${slug}.ts`)
  let ts = await readFile(file, 'utf8')
  const old = /"image": "([^"]*)",/.exec(ts)
  if (old && !old[1].includes('/covers/')) {
    const alt = /"imageAlt": ("[^"]*")/.exec(ts)?.[1] ?? '""'
    ts = ts.replace(old[0], `"image": "/images/blog/covers/${slug}-wide.webp",\n  "imageTall": "/images/blog/covers/${slug}-tall.webp",`)
    ts = ts.replace('"sections": [', `"sections": [\n    { "type": "image", "url": "${old[1]}", "alt": ${alt} },`)
    await writeFile(file, ts)
  }
  console.log(n, slug)
}
