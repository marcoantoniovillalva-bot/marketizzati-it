import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months`

interface City { name: string; market: string; areas: string; trades: string }

function localPage(c: City): ServiceCopy {
  return {
    meta: {
      title: `Web design in ${c.name}: websites for tradespeople from ${OFFER.oneOff} €`,
      description: `Websites for tradespeople in ${c.name} and province: ${OFFER.oneOff} € upfront or ${OFFER.monthly} €/month for ${OFFER.months} months, logo and Google profile included.`,
    },
    label: `01 · Web design in ${c.name}`, title: `Your website in ${c.name},`, italic: 'with the price already here.',
    answer: `I build websites for tradespeople and small businesses in **${c.name} and the surrounding province**: up to ${OFFER.maxPages} pages, text based on what local customers search for, logo and Google profile included. It costs **${price}** and goes online in around ${OFFER.deliveryWeeks} weeks.`,
    cta: 'buy', visual: 'browser',
    blocks: [
      { label: `02 · ${c.name}`, title: 'Searches from your area,', italic: 'with a local focus.', text: `${c.market} That is why each page names the towns where you actually work, and your Google profile lists your service areas.`, points: [`Areas: ${c.areas}.`, `Trades and businesses I work with most: ${c.trades}.`, 'Service pages based on real local searches, with Google search volumes.'] },
      { label: '03 · How I work', title: 'Working remotely,', italic: 'with real people.', text: 'I work from Vigevano, in Lombardy. We talk on WhatsApp and video calls, you upload your material to the client area, and your website goes online in around two weeks. We can meet if needed.' },
    ],
    faq: [
      { q: `How much does a website cost in ${c.name}?`, a: `With Marketizzati, ${price}, logo and Google profile included. Local agencies usually ask you to request a quote. Here, the price is public.` },
      { q: 'Do I need a Google profile too?', a: 'Yes. For a local business, it is often the first thing customers see. It is included in the price.' },
      { q: 'Can I pay in instalments?', a: `Yes: ${OFFER.months} instalments of ${OFFER.monthly} €, then the website is yours.` },
    ], related: ['prezzi', 'artigiani', 'schedaGoogle'],
  }
}

export const milanoEn: ServiceCopy = localPage({
  name: 'Milan',
  market: 'Competition in Milan is high. An ad click for "realizzazione siti web Milano" costs almost 15 € on average. Pages that help people find you in unpaid Google searches matter here.',
  areas: 'Milan city, surrounding towns, Trezzano sul Naviglio, Rho, Sesto San Giovanni, Abbiategrasso',
  trades: 'plumbers, electricians, garages, building companies, window fitters',
})
export const paviaEn: ServiceCopy = localPage({
  name: 'Pavia',
  market: 'In Pavia, searches for "web agency Pavia" and "realizzazione siti web Pavia" more than doubled in a year. More people are looking for someone local to build a website.',
  areas: 'Pavia, Vigevano, Lomellina, Voghera, Oltrepò',
  trades: 'tradespeople, installation companies, restaurants, beauty salons, professional practices',
})
export const lodiEn: ServiceCopy = localPage({
  name: 'Lodi',
  market: 'Many businesses around Lodi rely on word of mouth. People who do not know you look on Google. A clear website and a complete profile help them understand what you do.',
  areas: 'Lodi, Codogno, Zelo Buon Persico, Sant’Angelo Lodigiano, Casalpusterlengo',
  trades: 'window fitters, plumbers, electricians, building companies, gardeners',
})
export const cremaEn: ServiceCopy = localPage({
  name: 'Crema',
  market: 'In Crema and the Cremasco area, local searches are few but specific. People look for a particular service, with little online competition.',
  areas: 'Crema, Cremasco, Lodi, Soncino, Rivolta d’Adda',
  trades: 'tradespeople, shops, restaurants, beauty salons, technical practices',
})
