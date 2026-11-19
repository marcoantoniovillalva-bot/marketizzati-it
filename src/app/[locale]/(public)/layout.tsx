import type { ReactNode } from 'react'
import { SiteShell } from '@/features/site/components/site-shell'

/** The locale comes from the URL params: translated slugs are rewritten in the proxy before next-intl runs. */
export default async function PublicPagesLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <SiteShell locale={locale}>{children}</SiteShell>
}
