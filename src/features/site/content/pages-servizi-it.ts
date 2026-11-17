import { ADS } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const adsPrice = `${ADS.monthly} € al mese per Google e ChatGPT insieme; se la prendi con il sito, i primi ${ADS.launchMonths} mesi costano ${ADS.launchMonthly} € al mese`

export const googleAdsIt: ServiceCopy = {
  meta: {
    title: `Gestione Google Ads per artigiani e piccole imprese da ${ADS.monthly} €/mese | Marketizzati`,
    description: `Gestione campagne Google Ads e ChatGPT Ads per artigiani in Lombardia: ${adsPrice}. Budget pagato direttamente a Google, account a tuo nome.`,
  },
  label: '01 · Pubblicità Google Ads',
  title: 'Compari quando ti cercano,',
  italic: 'paghi solo i clic.',
  answer: `Con Google Ads il tuo annuncio compare in cima quando qualcuno nella tua zona cerca proprio il tuo servizio. La gestione costa **${adsPrice}**. Il budget per gli annunci (da ${ADS.minBudgetMonthly} € al mese) lo paghi direttamente a Google, su un account intestato a te.`,
  cta: 'ads',
  visual: 'none',
  blocks: [
    {
      label: '02 · Cosa faccio',
      title: 'Campagne piccole,',
      italic: 'precise sulla tua zona.',
      points: [
        'Scelgo le ricerche che portano lavori, non curiosi: "riparazione tapparelle Lodi", non "come riparare una tapparella".',
        'Escludo le parole che sprecano soldi: gratis, fai da te, corso, lavoro.',
        'Imposto la zona attorno a dove lavori davvero.',
        'Controllo e correggo ogni settimana, report a fine mese.',
      ],
    },
    {
      label: '03 · Onestà',
      title: 'Nessuna promessa',
      italic: 'di chiamate.',
      text: 'Le chiamate dipendono dal mercato, dalla zona e dal budget. Quello che prometto è il lavoro: campagne fatte bene, controllate e spiegate in parole semplici ogni mese. Puoi disdire la gestione quando vuoi.',
    },
  ],
  faq: [
    { q: 'Quanto costa la gestione di Google Ads?', a: `${ADS.monthly} € al mese per Google Ads e ChatGPT Ads insieme. Con il sito, i primi ${ADS.launchMonths} mesi a ${ADS.launchMonthly} € al mese.` },
    { q: 'Quanto budget serve?', a: `Si parte da ${ADS.minBudgetMonthly} € al mese, pagati direttamente a Google. Lo decidiamo insieme guardando i risultati.` },
    { q: 'L’account resta mio?', a: 'Sì, è intestato a te dal primo giorno.' },
    { q: 'Posso disdire?', a: 'Sì, la gestione continua si disdice quando vuoi e termina alla fine del mese già pagato.' },
  ],
  related: ['chatgptAds', 'prezzi', 'siti'],
}

export const chatgptAdsIt: ServiceCopy = {
  meta: {
    title: 'ChatGPT Ads in Italia: come funzionano e quanto costano | Marketizzati',
    description: `ChatGPT Ads in Italia: cosa sono, come funzionano gli annunci dentro ChatGPT, quanto costano e per chi hanno senso. Gestione insieme a Google Ads da ${ADS.monthly} €/mese.`,
  },
  label: '01 · ChatGPT Ads',
  title: 'La pubblicità dentro ChatGPT,',
  italic: 'spiegata semplice.',
  answer: `Le **ChatGPT Ads** sono annunci che compaiono nelle conversazioni di ChatGPT, collegati a quello che la persona sta chiedendo. In Lombardia le ricerche su "chatgpt ads" sono cresciute di oltre il 1.300% in un anno, e la concorrenza è ancora poca. Le gestisco insieme a Google Ads: **${adsPrice}**.`,
  cta: 'ads',
  visual: 'none',
  blocks: [
    {
      label: '02 · Come funzionano',
      title: 'Una risposta,',
      italic: 'e accanto il tuo annuncio.',
      points: [
        'La persona chiede a ChatGPT, per esempio, chi può riparare una caldaia vicino a casa.',
        'Insieme alla risposta può comparire un annuncio pertinente, segnalato come sponsorizzato.',
        'Paghi la piattaforma in base all’uso, con un budget che decidi tu.',
        'Formati e regole cambiano spesso: li controllo sulle pagine ufficiali di OpenAI prima di ogni campagna.',
      ],
    },
    {
      label: '03 · Per chi ha senso',
      title: 'Adesso, perché',
      italic: 'siamo ancora in pochi.',
      text: 'Ha senso per chi lavora in una zona precisa e vende un servizio che le persone chiedono a voce alta: riparazioni, installazioni, preventivi. Con poca concorrenza, un budget piccolo basta per capire se funziona. Lo affianchiamo sempre a Google, che resta il canale principale.',
    },
    {
      label: '04 · Senza annunci',
      title: 'Farti consigliare da ChatGPT,',
      italic: 'anche gratis.',
      text: 'ChatGPT consiglia attività che trova scritte bene sul web: prezzi chiari, servizi, zone, recensioni. Per questo i siti che faccio hanno prezzi e informazioni in testo, schede Google complete e pagine pensate anche per le risposte di ChatGPT.',
    },
  ],
  faq: [
    { q: 'Le ChatGPT Ads sono disponibili in Italia?', a: 'La pubblicità in ChatGPT si sta allargando paese per paese e le condizioni per gli inserzionisti cambiano spesso. Prima di partire verifico sulle pagine ufficiali di OpenAI cosa è disponibile per la tua attività.' },
    { q: 'Quanto costano le ChatGPT Ads?', a: `Il budget lo decidi tu e lo paghi direttamente a OpenAI. La mia gestione, insieme a Google Ads, costa ${ADS.monthly} € al mese.` },
    { q: 'Meglio Google Ads o ChatGPT Ads?', a: 'Per un artigiano Google resta il primo canale. ChatGPT si aggiunge per farsi trovare dove la concorrenza è ancora bassa.' },
  ],
  related: ['googleAds', 'prezzi', 'schedaGoogle'],
}

