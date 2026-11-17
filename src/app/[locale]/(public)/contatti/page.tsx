import type { Metadata } from 'next'
import { Heading, Section } from '@/features/site/components/section'
import { ArrowLink, WhatsAppButton } from '@/features/site/components/ui'
import { BUSINESS } from '@/features/site/lib/links'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, pageHref, type Locale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }> }

const COPY: Record<Locale, { meta: string; desc: string; label: string; title: string; italic: string; intro: string; wa: string; buy: string; email: string; where: string }> = {
  it: { meta: 'Contatti: scrivimi su WhatsApp | Marketizzati', desc: 'Contatta Marketizzati: WhatsApp, email. Siti web, pubblicità e sistemi AI per artigiani e piccole imprese in Lombardia.', label: 'Contatti', title: 'Scrivimi,', italic: 'parli con persone vere.', intro: 'Il modo più veloce è WhatsApp: raccontami in due righe cosa fai e cosa ti serve. Ti rispondiamo appena possibile.', wa: 'Scrivimi su WhatsApp', buy: 'Vuoi il sito? Vedi prezzi e acquista', email: 'Email', where: 'Dove' },
  es: { meta: 'Contacto: escríbeme por WhatsApp | Marketizzati', desc: 'Contacta con Marketizzati: WhatsApp, email. Webs, publicidad y sistemas de IA para artesanos y pequeñas empresas.', label: 'Contacto', title: 'Escríbeme,', italic: 'hablas con personas reales.', intro: 'Lo más rápido es WhatsApp: cuéntame en dos líneas qué haces y qué necesitas. Te respondemos lo antes posible.', wa: 'Escríbeme por WhatsApp', buy: '¿Quieres la web? Ver precios y comprar', email: 'Email', where: 'Dónde' },
  en: { meta: 'Contact: message me on WhatsApp | Marketizzati', desc: 'Contact Marketizzati: WhatsApp, email. Websites, ads and AI systems for tradespeople and small businesses.', label: 'Contact', title: 'Message me,', italic: 'you talk to real people.', intro: 'WhatsApp is the fastest way: tell me in two lines what you do and what you need. We reply as soon as we can.', wa: 'Message me on WhatsApp', buy: 'Want the website? See pricing and buy', email: 'Email', where: 'Where' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  return pageMetadata('contatti', l, COPY[l].meta, COPY[l].desc)
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const c = COPY[l]
  return (
    <Section tint="peach" className="min-h-[80vh] pt-32 md:pt-40">
      <Heading as="h1" label={c.label} title={c.title} italic={c.italic} intro={c.intro} />
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <WhatsAppButton label={c.wa} variant="primary" />
        <ArrowLink href={pageHref('prezzi', l)}>{c.buy}</ArrowLink>
      </div>
      <dl className="mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{c.email}</dt>
          <dd className="mt-1 text-lg font-semibold">
            <a href="mailto:marco.villalva@marketizzati.it">marco.villalva@marketizzati.it</a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{c.where}</dt>
          <dd className="mt-1 text-lg font-semibold">
            {BUSINESS.city} (PV) · Milano, Pavia, Lodi, Crema
          </dd>
        </div>
      </dl>
    </Section>
  )
}
