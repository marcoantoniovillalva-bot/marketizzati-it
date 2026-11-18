import type { TourFrame } from '../components/app-tour'
import type { Locale } from '../lib/routes'

type T = Record<Locale, string>

/** Walkthrough made from the real screens of a signed-in app (scripts/make-app-tours.mjs). */
export interface Tour {
  device: 'desktop' | 'phone'
  frames: TourFrame[]
}

const TOUR = '/images/progetti/tour'

export interface SiteProject {
  id: string
  name: string
  kind: 'site'
  url: string
  /** Screenshots in /images/progetti (scripts/qa/shoot-projects.mjs). */
  desk: string
  phone: string
  /** The site refuses to be embedded: show the recorded scroll (<id>-desk.mp4 / <id>-phone.mp4) instead of the live site. */
  video?: boolean
  /** Shown instead of the live site when the app needs an account. */
  tour?: Tour
  tag: T
  text: T
}

export interface PrivateProject {
  id: string
  name: string
  kind: 'private'
  tag: T
  text: T
  /** Steps of the animated flow, used where there is no tour. */
  flow: Record<Locale, string[]>
  tour?: Tour
}

export type Project = SiteProject | PrivateProject

export const PROJECTS: Project[] = [
  {
    id: 'aigent',
    name: 'AIGENT',
    kind: 'site',
    url: 'https://officeaigent.com/',
    desk: '/images/progetti/aigent-desk.webp',
    phone: '/images/progetti/aigent-phone.webp',
    tag: { it: 'Agente AI · sito e prodotto', es: 'Agente IA · web y producto', en: 'AI agent · website and product' },
    text: {
      it: 'L’agente che risponde ai clienti delle agenzie immobiliari su WhatsApp e al telefono, 24 ore su 24: qualifica, propone la casa giusta e fissa la visita.',
      es: 'El agente que responde a los clientes de las inmobiliarias por WhatsApp y por teléfono, 24 horas al día: cualifica, propone la casa adecuada y concierta la visita.',
      en: 'The agent that answers estate agency clients on WhatsApp and on the phone, 24/7: it qualifies them, suggests the right home and books the viewing.',
    },
  },
  {
    id: 'cargo-service',
    name: 'Cargo Service',
    kind: 'site',
    url: 'https://cargo-service-landing.vercel.app/',
    desk: '/images/progetti/cargo-service-desk.webp',
    phone: '/images/progetti/cargo-service-phone.webp',
    tag: { it: 'Sito per officina · Milano', es: 'Web para taller · Milán', en: 'Workshop website · Milan' },
    text: {
      it: 'Officina per mezzi pesanti a Trezzano sul Naviglio: sito su più pagine con pulsanti per chiamare e scrivere su WhatsApp, pensato per chi ha il camion fermo.',
      es: 'Taller de vehículos pesados en Trezzano sul Naviglio: web de varias páginas con botones para llamar y escribir por WhatsApp, pensada para quien tiene el camión parado.',
      en: 'Heavy-vehicle workshop near Milan: a multi-page site with call and WhatsApp buttons, built for people whose truck is stuck.',
    },
  },
  {
    id: 'pasticceria-certosa',
    name: 'Delizie della Certosa',
    kind: 'site',
    url: 'https://pasticceria-certosa.vercel.app/',
    desk: '/images/progetti/pasticceria-certosa-desk.webp',
    phone: '/images/progetti/pasticceria-certosa-phone.webp',
    video: true,
    tag: { it: 'Sito per pasticceria · Pavia', es: 'Web para pastelería · Pavía', en: 'Bakery website · Pavia' },
    text: {
      it: 'Pasticceria, pizzeria e panificio a Certosa di Pavia: torte, dolci siciliani, pizza a domicilio e catering, con gli ordini che arrivano su WhatsApp.',
      es: 'Pastelería, pizzería y panadería en Certosa di Pavia: tartas, dulces sicilianos, pizza a domicilio y catering, con los pedidos por WhatsApp.',
      en: 'Bakery, pizzeria and bread shop in Certosa di Pavia: cakes, Sicilian pastries, pizza delivery and catering, with orders coming in on WhatsApp.',
    },
  },
  {
    id: 'gfmemories',
    name: 'GF Memories Studio',
    kind: 'site',
    url: 'https://gfmemories.vercel.app/',
    desk: '/images/progetti/gfmemories-desk.webp',
    phone: '/images/progetti/gfmemories-phone.webp',
    tag: { it: 'Sito per fotografo · Pavia', es: 'Web para fotógrafo · Pavía', en: 'Photographer website · Pavia' },
    text: {
      it: 'Fotografo a Mortara: cani, gatti, book e riprese con il drone. Un sito elegante, pensato per le ricerche della zona e per prenotare su WhatsApp.',
      es: 'Fotógrafo en Mortara: perros, gatos, books y tomas con dron. Una web elegante, pensada para las búsquedas de la zona y para reservar por WhatsApp.',
      en: 'Photographer in Mortara: dogs, cats, portfolios and drone shots. An elegant site built around local searches and WhatsApp bookings.',
    },
  },
  {
    id: 'jpower',
    name: 'JPower Electric',
    kind: 'site',
    url: 'https://jpower-usa.vercel.app/',
    desk: '/images/progetti/jpower-desk.webp',
    phone: '/images/progetti/jpower-phone.webp',
    tag: { it: 'Sito per elettricista · Miami (USA)', es: 'Web para electricista · Miami (EE. UU.)', en: 'Electrician website · Miami (USA)' },
    text: {
      it: 'Elettricisti a Miami: sito in inglese con servizi, domande frequenti e pulsante per chiamare sempre a portata di mano. Lo stesso metodo funziona anche fuori dall’Italia.',
      es: 'Electricistas en Miami: web en inglés con servicios, preguntas frecuentes y botón para llamar siempre a mano. El mismo método funciona también fuera de Italia.',
      en: 'Electricians in Miami: an English-language site with services, FAQs and a call button always within reach. The same method works outside Italy too.',
    },
  },
  {
    id: 'lurumi',
    name: 'lurumi.it',
    kind: 'site',
    url: 'https://lurumi.it',
    desk: '/images/progetti/lurumi-desk.webp',
    phone: '/images/progetti/lurumi-phone.webp',
    tour: {
      device: 'phone',
      frames: [
        { src: `${TOUR}/lurumi-1-progetti.webp`, caption: { it: 'I tuoi lavori, con video e schemi', es: 'Tus proyectos, con vídeos y patrones', en: 'Your projects, with videos and patterns' } },
        { src: `${TOUR}/lurumi-2-utensili.webp`, caption: { it: 'Strumenti AI per l’uncinetto', es: 'Herramientas de IA para ganchillo', en: 'AI tools for crochet' } },
        { src: `${TOUR}/lurumi-3-designer.webp`, caption: { it: 'Il Designer AI crea idee di pattern', es: 'El Designer AI crea ideas de patrones', en: 'The AI Designer creates pattern ideas' } },
        { src: `${TOUR}/lurumi-4-progetto.webp`, caption: { it: 'Contatore giri, timer e foto', es: 'Contador de vueltas, temporizador y fotos', en: 'Row counter, timer and photos' } },
      ],
    },
    tag: { it: 'Web app · costruita in meno di un mese', es: 'Web app · hecha en menos de un mes', en: 'Web app · built in under a month' },
    text: {
      it: 'App per chi crea amigurumi: carichi un pattern o un’immagine e organizzi i tuoi lavori. Dall’idea all’app online in meno di un mese.',
      es: 'App para quien crea amigurumis: subes un patrón o una imagen y organizas tus proyectos. De la idea a la app online en menos de un mes.',
      en: 'An app for amigurumi makers: upload a pattern or an image and organise your projects. From idea to live app in under a month.',
    },
  },
  {
    id: 'prospectbot',
    name: 'ProspectBot',
    kind: 'private',
    tag: { it: 'Privato per i clienti', es: 'Privado para clientes', en: 'Private, for clients' },
    text: {
      it: 'Automatizza la raccolta dei contatti da Google Maps, le informazioni su ogni attività e il follow-up: prepara la proposta e fa chiamare un agente vocale che fissa l’appuntamento.',
      es: 'Automatiza la captación de contactos en Google Maps, la información de cada negocio y el seguimiento: prepara la propuesta y hace llamar a un agente de voz que concierta la cita.',
      en: 'Automates lead collection from Google Maps, the details on each business and the follow-up: it prepares the proposal and has a voice agent call to book a meeting.',
    },
    flow: {
      it: ['Cerca attività senza sito', 'Raccoglie i dati', 'Prepara la proposta', 'L’agente vocale chiama', 'Appuntamento in agenda'],
      es: ['Busca negocios sin web', 'Recoge los datos', 'Prepara la propuesta', 'El agente de voz llama', 'Cita en la agenda'],
      en: ['Finds businesses with no site', 'Gathers the details', 'Prepares the proposal', 'The voice agent calls', 'Meeting in the calendar'],
    },
    tour: {
      device: 'desktop',
      frames: [
        { src: `${TOUR}/prospect-2-ricerca.webp`, click: [50, 90], caption: { it: 'Cerca attività senza sito, per mestiere e zona', es: 'Busca negocios sin web, por oficio y zona', en: 'Finds businesses with no website, by trade and area' } },
        { src: `${TOUR}/prospect-1-dashboard.webp`, click: [29, 48], caption: { it: 'I contatti trovati, divisi per categoria', es: 'Los contactos encontrados, por categoría', en: 'The leads found, sorted by category' } },
        { src: `${TOUR}/prospect-3-scheda.webp`, click: [31, 20], caption: { it: 'La scheda di ogni attività', es: 'La ficha de cada negocio', en: 'A sheet for every business' } },
        { src: `${TOUR}/prospect-4-callagent.webp`, click: [55, 45], caption: { it: 'L’agente vocale prepara e fa la chiamata', es: 'El agente de voz prepara y hace la llamada', en: 'The voice agent prepares and makes the call' } },
        { src: `${TOUR}/prospect-5-pdf.webp`, click: [71, 10], caption: { it: 'Il report SEO in PDF per la proposta', es: 'El informe SEO en PDF para la propuesta', en: 'The SEO report PDF for the proposal' } },
      ],
    },
  },
  {
    id: 'zernflow',
    name: 'Marketizzati Flow',
    kind: 'private',
    tag: { it: 'Privato per i clienti', es: 'Privado para clientes', en: 'Private, for clients' },
    text: {
      it: 'Automatizza la pubblicazione dei contenuti e il follow-up: un video esce su tutti i social insieme e chi commenta riceve il messaggio giusto in automatico.',
      es: 'Automatiza la publicación de contenidos y el seguimiento: un vídeo sale en todas las redes a la vez y quien comenta recibe el mensaje adecuado automáticamente.',
      en: 'Automates content publishing and the follow-up: one video goes out on every social channel at once and commenters get the right message automatically.',
    },
    flow: {
      it: ['Arriva una richiesta', 'La smista da solo', 'Risponde o richiama', 'Aggiorna il gestionale', 'Ti avvisa solo se serve'],
      es: ['Llega una solicitud', 'La clasifica solo', 'Responde o devuelve la llamada', 'Actualiza el sistema', 'Te avisa solo si hace falta'],
      en: ['A request comes in', 'It sorts it alone', 'It replies or calls back', 'It updates your system', 'It pings you only if needed'],
    },
    tour: {
      device: 'desktop',
      frames: [
        { src: `${TOUR}/zern-2-channels.webp`, click: [89, 7], caption: { it: 'Tutti i canali social collegati', es: 'Todas las redes conectadas', en: 'Every social channel connected' } },
        { src: `${TOUR}/zern-1-publish.webp`, click: [33, 55], caption: { it: 'Un video, pubblicato su tutti i canali', es: 'Un vídeo, publicado en todos los canales', en: 'One video, published on every channel' } },
        { src: `${TOUR}/zern-3-growth.webp`, click: [88, 7], caption: { it: 'Chi commenta riceve il messaggio in automatico', es: 'Quien comenta recibe el mensaje automáticamente', en: 'Commenters get the message automatically' } },
      ],
    },
  },
]

/** Direct collaborators only. */
export const PARTNERS = [
  { name: 'Villalva Digital Studio', url: 'https://www.villalvadigitalstudio.com/' },
  { name: 'Nexoft', url: 'https://www.nexoft.it/' },
] as const
