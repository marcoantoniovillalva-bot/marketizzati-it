import { useTranslations } from 'next-intl'
import { siteConfig } from '@/config/siteConfig'

export default function TerminiPage() {
  const t = useTranslations('legal.terms')

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-display-md mb-4">{t('title')}</h1>
        <p className="text-body-sm text-foreground-muted mb-12">{t('lastUpdated')}: Febbraio 2026</p>

        <div className="space-y-8 text-body-md text-foreground-secondary leading-relaxed">
          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">1. Informazioni Generali</h2>
            <p>Il presente sito web è di proprietà di {siteConfig.companyName}.
            {siteConfig.partitaIva && <> P.IVA: {siteConfig.partitaIva}.</>} L&apos;utilizzo del sito implica l&apos;accettazione dei presenti termini e condizioni.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">2. Servizi Offerti</h2>
            <p>{siteConfig.companyName} offre servizi di marketing digitale, consulenza strategica e sistemi intelligenti. I dettagli specifici dei servizi vengono concordati individualmente con ogni cliente.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">3. Consulenza Gratuita</h2>
            <p>La consulenza strategica gratuita ha una durata di 30 minuti e non comporta alcun obbligo di acquisto. La prenotazione è soggetta a disponibilità.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">4. Proprietà Intellettuale</h2>
            <p>Tutti i contenuti del sito (testi, immagini, grafica, logo, metodo Z·START) sono protetti dalle leggi sul diritto d&apos;autore e sono di proprietà esclusiva di {siteConfig.companyName}.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">5. Limitazione di Responsabilità</h2>
            <p>{siteConfig.companyName} non è responsabile per eventuali danni diretti o indiretti derivanti dall&apos;uso del sito o dall&apos;impossibilità di accedervi.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">6. Legge Applicabile</h2>
            <p>I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di [sede legale].</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">7. Contatti</h2>
            <p>Per qualsiasi domanda relativa ai presenti termini: <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:underline">{siteConfig.contact.email || '[email]'}</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
