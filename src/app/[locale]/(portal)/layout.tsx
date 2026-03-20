import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PortalMobileNav, PortalSidebar } from '@/features/portal/components'

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

  const role = profile?.role === 'admin' ? 'admin' : 'client'

  return (
    <div className="min-h-screen bg-background">
      <div className="hidden lg:block">
        <div className="flex">
          <PortalSidebar role={role} />
          <main className="min-h-screen flex-1 px-8 py-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>

      <div className="lg:hidden">
        <PortalMobileNav role={role} />
        <main className="px-4 py-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
