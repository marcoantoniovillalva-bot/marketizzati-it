import type { NextConfig } from 'next'
import path from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    mcpServer: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // the old price article competed with the price page: its URL now points to the article on yearly costs
  async redirects() {
    return [
      {
        source: '/:locale(it|es|en)/blog/costi-realizzazione-sito-web-professionale',
        destination: '/it/blog/quanto-costa-un-sito-web-all-anno',
        permanent: true,
      },
      {
        source: '/:locale(it|es|en)/blog/:slug(come-scegliere-agenzia-social-media-marketing|facebook-ads-come-generare-lead-qualificati)',
        destination: '/it/social-media-manager',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
