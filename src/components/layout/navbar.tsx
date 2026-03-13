'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { createClient } from '@/lib/supabase/client'

export function Navbar() {
  const t = useTranslations('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, loading } = useAuth()

  const publicNavLinks = [
    { name: t('nav.services'), href: '/servizi' },
    { name: t('nav.about'), href: '/chi-siamo' },
    { name: t('nav.consultation'), href: '/consulenza' },
  ]

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setShowUserMenu(false)
    window.location.href = '/'
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 mz-gradient-header backdrop-blur-lg border-b border-surface-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/icon-light.png" alt="Marketizzati" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-secondary hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            {!loading && user && (
              <Link
                href="/metodo"
                className="text-foreground-secondary hover:text-accent transition-colors font-medium"
              >
                {t('nav.method')}
              </Link>
            )}
          </div>

          {/* CTA / Auth */}
          <div className="hidden md:flex items-center gap-4">
            {!loading && (
              user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-border hover:border-accent transition-colors font-medium"
                  >
                    <User size={18} />
                    <span className="text-sm">{user.email?.split('@')[0]}</span>
                    <ChevronDown size={16} />
                  </button>
                  {showUserMenu && (
                    <>
                      <div className="fixed inset-0 z-[-1]" onClick={() => setShowUserMenu(false)} />
                      <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-surface-border p-2">
                        <div className="px-3 py-2 border-b border-surface-border mb-1">
                          <p className="text-xs text-foreground-muted font-medium truncate">{user.email}</p>
                        </div>
                        <Link
                          href="/metodo"
                          onClick={() => setShowUserMenu(false)}
                          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-foreground hover:bg-surface-border/30 rounded-xl transition-colors font-medium"
                        >
                          {t('nav.method')}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium"
                        >
                          <LogOut size={16} />
                          Esci
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )
            )}
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
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            {!loading && user && (
              <Link
                href="/metodo"
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground font-medium py-2"
              >
                {t('nav.method')}
              </Link>
            )}
            {!loading && (
              user ? (
                <button
                  onClick={() => { handleLogout(); setIsMenuOpen(false) }}
                  className="flex items-center gap-2 text-red-500 font-medium py-2"
                >
                  <LogOut size={16} />
                  Esci
                </button>
              ) : (
                <>
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
                </>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
