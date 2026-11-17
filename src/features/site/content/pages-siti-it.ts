import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € una volta sola oppure ${OFFER.monthly} € al mese per ${OFFER.months} mesi`

export const sitiIt: ServiceCopy = {
  meta: {
    title: `Realizzazione siti web professionali da ${OFFER.oneOff} € | Marketizzati`,
    description: `Realizzazione siti web per artigiani e piccole imprese in Lombardia: fino a ${OFFER.maxPages} pagine, testi sulle ricerche reali, logo e scheda Google inclusi. ${price}.`,
  },
  label: '01 · Realizzazione siti web',
  title: 'Un sito che ti fa',
  italic: 'chiamare, non solo guardare.',
  answer: `Realizzo **siti web professionali su più pagine** per artigiani e piccole imprese: testi scritti su quello che i clienti della tua zona cercano su Google, pulsanti per chiamarti e scriverti, logo e scheda Google inclusi. Costa **${price}**, ed è online in circa ${OFFER.deliveryWeeks} settimane.`,
  cta: 'buy',
  visual: 'browser',
  blocks: [
    {
      label: '02 · Il metodo',
      title: 'Prima le ricerche,',
      italic: 'poi le pagine.',
      text: 'Non parto dal modello grafico. Parto da cosa scrivono le persone su Google quando hanno bisogno di te: "idraulico Pavia urgente", "tapparella bloccata chi chiamare". Ogni servizio importante diventa una pagina che risponde a quella ricerca.',
      points: [
        'Ricerca delle parole chiave della tua zona, con i volumi reali.',
        `Struttura fino a ${OFFER.maxPages} pagine: una per servizio, più contatti, Privacy e Cookie.`,
        'Testi chiari, in seconda persona, senza gergo.',
        'Titoli e descrizioni curati pagina per pagina, sitemap, Search Console e Bing Webmaster Tools.',
      ],
    },
    {
      label: '03 · Pensato per il telefono',
      title: 'Chi ti cerca ha fretta,',
      italic: 'e ha il telefono in mano.',
      text: 'La maggior parte di chi cerca un artigiano lo fa dal telefono, spesso con un problema da risolvere subito. Il sito si apre veloce e mette davanti quello che serve: chiamare, scrivere su WhatsApp, vedere dove lavori.',
      points: ['Pulsante "Chiama" sempre visibile.', 'WhatsApp con un tocco.', 'Modulo contatti che ti arriva via email.', 'Foto dei tuoi lavori, zone e orari in chiaro.'],
    },
    {
      label: '04 · Cosa resta a te',
      title: 'Il sito è tuo,',
      italic: 'non in affitto.',
      text: 'Dominio, email, logo e scheda Google sono intestati a te dal primo giorno. Dopo l’ultima rata anche il sito, codice compreso. Non c’è un canone per tenerlo online: paghi solo dominio ed email, circa 32 € l’anno.',
    },
  ],
  faq: [
    { q: 'Quanto costa la realizzazione di un sito web?', a: `Con Marketizzati ${price}, con logo, scheda Google e ${OFFER.supportDays} giorni di assistenza inclusi.` },
    { q: 'Quante pagine ha il sito?', a: `Fino a ${OFFER.maxPages}, più Privacy e Cookie. Di solito: home, una pagina per ogni servizio principale, chi siamo e contatti.` },
    { q: 'Scrivi tu i testi?', a: 'Sì. Li scrivo sulle ricerche reali dei clienti della tua zona; tu li rileggi e mi dici cosa cambiare.' },
    { q: 'Che piattaforma usi?', a: 'Un sito su misura, veloce e leggero, non un tema preso da un catalogo. Alla fine il codice è tuo.' },
  ],
  related: ['prezzi', 'artigiani', 'schedaGoogle'],
}

export const artigianiIt: ServiceCopy = {
  meta: {
    title: 'Sito web per artigiani: idraulici, elettricisti, serramentisti | Marketizzati',
    description: `Sito web per artigiani e piccole imprese: idraulico, elettricista, serramentista, impresa edile, estetista, ristorante. ${price}, logo e scheda Google inclusi.`,
  },
  label: '01 · Sito per artigiani',
  title: 'Il sito per chi lavora',
  italic: 'con le mani.',
  answer: `Un sito web per artigiani con Marketizzati costa **${price}**, logo e scheda Google inclusi. È pensato per chi lavora tutto il giorno e non ha tempo: mi mandi foto e informazioni, al resto penso io, e in circa ${OFFER.deliveryWeeks} settimane sei online.`,
  cta: 'buy',
  visual: 'browser',
  blocks: [
    {
      label: '02 · Per mestiere',
      title: 'Ogni mestiere',
      italic: 'ha le sue ricerche.',
      text: 'Le persone non cercano "artigiano". Cercano il problema che hanno. Il sito parte da lì.',
      cards: [
        { title: 'Idraulico', text: 'Pronto intervento, perdite, caldaie, bagni nuovi: una pagina per ogni urgenza, con il pulsante per chiamarti in alto.' },
        { title: 'Elettricista', text: 'Impianti, guasti, quadri elettrici, colonnine di ricarica, certificazioni: chi ti cerca vuole sapere se fai il suo lavoro e in che zona.' },
        { title: 'Serramenti e tapparelle', text: 'Riparazione tapparelle, zanzariere, tende da sole, infissi: tante ricerche piccole e locali, ognuna con la sua pagina.' },
        { title: 'Impresa edile', text: 'Ristrutturazioni, bagni, facciate: foto prima e dopo, zone servite e una richiesta di sopralluogo semplice.' },
        { title: 'Estetista e parrucchiere', text: 'Servizi, prezzi indicativi, orari e prenotazione su WhatsApp. La scheda Google conta quanto il sito.' },
        { title: 'Ristorante e bar', text: 'Menù sempre aggiornato, orari, come arrivare e prenotazione. Niente PDF illeggibili dal telefono.' },
      ],
    },
    {
      label: '03 · Il tuo tempo',
      title: 'A te chiedo',
      italic: 'venti minuti.',
      points: [
        'Mi mandi logo (se ce l’hai), foto dei lavori, servizi, zone e orari dall’area clienti.',
        'Facciamo una call di 20 minuti.',
        'Ti mando il sito da rileggere, tu mi dici cosa cambiare.',
        'Va online, e per 30 giorni le correzioni sono incluse.',
      ],
    },
  ],
  faq: [
    { q: 'Quanto costa un sito per un idraulico o un elettricista?', a: `Lo stesso per tutti i mestieri: ${price}, logo e scheda Google inclusi.` },
    { q: 'Non ho foto professionali, è un problema?', a: 'No. Vanno bene le foto fatte col telefono dei tuoi lavori: le sistemo io. Se servono, uso anche immagini di repertorio.' },
    { q: 'Posso pagare a rate?', a: `Sì: ${OFFER.months} rate da ${OFFER.monthly} €. Dopo l’ultima il sito è tuo.` },
    { q: 'Lavoro in più comuni: li metti tutti?', a: 'Sì, le zone dove lavori vanno sia sul sito sia nella scheda Google.' },
  ],
  related: ['prezzi', 'siti', 'schedaGoogle'],
}

export const schedaIt: ServiceCopy = {
  meta: {
    title: 'Scheda Google Business Profile: come crearla e farla funzionare | Marketizzati',
    description: 'Guida alla scheda Google Business Profile (Google My Business) per artigiani: creazione, verifica, categorie, foto, recensioni. Oppure la creo io, inclusa nel sito.',
  },
  label: '01 · Scheda Google',
  title: 'La scheda Google,',
  italic: 'la vetrina che vedono per prima.',
  answer: `La **scheda Google Business Profile** (ex Google My Business) è il riquadro con nome, telefono, orari, foto e recensioni che compare su Google e su Maps. Per un artigiano spesso porta più chiamate del sito. Si crea gratis su Google; con Marketizzati la **creo o la sistemo io**, ed è inclusa nel sito da ${OFFER.oneOff} €.`,
  cta: 'buy',
  visual: 'none',
  blocks: [
    {
      label: '02 · Come si crea',
      title: 'Crearla da soli:',
      italic: 'i passaggi.',
      cards: [
        { title: '1. Accedi', text: 'Vai su business.google.com con un account Google intestato all’attività.' },
        { title: '2. Nome e categoria', text: 'Il nome vero dell’attività (niente parole chiave aggiunte) e la categoria più precisa possibile, per esempio "Idraulico".' },
        { title: '3. Zona servita', text: 'Se vai dai clienti, indica i comuni dove lavori invece dell’indirizzo di casa.' },
        { title: '4. Verifica', text: 'Google verifica che l’attività sia tua: con un codice per posta, una telefonata o un breve video. I tempi li decide Google.' },
        { title: '5. Completa tutto', text: 'Orari, servizi, telefono, sito, almeno 10 foto vere dei lavori.' },
        { title: '6. Recensioni', text: 'Chiedi una recensione a ogni cliente soddisfatto e rispondi a tutte, anche a quelle negative.' },
      ],
    },
    {
      label: '03 · Gli errori',
      title: 'Gli errori che',
      italic: 'la fanno sparire.',
      points: [
        'Parole chiave nel nome ("Rossi Idraulico Pronto Intervento Pavia"): rischi la sospensione.',
        'Due schede per la stessa attività.',
        'Indirizzo che non corrisponde alla realtà.',
        'Foto prese da internet invece dei tuoi lavori.',
        'Orari mai aggiornati nei festivi.',
      ],
    },
    {
      label: '04 · Te la faccio io',
      title: 'Non hai tempo?',
      italic: 'Te la faccio io.',
      text: `La scheda Google è inclusa nel sito: la creo e la faccio verificare, oppure sistemo quella che hai già, con servizi, zone, orari, foto e link al sito. Se ti serve solo la scheda, **scrivimi su WhatsApp**.`,
    },
  ],
  faq: [
    { q: 'Google My Business e Google Business Profile sono la stessa cosa?', a: 'Sì: Google ha cambiato nome nel 2021, ma la scheda è la stessa.' },
    { q: 'Quanto costa la scheda Google?', a: `Su Google è gratis. Con Marketizzati è inclusa nel sito (${OFFER.oneOff} € o ${OFFER.monthly} €/mese): la creo o la sistemo io.` },
    { q: 'La mia scheda è sospesa, cosa faccio?', a: 'Controlla nome, indirizzo e categoria: di solito il problema è lì. Poi si chiede la revisione a Google. Se vuoi, la guardo io.' },
    { q: 'Quanto tempo serve per la verifica?', a: 'Da pochi giorni a qualche settimana: dipende dal metodo che sceglie Google.' },
  ],
  related: ['prezzi', 'siti', 'artigiani'],
}
