'use client'

import type { CSSProperties, ReactNode } from 'react'
import { OFFER } from '../../lib/offer'
import type { Locale } from '../../lib/routes'
import { MotionFrame } from './motion-frame'

type Kind = 'reason' | 'process'
const d = (s: number): CSSProperties => ({ '--d': `${s}s` }) as CSSProperties

const TEXT: Record<Locale, { ask: string; reply: string; you: string; month: string; done: string }> = {
  it: { ask: 'Possiamo cambiare il testo?', reply: 'Fatto, guarda ora ✓', you: 'Tu', month: 'mese', done: 'Scritto' },
  es: { ask: '¿Podemos cambiar el texto?', reply: 'Hecho, míralo ahora ✓', you: 'Tú', month: 'mes', done: 'Por escrito' },
  en: { ask: 'Can we change the text?', reply: 'Done, have a look ✓', you: 'You', month: 'month', done: 'In writing' },
}

function Bubble({ children, me, delay }: { children: ReactNode; me?: boolean; delay: number }) {
  return <span className={`mg-in max-w-[85%] rounded-2xl px-3 py-1.5 text-xs font-semibold shadow-sm ${me ? 'self-end bg-brand text-white' : 'self-start bg-white text-ink'}`} style={d(delay)}>{children}</span>
}

function Chat({ locale }: { locale: Locale }) {
  const t = TEXT[locale]
  return <div className="flex w-full flex-col gap-2">
    <Bubble delay={0}>{t.ask}</Bubble>
    <span className="mg-in flex items-center gap-2 self-end" style={d(0.6)}><span className="mg-dots rounded-full bg-white px-2 py-1 text-ink">•••</span><span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">M</span></span>
    <Bubble me delay={1.2}>{t.reply}</Bubble>
  </div>
}

function Prices({ locale }: { locale: Locale }) {
  const t = TEXT[locale]
  return <div className="relative w-full rounded-2xl bg-white p-3 text-ink shadow-sm">
    {[`${OFFER.oneOff} €`, `${OFFER.monthly} €/${t.month}`].map((line, i) => <div key={line} className="mb-2 flex items-center gap-2"><span className="mg-grow h-2 rounded-full bg-ink/15" style={{ ...d(i * 0.4), width: '45%' }} /><span className="mg-in text-sm font-bold" style={d(0.3 + i * 0.4)}>{line}</span></div>)}
    <span className="mg-stamp absolute -right-2 -top-3 rotate-12 rounded-lg border-2 border-emerald-600 bg-white px-2 py-0.5 text-[11px] font-black uppercase text-emerald-700" style={d(1.1)}>{t.done} ✓</span>
  </div>
}

function Keys({ locale }: { locale: Locale }) {
  return <div className="flex w-full items-center justify-between text-ink">
    <span className="rounded-xl bg-white px-3 py-2 text-[11px] font-bold shadow-sm">Marketizzati</span>
    <span className="mg-move text-2xl" aria-hidden="true">🔑</span>
    <span className="mg-pulse rounded-xl bg-brand px-3 py-2 text-[11px] font-bold text-white shadow-sm" style={d(1.2)}>{TEXT[locale].you} 🔓</span>
  </div>
}

function Call() {
  return <div className="flex w-full items-center gap-3">
    <span className="mg-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xl text-white">☎</span>
    <div className="flex flex-1 flex-col gap-1.5">{[0, 0.5, 1].map((s, i) => <span key={s} className={`mg-in h-3 rounded-full ${i === 1 ? 'w-2/3 self-end bg-brand' : 'w-4/5 bg-white'}`} style={d(s)} />)}</div>
  </div>
}

function Checklist() {
  return <div className="w-full rounded-2xl bg-white p-3 shadow-sm">{[0, 0.5, 1].map((s) => <div key={s} className="mb-1.5 flex items-center gap-2"><span className="mg-check flex h-4 w-4 items-center justify-center rounded border-2 border-brand text-[10px] font-black text-white" style={d(s)}>✓</span><span className="mg-grow h-2 rounded-full bg-ink/15" style={{ ...d(s), width: '70%' }} /></div>)}</div>
}

function Build() {
  return <div className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
    <div className="flex gap-1 bg-ink/5 px-2 py-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink/25" />)}</div>
    <div className="grid grid-cols-3 gap-1.5 p-2">{[0, 0.3, 0.6, 0.9, 1.2, 1.5].map((s, i) => <span key={s} className={`mg-in h-4 rounded ${i === 0 ? 'col-span-3 bg-brand' : 'bg-ink/10'}`} style={d(s)} />)}</div>
    <div className="h-1.5 bg-ink/10"><span className="mg-bar block h-full bg-emerald-500" /></div>
  </div>
}

function Launch() {
  return <div className="relative w-full">
    <svg viewBox="0 0 120 50" className="h-16 w-full" aria-hidden="true"><polyline className="mg-draw" points="2,46 25,40 45,42 65,28 85,22 118,4" fill="none" stroke="#F2541B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={100} /></svg>
    <span className="mg-pulse absolute right-0 top-0 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-black uppercase text-white" style={d(1.4)}>Online ↗</span>
  </div>
}

const SCENES: Record<Kind, ((props: { locale: Locale }) => ReactNode)[]> = {
  reason: [Chat, Prices, Keys],
  process: [Call, Checklist, Build, Launch],
}

/** Small looping motion graphic for the "why" and "how we work" cards (CSS keyframes, run only when visible). */
export function CardMotion({ kind, index, locale = 'it' }: { kind: Kind; index: number; locale?: Locale }) {
  const Scene = SCENES[kind][index]
  return <MotionFrame className="min-h-36 p-4">{() => (Scene ? <Scene locale={locale} /> : null)}</MotionFrame>
}
