'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, User, LogOut, ChevronDown, Globe, Shield, BookOpen } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { createClient } from '@/lib/supabase/client'

const LOCALES = [
  { code: 'it', label: 'IT', flag: '🇮🇹' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
]

export function Navbar() {
  const t = useTranslations('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { user, loading } = useAuth()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!user) { setIsAdmin(false); return }
    const supabase = createClient()
    supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
      .then(({ data }) => setIsAdmin(data?.role === 'admin'))
  }, [user])

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setShowLangMenu(false)
  }

  const publicNavLinks = [
    { name: t('nav.services'), href: '/#servizi' },
    { name: t('nav.about'), href: '/#chi-sono' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.consultation'), href: '/#contatti' },
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

          {/* Language Switcher (desktop) */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-surface-border hover:border-accent transition-colors text-foreground-secondary hover:text-accent font-medium text-sm"
            >
              <Globe size={15} />
              <span>{LOCALES.find(l => l.code === locale)?.label ?? 'IT'}</span>
              <ChevronDown size={13} />
            </button>
            <AnimatePresence>
              {showLangMenu && (
                <>
                  <div className="fixed inset-0 z-[-1]" onClick={() => setShowLangMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-surface-border p-1.5 z-50"
                  >
                    {LOCALES.map(l => (
                      <button
                        key={l.code}
                        onClick={() => handleLocaleChange(l.code)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors font-medium ${locale === l.code ? 'text-accent bg-accent/5' : 'text-foreground hover:bg-surface-border/30'}`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
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
                        {isAdmin && (
                          <>
                            <div className="my-1 border-t border-surface-border" />
                            <Link
                              href="/admin"
                              onClick={() => setShowUserMenu(false)}
                              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-foreground hover:bg-surface-border/30 rounded-xl transition-colors font-medium"
                            >
                              <Shield size={15} />
                              Admin
                            </Link>
                            <Link
                              href="/admin/blog"
                              onClick={() => setShowUserMenu(false)}
                              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-accent hover:bg-accent/5 rounded-xl transition-colors font-medium"
                            >
                              <BookOpen size={15} />
                              Blog CMS
                            </Link>
                            <div className="my-1 border-t border-surface-border" />
                          </>
                        )}
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
                <a
                  href="/#contatti"
                  className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all hover:shadow-glow-red"
                >
                  {t('cta.bookMy')}
                </a>
              )
            )}
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 p-2 rounded-xl text-foreground-secondary hover:text-accent transition-colors"
              >
                <Globe size={20} />
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <>
                    <div className="fixed inset-0 z-[-1]" onClick={() => setShowLangMenu(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-surface-border p-1.5 z-50"
                    >
                      {LOCALES.map(l => (
                        <button
                          key={l.code}
                          onClick={() => handleLocaleChange(l.code)}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors font-medium ${locale === l.code ? 'text-accent bg-accent/5' : 'text-foreground hover:bg-surface-border/30'}`}
                        >
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                <>
                  {isAdmin && (
                    <>
                      <div className="border-t border-surface-border pt-2 space-y-1">
                        <Link
                          href="/admin"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 text-foreground font-medium py-2"
                        >
                          <Shield size={16} />
                          Admin
                        </Link>
                        <Link
                          href="/admin/blog"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 text-accent font-medium py-2"
                        >
                          <BookOpen size={16} />
                          Blog CMS
                        </Link>
                      </div>
                    </>
                  )}
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false) }}
                    className="flex items-center gap-2 text-red-500 font-medium py-2"
                  >
                    <LogOut size={16} />
                    Esci
                  </button>
                </>
              ) : (
                <a
                  href="/#contatti"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-accent text-white font-semibold rounded-xl"
                >
                  {t('cta.bookMy')}
                </a>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
