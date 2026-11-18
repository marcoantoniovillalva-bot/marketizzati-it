// 5-second muted previews of the social videos, played on the blog cards on hover (like YouTube).
// 540 px wide, H.264, no audio, ~350-600 KB each, in public/videos/preview/<slug>.mp4.
// node scripts/make-video-previews.mjs ["G:/Il mio Drive/video reel/video pronti"] [--start 1.5]
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const startFlag = args.indexOf('--start')
const START = startFlag >= 0 ? args.splice(startFlag, 2)[1] : '1.5'
const SRC = args[0] ?? 'G:/Il mio Drive/video reel/video pronti'
const OUT = 'public/videos/preview'
mkdirSync(OUT, { recursive: true })

/** video number -> blog slug (same pairs as the free-guide import) */
export const VIDEO_SLUGS = {
  2: 'pluralsight-ai-mcp', 3: 'sito-cinematografico-senza-farti-fregare', 4: 'claude-per-instagram', 5: 'claude-duet-agenti-ia-sempre-attivi',
  6: 'aggiornamenti-sicurezza-ottobre-2026', 7: 'git-e-github-per-costruire-con-ia', 8: 'codex-dentro-claude-code', 9: 'voicestudio-doppiaggio-open-source',
  11: 'reel-con-claude', 12: '70-ganci-virali', 13: 'open-webui-guida', 14: 'meta-business-agent-whatsapp', 15: 'voucher-cloud-cybersecurity-checklist',
  16: 'montare-video-con-claude-code', 17: 'rtk-meno-token-claude-code', 19: 'scudo-checklist-installare-skill', 20: 'android-agente-su-windows',
  21: 'audit-sicurezza-skill-cloudflare',
}

const files = readdirSync(SRC).filter((f) => /^video \d+ - .*\.mp4$/i.test(f))
for (const [n, slug] of Object.entries(VIDEO_SLUGS)) {
  const file = files.find((f) => f.toLowerCase().startsWith(`video ${n} - `))
  if (!file) { console.log('missing video', n, slug); continue }
  const out = path.join(OUT, `${slug}.mp4`)
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', START, '-t', '5', '-i', path.join(SRC, file), '-an',
    '-vf', 'scale=540:-2,fps=30', '-c:v', 'libx264', '-profile:v', 'main', '-pix_fmt', 'yuv420p', '-crf', '26', '-preset', 'slow', '-movflags', '+faststart', out])
  console.log(slug, Math.round(statSync(out).size / 1024), 'KB')
}
