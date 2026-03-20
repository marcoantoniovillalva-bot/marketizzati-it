import { AutomationPanel } from '@/features/portal/components'
import { getPortalSnapshot } from '@/features/portal/lib/portal-data'

export default async function AutomazioniPage() {
  const snapshot = await getPortalSnapshot()

  if (!snapshot) {
    return null
  }

  const automationCards = snapshot.automations.map((automation) => {
    const metadata =
      automation.metadata && typeof automation.metadata === 'object' && !Array.isArray(automation.metadata)
        ? (automation.metadata as Record<string, unknown>)
        : {}
    const lastEffects = Array.isArray(metadata.last_effects)
      ? metadata.last_effects.filter((item): item is string => typeof item === 'string')
      : []
    const resolvedRequests = snapshot.requests.filter((request) => request.status === 'resolved')
    const missingWorkspaceFields = [
      !snapshot.workspace?.business_name ? 'nome business' : null,
      !snapshot.workspace?.offer_name ? 'offerta principale' : null,
      !snapshot.workspace?.target_customer ? 'cliente ideale' : null,
      !snapshot.workspace?.primary_channel ? 'canale principale' : null,
      !snapshot.workspace?.main_goal ? 'obiettivo principale' : null,
    ].filter((value): value is string => Boolean(value))

    switch (automation.automation_type) {
      case 'weekly_review':
        return {
          ...automation,
          whatItDoes:
            'Legge task, fasi e asset del tuo portale, aggiorna la salute del workspace e crea un recap operativo automatico.',
          needs: ['Percorso e task presenti nel portale', 'Workspace cliente attivo'],
          missing: snapshot.tasks.length === 0 || snapshot.steps.length === 0 ? ['Task o fasi ancora assenti'] : [],
          lastEffects,
        }
      case 'asset_reminder':
        return {
          ...automation,
          whatItDoes:
            'Controlla dati mancanti nel workspace, verifica se mancano asset e puo sbloccare risorse utili in anticipo.',
          needs: ['Workspace compilato', 'Asset caricati', 'Fase strategy/technology/activation avviata'],
          missing: [
            ...(missingWorkspaceFields.length > 0 ? [`Campi workspace mancanti: ${missingWorkspaceFields.join(', ')}`] : []),
            ...(snapshot.assets.length === 0 ? ['Nessun asset operativo caricato'] : []),
          ],
          lastEffects,
        }
      case 'post_call_followup':
        return {
          ...automation,
          whatItDoes:
            'Trasforma una richiesta risolta o un esito admin in un task operativo concreto da eseguire nel portale.',
          needs: ['Almeno una richiesta supporto risolta', 'Nota admin o esito operativo'],
          missing: resolvedRequests.length === 0 ? ['Non ci sono richieste risolte da convertire in follow-up'] : [],
          lastEffects,
        }
      default:
        return {
          ...automation,
          whatItDoes: 'Automazione registrata ma non ancora documentata nel pannello.',
          needs: [],
          missing: [],
          lastEffects,
        }
    }
  })

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Automazioni</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Dove il metodo Marketizzati inizia a lavorare per te</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Le automazioni servono a toglierti dal collo le attivita ripetitive e a dare continuita al progetto anche quando non sei operativo.
        </p>
      </div>

      <AutomationPanel automations={automationCards} />
    </div>
  )
}
