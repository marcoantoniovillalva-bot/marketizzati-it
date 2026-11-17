'use client'

import { useEffect } from 'react'

/** Every <section data-tinta="#rrggbb"> sets the page colour while it crosses the middle of the screen. */
const SELECTOR = '[data-tinta]'

type Rgb = [number, number, number]

const parse = (hex: string): Rgb => {
  const h = hex.trim().replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as Rgb
}
const ease = (x: number): number => x * x * (3 - 2 * x)

/** Blends the page background from section to section as you scroll (the officeaigent.com effect). */
export function TintBackground() {
  useEffect(() => {
    let frame = 0
    const paint = (): void => {
      frame = 0
      const sections = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
      if (!sections.length) return
      const mid = window.innerHeight * 0.55
      let i = sections.findIndex((s) => s.getBoundingClientRect().bottom > mid)
      if (i < 0) i = sections.length - 1
      const current = sections[i]
      const next = sections[i + 1]
      const rect = current.getBoundingClientRect()
      // start blending into the next colour during the last 35% of the current section
      const k = next ? ease(Math.min(1, Math.max(0, (mid - (rect.bottom - rect.height * 0.35)) / (rect.height * 0.35)))) : 0
      const a = parse(current.dataset.tinta ?? '#ffffff')
      const b = next ? parse(next.dataset.tinta ?? '#ffffff') : a
      const rgb = a.map((v, j) => Math.round(v + (b[j] - v) * k))
      document.body.style.backgroundColor = `rgb(${rgb.join(',')})`
      const dark = (k < 0.5 ? current : next ?? current).dataset.dark === 'true'
      document.body.dataset.tone = dark ? 'dark' : 'light'
    }
    const onScroll = (): void => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.body.style.backgroundColor = ''
      delete document.body.dataset.tone
    }
  }, [])
  return null
}
