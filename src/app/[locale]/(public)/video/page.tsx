import type { Metadata } from 'next'
import { getAllPosts } from '@/features/blog/posts'
import { JsonLdBlocks } from '@/features/site/components/json-ld'
import { Heading, Section } from '@/features/site/components/section'
import { SOCIAL } from '@/features/site/lib/links'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, type Locale } from '@/features/site/lib/routes'
import { professionalService } from '@/features/site/lib/schema'

type Props = { params: Promise<{ locale: string }> }

const COPY: Record<Locale, { meta: string; desc: string; intro: string; channel: string; read: string; watch: string; empty: string }> = {
  it: { meta: 'Video e guide gratuite di Marketizzati', desc: 'Video e guide pratiche su AI, pubblicità e siti web per piccole imprese. Guarda i video e leggi le risorse gratuite.', intro: 'Sul canale trovi consigli pratici su AI, pubblicità e siti web per piccole imprese.', channel: 'Visita il canale YouTube', read: 'Leggi la guida', watch: 'Guarda su YouTube', empty: 'Nessun video disponibile per ora.' },
  es: { meta: 'Vídeos y guías gratis de Marketizzati', desc: 'Vídeos y guías prácticas sobre IA, publicidad y páginas web para pequeñas empresas. Mira los vídeos y lee los recursos gratis.', intro: 'En el canal encontrarás consejos prácticos sobre IA, publicidad y páginas web para pequeñas empresas.', channel: 'Visita el canal de YouTube', read: 'Lee la guía', watch: 'Ver en YouTube', empty: 'Todavía no hay vídeos disponibles.' },
  en: { meta: 'Free videos and guides from Marketizzati', desc: 'Practical videos and guides on AI, advertising and websites for small businesses. Watch the videos and read the free resources.', intro: 'The channel shares practical advice on AI, advertising and websites for small businesses.', channel: 'Visit the YouTube channel', read: 'Read the guide', watch: 'Watch on YouTube', empty: 'No videos available yet.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  return pageMetadata('video', l, COPY[l].meta, COPY[l].desc)
}

export default async function VideoPage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const c = COPY[l]
  const posts = (await getAllPosts(l)).filter((post) => post.youtube).sort((a, b) => b.date.localeCompare(a.date))
  const list = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem', position: index + 1, item: {
        '@type': 'VideoObject', name: post.title, description: post.description,
        thumbnailUrl: `https://i.ytimg.com/vi/${post.youtube}/hqdefault.jpg`, uploadDate: post.date,
        embedUrl: `https://www.youtube.com/embed/${post.youtube}`, contentUrl: `https://www.youtube.com/shorts/${post.youtube}`, inLanguage: l,
      },
    })),
  }
  return (
    <Section tint="white" className="pt-24 md:pt-32">
      <JsonLdBlocks blocks={[professionalService(l), list]} />
      <Heading as="h1" label="Video" title={c.meta} intro={c.intro} />
      <p className="mt-4"><a className="font-semibold text-brand hover:underline" href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer">{c.channel} →</a></p>
      {posts.length === 0 ? <p className="mt-8 text-ink-muted">{c.empty}</p> : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl bg-brand-cream">
              {/* YouTube supplies the thumbnail for each Short. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi/${post.youtube}/hqdefault.jpg`} alt="" loading="lazy" className="aspect-video w-full object-cover" />
              <div className="space-y-3 p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-ink">{post.title}</h2>
                <time dateTime={post.date} className="block text-sm text-ink-muted">{new Intl.DateTimeFormat(l, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(post.date))}</time>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-brand">
                  <a href={`/${l}/blog/${post.slug}`} className="hover:underline">{c.read}</a>
                  <a href={`https://www.youtube.com/shorts/${post.youtube}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.watch}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
