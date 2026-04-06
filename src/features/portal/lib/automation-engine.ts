import type { SupabaseClient } from '@supabase/supabase-js'
import type {
  AutomationRun,
  ClientAsset,
  ClientRequest,
  ClientStep,
  ClientTask,
  ClientWorkspace,
  Resource,
} from '@/types/database'

type AutomationSource = 'manual' | 'admin' | 'cron'

type AutomationContext = {
  automation: AutomationRun
  workspace: ClientWorkspace | null
  steps: ClientStep[]
  tasks: ClientTask[]
  requests: ClientRequest[]
  assets: ClientAsset[]
  resources: Resource[]
  assignments: Set<string>
}

type AutomationExecution = {
  summary: string
  nextRunAt: string
  status?: AutomationRun['status']
  metadata?: Record<string, unknown>
  effects: string[]
}

const cadenceDays: Record<string, number> = {
  weekly_review: 7,
  asset_reminder: 3,
  post_call_followup: 2,
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000)
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function normalizeMetadata(metadata: unknown) {
  return metadata && typeof metadata === 'object' && !Array.isArray(metadata)
    ? (metadata as Record<string, unknown>)
    : {}
}

function getActiveStep(steps: ClientStep[]) {
  return steps.find((step) => step.status === 'in_progress')
    || steps.find((step) => step.status === 'not_started')
    || steps[steps.length - 1]
    || null
}

async function upsertTask(
  service: SupabaseClient,
  userId: string,
  payload: {
    title: string
    description: string
    stepCode?: string | null
    dueLabel?: string | null
    isAutomated?: boolean
    completed?: boolean
  }
) {
  const { data: existing } = await service
    .from('client_tasks')
    .select('id')
    .eq('user_id', userId)
    .eq('title', payload.title)
    .maybeSingle()

  if (existing) {
    await service
      .from('client_tasks')
      .update({
        description: payload.description,
        due_label: payload.dueLabel ?? null,
        step_code: payload.stepCode ?? null,
        is_automated: payload.isAutomated ?? true,
        completed: payload.completed ?? false,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id)

    return
  }

  const { count } = await service
    .from('client_tasks')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)

  await service.from('client_tasks').insert({
    user_id: userId,
    title: payload.title,
    description: payload.description,
    due_label: payload.dueLabel ?? null,
    step_code: payload.stepCode ?? null,
    is_automated: payload.isAutomated ?? true,
    completed: payload.completed ?? false,
    sort_order: (count || 0) + 1,
  })
}