export const agentiIt: ServiceCopy = {
  meta: {
    title: 'Agenti AI su WhatsApp e al telefono per aziende | Marketizzati',
    description: 'Agenti AI che rispondono ai clienti su WhatsApp e al telefono, anche di notte: danno informazioni, prenotano appuntamenti e passano a te i casi importanti. Su preventivo.',
  },
  label: '01 · Agenti AI su WhatsApp',
  title: 'Il primo che risponde,',
  italic: 'vende.',
  answer: 'Un **agente AI** risponde ai tuoi clienti su WhatsApp, e se serve anche al telefono con la voce, a qualsiasi ora: dà prezzi e orari, fa le domande giuste, fissa l’appuntamento e passa a te i casi che contano. È un lavoro su misura: **lo preventivo dopo aver capito come lavori**.',
  cta: 'quote',
  visual: 'phone',
  blocks: [
    {
      label: '02 · Cosa fa',
      title: 'Mentre lavori,',
      italic: 'qualcuno risponde.',
      points: [
        'Risponde subito su WhatsApp, anche di sera e nei festivi.',
        'Usa le tue informazioni: servizi, prezzi indicativi, zone, orari.',
        'Fissa appuntamenti nel tuo calendario e manda i promemoria.',
        'Agente vocale: risponde al telefono e richiama chi non hai potuto sentire.',
        'Ti avvisa quando serve una persona: tu intervieni nella chat quando vuoi.',
      ],
    },
    {
      label: '03 · Esempio vero',
      title: 'L’abbiamo già fatto',
      italic: 'per le agenzie immobiliari.',
      text: 'AIGENT risponde ai clienti delle agenzie immobiliari su WhatsApp e al telefono, 24 ore su 24: qualifica, propone la casa giusta e fissa la visita. Lo stesso approccio si adatta a officine, studi, artigiani e negozi.',
    },
  ],
  faq: [
    { q: 'Quanto costa un agente AI su WhatsApp?', a: 'Dipende da cosa deve fare e da quanti messaggi gestisce. Scrivimi su WhatsApp: ti preparo un preventivo chiaro.' },
    { q: 'Risponde a nome mio?', a: 'Sì, a nome della tua attività, con le regole che decidi tu. Prima di accenderlo per tutti lo proviamo insieme.' },
    { q: 'Serve WhatsApp Business?', a: 'Sì. A seconda dei casi usiamo l’app WhatsApp Business o le API ufficiali di Meta.' },
  ],
  related: ['sistemi', 'progetti', 'siti'],
}

