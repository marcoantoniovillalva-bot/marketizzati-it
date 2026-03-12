import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { LoginForm, OAuthButtons } from '@/features/auth/components'

export default function LoginPage() {
  const t = useTranslations('auth.login')

  return (
    <div className="space-y-8">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-display-xs text-foreground font-bold">{t('title')}</h1>
        <p className="mt-2 text-foreground-secondary text-sm md:text-base">{t('subtitle')}</p>
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
