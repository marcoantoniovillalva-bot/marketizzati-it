import { AutomationPanel } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function AutomazioniPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Automazioni</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Dove il metodo Marketizzati inizia a lavorare per te</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Le automazioni servono a toglierti dal collo le attivita ripetitive e a dare continuita al progetto anche quando non sei operativo.
        </p>
      </div>

      <AutomationPanel automations={snapshot.automations} />
    </div>
  )
}