export const sistemiIt: ServiceCopy = {
  meta: {
    title: 'Sistemi automatizzati e gestionali su misura con AI | Marketizzati',
    description: 'Sistemi su misura che automatizzano preventivi, promemoria, fatture e richiami, anche con agenti vocali. Su preventivo.',
  },
  label: '01 · Sistemi automatizzati',
  title: 'Il lavoro ripetitivo',
  italic: 'lo fa il sistema.',
  answer: 'Costruisco **sistemi su misura** che fanno da soli le parti ripetitive del lavoro: raccolgono le richieste, preparano preventivi, mandano promemoria e fatture, richiamano i clienti, anche con un **agente vocale**. Un sito su più pagine rientra nell’offerta a prezzo fisso; un sistema come questo **va preventivato**.',
  cta: 'quote',
  visual: 'none',
  blocks: [
    {
      label: '02 · Esempi',
      title: 'Cosa si può',
      italic: 'automatizzare.',
      cards: [
        { title: 'Richieste e preventivi', text: 'Il cliente scrive, il sistema raccoglie i dati e prepara la bozza di preventivo da approvare.' },
        { title: 'Promemoria e richiami', text: 'Appuntamenti, scadenze, manutenzioni annuali: messaggi e chiamate partono da soli.' },
        { title: 'Gestionale su misura', text: 'Clienti, lavori, foto e documenti in un posto solo, anche dal telefono in cantiere.' },
        { title: 'Agenti vocali', text: 'Un agente che chiama, ascolta e fissa l’appuntamento, poi ti lascia il riassunto.' },
      ],
    },
    {
      label: '03 · Lavori fatti',
      title: 'ProspectBot e Zernflow,',
      italic: 'due sistemi privati.',
      text: 'ProspectBot trova le attività senza sito, raccoglie i dati, prepara la proposta e fa chiamare un agente vocale che fissa l’appuntamento. Zernflow prende le richieste in arrivo, le smista, risponde e tiene traccia di tutto. Sono privati per i clienti, ma nella pagina progetti vedi come funzionano.',
    },
  ],
  faq: [
    { q: 'Quanto costa un sistema su misura?', a: 'Dipende da cosa deve fare. Raccontami il tuo lavoro su WhatsApp e ti preparo un preventivo.' },
    { q: 'Devo cambiare i programmi che uso?', a: 'Non per forza: dove si può, il sistema si collega a quello che usi già.' },
  ],
  related: ['agenti', 'progetti', 'contatti'],
}

export const socialIt: ServiceCopy = {
  meta: {
    title: 'Social media manager e pubblicità Meta per piccole imprese | Marketizzati',
    description: 'Creazione dei contenuti, pubblicazione, gestione dei profili e pubblicità su Facebook e Instagram (Meta Ads) per artigiani e piccole imprese. Su preventivo.',
  },
  label: '01 · Social media manager',
  title: 'Far vedere il tuo lavoro,',
  italic: 'con costanza.',
  answer: 'Mi occupo di **creare i contenuti, pubblicarli, gestire i profili** e la **pubblicità su Facebook e Instagram** (Meta Ads). È un servizio su misura: **lo preventivo** in base a quanti contenuti servono e su quali canali.',
  cta: 'quote',
  visual: 'none',
  blocks: [
    {
      label: '02 · Cosa comprende',
      title: 'Dall’idea',
      italic: 'alla pubblicazione.',
      points: [
        'Piano editoriale sui temi che interessano ai tuoi clienti.',
        'Video brevi e post con i tuoi lavori veri.',
        'Pubblicazione e gestione dei profili.',
        'Pubblicità sui contenuti con Meta Ads, budget pagato direttamente a Meta.',
      ],
    },
  ],
  faq: [
    { q: 'Quanto costa un social media manager?', a: 'Dipende dal numero di contenuti e dai canali. Scrivimi su WhatsApp e ti preparo un preventivo.' },
    { q: 'Devo farmi riprendere?', a: 'Non per forza: si possono usare foto e video dei lavori, anche fatti col telefono.' },
  ],
  related: ['video', 'blog', 'contatti'],
}

export const videoIt: ServiceCopy = {
  meta: {
    title: 'Contenuti video per social e sito: reel e motion graphics | Marketizzati',
    description: 'Video verticali, reel e motion graphics per far conoscere la tua attività su Instagram, TikTok e sul sito. Su preventivo.',
  },
  label: '01 · Contenuti video',
  title: 'Video che spiegano',
  italic: 'in trenta secondi.',
  answer: 'Realizzo **video verticali, reel e motion graphics**: dal montaggio dei video girati col telefono alle animazioni che spiegano un servizio. È un servizio **su preventivo**, da solo o insieme alla gestione dei social.',
  cta: 'quote',
  visual: 'none',
  blocks: [
    {
      label: '02 · Formati',
      title: 'Brevi, chiari,',
      italic: 'fatti per il telefono.',
      points: ['Reel e TikTok dai tuoi video, con sottotitoli e ritmo.', 'Motion graphics per spiegare un servizio o un prodotto.', 'Video per il sito e per le campagne pubblicitarie.'],
    },
  ],
  faq: [{ q: 'Quanto costa un video?', a: 'Dipende da durata e lavorazione. Scrivimi su WhatsApp con un esempio di quello che ti piace.' }],
  related: ['social', 'blog', 'contatti'],
}
