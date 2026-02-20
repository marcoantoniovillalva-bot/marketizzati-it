import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Mail, ArrowLeft } from 'lucide-react'

export default function CheckEmailPage() {
  const t = useTranslations('auth.checkEmail')

  return (
    <div className="space-y-8 text-center">
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center justify-center mb-8">
        <span className="text-xl font-bold tracking-tight text-foreground">
          MARKET<span className="text-accent">IZZATI</span>
        </span>
      </div>

      <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
        <Mail size={40} className="text-accent" />
      </div>

      <div>
        <h1 className="text-display-xs text-foreground">{t('title')}</h1>
        <p className="mt-3 text-foreground-secondary leading-relaxed">
          {t('message')}
        </p>
      </div>

      <div className="bg-surface border border-surface-border rounded-xl p-6">
        <p className="text-sm text-foreground-secondary">
          {t('spam')}{' '}
          <button className="font-medium text-accent hover:text-accent-hover hover:underline">
            {t('resend')}
          </button>
        </p>
      </div>

      <Link
        href="/login"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        {t('backToLogin')}
      </Link>
    </div>
  )
}
