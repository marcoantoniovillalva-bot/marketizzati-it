import { useTranslations } from 'next-intl'
import { siteConfig } from '@/config/siteConfig'

export default function PrivacyPage() {
  const t = useTranslations('legal.privacy')

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose-invert">
        <h1 className="font-heading text-display-md mb-4">{t('title')}</h1>
        <p className="text-body-sm text-foreground-muted mb-12">{t('lastUpdated')}: Febbraio 2026</p>

        <div className="space-y-8 text-body-md text-foreground-secondary leading-relaxed">
          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">1. Titolare del Trattamento</h2>
            <p>{siteConfig.companyName}<br/>
            {siteConfig.contact.address && <>{siteConfig.contact.address}, {siteConfig.contact.city}<br/></>}
            {siteConfig.partitaIva && <>P.IVA: {siteConfig.partitaIva}<br/></>}
            Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-accent hover:underline">{siteConfig.contact.email || '[email]'}</a></p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">2. Dati Raccolti</h2>
            <p>Raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Dati identificativi (nome, cognome, email)</li>
              <li>Dati di contatto (numero WhatsApp, telefono)</li>
              <li>Dati di navigazione (cookie tecnici, log di sistema)</li>
              <li>Dati forniti volontariamente tramite i form del sito</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Erogazione dei servizi richiesti</li>
              <li>Gestione delle consulenze prenotate</li>
              <li>Comunicazioni relative ai servizi</li>
              <li>Adempimento di obblighi legali e fiscali</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">4. Base Giuridica</h2>
            <p>Il trattamento è basato su: consenso dell&apos;interessato (Art. 6.1.a GDPR), esecuzione di un contratto (Art. 6.1.b), obbligo legale (Art. 6.1.c), legittimo interesse (Art. 6.1.f).</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">5. Diritti dell&apos;Interessato</h2>
            <p>In conformità con il GDPR (Artt. 15-22), hai diritto di: accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione. Per esercitare i tuoi diritti, contattaci all&apos;indirizzo email indicato.</p>
          </div>

          <div>
            <h2 className="font-heading text-display-xs text-foreground mb-4">6. Conservazione dei Dati</h2>
            <p>I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, e comunque non oltre i termini previsti dalla legge.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
