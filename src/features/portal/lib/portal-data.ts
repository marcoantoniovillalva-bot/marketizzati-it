import { createClient, createServiceClient } from '@/lib/supabase/server'
import type {
  AutomationRun,
  ClientRequest,
  ClientStep,
  ClientTask,
  ClientWorkspace,
  Profile,
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
  },
  {
    title: 'Promemoria materiali mancanti',
    automation_type: 'asset_reminder',
    status: 'queued',
    summary: 'Ti ricorda cosa manca per far avanzare la fase Technology senza rallentamenti.',
  },
  {
    title: 'Follow-up operativo post call',
    automation_type: 'post_call_followup',
    status: 'paused',
    summary: 'Invia automaticamente task e note dopo i checkpoint strategici.',
  },
]

export type PortalSnapshot = {
  profile: Profile | null
  workspace: ClientWorkspace | null
  steps: ClientStep[]
  tasks: ClientTask[]
  automations: AutomationRun[]
  requests: ClientRequest[]
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
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
    supabase.from('client_workspaces').select('*').eq('user_id', userId).maybeSingle(),
    supabase.from('client_steps').select('*').eq('user_id', userId).order('sort_order'),
    supabase.from('client_tasks').select('*').eq('user_id', userId).order('sort_order'),
    supabase.from('automation_runs').select('*').eq('user_id', userId).order('created_at'),
    supabase.from('client_requests').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
  ])

  return {
    profile: (profile as Profile | null) ?? null,
    workspace: (workspace as ClientWorkspace | null) ?? null,
    steps: (steps as ClientStep[]) ?? [],
    tasks: (tasks as ClientTask[]) ?? [],
    automations: (automations as AutomationRun[]) ?? [],
    requests: (requests as ClientRequest[]) ?? [],
  }
}

export type AdminSnapshot = {
  clients: Array<Profile & { workspace: ClientWorkspace | null }>
  openRequests: ClientRequest[]
  totalAutomations: number
  completedTasks: number
  totalTasks: number
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
      totalAutomations: 0,
      completedTasks: 0,
      totalTasks: 0,
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
    { count: totalAutomations },
    { count: totalTasks },
    { count: completedTasks },
  ] = await Promise.all([
    service.from('profiles').select('*').order('created_at', { ascending: false }),
    service.from('client_workspaces').select('*'),
    service.from('client_requests').select('*').neq('status', 'resolved').order('created_at', { ascending: false }),
    service.from('automation_runs').select('id', { count: 'exact', head: true }),
    service.from('client_tasks').select('id', { count: 'exact', head: true }),
    service.from('client_tasks').select('id', { count: 'exact', head: true }).eq('completed', true),
  ])

  const workspaceMap = new Map((workspaces ?? []).map((workspace) => [workspace.user_id, workspace]))

  const clients = ((profiles ?? []) as Profile[]).map((profile) => ({
    ...profile,
    workspace: (workspaceMap.get(profile.id) as ClientWorkspace | null) ?? null,
  }))

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
    totalAutomations: totalAutomations ?? 0,
    completedTasks: completedTasks ?? 0,
    totalTasks: totalTasks ?? 0,
    prospectbot,
  }
}
