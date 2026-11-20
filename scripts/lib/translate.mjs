// Translates an article (BlogPost JSON) into Spanish or English with Groq (gpt-oss-120b).
// Only human text is sent: title, description, keywords, alt texts and section texts. URLs, slug, dates,
// category key, image paths, code commands stay as they are. Uses GROQ_API_KEY from .env.local (never printed).
import { env } from './blog-publish.mjs'

const MODEL = env.TRANSLATE_MODEL || 'openai/gpt-oss-120b'
const LANG = { es: 'Spanish (neutral, for Spain and Latin America)', en: 'English (international)' }
const TEXT_KEYS = new Set(['title', 'description', 'imageAlt', 'content', 'heading', 'alt', 'caption', 'label'])

/** Collects [path, text] for every translatable string. */
function collect(post) {
  const out = []
  const walk = (value, path, key) => {
    if (typeof value === 'string') {
      if (TEXT_KEYS.has(key) || key === 'items' || key === 'keywords' || key === 'headers' || key === 'rows') out.push([path, value])
      return
    }
    if (Array.isArray(value)) value.forEach((v, i) => walk(v, [...path, i], key))
    else if (value && typeof value === 'object') {
      // shell/code blocks: keep commands, translate only prompts written in Italian (label "Prompt ...")
      if (value.type === 'code' && !/prompt/i.test(value.label ?? '')) { if (value.label) out.push([[...path, 'label'], value.label]); return }
      for (const [k, v] of Object.entries(value)) walk(v, [...path, k], k)
    }
  }
  walk({ title: post.title, description: post.description, imageAlt: post.imageAlt, keywords: post.keywords, sections: post.sections }, [], '')
  return out
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Groq free tier: each model has its own daily token limit, so when one is used up the next one takes over
const MODELS = [MODEL, 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'].filter((m, i, a) => a.indexOf(m) === i)
let current = 0

/** One batch: up to 3 attempts for malformed JSON; per-minute limit (429) -> wait; daily limit -> next model. */
async function translateBatch(texts, lang) {
  let last
  for (let attempt = 0, waits = 0; attempt < 3 && waits < 20;) {
    try { return await callModel(texts, lang, MODELS[current]) } catch (e) {
      last = e
      if (/tokens per day|TPD/.test(e.message) && current < MODELS.length - 1) { current++; continue }
      if (/Groq 429/.test(e.message)) { waits++; await sleep(65000); continue }
      attempt++
    }
  }
  throw last
}

async function callModel(texts, lang, model) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(120000), // a stuck request must not block the whole run
    body: JSON.stringify({
      model,
      temperature: 0.2,
      ...(model.includes('gpt-oss') ? { reasoning_effort: 'low' } : {}),
      max_completion_tokens: 16000,
      messages: [
        { role: 'system', content: `You translate Italian marketing/tech articles into ${LANG[lang]}. Natural, native, not literal. Keep: numbers, prices (€), brand and product names, "Marketizzati", "Marco", markdown (**bold**, [label](url) — translate only the label, never the url), shell commands, code, file names, URLs, emojis. Descriptions stay under 155 characters. If a text mentions the PDF guide, add "(PDF in Italian)" for English or "(PDF en italiano)" for Spanish. Reply ONLY with JSON {"t": [...]} with exactly the same number of strings, same order.` },
        { role: 'user', content: JSON.stringify({ t: texts }) },
      ],
    }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`Groq ${res.status}: ${JSON.stringify(json.error ?? json).slice(0, 200)}`)
  const text = json.choices?.[0]?.message?.content ?? ''
  const start = text.indexOf('{'), end = text.lastIndexOf('}')
  if (start < 0 || end < start) throw new Error('Translation without JSON')
  const out = JSON.parse(text.slice(start, end + 1)).t
  if (!Array.isArray(out) || out.length !== texts.length) throw new Error('Translation returned a different number of strings')
  return out
}

/** Returns a translated copy of the post (same slug, same media). */
export async function translatePost(post, lang) {
  const items = collect(post)
  const translated = []
  // batches by size (Groq free tier: 8,000 tokens per minute, input + output): ~3,500 characters each
  let batch = []
  let chars = 0
  const flush = async () => { if (batch.length) translated.push(...(await translateBatch(batch, lang))); batch = []; chars = 0 }
  for (const [, text] of items) {
    if (batch.length && (chars + text.length > 3500 || batch.length >= 15)) await flush()
    batch.push(text)
    chars += text.length
  }
  await flush()
  const copy = JSON.parse(JSON.stringify(post))
  const root = { title: copy.title, description: copy.description, imageAlt: copy.imageAlt, keywords: copy.keywords, sections: copy.sections }
  items.forEach(([path], i) => {
    let obj = root
    for (const k of path.slice(0, -1)) obj = obj[k]
    obj[path[path.length - 1]] = translated[i]
  })
  return { ...copy, ...root, description: root.description.length > 155 ? root.description.slice(0, 152).replace(/\s+\S*$/, '') + '…' : root.description }
}
