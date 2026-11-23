'use client'

import { useEffect, useRef, useState } from 'react'
import { MotionFrame } from './motion/motion-frame'

function Reel({ active }: { active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (active) void ref.current?.play().catch(() => {})
    else ref.current?.pause()
  }, [active])
  return <video ref={ref} src="/videos/preview/reel-con-claude.mp4" muted loop playsInline preload="metadata" className="h-44 w-28 rounded-xl object-cover" />
}

function Scene({ step, active }: { step: number; active: boolean }) {
  if (step === 0) return <div className="w-56 rounded-xl bg-white p-3 shadow-xl"><div className="motion-pop h-3 w-1/2 rounded bg-ink/20" /><div className="motion-pop mt-3 h-20 rounded-lg bg-brand-peach p-3 [animation-delay:.15s]"><div className="h-3 w-3/4 rounded bg-ink" /><div className="mt-2 h-2 w-1/2 rounded bg-ink/20" /><div className="motion-pop mt-3 h-5 w-20 rounded bg-brand [animation-delay:.35s]" /></div></div>
  if (step === 1) return <div className="w-56 rounded-xl bg-white p-3 text-xs shadow-xl"><div className="rounded-full border p-2">⌕ Google</div><div className="motion-pop mt-3 rounded-lg border-2 border-brand p-2"><b>Ad · Sponsored</b><div className="mt-1 text-brand-ink">www.example.com</div><div className="mt-2 h-2 rounded bg-ink/10" /></div><div className="motion-pop mt-2 text-right font-bold text-brand [animation-delay:.6s]">↖ +1 chiamata</div></div>
  if (step === 2) return <div className="relative"><Reel active={active} /><div className="motion-pop absolute bottom-3 right-[-50px] rounded-lg bg-white p-2 text-xs font-bold shadow">♥ 128<br />▶ 2.4k</div></div>
  return <div className="w-56 space-y-2 rounded-xl bg-[#e8f4e8] p-3 text-xs text-ink shadow-xl"><b>WhatsApp</b><p className="motion-pop rounded-lg bg-white p-2">Ciao! Vorrei un sito.</p><p className="motion-pop ml-5 rounded-lg bg-green-100 p-2 [animation-delay:.3s]">Certo, preparo tutto...</p><p className="motion-pop rounded-lg bg-white p-2 font-bold [animation-delay:.6s]">✓ Preventivo pronto</p></div>
}

export function FunnelScene({ step }: { step?: number }) {
  return <MotionFrame className={step === undefined ? 'min-h-[340px] p-8' : 'min-h-52 p-5'}>{(active) => <ScenePlayer step={step} active={active} />}</MotionFrame>
}

function ScenePlayer({ step, active }: { step?: number; active: boolean }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!active || step !== undefined) return
    const timer = window.setInterval(() => setCurrent((n) => (n + 1) % 4), 2200)
    return () => window.clearInterval(timer)
  }, [active, step])
  return <><div key={step ?? current} className="motion-scene"><Scene step={step ?? current} active={active} /></div>{step === undefined && <div className="mt-5 w-40"><div className="flex justify-center gap-2">{[0, 1, 2, 3].map((n) => <span key={n} className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${n === current ? 'bg-brand text-white' : 'bg-white text-ink'}`}>{n + 1}</span>)}</div><div className="mt-2 h-1 overflow-hidden rounded bg-white/70"><div key={current} className="motion-progress h-full bg-brand" /></div></div>}</>
}
