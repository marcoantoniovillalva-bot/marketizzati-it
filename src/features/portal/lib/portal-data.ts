import { createClient, createServiceClient } from '@/lib/supabase/server'
import type {
  AutomationRun,
  ClientRequest,
  ClientStep,
  ClientTask,
  ClientWorkspace,
  ClientAsset,
  Profile,
  Resource,
} from '@/types/database'

type PortalSeed = {
  workspace?: Partial<ClientWorkspace>
  tasks?: Array<Partial<ClientTask> & { title: string }>
  requests?: Array<Partial<ClientRequest> & { title: string }>
}

export type StepTemplate = {
  code: string
  title: string
  summary: string
  deliverableTitle: string
  nextAction: string
}

export const zStartSteps: StepTemplate[] = [
  {
    code: 'zero-point',
    title: 'Zero Point',
    summary: 'Fotografia chiara della tua situazione attuale, dei blocchi e delle priorita reali.',
    deliverableTitle: 'Diagnosi iniziale approvata',
    nextAction: 'Compila la panoramica del business e chiarisci il problema principale da risolvere.',
  },
  {
    code: 'strategy',
    title: 'Strategy',
    summary: 'Definizione di target, messaggio, offerta e posizionamento con una direzione commerciale concreta.',
    deliverableTitle: 'Posizionamento e USP',
    nextAction: 'Definisci cliente ideale, promessa e canale principale da attivare.',
  },
  {
    code: 'technology',
    title: 'Technology',
    summary: 'Traduzione della strategia in infrastruttura: sito, funnel, automazioni e strumenti.',
    deliverableTitle: 'Stack operativo',
    nextAction: 'Carica asset, link e materiali per costruire il sistema digitale.',
  },
  {
    code: 'activation',
    title: 'Activation',
    summary: 'Messa online, lancio dei contenuti e primi workflow di acquisizione o nurturing.',
    deliverableTitle: 'Piano di attivazione',
    nextAction: 'Allinea canali, CTA e priorita dei prossimi 14 giorni.',
  },
  {
    code: 'results',
    title: 'Results',
    summary: 'Lettura dei dati, insight e ottimizzazioni per migliorare conversione e ROI.',
    deliverableTitle: 'Cruscotto di performance',
    nextAction: 'Identifica i numeri da monitorare e i colli di bottiglia operativi.',
  },
  {
    code: 'transformation',
    title: 'Transformation',
    summary: 'Evoluzione del sistema in una macchina scalabile con meno dipendenza dal lavoro manuale.',
    deliverableTitle: 'Roadmap di scala',
    nextAction: 'Scegli quali processi vuoi automatizzare per primi nel prossimo trimestre.',
  },
]

const defaultTasks = [
  {
    step_code: 'zero-point',
    title: 'Compila il quadro del tuo business',
    description: 'Inserisci settore, obiettivo, canale principale e fase attuale del progetto.',
    due_label: 'Oggi',
    is_automated: false,
    sort_order: 1,
  },
  {
    step_code: 'strategy',
    title: 'Definisci il tuo cliente ideale',
    description: 'Descrivi chi vuoi attrarre, che problema vive e quale risultato desidera.',
    due_label: 'Entro 48 ore',
    is_automated: false,
    sort_order: 2,
  },
  {
    step_code: 'technology',
    title: 'Carica logo, link e riferimenti',
    description: 'Prepara gli asset essenziali per sito, automazioni e materiali commerciali.',
    due_label: 'Questa settimana',
    is_automated: false,
    sort_order: 3,
  },
  {
    step_code: 'activation',
    title: 'Conferma la tua priorita di lancio',
    description: 'Scegli una sola leva da attivare subito: funnel, sito, ads, contenuti o automazione.',
    due_label: 'Prima della prossima call',
    is_automated: false,
    sort_order: 4,
  },
  {
    step_code: 'results',
    title: 'Abilita il check automatico KPI',
    description: 'Marketizzati puo preparare reminder e controllo periodico dei numeri chiave.',
    due_label: 'Quando vuoi',
    is_automated: true,
    sort_order: 5,
  },
]

const defaultAutomations = [
  {
    title: 'Analisi settimanale del percorso',
    automation_type: 'weekly_review',
    status: 'active',
    summary: 'Riassume avanzamento, colli di bottiglia e prossima azione consigliata.',
    metadata: {
      cadence_days: 7,
    },
  },
  {
    title: 'Promemoria materiali mancanti',
    automation_type: 'asset_reminder',
    status: 'queued',
    summary: 'Ti ricorda cosa manca per far avanzare la fase Technology senza rallentamenti.',
    metadata: {
      cadence_days: 3,
    },
  },
  {
    title: 'Follow-up operativo post call',
    automation_type: 'post_call_followup',
    status: 'paused',
    summary: 'Invia automaticamente task e note dopo i checkpoint strategici.',
    metadata: {
      cadence_days: 2,
    },
  },
]

