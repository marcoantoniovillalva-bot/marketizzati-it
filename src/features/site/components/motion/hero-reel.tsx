'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import type { Locale } from '../../lib/routes'

const SCENE_MS = 2600
const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

const T: Record<Locale, { tabs: string[]; query: string; ad: string; call: string; live: string; hi: string; answer: string; quote: string; sent: string; views: string }> = {
  it: { tabs: ['Sito', 'Pubblicità', 'Contenuti', 'AI'], query: 'idraulico vicino a me', ad: 'Sponsorizzato', call: '+1 chiamata', live: 'Sito online', hi: 'Ciao! Mi fate un preventivo?', answer: 'Certo! Ecco il preventivo 👇', quote: 'Preventivo', sent: 'Inviato', views: 'visualizzazioni' },
  es: { tabs: ['Web', 'Anuncios', 'Contenido', 'IA'], query: 'fontanero cerca de mí', ad: 'Patrocinado', call: '+1 llamada', live: 'Web online', hi: '¡Hola! ¿Me hacéis un presupuesto?', answer: '¡Claro! Aquí tienes 👇', quote: 'Presupuesto', sent: 'Enviado', views: 'visualizaciones' },
  en: { tabs: ['Website', 'Ads', 'Content', 'AI'], query: 'plumber near me', ad: 'Sponsored', call: '+1 call', live: 'Website live', hi: 'Hi! Can I get a quote?', answer: 'Sure! Here it is 👇', quote: 'Quote', sent: 'Sent', views: 'views' },
}

function Cursor({ className }: { className: string }) {
  return <span className={`hr-cursor absolute z-20 text-xl drop-shadow ${className}`} aria-hidden="true">➤</span>
}

function SiteScene({ t }: { t: (typeof T)['it'] }) {
  return <div className="relative h-full w-full">
    <div className="hr-rise absolute inset-x-[6%] top-[8%] bottom-[14%] overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-ink/20" />)}<span className="ml-3 h-3 flex-1 rounded-full bg-ink/5" /></div>
      <div className="hr-slide flex items-center justify-between px-4 py-2" style={d(0.15)}><span className="h-3 w-16 rounded bg-ink" /><span className="flex gap-2">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-8 rounded bg-ink/15" />)}</span></div>
      <div className="grid grid-cols-5 gap-3 px-4 pt-2">
        <div className="col-span-3 space-y-2"><span className="hr-type block h-4 rounded bg-ink" style={{ ...d(0.35), width: '90%' }} /><span className="hr-type block h-4 rounded bg-brand" style={{ ...d(0.6), width: '65%' }} /><span className="hr-type block h-2 rounded bg-ink/15" style={{ ...d(0.85), width: '80%' }} /><span className="hr-pop mt-3 inline-block rounded-full bg-brand px-4 py-1.5 text-[10px] font-bold text-white" style={d(1.1)}>WhatsApp</span></div>
        <div className="hr-zoom col-span-2 h-24 rounded-xl bg-gradient-to-br from-brand-soft to-brand" style={d(0.5)} />
      </div>
      <div className="hr-rise mt-4 grid grid-cols-3 gap-2 px-4" style={d(1.3)}>{[0, 1, 2].map((i) => <span key={i} className="h-10 rounded-lg bg-brand-cream" />)}</div>
    </div>
    <Cursor className="hr-click left-[30%] top-[62%]" />
    <span className="hr-badge absolute bottom-[4%] right-[8%] rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg" style={d(1.7)}>✓ {t.live}</span>
  </div>
}

function AdsScene({ t }: { t: (typeof T)['it'] }) {
  return <div className="relative h-full w-full">
    <div className="absolute inset-x-[6%] top-[8%] bottom-[10%] overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
      <div className="flex items-center gap-2 rounded-full border border-ink/15 px-3 py-2 text-xs text-ink"><span className="font-black text-brand">G</span><span className="hr-typing overflow-hidden whitespace-nowrap">{t.query}</span></div>
      <div className="hr-ad mt-3 rounded-xl border-2 border-brand bg-brand-cream p-3 shadow-[0_0_30px_rgba(242,84,27,.35)]" style={d(0.7)}><span className="text-[10px] font-bold text-ink">{t.ad} · marketizzati.it</span><span className="mt-1 block h-3 w-4/5 rounded bg-brand-ink" /><span className="mt-1.5 block h-2 w-3/5 rounded bg-ink/20" /></div>
      <div className="hr-push mt-3 space-y-3" style={d(0.7)}>{[0, 1].map((i) => <div key={i}><span className="block h-3 w-2/3 rounded bg-ink/25" /><span className="mt-1.5 block h-2 w-4/5 rounded bg-ink/10" /></div>)}</div>
    </div>
    <Cursor className="hr-click2 left-[45%] top-[44%]" />
    <span className="hr-notif absolute right-[3%] top-[3%] rounded-2xl bg-ink px-3 py-2 text-xs font-bold text-white shadow-xl" style={d(1.5)}>📞 {t.call}</span>
  </div>
}

