'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import type { BlogPost } from '../types'

type CoverPost = Pick<BlogPost, 'image' | 'imageTall' | 'imageAlt' | 'videoPreview'>

/**
 * Article cover, art-directed: 4:5 on phones when the post has a tall version, 16:10 from 640px up.
 * Posts with a social video get a 5-second muted preview like YouTube: it plays while the mouse is over
 * the card (desktop) or while the card is in the middle of the screen (touch). The clip is downloaded
 * only then (preload="none"), and never with reduced motion or data saver on.
 */
export function CoverImage({ post, priority = false, className = '' }: { post: CoverPost; priority?: boolean; className?: string }) {
  const box = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = box.current
    const clip = video.current
    if (!el || !clip) return
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || nav.connection?.saveData) return
    const card = (el.closest('a, article') as HTMLElement | null) ?? el
    const play = () => { clip.play().then(() => setPlaying(true)).catch(() => {}) }
    const stop = () => { clip.pause(); setPlaying(false) }
    if (window.matchMedia('(hover: hover)').matches) {
      card.addEventListener('mouseenter', play)
      card.addEventListener('mouseleave', stop)
      return () => { card.removeEventListener('mouseenter', play); card.removeEventListener('mouseleave', stop) }
    }
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : stop()), { rootMargin: '-30% 0px -30% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={box} className={`relative overflow-hidden bg-brand-cream ${post.imageTall ? 'aspect-[4/5] sm:aspect-[16/10]' : 'aspect-[16/10]'} ${className}`}>
      <picture>
        {post.imageTall && <source media="(max-width: 639px)" srcSet={post.imageTall} />}
        <img
          src={post.image}
          alt={post.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </picture>
      {post.videoPreview && (
        <>
          <video
            ref={video}
            src={post.videoPreview}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            className={`absolute inset-y-0 right-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-500 sm:w-[37%] sm:shadow-[-12px_0_30px_-12px_rgba(0,0,0,0.35)] ${playing ? 'opacity-100' : 'opacity-0'}`}
          />
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur" aria-hidden>
            <Play size={11} className="fill-white" /> Video
          </span>
        </>
      )}
    </div>
  )
}
