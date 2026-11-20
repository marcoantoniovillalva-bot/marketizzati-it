import type { PricesCopy } from './prezzi-it'
import { ADS, OFFER } from '../lib/offer'

export const prezziEs: PricesCopy = {
  meta: {
    title: `¿Cuánto cuesta una web? ${OFFER.oneOff} € o ${OFFER.monthly} €/mes, logo incluido`,
    description: `Precios de una web en 2026: ${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses, con logo y ficha de Google incluidos. Precio público.`,
  },
  label: '01 · Precios', title: '¿Cuánto cuesta una web?', italic: 'Aquí tienes el precio.',
  answer: `Una web profesional con Marketizzati cuesta **${OFFER.oneOff} € en un pago** o **${OFFER.monthly} € al mes durante ${OFFER.months} meses**, con logo, ficha de Google, hasta ${OFFER.maxPages} páginas y ${OFFER.supportDays} días de asistencia incluidos. Después de la última cuota, la web es tuya. Aparte solo pagas dominio y correo, unos ${OFFER.hostingPerYear} € al año.`,
  compare: {
    label: '02 · Comparación', title: 'Lo que pagas de verdad,', italic: 'opción por opción.',
    columns: ['Marketizzati', 'Agencia tradicional', 'Por tu cuenta (Wix, ChatGPT)'],
    rows: [
      { label: 'Precio', values: [`${OFFER.oneOff} € o ${OFFER.monthly} €/mes × ${OFFER.months}`, '1.000–3.000 € o más, con presupuesto', 'Suscripción al creador de webs, cada año'] },
      { label: 'Logo', values: ['Incluido', 'A menudo aparte', 'Lo haces tú'] },
      { label: 'Ficha de Google', values: ['Incluida, nueva o revisada', 'A menudo aparte', 'La haces tú'] },
      { label: 'Textos', values: ['Basados en búsquedas de tu zona', 'Depende', 'Los escribes tú'] },
      { label: 'La web es tuya', values: ['Sí, incluido el código', 'Depende del contrato', 'No: se queda en la plataforma'] },
      { label: 'Quién te responde', values: ['Marco, por WhatsApp', 'Un gestor de cuentas', 'Nadie'] },
    ],
    note: 'Precios de mercado orientativos: una web de presentación cuesta de media entre 1.000 y 3.000 € (futuraweb.eu, uretech.it, milowebapp.it).',
  },
  ads: {
    label: '03 · Publicidad', title: '¿También quieres anunciarte?', italic: 'Añade publicidad.',
    text: `Puedes añadir publicidad en Google y ChatGPT a tu web. Si la compras junto con la web, los primeros ${ADS.launchMonths} meses de gestión cuestan ${ADS.launchMonthly} € al mes. Después se detiene automáticamente. Si quieres continuar, la gestión cuesta ${ADS.monthly} € al mes.`,
    points: ['Gestión conjunta de Google Ads y ChatGPT Ads.', `Presupuesto de anuncios desde ${ADS.minBudgetMonthly} € al mes, pagado directamente a Google y OpenAI.`, 'Las cuentas publicitarias están a tu nombre.', 'Sin prometer cifras: cada mes te muestro qué ocurre.'],
  },
  buy: { label: '04 · Compra', title: 'Elige cómo pagar,', italic: 'y empezamos.', intro: 'Paga de forma segura con Stripe. Después recibes acceso al área de clientes para subir tu logo, fotos e información.' },
  faq: {
    label: '05 · Preguntas', title: 'Preguntas sobre el precio,', italic: 'respuestas claras.',
    items: [
      { q: '¿Cuánto cuesta una web al mes?', a: `${OFFER.monthly} € al mes durante ${OFFER.months} meses (${OFFER.monthly * OFFER.months} € en total). Después no hay cuotas: solo dominio y correo, unos ${OFFER.hostingPerYear} € al año.` },
      { q: '¿Cuánto cuesta una web al año?', a: `El primer año, ${OFFER.oneOff} € (o ${OFFER.monthly * OFFER.months} € a plazos), más unos ${OFFER.hostingPerYear} € de dominio y correo. Desde el segundo año, solo ${OFFER.hostingPerYear} €.` },
      { q: '¿Por qué cuesta menos que una agencia?', a: 'Porque lo hago yo, sin intermediarios, con un método que ya he usado para otros profesionales. El trabajo incluye logo, textos, ficha de Google y una web de varias páginas.' },
      { q: '¿Qué pasa si dejo de pagar las cuotas?', a: 'La web se suspende hasta que retomes los pagos. Cuando terminas de pagarlas, la web es tuya y no tienes que pagarme más cuotas.' },
      { q: '¿Puedo pagar de una vez y añadir publicidad después?', a: `Sí, pero el descuento de los primeros ${ADS.launchMonths} meses a ${ADS.launchMonthly} € solo se aplica si la compras junto con la web. Por separado, la gestión cuesta ${ADS.monthly} € al mes.` },
      { q: '¿Se añade IVA?', a: `No, trabajo bajo el régimen fiscal italiano forfettario. Cada factura superior a 77,47 € lleva ${OFFER.stampDuty} € de impuesto de timbre.` },
      { q: '¿Puedo renovar mi web con esta oferta?', a: 'Sí, el precio es el mismo. Aprovecho los contenidos útiles y ajusto el logo y la ficha de Google si ya los tienes.' },
    ],
  },
}
