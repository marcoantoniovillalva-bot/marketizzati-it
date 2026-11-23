import { BlogCard } from '@/features/blog/components/blog-card'
import { CoverImage } from '@/features/blog/components/cover-image'
import { TikTokVideo } from '@/features/blog/components/tiktok-video'
import { notFound } from 'next/navigation'
import NextLink from 'next/link'
import { getAllPosts, getPostBySlug, sortPosts } from '@/features/blog/posts'
import type { BlogSection } from '@/features/blog/types'
import { toAbsoluteSiteUrl } from '@/lib/media-url'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { WA_LINK } from '@/features/site/lib/links'
import { isLocale, pageHref } from '@/features/site/lib/routes'
import { categoryLabel } from '@/features/blog/categories'

const CTA = {
  it: { prices: 'Vedi i prezzi', plans: 'Vedi i piani automazioni', wa: 'Scrivimi su WhatsApp' },
  es: { prices: 'Ver los precios', plans: 'Ver los planes de automatización', wa: 'Escríbeme por WhatsApp' },
  en: { prices: 'See the prices', plans: 'See the automation plans', wa: 'Message me on WhatsApp' },
} as const

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales = ['it', 'en', 'es']
  const params = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getAllPosts(locale)
      return posts.map((post) => ({ locale, slug: post.slug }))
    })
  )
  return params.flat()
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const post = await getPostBySlug(locale, slug)
  if (!post) return {}

  const baseUrl = 'https://www.marketizzati.it'
  const url = `${baseUrl}/${locale}/blog/${post.slug}`
  // hreflang: the same article in the other languages it exists in (Italian is the x-default)
  const found = await Promise.all((['it', 'es', 'en'] as const).map(async (l) => ((await getPostBySlug(l, post.slug)) ? l : null)))
  const langs = found.filter((l): l is 'it' | 'es' | 'en' => l !== null)
  const languages = langs.length > 1
    ? { ...Object.fromEntries(langs.map((l) => [l, `${baseUrl}/${l}/blog/${post.slug}`])), ...(langs.includes('it') ? { 'x-default': `${baseUrl}/it/blog/${post.slug}` } : {}) }
    : undefined

  return {
    title: { absolute: seoTitle(post.title) },
    description: post.description,
    keywords: post.keywords.join(', '),
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: toAbsoluteSiteUrl(post.image, baseUrl), width: 1792, height: 1024, alt: post.imageAlt }],
    },
  }
}

/** Search result title: at most 60 characters (Google cuts longer ones); the page keeps the full title as H1. */
function seoTitle(title: string): string {
  const brand = `${title} | Marketizzati`
  if (brand.length <= 60) return brand
  const candidates = [title, title.split(' + ')[0], title.split(' (')[0], title.split(', ')[0]].map((t) => t.trim())
  const fit = candidates.find((t) => t.length <= 60 && t.length >= 25)
  if (fit) return fit
  return title.slice(0, 58).replace(/\s+\S*$/, '').replace(/[\s,:;–—-]+$/, '') + '…'
}

function renderInline(text: string, links = true) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^\s)]+\))/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{renderInline(part.slice(2, -2), links)}</strong>
    const link = links ? /^\[([^\]]+)\]\(([^\s)]+)\)$/.exec(part) : null
    if (link && /^(https?:\/\/|\/(?!\/)|mailto:|tel:)/i.test(link[2])) {
      return <a key={index} href={link[2]} {...(/^https?:/.test(link[2]) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="font-medium text-brand-ink underline underline-offset-4">{link[1]}</a>
    }
    return part
  })
}

const NAV_LABELS = {
  it: { prev: '← Articolo precedente', next: 'Articolo successivo →' },
  es: { prev: '← Artículo anterior', next: 'Artículo siguiente →' },
  en: { prev: '← Previous article', next: 'Next article →' },
} as const

const VIDEO_LABELS = {
  it: { play: 'Guarda il video', note: 'Il video si apre con il player di TikTok.', open: 'Non parte? Guardalo su TikTok →', also: 'Guardalo anche su TikTok →' },
  es: { play: 'Ver el vídeo', note: 'El vídeo se abre con el reproductor de TikTok.', open: '¿No arranca? Míralo en TikTok →', also: 'Míralo también en TikTok →' },
  en: { play: 'Watch the video', note: 'The video opens in the TikTok player.', open: 'Not playing? Watch it on TikTok →', also: 'Watch it on TikTok too →' },
}

