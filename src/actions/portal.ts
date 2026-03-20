'use server'

import { revalidatePath } from 'next/cache'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { executeAutomationById } from '@/features/portal/lib/automation-engine'

async function getAuthenticatedUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Not authenticated')
  }

  return { supabase, user }
}

export async function updateWorkspace(formData: FormData) {
  const { supabase, user } = await getAuthenticatedUser()

  const payload = {
    business_name: (formData.get('business_name') as string) || null,
    offer_name: (formData.get('offer_name') as string) || null,
    niche: (formData.get('niche') as string) || null,
    target_customer: (formData.get('target_customer') as string) || null,
    main_goal: (formData.get('main_goal') as string) || null,
    current_stage: (formData.get('current_stage') as string) || null,
    primary_channel: (formData.get('primary_channel') as string) || null,
    notes: (formData.get('notes') as string) || null,
    automation_focus: (formData.get('automation_focus') as string) || null,
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase
    .from('client_workspaces')
    .update(payload)
    .eq('user_id', user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

export async function toggleTask(taskId: string, completed: boolean) {
  try {
    const { supabase, user } = await getAuthenticatedUser()

    const { error } = await supabase
      .from('client_tasks')
      .update({
        completed,
        updated_at: new Date().toISOString(),
      })
      .eq('id', taskId)
      .eq('user_id', user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true, message: completed ? 'Task completato.' : 'Task riaperto.' }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile aggiornare il task.' }
  }
}

export async function moveStepProgress(stepId: string, direction: 'forward' | 'backward') {
  try {
    const { supabase, user } = await getAuthenticatedUser()
    const { data: steps, error } = await supabase
      .from('client_steps')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order')

    if (error || !steps) {
      return { error: error?.message || 'Percorso non disponibile.' }
    }

    const stepIndex = steps.findIndex((step) => step.id === stepId)
    if (stepIndex === -1) {
      return { error: 'Fase non trovata.' }
    }

    const target = steps[stepIndex]
    const delta = direction === 'forward' ? 20 : -20
    const nextProgress = Math.min(100, Math.max(0, target.progress + delta))
    const updatedSteps = steps.map((step, index) =>
      index === stepIndex ? { ...step, progress: nextProgress } : { ...step }
    )

    let currentActiveAssigned = false
    const normalized = updatedSteps.map((step) => {
      let status: string = 'not_started'

      if (step.progress >= 100) {
        status = 'completed'
      } else if (!currentActiveAssigned) {
        status = 'in_progress'
        currentActiveAssigned = true
      }

      return {
        id: step.id,
        progress: step.progress,
        status,
        updated_at: new Date().toISOString(),
      }
    })

    for (const step of normalized) {
      await supabase
        .from('client_steps')
        .update({
          progress: step.progress,
          status: step.status,
          updated_at: step.updated_at,
        })
        .eq('id', step.id)
        .eq('user_id', user.id)
    }

    const activeStep = updatedSteps.find((step) => step.progress < 100) || updatedSteps[updatedSteps.length - 1]
    await supabase
      .from('client_workspaces')
      .update({
        current_stage: activeStep?.title || 'Diagnosi iniziale',
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id)

    revalidatePath('/', 'layout')
    return {
      success: true,
      message:
        direction === 'forward'
          ? 'Fase aggiornata in avanti.'
          : 'Fase riportata indietro.',
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile aggiornare la fase.' }
  }
}

export async function createClientRequest(formData: FormData) {
  try {
    const { supabase, user } = await getAuthenticatedUser()

    const payload = {
      user_id: user.id,
      type: (formData.get('type') as string) || 'support',
      title: formData.get('title') as string,
      description: (formData.get('description') as string) || null,
    }

    const { error } = await supabase.from('client_requests').insert(payload)

    if (error) {
      return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile inviare la richiesta.' }
  }
}

export async function createWorkspaceAsset(formData: FormData) {
  try {
    const { supabase, user } = await getAuthenticatedUser()

    const payload = {
      user_id: user.id,
      source: 'manual',
      asset_type: (formData.get('asset_type') as string) || 'reference',
      title: (formData.get('title') as string) || null,
      url: (formData.get('url') as string) || null,
      metadata: {
        note: (formData.get('note') as string) || null,
      },
    }

    const { error } = await supabase.from('client_assets').insert(payload)

    if (error) {
      return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile salvare l’asset.' }
  }
}

export async function removeWorkspaceAsset(assetId: string) {
  try {
    const { supabase, user } = await getAuthenticatedUser()

    const { error } = await supabase
      .from('client_assets')
      .delete()
      .eq('id', assetId)
      .eq('user_id', user.id)
      .eq('source', 'manual')

    if (error) {
      return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile rimuovere l’asset.' }
  }
}

export async function triggerAutomationRun(automationId: string) {
  try {
    const { supabase, user } = await getAuthenticatedUser()
    const { data: automation, error } = await supabase
      .from('automation_runs')
      .select('id')
      .eq('id', automationId)
      .eq('user_id', user.id)
      .maybeSingle()

    if (error || !automation) {
      return { error: error?.message || 'Automazione non trovata' }
    }

    const service = createServiceClient()
    const result = await executeAutomationById(service, automationId, 'manual')

    revalidatePath('/', 'layout')
    return { success: true, message: result.summary }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Impossibile eseguire l’automazione.' }
  }
}
