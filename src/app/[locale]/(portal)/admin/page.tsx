import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { AdminOverview } from '@/features/portal/components'
import { getAdminSnapshot } from '@/features/portal/lib/portal-data'

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (profile?.role !== 'admin') {
    redirect('/dashboard')
  }

  const snapshot = await getAdminSnapshot()

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Admin control room</p>
        <h1 className="mt-4 font-heading text-display-sm text-foreground">Marketizzati + ProspectBot</h1>
        <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
          Questa e la vista interna: clienti, richieste, avanzamento operativo e pipeline lead di ProspectBot riuniti nello stesso pannello.
        </p>
      </div>

      <AdminOverview snapshot={snapshot} />
    </div>
  )
}