export type PortalSnapshot = {
  profile: Profile | null
  workspace: ClientWorkspace | null
  steps: ClientStep[]
  tasks: ClientTask[]
  automations: AutomationRun[]
  requests: ClientRequest[]
  resources: Resource[]
  assets: ClientAsset[]
}

export async function provisionPortalForUser(supabase: Awaited<ReturnType<typeof createClient>> | ReturnType<typeof createServiceClient>, userId: string, seed?: PortalSeed) {
  const { data: workspace } = await supabase
    .from('client_workspaces')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle()

  if (!workspace) {
    await supabase.from('client_workspaces').insert({
      user_id: userId,
      business_name: seed?.workspace?.business_name || null,
      offer_name: seed?.workspace?.offer_name || null,
      niche: seed?.workspace?.niche || null,
      target_customer: seed?.workspace?.target_customer || null,
      main_goal: seed?.workspace?.main_goal || 'Chiarire il sistema giusto da costruire',
      current_stage: seed?.workspace?.current_stage || 'Diagnosi iniziale',
      primary_channel: seed?.workspace?.primary_channel || null,
      notes: seed?.workspace?.notes || null,
      automation_focus: seed?.workspace?.automation_focus || 'Ridurre il lavoro manuale di follow-up',
      workspace_health: seed?.workspace?.workspace_health || 18,
    })
  } else if (seed?.workspace) {
    await supabase
      .from('client_workspaces')
      .update({
        ...seed.workspace,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId)
  }

  const { data: existingSteps } = await supabase.from('client_steps').select('code').eq('user_id', userId)

  if (!existingSteps || existingSteps.length === 0) {
    await supabase.from('client_steps').insert(
      zStartSteps.map((step, index) => ({
        user_id: userId,
        code: step.code,
        title: step.title,
        summary: step.summary,
        deliverable_title: step.deliverableTitle,
        next_action: step.nextAction,
        status: index === 0 ? 'in_progress' : 'not_started',
        progress: index === 0 ? 20 : 0,
        sort_order: index + 1,
      }))
    )
  }

  const { data: existingTasks } = await supabase.from('client_tasks').select('id').eq('user_id', userId)

  if (!existingTasks || existingTasks.length === 0) {
    const seededTasks = [
      ...defaultTasks,
      ...(seed?.tasks?.map((task, index) => ({
        step_code: task.step_code || null,
        title: task.title,
        description: task.description || null,
        completed: task.completed || false,
        is_automated: task.is_automated || false,
        due_label: task.due_label || null,
        sort_order: defaultTasks.length + index + 1,
      })) ?? []),
    ]

    await supabase.from('client_tasks').insert(
      seededTasks.map((task) => ({
        ...task,
        user_id: userId,
      }))
    )
  }

  const { data: existingAutomations } = await supabase.from('automation_runs').select('id').eq('user_id', userId)

  if (!existingAutomations || existingAutomations.length === 0) {
    await supabase.from('automation_runs').insert(
      defaultAutomations.map((automation) => ({
        ...automation,
        user_id: userId,
      }))
    )
  }

  if (seed?.requests?.length) {
    await supabase.from('client_requests').insert(
      seed.requests.map((request) => ({
        user_id: userId,
        type: request.type || 'support',
        title: request.title,
        description: request.description || null,
        status: request.status || 'open',
      }))
    )
  }
}

export async function ensurePortalData() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  await provisionPortalForUser(supabase, user.id, {
    workspace: {
      business_name: user.user_metadata?.full_name || user.email?.split('@')[0] || null,
      current_stage: 'Diagnosi iniziale',
      main_goal: 'Chiarire il sistema giusto da costruire',
      automation_focus: 'Ridurre il lavoro manuale di follow-up',
      workspace_health: 18,
    },
  })

  return user.id
}

