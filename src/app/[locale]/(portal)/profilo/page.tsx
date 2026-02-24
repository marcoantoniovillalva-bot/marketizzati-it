'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { updateProfile } from '@/actions/auth'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, User } from 'lucide-react'
import Image from 'next/image'

interface ProfileData {
  full_name: string
  email: string
  phone: string
  avatar_url: string | null
  provider: string
}

export default function ProfiloPage() {
  const t = useTranslations('portal.profile')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: dbProfile } = await supabase
        .from('profiles')
        .select('full_name, phone')
        .eq('id', user.id)
        .single()

      const meta = user.user_metadata || {}
      const provider = user.app_metadata?.provider || 'email'

      setProfile({
        full_name: dbProfile?.full_name || meta.full_name || meta.name || '',
        email: user.email || '',
        phone: dbProfile?.phone || '',
        avatar_url: meta.avatar_url || meta.picture || null,
        provider,
      })
    }

    loadProfile()
  }, [])

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setSaved(false)
    setError(null)

    const result = await updateProfile(formData)

    if (result?.error) {
      setError(result.error)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setLoading(false)
  }

  if (!profile) {
    return (
      <div className="space-y-8">
        <h1 className="font-heading text-display-sm">{t('title')}</h1>
        <div className="animate-pulse space-y-4 max-w-md">
          <div className="h-10 bg-surface-elevated rounded-xl" />
          <div className="h-10 bg-surface-elevated rounded-xl" />
          <div className="h-10 bg-surface-elevated rounded-xl" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="font-heading text-display-sm">{t('title')}</h1>

      {/* Avatar + Provider info */}
      <div className="flex items-center gap-4">
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt="Avatar"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full border-2 border-surface-border"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-surface-elevated border-2 border-surface-border flex items-center justify-center">
            <User size={28} className="text-foreground-muted" />
          </div>
        )}
        <div>
          <p className="font-medium text-foreground">{profile.full_name || profile.email}</p>
          <p className="text-sm text-foreground-muted">{profile.email}</p>
          {profile.provider === 'google' && (
            <span className="inline-flex items-center gap-1 mt-1 text-xs text-foreground-muted bg-surface-elevated px-2 py-0.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Google
            </span>
          )}
        </div>
      </div>

      <form action={handleSubmit} className="space-y-6 max-w-md">
        <Input
          id="full_name"
          name="full_name"
          label="Nome e Cognome"
          placeholder="Mario Rossi"
          defaultValue={profile.full_name}
        />

        <Input
          id="email_display"
          label="Email"
          value={profile.email}
          disabled
          hint="L'email non puo' essere modificata"
        />

        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Numero WhatsApp (opzionale)"
          placeholder="+39 333 1234567"
          defaultValue={profile.phone}
        />

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {saved && (
          <div className="flex items-center gap-2 text-accent">
            <CheckCircle size={18} />
            <span className="text-sm">{t('saved')}</span>
          </div>
        )}

        <Button type="submit" isLoading={loading}>
          {t('save')}
        </Button>
      </form>
    </div>
  )
}
