import type { ReactNode } from 'react'
import { getLocale } from 'next-intl/server'
import { SiteShell } from '@/features/site/components/site-shell'

export async function PublicLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()
  return <SiteShell locale={locale}>{children}</SiteShell>
}
