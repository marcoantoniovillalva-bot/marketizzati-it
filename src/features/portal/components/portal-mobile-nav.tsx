'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { signout } from '@/actions/auth'
import { LayoutDashboard, BookOpen, FolderOpen, User, LogOut, Menu, X } from 'lucide-react'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, key: 'dashboard' },
  { href: '/corso', icon: BookOpen, key: 'course' },
  { href: '/risorse', icon: FolderOpen, key: 'resources' },
  { href: '/profilo', icon: User, key: 'profile' },
] as const

export function PortalMobileNav() {
  const t = useTranslations('portal.sidebar')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 bg-surface border-b border-surface-border">
        <Link href="/dashboard" className="text-lg font-bold tracking-tight text-foreground">
          MARKET<span className="text-accent">IZZATI</span>
        </Link>
        <button onClick={() => setOpen(!open)} className="text-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <nav className="bg-surface border-b border-surface-border p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            const Icon = item.icon
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-foreground-secondary hover:text-foreground hover:bg-surface-elevated'
                  }
                `}
              >
                <Icon size={20} />
                {t(item.key)}
              </Link>
            )
          })}
          <form action={signout}>
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground-secondary hover:text-red-400 hover:bg-red-500/10 transition-all w-full"
            >
              <LogOut size={20} />
              Logout
            </button>
          </form>
        </nav>
      )}
    </div>
  )
}
