import { ArrowRight, Bot, BriefcaseBusiness, Sparkles, Target } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import type { PortalSnapshot } from '../lib/portal-data'

type WelcomeCardProps = {
  snapshot: PortalSnapshot
}

export function WelcomeCard({ snapshot }: WelcomeCardProps) {
  const firstName = snapshot.profile?.full_name?.split(' ')[0] || 'Cliente'
  const completedSteps = snapshot.steps.filter((step) => step.status === 'completed').length
  const completedTasks = snapshot.tasks.filter((task) => task.completed).length
  const totalTasks = snapshot.tasks.length

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-accent/10 bg-[radial-gradient(circle_at_top_left,_rgba(254,51,20,0.16),_transparent_34%),linear-gradient(160deg,_#FFFFFF_0%,_#FFF7F4_45%,_#FFFFFF_100%)] p-7 shadow-card">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">Marketizzati Client OS</p>
            <h1 className="mt-4 font-heading text-display-sm text-foreground">
              {firstName}, qui gestisci il percorso Z-START come una macchina operativa.
            </h1>
            <p className="mt-4 text-body-md text-foreground-secondary">
              Non stai entrando in una landing privata. Stai entrando nell’area dove Marketizzati trasforma strategia,
              materiali e automazioni in azioni concrete per il tuo business.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[420px]">
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Fasi chiuse</p>
              <p className="mt-2 font-heading text-3xl text-foreground">{completedSteps}/6</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Task completati</p>
              <p className="mt-2 font-heading text-3xl text-foreground">{completedTasks}/{totalTasks}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Automazioni</p>
              <p className="mt-2 font-heading text-3xl text-foreground">{snapshot.automations.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/percorso" className="rounded-[28px] border border-surface-border bg-white p-6 transition-all hover:border-accent/30">
          <Sparkles size={22} className="text-accent" />
          <h3 className="mt-4 font-heading text-xl text-foreground">Percorso Z-START</h3>
          <p className="mt-2 text-sm text-foreground-secondary">Vedi fase attuale, deliverable e prossima azione consigliata.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Apri percorso
            <ArrowRight size={15} />
          </div>
        </Link>

        <Link href="/workspace" className="rounded-[28px] border border-surface-border bg-white p-6 transition-all hover:border-accent/30">
          <BriefcaseBusiness size={22} className="text-accent" />
          <h3 className="mt-4 font-heading text-xl text-foreground">Workspace cliente</h3>
          <p className="mt-2 text-sm text-foreground-secondary">Allinea business, offerta, target, materiali e obiettivi da far avanzare.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Apri workspace
            <ArrowRight size={15} />
          </div>
        </Link>

        <Link href="/automazioni" className="rounded-[28px] border border-surface-border bg-white p-6 transition-all hover:border-accent/30">
          <Bot size={22} className="text-accent" />
          <h3 className="mt-4 font-heading text-xl text-foreground">Automazioni</h3>
          <p className="mt-2 text-sm text-foreground-secondary">Controlla i workflow che Marketizzati puo attivare per ridurre il lavoro manuale.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Apri automazioni
            <ArrowRight size={15} />
          </div>
        </Link>
      </div>

      <div className="rounded-[28px] border border-surface-border bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Target size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Prossima mossa consigliata</p>
            <h3 className="mt-3 font-heading text-2xl text-foreground">
              {snapshot.steps.find((step) => step.status === 'in_progress')?.next_action || 'Apri il percorso e scegli la fase da sbloccare.'}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
