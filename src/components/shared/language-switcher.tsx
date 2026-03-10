'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

const locales = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function handleSwitch(newLocale: string) {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => handleSwitch(l.code)}
            className={`text-body-xs font-medium px-1.5 py-0.5 rounded transition-colors ${
              locale === l.code
                ? 'text-accent'
                : 'text-foreground-muted hover:text-foreground'
            }`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-foreground-muted text-body-xs">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
