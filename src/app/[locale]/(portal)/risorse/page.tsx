import { ResourcesLibrary } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function RisorsePage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Risorse</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Libreria attiva del percorso</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Le risorse tornano come prima, ma ora sono dinamiche: alcune sono libere, altre si sbloccano
          in base alla tua fase Z-START o quando l’admin le assegna direttamente al tuo account.
        </p>
      </div>

      <ResourcesLibrary resources={snapshot.resources} />
    </div>
  )
}
