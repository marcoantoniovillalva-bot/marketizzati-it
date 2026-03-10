'use client'

import { useTranslations } from 'next-intl'
import { FileText, Presentation, Eye } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  type: string
  onView?: () => void
}

export function ResourceCard({ title, description, type, onView }: ResourceCardProps) {
  const t = useTranslations('portal.resources')

  return (
    <div
      className="bg-surface-elevated border border-surface-border rounded-xl p-6 flex items-start gap-4 hover:border-accent/30 transition-all cursor-pointer group"
      onClick={onView}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
        <Presentation size={24} className="text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-foreground-secondary mt-1">{description}</p>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{type}</span>
          <span className="text-xs text-foreground-muted">{t('free')}</span>
        </div>
      </div>
      <div className="shrink-0 p-2 rounded-lg group-hover:bg-accent/10 transition-colors text-foreground-muted group-hover:text-accent">
        <Eye size={20} />
      </div>
    </div>
  )
}
