'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function MotionFrame({ children, className = '' }: { children: (active: boolean) => ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    const update = () => setActive(visible && !reduced.matches)
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update() }, { threshold: 0.25 })
    observer.observe(el)
    reduced.addEventListener('change', update)
    return () => { observer.disconnect(); reduced.removeEventListener('change', update) }
  }, [])
  return <div ref={ref} aria-hidden="true" data-motion={active ? 'on' : 'off'} className={`motion-frame flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-peach to-brand-cream ${className}`}>{children(active)}</div>
}
