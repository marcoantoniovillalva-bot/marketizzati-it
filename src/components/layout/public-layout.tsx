import type { ReactNode } from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
