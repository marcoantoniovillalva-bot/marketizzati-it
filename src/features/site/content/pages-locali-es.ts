import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses`

interface City { name: string; market: string; areas: string; trades: string }

function localPage(c: City): ServiceCopy {
  return {
    meta: {
      title: `Diseño web en ${c.name}: webs para profesionales desde ${OFFER.oneOff} € | Marketizzati`,
      description: `Webs para profesionales de oficios y pequeñas empresas en ${c.name} y su provincia: ${price}, logo y ficha de Google incluidos. Precio público, respuesta por WhatsApp.`,
    },
    label: `01 · Diseño web en ${c.name}`, title: `Tu web en ${c.name},`, italic: 'con el precio ya publicado.',
    answer: `Creo webs para profesionales de oficios y pequeñas empresas de **${c.name} y su provincia**: hasta ${OFFER.maxPages} páginas, textos basados en lo que buscan tus clientes, logo y ficha de Google incluidos. Cuesta **${price}** y se publica en unas ${OFFER.deliveryWeeks} semanas.`,
    cta: 'buy', visual: 'browser',
    blocks: [
      { label: `02 · ${c.name}`, title: 'Las búsquedas de tu zona,', italic: 'con un enfoque local.', text: `${c.market} Por eso cada página menciona los municipios donde trabajas de verdad, y tu ficha de Google indica las zonas de servicio.`, points: [`Zonas: ${c.areas}.`, `Oficios y negocios con los que más trabajo: ${c.trades}.`, 'Páginas de servicios basadas en búsquedas locales reales, con volúmenes de Google.'] },
      { label: '03 · Cómo trabajo', title: 'A distancia,', italic: 'pero con personas reales.', text: 'Trabajo desde Vigevano, en Lombardía. Hablamos por WhatsApp y videollamada, subes el material al área de clientes y en unas dos semanas tu web está publicada. Si hace falta, nos vemos.' },
    ],
    faq: [
      { q: `¿Cuánto cuesta una web en ${c.name}?`, a: `Con Marketizzati, ${price}, con logo y ficha de Google incluidos. Las agencias de la zona suelen pedir que solicites presupuesto. Aquí el precio es público.` },
      { q: '¿Necesito también una ficha de Google?', a: 'Sí. Para un negocio local suele ser lo primero que ven los clientes. Está incluida en el precio.' },
      { q: '¿Puedo pagar a plazos?', a: `Sí: ${OFFER.months} cuotas de ${OFFER.monthly} €. Después, la web es tuya.` },
    ], related: ['prezzi', 'artigiani', 'schedaGoogle'],
  }
}

export const milanoEs: ServiceCopy = localPage({
  name: 'Milán',
  market: 'En Milán hay mucha competencia. Un clic de anuncio para "realizzazione siti web Milano" cuesta de media casi 15 €. Por eso importan las páginas que permiten encontrarte en las búsquedas gratuitas de Google.',
  areas: 'Milán ciudad, alrededores, Trezzano sul Naviglio, Rho, Sesto San Giovanni, Abbiategrasso',
  trades: 'fontaneros, electricistas, talleres, empresas de construcción, instaladores de ventanas',
})
export const paviaEs: ServiceCopy = localPage({
  name: 'Pavia',
  market: 'En Pavia, las búsquedas de "web agency Pavia" y "realizzazione siti web Pavia" se han más que duplicado en un año. Cada vez más personas buscan a alguien de la zona que haga webs.',
  areas: 'Pavia, Vigevano, Lomellina, Voghera, Oltrepò',
  trades: 'profesionales de oficios, instaladores, restaurantes, centros de estética, despachos profesionales',
})
export const lodiEs: ServiceCopy = localPage({
  name: 'Lodi',
  market: 'Muchos negocios de la zona de Lodi viven del boca a boca. Quien no te conoce te busca en Google. Una web clara y una ficha completa le ayudan a entender qué haces.',
  areas: 'Lodi, Codogno, Zelo Buon Persico, Sant’Angelo Lodigiano, Casalpusterlengo',
  trades: 'instaladores de ventanas, fontaneros, electricistas, empresas de construcción, jardineros',
})
export const cremaEs: ServiceCopy = localPage({
  name: 'Crema',
  market: 'En Crema y el Cremasco hay pocas búsquedas locales, pero son muy concretas. La gente busca un servicio específico y encuentra poca competencia online.',
  areas: 'Crema, Cremasco, Lodi, Soncino, Rivolta d’Adda',
  trades: 'profesionales de oficios, tiendas, restaurantes, centros de estética, oficinas técnicas',
})
