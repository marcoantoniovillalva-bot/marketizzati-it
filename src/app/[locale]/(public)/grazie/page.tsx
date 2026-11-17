import type { Metadata } from 'next'
import { Heading, Section } from '@/features/site/components/section'
import { WhatsAppButton } from '@/features/site/components/ui'
import { isLocale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }> }

const TEXT = {
  it: {
    metaTitle: 'Grazie', label: 'Pagamento ricevuto', title: 'Grazie, si parte.', italic: 'Ora tocca a me.',
    steps: ['Ti arriva un’email per entrare nell’area clienti.', 'Lì carichi logo (se ce l’hai), foto dei tuoi lavori, servizi, zone e orari.', 'Ci sentiamo per una call di 20 minuti e in circa 2 settimane il sito è online.'],
    whatsapp: 'Scrivimi su WhatsApp',
  },
  es: {
    metaTitle: 'Gracias', label: 'Pago recibido', title: 'Gracias, empezamos.', italic: 'Ahora me toca a mí.',
    steps: ['Recibirás un correo para entrar en el área de clientes.', 'Allí subes tu logo (si lo tienes), fotos de tus trabajos, servicios, zonas y horarios.', 'Hablamos en una llamada de 20 minutos y en unas 2 semanas tu web está publicada.'],
    whatsapp: 'Escríbeme por WhatsApp',
  },
  en: {
    metaTitle: 'Thank you', label: 'Payment received', title: 'Thank you. Let’s get started.', italic: 'I will take it from here.',
    steps: ['You will get an email with access to the client area.', 'Upload your logo (if you have one), photos of your work, services, areas and opening hours.', 'We have a 20-minute call, and your website goes online in around 2 weeks.'],
    whatsapp: 'Message me on WhatsApp',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return { title: TEXT[isLocale(locale) ? locale : 'it'].metaTitle, robots: { index: false, follow: false } }
}

/** After Stripe Checkout: what happens next. The order itself is created by the webhook, not by this page. */
export default async function ThanksPage({ params }: Props) {
  const { locale } = await params
  const copy = TEXT[isLocale(locale) ? locale : 'it']
  return (
    <Section tint="cream" className="min-h-[80vh] pt-36">
      <Heading
        as="h1"
        label={copy.label}
        title={copy.title}
        italic={copy.italic}
        intro={
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            {copy.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        }
      />
      <div className="mt-10">
        <WhatsAppButton label={copy.whatsapp} variant="primary" />
      </div>
    </Section>
  )
}
