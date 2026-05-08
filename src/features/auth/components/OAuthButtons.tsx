'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { createClient } from '@/lib/supabase/client'

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (config: {
            client_id: string
            callback: (response: { credential?: string }) => void
          }) => void
          renderButton: (
            element: HTMLElement,
            options: {
              theme?: 'outline' | 'filled_blue' | 'filled_black'
              size?: 'large' | 'medium' | 'small'
              width?: number
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin'
              shape?: 'rectangular' | 'pill' | 'circle' | 'square'
            }
          ) => void
        }
      }
    }
  }
}

export function OAuthButtons() {
  const t = useTranslations('auth.oauth')
  const locale = useLocale()
  const buttonRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    if (!clientId || !buttonRef.current) {
      setError(t('error'))
      return
    }

    const renderGoogleButton = () => {
      if (!window.google?.accounts?.id || !buttonRef.current) return

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCredential,
      })

      buttonRef.current.innerHTML = ''
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: 'outline',
        size: 'large',
        width: buttonRef.current.offsetWidth || 360,
        text: 'continue_with',
        shape: 'rectangular',
      })
    }

    if (window.google?.accounts?.id) {
      renderGoogleButton()
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://accounts.google.com/gsi/client"]'
    )

    if (existingScript) {
      existingScript.addEventListener('load', renderGoogleButton, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = renderGoogleButton
    script.onerror = () => setError(t('error'))
    document.head.appendChild(script)
  }, [t])

  async function handleGoogleCredential(response: { credential?: string }) {
    if (!response.credential) {
      setError(t('error'))
      return
    }

    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: response.credential,
      })

      if (error) {
        throw error
      }

      window.location.href = `/${locale}/dashboard`
    } catch {
      setError(t('error'))
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className={loading ? 'pointer-events-none opacity-60' : ''} ref={buttonRef} />

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
