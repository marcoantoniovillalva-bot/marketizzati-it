'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/shared/language-switcher'

export function Navbar() {
  const t = useTranslations('common')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/servizi', label: t('nav.services') },
    { href: '/metodo', label: t('nav.method') },
    { href: '/chi-siamo', label: t('nav.about') },
    { href: '/blog', label: t('nav.blog') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-dark.png"
            alt="Marketizzati"
            width={300}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/consulenza"
            className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-body-sm font-semibold rounded-lg transition-colors"
          >
            {t('cta.bookConsultation')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden glass-dark border-t border-surface-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-body-lg text-foreground-secondary hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-surface-border flex flex-col gap-4">
              <LanguageSwitcher />
              <Link
                href="/consulenza"
                onClick={() => setIsMobileOpen(false)}
                className="px-5 py-3 bg-accent hover:bg-accent-hover text-white text-body-md font-semibold rounded-lg transition-colors text-center"
              >
                {t('cta.bookConsultation')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
