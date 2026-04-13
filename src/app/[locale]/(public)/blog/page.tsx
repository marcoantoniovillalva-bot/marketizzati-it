import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as '/blog'}
                className="group block bg-surface-elevated border border-surface-border rounded-2xl p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-foreground-muted">
                    <Clock size={12} />
                    {post.readTime} min di lettura
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
