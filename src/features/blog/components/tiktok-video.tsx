'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

/** Accepts a TikTok video id or any TikTok video URL and returns the numeric id. */
export function tiktokId(value: string): string | null {
  const m = /(?:video\/|^)(\d{15,22})/.exec(value.trim())
  return m ? m[1] : null
}

interface Props {
  video: string
  poster: string
  title: string
  labels: { play: string; note: string; open: string }
}

/**
 * The full social video at the top of the article, played with TikTok's official embed player.
 * Click-to-load: until the visitor presses play we show the cover, so TikTok's scripts and cookies
 * are loaded only for people who actually want to watch.
 */
export function TikTokVideo({ video, poster, title, labels }: Props) {
  const [on, setOn] = useState(false)
  const id = tiktokId(video)
  if (!id) return null
  // no extra parameters: `autoplay=1` makes the player fail for visitors without TikTok cookies
  const src = `https://www.tiktok.com/player/v1/${id}`
  return (
    <figure className="mx-auto mb-10 w-full max-w-[340px] lg:mb-0 lg:max-w-none">
      <div className={`relative overflow-hidden rounded-3xl bg-ink shadow-2xl ring-1 ring-ink/10 transition-[aspect-ratio] ${on ? 'aspect-[9/16]' : 'aspect-[4/5]'}`}>
        {on ? (
          <iframe src={src} title={title} allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
        ) : (
          <button type="button" onClick={() => setOn(true)} className="group absolute inset-0" aria-label={`${labels.play}: ${title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/10" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-xl transition group-hover:scale-110">
              <Play size={34} className="ml-1 fill-white" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink-muted">
        {labels.note}{' '}
        <a href={`https://www.tiktok.com/@marco.villalva3/video/${id}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">
          {labels.open}
        </a>
      </figcaption>
    </figure>
  )
}
