'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ArrowRight, Sparkles, MessageCircle, Search, LayoutDashboard, Cpu, Target, Layers, Menu, X, ChevronRight } from 'lucide-react'
import { ParticleBackground } from '@/components/shared/particle-background'
import { TechLines } from '@/components/shared/tech-lines'
import { VideoEmbed } from '@/components/shared/video-embed'

export function Navbar() {
  const t = useTranslations('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: t('nav.services'), href: '/servizi' },
    { name: t('nav.metodo'), href: '/metodo' },
    { name: t('nav.chiSiamo'), href: '/chi-siamo' },
    { name: t('nav.consulenza'), href: '/consulenza' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo-light.png" alt="Marketizzati" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-secondary hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-foreground font-medium hover:text-accent transition-colors"
            >
              {t('nav.login')}
            </Link>
            <Link
              href="/consulenza"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all hover:shadow-glow-red"
            >
              {t('cta.bookMy')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-surface-border"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-medium py-2"
            >
              {t('nav.login')}
            </Link>
            <Link
              href="/consulenza"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-accent text-white font-semibold rounded-xl"
            >
              {t('cta.bookMy')}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
