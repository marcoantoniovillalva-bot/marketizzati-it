import { Navbar } from '@/components/layout/navbar'
import { PortalSidebar } from '@/features/portal/components'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Same navbar as public site */}
      <Navbar />

      <div className="flex pt-20">
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
