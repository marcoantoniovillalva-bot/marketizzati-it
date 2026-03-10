import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketizzati.com'

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
