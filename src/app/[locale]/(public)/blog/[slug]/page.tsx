import { notFound } from 'next/navigation'
import NextLink from 'next/link'
import { getAllPosts, getPostBySlug } from '@/features/blog/posts'
import type { BlogSection } from '@/features/blog/types'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'

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

  return {
    title: `${post.title} | Marketizzati`,
    description: post.description,
    keywords: post.keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `${baseUrl}${post.image}`, width: 1792, height: 1024, alt: post.imageAlt }],
    },
  }
}

function renderSection(section: BlogSection, index: number, locale: string) {
  switch (section.type) {
    case 'intro':
      return (
        <p key={index} className="text-body-lg text-foreground-secondary leading-relaxed">
          {section.content}
        </p>
      )
    case 'h2':
      return (
        <div key={index} className="mt-10">
          <h2 className="font-heading text-display-sm mb-4">{section.heading}</h2>
          <p className="text-body-md text-foreground-secondary leading-relaxed">{section.content}</p>
        </div>
      )
    case 'h3':
      return (
        <div key={index} className="mt-6">
          <h3 className="font-heading text-body-xl font-semibold mb-3">{section.heading}</h3>
          <p className="text-body-md text-foreground-secondary leading-relaxed">{section.content}</p>
        </div>
      )
    case 'list':
      return (
        <div key={index} className="mt-6">
          {section.heading && (
            <p className="font-medium mb-3">{section.heading}</p>
          )}
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-body-md text-foreground-secondary">
                <span className="text-accent font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
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
          <p className="text-body-md leading-relaxed">{section.content}</p>
        </div>
      )
    case 'paragraph':
      return (
        <p key={index} className="text-body-md text-foreground-secondary leading-relaxed mt-4">
          {section.content}
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
          className="mt-12 p-8 bg-surface-elevated border border-surface-border rounded-2xl text-center"
        >
          <h3 className="font-heading text-display-xs mb-3">{section.heading}</h3>
          <p className="text-body-md text-foreground-secondary mb-6">{section.content}</p>
          <NextLink
            href={`/${locale}/consulenza`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors"
          >
            Prenota la consulenza gratuita <ArrowRight size={16} />
          </NextLink>
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const post = await getPostBySlug(locale, slug)

  if (!post) notFound()

  const allPosts = await getAllPosts(locale)
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = allPosts[currentIndex + 1]
  const nextPost = allPosts[currentIndex - 1]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `https://www.marketizzati.it${post.image}`,
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-32 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <NextLink
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Tutti gli articoli
          </NextLink>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                {post.category}
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
          <div className="w-full rounded-2xl overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            {post.sections.map((section, i) => renderSection(section, i, locale))}
          </div>

          {/* Prev / Next */}
          {(prevPost || nextPost) && (
            <nav className="mt-16 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost && (
                <NextLink
                  href={`/${locale}/blog/${prevPost.slug}`}
                  className="group p-5 bg-surface-elevated border border-surface-border rounded-xl hover:border-accent/40 transition-colors"
                >
                  <span className="text-xs text-foreground-muted flex items-center gap-1 mb-2">
                    <ArrowLeft size={12} /> Articolo precedente
                  </span>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors line-clamp-2 block">
                    {prevPost.title}
                  </span>
                </NextLink>
              )}
              {nextPost && (
                <NextLink
                  href={`/${locale}/blog/${nextPost.slug}`}
                  className="group p-5 bg-surface-elevated border border-surface-border rounded-xl hover:border-accent/40 transition-colors sm:text-right sm:col-start-2"
                >
                  <span className="text-xs text-foreground-muted flex items-center gap-1 mb-2 sm:justify-end">
                    Articolo successivo <ArrowRight size={12} />
                  </span>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors line-clamp-2 block">
                    {nextPost.title}
                  </span>
                </NextLink>
              )}
            </nav>
          )}
        </div>
      </article>
    </>
  )
}
