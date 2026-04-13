import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.marketizzati.it'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/corso', '/risorse', '/profilo'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
