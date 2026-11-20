import { BlogCard } from '@/features/blog/components/blog-card'
import type { Metadata } from 'next'
import { getAllPosts, sortPosts } from '@/features/blog/posts'
import { Heading, Section } from '@/features/site/components/section'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, pageHref, type Locale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ categoria?: string }> }

/** Blog categories, one per service. Values match BlogPost.category; free guides sit in their topic with a badge. */
const CATEGORIES = ['Siti web', 'Scheda Google e SEO locale', 'Pubblicità Google e ChatGPT', 'AI e automazioni', 'Contenuti e social'] as const

const FREE: Record<Locale, string> = { it: 'Guida gratuita in PDF', es: 'Guía gratis en PDF', en: 'Free PDF guide' }

const slugify = (s: string): string => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const COPY: Record<Locale, { meta: string; desc: string; label: string; title: string; italic: string; intro: string; all: string; read: string; empty: string }> = {
  it: { meta: 'Blog e risorse gratuite per artigiani e piccole imprese', desc: 'Guide pratiche su siti web, scheda Google, pubblicità su Google e ChatGPT, AI e automazioni. Più guide gratuite da scaricare in PDF.', label: 'Blog', title: 'Guide pratiche,', italic: 'senza giri di parole.', intro: 'Siti web, scheda Google, pubblicità, AI e automazioni spiegati semplici. E le risorse gratuite dei miei video, da scaricare.', all: 'Tutti', read: 'min di lettura', empty: 'Nessun articolo in questa categoria, per ora.' },
  es: { meta: 'Blog y recursos gratis para artesanos y pequeñas empresas', desc: 'Guías prácticas sobre webs, ficha de Google, publicidad en Google y ChatGPT, IA y automatización.', label: 'Blog', title: 'Guías prácticas,', italic: 'sin rodeos.', intro: 'Webs, ficha de Google, publicidad, IA y automatización explicadas fácil. Por ahora la mayoría de los artículos están en italiano.', all: 'Todos', read: 'min de lectura', empty: 'Todavía no hay artículos en esta categoría.' },
  en: { meta: 'Free guides for tradespeople and small businesses', desc: 'Practical guides on websites, Google Business Profile, Google and ChatGPT ads, AI and automation.', label: 'Blog', title: 'Practical guides,', italic: 'no fluff.', intro: 'Websites, Google profile, ads, AI and automation made simple. For now most articles are in Italian.', all: 'All', read: 'min read', empty: 'No articles in this category yet.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  return pageMetadata('blog', l, COPY[l].meta, COPY[l].desc)
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { categoria } = await searchParams
  const l = isLocale(locale) ? locale : 'it'
  const c = COPY[l]
  // Spanish and English show the Italian articles until they are translated
  const own = await getAllPosts(l)
  const posts = sortPosts(own.length ? own : await getAllPosts('it'))
  const active = CATEGORIES.find((cat) => slugify(cat) === categoria)
  const shown = active ? posts.filter((p) => p.category === active) : posts
  const base = pageHref('blog', l)
  const postLocale = own.length ? l : 'it'

  return (
    <Section tint="white" className="pt-24 md:pt-32">
      <Heading as="h1" label={c.label} title={c.title} italic={c.italic} intro={c.intro} />
      <nav className="-mx-4 mt-6 flex gap-2 overflow-x-auto whitespace-nowrap px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 md:mt-10" aria-label="Categorie">
        {[{ name: c.all, href: base, on: !active }, ...CATEGORIES.map((cat) => ({ name: cat, href: `${base}?categoria=${slugify(cat)}`, on: cat === active }))].map((item) => (
          <a key={item.name} href={item.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${item.on ? 'bg-ink text-white' : 'bg-brand-cream text-ink-soft hover:bg-brand-peach'}`}>
            {item.name}
          </a>
        ))}
      </nav>
      {shown.length === 0 ? (
        <p className="mt-8 md:mt-12 text-ink-muted">{c.empty}</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 md:mt-12 lg:grid-cols-3">
          {shown.map((post) => (
            <BlogCard key={post.slug} post={post} href={`/${postLocale}/blog/${post.slug}`} locale={l} />
          ))}
        </div>
      )}
    </Section>
  )
}
