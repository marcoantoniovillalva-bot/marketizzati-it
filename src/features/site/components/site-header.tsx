'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { LayoutCopy } from '../content/layout'
import { WA_LINK } from '../lib/links'
import { LOCALES, pageHref, translatePath, type Locale } from '../lib/routes'
import { WhatsAppIcon } from './ui'

/** Fixed header: logo, main pages, language switch and the WhatsApp call to action. */
export function SiteHeader({ locale, copy }: { locale: Locale; copy: LayoutCopy }) {
  const pathname = usePathname() ?? `/${locale}`
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const languages = (
    <div className="flex items-center gap-1 text-xs font-semibold uppercase">
      {LOCALES.map((l) => (
        <a
          key={l}
          href={translatePath(pathname, l)}
          hrefLang={l}
          aria-current={l === locale ? 'true' : undefined}
          className={`rounded-full px-2 py-1 ${l === locale ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'}`}
        >
          {l}
        </a>
      ))}
    </div>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 2xl:max-w-7xl rounded-full px-4 py-2.5 transition sm:px-6 ${scrolled || open ? 'bg-white/90 shadow-[0_10px_40px_-20px_rgba(22,18,15,0.4)] backdrop-blur-md' : 'bg-white/60 backdrop-blur'}`}
      >
        <a href={pageHref('home', locale)} className="shrink-0" aria-label="Marketizzati">
          <Image src="/images/logo-light.png" alt="Marketizzati" width={164} height={24} priority className="h-[22px] w-auto" />
        </a>
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft xl:flex">
          {copy.nav.map((item) => (
            <a key={item.key} href={pageHref(item.key, locale)} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">{languages}</div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
            <WhatsAppIcon size={16} /> <span className="hidden sm:inline">{copy.whatsapp}</span>
          </a>
          <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full p-2 xl:hidden" aria-expanded={open} aria-label={open ? copy.close : copy.menu}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-5 shadow-xl xl:hidden">
          <ul className="grid gap-1">
            {copy.nav.map((item) => (
              <li key={item.key}>
                <a href={pageHref(item.key, locale)} className="block rounded-xl px-3 py-2.5 text-lg font-semibold hover:bg-brand-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-ink/10 pt-4">{languages}</div>
        </nav>
      )}
    </header>
  )
}
