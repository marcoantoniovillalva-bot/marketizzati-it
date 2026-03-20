import { TaskBoard } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function TaskPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Task & deliverable</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">La lista delle cose che fanno avanzare davvero il progetto</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Qui non trovi teoria. Trovi azioni concrete, prioritarizzate e collegate alle fasi del metodo.
        </p>
      </div>

      <TaskBoard tasks={snapshot.tasks} />
    </div>
  )
}
