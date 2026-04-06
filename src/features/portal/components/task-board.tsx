'use client'

import { useState, useTransition } from 'react'
import { toggleTask } from '@/actions/portal'
import { Link } from '@/i18n/navigation'
import type { ClientTask } from '@/types/database'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Circle, Cpu, TimerReset } from 'lucide-react'

type TaskBoardProps = {
  tasks: ClientTask[]
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function getTaskHref(stepCode: string | null) {
    switch (stepCode) {
      case 'zero-point':
      case 'strategy':
        return '/workspace'
      case 'technology':
        return '/workspace'
      case 'activation':
      case 'results':
      case 'transformation':
        return '/percorso'
      default:
        return '/dashboard'
    }
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`w-full rounded-[24px] border p-5 text-left transition-all ${
            task.completed ? 'border-success/30 bg-success/5' : 'border-surface-border bg-white hover:border-accent/30'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              {task.completed ? (
                <CheckCircle2 size={22} className="text-success" />
              ) : (
                <Circle size={22} className="text-foreground-muted" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-foreground">{task.title}</h3>
                {task.is_automated && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <Cpu size={12} />
                    supporto automatico
                  </span>
                )}
              </div>
              {task.description && <p className="mt-2 text-sm text-foreground-secondary">{task.description}</p>}
              {task.due_label && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs text-foreground-muted">
                  <TimerReset size={12} />
                  {task.due_label}
                </div>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={getTaskHref(task.step_code)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  Vai al punto operativo
                  <ArrowRight size={14} />
                </Link>
                <Button
                  type="button"
                  size="sm"
                  variant={task.completed ? 'outline' : 'secondary'}
                  isLoading={isPending}
                  onClick={() =>
                    startTransition(async () => {
                      setFeedback(null)
                      setError(null)
                      const result = await toggleTask(task.id, !task.completed)
                      if (result?.error) {
                        setError(result.error)
                      } else {
                        setFeedback(result?.message || 'Task aggiornato.')
                      }
                    })
                  }
                >
                  {task.completed ? 'Riapri task' : 'Segna completato'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isPending && <p className="text-sm text-foreground-muted">Aggiornamento in corso...</p>}
      {feedback && <p className="text-sm text-success">{feedback}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
