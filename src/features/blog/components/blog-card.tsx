import type { Locale } from '@/features/site/lib/routes'
import type { BlogPost } from '../types'
import { CoverImage } from './cover-image'

const TEXT: Record<Locale, { free: string; read: string }> = {
  it: { free: 'Guida gratuita in PDF', read: 'min di lettura' },
  es: { free: 'Guía gratis en PDF', read: 'min de lectura' },
  en: { free: 'Free PDF guide', read: 'min read' },
}

/** One article card: cover (with the hover video preview), category, free-guide badge, title, description. */
export function BlogCard({ post, href, locale, compact = false, autoPlay = false }: { post: BlogPost; href: string; locale: Locale; compact?: boolean; autoPlay?: boolean }) {
  const t = TEXT[locale]
  return (
    <a href={href} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl">
      <CoverImage post={post} autoPlay={autoPlay} />
      <div className={`flex flex-1 flex-col ${compact ? 'p-4 sm:p-5' : 'p-3 sm:p-6'}`}>
        <p className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand sm:gap-2 sm:text-xs">
          {post.category}
          {post.freeGuide && <span className="rounded-full bg-[#e9f8ee] px-2 py-0.5 text-[10px] tracking-normal text-[#1c8a43]">{t.free}</span>}
        </p>
        <h3 className={`mt-1.5 font-bold leading-snug sm:mt-2 ${compact ? 'line-clamp-2 text-base' : 'line-clamp-3 text-sm sm:line-clamp-none sm:text-lg'}`}>{post.title}</h3>
        <p className={`mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft ${compact ? '' : 'hidden sm:block'}`}>{post.description}</p>
        <p className="mt-auto pt-2 text-[11px] text-ink-muted sm:pt-4 sm:text-xs">
          {post.readTime} {t.read}
        </p>
      </div>
    </a>
  )
}
