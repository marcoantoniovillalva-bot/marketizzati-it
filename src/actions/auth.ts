'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const locale = (formData.get('locale') as string) || 'it'

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect(`/${locale}/dashboard`)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const locale = (formData.get('locale') as string) || 'it'
  const consentMarketing = formData.get('consent_marketing') === 'on'
  const consentNewsletter = formData.get('consent_newsletter') === 'on'

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  // Store GDPR consents
  if (data.user) {
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || ''
    const userAgent = headersList.get('user-agent') || ''
    const now = new Date().toISOString()

    const consents = [
      { user_id: data.user.id, consent_type: 'terms', granted: true, granted_at: now, ip_address: ip, user_agent: userAgent },
      { user_id: data.user.id, consent_type: 'marketing', granted: consentMarketing, granted_at: consentMarketing ? now : null, ip_address: ip, user_agent: userAgent },
      { user_id: data.user.id, consent_type: 'newsletter', granted: consentNewsletter, granted_at: consentNewsletter ? now : null, ip_address: ip, user_agent: userAgent },
    ]

    await supabase.from('user_consents').insert(consents)
  }

  revalidatePath('/', 'layout')
  redirect(`/${locale}/check-email`)
}

export async function signout() {
  const supabase = await createClient()
  const headersList = await headers()
  const referer = headersList.get('referer') || ''
  const localeMatch = referer.match(/\/(it|en|es)\//)
  const locale = localeMatch?.[1] || 'it'
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect(`/${locale}/login`)
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/update-password`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()
  const password = formData.get('password') as string
  const locale = (formData.get('locale') as string) || 'it'

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect(`/${locale}/dashboard`)
}

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      full_name: formData.get('full_name') as string,
      phone: formData.get('phone') as string || null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}
