'use client'

import { useTransition } from 'react'
import { toggleTask } from '@/actions/portal'
import type { ClientTask } from '@/types/database'
import { CheckCircle2, Circle, Cpu, TimerReset } from 'lucide-react'

type TaskBoardProps = {
  tasks: ClientTask[]
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <button
          key={task.id}
          type="button"
          onClick={() =>
            startTransition(async () => {
              await toggleTask(task.id, !task.completed)
            })
          }
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
            </div>
          </div>
        </button>
      ))}
      {isPending && <p className="text-sm text-foreground-muted">Aggiornamento in corso...</p>}
    </div>
  )
}
