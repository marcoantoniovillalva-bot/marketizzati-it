'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Eye, Lock, Presentation, Share2, Sparkles } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  type: string
  premium?: boolean
  unlocked: boolean
  unlockedBy: 'step' | 'manual' | 'always-on' | null
  unlockStepCode?: string | null
  onView?: () => void
  fileUrl?: string | null
  shareUrl?: string | null
}

function unlockLabel(unlockedBy: 'step' | 'manual' | 'always-on' | null, premium: boolean, t: ReturnType<typeof useTranslations>) {
  if (!premium) {
    return t('free')
  }

  switch (unlockedBy) {
    case 'always-on':
      return 'Disponibile'
    case 'manual':
      return 'Sbloccata da admin'
    case 'step':
      return 'Sbloccata dal percorso'
    default:
      return 'Bloccata'
  }
}

export function ResourceCard({
  title,
  description,
  type,
  premium = false,
  unlocked,
  unlockedBy,
  unlockStepCode,
  onView,
  fileUrl,
  shareUrl,
}: ResourceCardProps) {
  const t = useTranslations('portal.resources')
  const [copied, setCopied] = useState(false)
  const clickable = unlocked && Boolean(onView || fileUrl)

  async function handleShare(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    if (!shareUrl) return

    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.prompt('Copia il link della risorsa', shareUrl)
    }
  }

  return (
    <div
      className={`rounded-2xl border p-6 transition-all ${
        clickable ? 'cursor-pointer border-surface-border bg-white hover:border-accent/30 hover:shadow-sm' : 'border-surface-border bg-surface-elevated'
      }`}
      onClick={() => {
        if (!unlocked) return
        if (onView) {
          onView()
        } else if (fileUrl) {
          window.open(fileUrl, '_blank', 'noopener,noreferrer')
        }
      }}
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${unlocked ? 'bg-accent/10' : 'bg-background'}`}>
          <Presentation size={24} className={unlocked ? 'text-accent' : 'text-foreground-muted'} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className={`font-semibold transition-colors ${clickable ? 'text-foreground hover:text-accent' : 'text-foreground'}`}>{title}</h3>
              <p className="mt-1 text-sm text-foreground-secondary">{description}</p>
            </div>
            <div className="flex items-center gap-2">
              {shareUrl && (
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label={`Condividi ${title}`}
                  title="Copia link condivisibile"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-surface-border bg-white text-foreground-muted transition-colors hover:border-accent/30 hover:text-accent"
                >
                  <Share2 size={16} />
                </button>
              )}
              <div className="shrink-0 rounded-lg p-2 text-foreground-muted">
                {clickable ? <Eye size={20} /> : <Lock size={20} />}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent">{type}</span>
            <span className={`rounded-full px-2 py-1 text-xs ${unlocked ? 'bg-foreground text-white' : 'bg-background text-foreground-muted'}`}>
              {unlockLabel(unlockedBy, premium, t)}
            </span>
            {unlockStepCode && (
              <span className="inline-flex items-center gap-1 text-xs text-foreground-muted">
                <Sparkles size={12} />
                Step {unlockStepCode}
              </span>
            )}
            {copied && <span className="text-xs font-medium text-accent">Link copiato</span>}
          </div>
          {!unlocked && (
            <p className="mt-3 text-xs text-foreground-muted">
              Questa risorsa si apre quando completi la fase corretta oppure quando l&apos;admin la sblocca per il tuo account.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
