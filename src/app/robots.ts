import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.marketizzati.it'
/** Private client area and APIs; everything public stays open. */
const PRIVATE = ['/api/', '/*/dashboard', '/*/corso', '/*/percorso', '/*/workspace', '/*/task', '/*/automazioni', '/*/risorse', '/*/profilo', '/*/supporto', '/*/admin', '/*/grazie']

/**
 * Search engines and every AI assistant that reads the site to answer people, all welcome. Each vendor uses
 * several crawlers (training, search index, live fetch when a user asks), and some only obey a rule with
 * their own name, so all of them are listed. `*` keeps everything else open too.
 * Tested on 2026-11-20: all of these get 200 with the full server-rendered text (scripts/qa/ai-crawlers.mjs).
 */
const BOTS = [
  // OpenAI: ChatGPT search, training, live browsing, agent and ads crawlers
  'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'ChatGPT-Agent', 'OAI-AdsBot',
  // Google: Search + AI Overviews/AI Mode (Googlebot), Gemini and Vertex (Google-Extended), other fetchers
  'Googlebot', 'Google-Extended', 'GoogleOther', 'Google-CloudVertexBot', 'Google-NotebookLM', 'Gemini-Deep-Research', 'Storebot-Google',
  // Microsoft: Bing and Copilot
  'Bingbot', 'BingPreview', 'MicrosoftPreview', 'adidxbot',
  // Anthropic: Claude
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Claude-Web', 'anthropic-ai',
  // Perplexity
  'PerplexityBot', 'Perplexity-User',
  // Apple: Siri, Spotlight, Apple Intelligence
  'Applebot', 'Applebot-Extended',
  // Meta AI
  'meta-externalagent', 'meta-externalfetcher', 'FacebookBot', 'facebookexternalhit',
  // DuckDuckGo
  'DuckDuckBot', 'DuckAssistBot',
  // Mistral (Le Chat), Amazon (Alexa, Rufus), xAI (Grok), Cohere, You.com, ByteDance, DeepSeek, Brave, Kagi
  'MistralAI-User', 'Amazonbot', 'Amzn-SearchBot', 'Amzn-User', 'GrokBot', 'xAI-Bot', 'cohere-ai', 'cohere-training-data-crawler',
  'YouBot', 'Bytespider', 'DeepSeekBot', 'Bravebot', 'Kagibot',
  // Open datasets many models are trained on, and AI2
  'CCBot', 'AI2Bot', 'Diffbot', 'Timpibot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [...BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE })), { userAgent: '*', allow: '/', disallow: PRIVATE }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
