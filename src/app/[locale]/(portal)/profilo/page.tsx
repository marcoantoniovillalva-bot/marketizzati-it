'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { updateProfile } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle } from 'lucide-react'

export default function ProfiloPage() {
  const t = useTranslations('portal.profile')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  return (
    <div className="space-y-8">
      <h1 className="font-heading text-display-sm">{t('title')}</h1>

      <form action={handleSubmit} className="space-y-6 max-w-md">
        <Input
          id="full_name"
          name="full_name"
          label="Nome e Cognome"
          placeholder="Mario Rossi"
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
