import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € una volta sola oppure ${OFFER.monthly} € al mese per ${OFFER.months} mesi`

interface City {
  name: string
  /** Why this page exists, in one honest sentence about the local market. */
  market: string
  areas: string
  trades: string
}

function localPage(c: City): ServiceCopy {
  return {
    meta: {
      title: `Web agency ${c.name}: sito web per artigiani da ${OFFER.oneOff} €`,
      description: `Siti web per artigiani e piccole imprese a ${c.name} e provincia: ${price}, logo e scheda Google inclusi.`,
    },
    label: `01 · Web agency ${c.name}`,
    title: `Il tuo sito a ${c.name},`,
    italic: 'con il prezzo già scritto.',
    answer: `Realizzo siti web per artigiani e piccole imprese di **${c.name} e provincia**: fino a ${OFFER.maxPages} pagine, testi scritti su quello che cercano i clienti della tua zona, logo e scheda Google inclusi. Costa **${price}**, ed è online in circa ${OFFER.deliveryWeeks} settimane.`,
    cta: 'buy',
    visual: 'browser',
    blocks: [
      {
        label: `02 · ${c.name}`,
        title: 'Le ricerche della tua zona,',
        italic: 'non quelle di tutta Italia.',
        text: `${c.market} Per questo ogni pagina del sito nomina i comuni dove lavori davvero, e la scheda Google indica le zone servite.`,
        points: [`Zone: ${c.areas}.`, `Mestieri che seguo più spesso: ${c.trades}.`, 'Pagine dei servizi scritte sulle ricerche locali reali, con i volumi di Google.'],
      },
      {
        label: '03 · Come lavoro',
        title: 'Da remoto,',
        italic: 'ma con persone vere.',
        text: 'Lavoro da Vigevano, in Lombardia. Ci sentiamo su WhatsApp e in videochiamata, carichi il materiale nell’area clienti e in circa due settimane il sito è online. Se serve, ci vediamo.',
      },
    ],
    faq: [
      { q: `Quanto costa un sito web a ${c.name}?`, a: `Con Marketizzati ${price}, logo e scheda Google inclusi. Le agenzie della zona di solito chiedono un preventivo; qui il prezzo è scritto.` },
      { q: 'Mi serve anche la scheda Google?', a: 'Sì, per un’attività locale è spesso la prima cosa che vedono i clienti. È inclusa nel prezzo.' },
      { q: 'Posso pagare a rate?', a: `Sì: ${OFFER.months} rate da ${OFFER.monthly} €, poi il sito è tuo.` },
    ],
    related: ['prezzi', 'artigiani', 'schedaGoogle'],
  }
}

export const milanoIt = localPage({
  name: 'Milano',
  market: 'A Milano la concorrenza è alta e un clic sulle ricerche "realizzazione siti web Milano" costa in media quasi 15 € in pubblicità: farsi trovare gratis su Google, con le pagine giuste, vale ancora di più.',
  areas: 'Milano città, hinterland, Trezzano sul Naviglio, Rho, Sesto San Giovanni, Abbiategrasso',
  trades: 'idraulici, elettricisti, officine, imprese edili, serramentisti',
})

export const paviaIt = localPage({
  name: 'Pavia',
  market: 'A Pavia le ricerche per "web agency Pavia" e "realizzazione siti web Pavia" sono più che raddoppiate in un anno: sempre più persone cercano chi fa siti in zona.',
  areas: 'Pavia, Vigevano, Lomellina, Voghera, Oltrepò',
  trades: 'artigiani, impiantisti, ristoranti, estetiste, studi professionali',
})

export const lodiIt = localPage({
  name: 'Lodi',
  market: 'Nel Lodigiano molte attività vivono di passaparola, ma chi non ti conosce ti cerca su Google: un sito chiaro e una scheda completa sono il passaparola di chi arriva da fuori.',
  areas: 'Lodi, Codogno, Zelo Buon Persico, Sant’Angelo Lodigiano, Casalpusterlengo',
  trades: 'serramentisti, idraulici, elettricisti, imprese edili, giardinieri',
})

export const cremaIt = localPage({
  name: 'Crema',
  market: 'A Crema e nel Cremasco le ricerche locali sono poche ma molto mirate: chi cerca un servizio è già pronto a chiamare, e trova poca concorrenza online.',
  areas: 'Crema, Cremasco, Lodi, Soncino, Rivolta d’Adda',
  trades: 'artigiani, negozi, ristoranti, centri estetici, studi tecnici',
})
