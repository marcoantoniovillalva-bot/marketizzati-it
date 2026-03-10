'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { siteConfig } from '@/config/siteConfig'
import { createClient } from '@/lib/supabase/client'
import { Loader2, CheckCircle } from 'lucide-react'

const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().min(8),
  challenge: z.string().min(1),
})

type ConsultationFormData = z.infer<typeof consultationSchema>

export function ConsultationForm() {
  const t = useTranslations('consultation.form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  })

  async function onSubmit(data: ConsultationFormData) {
    setIsSubmitting(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.from('consultations').insert({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        challenge: data.challenge,
      })
      if (error) throw error
      setIsSuccess(true)
    } catch {
      alert(t('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-accent mx-auto mb-4" />
        <p className="text-body-lg font-semibold">{t('success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-body-sm font-medium mb-2">{t('name')}</label>
        <input
          {...register('name')}
          className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Mario Rossi"
        />
        {errors.name && <p className="mt-1 text-body-xs text-error">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-body-sm font-medium mb-2">{t('email')}</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="mario@email.com"
        />
        {errors.email && <p className="mt-1 text-body-xs text-error">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-body-sm font-medium mb-2">{t('whatsapp')}</label>
        <input
          {...register('whatsapp')}
          type="tel"
          className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-foreground placeholder:text-foreground-muted focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="+39 333 1234567"
        />
        {errors.whatsapp && <p className="mt-1 text-body-xs text-error">{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label className="block text-body-sm font-medium mb-2">{t('challenge')}</label>
        <select
          {...register('challenge')}
          className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-foreground focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        >
          <option value="">—</option>
          {siteConfig.consultation.challenges.map((c) => (
            <option key={c} value={c}>
              {t(`challenges.${c}`)}
            </option>
          ))}
        </select>
        {errors.challenge && <p className="mt-1 text-body-xs text-error">{errors.challenge.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-body-lg shadow-glow-red disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 size={20} className="animate-spin" />}
        {t('submit')}
      </button>

      <p className="text-center text-body-sm text-foreground-muted">{t('microcopy')}</p>
      <p className="text-center text-body-xs text-foreground-muted">{t('privacy')}</p>
    </form>
  )
}
