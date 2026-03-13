'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { createClient } from '@/lib/supabase/client'

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string
            callback: (response: { credential: string }) => void
            ux_mode?: string
            use_fedcm_for_prompt?: boolean
          }) => void
          renderButton: (
            parent: HTMLElement,
            options: {
              type?: string
              theme?: string
              size?: string
              text?: string
              shape?: string
              width?: number
              locale?: string
            }
          ) => void
        }
      }
    }
  }
}

export function OAuthButtons() {
  const t = useTranslations('auth.oauth')
  const router = useRouter()
  const buttonRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [clientId] = useState(() => process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '')

  const handleCredentialResponse = useCallback(async (response: { credential: string }) => {
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
    })

    if (authError) {
      setError(t('error'))
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }, [router, t])

  useEffect(() => {
    if (!clientId || !buttonRef.current) return

    function initializeGoogle() {
      if (!window.google?.accounts || !buttonRef.current) return

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        ux_mode: 'popup',
        use_fedcm_for_prompt: false,
      })

      const containerWidth = buttonRef.current.parentElement?.clientWidth ?? 400
      const buttonWidth = Math.min(containerWidth, 400)

      window.google.accounts.id.renderButton(buttonRef.current, {
        type: 'standard',
        theme: 'filled_black',
        size: 'large',
        text: 'continue_with',
        shape: 'rectangular',
        width: buttonWidth,
      })
    }

    if (window.google?.accounts) {
      initializeGoogle()
      return
    }

    if (document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
      const interval = setInterval(() => {
        if (window.google?.accounts) {
          initializeGoogle()
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => initializeGoogle()
    document.head.appendChild(script)
  }, [clientId, handleCredentialResponse])

  // Only hide after client-side hydration confirms no client ID
  if (!clientId && typeof window !== 'undefined') {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div ref={buttonRef} />
      </div>

      {loading && (
        <div className="flex justify-center">
          <div className="w-5 h-5 border-2 border-foreground-muted border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <p className="text-xs text-red-400 text-center">{error}</p>
      )}

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
