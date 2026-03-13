import type { ReactNode } from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>{children}</main>
      <Footer />
    </>
  )
}
