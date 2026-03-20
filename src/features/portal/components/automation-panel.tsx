'use client'

import type { AutomationRun } from '@/types/database'
import { triggerAutomationRun } from '@/actions/portal'
import { Bot, CalendarClock, PauseCircle, PlayCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useTransition } from 'react'

type AutomationPanelProps = {
  automations: AutomationRun[]
}

export function AutomationPanel({ automations }: AutomationPanelProps) {
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="grid gap-4">
      {automations.map((automation) => (
        <div key={automation.id} className="rounded-[26px] border border-surface-border bg-white p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <Bot size={12} />
                  {automation.automation_type.replace(/_/g, ' ')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs text-foreground-muted">
                  {automation.status === 'active' ? <PlayCircle size={12} /> : <PauseCircle size={12} />}
                  {automation.status}
                </span>
              </div>
              <h3 className="mt-3 font-heading text-xl text-foreground">{automation.title}</h3>
              <p className="mt-2 text-sm text-foreground-secondary">{automation.summary}</p>
            </div>
            <div className="rounded-2xl bg-background p-4 text-sm text-foreground-secondary">
              <div className="flex items-center gap-2">
                <CalendarClock size={14} className="text-accent" />
                Prossimo check automatico
              </div>
              <p className="mt-2 font-medium text-foreground">
                {automation.next_run_at ? new Date(automation.next_run_at).toLocaleString('it-IT') : 'Da schedulare'}
              </p>
              <div className="mt-4">
                <Button
                  size="sm"
                  variant="secondary"
                  isLoading={isPending}
                  onClick={() =>
                    startTransition(async () => {
                      setFeedback(null)
                      setError(null)
                      const result = await triggerAutomationRun(automation.id)
                      if (result?.error) {
                        setError(result.error)
                      } else {
                        setFeedback(result?.message || 'Automazione eseguita.')
                      }
                    })
                  }
                >
                  Esegui ora
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {automations.length === 0 && (
        <div className="rounded-[26px] border border-dashed border-surface-border bg-white p-6 text-sm text-foreground-secondary">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <Sparkles size={16} className="text-accent" />
            Nessuna automazione attiva
          </div>
          <p className="mt-2">Quando configuriamo i tuoi workflow, li vedrai qui con stato e prossima esecuzione.</p>
        </div>
      )}
      {feedback && <p className="text-sm text-success">{feedback}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
