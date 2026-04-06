import { AutomationPanel, StepRoadmap, TaskBoard, WelcomeCard } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function DashboardPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  const activeTasks = snapshot.tasks.filter((task) => !task.completed)

  return (
    <div className="space-y-8">
      <WelcomeCard snapshot={snapshot} />

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Roadmap</p>
            <h2 className="mt-2 font-heading text-display-xs text-foreground">Le tue fasi operative</h2>
          </div>
          <StepRoadmap steps={snapshot.steps.slice(0, 3)} />
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Execution</p>
            <h2 className="mt-2 font-heading text-display-xs text-foreground">Task prioritari</h2>
          </div>
          <TaskBoard tasks={activeTasks.slice(0, 4)} />
        </section>
      </div>

      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Automation layer</p>
          <h2 className="mt-2 font-heading text-display-xs text-foreground">Workflow automatici</h2>
        </div>
        <AutomationPanel automations={snapshot.automations} />
      </section>
    </div>
  )
}
