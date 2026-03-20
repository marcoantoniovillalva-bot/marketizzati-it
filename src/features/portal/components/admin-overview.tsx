import Link from 'next/link'
import type { AdminSnapshot } from '../lib/portal-data'
import { Button } from '@/components/ui/button'
import { convertProspectToClient } from '@/actions/admin'
import { ArrowRight, Bot, BriefcaseBusiness, LifeBuoy, SearchCode, Users } from 'lucide-react'

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
            <Link href={appUrl} target="_blank" rel="noreferrer">
              <Button rightIcon={<ArrowRight size={16} />}>Apri ProspectBot</Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-surface-border bg-white p-6">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-accent" />
              <h3 className="font-heading text-2xl text-foreground">Clienti recenti</h3>
            </div>
            <div className="mt-5 space-y-3">
              {snapshot.clients.slice(0, 6).map((client) => (
                <div key={client.id} className="rounded-2xl bg-background p-4">
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
              Usa ProspectBot per trovare e preparare i lead. Usa Marketizzati per trasformarli in clienti gestiti,
              accompagnati e automatizzati nel percorso Z-START.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
