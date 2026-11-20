import type { CSSProperties, ReactNode } from 'react'
import { Check, FileText, Globe, ImageIcon, KeyRound, MapPin, MessageCircle, Navigation, Phone, Search, Star, Upload } from 'lucide-react'
import type { VisualCopy } from '../content/visuals'
import { euro, OFFER } from '../lib/offer'
import type { Locale } from '../lib/routes'
import { iconFor } from './icons'
import { PlayOnView } from './play-on-view'

/**
 * Animated explainers about the website offer. CSS only (keyframes in globals.css, "explainers"),
 * one 12s cycle per visual. Decorative (aria-hidden): the same facts are written in the page text.
 */

export const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <PlayOnView className={`mx-auto w-full max-w-md rounded-3xl bg-white p-5 shadow-[0_30px_60px_-30px_rgba(22,18,15,0.3)] ring-1 ring-ink/5 sm:p-6 ${className}`}>
      {children}
    </PlayOnView>
  )
}

const MiniPhone = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{label}</p>
    <div className="w-full max-w-[150px] rounded-[1.6rem] bg-ink p-1.5">
      <div className="flex h-[250px] flex-col gap-2 overflow-hidden rounded-[1.25rem] bg-white p-2.5">{children}</div>
    </div>
  </div>
)

/** Home, problem: a slow do-it-yourself site next to a clean one with call and WhatsApp buttons. */
export function DiyVsPro({ v }: { v: VisualCopy }) {
  return (
    <Frame className="max-w-lg">
      <div className="grid grid-cols-2 gap-4">
        <MiniPhone label={v.diy.diy}>
          <div className="h-3 w-3/4 rounded bg-ink/10" />
          <div className="ml-4 h-14 rounded bg-ink/10" />
          <div className="flex flex-1 flex-col items-center justify-center gap-2 text-[10px] text-ink-muted">
            <span className="mk-spin h-6 w-6 rounded-full border-2 border-ink/15 border-t-ink/50" />
            {v.diy.loading}
          </div>
          <div className="h-2 w-1/2 rounded bg-ink/10" />
          <p className="rounded bg-[#e8e8e8] px-1.5 py-1 text-center text-[8px] leading-tight text-ink-muted">{v.diy.banner}</p>
        </MiniPhone>
        <MiniPhone label={v.diy.pro}>
          <div className="mk-build flex items-center gap-1.5 text-[10px] font-bold" style={d(0.2)}>
            <span className="h-4 w-4 rounded bg-brand" /> {v.phone.brand}
          </div>
          <div className="mk-build rounded-lg bg-gradient-to-br from-brand-peach to-brand-soft p-2 text-[10px] font-bold leading-tight" style={d(0.7)}>
            {v.phone.hero}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="mk-build h-8 rounded bg-brand-cream" style={d(1.2 + i * 0.25)} />
            ))}
          </div>
          <div className="mt-auto grid grid-cols-2 gap-1">
            <span className="mk-build relative flex items-center justify-center gap-1 rounded-md bg-brand py-1.5 text-[9px] font-bold text-white" style={d(2.2)}>
              <span className="mk-pulse absolute inset-0 rounded-md bg-brand" />
              <Phone size={9} className="relative" /> <span className="relative">{v.diy.call}</span>
            </span>
            <span className="mk-build flex items-center justify-center gap-1 rounded-md bg-[#25D366] py-1.5 text-[9px] font-bold text-white" style={d(2.4)}>
              <MessageCircle size={9} /> {v.diy.whatsapp}
            </span>
          </div>
        </MiniPhone>
      </div>
    </Frame>
  )
}

