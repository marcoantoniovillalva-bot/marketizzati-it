'use client'

import { useTranslations } from 'next-intl'
import { Eye, Lock, Presentation, Sparkles } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  type: string
  premium?: boolean
  unlockStepCode?: string | null
  onView?: () => void
  fileUrl?: string | null
}

export function ResourceCard({ title, description, type, premium = false, unlockStepCode, onView, fileUrl }: ResourceCardProps) {
  const t = useTranslations('portal.resources')
  const clickable = Boolean(onView || fileUrl)

  return (
    <div
      className={`bg-surface-elevated border border-surface-border rounded-xl p-6 flex items-start gap-4 transition-all group ${clickable ? 'cursor-pointer hover:border-accent/30' : ''}`}
      onClick={() => {
        if (onView) {
          onView()
        } else if (fileUrl) {
          window.open(fileUrl, '_blank', 'noopener,noreferrer')
        }
      }}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
        <Presentation size={24} className="text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-foreground-secondary mt-1">{description}</p>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{type}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${premium ? 'bg-foreground text-white' : 'text-foreground-muted bg-background'}`}>
            {premium ? 'Sbloccata' : t('free')}
          </span>
          {unlockStepCode && (
            <span className="inline-flex items-center gap-1 text-xs text-foreground-muted">
              <Sparkles size={12} />
              step {unlockStepCode}
            </span>
          )}
        </div>
      </div>
      <div className="shrink-0 p-2 rounded-lg transition-colors text-foreground-muted group-hover:bg-accent/10 group-hover:text-accent">
        {clickable ? <Eye size={20} /> : <Lock size={20} />}
      </div>
    </div>
  )
}
