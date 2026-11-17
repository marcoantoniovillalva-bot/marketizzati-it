import type { Metadata } from 'next'
import Image from 'next/image'
import { Heading, Section } from '@/features/site/components/section'
import { SocialLinks } from '@/features/site/components/social-links'
import { CheckList, WhatsAppButton } from '@/features/site/components/ui'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, type Locale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }> }

interface Person {
  name: string
  role: string
  photo: string
  text: string
  quote: string
  link?: { label: string; href: string }
}

interface AboutCopy {
  meta: string
  desc: string
  label: string
  title: string
  italic: string
  text: string
  follow: string
  teamLabel: string
  teamTitle: string
  teamItalic: string
  people: Person[]
  nexoft: { title: string; text: string; link: string }
  how: string
  points: string[]
  cert: string
  cta: string
}

const GABRIELA_PHOTO = '/images/team/ritratto-gabriela-BLiCr7F7.webp'
const MARCO_PHOTO = '/images/team/ritratto-marco-BxOUEDaa.webp'
const STUDIO = 'https://www.villalvadigitalstudio.com/'
const NEXOFT = 'https://www.nexoft.it/'

const COPY: Record<Locale, AboutCopy> = {
  it: {
    meta: 'Chi siamo: Marco e Gabriela Villalva | Marketizzati',
    desc: 'Marco Antonio Villalva, sviluppatore backend e creator, e Gabriela Villalva, designer e sviluppatrice: siti web, AI e automazioni per artigiani e piccole imprese.',
    label: 'Chi sono',
    title: 'Ciao, sono Marco.',
    italic: 'E lavoro con Gabriela.',
    text: 'Ho iniziato da ragazzo con i siti WordPress, poi ho imparato a programmare da solo, soprattutto JavaScript. Oggi mi occupo della parte che non si vede: logica, database, API, accessi, integrazioni e automazioni. Ho studiato l’AI applicata allo sviluppo e ai processi aziendali, e la strategia digitale. Con Marketizzati faccio siti web, pubblicità, agenti AI e sistemi automatizzati per artigiani e piccole imprese.',
    follow: 'Seguimi sui social: lì mostro come lavoro.',
    teamLabel: 'Il team',
    teamTitle: 'Chi lavora',
    teamItalic: 'al tuo progetto.',
    people: [
      { name: 'Marco Antonio Villalva', role: 'Backend, automazioni e AI · Marketizzati', photo: MARCO_PHOTO, text: 'Logica delle applicazioni, database, API, autenticazione, integrazioni e automazioni. Collaboro con Villalva Digital Studio sui progetti che hanno bisogno di un backend solido, di automazioni o di AI.', quote: 'Capire il problema, progettare la logica che lo risolve e trasformarla in un sistema che funziona.' },
      { name: 'Gabriela Villalva', role: 'Design e sviluppo · Villalva Digital Studio', photo: GABRIELA_PHOTO, text: 'Ha studiato Web & Graphic Design all’Accademia delle Professioni di Padova: HTML, CSS, JavaScript, WordPress e UX/UI in Figma. Poi frontend, backend, database, API, AI e automazioni. Disegna e costruisce siti, web app e strumenti su misura.', quote: 'Chi disegna il tuo sito è la stessa persona che lo costruisce e lo fa funzionare.', link: { label: 'Villalva Digital Studio', href: STUDIO } },
    ],
    nexoft: { title: 'AI locale con Nexoft', text: 'Nexoft è una software house di Mortara (PV) con cui collaboro. Quando i dati sono delicati, l’AI dei tuoi sistemi può girare sui server di Nexoft o sui tuoi, invece che su un cloud pubblico: sai dove stanno i dati e chi li gestisce.', link: 'nexoft.it' },
    how: 'Come lavoriamo',
    points: ['Prezzi scritti, dove si può.', 'Testi semplici, senza gergo.', 'Tutto intestato a te: dominio, logo, scheda Google, account.', 'Nessuna promessa di numeri: lavoro fatto bene, e spiegato.'],
    cert: 'Traffic Master Certified · Florida Global University',
    cta: 'Scrivici su WhatsApp',
  },
  es: {
    meta: 'Quiénes somos: Marco y Gabriela Villalva | Marketizzati',
    desc: 'Marco Antonio Villalva, desarrollador backend y creador, y Gabriela Villalva, diseñadora y desarrolladora: webs, IA y automatizaciones para artesanos y pequeñas empresas.',
    label: 'Sobre mí',
    title: 'Hola, soy Marco.',
    italic: 'Y trabajo con Gabriela.',
    text: 'Empecé de joven con webs en WordPress y luego aprendí a programar por mi cuenta, sobre todo JavaScript. Hoy me ocupo de la parte que no se ve: lógica, bases de datos, API, accesos, integraciones y automatizaciones. Estudié IA aplicada al desarrollo y a los procesos de empresa, y estrategia digital. Con Marketizzati hago webs, publicidad, agentes de IA y sistemas automatizados para artesanos y pequeñas empresas.',
    follow: 'Sígueme en redes: ahí enseño cómo trabajo.',
    teamLabel: 'El equipo',
    teamTitle: 'Quién trabaja',
    teamItalic: 'en tu proyecto.',
    people: [
      { name: 'Marco Antonio Villalva', role: 'Backend, automatizaciones e IA · Marketizzati', photo: MARCO_PHOTO, text: 'Lógica de aplicaciones, bases de datos, API, autenticación, integraciones y automatizaciones. Colaboro con Villalva Digital Studio en los proyectos que necesitan un backend sólido, automatizaciones o IA.', quote: 'Entender el problema, diseñar la lógica que lo resuelve y convertirla en un sistema que funciona.' },
      { name: 'Gabriela Villalva', role: 'Diseño y desarrollo · Villalva Digital Studio', photo: GABRIELA_PHOTO, text: 'Estudió Web & Graphic Design en la Accademia delle Professioni de Padua: HTML, CSS, JavaScript, WordPress y UX/UI en Figma. Después frontend, backend, bases de datos, API, IA y automatizaciones. Diseña y construye webs, web apps y herramientas a medida.', quote: 'Quien diseña tu web es la misma persona que la construye y la hace funcionar.', link: { label: 'Villalva Digital Studio', href: STUDIO } },
    ],
    nexoft: { title: 'IA local con Nexoft', text: 'Nexoft es una software house de Mortara (Pavía) con la que colaboro. Cuando los datos son delicados, la IA de tus sistemas puede funcionar en los servidores de Nexoft o en los tuyos, en lugar de en una nube pública: sabes dónde están los datos y quién los gestiona.', link: 'nexoft.it' },
    how: 'Cómo trabajamos',
    points: ['Precios a la vista, siempre que se pueda.', 'Textos sencillos, sin jerga.', 'Todo a tu nombre: dominio, logo, ficha de Google, cuentas.', 'Sin promesas de números: trabajo bien hecho y explicado.'],
    cert: 'Traffic Master Certified · Florida Global University',
    cta: 'Escríbenos por WhatsApp',
  },
  en: {
    meta: 'About us: Marco and Gabriela Villalva | Marketizzati',
    desc: 'Marco Antonio Villalva, backend developer and creator, and Gabriela Villalva, designer and developer: websites, AI and automations for tradespeople and small businesses.',
    label: 'About',
    title: 'Hi, I’m Marco.',
    italic: 'And I work with Gabriela.',
    text: 'I started out building WordPress sites as a teenager, then taught myself to code, mostly JavaScript. Today I handle the part you do not see: logic, databases, APIs, logins, integrations and automations. I studied AI applied to software development and business processes, and digital strategy. With Marketizzati I build websites, ads, AI agents and automated systems for tradespeople and small businesses.',
    follow: 'Follow me on social media: that is where I show how I work.',
    teamLabel: 'The team',
    teamTitle: 'Who works',
    teamItalic: 'on your project.',
    people: [
      { name: 'Marco Antonio Villalva', role: 'Backend, automations and AI · Marketizzati', photo: MARCO_PHOTO, text: 'Application logic, databases, APIs, authentication, integrations and automations. I work with Villalva Digital Studio on projects that need a solid backend, automations or AI.', quote: 'Understand the problem, design the logic that solves it and turn it into a system that works.' },
      { name: 'Gabriela Villalva', role: 'Design and development · Villalva Digital Studio', photo: GABRIELA_PHOTO, text: 'She studied Web & Graphic Design at the Accademia delle Professioni in Padua: HTML, CSS, JavaScript, WordPress and UX/UI in Figma. Then frontend, backend, databases, APIs, AI and automations. She designs and builds websites, web apps and custom tools.', quote: 'The person who designs your website is the same person who builds it and makes it work.', link: { label: 'Villalva Digital Studio', href: STUDIO } },
    ],
    nexoft: { title: 'Local AI with Nexoft', text: 'Nexoft is a software house in Mortara (Pavia) I work with. When data is sensitive, the AI in your systems can run on Nexoft’s servers or on yours instead of a public cloud: you know where the data is and who manages it.', link: 'nexoft.it' },
    how: 'How we work',
    points: ['Prices in plain sight, wherever possible.', 'Simple words, no jargon.', 'Everything in your name: domain, logo, Google profile, accounts.', 'No promised numbers: good work, explained.'],
    cert: 'Traffic Master Certified · Florida Global University',
    cta: 'Message us on WhatsApp',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  return pageMetadata('chiSono', l, COPY[l].meta, COPY[l].desc)
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const c = COPY[isLocale(locale) ? locale : 'it']
  return (
    <>
      <Section tint="navy" className="pt-32 md:pt-40">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-navy-soft">
            <Image src="/images/marco-villalva.png" alt="Marco Antonio Villalva" fill priority sizes="(min-width: 768px) 384px, 90vw" className="object-cover" />
          </div>
          <div>
            <Heading as="h1" dark label={c.label} title={c.title} italic={c.italic} intro={c.text} />
            <p className="mt-6 text-sm font-semibold text-white/70">{c.follow}</p>
            <SocialLinks tone="dark" className="mt-3" />
          </div>
        </div>
      </Section>

      <Section tint="cream">
        <Heading label={c.teamLabel} title={c.teamTitle} italic={c.teamItalic} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.people.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 sm:flex-row md:flex-col lg:flex-row">
              <div className="relative aspect-[4/5] w-full shrink-0 sm:w-48 md:w-full lg:w-52">
                <Image src={p.photo} alt={p.name} fill sizes="(min-width: 1024px) 208px, (min-width: 640px) 192px, 90vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.role}</p>
                <h2 className="text-xl font-bold">{p.name}</h2>
                <p className="leading-relaxed text-ink-soft">{p.text}</p>
                <blockquote className="font-serif text-lg italic text-ink">«{p.quote}»</blockquote>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:underline">
                    {p.link.label} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-ink p-7 text-white md:flex md:items-center md:gap-8">
          <div className="flex-1">
            <p className="text-lg font-bold">{c.nexoft.title}</p>
            <p className="mt-2 leading-relaxed text-white/75">{c.nexoft.text}</p>
          </div>
          <a href={NEXOFT} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-brand md:mt-0">
            {c.nexoft.link} →
          </a>
        </div>
      </Section>

      <Section tint="white">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Heading title={c.how} />
            <div className="mt-8">
              <CheckList items={c.points} />
            </div>
            <div className="mt-8">
              <WhatsAppButton label={c.cta} variant="primary" />
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-brand-cream p-3 ring-1 ring-ink/5">
            <Image src="/images/Certificato Florida University.PNG" alt={c.cert} width={900} height={640} className="h-auto w-full rounded-2xl" />
            <p className="p-3 text-sm font-semibold">{c.cert}</p>
          </div>
        </div>
      </Section>
    </>
  )
}
