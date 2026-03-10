import { useTranslations } from 'next-intl'

export default function CookiePage() {
  const t = useTranslations('legal.cookie')

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-display-md mb-4">{t('title')}</h1>
        <p className="text-body-sm text-foreground-muted mb-12">{t('lastUpdated')}: Febbraio 2026</p>

        <div className="space-y-8 text-body-md text-foreground-secondary leading-relaxed">
          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">1. Cosa Sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti visitati inviano al browser dell&apos;utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">2. Cookie Utilizzati</h2>
            <h3 className="font-semibold text-foreground mb-2 mt-4">Cookie Tecnici (Necessari)</h3>
            <p>Essenziali per il funzionamento del sito. Includono cookie di sessione, preferenze lingua e preferenze cookie. Non richiedono consenso.</p>

            <h3 className="font-semibold text-foreground mb-2 mt-4">Cookie Analitici</h3>
            <p>Utilizzati per raccogliere informazioni sull&apos;utilizzo del sito in forma aggregata e anonima. Richiedono il consenso dell&apos;utente.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">3. Gestione del Consenso</h2>
            <p>Al primo accesso al sito, un banner ti permette di accettare o rifiutare i cookie non tecnici. Puoi modificare le tue preferenze in qualsiasi momento cliccando sull&apos;icona cookie nel footer del sito.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">4. Come Disabilitare i Cookie</h2>
            <p>Puoi configurare il tuo browser per bloccare o eliminare i cookie. Nota: la disabilitazione dei cookie tecnici potrebbe compromettere il funzionamento del sito.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">5. Riferimenti Normativi</h2>
            <p>Questa cookie policy è conforme al Regolamento (UE) 2016/679 (GDPR) e alle linee guida del Garante per la Protezione dei Dati Personali italiano in materia di cookie e altri strumenti di tracciamento (Giugno 2021).</p>
          </div>
        </div>
      </div>
    </section>
  )
}
