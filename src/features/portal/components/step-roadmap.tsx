'use client'

import { useState } from 'react'
import { moveStepProgress } from '@/actions/portal'
import type { ClientStep } from '@/types/database'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2, CircleDot, Lock, TrendingDown, TrendingUp } from 'lucide-react'

type StepRoadmapProps = {
  steps: ClientStep[]
  interactive?: boolean
}

export function StepRoadmap({ steps, interactive = false }: StepRoadmapProps) {
  const [pendingId, setPendingId] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleMove(step: ClientStep, direction: 'forward' | 'backward') {
    setPendingId(step.id)
    setFeedback(null)
    setError(null)
    const result = await moveStepProgress(step.id, direction)
    if (result?.error) {
      setError(result.error)
    } else {
      setFeedback(result?.message || 'Fase aggiornata.')
    }
    setPendingId(null)
  }

  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const complete = step.status === 'completed'
        const active = step.status === 'in_progress'

        return (
          <div
            key={step.id}
            className={`rounded-[28px] border p-5 transition-all ${
              active
                ? 'border-accent/30 bg-white shadow-glow-red'
                : complete
                  ? 'border-success/30 bg-success/5'
                  : 'border-surface-border bg-white'
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="mt-0.5">
                  {complete ? (
                    <CheckCircle2 size={24} className="text-success" />
                  ) : active ? (
                    <CircleDot size={24} className="text-accent" />
                  ) : (
                    <Lock size={24} className="text-foreground-muted" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">
                      Fase {index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {step.progress}% completato
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-foreground-secondary">{step.summary}</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">Deliverable</p>
                      <p className="mt-2 text-sm font-medium text-foreground">{step.deliverable_title || 'Da definire'}</p>
                    </div>
                    <div className="rounded-2xl bg-background p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">Prossima azione</p>
                      <p className="mt-2 text-sm font-medium text-foreground">{step.next_action || 'Nessuna azione assegnata'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {interactive && (
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    isLoading={pendingId === step.id}
                    leftIcon={<ArrowLeft size={16} />}
                    onClick={() => handleMove(step, 'backward')}
                    disabled={step.progress === 0}
                  >
                    Torna indietro
                  </Button>
                  <Button
                    variant={complete ? 'secondary' : 'primary'}
                    size="sm"
                    isLoading={pendingId === step.id}
                    leftIcon={complete ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
                    onClick={() => handleMove(step, 'forward')}
                    disabled={step.progress >= 100}
                  >
                    {complete ? 'Fase completa' : 'Avanza fase'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )
      })}
      {feedback && <p className="text-sm text-success">{feedback}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
