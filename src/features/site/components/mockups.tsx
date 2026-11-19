import type { CSSProperties } from 'react'

/**
 * Pure-CSS animated mockups (keyframes in globals.css, section "site mockups"), no JS.
 * They loop slowly and stand still with prefers-reduced-motion.
 */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

interface BrowserProps {
  url: string
  /** Business shown in the site being built, e.g. "Idraulico Rossi". */
  brand: string
  headline: string
  cta: string
  services: [string, string, string]
}

/** A browser window where a small business website builds itself block by block. */
export function BrowserBuild({ url, brand, headline, cta, services }: BrowserProps) {
  return (
    <div className="mk-float w-full overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgba(22,18,15,0.35)] ring-1 ring-ink/10">
      <div className="flex items-center gap-2 border-b border-ink/5 bg-[#f7f4f1] px-4 py-3">
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} aria-hidden />
        ))}
        <span className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-ink-muted">🔒 {url}</span>
      </div>
      <div className="space-y-4 p-5 text-left">
        <div className="mk-build flex items-center justify-between" style={delay(0.2)}>
          <span className="flex items-center gap-2 text-sm font-bold">
            <span className="h-6 w-6 rounded-lg bg-brand" aria-hidden /> {brand}
          </span>
          <span className="hidden gap-3 text-[11px] text-ink-muted sm:flex">
            <span>Servizi</span>
            <span>Lavori</span>
            <span>Contatti</span>
          </span>
        </div>
        <div className="mk-build rounded-xl bg-gradient-to-br from-brand-peach to-brand-soft p-5" style={delay(0.9)}>
          <p className="max-w-[16rem] text-lg font-bold leading-tight">{headline}</p>
          <span className="mt-3 inline-block rounded-full bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">{cta}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {services.map((s, i) => (
            <div key={s} className="mk-build rounded-lg bg-brand-cream p-2.5" style={delay(1.6 + i * 0.35)}>
              <span className="mb-2 block h-5 w-5 rounded-md bg-brand/80" aria-hidden />
              <p className="text-[11px] font-semibold leading-tight">{s}</p>
            </div>
          ))}
        </div>
        <div className="mk-build flex items-center gap-2 rounded-lg bg-[#e9f8ee] px-3 py-2 text-[11px] font-semibold text-[#1c8a43]" style={delay(3)}>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#25D366] text-[9px] text-white">✓</span>
          Google · 100/100
        </div>
      </div>
    </div>
  )
}

interface ChatMessage {
  from: 'client' | 'agent'
  text: string
}

interface PhoneProps {
  title: string
  status: string
  messages: ChatMessage[]
}

/** A phone with a WhatsApp chat that writes itself. */
export function PhoneChat({ title, status, messages }: PhoneProps) {
  return (
    <div className="mk-float mx-auto w-[260px] rounded-[2.6rem] bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgba(22,18,15,0.55)]" style={delay(1)}>
      <div className="overflow-hidden rounded-[2.1rem] bg-[#efe7dd]">
        <div className="flex items-center gap-2.5 bg-[#075e54] px-4 pb-3 pt-6 text-white">
          <span className="h-8 w-8 rounded-full bg-brand" aria-hidden />
          <div>
            <p className="text-[13px] font-semibold leading-tight">{title}</p>
            <p className="text-[10px] text-white/70">{status}</p>
          </div>
        </div>
        <div className="flex min-h-[340px] flex-col gap-2 p-3">
          {messages.map((m, i) => (
            <p
              key={m.text}
              className={`mk-msg max-w-[85%] rounded-xl px-3 py-2 text-[12px] leading-snug shadow-sm ${m.from === 'client' ? 'self-start rounded-tl-sm bg-white' : 'self-end rounded-tr-sm bg-[#d9fdd3]'}`}
              style={delay(0.6 + i * 1.4)}
            >
              {m.text}
            </p>
          ))}
          <span className="mk-msg mk-typing self-end rounded-xl bg-[#d9fdd3] px-3 py-2.5" style={delay(0.6 + messages.length * 1.4)} aria-hidden>
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
  )
}