/** `automation`: AI and automation articles point their call to action at the automation plans. */
function renderSection(section: BlogSection, index: number, locale: string, automation = false) {
  switch (section.type) {
    case 'intro':
      return (
        <p key={index} className="text-body-lg text-foreground-secondary leading-relaxed">
          {renderInline(section.content)}
        </p>
      )
    case 'h2':
      return (
        <div key={index} className="mt-6 md:mt-10">
          <h2 className="font-heading text-display-sm mb-4">{renderInline(section.heading)}</h2>
          <p className="text-body-md text-foreground-secondary leading-relaxed">{renderInline(section.content)}</p>
        </div>
      )
    case 'h3':
      return (
        <div key={index} className="mt-6">
          <h3 className="font-heading text-body-xl font-semibold mb-3">{renderInline(section.heading)}</h3>
          <p className="text-body-md text-foreground-secondary leading-relaxed">{renderInline(section.content)}</p>
        </div>
      )
    case 'list':
      return (
        <div key={index} className="mt-6">
          {section.heading && (
            <p className="font-medium mb-3">{renderInline(section.heading)}</p>
          )}
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-body-md text-foreground-secondary">
                <span className="text-accent font-bold mt-0.5 shrink-0">→</span>
                <span>{renderInline(item, true)}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'callout':
      return (
        <div
          key={index}
          className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl"
        >
          <p className="text-body-md leading-relaxed">{renderInline(section.content, true)}</p>
        </div>
      )
    case 'table':
      return (
        <div key={index} className="mt-8 overflow-x-auto rounded-2xl border border-surface-border">
          <table className="w-full text-left text-body-md text-foreground-secondary">
            {section.caption && <caption className="p-3 text-sm text-foreground-muted">{section.caption}</caption>}
            <thead className="bg-accent/5">
              <tr>{section.headers.map((header, i) => <th key={i} scope="col" className="p-3 font-semibold">{renderInline(header)}</th>)}</tr>
            </thead>
            <tbody>{section.rows.map((row, i) => (
              <tr key={i} className="border-t border-surface-border">{row.map((cell, j) => <td key={j} className="p-3 align-top">{renderInline(cell)}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
      )
    case 'code':
      return (
        <div key={index} className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
          {section.label && <p className="mb-3 text-xs font-semibold text-foreground-muted">{section.label}</p>}
          <pre className="overflow-x-auto whitespace-pre-wrap break-words text-sm leading-relaxed"><code>{section.content}</code></pre>
        </div>
      )
    case 'paragraph':
      return (
        <p key={index} className="text-body-md text-foreground-secondary leading-relaxed mt-4">
          {renderInline(section.content)}
        </p>
      )
    case 'image':
      return (
        <figure key={index} className="mt-8">
          <img
            src={section.url}
            alt={section.alt}
            className="w-full rounded-2xl object-cover"
          />
          {section.caption && (
            <figcaption className="mt-2 text-center text-xs text-foreground-muted">{section.caption}</figcaption>
          )}
        </figure>
      )
    case 'video':
      return (
        <figure key={index} className="mt-8">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${section.youtubeId}`}
              className="w-full h-full"
              allowFullScreen
              title={section.caption ?? 'Video'}
            />
          </div>
          {section.caption && (
            <figcaption className="mt-2 text-center text-xs text-foreground-muted">{section.caption}</figcaption>
          )}
        </figure>
      )
    case 'cta':
      return (
        <div
          key={index}
          className="mt-8 md:mt-12 p-8 bg-surface-elevated border border-surface-border rounded-2xl text-center"
        >
          <h3 className="font-heading text-display-xs mb-3">{renderInline(section.heading)}</h3>
          <p className="text-body-md text-foreground-secondary mb-6">{renderInline(section.content)}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <NextLink
              href={automation ? pageHref('sistemi', locale, '#piani') : pageHref('prezzi', locale)}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              {CTA[isLocale(locale) ? locale : 'it'][automation ? 'plans' : 'prices']} <ArrowRight size={16} />
            </NextLink>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-semibold">
              {CTA[isLocale(locale) ? locale : 'it'].wa}
            </a>
          </div>
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const post = await getPostBySlug(locale, slug)

  if (!post) notFound()

  const allPosts = sortPosts(await getAllPosts(locale))
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = allPosts[currentIndex + 1]
  const nextPost = allPosts[currentIndex - 1]
  const lang = isLocale(locale) ? locale : 'it'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: toAbsoluteSiteUrl(post.image),
    author: {
      '@type': 'Person',
      name: 'Marco Antonio Villalva',
      url: 'https://www.marketizzati.it',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marketizzati',
      url: 'https://www.marketizzati.it',
      logo: { '@type': 'ImageObject', url: 'https://www.marketizzati.it/favicon.png' },
    },
    keywords: post.keywords.join(', '),
    inLanguage: lang,
    // the article's YouTube Short: lets Google show the video in search and in the Videos tab
    ...(post.youtube ? {
      video: {
        '@type': 'VideoObject',
        name: post.title,
        description: post.description,
        thumbnailUrl: `https://i.ytimg.com/vi/${post.youtube}/hqdefault.jpg`,
        uploadDate: post.date,
        embedUrl: `https://www.youtube.com/embed/${post.youtube}?hl=${lang}`,
        inLanguage: lang,
        contentUrl: `https://www.youtube.com/shorts/${post.youtube}`,
      },
    } : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-white px-4 pb-32 pt-32 sm:px-6" data-tinta="#FFFFFF">
        <div className={post.tiktok || post.youtube ? 'mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-14' : 'mx-auto max-w-2xl'}>
        <div className="mx-auto w-full max-w-2xl min-w-0">
          {/* Back */}
          <NextLink
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Tutti gli articoli
          </NextLink>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                {categoryLabel(post.category, isLocale(locale) ? locale : 'it')}
              </span>
              <span className="flex items-center gap-1 text-xs text-foreground-muted">
                <Clock size={12} /> {post.readTime} min di lettura
              </span>
              <span className="text-xs text-foreground-muted">
                {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="font-heading text-display-md md:text-display-lg leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-body-lg text-foreground-secondary">{post.description}</p>
          </header>

          {/* Hero image */}
          {post.tiktok || post.youtube ? (
            <div className="lg:hidden">
              <TikTokVideo video={post.tiktok} youtube={post.youtube} poster={post.imageTall ?? post.image} title={post.title} labels={VIDEO_LABELS[isLocale(locale) ? locale : 'it']} lang={isLocale(locale) ? locale : 'it'} />
            </div>
          ) : (
            <CoverImage post={post} priority className="mb-10 w-full rounded-2xl" />
          )}

          {/* Content: long URLs, file names and code wrap instead of widening the page on phones */}
          <div className="min-w-0 [overflow-wrap:anywhere]">
            {post.sections.map((section, i) => renderSection(section, i, locale, post.category === 'AI e automazioni'))}
          </div>

          {/* Prev / Next: full cards with the autoplaying video preview, like the other blog lists */}
          {(prevPost || nextPost) && (
            <nav className="mt-16 grid grid-cols-2 gap-3 border-t border-surface-border pt-8 sm:gap-4" aria-label="Altri articoli">
              {[{ p: prevPost, label: NAV_LABELS[lang].prev }, { p: nextPost, label: NAV_LABELS[lang].next }].map(({ p, label }) =>
                p ? (
                  <div key={p.slug} className="flex min-w-0 flex-col gap-2">
                    <span className="text-xs text-foreground-muted">{label}</span>
                    <BlogCard post={p} href={`/${locale}/blog/${p.slug}`} locale={lang} compact autoPlay />
                  </div>
                ) : (
                  <span key={label} />
                ),
              )}
            </nav>
          )}
        </div>
        {(post.tiktok || post.youtube) && (
          <aside className="sticky top-28 hidden lg:block">
            <TikTokVideo video={post.tiktok} youtube={post.youtube} poster={post.imageTall ?? post.image} title={post.title} labels={VIDEO_LABELS[isLocale(locale) ? locale : 'it']} lang={isLocale(locale) ? locale : 'it'} />
          </aside>
        )}
        </div>
      </article>
    </>
  )
}
