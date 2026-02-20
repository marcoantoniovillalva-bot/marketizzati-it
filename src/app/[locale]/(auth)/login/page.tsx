import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { LoginForm } from '@/features/auth/components'

export default function LoginPage() {
  const t = useTranslations('auth.login')

  return (
    <div className="space-y-8">
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center justify-center mb-8">
        <span className="text-xl font-bold tracking-tight text-foreground">
          MARKET<span className="text-accent">IZZATI</span>
        </span>
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-display-xs text-foreground">{t('title')}</h1>
        <p className="mt-2 text-foreground-secondary">{t('subtitle')}</p>
      </div>

      <LoginForm />

      <p className="text-center text-sm text-foreground-secondary">
        {t('noAccount')}{' '}
        <Link href="/signup" className="font-medium text-accent hover:text-accent-hover hover:underline">
          {t('signUp')}
        </Link>
      </p>
    </div>
  )
}
