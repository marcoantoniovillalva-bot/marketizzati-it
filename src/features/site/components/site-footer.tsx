import Image from 'next/image'
import type { LayoutCopy } from '../content/layout'
import { BUSINESS, WA_LINK } from '../lib/links'
import { pageHref, type Locale } from '../lib/routes'
import { SocialLinks } from './social-links'
import { WhatsAppIcon } from './ui'

export function SiteFooter({ locale, copy }: { locale: Locale; copy: LayoutCopy }) {
  const f = copy.footer
  return (
    <footer className="bg-navy px-4 pb-10 pt-16 text-white sm:px-6">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Image src="/images/logo-dark.png" alt="Marketizzati" width={180} height={30} className="h-6 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{f.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand">
                <WhatsAppIcon />
              </a>
              <SocialLinks tone="dark" />
            </div>
          </div>
          {f.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                {col.items.map((item) => (
                  <li key={item.key}>
                    <a href={pageHref(item.key, locale)} className="hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {f.rights} · {f.vat} {BUSINESS.vat}
          </p>
          <ul className="flex gap-4">
            {f.legal.map((item) => (
              <li key={item.key}>
                <a href={pageHref(item.key, locale)} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
