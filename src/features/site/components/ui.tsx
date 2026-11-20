import type { ReactNode } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { WA_LINK } from '../lib/links'
import { IconTile, iconFor } from './icons'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light'
  external?: boolean
}

export function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const styles = {
    primary: 'bg-brand text-white shadow-[0_10px_30px_-12px_rgba(242,84,27,0.8)] hover:bg-brand-dark',
    ghost: 'border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-ink/40',
    light: 'bg-white text-ink hover:bg-brand-cream',
  }[variant]
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition ${styles}`}
    >
      {children}
    </a>
  )
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.8 6.77L2 30l7.43-1.77A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.41 1.05 1.08-4.28-.28-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.27-8.57c-.34-.17-2.02-.99-2.33-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.62.29-.8.29-1.48.2-1.62-.09-.14-.31-.23-.65-.4z" />
    </svg>
  )
}

export function WhatsAppButton({ label, variant = 'ghost' }: { label: string; variant?: ButtonProps['variant'] }) {
  return (
    <Button href={WA_LINK} variant={variant} external>
      <WhatsAppIcon /> {label}
    </Button>
  )
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group inline-flex items-center gap-1.5 font-semibold text-brand-ink">
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
    </a>
  )
}

/** List with one picture per point: the icon is picked from the words (see icons.tsx). Supports **bold**. */
export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item, i) => (
        <li key={item} className={`flex items-center gap-3.5 leading-relaxed ${dark ? 'text-white/85' : 'text-ink-soft'}`}>
          <IconTile icon={iconFor(item)} dark={dark} delay={i * 0.4} />
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Renders **bold** inside short copy strings. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) => (p.startsWith('**') ? <strong key={i} className="font-semibold text-inherit">{p.slice(2, -2)}</strong> : p))}
    </>
  )
}

export interface Stat {
  value: string
  label: string
}

/** Four facts of the offer; the first card is filled with the brand colour. */
export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="rail rail-sm grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
      {stats.map((s, i) => (
        <div key={s.label} className={`rounded-3xl p-5 md:p-7 ${i === 0 ? 'bg-brand text-white' : 'bg-white/80 text-ink ring-1 ring-ink/5'}`}>
          <p className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</p>
          <p className={`mt-2 text-sm leading-snug ${i === 0 ? 'text-white/85' : 'text-ink-soft'}`}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export interface FaqItem {
  q: string
  a: string
}

/** Native <details> accordion: works without JS and the answers stay in the HTML (Google, ChatGPT). */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-3xl bg-white/80 px-5 ring-1 ring-ink/5 md:px-8">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-peach text-brand transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">
            <Rich text={item.a} />
          </p>
        </details>
      ))}
    </div>
  )
}
