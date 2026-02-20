import { useTranslations } from 'next-intl'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(254,51,20,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(254,51,20,0.05),transparent_50%)]" />

        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-10">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              MARKET<span className="text-accent">IZZATI</span>
            </span>
          </div>

          <AuthBranding />
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>

      {/* Right panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}

function AuthBranding() {
  const t = useTranslations('home.hero')

  return (
    <div>
      <h1 className="text-display-md text-foreground mb-4">
        Il Sistema Operativo per il Tuo Business Digitale
      </h1>
      <p className="text-lg text-foreground-secondary leading-relaxed mb-10">
        Strategia, tecnologia e AI per trasformare la tua visione in risultati concreti.
      </p>

      <div className="space-y-4">
        {[
          'Strategia su misura per il tuo business',
          'Accesso esclusivo al Mini-Corso 5 Giorni',
          'Dashboard personale con risorse premium',
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-3 text-foreground-secondary">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
