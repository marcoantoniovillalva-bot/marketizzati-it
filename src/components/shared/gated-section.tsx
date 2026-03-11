'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface GatedSectionProps {
  children: React.ReactNode
  hideWhenNotAuthenticated?: boolean
}

export function GatedSection({ children, hideWhenNotAuthenticated = false }: GatedSectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data }) => {
      setIsAuthenticated(!!data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Loading state — render nothing to avoid flash
  if (isAuthenticated === null) {
    if (hideWhenNotAuthenticated) {
      return null
    }
    return (
      <div className="relative">
        <div className="blur-sm select-none pointer-events-none">{children}</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  // Not authenticated
  if (hideWhenNotAuthenticated) {
    return null
  }

  return (
    <div className="relative">
      <div className="blur-sm select-none pointer-events-none">{children}</div>
    </div>
  )
}
