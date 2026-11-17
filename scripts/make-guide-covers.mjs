// node scripts/make-guide-covers.mjs [--renderer=C:/path/to/marketizzati-video-renderer]
// Reuses the lead-magnet cover's typography, palette, ornaments and mascot assets.
// The sibling renderer is read-only; square masters are rendered in memory.
import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const renderer = path.resolve(process.argv.find(a => a.startsWith('--renderer='))?.slice(11) || path.join(root, '../marketizzati-video-renderer'))
const posts = path.join(root, 'src/features/blog/posts/it/guide')
const out = path.join(root, 'public/images/blog/guide')
// Editorial copy, based on the corresponding article; no availability or price claims.
const covers = {
  'agente-ai-whatsapp-piccola-impresa': ['AGENTE AI', 'SU WHATSAPP', 'Agente AI su WhatsApp per piccole imprese', 'waving', ['Messaggi', 'Compiti', 'Controlli']],
  'chatgpt-ads-italia-come-funzionano': ['CHATGPT ADS', 'COME FUNZIONANO', 'ChatGPT Ads in Italia: funzionamento e costi', 'presenting', ['Disponibilità', 'Costi', 'Campagne']],
  'creare-sito-con-chatgpt-o-claude': ['SITO AI', 'QUALI LIMITI?', 'Creare un sito con ChatGPT o Claude', 'tablet', ['Bozza', 'Pubblicazione', 'Gestione']],
  'farsi-consigliare-da-chatgpt': ['CHATGPT', 'FATTI CONSIGLIARE', 'Come farti consigliare da ChatGPT', 'thumbsup', ['Servizi', 'Territorio', 'Informazioni']],
  'google-ads-per-artigiani-budget': ['GOOGLE ADS', 'QUALE BUDGET?', 'Google Ads per artigiani: quale budget serve', 'thinking', ['Budget', 'Servizi', 'Contatti']],
  'quanto-costa-un-sito-web-all-anno': ['COSTI SITO', 'OGNI ANNO', 'Quanto costa un sito web ogni anno', 'tablet', ['Dominio', 'Hosting', 'Manutenzione']],
  'scheda-google-non-verificata-o-sospesa': ['SCHEDA GOOGLE', 'COSA FARE?', 'Scheda Google non verificata o sospesa', 'pointing', ['Accessi', 'Verifica', 'Sospensione']],
  'seo-locale-milano-pavia-lodi-crema': ['SEO LOCALE', 'FATTI TROVARE', 'SEO locale a Milano, Pavia, Lodi e Crema', 'presenting', ['Servizi', 'Comuni', 'Visibilità']],
  'sito-vetrina-o-sito-multipagina': ['SITO VETRINA', 'QUANTE PAGINE?', 'Sito vetrina o multipagina per artigiani', 'pointing', ['Struttura', 'Servizi', 'Contatti']],
  'wix-wordpress-o-sito-su-misura': ['IL SITO', 'COSA SCEGLIERE?', 'Wix, WordPress o sito su misura?', 'thinking', ['Tempo', 'Gestione', 'Confronto']],
}
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const data = async (p, mime) => `data:${mime};base64,${(await readFile(path.join(renderer, p))).toString('base64')}`
const oswald = await data('public/fonts/Oswald-Variable.ttf', 'font/ttf')
const inter = await data('public/fonts/Inter-Variable.ttf', 'font/ttf')
// One continuous radial gradient in square coordinates, including the added margins.
async function background(width, height, size) {
  const pixels = Buffer.alloc(width * height * 3)
  const left = (width - size) / 2, top = (height - size) / 2
  const stops = [[255,255,255], [255,246,242], [252,233,225]]
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const r = Math.min(1, Math.hypot(((x-left)/size-.7)/.95, ((y-top)/size-.4)/.9))
    const i = r < .45 ? 0 : 1, t = i === 0 ? r/.45 : (r-.45)/.55
    for (let c = 0; c < 3; c++) pixels[(y*width+x)*3+c] = Math.round(stops[i][c]*(1-t)+stops[i+1][c]*t)
  }
  return sharp(pixels, { raw: { width, height, channels: 3 } }).png().toBuffer()
}
const squareBg = `data:image/png;base64,${(await background(1254,1254,1254)).toString('base64')}`
const symbols = [
  '<path d="M14 2H6v20h14V8zM14 2v6h6M8 13h8M8 17h5"/>',
  '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
]
function html([title1,title2,subtitle,,chips], mascot) {
  return `<!doctype html><html lang="it"><meta charset="utf-8"><style>
  @font-face{font-family:Oswald;src:url('${oswald}');font-weight:200 700}
  @font-face{font-family:Inter;src:url('${inter}');font-weight:100 900}
  *{box-sizing:border-box;margin:0;padding:0}body{width:1254px;height:1254px;color:#141414;font-family:Inter,sans-serif;background-image:url('${squareBg}')}
  .arc{position:absolute;left:-260px;top:-260px;width:560px;height:560px;border-radius:50%;border:3px solid #e84e0f59}.arc2{position:absolute;left:-330px;top:-330px;width:700px;height:700px;border-radius:50%;background:#e84e0f0d}
  .dots{position:absolute;top:40px;width:110px;height:110px;background-image:radial-gradient(#e84e0f 2.6px,transparent 3px);background-size:22px 22px;left:40px}.dots.r{left:auto;right:40px;opacity:.45}
  .brand{position:absolute;top:58px;width:100%;text-align:center;font-size:34px;font-weight:800}.rule{margin:14px auto;width:330px;height:2px;background:#e84e0f73;position:relative}.rule:after,.divider:after{content:'';position:absolute;left:50%;top:-5px;width:12px;height:12px;border-radius:50%;background:#e84e0f}
  .title{position:absolute;left:70px;top:185px;width:1114px;font-family:Oswald,sans-serif;font-weight:700;font-size:132px;line-height:1.08}.title div{white-space:nowrap;width:max-content;max-width:1114px}.orange{color:#e84e0f}
  .sub{position:absolute;left:70px;top:510px;width:1114px;font-size:36px;font-weight:700;white-space:nowrap}.divider{position:absolute;left:70px;top:605px;width:420px;height:2px;background:#e84e0f59}
  .mascot{position:absolute;right:55px;top:620px;width:490px;height:430px;object-fit:contain;mix-blend-mode:multiply}
  .footer{position:absolute;left:70px;top:880px;font-size:29px;font-weight:700}.footer span{display:block;color:#e84e0f;font-family:Oswald;font-size:65px;margin-bottom:12px}
  .chips{position:absolute;left:62px;right:62px;bottom:56px;display:flex;background:white;border-radius:22px;padding:18px 10px;box-shadow:0 6px 18px #0000000d}.chip{flex:1;display:flex;align-items:center;justify-content:center;gap:12px;font-size:25px;font-weight:700;border-right:2px dotted #e84e0f66}.chip:last-child{border:0}svg{flex-shrink:0}
  </style><body><div class="arc2"></div><div class="arc"></div><div class="dots"></div><div class="dots r"></div><div class="brand">marketiz<span class="orange">zati</span>.it<div class="rule"></div></div>
  <div class="title"><div>${esc(title1)}</div><div class="orange">${esc(title2)}</div></div><div class="sub">${esc(subtitle)}</div><div class="divider"></div>
  <img class="mascot" src="${mascot}" alt=""><div class="footer">Guida · marketizzati.it</div>
  <div class="chips">${chips.map((c,i)=>`<div class="chip"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e84e0f" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${symbols[i]}</svg>${esc(c)}</div>`).join('')}</div></body></html>`
}
await mkdir(out, { recursive: true })
const files = (await readdir(posts)).filter(f => f.endsWith('.ts') && f !== 'index.ts')
if (files.length !== Object.keys(covers).length) throw new Error('Guide list and cover copy differ')
const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width:1254,height:1254 }, deviceScaleFactor:1 })
  for (const file of files) {
    const slug = file.slice(0,-3), spec = covers[slug]
    if (!spec) throw new Error(`Missing cover: ${slug}`)
    await page.setContent(html(spec, await data(`lead-magnets/_assets/mascot/mascot-${spec[3]}.png`, 'image/png')))
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all([...document.images].map(i => i.decode()))
      for (const el of document.querySelectorAll('.title div, .sub')) {
        let size = parseFloat(getComputedStyle(el).fontSize)
        while (el.scrollWidth > 1114 && size > 26) el.style.fontSize = `${--size}px`
        if (el.scrollWidth > 1114) throw new Error('Text overflows')
      }
      if (!document.fonts.check('700 132px Oswald') || !document.fonts.check('700 36px Inter')) throw new Error('Fonts missing')
    })
    const square = await page.screenshot({ type:'png' })
    for (const [suffix,width,height,size] of [['wide',1600,1000,1000],['tall',1080,1350,1080]]) {
      const scaled = await sharp(square).resize(size,size).png().toBuffer()
      await sharp(await background(width,height,size)).composite([{input:scaled,left:(width-size)/2,top:(height-size)/2}]).webp({quality:82}).toFile(path.join(out,`${slug}-${suffix}.webp`))
    }
    const sourcePath = path.join(posts,file), source = await readFile(sourcePath,'utf8')
    const updated = source.replace(/  image: (['"])[^\r\n]+\1,\r?\n(?:  imageTall: [^\r\n]+\r?\n)?/, (_,q) => `  image: ${q}/images/blog/guide/${slug}-wide.webp${q},\n  imageTall: ${q}/images/blog/guide/${slug}-tall.webp${q},\n`)
    if (!updated.includes(`imageTall: '/images/blog/guide/${slug}-tall.webp'`) && !updated.includes(`imageTall: "/images/blog/guide/${slug}-tall.webp"`)) throw new Error(`Image field not updated: ${slug}`)
    await writeFile(sourcePath,updated)
    console.log(`${slug} | ${spec[0]} / ${spec[1]} | ${spec[3]}`)
  }
} finally { await browser.close() }
// Remove only these guide masters, after confirming no source reference remains.
async function referenced(dir, needle) {
  for (const entry of await readdir(dir,{withFileTypes:true})) {
    const p = path.join(dir,entry.name)
    if (entry.isDirectory() ? await referenced(p,needle) : /\.(ts|tsx|js|jsx|json|css|md|mdx)$/.test(entry.name) && (await readFile(p,'utf8')).includes(needle)) return true
  }
  return false
}
for (const slug of Object.keys(covers)) {
  if (await referenced(path.join(root,'src'),`/images/blog/guide/${slug}.webp`)) throw new Error(`Old cover still referenced: ${slug}`)
  await unlink(path.join(out,`${slug}.webp`)).catch(e => { if (e.code !== 'ENOENT') throw e })
}
