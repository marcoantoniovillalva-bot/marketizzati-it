'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Builds the explainer up when it scrolls into view and stays still afterwards (rules in globals.css,
 * "explainers"). When it leaves the screen the content is remounted, so it builds up again next time.
 */
export function PlayOnView({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} aria-hidden className={`mk-scope ${className}`}>
      <div key={on ? 'on' : 'off'} className={on ? '' : 'invisible'}>
        {children}
      </div>
    </div>
  )
}
