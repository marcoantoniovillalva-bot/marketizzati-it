import { getTranslations } from 'next-intl/server'
import NextLink from 'next/link'
import { getAllPosts } from '@/features/blog/posts'
import { Clock, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('blog.title'), description: t('blog.description') }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const posts = getAllPosts(locale)

  return (
    <section className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-display-lg md:text-display-xl">Blog</h1>
          <p className="mt-4 text-body-lg text-foreground-secondary max-w-2xl mx-auto">
            Strategie, guide e insight pratici per far crescere il tuo business digitale.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center p-12 bg-surface-elevated border border-surface-border rounded-2xl">
            <p className="text-foreground-secondary">Contenuti in arrivo.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <NextLink
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group block bg-surface-elevated border border-surface-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
              >
                {/* Cover image */}
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-foreground-muted">
                      <Clock size={12} />
                      {post.readTime} min di lettura
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="font-heading text-display-sm group-hover:text-accent transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-body-md text-foreground-secondary line-clamp-2 mb-6">
                    {post.description}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-medium text-accent">
                    Leggi l&apos;articolo <ArrowRight size={16} />
                  </span>
                </div>
              </NextLink>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
