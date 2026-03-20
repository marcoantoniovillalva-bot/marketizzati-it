import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { resolveClientRequest, runAutomationAsAdmin } from '@/actions/admin'
import { getAdminClientSnapshot } from '@/features/portal/lib/portal-data'

type AdminClientPageProps = {
  params: Promise<{
    locale: string
    id: string
  }>
}

function formatUnlockReason(unlockedBy: 'step' | 'manual' | 'always-on' | null) {
  switch (unlockedBy) {
    case 'always-on':
      return 'Sempre disponibile'
    case 'manual':
      return 'Sbloccata manualmente'
    case 'step':
      return 'Sbloccata dal percorso'
    default:
      return 'Ancora bloccata'
  }
}

export default async function AdminClientPage({ params }: AdminClientPageProps) {
  const { locale, id } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/${locale}/login`)
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (profile?.role !== 'admin') {
    redirect(`/${locale}/dashboard`)
  }

  const snapshot = await getAdminClientSnapshot(id)

  if (!snapshot || !snapshot.profile) {
    notFound()
  }

  const completedTasks = snapshot.tasks.filter((task) => task.completed).length
  const completedSteps = snapshot.steps.filter((step) => step.status === 'completed').length

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Cliente</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">
          {snapshot.profile.full_name || 'Cliente senza nome'}
        </h1>
        <p className="mt-3 text-body-md text-foreground-secondary">
          Vista operativa completa del cliente: progresso nel metodo, task, richieste, risorse sbloccate, asset e automazioni.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground-secondary">
          <span>{snapshot.workspace?.business_name || 'Business non definito'}</span>
          <span>{snapshot.workspace?.primary_channel || 'Canale non definito'}</span>
          <span>{snapshot.profile.phone || 'Telefono assente'}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[26px] border border-surface-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Workspace health</p>
          <p className="mt-3 font-heading text-4xl text-foreground">{snapshot.workspace?.workspace_health ?? 0}%</p>
        </div>
        <div className="rounded-[26px] border border-surface-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Task</p>
          <p className="mt-3 font-heading text-4xl text-foreground">{completedTasks}/{snapshot.tasks.length || 0}</p>
        </div>
        <div className="rounded-[26px] border border-surface-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Fasi completate</p>
          <p className="mt-3 font-heading text-4xl text-foreground">{completedSteps}/{snapshot.steps.length || 0}</p>
        </div>
        <div className="rounded-[26px] border border-surface-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Richieste aperte</p>
          <p className="mt-3 font-heading text-4xl text-foreground">
            {snapshot.requests.filter((request) => request.status !== 'resolved').length}
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Workspace</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Offerta</p>
              <p className="mt-2 text-sm font-medium text-foreground">{snapshot.workspace?.offer_name || 'Non definita'}</p>
            </div>
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Target</p>
              <p className="mt-2 text-sm font-medium text-foreground">{snapshot.workspace?.target_customer || 'Non definito'}</p>
            </div>
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Obiettivo</p>
              <p className="mt-2 text-sm font-medium text-foreground">{snapshot.workspace?.main_goal || 'Non definito'}</p>
            </div>
            <div className="rounded-2xl bg-background p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Focus automazione</p>
              <p className="mt-2 text-sm font-medium text-foreground">{snapshot.workspace?.automation_focus || 'Non definito'}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-background p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Note operative</p>
            <p className="mt-2 text-sm text-foreground-secondary whitespace-pre-wrap">
              {snapshot.workspace?.notes || 'Nessuna nota operativa presente.'}
            </p>
          </div>
        </div>

        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Percorso</p>
          <div className="mt-5 space-y-3">
            {snapshot.steps.map((step) => (
              <div key={step.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{step.title}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground-muted">
                    {step.progress}%
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground-secondary">{step.next_action || 'Nessuna azione assegnata'}</p>
                <p className="mt-2 text-xs text-foreground-muted">Stato: {step.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Task</p>
          <div className="mt-5 space-y-3">
            {snapshot.tasks.map((task) => (
              <div key={task.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{task.title}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground-muted">
                    {task.completed ? 'Completato' : 'Aperto'}
                  </span>
                </div>
                {task.description && <p className="mt-2 text-sm text-foreground-secondary">{task.description}</p>}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
                  <span>Step: {task.step_code || 'n/d'}</span>
                  <span>Scadenza: {task.due_label || 'n/d'}</span>
                  <span>{task.is_automated ? 'Automatizzato' : 'Manuale'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Automazioni</p>
          <div className="mt-5 space-y-3">
            {snapshot.automations.map((automation) => (
              <div key={automation.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-foreground">{automation.title}</p>
                    <p className="mt-1 text-sm text-foreground-secondary">{automation.summary}</p>
                  </div>
                  <form action={runAutomationAsAdmin}>
                    <input type="hidden" name="automation_id" value={automation.id} />
                    <Button size="sm" variant="secondary">Esegui</Button>
                  </form>
                </div>
                <p className="mt-2 text-xs text-foreground-muted">
                  Stato: {automation.status} · Ultima: {automation.last_run_at ? new Date(automation.last_run_at).toLocaleString('it-IT') : 'mai'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Richieste</p>
          <div className="mt-5 space-y-3">
            {snapshot.requests.map((request) => (
              <div key={request.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{request.title}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground-muted">
                    {request.status}
                  </span>
                </div>
                {request.description && <p className="mt-2 text-sm text-foreground-secondary">{request.description}</p>}
                {request.status !== 'resolved' && (
                  <form action={resolveClientRequest} className="mt-4 space-y-3">
                    <input type="hidden" name="request_id" value={request.id} />
                    <textarea
                      name="admin_note"
                      rows={3}
                      placeholder="Nota admin / esito della richiesta"
                      className="w-full rounded-2xl border border-surface-border bg-white px-4 py-3 text-sm"
                    />
                    <Button size="sm" variant="secondary">Segna come risolta</Button>
                  </form>
                )}
                {request.admin_note && (
                  <p className="mt-3 text-sm text-foreground-secondary whitespace-pre-wrap">{request.admin_note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Risorse</p>
            <div className="mt-5 space-y-3">
              {snapshot.resources.map((resource) => (
                <div key={resource.id} className="rounded-2xl bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-foreground">{resource.title}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground-muted">
                      {formatUnlockReason(resource.unlockedBy)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    {resource.description || 'Nessuna descrizione'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Asset</p>
            <div className="mt-5 space-y-3">
              {snapshot.assets.length > 0 ? (
                snapshot.assets.map((asset) => (
                  <div key={asset.id} className="rounded-2xl bg-background p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-foreground">{asset.title || 'Asset senza titolo'}</p>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground-muted">
                        {asset.asset_type}
                      </span>
                    </div>
                    {asset.url && (
                      <a href={asset.url} target="_blank" rel="noreferrer" className="mt-2 block text-sm text-accent underline">
                        {asset.url}
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl bg-background p-4 text-sm text-foreground-secondary">
                  Nessun asset disponibile per questo cliente.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
