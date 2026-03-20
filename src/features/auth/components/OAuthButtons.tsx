'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export function OAuthButtons() {
  const t = useTranslations('auth.oauth')
  const locale = useLocale()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGoogleLogin() {
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const redirectTo = `${window.location.origin}/auth/callback?next=/${locale}/dashboard`

      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })

      if (authError) {
        throw authError
      }
    } catch {
      setError(t('error'))
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button
        type="button"
        variant="outline"
        className="w-full justify-center"
        isLoading={loading}
        onClick={handleGoogleLogin}
      >
        {t('continueWithGoogle')}
      </Button>

      {error && <p className="text-center text-xs text-red-400">{error}</p>}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-surface-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-4 text-foreground-muted">{t('separator')}</span>
        </div>
      </div>
    </div>
  )
}
