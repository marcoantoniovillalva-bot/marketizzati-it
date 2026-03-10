import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ForgotPasswordForm } from '@/features/auth/components'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const t = useTranslations('auth.forgotPassword')

  return (
    <div className="space-y-8">
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center justify-center mb-8">
        <Image
          src="/images/logo-dark.png"
          alt="Marketizzati"
          width={160}
          height={32}
          className="h-8 w-auto"
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-display-xs text-foreground">{t('title')}</h1>
        <p className="mt-2 text-foreground-secondary">{t('subtitle')}</p>
      </div>

      <ForgotPasswordForm />

      <Link
        href="/login"
        className="flex items-center justify-center gap-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        {t('backToLogin')}
      </Link>
    </div>
  )
}
