'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { BookOpen, FolderOpen, Calendar } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function WelcomeCard() {
  const t = useTranslations('portal.dashboard')
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()

    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Try profile name first, then Google metadata, then email
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', user.id)
        .single()

      const name = profile?.full_name
        || user.user_metadata?.full_name
        || user.user_metadata?.name
        || user.email?.split('@')[0]
        || null

      setUserName(name)
    }

    loadUser()
  }, [])

  const firstName = userName?.split(' ')[0]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-display-sm">
          {firstName
            ? `${t('welcome').replace('!', '')}, ${firstName}!`
            : t('welcome')
          }
        </h1>
        <p className="text-foreground-secondary mt-2">{t('welcomeSubtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/corso"
          className="bg-surface-elevated border border-surface-border rounded-xl p-6 hover:border-accent/30 transition-all group"
        >
          <BookOpen size={24} className="text-accent mb-3" />
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {t('courseProgress')}
          </h3>
          <p className="text-sm text-foreground-muted mt-1">5 giorni per sbloccarti</p>
        </Link>

        <Link
          href="/risorse"
          className="bg-surface-elevated border border-surface-border rounded-xl p-6 hover:border-accent/30 transition-all group"
        >
          <FolderOpen size={24} className="text-accent mb-3" />
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {t('resources')}
          </h3>
          <p className="text-sm text-foreground-muted mt-1">Framework e strumenti</p>
        </Link>

        <Link
          href="/consulenza"
          className="bg-surface-elevated border border-surface-border rounded-xl p-6 hover:border-accent/30 transition-all group"
        >
          <Calendar size={24} className="text-accent mb-3" />
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {t('consultation')}
          </h3>
          <p className="text-sm text-foreground-muted mt-1">30 min strategici gratuiti</p>
        </Link>
      </div>
    </div>
  )
}
