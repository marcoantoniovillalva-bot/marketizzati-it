import type { NextConfig } from 'next'
import path from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'
import { RETIRED_POSTS } from './src/features/blog/retired-posts'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    mcpServer: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // old articles that now point elsewhere (one list, also used to keep them out of the blog and the sitemap)
  async redirects() {
    return Object.entries(RETIRED_POSTS).map(([slug, destination]) => ({
      source: `/:locale(it|es|en)/blog/${slug}`,
      destination,
      permanent: true,
    }))
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
