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
  pathLabel: string
  pathTitle: string
  pathItalic: string
  path: { when: string; what: string; text: string }[]
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
    desc: 'Marco Antonio Villalva, sviluppatore backend, e Gabriela Villalva, designer: siti web, AI e automazioni per artigiani e piccole imprese.',
    label: 'Chi sono',
    title: 'Ciao, sono Marco.',
    italic: 'E lavoro con Gabriela.',
    text: 'Sono uno sviluppatore full-stack specializzato in AI: costruisco siti, piattaforme, agenti che rispondono su WhatsApp e al telefono, e automazioni che tolgono lavoro ripetitivo. Vengo da nove anni di collaudo e messa in servizio di impianti industriali, dove ho imparato a far funzionare le cose nel mondo reale. E faccio video sull’AI, quindi so spiegare la tecnologia senza gergo. Parlo italiano, spagnolo e inglese.',
    pathLabel: 'Il mio percorso',
    pathTitle: 'Dall’industria',
    pathItalic: 'all’AI per le imprese.',
    path: [
      { when: '2016 – 2025', what: 'Tecnico industriale', text: 'Collaudo, diagnostica e messa in servizio di impianti in aziende strutturate. Lì ho imparato a programmare PLC e macchine, a lavorare in team IT con metodo agile e a fare testing. Intanto studiavo Java, HTML, CSS, JavaScript e Python.' },
      { when: '2025', what: 'Nasce Marketizzati', text: 'Siti web, automazioni e contenuti video sull’AI per artigiani e piccole imprese, da Vigevano.' },
      { when: '2026', what: 'AIGENT', text: 'Piattaforma AI per agenzie immobiliari: segreteria, immobili, documenti, marketing, voce e WhatsApp, con l’approvazione di una persona dove serve.' },
      { when: 'Oggi', what: 'Sistemi miei', text: 'Marketizzati Flow per i contenuti, ProspectBot per i contatti e una pipeline che monta i miei video in automatico.' },
    ],
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
    desc: 'Marco Antonio Villalva, desarrollador backend, y Gabriela Villalva, diseñadora: webs, IA y automatizaciones para artesanos y pequeñas empresas.',
    label: 'Sobre mí',
    title: 'Hola, soy Marco.',
    italic: 'Y trabajo con Gabriela.',
    text: 'Soy desarrollador full-stack especializado en IA: construyo webs, plataformas, agentes que responden por WhatsApp y por teléfono, y automatizaciones que quitan trabajo repetitivo. Vengo de nueve años de pruebas y puesta en marcha de instalaciones industriales, donde aprendí a hacer que las cosas funcionen en el mundo real. Y hago vídeos sobre IA, así que sé explicar la tecnología sin jerga. Hablo italiano, español e inglés.',
    pathLabel: 'Mi recorrido',
    pathTitle: 'De la industria',
    pathItalic: 'a la IA para empresas.',
    path: [
      { when: '2016 – 2025', what: 'Técnico industrial', text: 'Pruebas, diagnóstico y puesta en marcha de instalaciones en empresas estructuradas. Allí aprendí a programar PLC y máquinas, a trabajar en equipos IT con metodología ágil y a hacer testing. Mientras tanto estudiaba Java, HTML, CSS, JavaScript y Python.' },
      { when: '2025', what: 'Nace Marketizzati', text: 'Webs, automatizaciones y vídeos sobre IA para artesanos y pequeñas empresas, desde Vigevano.' },
      { when: '2026', what: 'AIGENT', text: 'Plataforma de IA para inmobiliarias: secretaría, inmuebles, documentos, marketing, voz y WhatsApp, con aprobación de una persona donde hace falta.' },
      { when: 'Hoy', what: 'Sistemas propios', text: 'Marketizzati Flow para los contenidos, ProspectBot para los contactos y una pipeline que monta mis vídeos automáticamente.' },
    ],
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
    desc: 'Marco Antonio Villalva, backend developer, and Gabriela Villalva, designer: websites, AI and automations for tradespeople and small businesses.',
    label: 'About',
    title: 'Hi, I’m Marco.',
    italic: 'And I work with Gabriela.',
    text: 'I am a full-stack developer specialised in AI: I build websites, platforms, agents that answer on WhatsApp and on the phone, and automations that take repetitive work off your plate. I come from nine years of testing and commissioning industrial plants, where I learned to make things work in the real world. I also make videos about AI, so I can explain technology without jargon. I speak Italian, Spanish and English.',
    pathLabel: 'My path',
    pathTitle: 'From industry',
    pathItalic: 'to AI for businesses.',
    path: [
      { when: '2016 – 2025', what: 'Industrial technician', text: 'Testing, diagnostics and commissioning of industrial plants in established companies. There I learned to program PLCs and machines, to work in IT teams with an agile method and to do testing. Meanwhile I studied Java, HTML, CSS, JavaScript and Python.' },
      { when: '2025', what: 'Marketizzati starts', text: 'Websites, automations and AI videos for tradespeople and small businesses, from Vigevano.' },
      { when: '2026', what: 'AIGENT', text: 'An AI platform for estate agencies: front desk, listings, documents, marketing, voice and WhatsApp, with a person approving where it matters.' },
      { when: 'Today', what: 'My own systems', text: 'Marketizzati Flow for content, ProspectBot for leads and a pipeline that edits my videos automatically.' },
    ],
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
      <Section tint="navy" className="pt-24 md:pt-32">
        <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-[2rem] bg-navy-soft sm:max-w-sm">
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
        <Heading label={c.pathLabel} title={c.pathTitle} italic={c.pathItalic} />
        <ol className="rail relative mt-8 grid gap-4 md:mt-10 md:grid-cols-4">
          {c.path.map((step, i) => (
            <li key={step.what} className="relative rounded-3xl bg-white p-5 ring-1 ring-ink/5">
              <span className="flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full font-serif text-lg italic text-white ${i === c.path.length - 1 ? 'bg-brand' : 'bg-ink'}`}>{i + 1}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{step.when}</span>
              </span>
              <p className="mt-3 text-lg font-bold">{step.what}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tint="white">
        <Heading label={c.teamLabel} title={c.teamTitle} italic={c.teamItalic} />
        <div className="rail mt-6 grid gap-6 md:mt-10 md:grid-cols-2">
          {c.people.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 sm:flex-row md:flex-col lg:flex-row">
              <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-[4/5] sm:w-48 md:aspect-[4/3] md:w-full lg:aspect-[4/5] lg:w-52">
                <Image src={p.photo} alt={p.name} fill sizes="(min-width: 1024px) 208px, (min-width: 640px) 192px, 90vw" className="object-cover object-[50%_20%]" />
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

      <Section tint="peach">
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