/** Offer: site + logo + Google profile stack up to the market value, which gets struck through for the real price. */
export function PriceStack({ v, locale }: { v: VisualCopy; locale: Locale }) {
  const parts = [
    { label: v.price.site, color: 'bg-brand', value: OFFER.marketItems.site },
    { label: v.price.logo, color: 'bg-[#F79A6E]', value: OFFER.marketItems.logo },
    { label: v.price.google, color: 'bg-ink', value: OFFER.marketItems.google },
  ]
  return (
    <Frame>
      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{v.price.market}</p>
      <div className="mt-3 flex h-9 overflow-hidden rounded-xl bg-brand-cream">
        {parts.map((p, i) => (
          <span key={p.label} className={`mk-grow-x h-full ${p.color}`} style={{ width: `${(p.value / OFFER.marketValue) * 100}%`, ...d(0.3 + i * 0.6) }} />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
        {parts.map((p, i) => (
          <li key={p.label} className="mk-build flex items-center gap-1.5" style={d(0.3 + i * 0.6)}>
            <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} /> {p.label} {euro(p.value, locale)}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-end justify-between gap-4">
        <p className="relative text-3xl font-bold text-ink-muted">
          {euro(OFFER.marketValue, locale)}
          <span className="mk-strike absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand" style={d(2.4)} />
        </p>
        <div className="mk-pop rounded-2xl bg-ink px-4 py-3 text-right text-white" style={d(3.2)}>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-soft">{v.price.you}</p>
          <p className="text-3xl font-bold leading-none">{euro(OFFER.oneOff, locale)}</p>
          <p className="text-[11px] text-white/70">{v.price.once}</p>
        </div>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-ink-muted">{v.price.included}</p>
      <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {v.price.items.map((item, i) => {
          const Icon = iconFor(item)
          return (
            <li key={item} className="mk-pop flex items-center gap-1.5 rounded-xl bg-brand-cream px-2 py-1.5 text-[11px] font-semibold leading-tight" style={d(3.8 + i * 0.25)}>
              <Icon size={14} className="shrink-0 text-brand" /> {item}
            </li>
          )
        })}
      </ul>
    </Frame>
  )
}

/** Ownership: twelve instalments fill up, then the key: the site and its code are yours. */
export function OwnershipTimeline({ v, locale }: { v: VisualCopy; locale: Locale }) {
  return (
    <Frame className="max-w-xl">
      <p className="text-sm font-semibold text-ink-soft">
        {v.own.paying} · <span className="text-brand">{euro(OFFER.monthly, locale)}</span>
      </p>
      <ol className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-12">
        {Array.from({ length: OFFER.months }, (_, i) => (
          <li key={i} className="flex flex-col items-center gap-1">
            <span className="mk-pop flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white" style={d(0.3 + i * 0.3)}>
              <Check size={14} strokeWidth={3} />
            </span>
            <span className="text-[10px] text-ink-muted">{i + 1}</span>
          </li>
        ))}
      </ol>
      <div className="mk-pop mt-4 flex items-center gap-3 rounded-2xl bg-brand-cream p-4" style={d(4.2)}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
          <KeyRound size={20} />
        </span>
        <div>
          <p className="font-bold">{v.own.yours}</p>
          <p className="text-sm text-ink-soft">{v.own.code}</p>
        </div>
      </div>
    </Frame>
  )
}

/** Numbered steps joined by a line that fills in one after the other. */
export function StepsRail({ labels }: { labels: string[] }) {
  return (
    <PlayOnView className="flex items-start [&>div]:flex [&>div]:w-full [&>div]:items-start">
      {labels.map((label, i) => (
        <div key={label} className={`flex items-start ${i < labels.length - 1 ? 'flex-1' : ''}`}>
          <div className="flex w-14 flex-col items-center gap-2 text-center sm:w-20">
            <span className="mk-pop flex h-11 w-11 items-center justify-center rounded-full bg-brand font-serif text-xl italic text-white" style={d(0.3 + i * 1.1)}>
              {i + 1}
            </span>
            <span className="text-[11px] font-semibold leading-tight text-ink-soft sm:text-xs">{label}</span>
          </div>
          {i < labels.length - 1 && (
            <div className="mt-5 h-1 flex-1 overflow-hidden rounded-full bg-brand/15">
              <span className="mk-grow-x block h-full bg-brand" style={d(0.7 + i * 1.1)} />
            </div>
          )}
        </div>
      ))}
    </PlayOnView>
  )
}

/** Method: real searches become the pages of the site. */
export function KeywordPages({ v, city }: { v: VisualCopy; city?: string }) {
  const queries = city ? [v.keywords.local.replace('{city}', city.toLowerCase()), ...v.keywords.queries.slice(1)] : v.keywords.queries
  return (
    <Frame>
      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{v.keywords.title}</p>
      <ul className="mt-4 space-y-3">
        {queries.map((q, i) => (
          <li key={q} className="flex items-center gap-2">
            <span className="mk-build flex min-w-0 flex-1 items-center gap-2 rounded-full bg-brand-cream px-3 py-2 text-xs" style={d(0.3 + i * 1)}>
              <Search size={12} className="shrink-0 text-ink-muted" />
              <span className="truncate">{q}</span>
            </span>
            <span className="mk-pop text-brand" style={d(0.8 + i * 1)}>→</span>
            <span className="mk-pop flex items-center gap-1.5 rounded-lg bg-ink px-2.5 py-2 text-[11px] font-semibold text-white" style={d(0.9 + i * 1)}>
              <FileText size={11} /> {v.keywords.pages[i]}
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

/** Mobile first: a phone site with call and WhatsApp always at hand. */
export function PhoneSite({ v }: { v: VisualCopy }) {
  return (
    <PlayOnView className="mk-float mx-auto w-[230px] rounded-[2.4rem] bg-ink p-2 shadow-[0_40px_80px_-30px_rgba(22,18,15,0.55)]">
      <div className="flex h-[400px] flex-col gap-2.5 overflow-hidden rounded-[2rem] bg-white p-3 pt-6">
        <div className="mk-build flex items-center gap-1.5 text-[11px] font-bold" style={d(0.2)}>
          <span className="h-5 w-5 rounded-md bg-brand" /> {v.phone.brand}
        </div>
        <div className="mk-build rounded-xl bg-gradient-to-br from-brand-peach to-brand-soft p-3 text-sm font-bold leading-tight" style={d(0.7)}>
          {v.phone.hero}
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="mk-build flex items-center gap-2 rounded-lg bg-brand-cream p-2" style={d(1.2 + i * 0.3)}>
            <span className="h-7 w-7 rounded-md bg-brand/70" />
            <span className="h-2 flex-1 rounded bg-ink/10" />
          </div>
        ))}
        <span className="mk-build rounded-lg border border-ink/10 py-2 text-center text-[11px] font-semibold" style={d(2.2)}>
          {v.phone.form}
        </span>
        <div className="mt-auto grid grid-cols-2 gap-1.5">
          <span className="mk-build relative flex items-center justify-center gap-1 rounded-xl bg-brand py-2.5 text-[11px] font-bold text-white" style={d(2.7)}>
            <span className="mk-pulse absolute inset-0 rounded-xl bg-brand" />
            <Phone size={12} className="relative" /> <span className="relative">{v.phone.call}</span>
          </span>
          <span className="mk-build flex items-center justify-center gap-1 rounded-xl bg-[#25D366] py-2.5 text-[11px] font-bold text-white" style={d(2.9)}>
            <MessageCircle size={12} /> {v.phone.whatsapp}
          </span>
        </div>
      </div>
    </PlayOnView>
  )
}

/** What the client sends: four items fly into the folder, then "I handle the rest". */
export function UploadFlow({ v }: { v: VisualCopy }) {
  const icons = [Star, ImageIcon, FileText, MapPin]
  return (
    <Frame>
      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{v.upload.title}</p>
      <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4">
        <ul className="space-y-2">
          {v.upload.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li key={item} className="mk-build flex items-center gap-2 rounded-xl bg-brand-cream px-3 py-2 text-sm font-medium" style={d(0.3 + i * 0.6)}>
                <Icon size={14} className="text-brand" /> {item}
              </li>
            )
          })}
        </ul>
        <div className="flex w-24 flex-col items-center gap-2">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-white">
            <Upload size={24} />
          </span>
          <span className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <span className="mk-grow-x block h-full bg-brand" style={d(2.8)} />
          </span>
        </div>
      </div>
      <p className="mk-pop mt-4 flex items-center gap-2 rounded-xl bg-[#e9f8ee] px-3 py-2 text-sm font-semibold text-[#1c8a43]" style={d(3.8)}>
        <Check size={16} strokeWidth={3} /> {v.upload.done}
      </p>
    </Frame>
  )
}

/** Google Business Profile: search, pin drop, stars, call / directions / website. */
export function MapsCard({ v }: { v: VisualCopy }) {
  const actions = [
    { label: v.maps.call, Icon: Phone },
    { label: v.maps.route, Icon: Navigation },
    { label: v.maps.site, Icon: Globe },
  ]
  return (
    <Frame className="overflow-hidden p-0 sm:p-0">
      <div className="flex items-center gap-2 border-b border-ink/5 px-4 py-3 text-sm">
        <Search size={14} className="text-ink-muted" />
        <span className="mk-type">{v.maps.query}</span>
      </div>
      <div className="relative h-32 bg-[#e8efe6] [background-image:linear-gradient(#d6e2d3_1px,transparent_1px),linear-gradient(90deg,#d6e2d3_1px,transparent_1px)] [background-size:28px_28px]">
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2">
          <span className="mk-pulse absolute inset-0 rounded-full bg-brand/40" />
          <span className="mk-pop relative flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg" style={d(2.4)}>
            <MapPin size={18} />
          </span>
        </span>
      </div>
      <div className="p-5">
        <p className="mk-build text-lg font-bold" style={d(2.8)}>{v.maps.name}</p>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
          <span className="font-semibold text-ink">4,9</span>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={14} className="mk-pop fill-[#fbbc04] text-[#fbbc04]" style={d(3.1 + i * 0.15)} />
          ))}
          <span>· {v.maps.category}</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-[#1c8a43]">{v.maps.open}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {actions.map(({ label, Icon }, i) => (
            <span key={label} className="mk-pop flex flex-col items-center gap-1 rounded-xl bg-brand-cream py-2 text-[11px] font-semibold text-brand-ink" style={d(4 + i * 0.25)}>
              <Icon size={15} /> {label}
            </span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="mk-pop h-14 rounded-lg bg-gradient-to-br from-brand-soft to-brand/40" style={d(4.9 + i * 0.25)} />
          ))}
        </div>
      </div>
    </Frame>
  )
}
