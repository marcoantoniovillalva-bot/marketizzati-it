import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.marketizzati.it'
/** Private client area and APIs; everything public stays open. */
const PRIVATE = ['/api/', '/*/dashboard', '/*/corso', '/*/percorso', '/*/workspace', '/*/task', '/*/automazioni', '/*/risorse', '/*/profilo', '/*/supporto', '/*/admin', '/*/grazie']

/**
 * Search engines and the AI assistants that read the site to answer people, all welcome:
 * ChatGPT (OAI-SearchBot, GPTBot, ChatGPT-User), Gemini and Google AI Overviews (Googlebot, Google-Extended),
 * Copilot (Bingbot), Claude (ClaudeBot, Claude-SearchBot, Claude-User), Perplexity, Apple Intelligence, Meta AI,
 * DuckDuckGo Assist, Mistral, and Common Crawl (the open dataset many models learn from).
 */
const BOTS = [
  'OAI-SearchBot', 'GPTBot', 'ChatGPT-User',
  'Googlebot', 'Google-Extended',
  'Bingbot',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Applebot', 'Applebot-Extended',
  'meta-externalagent', 'DuckAssistBot', 'MistralAI-User', 'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [...BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE })), { userAgent: '*', allow: '/', disallow: PRIVATE }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
