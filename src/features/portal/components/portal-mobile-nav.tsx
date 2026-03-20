'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { Bot, BriefcaseBusiness, LayoutDashboard, LifeBuoy, Menu, Shield, Sparkles, X } from 'lucide-react'

type PortalMobileNavProps = {
  role?: 'client' | 'admin'
}

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/percorso', label: 'Percorso', icon: Sparkles },
  { href: '/workspace', label: 'Workspace', icon: BriefcaseBusiness },
  { href: '/automazioni', label: 'Auto', icon: Bot },
  { href: '/supporto', label: 'Supporto', icon: LifeBuoy },
] as const

export function PortalMobileNav({ role = 'client' }: PortalMobileNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-surface-border bg-white/95 px-4 py-4 backdrop-blur">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-red text-white shadow-glow-red">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <p className="font-heading text-base font-semibold leading-none">Marketizzati</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-foreground-muted">Client OS</p>
          </div>
        </Link>
        <button onClick={() => setOpen((value) => !value)} className="rounded-xl border border-surface-border p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-surface-border bg-white px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? 'border-accent bg-accent text-white'
                      : 'border-surface-border bg-surface text-foreground-secondary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} />
                    {item.label}
                  </div>
                </Link>
              )
            })}
            {role === 'admin' && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="col-span-2 rounded-2xl border border-foreground bg-foreground px-4 py-3 text-sm font-medium text-white"
              >
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  Admin & ProspectBot
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
