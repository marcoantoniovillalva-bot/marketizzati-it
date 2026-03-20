'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

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
  return { success: true }
}

export async function updateStepProgress(stepId: string, progress: number, status: string) {
  const { supabase, user } = await getAuthenticatedUser()

  const { error } = await supabase
    .from('client_steps')
    .update({
      progress,
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', stepId)
    .eq('user_id', user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

export async function createClientRequest(formData: FormData) {
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
}