export async function getPortalSnapshot(): Promise<PortalSnapshot | null> {
  const userId = await ensurePortalData()
  if (!userId) {
    return null
  }

  const supabase = await createClient()

  const [
    { data: profile },
    { data: workspace },
    { data: steps },
    { data: tasks },
    { data: automations },
    { data: requests },
    { data: resources },
    { data: assets },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
    supabase.from('client_workspaces').select('*').eq('user_id', userId).maybeSingle(),
    supabase.from('client_steps').select('*').eq('user_id', userId).order('sort_order'),
    supabase.from('client_tasks').select('*').eq('user_id', userId).order('sort_order'),
    supabase.from('automation_runs').select('*').eq('user_id', userId).order('created_at'),
    supabase.from('client_requests').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
    supabase.from('resources').select('*').eq('is_active', true).order('sort_order'),
    supabase.from('client_assets').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
  ])

  return {
    profile: (profile as Profile | null) ?? null,
    workspace: (workspace as ClientWorkspace | null) ?? null,
    steps: (steps as ClientStep[]) ?? [],
    tasks: (tasks as ClientTask[]) ?? [],
    automations: (automations as AutomationRun[]) ?? [],
    requests: (requests as ClientRequest[]) ?? [],
    resources: (resources as Resource[]) ?? [],
    assets: (assets as ClientAsset[]) ?? [],
  }
}

export type AdminSnapshot = {
  clients: Array<
    Profile & {
      workspace: ClientWorkspace | null
      completedSteps: number
      totalSteps: number
      completedTasks: number
      totalTasks: number
      openRequests: number
      activeStepTitle: string | null
      automations: number
      lastActivity: string | null
    }
  >
  openRequests: ClientRequest[]
  resources: Resource[]
  resourceAssignments: Array<{
    resource_id: string
    user_id: string
  }>
  totalAutomations: number
  completedTasks: number
  totalTasks: number
  automationHealth: {
    active: number
    queued: number
    paused: number
    dueNow: number
    recentRuns: Array<AutomationRun & { client_name: string | null }>
  }
  prospectbot: {
    configured: boolean
    totalProspects: number
    workingProspects: number
    soldProspects: number
    recentProspects: Array<{
      id: string
      nome: string | null
      email: string | null
      telefono: string | null
      professione: string | null
      citta: string | null
      sito_web_attuale: string | null
      qualita_sito_score: number | null
      status: string | null
      imported: boolean
    }>
  }
}

