'use client'

import { useEffect, useRef, useState } from 'react'
import type { Locale } from '../lib/routes'

export interface TourFrame {
  /** Screenshot in /images/progetti/tour (scripts/make-app-tours.mjs). */
  src: string
  caption: Record<Locale, string>
  /** Where the cursor clicks, in % of the frame. */
  click?: [number, number]
}

interface Props {
  frames: TourFrame[]
  device: 'desktop' | 'phone'
  name: string
  locale: Locale
  className?: string
}

const STEP_MS = 3800

/**
 * A walkthrough of a private app made from its real screens: each screen fades in with a slow camera
 * move, a cursor clicks where the next action happens, and a caption says what you are looking at.
 * Plays only while on screen; with reduced motion it stays on the first screen with its caption.
 */
export function AppTour({ frames, device, name, locale, className = '' }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const [i, setI] = useState(0)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!on || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % frames.length), STEP_MS)
    return () => clearInterval(t)
  }, [on, frames.length])

  const frame = frames[i]
  const phone = device === 'phone'
  return (
    <div ref={box} className={className}>
      <div className={phone ? 'mx-auto w-[230px] rounded-[2.4rem] bg-ink p-2 shadow-2xl' : 'overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink/10'}>
        {!phone && (
          <div className="flex gap-1.5 border-b border-ink/5 bg-[#f7f4f1] px-4 py-2.5" aria-hidden>
            {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
              <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
        )}
        <div className={`relative overflow-hidden bg-white ${phone ? 'aspect-[9/19] rounded-[1.9rem]' : 'aspect-[16/10]'}`}>
          {frames.map((f, n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={f.src}
              src={f.src}
              alt={`${name}: ${f.caption[locale]}`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${n === i ? 'opacity-100' : 'opacity-0'} ${n === i && on ? (phone ? 'mk-tour-pan-y' : 'mk-tour-zoom') : ''}`}
            />
          ))}
          {frame.click && on && (
            <span key={`c${i}`} className="mk-tour-cursor pointer-events-none absolute z-10" style={{ left: `${frame.click[0]}%`, top: `${frame.click[1]}%` }} aria-hidden>
              <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-brand/40" />
              <svg width="18" height="18" viewBox="0 0 24 24" className="relative drop-shadow" aria-hidden>
                <path d="M4 2l16 9-7 2-3 7z" fill="#16120F" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex gap-1.5" aria-hidden>
          {frames.map((f, n) => (
            <button key={f.src} type="button" onClick={() => setI(n)} className={`h-1.5 rounded-full transition-all ${n === i ? 'w-6 bg-brand' : 'w-1.5 bg-ink/20'}`} tabIndex={-1} />
          ))}
        </div>
        <p className="text-sm font-semibold text-ink-soft" aria-live="polite">
          {frame.caption[locale]}
        </p>
      </div>
    </div>
  )
}
