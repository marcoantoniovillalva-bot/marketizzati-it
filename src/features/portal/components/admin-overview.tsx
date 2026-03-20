import Link from 'next/link'
import type { AdminSnapshot } from '../lib/portal-data'
import { Button } from '@/components/ui/button'
import { convertProspectToClient, resolveClientRequest, runAllAutomationsNow, runAutomationAsAdmin } from '@/actions/admin'
import { ArrowRight, Bot, BriefcaseBusiness, LifeBuoy, SearchCode, Users, Zap } from 'lucide-react'

type AdminOverviewProps = {
  snapshot: AdminSnapshot
}

function MetricCard({ label, value, helper }: { label: string; value: string | number; helper: string }) {
  return (
    <div className="rounded-[26px] border border-surface-border bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">{label}</p>
      <p className="mt-3 font-heading text-4xl text-foreground">{value}</p>
      <p className="mt-2 text-sm text-foreground-secondary">{helper}</p>
    </div>
  )
}

export function AdminOverview({ snapshot }: AdminOverviewProps) {
  const appUrl = process.env.PROSPECTBOT_APP_URL || 'http://localhost:3001'
  const showProspectbotLink = !appUrl.includes('localhost')

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Clienti" value={snapshot.clients.length} helper="Utenti registrati nel portale" />
        <MetricCard label="Task completati" value={`${snapshot.completedTasks}/${snapshot.totalTasks || 0}`} helper="Avanzamento operativo globale" />
        <MetricCard label="Automazioni" value={snapshot.totalAutomations} helper="Workflow cliente attivi o schedulati" />
        <MetricCard label="Richieste aperte" value={snapshot.openRequests.length} helper="Ticket, revisioni e richieste automazione" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-white">
              <SearchCode size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Bridge ProspectBot</p>
              <h3 className="font-heading text-2xl text-foreground">Lead generation interna</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MetricCard label="Lead totali" value={snapshot.prospectbot.totalProspects} helper="Archivio prospect" />
            <MetricCard label="In lavorazione" value={snapshot.prospectbot.workingProspects} helper="Lead da trasformare" />
            <MetricCard label="Venduti" value={snapshot.prospectbot.soldProspects} helper="Potenziali clienti chiusi" />
          </div>

          <div className="mt-6 rounded-[24px] bg-background p-5">
            {snapshot.prospectbot.configured ? (
              <>
                <p className="text-sm text-foreground-secondary">
                  Il bridge e attivo: stai leggendo i dati ProspectBot direttamente nell’admin di Marketizzati.
                </p>
                <div className="mt-4 space-y-3">
                  {snapshot.prospectbot.recentProspects.map((prospect) => (
                    <div key={prospect.id} className="rounded-2xl bg-white px-4 py-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-foreground">{prospect.nome || 'Prospect senza nome'}</p>
                          <p className="text-sm text-foreground-secondary">
                            {prospect.professione || 'N/D'} · {prospect.citta || 'N/D'}
                          </p>
                          <p className="mt-2 text-xs text-foreground-muted">
                            {prospect.email || 'email assente'} · {prospect.telefono || 'telefono assente'}
                          </p>
                          <p className="mt-1 text-xs text-foreground-muted">
                            {prospect.sito_web_attuale
                              ? `Sito: ${prospect.sito_web_attuale} · Score ${prospect.qualita_sito_score ?? 'n/d'}`
                              : 'Sito assente'}
                          </p>
                        </div>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {prospect.status || 'nuovo'}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        {prospect.imported ? (
                          <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                            Gia convertito in cliente
                          </span>
                        ) : prospect.email ? (
                          <form action={convertProspectToClient}>
                            <input type="hidden" name="prospect_id" value={prospect.id} />
                            <Button size="sm">Converti in cliente</Button>
                          </form>
                        ) : (
                          <span className="rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                            Manca email: conversione non disponibile
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-foreground-secondary">
                Configura `PROSPECTBOT_SUPABASE_URL` e `PROSPECTBOT_SERVICE_ROLE_KEY` per vedere lead e pipeline direttamente qui.
              </p>
            )}
          </div>

          <div className="mt-6">
            {showProspectbotLink ? (
              <Link href={appUrl} target="_blank" rel="noreferrer">
                <Button rightIcon={<ArrowRight size={16} />}>Apri ProspectBot</Button>
              </Link>
            ) : (
              <p className="text-sm text-foreground-secondary">
                Configura un URL pubblico per ProspectBot se vuoi aprirlo direttamente da qui.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Zap size={18} className="text-accent" />
                <h3 className="font-heading text-2xl text-foreground">Automazioni vere</h3>
              </div>
              <form action={runAllAutomationsNow}>
                <Button size="sm">Esegui tutto adesso</Button>
              </form>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              <MetricCard label="Attive" value={snapshot.automationHealth.active} helper="Workflow in esecuzione" />
              <MetricCard label="In coda" value={snapshot.automationHealth.queued} helper="Pronte ma non ancora partite" />
              <MetricCard label="In pausa" value={snapshot.automationHealth.paused} helper="Richiedono un evento trigger" />
              <MetricCard label="Da eseguire" value={snapshot.automationHealth.dueNow} helper="Gia scadute o senza pianificazione" />
            </div>

            <div className="mt-5 space-y-3">
              {snapshot.automationHealth.recentRuns.slice(0, 6).map((automation) => (
                <div key={automation.id} className="rounded-2xl bg-background p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-medium text-foreground">{automation.title}</p>
                      <p className="text-sm text-foreground-secondary">
                        {automation.client_name || 'Cliente non identificato'} · {automation.status}
                      </p>
                      {automation.summary && (
                        <p className="mt-2 text-sm text-foreground-secondary">{automation.summary}</p>
                      )}
                      <p className="mt-2 text-xs text-foreground-muted">
                        Ultima esecuzione: {automation.last_run_at ? new Date(automation.last_run_at).toLocaleString('it-IT') : 'mai'} · Prossima: {automation.next_run_at ? new Date(automation.next_run_at).toLocaleString('it-IT') : 'da pianificare'}
                      </p>
                    </div>
                    <form action={runAutomationAsAdmin}>
                      <input type="hidden" name="automation_id" value={automation.id} />
                      <Button size="sm" variant="secondary">Esegui</Button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-accent" />
              <h3 className="font-heading text-2xl text-foreground">Clienti e stato operativo</h3>
            </div>
            <div className="mt-5 space-y-3">
              {snapshot.clients.slice(0, 8).map((client) => (
                <div key={client.id} className="rounded-2xl bg-background p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{client.full_name || 'Cliente senza nome'}</p>
                        <p className="text-sm text-foreground-secondary">
                          {client.workspace?.business_name || 'Business non definito'}
                        </p>
                      </div>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {client.role}
                      </span>
                    </div>

                    <div className="grid gap-3 md:grid-cols-4">
                      <div className="rounded-2xl bg-white px-3 py-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Fase attiva</p>
                        <p className="mt-1 text-sm font-medium text-foreground">{client.activeStepTitle || 'Non avviata'}</p>
                      </div>
                      <div className="rounded-2xl bg-white px-3 py-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Task</p>
                        <p className="mt-1 text-sm font-medium text-foreground">{client.completedTasks}/{client.totalTasks || 0}</p>
                      </div>
                      <div className="rounded-2xl bg-white px-3 py-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Fasi chiuse</p>
                        <p className="mt-1 text-sm font-medium text-foreground">{client.completedSteps}/{client.totalSteps || 0}</p>
                      </div>
                      <div className="rounded-2xl bg-white px-3 py-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Richieste aperte</p>
                        <p className="mt-1 text-sm font-medium text-foreground">{client.openRequests}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-muted">
                      <span>Canale: {client.workspace?.primary_channel || 'Non definito'}</span>
                      <span>Automazioni: {client.automations}</span>
                      <span>
                        Ultima attivita: {client.lastActivity ? new Date(client.lastActivity).toLocaleString('it-IT') : 'n/d'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <div className="flex items-center gap-3">
              <LifeBuoy size={18} className="text-accent" />
              <h3 className="font-heading text-2xl text-foreground">Richieste aperte</h3>
            </div>
            <div className="mt-5 space-y-3">
              {snapshot.openRequests.slice(0, 5).map((request) => (
                <div key={request.id} className="rounded-2xl bg-background p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
                    <Bot size={12} className="text-accent" />
                    {request.type}
                  </div>
                  <p className="mt-2 font-medium text-foreground">{request.title}</p>
                  {request.description && <p className="mt-2 text-sm text-foreground-secondary">{request.description}</p>}
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
                </div>
              ))}
              {snapshot.openRequests.length === 0 && (
                <div className="rounded-2xl bg-background p-4 text-sm text-foreground-secondary">
                  Nessuna richiesta aperta al momento.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={18} className="text-accent" />
              <h3 className="font-heading text-2xl text-foreground">Direzione consigliata</h3>
            </div>
            <p className="mt-4 text-sm text-foreground-secondary">
              L’admin non deve usare il portale come il cliente. Deve usarlo per leggere stato per utente, sbloccare risorse,
              chiudere richieste, convertire lead e attivare automazioni quando serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
