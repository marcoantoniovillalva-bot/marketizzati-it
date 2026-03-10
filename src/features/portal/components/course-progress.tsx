'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { CheckCircle, Circle, Lock } from 'lucide-react'

const courseDays = [
  { day: 1, title: 'Dove Sei Oggi?', duration: '15 min' },
  { day: 2, title: 'Il Tuo Cliente Ideale', duration: '20 min' },
  { day: 3, title: 'La Tua Proposta Unica', duration: '20 min' },
  { day: 4, title: 'Il Tuo Piano d\'Azione', duration: '25 min' },
  { day: 5, title: 'I Prossimi Passi', duration: '15 min' },
]

interface CourseProgressProps {
  completedDays?: number[]
}

export function CourseProgress({ completedDays = [] }: CourseProgressProps) {
  const t = useTranslations('portal.course')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-display-xs">{t('title')}</h2>
        <p className="text-foreground-secondary mt-1">{t('subtitle')}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-surface-elevated rounded-full h-2">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-500"
          style={{ width: `${(completedDays.length / 5) * 100}%` }}
        />
      </div>
      <p className="text-sm text-foreground-muted">{completedDays.length}/5 {t('completed')}</p>

      {/* Days list */}
      <div className="space-y-3">
        {courseDays.map((item) => {
          const isCompleted = completedDays.includes(item.day)
          const isUnlocked = item.day === 1 || completedDays.includes(item.day - 1)

          return (
            <Link
              key={item.day}
              href={isUnlocked ? `/corso/${item.day}` : '#'}
              className={`
                flex items-center gap-4 p-4 rounded-xl border transition-all
                ${isCompleted
                  ? 'bg-accent/5 border-accent/20'
                  : isUnlocked
                    ? 'bg-surface-elevated border-surface-border hover:border-accent/30'
                    : 'bg-surface border-surface-border opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="shrink-0">
                {isCompleted ? (
                  <CheckCircle size={24} className="text-accent" />
                ) : isUnlocked ? (
                  <Circle size={24} className="text-foreground-muted" />
                ) : (
                  <Lock size={24} className="text-foreground-muted" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {t('day')} {item.day}: {item.title}
                </p>
                <p className="text-sm text-foreground-muted">{item.duration}</p>
              </div>
              {isUnlocked && !isCompleted && (
                <span className="text-sm font-medium text-accent">{t('start')}</span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
