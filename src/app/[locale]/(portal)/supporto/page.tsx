import { SupportRequestForm } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function SupportoPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Supporto e richieste</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Quando hai bisogno di una mano, il thread operativo parte da qui</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Puoi chiedere revisioni, aiuto, feedback o nuove automazioni senza uscire dal portale.
        </p>
      </div>

      <SupportRequestForm requests={snapshot.requests} />
    </div>
  )
}
