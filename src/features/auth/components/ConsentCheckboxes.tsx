'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function ConsentCheckboxes() {
  const t = useTranslations('auth.consent')

  return (
    <div className="space-y-3">
      {/* Terms - Required */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="consent_terms"
          required
          className="mt-1 h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent/50 shrink-0"
        />
        <span className="text-xs text-foreground-secondary leading-relaxed">
          {t('termsPrefix')}{' '}
          <Link href="/termini" className="text-accent hover:underline" target="_blank">
            {t('termsOfService')}
          </Link>{' '}
          {t('and')}{' '}
          <Link href="/privacy" className="text-accent hover:underline" target="_blank">
            {t('privacyPolicy')}
          </Link>
          {' '}<span className="text-red-400">*</span>
        </span>
      </label>

      {/* Marketing - Optional */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="consent_marketing"
          className="mt-1 h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent/50 shrink-0"
        />
        <span className="text-xs text-foreground-muted leading-relaxed">
          {t('marketing')}
        </span>
      </label>

      {/* Newsletter - Optional */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name="consent_newsletter"
          className="mt-1 h-4 w-4 rounded border-surface-border bg-surface text-accent focus:ring-accent/50 shrink-0"
        />
        <span className="text-xs text-foreground-muted leading-relaxed">
          {t('newsletter')}
        </span>
      </label>
    </div>
  )
}
