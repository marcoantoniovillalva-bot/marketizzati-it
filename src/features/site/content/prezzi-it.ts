import type { CheckoutCopy } from '@/features/checkout/components/checkout-form'
import type { FaqItem } from '../components/ui'
import { ADS, OFFER } from '../lib/offer'

export interface PricesCopy {
  meta: { title: string; description: string }
  label: string
  title: string
  italic: string
  answer: string
  compare: { label: string; title: string; italic: string; columns: string[]; rows: { label: string; values: string[] }[]; note: string }
  ads: { label: string; title: string; italic: string; text: string; points: string[] }
  buy: { label: string; title: string; italic: string; intro: string }
  checkout: CheckoutCopy
  faq: { label: string; title: string; italic: string; items: FaqItem[] }
}

export const prezziIt: PricesCopy = {
  meta: {
    title: `Quanto costa un sito web? ${OFFER.oneOff} € o ${OFFER.monthly} €/mese, logo incluso | Marketizzati`,
    description: `Quanto costa un sito web nel 2026: con Marketizzati ${OFFER.oneOff} € una volta sola oppure ${OFFER.monthly} € al mese per ${OFFER.months} mesi, logo e scheda Google inclusi. Prezzo scritto, acquisto online.`,
  },
  label: '01 · Prezzi',
  title: 'Quanto costa un sito web?',
  italic: 'Te lo scrivo qui.',
  answer: `Un sito professionale con Marketizzati costa **${OFFER.oneOff} € in un’unica soluzione** oppure **${OFFER.monthly} € al mese per ${OFFER.months} mesi**, con logo, scheda Google, fino a ${OFFER.maxPages} pagine e ${OFFER.supportDays} giorni di assistenza inclusi. Dopo l’ultima rata il sito è tuo. A parte paghi solo dominio ed email, circa ${OFFER.hostingPerYear} € l’anno.`,
  compare: {
    label: '02 · Confronto',
    title: 'Cosa paghi davvero,',
    italic: 'a confronto.',
    columns: ['Marketizzati', 'Agenzia classica', 'Fai da te (Wix, ChatGPT)'],
    rows: [
      { label: 'Prezzo', values: [`${OFFER.oneOff} € o ${OFFER.monthly} €/mese × ${OFFER.months}`, '1.000–3.000 € e oltre, su preventivo', 'Abbonamento al builder, ogni anno'] },
      { label: 'Logo', values: ['Incluso', 'Spesso a parte', 'Lo fai tu'] },
      { label: 'Scheda Google', values: ['Inclusa, creata o sistemata', 'Spesso a parte', 'La fai tu'] },
      { label: 'Testi', values: ['Scritti sulle ricerche della tua zona', 'Dipende', 'Li scrivi tu'] },
      { label: 'Il sito è tuo', values: ['Sì, codice compreso', 'Dipende dal contratto', 'No: resta sul builder'] },
      { label: 'Chi ti risponde', values: ['Marco, su WhatsApp', 'Un account manager', 'Nessuno'] },
    ],
    note: 'Prezzi di mercato indicativi: un sito vetrina costa in media 1.000–3.000 € (futuraweb.eu, uretech.it, milowebapp.it).',
  },
  ads: {
    label: '03 · Pubblicità',
    title: 'Vuoi anche le prime chiamate?',
    italic: 'Aggiungi la pubblicità.',
    text: `Mentre il sito cresce sulle ricerche gratuite, la pubblicità su Google e ChatGPT porta le prime richieste. Se la prendi insieme al sito, i primi ${ADS.launchMonths} mesi di gestione costano ${ADS.launchMonthly} € al mese; poi si ferma da sola, e se vuoi continuare la gestione costa ${ADS.monthly} € al mese.`,
    points: [
      'Gestione di Google Ads e ChatGPT Ads insieme.',
      `Budget pubblicitario da ${ADS.minBudgetMonthly} € al mese, pagato direttamente a Google e OpenAI.`,
      'Gli account pubblicitari sono intestati a te.',
      'Nessuna promessa di numeri: ti mostro cosa succede, ogni mese.',
    ],
  },
  buy: {
    label: '04 · Acquista',
    title: 'Scegli come pagare,',
    italic: 'e partiamo.',
    intro: 'Paghi in modo sicuro con Stripe. Subito dopo ti arriva l’accesso all’area clienti, dove carichi logo, foto e informazioni.',
  },
  checkout: {
    planTitle: 'Cosa vuoi acquistare',
    plans: {
      site_oneoff: { title: 'Sito · paghi subito', note: `Una volta sola, risparmi ${OFFER.monthly * OFFER.months - OFFER.oneOff} €` },
      site_monthly: { title: 'Sito · a rate', note: `${OFFER.months} rate mensili, poi il sito è tuo` },
      ads_only: { title: 'Solo pubblicità', note: 'Gestione Google + ChatGPT, disdici quando vuoi' },
    },
    adsLaunch: `Aggiungi la pubblicità su Google e ChatGPT: ${ADS.launchMonths} mesi di gestione a ${ADS.launchMonthly} € al mese, poi si ferma da sola. Il budget per gli annunci lo paghi a parte, direttamente alle piattaforme.`,
    fields: {
      fullName: 'Nome e cognome',
      businessName: 'Ragione sociale o nome attività',
      taxCode: 'Partita IVA o codice fiscale',
      invoiceChannel: 'Codice SDI o PEC',
      email: 'Email',
      phone: 'Telefono',
    },
    accept: `Ho letto e accetto le {link} e l’informativa privacy. Se pago a rate, so che se le rate si interrompono il sito viene sospeso finché non riprendo a pagare.`,
    termsLabel: 'condizioni di vendita',
    submit: 'Vai al pagamento sicuro',
    loading: 'Ti porto al pagamento…',
    error: 'Il pagamento non è partito. Riprova tra poco, oppure scrivimi su WhatsApp.',
    talk: 'Preferisci parlarne prima? Scrivimi su WhatsApp',
    secure: `Pagamento con Stripe. Regime forfettario, niente IVA: su ogni fattura c’è una marca da bollo da ${OFFER.stampDuty} €.`,
  },
  faq: {
    label: '05 · Domande',
    title: 'Domande sul prezzo,',
    italic: 'risposte chiare.',
    items: [
      { q: 'Quanto costa un sito web al mese?', a: `${OFFER.monthly} € al mese per ${OFFER.months} mesi (${OFFER.monthly * OFFER.months} € in tutto). Poi niente canoni: paghi solo dominio ed email, circa ${OFFER.hostingPerYear} € l’anno.` },
      { q: 'Quanto costa un sito web all’anno?', a: `Il primo anno ${OFFER.oneOff} € (o ${OFFER.monthly * OFFER.months} € a rate) più circa ${OFFER.hostingPerYear} € di dominio ed email. Dal secondo anno solo i ${OFFER.hostingPerYear} €.` },
      { q: 'Perché costa meno di un’agenzia?', a: 'Perché lo faccio io, senza passaggi in mezzo, con un metodo già usato per altri artigiani. Il lavoro è lo stesso: logo, testi, scheda Google, sito su più pagine.' },
      { q: 'Cosa succede se smetto di pagare le rate?', a: 'Il sito viene sospeso finché non riprendi a pagare. Quando le rate sono finite, il sito è tuo e non paghi più nulla a me.' },
      { q: 'Posso pagare subito e poi aggiungere la pubblicità?', a: `Sì, ma lo sconto dei primi ${ADS.launchMonths} mesi a ${ADS.launchMonthly} € vale solo se la prendi insieme al sito. Da sola la gestione costa ${ADS.monthly} € al mese.` },
      { q: 'C’è l’IVA?', a: `No, lavoro in regime forfettario. Su ogni fattura sopra i 77,47 € c’è una marca da bollo da ${OFFER.stampDuty} €.` },
      { q: 'Ho già un sito: posso rifarlo con questa offerta?', a: 'Sì, il prezzo è lo stesso. Riprendo i contenuti buoni e sistemo logo e scheda Google se li hai già.' },
    ],
  },
}