export async function getAdminSnapshot(): Promise<AdminSnapshot> {
  const hasServiceRole = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY)

  if (!hasServiceRole) {
    return {
      clients: [],
      openRequests: [],
      resources: [],
      resourceAssignments: [],
      totalAutomations: 0,
      completedTasks: 0,
      totalTasks: 0,
      automationHealth: {
        active: 0,
        queued: 0,
        paused: 0,
        dueNow: 0,
        recentRuns: [],
      },
      prospectbot: {
        configured: false,
        totalProspects: 0,
        workingProspects: 0,
        soldProspects: 0,
        recentProspects: [],
      },
    }
  }

  const service = createServiceClient()

  const [
    { data: profiles },
    { data: workspaces },
    { data: requests },
    { data: resources },
    { data: resourceAssignments },
    { count: totalAutomations },
    { count: totalTasks },
    { count: completedTasks },
    { data: automationRuns },
    { data: allSteps },
    { data: allTasks },
    { data: allRequests },
  ] = await Promise.all([
    service.from('profiles').select('*').order('created_at', { ascending: false }),
    service.from('client_workspaces').select('*'),
    service.from('client_requests').select('*').neq('status', 'resolved').order('created_at', { ascending: false }),
    service.from('resources').select('*').order('sort_order'),
    service.from('resource_assignments').select('resource_id,user_id'),
    service.from('automation_runs').select('id', { count: 'exact', head: true }),
    service.from('client_tasks').select('id', { count: 'exact', head: true }),
    service.from('client_tasks').select('id', { count: 'exact', head: true }).eq('completed', true),
    service.from('automation_runs').select('*').order('updated_at', { ascending: false }).limit(12),
    service.from('client_steps').select('*').order('sort_order'),
    service.from('client_tasks').select('*'),
    service.from('client_requests').select('*'),
  ])

  const workspaceMap = new Map((workspaces ?? []).map((workspace) => [workspace.user_id, workspace]))
  const stepsByUser = new Map<string, ClientStep[]>()
  const tasksByUser = new Map<string, ClientTask[]>()
  const requestsByUser = new Map<string, ClientRequest[]>()

  ;((allSteps as ClientStep[]) ?? []).forEach((step) => {
    const collection = stepsByUser.get(step.user_id) || []
    collection.push(step)
    stepsByUser.set(step.user_id, collection)
  })

  ;((allTasks as ClientTask[]) ?? []).forEach((task) => {
    const collection = tasksByUser.get(task.user_id) || []
    collection.push(task)
    tasksByUser.set(task.user_id, collection)
  })

  ;((allRequests as ClientRequest[]) ?? []).forEach((request) => {
    const collection = requestsByUser.get(request.user_id) || []
    collection.push(request)
    requestsByUser.set(request.user_id, collection)
  })

  const typedAutomations = (automationRuns as AutomationRun[]) ?? []
  const clients = ((profiles ?? []) as Profile[]).map((profile) => ({
    ...profile,
    workspace: (workspaceMap.get(profile.id) as ClientWorkspace | null) ?? null,
    completedSteps: (stepsByUser.get(profile.id) || []).filter((step) => step.status === 'completed').length,
    totalSteps: (stepsByUser.get(profile.id) || []).length,
    completedTasks: (tasksByUser.get(profile.id) || []).filter((task) => task.completed).length,
    totalTasks: (tasksByUser.get(profile.id) || []).length,
    openRequests: (requestsByUser.get(profile.id) || []).filter((request) => request.status !== 'resolved').length,
    activeStepTitle:
      (stepsByUser.get(profile.id) || []).find((step) => step.status === 'in_progress')?.title || null,
    automations: typedAutomations.filter((automation) => automation.user_id === profile.id).length,
    lastActivity:
      [
        profile.updated_at,
        (workspaceMap.get(profile.id) as ClientWorkspace | null)?.updated_at || null,
        ...(stepsByUser.get(profile.id) || []).map((step) => step.updated_at),
        ...(tasksByUser.get(profile.id) || []).map((task) => task.updated_at),
        ...(requestsByUser.get(profile.id) || []).map((request) => request.updated_at),
      ]
        .filter(Boolean)
        .sort()
        .at(-1) || null,
  }))

  const profileMap = new Map(clients.map((profile) => [profile.id, profile]))
  const now = Date.now()

  const automationHealth = {
    active: typedAutomations.filter((automation) => automation.status === 'active').length,
    queued: typedAutomations.filter((automation) => automation.status === 'queued').length,
    paused: typedAutomations.filter((automation) => automation.status === 'paused').length,
    dueNow: typedAutomations.filter((automation) => !automation.next_run_at || new Date(automation.next_run_at).getTime() <= now).length,
    recentRuns: typedAutomations.map((automation) => ({
      ...automation,
      client_name: profileMap.get(automation.user_id)?.full_name || null,
    })),
  }

  const prospectbotConfigured = Boolean(
    process.env.PROSPECTBOT_SUPABASE_URL && process.env.PROSPECTBOT_SERVICE_ROLE_KEY
  )

  let prospectbot = {
    configured: prospectbotConfigured,
    totalProspects: 0,
    workingProspects: 0,
    soldProspects: 0,
    recentProspects: [] as Array<{
      id: string
      nome: string | null
      email: string | null
      telefono: string | null
      professione: string | null
      citta: string | null
      sito_web_attuale: string | null
      qualita_sito_score: number | null
      status: string | null
      imported: boolean
    }>,
  }

  if (prospectbotConfigured) {
    const { createClient: createExternalClient } = await import('@supabase/supabase-js')
    const external = createExternalClient(
      process.env.PROSPECTBOT_SUPABASE_URL!,
      process.env.PROSPECTBOT_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    )

    const {
      data: authUsersData,
      error: authUsersError,
    } = await service.auth.admin.listUsers()

    if (authUsersError) {
      throw authUsersError
    }

    const importedEmails = new Set(
      (authUsersData?.users ?? [])
        .map((user) => user.email?.toLowerCase())
        .filter((email): email is string => Boolean(email))
    )

    const [
      { count: totalProspects },
      { count: workingProspects },
      { count: soldProspects },
      { data: recentProspects },
    ] = await Promise.all([
      external.from('prospects').select('id', { count: 'exact', head: true }),
      external.from('prospects').select('id', { count: 'exact', head: true }).in('status', ['lavorazione', 'sito_generato']),
      external.from('prospects').select('id', { count: 'exact', head: true }).eq('status', 'venduto'),
      external
        .from('prospects')
        .select('id,nome,email,telefono,professione,citta,sito_web_attuale,qualita_sito_score,status')
        .order('created_at', { ascending: false })
        .limit(12),
    ])

    prospectbot = {
      configured: true,
      totalProspects: totalProspects ?? 0,
      workingProspects: workingProspects ?? 0,
      soldProspects: soldProspects ?? 0,
      recentProspects:
        recentProspects?.map((prospect) => ({
          ...prospect,
          imported: prospect.email ? importedEmails.has(prospect.email.toLowerCase()) : false,
        })) ?? [],
    }
  }

  return {
    clients,
    openRequests: (requests as ClientRequest[]) ?? [],
    resources: (resources as Resource[]) ?? [],
    resourceAssignments: (resourceAssignments as Array<{ resource_id: string; user_id: string }>) ?? [],
    totalAutomations: totalAutomations ?? 0,
    completedTasks: completedTasks ?? 0,
    totalTasks: totalTasks ?? 0,
    automationHealth,
    prospectbot,
  }
}