function Counter({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number): void => { const p = Math.min(1, (now - start) / 2000); setN(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, run])
  return <>{n.toLocaleString('it-IT')}</>
}

function ReelScene({ t, run }: { t: (typeof T)['it']; run: boolean }) {
  const video = useRef<HTMLVideoElement>(null)
  useEffect(() => { if (run) void video.current?.play().catch(() => {}); else video.current?.pause() }, [run])
  return <div className="relative flex h-full w-full items-center justify-center">
    <div className="hr-zoom relative h-[88%] aspect-[9/16] overflow-hidden rounded-[1.6rem] border-4 border-ink bg-ink shadow-2xl">
      <video ref={video} src="/videos/preview/reel-con-claude.mp4" muted loop playsInline preload="metadata" className="h-full w-full object-cover" />
      {[0, 0.35, 0.7, 1.05].map((s, i) => <span key={s} className="hr-heart absolute bottom-10 text-lg" style={{ ...d(s + 0.3), right: `${10 + i * 6}%` }}>{i % 2 ? '🧡' : '❤️'}</span>)}
    </div>
    <span className="hr-slide absolute left-[4%] top-[18%] rounded-2xl bg-white px-3 py-2 text-xs font-bold text-ink shadow-xl" style={d(0.4)}>▶ <Counter to={24800} run={run} /> {t.views}</span>
    <span className="hr-slide absolute bottom-[16%] left-[8%] rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-lg" style={d(0.9)}>{t.ad} → marketizzati.it</span>
  </div>
}

function AiScene({ t }: { t: (typeof T)['it'] }) {
  return <div className="relative h-full w-full">
    <div className="absolute inset-x-[8%] top-[6%] bottom-[6%] flex flex-col gap-2 overflow-hidden rounded-2xl bg-[#ECE5DD] p-3 shadow-2xl">
      <div className="-mx-3 -mt-3 mb-1 flex items-center gap-2 bg-[#075E54] px-3 py-2 text-xs font-bold text-white"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">AI</span>Agente · online</div>
      <span className="hr-msg max-w-[80%] self-end rounded-xl rounded-tr-none bg-[#DCF8C6] px-3 py-1.5 text-xs text-ink" style={d(0.1)}>{t.hi}</span>
      <span className="hr-dots self-start rounded-xl bg-white px-3 py-1.5 text-xs text-ink" style={d(0.5)}>•••</span>
      <span className="hr-msg max-w-[80%] self-start rounded-xl rounded-tl-none bg-white px-3 py-1.5 text-xs text-ink" style={d(0.95)}>{t.answer}</span>
      <div className="hr-flip self-start rounded-xl bg-white p-3 text-xs text-ink shadow" style={d(1.3)}><b>📄 {t.quote} #128</b><span className="mt-1.5 block h-2 w-32 rounded bg-ink/10" /><span className="mt-1 block h-2 w-24 rounded bg-ink/10" /><span className="mt-2 block font-bold text-emerald-700">✓✓ {t.sent}</span></div>
    </div>
  </div>
}

function useVisible(ref: RefObject<HTMLElement | null>): boolean {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
  return visible
}

/** Hero: a fast "story" reel of the funnel (site → ads → content → AI), 2.6s per scene, pauses off-screen. */
export function HeroReel({ locale }: { locale: Locale }) {
  const t = T[locale]
  const box = useRef<HTMLDivElement>(null)
  const visible = useVisible(box)
  const [scene, setScene] = useState(0)
  const [still, setStill] = useState(false)
  useEffect(() => setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches), [])
  useEffect(() => {
    if (!visible || still) return
    const id = window.setInterval(() => setScene((s) => (s + 1) % 4), SCENE_MS)
    return () => window.clearInterval(id)
  }, [visible, still])
  const scenes: ReactNode[] = [<SiteScene key="s" t={t} />, <AdsScene key="a" t={t} />, <ReelScene key="r" t={t} run={visible && scene === 2} />, <AiScene key="ai" t={t} />]
  return <div ref={box} aria-hidden="true" className={`hr relative overflow-hidden rounded-[2rem] bg-navy p-3 shadow-2xl sm:p-4 ${still ? 'hr-still' : ''}`}>
    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/40 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
    <div className="relative flex gap-1.5">{t.tabs.map((label, i) => <span key={label} className="flex-1"><span className="block h-1 overflow-hidden rounded-full bg-white/20"><span key={`${i}-${scene}`} className={`block h-full bg-brand ${i < scene ? 'w-full' : i === scene ? 'hr-progress' : 'w-0'}`} /></span><span className={`mt-1.5 block text-center text-[10px] font-bold uppercase tracking-wider sm:text-[11px] ${i === scene ? 'text-white' : 'text-white/40'}`}><span className="hidden sm:inline">{i + 1} · </span>{label}</span></span>)}</div>
    <div className="relative mt-2 h-[260px] sm:h-[340px] lg:h-[380px]"><div key={scene} className="hr-scene absolute inset-0">{scenes[scene]}</div></div>
  </div>
}
