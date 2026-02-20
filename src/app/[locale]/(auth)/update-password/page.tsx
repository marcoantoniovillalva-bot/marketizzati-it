import { useTranslations } from 'next-intl'
import { UpdatePasswordForm } from '@/features/auth/components'
import { KeyRound } from 'lucide-react'

export default function UpdatePasswordPage() {
  const t = useTranslations('auth.updatePassword')

  return (
    <div className="space-y-8">
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center justify-center mb-8">
        <span className="text-xl font-bold tracking-tight text-foreground">
          MARKET<span className="text-accent">IZZATI</span>
        </span>
      </div>

      <div className="text-center lg:text-left">
        <div className="mx-auto lg:mx-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <KeyRound size={28} className="text-accent" />
        </div>
        <h1 className="text-display-xs text-foreground">{t('title')}</h1>
        <p className="mt-2 text-foreground-secondary">{t('subtitle')}</p>
      </div>

      <UpdatePasswordForm />
    </div>
  )
}
