'use server'

import { revalidatePath } from 'next/cache'
import { createServiceClient } from '@/lib/supabase/server'
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

export async function convertProspectToClient(formData: FormData) {
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
    .select('id,nome,professione,indirizzo,citta,telefono,email,sito_web_attuale,qualita_sito_score,google_rating,status')
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

  await external
    .from('prospects')
    .update({ status: 'venduto' })
    .eq('id', prospect.id)

  revalidatePath('/', 'layout')
}
