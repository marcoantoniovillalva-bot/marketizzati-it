'use server'

import { revalidatePath } from 'next/cache'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { executeAutomationById, executeDueAutomations } from '@/features/portal/lib/automation-engine'
import { provisionPortalForUser } from '@/features/portal/lib/portal-data'

type ProspectRecord = {
  id: string
  nome: string | null
  professione: string | null
  indirizzo: string | null
  citta: string | null
  telefono: string | null
  email: string | null
  sito_web_attuale: string | null
  qualita_sito_score: number | null
  google_rating: number | null
  status: string | null
  dati_social?: Record<string, unknown> | null
  immagini_media?: Array<{ url?: string; nota?: string; fonte?: string; sezione?: string }> | null
  recensioni?: Array<{ testo?: string; autore?: string; rating?: number }> | null
}

function buildWorkspaceNotes(prospect: ProspectRecord) {
  const lines = [
    `Lead importato da ProspectBot il ${new Date().toLocaleString('it-IT')}.`,
    prospect.indirizzo ? `Indirizzo: ${prospect.indirizzo}` : null,
    prospect.sito_web_attuale ? `Sito attuale: ${prospect.sito_web_attuale}` : 'Sito attuale: assente',
    prospect.qualita_sito_score !== null ? `Qualita sito: ${prospect.qualita_sito_score}/10` : null,
    prospect.google_rating !== null ? `Google rating: ${prospect.google_rating}` : null,
  ]

  return lines.filter(Boolean).join('\n')
}

async function ensureAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Non autenticato')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (profile?.role !== 'admin') {
    throw new Error('Operazione riservata agli admin')
  }
}

export async function convertProspectToClient(formData: FormData) {
  await ensureAdmin()
  const prospectId = formData.get('prospect_id') as string

  if (!prospectId) {
    throw new Error('Prospect non valido')
  }

  if (!process.env.PROSPECTBOT_SUPABASE_URL || !process.env.PROSPECTBOT_SERVICE_ROLE_KEY) {
    throw new Error('Bridge ProspectBot non configurato')
  }

  const { createClient } = await import('@supabase/supabase-js')
  const external = createClient(
    process.env.PROSPECTBOT_SUPABASE_URL,
    process.env.PROSPECTBOT_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )

  const { data: prospect, error: prospectError } = await external
    .from('prospects')
    .select('id,nome,professione,indirizzo,citta,telefono,email,sito_web_attuale,qualita_sito_score,google_rating,status,dati_social,immagini_media,recensioni')
    .eq('id', prospectId)
    .maybeSingle()

  if (prospectError || !prospect) {
    throw new Error('Prospect non trovato su ProspectBot')
  }

  if (!prospect.email) {
    throw new Error('Il prospect non ha email: non posso convertirlo in cliente autenticato.')
  }

  const service = createServiceClient()
  const {
    data: { users },
    error: authListError,
  } = await service.auth.admin.listUsers()

  if (authListError) {
    throw new Error(authListError.message)
  }

  let targetUser = users.find((user) => user.email?.toLowerCase() === prospect.email!.toLowerCase()) || null

  if (!targetUser) {
    const invite = await service.auth.admin.inviteUserByEmail(prospect.email, {
      data: {
        full_name: prospect.nome,
      },
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://marketizzati.it'}/it/login`,
    })

    if (invite.error || !invite.data.user) {
      throw new Error(invite.error?.message || 'Invito cliente fallito')
    }

    targetUser = invite.data.user
  }

  const { error: profileError } = await service.from('profiles').upsert({
    id: targetUser.id,
    full_name: prospect.nome,
    phone: prospect.telefono,
    role: 'client',
    language: 'it',
    onboarding_completed: false,
    updated_at: new Date().toISOString(),
  })

  if (profileError) {
    throw new Error(profileError.message)
  }

  await provisionPortalForUser(service, targetUser.id, {
    workspace: {
      business_name: prospect.nome,
      niche: prospect.professione,
      target_customer: prospect.citta ? `Clienti in ${prospect.citta}` : null,
      main_goal: prospect.sito_web_attuale ? 'Migliorare conversione e presenza digitale' : 'Costruire infrastruttura digitale da zero',
      current_stage: 'Lead convertito in onboarding',
      primary_channel: 'Da definire in kickoff',
      automation_focus: 'Automatizzare follow-up commerciale e onboarding',
      notes: buildWorkspaceNotes(prospect),
      workspace_health: 26,
    },
    tasks: [
      {
        step_code: 'zero-point',
        title: 'Validare i dati importati da ProspectBot',
        description: 'Controlla dati business, contatti e stato del sito partendo dal lead importato.',
        due_label: 'Subito',
      },
      {
        step_code: 'technology',
        title: 'Raccogliere asset e riferimenti del prospect convertito',
        description: 'Usa i materiali gia trovati da ProspectBot come base del nuovo workspace.',
        due_label: 'Prima della kickoff',
      },
    ],
    requests: [
      {
        type: 'support',
        title: 'Kickoff da lead ProspectBot',
        description: `Cliente creato a partire dal lead ${prospect.nome || prospect.email}. Preparare allineamento iniziale e revisione dati importati.`,
      },
    ],
  })

  const typedProspect = prospect as ProspectRecord

  const socialAssetPayload =
    typedProspect.immagini_media?.slice(0, 12).map((asset, index) => ({
      user_id: targetUser.id,
      source: asset.fonte || 'prospectbot',
      asset_type: asset.sezione || 'reference',
      title: `${typedProspect.nome || 'Lead'} asset ${index + 1}`,
      url: asset.url || null,
      metadata: {
        note: asset.nota || null,
      },
    })) ?? []

  const reviewPayload =
    typedProspect.recensioni?.slice(0, 5).map((review, index) => ({
      user_id: targetUser.id,
      source: 'prospectbot',
      asset_type: 'review',
      title: `Recensione ${index + 1}`,
      url: null,
      metadata: {
        text: review.testo || null,
        author: review.autore || null,
        rating: review.rating || null,
      },
    })) ?? []

  const sitePayload = {
    user_id: targetUser.id,
    source: 'prospectbot',
    asset_type: 'site-audit',
    title: 'Audit sito attuale',
    url: typedProspect.sito_web_attuale || null,
    metadata: {
      quality_score: typedProspect.qualita_sito_score,
      google_rating: typedProspect.google_rating,
      social_data: typedProspect.dati_social || {},
    },
  }

  const assetRows = [...socialAssetPayload, ...reviewPayload, sitePayload].filter((entry) => entry.url || entry.asset_type !== 'site-audit' || entry.metadata)

  if (assetRows.length > 0) {
    await service.from('client_assets').insert(assetRows)
  }

  await external
    .from('prospects')
    .update({ status: 'venduto' })
    .eq('id', prospect.id)

  revalidatePath('/', 'layout')
}

