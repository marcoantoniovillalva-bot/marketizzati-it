'use client'

import { useEffect, useRef, useState } from 'react'

function Scene({ step, active }: { step: number; active: boolean }) {
  if (step === 2) return <Reel active={active} />
  if (step === 0) return <div className="h-40 w-28 overflow-hidden rounded-2xl border-4 border-ink bg-white p-2"><style>{'@keyframes funnel-scroll { 0%, 15% { transform: translateY(0) } 75%, 100% { transform: translateY(-45px) } }'}</style><div className="space-y-2" style={active ? { animation: 'funnel-scroll 4s ease-in-out infinite alternate' } : undefined}><div className="h-3 w-2/3 rounded bg-brand" /><div className="h-14 rounded bg-brand-peach" /><div className="h-2 rounded bg-ink/10" /><div className="h-2 w-3/4 rounded bg-ink/10" /><div className="h-5 rounded bg-brand" /><div className="h-12 rounded bg-brand-peach" /></div></div>
  if (step === 1) return <div className="w-48 rounded-xl bg-white p-3 text-xs shadow"><div className="rounded-full border p-2">⌕ &nbsp; Google</div><div className={`mt-3 rounded-lg border-2 border-brand p-2 ${active ? 'animate-pulse motion-reduce:animate-none' : ''}`}><b>Ad · Sponsored</b><div className="mt-1 text-brand-ink">www.example.com</div><div className="mt-1 h-2 rounded bg-ink/10" /></div></div>
  return <div className="w-48 space-y-2 rounded-xl bg-[#e8f4e8] p-3 text-xs"><b>WhatsApp</b><p className="rounded-lg bg-white p-2">Hello! 👋</p><p className={`ml-5 rounded-lg bg-green-100 p-2 ${active ? 'animate-pulse motion-reduce:animate-none' : ''}`}>AI · ...</p><p className="rounded-lg bg-white p-2">✓ Quote / Preventivo</p></div>
}

function Reel({ active }: { active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (active) void video.play().catch(() => {})
    else video.pause()
  }, [active])
  return <video ref={ref} src="/videos/preview/reel-con-claude.mp4" muted loop playsInline preload="none" className="h-40 w-28 rounded-xl object-cover" />
}

export function FunnelScene({ step }: { step?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.25 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!active || step !== undefined || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setCurrent((n) => (n + 1) % 4), 4000)
    return () => window.clearInterval(timer)
  }, [active, step])
  const motion = active && typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return <div ref={ref} aria-hidden="true" className="flex min-h-52 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-brand-peach to-brand-cream p-5"><Scene key={step ?? current} step={step ?? current} active={motion} />{step === undefined && <div className="mt-4 flex gap-2">{[0, 1, 2, 3].map((n) => <span key={n} className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${n === current ? 'bg-brand text-white' : 'bg-white text-ink'}`}>{n + 1}</span>)}</div>}</div>
}
