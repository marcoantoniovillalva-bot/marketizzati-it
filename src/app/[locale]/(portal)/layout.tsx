import { PortalSidebar } from '@/features/portal/components'
import { PortalMobileNav } from '@/features/portal/components'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile nav */}
      <PortalMobileNav />

      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <PortalSidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
