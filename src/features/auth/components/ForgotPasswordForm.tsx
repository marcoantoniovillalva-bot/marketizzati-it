'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { resetPassword } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function ForgotPasswordForm() {
  const t = useTranslations('auth.forgotPassword')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)

    const result = await resetPassword(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-lg bg-accent/10 border border-accent/30 p-6 text-center">
        <Mail size={48} className="mx-auto text-accent mb-3" />
        <p className="text-foreground font-medium">{t('success')}</p>
        <p className="text-foreground-secondary text-sm mt-1">{t('successMessage')}</p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <Input
        id="email"
        name="email"
        type="email"
        label={t('email')}
        placeholder="nome@email.com"
        required
      />

      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        isLoading={loading}
        className="w-full"
      >
        {t('submit')}
      </Button>
    </form>
  )
}
