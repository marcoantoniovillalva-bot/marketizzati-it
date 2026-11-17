'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  /** Live site loaded inside the frame (must allow being embedded). */
  url?: string
  /** Recorded scroll of the site, for sites that refuse to be embedded. */
  video?: string
  /** Screenshot shown until the live site is ready. */
  poster: string
  title: string
  /** Width the site is rendered at, then scaled down to fit (1280 desktop, 390 phone). */
  virtualWidth: number
  className?: string
}

/**
 * A real, scrollable copy of a project site inside a device frame: the iframe is rendered at desktop
 * (or phone) width and scaled to the frame, so the site's own layout and animations play as on the
 * real domain. It loads only when the frame comes near the screen.
 */
export function LiveFrame({ url, video, poster, title, virtualWidth, className = '' }: Props) {
  const box = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)
  const [near, setNear] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / virtualWidth))
    ro.observe(el)
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setNear(true), { rootMargin: '400px' })
    io.observe(el)
    return () => {
      ro.disconnect()
      io.disconnect()
    }
  }, [virtualWidth])

  const height = scale ? (box.current?.clientHeight ?? 0) / scale : 0
  return (
    <div ref={box} className={`relative overflow-hidden bg-white ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`} />
      {near && video && (
        <video src={video} poster={poster} autoPlay muted loop playsInline onLoadedData={() => setLoaded(true)} className="absolute inset-0 h-full w-full object-cover object-top" />
      )}
      {near && url && scale > 0 && (
        <iframe
          src={url}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          className={`absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ width: virtualWidth, height, transform: `scale(${scale})` }}
        />
      )}
    </div>
  )
}
