import type { ReactNode } from 'react'
import { LAYOUT } from '../content/layout'
import { WA_LINK } from '../lib/links'
import { isLocale } from '../lib/routes'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { TintBackground } from './tint-background'
import { WhatsAppIcon } from './ui'

/** Frame of every public page: header, scroll-tinted background, floating WhatsApp, footer. */
export function SiteShell({ locale, children }: { locale: string; children: ReactNode }) {
  const l = isLocale(locale) ? locale : 'it'
  const copy = LAYOUT[l]
  return (
    <div className="site-shell min-h-screen text-ink [font-family:var(--font-inter),system-ui,sans-serif]">
      <TintBackground />
      <SiteHeader locale={l} copy={copy} />
      <main>{children}</main>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.whatsappFloat}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105"
      >
        <WhatsAppIcon size={28} />
      </a>
      <SiteFooter locale={l} copy={copy} />
    </div>
  )
}
