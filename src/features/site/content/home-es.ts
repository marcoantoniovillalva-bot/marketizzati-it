import { OFFER, savingIfPaidNow } from '../lib/offer'
import type { HomeCopy } from './home-types'

export const homeEs: HomeCopy = {
  meta: { title: "Webs, Google Ads y automatización IA | Marketizzati", description: "Webs, publicidad en Google y ChatGPT, agentes de IA y contenidos para pequeñas empresas en toda Italia." },
  hero: {
    label: "Nuestros servicios", title: "Webs y marketing digital", italic: "para pequeñas empresas", lead: "Desde tu web y publicidad hasta agentes de IA y contenidos para redes: soluciones a medida para atraer clientes y ahorrar tiempo en toda Italia.",
    price: '', ctaPrimary: "Nuestros servicios", ctaWhatsapp: 'WhatsApp', note: '',
    browser: { url: 'idraulicorossi.it', brand: 'Idraulico Rossi', headline: 'Fontanería urgente en Pavia, en el mismo día.', cta: 'Llama ahora', services: ['Fugas y averías', 'Calderas', 'Baños nuevos'] },
  },
  problem: {
    label: '02 · ¿Te suena?', title: 'Lo intentaste con Wix o ChatGPT.', italic: 'Luego llegó el trabajo de cada día.',
    text: 'Hacer tu propia web parece fácil. Luego hay que decidir qué escribir, conseguir que aparezca en Google y mantenerla al día mientras estás en una obra. Nunca hay tiempo y la web se queda a medias.',
    points: ['Otros te piden que llames para solicitar presupuesto y tardan una semana en responder.', 'Yo lo hago así: **precio público, web hecha por mí y publicada en unas 2 semanas.**'],
  },
  offer: {
    label: '03 · La oferta', title: 'Un precio público,', italic: 'sin pedir presupuesto.', marketLabel: 'Valor de mercado',
    marketDetail: `web ${OFFER.marketItems.site} € · logo ${OFFER.marketItems.logo} € · ficha de Google ${OFFER.marketItems.google} €`,
    oneOff: { title: 'Paga de una vez', note: `un solo pago · ahorras ${savingIfPaidNow} €` },
    monthly: { title: 'Paga a plazos', note: `al mes durante ${OFFER.months} meses · menos de 3,30 € al día` },
    includedTitle: 'Qué incluye',
    included: ['Logo e identidad visual. Si ya tienes, los ajusto.', `Web de hasta ${OFFER.maxPages} páginas, con textos basados en lo que buscan los clientes de tu zona.`, 'Botones de llamada y WhatsApp, y formulario de contacto.', 'Ficha de Google Business Profile: la creo o arreglo la que tienes.', 'Indexación en Google y Bing, web con HTTPS y correo profesional si lo necesitas.', `${OFFER.supportDays} días de asistencia tras la publicación.`],
    ownership: '**Después de la última cuota, la web es tuya**, incluido el código. Sin cuotas que pagarme.',
    hosting: `Aparte: dominio y correo en VHosting, unos ${OFFER.hostingPerYear} € al año, a tu nombre y pagados por ti.`,
    stamp: `+ ${OFFER.stampDuty} € de impuesto de timbre por factura (régimen fiscal italiano forfettario, sin IVA).`,
    ctaBuy: 'Pide una cita', ctaTalk: '¿Prefieres hablarlo antes?', source: 'Una web de presentación cuesta de media entre 1.000 y 3.000 € (fuentes: futuraweb.eu, uretech.it, milowebapp.it).',
  },
  steps: {
    label: '04 · Cómo funciona', title: 'Cuatro pasos,', italic: 'y tu web está publicada.',
    items: [
      { title: 'Reserva una llamada', text: 'Elige una hora en el calendario, o escríbeme por WhatsApp.' },
      { title: 'Envíame el material', text: 'Tu logo si lo tienes, fotos de tus trabajos, servicios y zonas. Después, una llamada de 20 minutos.' },
      { title: 'Escribo y construyo', text: 'La web se publica en unas 2 semanas desde que recibo el material.' },
      { title: 'Te acompaño durante 30 días', text: 'Correcciones y pequeños ajustes incluidos. Después, los cambios se presupuestan a petición.' },
    ],
  },
  stats: [
    { value: `${OFFER.oneOff} €`, label: 'en un pago, y la web es tuya' },
    { value: `${OFFER.maxPages} páginas`, label: 'con textos basados en búsquedas reales' },
    { value: '~2 semanas', label: 'desde el material hasta la publicación' },
    { value: `${OFFER.supportDays} días`, label: 'de asistencia incluida' },
  ],
  services: { label: "Nuestros servicios", title: "Cuatro soluciones,", italic: "un mismo proyecto.",
    items: [
      { key: "siti", title: "Diseño de páginas web", text: `Una web profesional con logo y ficha de Google Business incluidos. Desde ${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses.`, tag: "Webs", links: [{ key: "siti", label: "Descubre las webs" }, { key: "prezzi", label: "Ver precios" }] },
      { key: "googleAds", title: "Publicidad en Google y ChatGPT", text: "Campañas para llegar a quienes buscan tus servicios. Anuncios en ChatGPT donde están disponibles; presupuesto publicitario aparte.", tag: "Publicidad", links: [{ key: "googleAds", label: "Descubre Google Ads" }, { key: "chatgptAds", label: "Descubre ChatGPT Ads" }] },
      { key: "agenti", title: "Agentes de IA y automatización", text: "Asistentes para responder, recoger consultas y concertar citas. Automatizaciones a medida para tus procesos.", tag: "IA y automatización", links: [{ key: "agenti", label: "Descubre los agentes" }, { key: "sistemi", label: "Descubre la automatización" }] },
      { key: "social", title: "Redes sociales y vídeo", text: "Plan editorial, gestión de perfiles y contenidos para tus canales. Vídeos cortos y publicidad social con presupuesto.", tag: "Contenidos", links: [{ key: "social", label: "Descubre las redes" }, { key: "video", label: "Descubre los vídeos" }] },
    ],
    chat: { title: '', status: '', messages: [] }, quoteCta: '',
  },
  blog: { title: "Blog y guías gratuitas", text: "Consejos y guías basadas en nuestros vídeos para orientarte en el mundo digital.", cta: "Lee el blog" },
  projects: { label: '06 · Trabajos realizados', title: 'Míralos aquí,', italic: 'sin salir de esta web.', intro: 'Puedes ver cada proyecto dentro de marketizzati.it, con vistas previas y animaciones que muestran cómo funciona.', cta: 'Ver todos los proyectos' },
  about: { label: '07 · Quién está detrás', title: 'Marco y Gabriela,', italic: 'personas reales detrás de tu web.', text: 'Soy Marco, desarrollador backend y creador de contenidos: me ocupo de la lógica, las automatizaciones y la IA. Gabriela Villalva, de Villalva Digital Studio, diseña y construye las webs conmigo. Sin agencias con diez intermediarios: por WhatsApp hablas con quien trabaja en tu proyecto.', badges: ['Traffic Master Certified · Florida Global University', 'IA local con Nexoft'], partnersTitle: 'Trabajo con', cta: 'Hablemos' },
  faq: { linkLabel: "Ver precios y qué incluye",
    label: '08 · Preguntas', title: 'Lo que', italic: 'más me preguntan.',
    items: [
      { q: "¿Cuánto cuesta una página web?", a: `Desde ${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses, con logo y ficha de Google incluidos.` },
      { q: "¿Cuánto cuesta crear una web?", a: "Depende del proyecto. Consulta qué incluye la oferta y las formas de pago." },
      { q: "¿Cuál es el precio de un sitio web?", a: "Depende del proyecto. Consulta qué incluye la oferta y las formas de pago." },
      { q: "¿Cuánto cuesta una web sencilla?", a: "Depende de los contenidos y las funcionalidades. Descubre qué incluye la oferta." },
      { q: "¿Cuánto cuesta una web profesional?", a: "Depende del proyecto. Consulta qué incluye la oferta y las formas de pago." },
    ],
  },
  final: { title: 'Tu web,', italic: 'publicada en dos semanas.', text: `${OFFER.oneOff} € o ${OFFER.monthly} € al mes. Logo y ficha de Google incluidos.`, ctaBuy: 'Pide una cita', ctaWhatsapp: 'Escríbeme por WhatsApp' },
}
