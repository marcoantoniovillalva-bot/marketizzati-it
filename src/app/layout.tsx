import type { ReactNode } from 'react'

// Root layout is a minimal passthrough — the [locale] layout provides html/body.
// This pattern is recommended by next-intl for localized App Router setups.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children as React.ReactElement
}
