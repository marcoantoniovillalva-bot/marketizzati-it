import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.marketizzati.it'
/** Private client area and APIs; everything public stays open. */
const PRIVATE = ['/api/', '/*/dashboard', '/*/corso', '/*/percorso', '/*/workspace', '/*/task', '/*/automazioni', '/*/risorse', '/*/profilo', '/*/supporto', '/*/admin', '/*/grazie']

/** Search engines and the AI assistants that read the site to answer people (ChatGPT, Bing). */
const BOTS = ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'Bingbot', 'Googlebot', 'PerplexityBot', 'ClaudeBot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [...BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE })), { userAgent: '*', allow: '/', disallow: PRIVATE }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
