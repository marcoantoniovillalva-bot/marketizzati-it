'use client'

import { useRef } from 'react'
import type { BlogPost } from '../types'
import type { Locale } from '@/features/site/lib/routes'
import { BlogCard } from './blog-card'

export function HomeCarousel({ posts, locale, previous, next }: { posts: BlogPost[]; locale: Locale; previous: string; next: string }) {
  const row = useRef<HTMLDivElement>(null)
  const move = (direction: number) => row.current?.scrollBy({ left: direction * (row.current.clientWidth / 3), behavior: 'smooth' })
  return <div><div className="mb-4 hidden justify-end gap-2 md:flex"><button type="button" aria-label={previous} onClick={() => move(-1)} className="rounded-full bg-white px-4 py-2">←</button><button type="button" aria-label={next} onClick={() => move(1)} className="rounded-full bg-white px-4 py-2">→</button></div><div ref={row} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">{posts.map((post) => <div key={post.slug} className="w-[80%] shrink-0 snap-center sm:w-[45%] lg:w-[31%]"><BlogCard post={post} href={`/${locale}/blog/${post.slug}`} locale={locale} compact /></div>)}</div></div>
}
