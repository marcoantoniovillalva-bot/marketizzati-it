import { WorkspaceForm } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function WorkspacePage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Workspace cliente</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Dati, contesto e materiali che guidano il lavoro</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Questa e la stanza operativa del progetto. Qui inserisci le informazioni che servono a Marketizzati per costruire
          il sistema giusto e automatizzare cio che oggi ti rallenta.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-surface-border bg-white p-6">
          <WorkspaceForm workspace={snapshot.workspace} />
        </div>

        <div className="space-y-4">
          <div className="rounded-[28px] border border-surface-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Workspace health</p>
            <p className="mt-3 font-heading text-5xl text-foreground">{snapshot.workspace?.workspace_health ?? 0}%</p>
            <p className="mt-3 text-sm text-foreground-secondary">
              Una stima rapida di quanto il progetto e documentato e pronto a essere eseguito senza attrito.
            </p>
          </div>
          <div className="rounded-[28px] border border-surface-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Focus automazione</p>
            <p className="mt-3 text-lg font-medium text-foreground">
              {snapshot.workspace?.automation_focus || 'Ancora da definire'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
