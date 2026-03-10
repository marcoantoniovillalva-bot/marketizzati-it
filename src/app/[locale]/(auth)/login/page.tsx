import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { LoginForm, OAuthButtons } from '@/features/auth/components'

export default function LoginPage() {
  const t = useTranslations('auth.login')

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

      <OAuthButtons />

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
