'use client'

import { usePathname } from '@/i18n/navigation'
import { Link } from '@/i18n/navigation'
import {
  Bot,
  BriefcaseBusiness,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  Settings2,
  Shield,
  Sparkles,
  BookOpen,
  User,
  Wrench,
} from 'lucide-react'

type PortalSidebarProps = {
  role?: 'client' | 'admin'
}

const clientNavItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/percorso', label: 'Percorso Z-START', icon: Sparkles },
  { href: '/workspace', label: 'Workspace', icon: BriefcaseBusiness },
  { href: '/task', label: 'Task & deliverable', icon: Settings2 },
  { href: '/risorse', label: 'Risorse', icon: BookOpen },
  { href: '/automazioni', label: 'Automazioni', icon: Bot },
  { href: '/supporto', label: 'Supporto', icon: LifeBuoy },
  { href: '/profilo', label: 'Profilo', icon: User },
] as const

export function PortalSidebar({ role = 'client' }: PortalSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen w-80 flex-col border-r border-surface-border bg-white">
      <div className="border-b border-surface-border px-6 py-7">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-red text-white shadow-glow-red">
            <Gauge size={22} />
          </div>
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
              MARKETIZZATI
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-foreground-muted">
              Client Operating System
            </p>
          </div>
        </Link>
      </div>

      <div className="px-4 py-6">
        <div className="rounded-[28px] border border-accent/10 bg-[linear-gradient(160deg,#FFF7F4_0%,#FFFFFF_70%)] p-4 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Metodo Z-START</p>
          <p className="mt-2 font-heading text-lg text-foreground">Un portale operativo, non solo formativo.</p>
          <p className="mt-2 text-sm text-foreground-secondary">
            Qui fai avanzare il progetto insieme a Marketizzati, con task, automatismi e deliverable chiari.
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {clientNavItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                active
                  ? 'bg-accent text-white shadow-glow-red'
                  : 'text-foreground-secondary hover:bg-surface hover:text-foreground'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {role === 'admin' && (
        <div className="px-4 pb-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground px-4 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            <Shield size={18} />
            Admin & ProspectBot
          </Link>
        </div>
      )}

      <div className="border-t border-surface-border px-6 py-5">
        <div className="flex items-start gap-3 text-sm text-foreground-secondary">
          <Wrench size={16} className="mt-0.5 text-accent" />
          <p>
            Lo stile resta Marketizzati. La logica operativa si ispira ai pattern migliori di Lurumi e ProspectBot.
          </p>
        </div>
      </div>
    </aside>
  )
}
