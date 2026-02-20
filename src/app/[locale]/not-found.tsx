import { Link } from '@/i18n/navigation'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="font-heading text-display-xs text-foreground mb-4">
          Pagina non trovata
        </h1>
        <p className="text-foreground-secondary mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
        >
          <ArrowLeft size={18} />
          Torna alla Home
        </Link>
      </div>
    </div>
  )
}