export async function resolveClientRequest(formData: FormData) {
  await ensureAdmin()
  const service = createServiceClient()
  const requestId = formData.get('request_id') as string
  const adminNote = (formData.get('admin_note') as string) || null

  const { error } = await service
    .from('client_requests')
    .update({
      status: 'resolved',
      admin_note: adminNote,
      resolved_at: new Date().toISOString(),
    })
    .eq('id', requestId)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/', 'layout')
}

export async function createOrUpdateResource(formData: FormData) {
  await ensureAdmin()
  const service = createServiceClient()

  const resourceId = (formData.get('resource_id') as string) || null
  const payload = {
    title: formData.get('title') as string,
    description: (formData.get('description') as string) || null,
    type: (formData.get('type') as string) || 'guide',
    embed_url: (formData.get('embed_url') as string) || null,
    file_url: (formData.get('file_url') as string) || null,
    is_premium: formData.get('is_premium') === 'on',
    unlock_step_code: (formData.get('unlock_step_code') as string) || null,
    is_active: formData.get('is_active') !== 'off',
    sort_order: Number(formData.get('sort_order') || 0),
  }

  const query = resourceId
    ? service.from('resources').update(payload).eq('id', resourceId)
    : service.from('resources').insert(payload)

  const { error } = await query

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/', 'layout')
}

export async function assignResourceToEmail(formData: FormData) {
  await ensureAdmin()
  const service = createServiceClient()
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const resourceId = formData.get('resource_id') as string

  if (!email || !resourceId) {
    throw new Error('Email o risorsa mancanti')
  }

  const {
    data: { users },
    error: authError,
  } = await service.auth.admin.listUsers()

  if (authError) {
    throw new Error(authError.message)
  }

  const user = users.find((entry) => entry.email?.toLowerCase() === email)

  if (!user) {
    throw new Error('Nessun utente con questa email')
  }

  const { error } = await service.from('resource_assignments').upsert({
    user_id: user.id,
    resource_id: resourceId,
    unlocked_by: 'admin-email',
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/', 'layout')
}

export async function runAllAutomationsNow() {
  await ensureAdmin()
  const service = createServiceClient()
  await executeDueAutomations(service, { source: 'admin', force: true })
  revalidatePath('/', 'layout')
}

export async function runAutomationAsAdmin(formData: FormData) {
  await ensureAdmin()
  const automationId = formData.get('automation_id') as string

  if (!automationId) {
    throw new Error('Automazione non valida')
  }

  const service = createServiceClient()
  await executeAutomationById(service, automationId, 'admin')
  revalidatePath('/', 'layout')
}
