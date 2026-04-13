import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) { console.error('Missing OPENAI_API_KEY env var'); process.exit(1) }

const images = [
  {
    filename: 'blog-costi-sito-web.jpg',
    prompt: 'A modern laptop on a clean white desk displaying a professional business website with elegant UI design. Next to it, a small notepad with simple budget numbers and a pen. Minimalist, professional photography style. Soft natural light, white and light gray tones with subtle blue accents. No text visible on screen. Clean and trustworthy feel. High quality.'
  },
  {
    filename: 'blog-facebook-ads-lead.jpg',
    prompt: 'A close-up of a smartphone and tablet showing colorful social media advertising dashboards with graphs, funnel charts showing lead conversion metrics. Small human figure icons connected by arrows representing lead flow. Modern flat illustration blended with realistic device mockups. Clean white background, red and blue social media brand colors. Professional digital marketing concept. No text. High quality.'
  },
  {
    filename: 'blog-agenzia-social-media.jpg',
    prompt: 'A bright modern open office with two or three young marketing professionals working together around a large monitor showing social media analytics and content calendar. Sticky notes on a glass wall, plants, natural light from large windows. Warm and dynamic startup atmosphere. Candid photography style. Clean and inspiring. No text visible. High quality.'
  }
]

const outputDir = path.join(__dirname, '..', 'public', 'images', 'blog')
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

async function generateImage(prompt) {
  const body = JSON.stringify({
    model: 'dall-e-3',
    prompt,
    n: 1,
    size: '1792x1024',
    quality: 'standard',
    response_format: 'url'
  })

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.openai.com',
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data)
          if (parsed.error) reject(new Error(parsed.error.message))
          else resolve(parsed.data[0].url)
        } catch (e) {
          reject(e)
        }
      })
    })
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath)
    https.get(url, (res) => {
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', (err) => {
      fs.unlink(filepath, () => {})
      reject(err)
    })
  })
}

console.log('Generating blog images with DALL-E 3...\n')

for (const img of images) {
  try {
    console.log(`Generating: ${img.filename}`)
    const url = await generateImage(img.prompt)
    const filepath = path.join(outputDir, img.filename)
    await downloadImage(url, filepath)
    console.log(`  Saved → public/images/blog/${img.filename}`)
  } catch (err) {
    console.error(`  Error: ${err.message}`)
  }
}

console.log('\nDone!')
