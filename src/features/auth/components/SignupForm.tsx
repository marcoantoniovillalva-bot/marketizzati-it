'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { signup } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { ConsentCheckboxes } from './ConsentCheckboxes'

export function SignupForm() {
  const t = useTranslations('auth.signup')
  const tAuth = useTranslations('auth')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)

    const result = await signup(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
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

      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label={t('password')}
          placeholder="••••••••"
          hint={tAuth('passwordHint')}
          required
          minLength={6}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] text-foreground-muted hover:text-foreground-secondary transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <ConsentCheckboxes />

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
