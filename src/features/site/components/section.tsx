import type { ReactNode } from 'react'

/** Page tints: warm whites, peach, soft orange and one navy block for contrast. */
export const TINT = {
  white: '#FFFFFF',
  cream: '#FFF8F2',
  peach: '#FFEEE3',
  orange: '#FFE1D0',
  navy: '#121A2F',
} as const

export type Tint = keyof typeof TINT

interface SectionProps {
  id?: string
  tint: Tint
  children: ReactNode
  className?: string
}

/** A full-width band of the page; its tint drives the scrolling background (TintBackground). */
export function Section({ id, tint, children, className = '' }: SectionProps) {
  const dark = tint === 'navy'
  return (
    <section
      id={id}
      data-tinta={TINT[tint]}
      data-dark={dark}
      className={`relative scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 md:py-20 ${dark ? 'text-white' : 'text-ink'} ${className}`}
    >
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">{children}</div>
    </section>
  )
}

interface HeadingProps {
  /** "01 · L'OFFERTA" */
  label?: string
  title: string
  /** The part of the title set in italic serif, e.g. "vende." */
  italic?: string
  as?: 'h1' | 'h2'
  intro?: ReactNode
  dark?: boolean
  center?: boolean
}

/** Numbered label + Inter title with an Instrument Serif italic tail, the house style of the site. */
export function Heading({ label, title, italic, as = 'h2', intro, dark = false, center = false }: HeadingProps) {
  const Tag = as
  const size = as === 'h1' ? 'text-[2.2rem] leading-[1.04] sm:text-6xl md:text-7xl' : 'text-[1.8rem] leading-[1.08] sm:text-4xl md:text-5xl'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {label && (
        <p className={`mb-3 flex items-center gap-3 text-[11px] sm:mb-5 sm:text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-brand-soft' : 'text-brand-ink'} ${center ? 'justify-center' : ''}`}>
          <span className={`h-px w-8 ${dark ? 'bg-brand-soft' : 'bg-brand'}`} aria-hidden />
          {label}
        </p>
      )}
      <Tag className={`font-bold tracking-[-0.03em] ${size}`}>
        {title}
        {italic && (
          <>
            {' '}
            <em className="font-serif font-normal italic tracking-normal text-brand">{italic}</em>
          </>
        )}
      </Tag>
      {intro && <div className={`mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg ${dark ? 'text-white/75' : 'text-ink-soft'}`}>{intro}</div>}
    </div>
  )
}
