'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { createClient } from '@/lib/supabase/client'
import { Lock } from 'lucide-react'

export function GatedSection({ children }: { children: React.ReactNode }) {
  const t = useTranslations('common')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data }) => {
      setIsAuthenticated(!!data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Loading state — render nothing to avoid flash
  if (isAuthenticated === null) {
    return (
      <div className="relative">
        <div className="blur-sm select-none pointer-events-none">{children}</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      <div className="blur-sm select-none pointer-events-none">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[2px]">
        <div className="text-center space-y-4 px-6">
          <div className="w-14 h-14 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center mx-auto">
            <Lock size={24} className="text-foreground-muted" />
          </div>
          <p className="text-foreground font-heading text-lg">
            Accedi per scoprire il Metodo Z·START
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
          >
            {t('nav.login')}
          </Link>
        </div>
      </div>
    </div>
  )
}
