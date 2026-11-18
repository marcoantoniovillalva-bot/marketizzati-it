import type { Metadata } from 'next'
import { Heading, Section } from '@/features/site/components/section'
import { TERMS_VERSION } from '@/features/checkout/lib/plans'
import { ADS, OFFER } from '@/features/site/lib/offer'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }> }

const TEXT = {
  it: {
    metaTitle: 'Condizioni di vendita del sito web | Marketizzati',
    description: 'Condizioni di vendita del sito web Marketizzati e della gestione pubblicitaria: prezzi, rate, tempi, proprietà del sito, sospensione e assistenza.',
    label: 'Condizioni di vendita', title: 'Condizioni di vendita', italic: 'del sito web.', version: 'Versione', binding: '',
  },
  es: {
    metaTitle: 'Condiciones de venta de la web | Marketizzati',
    description: 'Condiciones de venta de la web y la gestión publicitaria de Marketizzati: precios, cuotas, plazos, propiedad, suspensión y asistencia.',
    label: 'Condiciones de venta', title: 'Condiciones de venta', italic: 'de tu web.', version: 'Versión', binding: 'La versión en italiano es la que tiene valor legal.',
  },
  en: {
    metaTitle: 'Website terms of sale | Marketizzati',
    description: 'Marketizzati website and advertising management terms: prices, instalments, timing, ownership, suspension and support.',
    label: 'Terms of sale', title: 'Terms of sale', italic: 'for your website.', version: 'Version', binding: 'The Italian version is the legally binding one.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const copy = TEXT[l]
  return pageMetadata('condizioni', l, copy.metaTitle, copy.description)
}
/** Terms of sale, from the contract model used with clients (Max Installazioni). Italian is the binding text. */
const CLAUSES: { title: string; body: string[] }[] = [
  {
    title: '1. Chi vende',
    body: ['Marketizzati di Marco Antonio Villalva Sarango, Via Mentana 21, 27029 Vigevano (PV), P.IVA 03028360182, email marco.villalva@marketizzati.it (di seguito "Marketizzati").'],
  },
  {
    title: '2. Cosa compri',
    body: [
      `Sito web: logo e identità visiva (o sistemazione di quelli esistenti), sito fino a ${OFFER.maxPages} pagine più Privacy e Cookie, testi scritti sulle ricerche dei clienti della tua zona, pulsanti per chiamata e WhatsApp, modulo contatti, indicizzazione su Google e Bing, creazione o sistemazione della scheda Google Business Profile, messa online in HTTPS sul tuo dominio, ${OFFER.supportDays} giorni di assistenza dopo la messa online.`,
      `Gestione pubblicità (facoltativa): impostazione e gestione di campagne su Google Ads e ChatGPT Ads, con controllo, correzioni e report mensile.`,
    ],
  },
  {
    title: '3. Prezzi e pagamento',
    body: [
      `Sito web: ${OFFER.oneOff} € in un’unica soluzione, oppure ${OFFER.monthly} € al mese per ${OFFER.months} mesi. Gestione pubblicità: ${ADS.monthly} € al mese; se acquistata insieme al sito, i primi ${ADS.launchMonths} mesi costano ${ADS.launchMonthly} € al mese e la gestione poi si ferma da sola.`,
      'Il pagamento avviene online con Stripe. Le rate e la gestione pubblicitaria si addebitano ogni mese sullo stesso metodo di pagamento.',
      `Operazione senza applicazione dell’IVA ai sensi dell’art. 1, commi 54–89, L. 190/2014 (regime forfettario). Su ogni fattura sopra i 77,47 € si applica una marca da bollo da ${OFFER.stampDuty} €, a carico del cliente.`,
      `Il budget pubblicitario (da ${ADS.minBudgetMonthly} € al mese) non è compreso: lo paghi direttamente a Google e OpenAI, su account intestati a te.`,
    ],
  },
  {
    title: '4. Rate non pagate',
    body: [
      'Se una rata non viene pagata, Stripe riprova l’addebito per alcuni giorni. Se il pagamento non va a buon fine, il sito viene sospeso finché non riprendi a pagare. Se le rate si interrompono definitivamente, il sito resta chiuso.',
      `Dopo il pagamento dell’ultima delle ${OFFER.months} rate (o subito, se paghi in un’unica soluzione) il sito è interamente tuo, codice compreso, senza altri canoni da pagare a Marketizzati.`,
    ],
  },
  {
    title: '5. Tempi',
    body: [
      `Il lavoro inizia al ricevimento del pagamento. Il sito va online in circa ${OFFER.deliveryWeeks} settimane da quando Marketizzati riceve il materiale (logo se c’è, foto dei lavori, una tua foto, servizi, orari e zone).`,
      'La verifica della scheda Google può richiedere qualche giorno in più: i tempi li decide Google (codice per posta, telefonata o breve video).',
    ],
  },
  {
    title: '6. Cosa resta a tuo nome',
    body: [
      'Dominio, email, logo, scheda Google e account pubblicitari sono intestati a te fin dall’inizio.',
      `Dominio, hosting ed email si acquistano presso VHosting (circa ${OFFER.hostingPerYear} € l’anno), intestati e pagati direttamente da te. Vanno rinnovati ogni anno: senza rinnovo il sito e l’email smettono di funzionare.`,
    ],
  },
  {
    title: '7. Assistenza e modifiche',
    body: [`Per ${OFFER.supportDays} giorni dalla messa online sono incluse correzioni e piccoli ritocchi. Dopo, le modifiche si fanno su richiesta con un preventivo.`],
  },
  {
    title: '8. Pubblicità e risultati',
    body: [
      'Marketizzati si impegna a impostare e gestire con cura le campagne. I risultati (chiamate, richieste, lavori) dipendono dal mercato e dal budget e non possono essere garantiti.',
      'La gestione continua a 150 € al mese si può disdire in qualsiasi momento scrivendo a Marketizzati: termina alla fine del mese già pagato.',
    ],
  },
  {
    title: '9. Recesso',
    body: [
      'Se acquisti come consumatore (senza partita IVA) hai 14 giorni per recedere. Chiedendo di iniziare subito il lavoro, accetti che in caso di recesso venga trattenuta la parte di lavoro già svolta.',
      'Se acquisti come professionista o impresa, il recesso non è previsto una volta iniziato il lavoro.',
    ],
  },
  {
    title: '10. Legge e foro',
    body: ['Si applica la legge italiana. Per le controversie con professionisti e imprese è competente il foro di Pavia; per i consumatori, quello del luogo di residenza del consumatore.'],
  },
]

const CLAUSES_ES: typeof CLAUSES = [
  { title: '1. Quién vende', body: ['Marketizzati di Marco Antonio Villalva Sarango, Via Mentana 21, 27029 Vigevano (PV), número de IVA italiano 03028360182, correo marco.villalva@marketizzati.it (en adelante, "Marketizzati").'] },
  { title: '2. Qué compras', body: [
    `Web: logo e identidad visual (o revisión de los existentes), web de hasta ${OFFER.maxPages} páginas más Privacidad y Cookies, textos basados en las búsquedas de tus clientes, botones de llamada y WhatsApp, formulario de contacto, indexación en Google y Bing, creación o revisión de la ficha de Google Business Profile, publicación con HTTPS en tu dominio y ${OFFER.supportDays} días de asistencia tras la publicación.`,
    'Gestión de publicidad (opcional): configuración y gestión de campañas en Google Ads y ChatGPT Ads, con revisiones, ajustes e informe mensual.',
  ] },
  { title: '3. Precios y pago', body: [
    `Web: ${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses. Gestión de publicidad: ${ADS.monthly} € al mes. Si la compras junto con la web, los primeros ${ADS.launchMonths} meses cuestan ${ADS.launchMonthly} € al mes y después la gestión se detiene automáticamente.`,
    'El pago se realiza online con Stripe. Las cuotas y la gestión publicitaria se cobran cada mes con el mismo método de pago.',
    `Operación sin IVA según el art. 1, apartados 54–89, de la Ley italiana 190/2014 (régimen forfettario). Cada factura superior a 77,47 € lleva un impuesto de timbre de ${OFFER.stampDuty} €, a cargo del cliente.`,
    `El presupuesto de anuncios (desde ${ADS.minBudgetMonthly} € al mes) no está incluido: lo pagas directamente a Google y OpenAI, en cuentas a tu nombre.`,
  ] },
  { title: '4. Cuotas impagadas', body: [
    'Si no se paga una cuota, Stripe vuelve a intentar el cobro durante unos días. Si no se completa el pago, la web se suspende hasta que retomes los pagos. Si dejas de pagar definitivamente, la web permanece cerrada.',
    `Tras pagar la última de las ${OFFER.months} cuotas (o de inmediato, si pagas de una vez), la web es completamente tuya, incluido el código, sin más cuotas que pagar a Marketizzati.`,
  ] },
  { title: '5. Plazos', body: [
    `El trabajo empieza al recibir el pago. La web se publica en unas ${OFFER.deliveryWeeks} semanas desde que Marketizzati recibe el material: logo si lo tienes, fotos de tus trabajos, una foto tuya, servicios, horarios y zonas.`,
    'La verificación de la ficha de Google puede requerir algunos días más. Google decide los plazos y el método: código postal, llamada o vídeo corto.',
  ] },
  { title: '6. Qué queda a tu nombre', body: [
    'Dominio, correo, logo, ficha de Google y cuentas publicitarias están a tu nombre desde el principio.',
    `Dominio, alojamiento y correo se contratan en VHosting (unos ${OFFER.hostingPerYear} € al año), a tu nombre y pagados directamente por ti. Debes renovarlos cada año. Sin renovación, la web y el correo dejan de funcionar.`,
  ] },
  { title: '7. Asistencia y cambios', body: [`Durante los ${OFFER.supportDays} días posteriores a la publicación se incluyen correcciones y pequeños ajustes. Después, los cambios se hacen a petición, con presupuesto.`] },
  { title: '8. Publicidad y resultados', body: [
    'Marketizzati se compromete a configurar y gestionar las campañas con cuidado. Los resultados (llamadas, solicitudes, trabajos) dependen del mercado y del presupuesto y no se pueden garantizar.',
    'Puedes cancelar la gestión continuada de 150 € al mes en cualquier momento escribiendo a Marketizzati. Termina al final del mes que ya has pagado.',
  ] },
  { title: '9. Desistimiento', body: [
    'Si compras como consumidor (sin número de IVA), tienes 14 días para desistir. Al pedir que el trabajo empiece de inmediato, aceptas que, si desistes, se retenga el importe correspondiente al trabajo ya realizado.',
    'Si compras como profesional o empresa, no se prevé el desistimiento una vez iniciado el trabajo.',
  ] },
  { title: '10. Ley y jurisdicción', body: ['Se aplica la ley italiana. Para litigios con profesionales y empresas, son competentes los tribunales de Pavia. Para consumidores, los del lugar de residencia del consumidor.'] },
]

const CLAUSES_EN: typeof CLAUSES = [
  { title: '1. The seller', body: ['Marketizzati di Marco Antonio Villalva Sarango, Via Mentana 21, 27029 Vigevano (PV), Italian VAT number 03028360182, email marco.villalva@marketizzati.it ("Marketizzati").'] },
  { title: '2. What you buy', body: [
    `Website: logo and visual identity (or updates to existing ones), up to ${OFFER.maxPages} pages plus Privacy and Cookies, text based on local customer searches, call and WhatsApp buttons, contact form, Google and Bing indexing, Google Business Profile creation or update, HTTPS launch on your domain, and ${OFFER.supportDays} days of support after launch.`,
    'Advertising management (optional): setup and management of Google Ads and ChatGPT Ads campaigns, with checks, adjustments and a monthly report.',
  ] },
  { title: '3. Prices and payment', body: [
    `Website: ${OFFER.oneOff} € upfront, or ${OFFER.monthly} € a month for ${OFFER.months} months. Advertising management: ${ADS.monthly} € a month. If bought with the website, the first ${ADS.launchMonths} months cost ${ADS.launchMonthly} € a month, then management stops automatically.`,
    'Payment is made online through Stripe. Instalments and advertising management are charged monthly to the same payment method.',
    `No VAT applies under Article 1, paragraphs 54–89, of Italian Law 190/2014 (flat-rate tax scheme). Each invoice over 77,47 € includes ${OFFER.stampDuty} € stamp duty, paid by the customer.`,
    `The ad budget (from ${ADS.minBudgetMonthly} € a month) is not included. You pay it directly to Google and OpenAI, using accounts in your name.`,
  ] },
  { title: '4. Unpaid instalments', body: [
    'If an instalment is unpaid, Stripe retries the charge for a few days. If payment still fails, the website is suspended until you resume paying. If payments stop permanently, the website stays closed.',
    `After the last of the ${OFFER.months} instalments is paid (or immediately if you pay upfront), you fully own the website, including the code, with no further fees due to Marketizzati.`,
  ] },
  { title: '5. Timing', body: [
    `Work starts when payment is received. The website goes online in around ${OFFER.deliveryWeeks} weeks after Marketizzati receives your material: logo if you have one, photos of your work, a photo of you, services, opening hours and areas.`,
    'Google profile verification may take a few extra days. Google decides the timing and method: a code by post, a phone call or a short video.',
  ] },
  { title: '6. What stays in your name', body: [
    'Your domain, email, logo, Google profile and advertising accounts are in your name from the start.',
    `Domain, hosting and email are purchased from VHosting (around ${OFFER.hostingPerYear} € a year), registered and paid for directly by you. You must renew them each year. Without renewal, your website and email stop working.`,
  ] },
  { title: '7. Support and changes', body: [`Corrections and small adjustments are included for ${OFFER.supportDays} days after launch. After that, changes are quoted on request.`] },
  { title: '8. Advertising and results', body: [
    'Marketizzati commits to setting up and managing campaigns with care. Results (calls, enquiries, jobs) depend on the market and budget and cannot be guaranteed.',
    'You can cancel ongoing management at 150 € a month at any time by writing to Marketizzati. It ends at the close of the month you have already paid for.',
  ] },
  { title: '9. Withdrawal', body: [
    'If you buy as a consumer (without a VAT number), you have 14 days to withdraw. By asking for work to start immediately, you agree that, if you withdraw, the amount for work already completed will be retained.',
    'If you buy as a professional or business, withdrawal is not provided for once work has started.',
  ] },
  { title: '10. Law and jurisdiction', body: ['Italian law applies. The courts of Pavia have jurisdiction for disputes with professionals and businesses. For consumers, jurisdiction lies with the courts of their place of residence.'] },
]

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const copy = TEXT[l]
  const clauses = { it: CLAUSES, es: CLAUSES_ES, en: CLAUSES_EN }[l]
  return (
    <Section tint="white" className="pt-24 md:pt-32">
      {copy.binding && <p className="mb-6 text-sm text-ink-muted">{copy.binding}</p>}
      <Heading as="h1" label={copy.label} title={copy.title} italic={copy.italic} />
      <p className="mt-4 text-sm text-ink-muted">{copy.version} {TERMS_VERSION}</p>
      <div className="mt-6 md:mt-10 max-w-3xl space-y-8">
        {clauses.map((c) => (
          <section key={c.title}>
            <h2 className="text-xl font-bold">{c.title}</h2>
            {c.body.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Section>
  )
}

