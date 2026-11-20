import { ADS, OFFER, savingIfPaidNow } from '../lib/offer'
import type { HomeCopy } from './home-types'

export const homeEs: HomeCopy = {
  meta: {
    title: 'Webs para oficios y pequeñas empresas desde 800 €',
    description: `Web profesional de hasta ${OFFER.maxPages} páginas, con logo y ficha de Google incluidos: ${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses. Lista en unas 2 semanas.`,
  },
  hero: {
    label: 'Webs para profesionales de oficios y pequeñas empresas', title: 'Una web hecha para que te llamen,', italic: 'no solo para que te vean.',
    lead: `Hasta ${OFFER.maxPages} páginas, logo y ficha de Google incluidos. Online en unas ${OFFER.deliveryWeeks} semanas desde que nos envías el material.`,
    price: `**${OFFER.oneOff} € en un pago, o ${OFFER.monthly} € al mes durante ${OFFER.months} meses.** Después es tuya.`,
    ctaPrimary: 'Ver qué incluye', ctaWhatsapp: 'Escríbeme por WhatsApp', note: 'El precio está aquí. No tienes que esperar un presupuesto.',
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
  services: {
    label: '05 · Más que webs', title: '¿Necesitas algo más?', italic: 'También me encargo de esto.',
    items: [
      { key: 'googleAds', title: 'Publicidad en Google y ChatGPT', text: `Gestión de los dos canales por ${ADS.monthly} € al mes. Si la compras junto con la web, los primeros ${ADS.launchMonths} meses cuestan ${ADS.launchMonthly} € al mes. El presupuesto de anuncios lo pagas directamente a Google y OpenAI.`, tag: 'Se contrata online' },
      { key: 'agenti', title: 'Asistentes de IA en WhatsApp', text: 'Responden a tus clientes incluso de noche, dan precios y horarios y reservan citas. También por voz.', tag: 'Con presupuesto' },
      { key: 'sistemi', title: 'Sistemas automáticos a medida', text: 'Herramientas que se encargan de tareas repetitivas: presupuestos, recordatorios, facturas y llamadas de seguimiento.', tag: 'Con presupuesto' },
      { key: 'social', title: 'Contenidos y redes sociales', text: 'Creo y publico contenidos, gestiono tus perfiles y la publicidad en Facebook e Instagram.', tag: 'Con presupuesto' },
    ],
    chat: { title: 'Idraulico Rossi', status: 'responde el asistente', messages: [
      { from: 'client', text: 'Buenas noches, el grifo de la cocina pierde agua. ¿Podéis venir mañana?' },
      { from: 'agent', text: '¡Buenas noches! Mañana tenemos hueco a las 9:30 o a las 15:00. ¿Qué hora te viene mejor?' },
      { from: 'client', text: 'A las 9:30 me va muy bien' },
      { from: 'agent', text: 'Reservado ✅ Mañana a las 8 te llega un recordatorio.' },
    ] }, quoteCta: 'Para trabajos con presupuesto',
  },
  projects: { label: '06 · Trabajos realizados', title: 'Míralos aquí,', italic: 'sin salir de esta web.', intro: 'Puedes ver cada proyecto dentro de marketizzati.it, con vistas previas y animaciones que muestran cómo funciona.', cta: 'Ver todos los proyectos' },
  about: { label: '07 · Quién está detrás', title: 'Marco y Gabriela,', italic: 'personas reales detrás de tu web.', text: 'Soy Marco, desarrollador backend y creador de contenidos: me ocupo de la lógica, las automatizaciones y la IA. Gabriela Villalva, de Villalva Digital Studio, diseña y construye las webs conmigo. Sin agencias con diez intermediarios: por WhatsApp hablas con quien trabaja en tu proyecto.', badges: ['Traffic Master Certified · Florida Global University', 'IA local con Nexoft'], partnersTitle: 'Trabajo con', cta: 'Hablemos' },
  faq: {
    label: '08 · Preguntas', title: 'Lo que', italic: 'más me preguntan.',
    items: [
      { q: '¿Cuánto cuesta una web al año?', a: `${OFFER.oneOff} € en un pago, o ${OFFER.monthly} € al mes durante ${OFFER.months} meses. Después, solo dominio y correo, unos ${OFFER.hostingPerYear} € al año, pagados a VHosting.` },
      { q: '¿Puedo pagar a plazos?', a: `Sí: ${OFFER.months} cuotas de ${OFFER.monthly} €. Después de la última, la web es tuya, incluido el código. Si dejas de pagar, la web se suspende hasta que retomes los pagos.` },
      { q: '¿La web es mía?', a: 'Sí. Dominio, correo, logo y ficha de Google están a tu nombre desde el primer día. La web pasa a ser tuya tras la última cuota.' },
      { q: '¿Necesito tener un logo?', a: 'No, está incluido. Si ya lo tienes, lo ajusto.' },
      { q: 'Ya tengo ficha de Google o una web antigua.', a: 'El precio no cambia. Las arreglo o las rehago.' },
      { q: '¿Cuándo se publica?', a: 'En unas 2 semanas desde que recibo el material. Google decide los plazos de verificación de la ficha.' },
      { q: '¿Se añade IVA?', a: `No. Trabajo bajo el régimen fiscal italiano forfettario, sin IVA. Cada factura lleva ${OFFER.stampDuty} € de impuesto de timbre.` },
      { q: '¿Y después de los 30 días?', a: 'Los cambios se hacen a petición, con un pequeño presupuesto. No hay cuotas mensuales que pagarme.' },
    ],
  },
  final: { title: 'Tu web,', italic: 'publicada en dos semanas.', text: `${OFFER.oneOff} € o ${OFFER.monthly} € al mes. Logo y ficha de Google incluidos.`, ctaBuy: 'Pide una cita', ctaWhatsapp: 'Escríbeme por WhatsApp' },
}
