import { StepRoadmap } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function PercorsoPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Percorso Z-START</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Il tuo sistema di avanzamento guidato</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Ogni fase ha un deliverable chiaro, una prossima azione e uno stato. Qui Marketizzati ti accompagna passo dopo passo
          con un linguaggio operativo, non da landing page.
        </p>
      </div>

      <StepRoadmap steps={snapshot.steps} interactive />
    </div>
  )
}
