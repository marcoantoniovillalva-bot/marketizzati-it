import type { ReactNode } from 'react'
import { PublicLayout } from '@/components/layout'

export default function PublicPagesLayout({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>
}
