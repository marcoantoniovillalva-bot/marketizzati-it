import type { ServicePageKey } from '@/features/site/content/service-pages'
import type { Locale } from '@/features/site/lib/routes'
import { getStaticPosts, sortPosts } from '../posts'
import { BlogCard } from './blog-card'

/** Which blog sections fit each service page (values match BlogPost.category). */
const TOPICS: Record<ServicePageKey, string[]> = {
  siti: ['Siti web', 'Scheda Google e SEO locale'],
  artigiani: ['Siti web', 'Scheda Google e SEO locale'],
  schedaGoogle: ['Scheda Google e SEO locale', 'Siti web'],
  googleAds: ['Pubblicità Google e ChatGPT'],
  chatgptAds: ['Pubblicità Google e ChatGPT', 'AI e automazioni'],
  agenti: ['AI e automazioni'],
  sistemi: ['AI e automazioni'],
  social: ['Contenuti e social'],
  videoServizio: ['Contenuti e social'],
  milano: ['Scheda Google e SEO locale', 'Siti web'],
  pavia: ['Scheda Google e SEO locale', 'Siti web'],
  lodi: ['Scheda Google e SEO locale', 'Siti web'],
  crema: ['Scheda Google e SEO locale', 'Siti web'],
}

const TEXT: Record<Locale, { label: string; all: string }> = {
  it: { label: 'Dal blog', all: 'Tutti gli articoli' },
  es: { label: 'Del blog', all: 'Todos los artículos' },
  en: { label: 'From the blog', all: 'All articles' },
}

/**
 * Articles on the page's topic, videos first (newest first), as a row of blog cards you scroll sideways;
 * the covers play their 5-second preview on hover like in the blog. Articles are in Italian for now.
 */
export function RelatedPosts({ pageKey, locale }: { pageKey: ServicePageKey; locale: Locale }) {
  const topics = TOPICS[pageKey]
  const posts = sortPosts(getStaticPosts('it').filter((p) => topics.includes(p.category))).slice(0, 8)
  if (posts.length === 0) return null
  const t = TEXT[locale]
  return (
    <div className="mt-8 md:mt-12">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">{t.label}</p>
        <a href={`/${locale}/blog`} className="text-sm font-semibold text-brand-ink hover:underline">
          {t.all} →
        </a>
      </div>
      <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
        {posts.map((post) => (
          <div key={post.slug} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
            <BlogCard post={post} href={`/it/blog/${post.slug}`} locale={locale} compact />
          </div>
        ))}
      </div>
    </div>
  )
}
