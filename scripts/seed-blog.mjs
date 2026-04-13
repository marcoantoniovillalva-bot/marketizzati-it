import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: 'postgresql://postgres:Quieroplata1!@db.luhfsvgbpnaxdeydxtrn.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false },
})

const posts = [
  {
    locale: 'it',
    slug: 'come-scegliere-agenzia-social-media-marketing',
    title: "Come Scegliere un'Agenzia di Social Media Marketing nel 2025",
    description: "Guida per PMI su come scegliere la giusta agenzia di social media marketing: domande da fare, segnali di qualità, red flag da evitare e prezzi realistici.",
    date: '2026-04-13',
    read_time: 9,
    category: 'Social Media',
    image: '/images/blog/blog-agenzia-social-media.jpg',
    image_alt: 'Team di marketing che lavora su strategie di social media',
    keywords: ['agenzia di social media marketing','agenzia social media','social media marketing','agenzia social media manager','gestione social media','social media marketing PMI'],
    published: true,
    sections: [
      { type: 'intro', content: "Scegliere un'agenzia di social media marketing è una delle decisioni più importanti per una PMI che vuole crescere online. Il mercato è pieno di professionisti, agenzie, freelance e guru social: alcuni ottimi, molti mediocri, qualcuno da evitare assolutamente. In questa guida trovi tutto quello che devi sapere per scegliere il partner giusto — le domande da fare, i segnali di qualità e i red flag che dovrebbero farti scappare." },
      { type: 'h2', heading: "Cosa fa davvero un'agenzia di social media marketing", content: "Prima di scegliere, è fondamentale capire cosa compri. Un'agenzia di social media seria non si limita a pubblicare post. Il lavoro strategico comprende: definire il posizionamento del brand sui social, identificare il pubblico target e i canali più efficaci, creare un piano editoriale coerente con gli obiettivi di business, produrre contenuti (testi, grafica, video), gestire la community, analizzare i dati e ottimizzare la strategia nel tempo. Chi ti offre solo 'X post al mese' senza parlare di strategia, obiettivi e KPI non sta gestendo il social media marketing — sta riempiendo spazi." },
      { type: 'h2', heading: "I segnali di un'agenzia di social media marketing seria", content: 'Come riconosci un\'agenzia competente? Questi sono i segnali positivi da cercare.' },
      { type: 'list', items: ['Ha un portfolio con case study concreti: non solo "belle grafiche", ma risultati misurabili (crescita follower qualificati, engagement rate, lead generati)', "Ti fa domande prima di presentare un'offerta: vuole capire il tuo business, il tuo pubblico e i tuoi obiettivi", 'Propone una strategia personalizzata, non un pacchetto standard uguale per tutti', 'È trasparente sui KPI: sa misurare il successo con metriche che contano per il tuo business', 'Ha un processo di reportistica chiaro: ricevi report regolari con dati reali, non solo grafici estetici', "Parla chiaramente di cosa NON può fare: un'agenzia onesta sa quando qualcosa è fuori dal suo scope"] },
      { type: 'h2', heading: 'Le domande da fare prima di firmare', content: "Prima di siglare qualsiasi contratto con un'agenzia di social media, fai queste domande." },
      { type: 'h3', heading: 'Chi si occuperà concretamente del mio account?', content: "Nelle grandi agenzie, il sales è brillante ma poi l'account viene passato a un junior con 6 mesi di esperienza. Chiedi esplicitamente chi gestirà il tuo progetto giorno per giorno e verifica la sua esperienza. Hai il diritto di sapere con chi lavorerai." },
      { type: 'h3', heading: 'Qual è il vostro processo di approvazione dei contenuti?', content: 'I contenuti devono passare per la tua approvazione prima di essere pubblicati? Con quale anticipo li ricevi? Usa un tool di gestione (Trello, Notion, un calendario editoriale condiviso) o manda file PDF via email? Un processo chiaro evita sorprese e protegge la coerenza del tuo brand.' },
      { type: 'h3', heading: 'Come misurate il successo?', content: 'Diffida di chi parla solo di "follower" e "like". Chiedi quali metriche useranno per valutare l\'efficacia del lavoro in relazione ai tuoi obiettivi di business. Se vuoi lead, la metrica è il costo per lead. Se vuoi brand awareness, è la copertura su pubblico target. Se vuoi vendite, è il ROAS.' },
      { type: 'h3', heading: 'Chi è proprietario dei contenuti e degli account?', content: "Questa è critica. Assicurati che gli account social siano intestati a te, non all'agenzia. Stesso vale per i file grafici, i video e i testi prodotti: al termine del contratto devono essere tuoi al 100%. Inseriscilo nel contratto." },
      { type: 'h2', heading: 'Prezzi realistici per la gestione social media in Italia', content: "I prezzi per la gestione social media variano molto. Ecco una panoramica realistica del mercato italiano nel 2025." },
      { type: 'list', items: ['Freelance junior (1-2 anni di esperienza): €300-600/mese per 1 canale, 8-12 post mensili', 'Freelance senior o agenzia piccola: €600-1.500/mese per 2 canali, strategia inclusa', 'Agenzia strutturata con team dedicato: €1.500-4.000/mese, strategia, produzione, advertising e reportistica', 'Agenzia enterprise o specializzata: €4.000+/mese, campagne complesse, più canali, produzione video'] },
      { type: 'callout', content: '⚠️ Attenzione: prezzi sotto €300/mese per la gestione di un canale social quasi sempre significano lavoro automatizzato, contenuti generici o scarsa attenzione al tuo brand. Il social media marketing efficace richiede tempo, creatività e strategia continua.' },
      { type: 'h2', heading: 'Agenzia generalista vs agenzia specializzata: quale scegliere?', content: "Un'agenzia generalista gestisce tutto il digital marketing: sito web, SEO, social, advertising, email. Un'agenzia specializzata in social media marketing si concentra solo su quell'area. Quale conviene? Dipende dalle tue esigenze. Se hai già un sito e vuoi solo far crescere i social, una specializzata può essere più profonda. Se stai costruendo il tuo ecosistema digitale da zero, un partner che gestisce tutto in modo coordinato è più efficiente: la strategia social deve essere allineata con il sito, le campagne ads e la comunicazione del brand." },
      { type: 'h2', heading: "Red flag: quando scappare dall'agenzia", content: 'Questi segnali devono farti alzare dalla sedia e cercare un\'altra alternativa.' },
      { type: 'list', items: ['Garantisce risultati precisi ("ti porto a 10.000 follower in 3 mesi"): nessuno può garantirlo', 'Non ha un portfolio o non mostra case study verificabili', 'Usa metriche di vanità (follower totali, like) come unico indicatore di successo', 'Non ha un contratto scritto con scope, deliverable e KPI chiari', 'Propone di comprare follower o engagement: è scorciatoia che distrugge il brand', 'Non risponde alle tue domande in modo chiaro o le schiva', 'Vuole accesso come amministratore agli account senza darti le credenziali'] },
      { type: 'h2', heading: 'Agenzia esterna vs social media manager interno: il confronto', content: "Un social media manager interno è una persona dipendente dell'azienda dedicata ai social. L'agenzia è un partner esterno con un team. Per una PMI, l'agenzia è quasi sempre più conveniente nelle fasi iniziali: accedi a un team con competenze diverse (strategist, copywriter, grafico, ads specialist) a un costo inferiore a quello di un dipendente full-time. La figura interna ha senso quando i social diventano un canale primario di business e richiedono presenza costante e reattiva." },
      { type: 'cta', heading: 'Vuoi una strategia social media su misura per la tua azienda?', content: 'Prenota una consulenza gratuita di 30 minuti. Analizziamo la tua situazione attuale sui social, identifichiamo le opportunità e ti presentiamo un piano concreto con obiettivi misurabili.' },
    ],
  },
  {
    locale: 'it',
    slug: 'facebook-ads-come-generare-lead-qualificati',
    title: 'Come Fare Facebook Ads per Generare Lead Qualificati nel 2025',
    description: 'Guida pratica alle Facebook Ads per la generazione di lead: struttura delle campagne, targeting, budget, lead form vs landing page e gli errori più comuni da evitare.',
    date: '2026-04-06',
    read_time: 10,
    category: 'Advertising',
    image: '/images/blog/blog-facebook-ads-lead.jpg',
    image_alt: 'Dashboard Facebook Ads con metriche di lead generation',
    keywords: ['facebook ads lead','facebook ads leads','facebook ads per generare lead','consulente facebook ads','campagne facebook ads','lead generation facebook'],
    published: true,
    sections: [
      { type: 'intro', content: "Facebook Ads resta uno degli strumenti più potenti per generare lead qualificati per PMI e professionisti italiani. Ma c'è una differenza enorme tra fare Facebook Ads e farle bene. Molte aziende bruciano budget senza risultati perché commettono errori strutturali fin dall'inizio. In questa guida trovi come impostare campagne Facebook Ads per generare lead reali — persone interessate ai tuoi prodotti o servizi, non semplici click." },
      { type: 'h2', heading: "Cos'è un lead e perché non tutti valgono lo stesso", content: 'Un lead è un contatto che ha mostrato interesse per la tua offerta lasciando i suoi dati (nome, email, telefono). Ma attenzione: non tutti i lead sono uguali. Un lead "freddo" è qualcuno che ha compilato un form per curiosità o per un incentivo; un lead "caldo" è qualcuno che ha un problema preciso e sta cercando attivamente una soluzione. Le campagne Facebook Ads per la generazione di lead devono essere progettate per attrarre i secondi, non i primi. La qualità vale sempre di più della quantità — 10 lead pronti a comprare valgono più di 100 persone che non risponderanno mai al telefono.' },
      { type: 'h2', heading: 'La struttura di una campagna Facebook Ads per lead', content: 'Una campagna Facebook Ads ben strutturata si articola su tre livelli.' },
      { type: 'list', items: ["Campagna: definisce l'obiettivo (Lead Generation) e il budget totale", 'Gruppo di inserzioni (Ad Set): definisce il pubblico, il placement e il budget giornaliero', 'Inserzione (Ad): il creativo vero e proprio — immagine/video, testo, titolo e CTA'] },
      { type: 'h3', heading: 'Obiettivo campagna: usa sempre "Contatti" o "Lead"', content: "Per generare lead, seleziona l'obiettivo \"Contatti\" nel Gestione inserzioni di Meta. Evita gli obiettivi \"Traffico\" o \"Copertura\" per questo scopo — ottimizzano per click o visualizzazioni, non per persone che ti lasciano i dati. L'algoritmo di Meta è potente: se gli dici cosa vuoi ottenere, lavora per ottimizzare verso quel risultato." },
      { type: 'h3', heading: 'Quanto dura il periodo di apprendimento?', content: "Ogni campagna attraversa una fase di apprendimento iniziale (circa 7 giorni o 50 conversioni). In questa fase l'algoritmo raccoglie dati. Evita di modificare campagne durante questo periodo — ogni modifica significativa la riavvia da zero. Pianifica di avere pazienza nelle prime due settimane." },
      { type: 'h2', heading: 'Come costruire il pubblico giusto per le tue Facebook Ads', content: 'Il targeting è dove si vince o si perde una campagna. Meta ti offre tre opzioni principali.' },
      { type: 'h3', heading: '1. Pubblico per interessi (Interesse Targeting)', content: 'Scegli persone in base a interessi, comportamenti e dati demografici. Utile per iniziare, ma spesso generico. Esempio: se vendi servizi B2B, targettizza "imprenditori", "PMI", "startup" combinati con interessi rilevanti per il tuo settore. Dimensione consigliata: 300.000 – 1.500.000 persone per il mercato italiano.' },
      { type: 'h3', heading: '2. Pubblico personalizzato (Custom Audience)', content: "Crea pubblici da liste di clienti esistenti, visitatori del sito (pixel), persone che hanno interagito con la tua pagina Facebook/Instagram o guardato i tuoi video. Questi pubblici sono molto più caldi e convertono meglio. Il pixel di Meta sul tuo sito è fondamentale: installalo subito se non l'hai già fatto." },
      { type: 'h3', heading: '3. Pubblico simile (Lookalike Audience)', content: 'Meta trova persone simili ai tuoi clienti migliori. È uno dei targeting più potenti disponibili. Per usarlo, hai bisogno di almeno 100 persone nella lista sorgente. Un Lookalike 1-2% del pubblico italiano (60-120K persone) è un ottimo punto di partenza.' },
      { type: 'h2', heading: 'Lead Form vs Landing Page: quale converte di più?', content: 'Questa è una delle domande più frequenti quando si pianificano campagne Facebook Ads per lead generation.' },
      { type: 'h3', heading: 'Lead Form (modulo nativo su Meta)', content: 'I campi si compilano automaticamente con i dati del profilo Facebook. Vantaggi: frizione minima, costo per lead spesso più basso, nessuna uscita dalla piattaforma. Svantaggi: i lead possono essere meno qualificati perché il processo è troppo facile. Funziona bene per: raccogliere contatti per newsletter, richieste di preventivo semplici, iscrizioni a webinar.' },
      { type: 'h3', heading: 'Landing Page esterna', content: "L'utente clicca sull'inserzione e arriva su una pagina del tuo sito ottimizzata per la conversione. Vantaggi: lead più qualificati (hanno fatto uno sforzo), puoi raccogliere più informazioni, piena proprietà dei dati, ottimizzazione SEO della landing. Svantaggi: costo per lead tendenzialmente più alto, richiede un sito ottimizzato. Funziona bene per: servizi di alto valore, consulenze, prodotti complessi." },
      { type: 'callout', content: '💡 Strategia pratica: usa i Lead Form per campagne a freddo (pubblico nuovo) e le Landing Page per campagne di retargeting (pubblico che ti conosce già). Combina i due approcci per massimizzare i risultati.' },
      { type: 'h2', heading: 'Budget: quanto spendere per iniziare con Facebook Ads', content: "Non esiste un budget minimo universale, ma esistono soglie pratiche. Con meno di €5/giorno i risultati sono quasi impossibili da misurare — l'algoritmo ha pochi dati per ottimizzare. Un punto di partenza ragionevole per un'azienda italiana è €15-30/giorno (€450-900/mese), che permette di raccogliere dati sufficienti entro 2-4 settimane per capire cosa funziona. Poi si scala ciò che performa. Il budget non è un costo fisso: è un investimento che si ottimizza in base al costo per lead e al valore del cliente acquisito." },
      { type: 'h2', heading: 'Come misurare il successo di una campagna per lead', content: "Le metriche che contano davvero non sono i click o le impression." },
      { type: 'list', items: ['CPL (Costo Per Lead): quanto stai pagando per ogni contatto acquisito', "Lead Rate: percentuale di persone che vede l'inserzione e lascia i dati", 'Qualità del lead: quanti lead diventano appuntamenti o vendite', 'ROAS (Return On Ad Spend): ogni euro investito in ads quanti ne genera in vendite', 'CTR (Click-Through Rate): indica se il creativo è rilevante per il pubblico'] },
      { type: 'h2', heading: 'Gli errori più comuni nelle Facebook Ads per lead generation', content: 'Lavorando con decine di PMI italiane, questi sono gli errori che vediamo più spesso.' },
      { type: 'list', items: ['Lanciare campagne senza il pixel Meta installato sul sito', 'Modificare le campagne ogni giorno interrompendo la fase di apprendimento', 'Usare immagini stock generiche invece di contenuti autentici del brand', 'Non avere un processo di follow-up: i lead chiamati entro 5 minuti convertono 10x di più', 'Fare troppi test in simultanea senza isolare le variabili', 'Non segmentare cold audience e retargeting in campagne separate', 'Ignorare il punteggio di pertinenza (ora "Classifica qualità")'] },
      { type: 'h2', heading: 'Il ruolo del consulente Facebook Ads', content: "Gestire le Facebook Ads in autonomia è possibile, ma ha un costo nascosto: il tempo di formazione continua. Meta cambia la piattaforma costantemente — funzionalità, algoritmi, policy pubblicitarie. Un consulente Facebook Ads esperto non si limita a \"girare i tasti\": costruisce la strategia, crea i creativi, testa le audience, ottimizza le offerte e ti fornisce report chiari. Il vero vantaggio? Puoi concentrarti sul tuo business mentre lui fa lavorare il budget in modo efficiente." },
      { type: 'cta', heading: 'Vuoi che gestiamo le tue Facebook Ads?', content: 'Prenota una consulenza gratuita di 30 minuti. Analizziamo i tuoi obiettivi, il pubblico target e ti presentiamo una strategia concreta per generare lead qualificati con Facebook Ads.' },
    ],
  },
  {
    locale: 'it',
    slug: 'costi-realizzazione-sito-web-professionale',
    title: 'Quanto Costa Realizzare un Sito Web Professionale nel 2025',
    description: 'Scopri i costi reali di realizzazione di un sito web professionale nel 2025: dalle fasce di prezzo per ogni tipologia ai fattori che influenzano il preventivo. Guida completa.',
    date: '2026-04-10',
    read_time: 8,
    category: 'Web & Tecnologia',
    image: '/images/blog/blog-costi-sito-web.jpg',
    image_alt: 'Laptop con sito web professionale e analisi costi',
    keywords: ['costi realizzazione sito web','prezzo realizzazione sito web','realizzazione sito web professionale','quanto costa un sito web','preventivo sito web','creazione sito web'],
    published: true,
    sections: [
      { type: 'intro', content: '"Quanto costa fare un sito web?" È la domanda che ogni imprenditore fa almeno una volta. E la risposta onesta è: dipende. Ma "dipende" non ti aiuta a pianificare il budget, né a capire se un preventivo è equo o gonfiato. In questa guida trovi i costi reali di realizzazione di un sito web professionale nel 2025, suddivisi per tipologia, con i fattori che influenzano il prezzo e gli errori più costosi da evitare.' },
      { type: 'h2', heading: 'Perché i prezzi variano così tanto?', content: 'Un sito web può costare 300 € o 30.000 €. Entrambi i numeri sono reali. La differenza non è arbitraria: dietro c\'è la quantità di lavoro strategico, creativo e tecnico che ci si mette. Un sito "economico" spesso è un template scaricato da internet con il tuo logo incollato sopra — funziona, ma non converte. Un sito professionale è progettato intorno ai tuoi obiettivi di business, al tuo pubblico e al percorso che vuoi far fare all\'utente dal primo clic fino alla chiamata o all\'acquisto.' },
      { type: 'h2', heading: 'I fattori che determinano il costo di realizzazione', content: 'Prima di vedere le fasce di prezzo, è utile capire cosa incide sul costo finale di un sito web.' },
      { type: 'list', items: ['Numero di pagine: un sito vetrina con 5 pagine ha costi molto diversi da un portale con 50 pagine', 'Design personalizzato vs template: un design su misura richiede più ore di lavoro creativo', 'Funzionalità tecniche: prenotazioni online, e-commerce, area riservata, integrazioni CRM', 'Copywriting: chi scrive i testi? Testi ottimizzati per SEO richiedono un professionista', 'Ottimizzazione SEO on-page: struttura URL, meta tag, velocità di caricamento, Core Web Vitals', 'Manutenzione e aggiornamenti: spesso non inclusi nel preventivo iniziale', 'Hosting e dominio: costi ricorrenti annuali da considerare'] },
      { type: 'h2', heading: 'Le fasce di prezzo per tipologia di sito web', content: 'Ecco una panoramica realistica dei costi di realizzazione di un sito web nel mercato italiano nel 2025.' },
      { type: 'h3', heading: 'Sito vetrina base: €500 – €2.000', content: 'È il sito più semplice: 4-6 pagine (Home, Chi siamo, Servizi, Contatti), design da template, testi forniti dal cliente. Va bene per professionisti o attività locali che hanno bisogno di una presenza online di base. Limite: poca personalizzazione, zero ottimizzazione per la conversione, nessuna strategia SEO.' },
      { type: 'h3', heading: 'Sito aziendale professionale: €2.000 – €8.000', content: "Il range più comune per PMI serie. Include design personalizzato o semi-personalizzato, testi ottimizzati SEO, struttura pensata per convertire i visitatori in lead, ottimizzazione della velocità e integrazione con Google Analytics, CRM o strumenti di email marketing. È il punto di ingresso per chi vuole usare il sito come strumento di business e non solo come biglietto da visita digitale." },
      { type: 'h3', heading: 'Sito web con funzionalità avanzate: €5.000 – €15.000', content: 'Include aree riservate per clienti, sistemi di prenotazione online, configuratori di prodotto, blog con gestione contenuti, integrazioni API con strumenti esterni. Adatto ad aziende strutturate che vogliono automatizzare processi tramite il sito.' },
      { type: 'h3', heading: 'E-commerce: €3.000 – €20.000+', content: "I costi di un e-commerce variano enormemente in base al numero di prodotti, alle integrazioni con gestionale/magazzino e alle esigenze di personalizzazione. Un e-commerce su Shopify con pochi prodotti può partire da €3.000; un progetto WooCommerce o custom con centinaia di prodotti e automazioni può superare i €15.000." },
      { type: 'callout', content: '⚠️ Attenzione ai preventivi sotto i €500: quasi sempre significano template preconfezionati con personalizzazione minima. Il sito esiste, ma non lavora per te.' },
      { type: 'h2', heading: 'Sito fai-da-te vs realizzazione professionale: conviene davvero risparmiare?', content: "Wix, Squarespace, Jimdo: piattaforme drag-and-drop che permettono di creare un sito in autonomia. Il risparmio economico è reale — ma ha un costo nascosto. Il tuo tempo ha un valore. Se passi 40 ore a costruire un sito invece di stare con i clienti o far crescere il business, stai spendendo comunque. Inoltre, i siti DIY hanno spesso limitazioni SEO strutturali, velocità di caricamento mediocre e aspetto generico. Per attività che vogliono crescere online, la realizzazione professionale si ripaga nel giro di pochi mesi attraverso i lead generati." },
      { type: 'h2', heading: 'Cosa deve includere un preventivo trasparente', content: 'Quando richiedi un preventivo per la realizzazione di un sito web, assicurati che includa esplicitamente questi elementi.' },
      { type: 'list', items: ["Numero esatto di pagine incluse nel progetto", "Chi si occupa del copywriting (testi): tu o l'agenzia?", 'Ottimizzazione SEO on-page inclusa o a parte?', 'Costi di hosting e dominio (annuali)', 'Garanzia post-lancio: quante ore di correzioni sono incluse?', 'Tempi di consegna stimati e milestone del progetto', 'Proprietà del sito: al termine del progetto, il sito è tuo al 100%?'] },
      { type: 'h2', heading: 'Gli errori più costosi nella realizzazione di un sito web', content: "Anni di esperienza con PMI italiane ci hanno insegnato che i veri costi non sono sempre quelli in fattura. Ecco gli errori che costano di più." },
      { type: 'list', items: ['Scegliere solo in base al prezzo più basso: un sito lento o mal strutturato costa in opportunità perse', "Non pianificare la SEO dall'inizio: aggiungerla dopo è il doppio del lavoro e del costo", 'Affidarsi a chi non ti mostra un portfolio con risultati misurabili', 'Non chiedere chi sarà proprietario del dominio e dell\'hosting', 'Dimenticare il mobile: oltre il 70% delle visite arriva da smartphone', 'Non integrare analytics dal primo giorno: senza dati non puoi ottimizzare'] },
      { type: 'h2', heading: 'Come scegliere il partner giusto per il tuo sito web', content: "Il sito web è spesso il primo punto di contatto tra la tua azienda e un potenziale cliente. Non è un costo, è un investimento. Quando valuti un partner per la realizzazione, non guardare solo il prezzo: guarda i risultati dei siti che ha già realizzato. Hanno buone performance? Caricano velocemente? Convertono visitatori in clienti? Fai queste domande e pretendi risposte con dati, non solo promesse. Un buon partner non ti vende un sito — ti costruisce uno strumento di business che lavora per te 24 ore su 24." },
      { type: 'cta', heading: 'Vuoi sapere quanto costerebbe il tuo sito web?', content: 'Prenota una consulenza gratuita di 30 minuti. Analizziamo insieme le tue esigenze e ti prepariamo un preventivo dettagliato con costi chiari, senza sorprese.' },
    ],
  },
]

async function run() {
  await client.connect()
  for (const post of posts) {
    const { rows } = await client.query(
      'SELECT id FROM blog_posts WHERE locale = $1 AND slug = $2',
      [post.locale, post.slug]
    )
    if (rows.length > 0) {
      console.log('Already exists, skipping:', post.slug)
      continue
    }
    await client.query(
      `INSERT INTO blog_posts (locale, slug, title, description, date, read_time, category, image, image_alt, keywords, sections, published)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [post.locale, post.slug, post.title, post.description, post.date, post.read_time,
       post.category, post.image, post.image_alt, post.keywords, JSON.stringify(post.sections), post.published]
    )
    console.log('Inserted:', post.slug)
  }
  await client.end()
  console.log('Done!')
}

run().catch(e => { console.error(e.message); client.end() })
