'use client'

import type { AutomationRun } from '@/types/database'
import { triggerAutomationRun } from '@/actions/portal'
import { Bot, CalendarClock, CircleAlert, PauseCircle, PlayCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useTransition } from 'react'

type AutomationCard = AutomationRun & {
  whatItDoes?: string
  needs?: string[]
  missing?: string[]
  lastEffects?: string[]
}

type AutomationPanelProps = {
  automations: AutomationCard[]
}

export function AutomationPanel({ automations }: AutomationPanelProps) {
  const [runningId, setRunningId] = useState<string | null>(null)
  const [feedbackById, setFeedbackById] = useState<Record<string, string>>({})
  const [errorById, setErrorById] = useState<Record<string, string>>({})
  const [isPending, startTransition] = useTransition()

  return (
    <div className="grid gap-4">
      {automations.map((automation) => (
        <div key={automation.id} className="rounded-[26px] border border-surface-border bg-white p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1">
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
              <div className="mt-4 rounded-2xl bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">Cosa fa</p>
                <p className="mt-2 text-sm text-foreground-secondary">
                  {automation.whatItDoes || automation.summary || 'Workflow automatico configurato nel portale cliente.'}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">Per funzionare serve</p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground-secondary">
                      {(automation.needs || ['Configurazione base del portale cliente']).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">Cosa manca oggi</p>
                    {(automation.missing || []).length > 0 ? (
                      <ul className="mt-2 space-y-2 text-sm text-warning">
                        {(automation.missing || []).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-success">Nessun blocco rilevato.</p>
                    )}
                  </div>
                </div>
                {(automation.lastEffects || []).length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted">Ultimi effetti eseguiti</p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground-secondary">
                      {(automation.lastEffects || []).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="rounded-2xl bg-background p-4 text-sm text-foreground-secondary md:w-[280px]">
              <div className="flex items-center gap-2">
                <CalendarClock size={14} className="text-accent" />
                Prossimo check automatico
              </div>
              <p className="mt-2 font-medium text-foreground">
                {automation.next_run_at ? new Date(automation.next_run_at).toLocaleString('it-IT') : 'Da schedulare'}
              </p>
              <p className="mt-3 text-xs text-foreground-muted">
                Ultima esecuzione: {automation.last_run_at ? new Date(automation.last_run_at).toLocaleString('it-IT') : 'mai'}
              </p>
              <div className="mt-4">
                <Button
                  size="sm"
                  variant="secondary"
                  isLoading={isPending && runningId === automation.id}
                  onClick={() =>
                    startTransition(async () => {
                      setRunningId(automation.id)
                      setFeedbackById((current) => ({ ...current, [automation.id]: '' }))
                      setErrorById((current) => ({ ...current, [automation.id]: '' }))
                      const result = await triggerAutomationRun(automation.id)
                      if (result?.error) {
                        setErrorById((current) => ({ ...current, [automation.id]: result.error! }))
                      } else {
                        const detail = result?.effects?.length
                          ? `${result.message} Effetti: ${result.effects.join(' ')}`
                          : result?.message || 'Automazione eseguita.'
                        setFeedbackById((current) => ({ ...current, [automation.id]: detail }))
                      }
                      setRunningId(null)
                    })
                  }
                >
                  Esegui ora
                </Button>
              </div>
              {feedbackById[automation.id] && (
                <p className="mt-3 rounded-2xl bg-success/10 px-3 py-3 text-xs text-success">
                  {feedbackById[automation.id]}
                </p>
              )}
              {errorById[automation.id] && (
                <p className="mt-3 rounded-2xl bg-red-50 px-3 py-3 text-xs text-red-600">
                  {errorById[automation.id]}
                </p>
              )}
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

      <div className="rounded-[26px] border border-surface-border bg-white p-5 text-sm text-foreground-secondary">
        <div className="flex items-start gap-3">
          <CircleAlert size={18} className="mt-0.5 text-accent" />
          <div>
            <p className="font-medium text-foreground">Come leggere questa sezione</p>
            <p className="mt-2">
              Ogni automazione esegue una funzione diversa. Se vedi elementi mancanti, quello e il motivo per cui il workflow produce pochi effetti o resta in pausa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
