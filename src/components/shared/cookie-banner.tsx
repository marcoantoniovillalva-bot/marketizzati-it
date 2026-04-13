'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function CookieBanner() {
  const t = useTranslations('cookieBanner')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  function handleAcceptAll() {
    localStorage.setItem('cookie-consent', 'all')
    document.cookie = 'cookie-consent=all; max-age=31536000; path=/'
    // Google Consent Mode v2 — grant all
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      })
    }
    setIsVisible(false)
  }

  function handleRejectAll() {
    localStorage.setItem('cookie-consent', 'necessary')
    document.cookie = 'cookie-consent=necessary; max-age=31536000; path=/'
    // Google Consent Mode v2 — keep denied
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      })
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-surface-elevated border-t border-surface-border p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-foreground-secondary text-center md:text-left">
          {t('text')}{' '}
          <Link href="/privacy" className="underline hover:text-foreground transition-colors">
            {t('privacyLink')}
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleRejectAll}
            className="px-5 py-2.5 border border-surface-border text-foreground-secondary hover:text-foreground text-body-sm font-medium rounded-lg transition-colors"
          >
            {t('rejectAll')}
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-body-sm font-medium rounded-lg transition-colors"
          >
            {t('acceptAll')}
          </button>
        </div>
      </div>
    </div>
  )
}
