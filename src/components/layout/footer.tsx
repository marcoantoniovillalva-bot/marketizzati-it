import { Link } from '@/i18n/navigation'
import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <Link href="/">
          <Image
            src="/images/icon-light.png"
            alt="Marketizzati"
            width={40}
            height={40}
            className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <span className="text-surface-border">·</span>
          <Link href="/cookie" className="hover:text-accent transition-colors">Cookie Policy</Link>
          <span className="text-surface-border">·</span>
          <Link href="/termini" className="hover:text-accent transition-colors">Termini e Condizioni</Link>
        </div>

        <p className="text-xs text-foreground-muted">
          © {year} Marketizzati · Tutti i diritti riservati
        </p>
        <p className="text-xs text-foreground-muted/60">
          Via Mentana 21 · Vigevano (PV) · Italia
        </p>
      </div>
    </footer>
  )
}
