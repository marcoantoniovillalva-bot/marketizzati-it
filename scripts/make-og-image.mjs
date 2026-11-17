// Default social preview image (public/images/og-image.png). node scripts/make-og-image.mjs
import sharp from 'sharp'

const font = 'Inter, Segoe UI, Arial, sans-serif'
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF8F2"/><stop offset="1" stop-color="#FFD9C4"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1060" cy="120" r="210" fill="#F2541B" opacity="0.14"/>
  <text x="80" y="150" font-family="${font}" font-size="26" font-weight="700" letter-spacing="5" fill="#F2541B">SITI PER ARTIGIANI E PICCOLE IMPRESE</text>
  <text x="80" y="255" font-family="${font}" font-size="74" font-weight="800" fill="#16120F">Il tuo sito professionale,</text>
  <text x="80" y="345" font-family="Georgia, serif" font-style="italic" font-size="74" fill="#F2541B">fatto da una persona vera.</text>
  <text x="80" y="450" font-family="${font}" font-size="36" font-weight="700" fill="#16120F">800 € una volta o 100 €/mese · logo e scheda Google inclusi</text>
  <text x="80" y="560" font-family="${font}" font-size="32" font-weight="700" fill="#16120F">marketizzati<tspan fill="#F2541B">.it</tspan></text>
</svg>`
await sharp(Buffer.from(svg)).png().toFile('public/images/og-image.png')
console.log('public/images/og-image.png')