async function upsertOpenRequest(
  service: SupabaseClient,
  userId: string,
  payload: {
    type: ClientRequest['type']
    title: string
    description: string
  }
) {
  const { data: existing } = await service
    .from('client_requests')
    .select('id')
    .eq('user_id', userId)
    .eq('title', payload.title)
    .neq('status', 'resolved')
    .maybeSingle()

  if (existing) {
    await service
      .from('client_requests')
      .update({
        description: payload.description,
        status: 'in_review',
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id)

    return
  }

  await service.from('client_requests').insert({
    user_id: userId,
    type: payload.type,
    title: payload.title,
    description: payload.description,
    status: 'open',
  })
}

async function assignResourceIfNeeded(
  service: SupabaseClient,
  userId: string,
  resourceId: string,
  assignments: Set<string>
) {
  if (assignments.has(resourceId)) {
    return false
  }

  const { error } = await service.from('resource_assignments').upsert({
    user_id: userId,
    resource_id: resourceId,
    unlocked_by: 'automation',
  })

  if (error) {
    return false
  }

  assignments.add(resourceId)
  return true
}

async function handleWeeklyReview(service: SupabaseClient, context: AutomationContext, now: Date): Promise<AutomationExecution> {
  const completedTasks = context.tasks.filter((task) => task.completed).length
  const completedSteps = context.steps.filter((step) => step.status === 'completed').length
  const activeStep = getActiveStep(context.steps)
  const pendingTask = context.tasks.find((task) => !task.completed)
  const missingAssets = context.assets.length === 0
  const taskScore = context.tasks.length ? completedTasks / context.tasks.length : 0
  const stepScore = context.steps.length ? completedSteps / context.steps.length : 0
  const assetScore = Math.min(context.assets.length / 4, 1)
  const workspaceHealth = Math.round(clamp(stepScore * 45 + taskScore * 40 + assetScore * 15, 8, 100))

  await service
    .from('client_workspaces')
    .update({
      workspace_health: workspaceHealth,
      current_stage: activeStep?.title || context.workspace?.current_stage || 'Diagnosi iniziale',
      updated_at: now.toISOString(),
    })
    .eq('user_id', context.automation.user_id)

  const summary = [
    `Hai completato ${completedTasks}/${context.tasks.length || 0} task e ${completedSteps}/${context.steps.length || 0} fasi.`,
    activeStep ? `Fase attiva: ${activeStep.title}.` : null,
    pendingTask ? `Priorita consigliata: ${pendingTask.title}.` : null,
    missingAssets ? 'Mancano ancora asset operativi utili per accelerare la fase Technology.' : null,
  ]
    .filter(Boolean)
    .join(' ')

  await upsertOpenRequest(service, context.automation.user_id, {
    type: 'automation',
    title: 'Recap operativo automatico',
    description: summary,
  })

  return {
    summary,
    nextRunAt: addDays(now, cadenceDays.weekly_review).toISOString(),
    metadata: {
      ...normalizeMetadata(context.automation.metadata),
      last_workspace_health: workspaceHealth,
    },
    effects: [
      'Aggiornato lo stato di salute del workspace.',
      'Creato o aggiornato il recap operativo automatico.',
    ],
  }
}

async function handleAssetReminder(service: SupabaseClient, context: AutomationContext, now: Date): Promise<AutomationExecution> {
  const missingFields: string[] = []
  const workspace = context.workspace

  if (!workspace?.business_name) missingFields.push('nome business')
  if (!workspace?.offer_name) missingFields.push('offerta principale')
  if (!workspace?.target_customer) missingFields.push('cliente ideale')
  if (!workspace?.primary_channel) missingFields.push('canale principale')
  if (!workspace?.main_goal) missingFields.push('obiettivo principale')

  const effects: string[] = []

  if (missingFields.length > 0) {
    await upsertTask(service, context.automation.user_id, {
      title: 'Completa il workspace con i dati mancanti',
      description: `Aggiorna questi campi per sbloccare meglio il metodo: ${missingFields.join(', ')}.`,
      stepCode: 'zero-point',
      dueLabel: 'Entro 24 ore',
    })
    effects.push('Creato task automatico per completare il workspace.')
  }

  if (context.assets.length === 0) {
    await upsertTask(service, context.automation.user_id, {
      title: 'Carica almeno 3 asset di riferimento',
      description: 'Aggiungi logo, screenshot, link o riferimenti per accelerare sito, funnel e automazioni.',
      stepCode: 'technology',
      dueLabel: 'Questa settimana',
    })
    effects.push('Creato task automatico per il caricamento asset.')
  }

  const strategyStep = context.steps.find((step) => step.code === 'strategy')
  const technologyStep = context.steps.find((step) => step.code === 'technology')
  const activationStep = context.steps.find((step) => step.code === 'activation')

  const earlyUnlocks = [
    { title: 'Template Proposta Unica di Valore', eligible: Boolean(strategyStep && strategyStep.progress >= 60) },
    { title: 'Guida SEO Base', eligible: Boolean(technologyStep && technologyStep.progress >= 40) },
    { title: 'Il Profilo Instagram Perfetto', eligible: Boolean(activationStep && activationStep.progress >= 40) },
  ]

  for (const unlock of earlyUnlocks) {
    if (!unlock.eligible) continue
    const resource = context.resources.find((entry) => entry.title === unlock.title)
    if (!resource) continue
    const assigned = await assignResourceIfNeeded(service, context.automation.user_id, resource.id, context.assignments)
    if (assigned) {
      effects.push(`Sbloccata automaticamente la risorsa "${unlock.title}".`)
    }
  }

  if (missingFields.length > 0 || context.assets.length === 0) {
    const reminderBits = []
    if (missingFields.length > 0) {
      reminderBits.push(`dati mancanti nel workspace: ${missingFields.join(', ')}`)
    }
    if (context.assets.length === 0) {
      reminderBits.push('nessun asset operativo caricato')
    }

    await upsertOpenRequest(service, context.automation.user_id, {
      type: 'automation',
      title: 'Materiali mancanti per accelerare il percorso',
      description: `L'automazione ha rilevato ${reminderBits.join(' e ')}. Completa questi elementi per velocizzare l'implementazione.`,
    })
    effects.push('Aggiornata la richiesta automatica sui materiali mancanti.')
  }

  return {
    summary:
      effects.length > 0
        ? effects.join(' ')
        : 'Nessun blocco rilevato: workspace e asset sono gia sufficienti per procedere senza reminder aggiuntivi.',
    nextRunAt: addDays(now, cadenceDays.asset_reminder).toISOString(),
    status: 'active',
    metadata: normalizeMetadata(context.automation.metadata),
    effects,
  }
}

async function handlePostCallFollowup(service: SupabaseClient, context: AutomationContext, now: Date): Promise<AutomationExecution> {
  const metadata = normalizeMetadata(context.automation.metadata)
  const lastFollowedRequestId =
    typeof metadata.last_followed_request_id === 'string' ? metadata.last_followed_request_id : null

  const latestResolved = [...context.requests]
    .filter((request) => request.status === 'resolved' && request.resolved_at)
    .sort((left, right) => (right.resolved_at || '').localeCompare(left.resolved_at || ''))[0]

  const effects: string[] = []

  if (latestResolved && latestResolved.id !== lastFollowedRequestId) {
    await upsertTask(service, context.automation.user_id, {
      title: 'Esegui il follow-up concordato con Marketizzati',
      description: latestResolved.admin_note
        ? `${latestResolved.title}: ${latestResolved.admin_note}`
        : `Riprendi la richiesta "${latestResolved.title}" e trasformala in azione operativa.`,
      stepCode: 'activation',
      dueLabel: 'Prima del prossimo checkpoint',
    })
    effects.push(`Convertita la richiesta risolta "${latestResolved.title}" in task operativo.`)
  }

  return {
    summary: effects[0] || 'Nessun nuovo esito da trasformare in follow-up operativo.',
    nextRunAt: addDays(now, cadenceDays.post_call_followup).toISOString(),
    status: latestResolved ? 'active' : 'paused',
    metadata: latestResolved
      ? {
          ...metadata,
          last_followed_request_id: latestResolved.id,
        }
      : metadata,
    effects,
  }
}

async function buildContext(service: SupabaseClient, automation: AutomationRun): Promise<AutomationContext> {
  const userId = automation.user_id
  const [
    { data: workspace },
    { data: steps },
    { data: tasks },
    { data: requests },
    { data: assets },
    { data: resources },
    { data: assignments },
  ] = await Promise.all([
    service.from('client_workspaces').select('*').eq('user_id', userId).maybeSingle(),
    service.from('client_steps').select('*').eq('user_id', userId).order('sort_order'),
    service.from('client_tasks').select('*').eq('user_id', userId).order('sort_order'),
    service.from('client_requests').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
    service.from('client_assets').select('*').eq('user_id', userId),
    service.from('resources').select('*').eq('is_active', true).order('sort_order'),
    service.from('resource_assignments').select('resource_id').eq('user_id', userId),
  ])

  return {
    automation,
    workspace: (workspace as ClientWorkspace | null) ?? null,
    steps: (steps as ClientStep[]) ?? [],
    tasks: (tasks as ClientTask[]) ?? [],
    requests: (requests as ClientRequest[]) ?? [],
    assets: (assets as ClientAsset[]) ?? [],
    resources: (resources as Resource[]) ?? [],
    assignments: new Set((assignments ?? []).map((entry) => entry.resource_id)),
  }
}

export async function executeAutomationById(
  service: SupabaseClient,
  automationId: string,
  source: AutomationSource = 'cron'
) {
  const { data: automation, error } = await service
    .from('automation_runs')
    .select('*')
    .eq('id', automationId)
    .maybeSingle()

  if (error || !automation) {
    throw new Error(error?.message || 'Automazione non trovata')
  }

  const now = new Date()
  const context = await buildContext(service, automation as AutomationRun)
  let execution: AutomationExecution

  switch (context.automation.automation_type) {
    case 'weekly_review':
      execution = await handleWeeklyReview(service, context, now)
      break
    case 'asset_reminder':
      execution = await handleAssetReminder(service, context, now)
      break
    case 'post_call_followup':
      execution = await handlePostCallFollowup(service, context, now)
      break
    default:
      execution = {
        summary: 'Automazione registrata ma non ancora supportata dal motore operativo.',
        nextRunAt: addDays(now, 7).toISOString(),
        metadata: normalizeMetadata(context.automation.metadata),
        effects: [],
      }
      break
  }

  await service
    .from('automation_runs')
    .update({
      status: execution.status || 'active',
      summary:
        execution.effects.length > 0
          ? `${execution.summary} Ultima esecuzione: ${source}.`
          : execution.summary,
      last_run_at: now.toISOString(),
      next_run_at: execution.nextRunAt,
      metadata: {
        ...(execution.metadata || {}),
        last_source: source,
        last_effects: execution.effects,
      },
      updated_at: now.toISOString(),
    })
    .eq('id', automationId)

  return {
    automationId,
    userId: context.automation.user_id,
    title: context.automation.title,
    source,
    ...execution,
  }
}

export async function executeDueAutomations(
  service: SupabaseClient,
  options?: {
    source?: AutomationSource
    force?: boolean
  }
) {
  const now = new Date()
  const source = options?.source || 'cron'

  const { data: automations, error } = await service
    .from('automation_runs')
    .select('*')
    .in('status', ['active', 'queued', 'paused'])

  if (error) {
    throw new Error(error.message)
  }

  const dueAutomations = ((automations as AutomationRun[]) ?? []).filter((automation) => {
    if (options?.force) {
      return true
    }

    if (!automation.next_run_at) {
      return true
    }

    return new Date(automation.next_run_at).getTime() <= now.getTime()
  })

  const results = []
  for (const automation of dueAutomations) {
    const result = await executeAutomationById(service, automation.id, source)
    results.push(result)
  }

  return results
}
