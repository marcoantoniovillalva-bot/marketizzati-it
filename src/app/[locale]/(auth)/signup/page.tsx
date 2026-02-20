import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SignupForm } from '@/features/auth/components'

export default function SignupPage() {
  const t = useTranslations('auth.signup')
  const terms = useTranslations('auth.terms')

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

      <SignupForm />

      <p className="text-center text-sm text-foreground-secondary">
        {t('hasAccount')}{' '}
        <Link href="/login" className="font-medium text-accent hover:text-accent-hover hover:underline">
          {t('logIn')}
        </Link>
      </p>

      <p className="text-center text-xs text-foreground-muted">
        {terms('prefix')}{' '}
        <Link href="/termini" className="underline hover:text-foreground-secondary">
          {terms('termsOfService')}
        </Link>{' '}
        {terms('and')}{' '}
        <Link href="/privacy" className="underline hover:text-foreground-secondary">
          {terms('privacyPolicy')}
        </Link>
      </p>
    </div>
  )
}
