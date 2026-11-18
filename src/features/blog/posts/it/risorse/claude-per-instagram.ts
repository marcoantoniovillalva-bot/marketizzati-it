import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "claude-per-instagram",
  "title": "Guida pratica: Claude che lavora sul tuo Instagram",
  "description": "Come collegare Instagram a Claude con Composio, i prompt pronti per pubblicare, rispondere ai commenti e leggere le statistiche, e i limiti da…",
  "date": "2026-10-22",
  "readTime": 12,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guida pratica",
    "Claude che lavora sul tuo Instagram",
    "Come collegare Instagram a Claude con Composio",
    "i prompt pronti per pubblicare",
    "rispondere ai commenti e leggere le statistiche",
    "e i limiti da conoscere"
  ],
  "image": "/images/blog/covers/claude-per-instagram-wide.webp",
  "imageTall": "/images/blog/covers/claude-per-instagram-tall.webp",
  "imageAlt": "Manuale operativo per far pubblicare, rispondere e analizzare il tuo profilo Instagram a Claude, senza scrivere una riga di codice e senza perdere il controllo",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/claude-per-instagram/01-slide-01.webp", "alt": "Manuale operativo per far pubblicare, rispondere e analizzare il tuo profilo Instagram a Claude, senza scrivere una riga di codice e senza perdere il controllo" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Claude può pubblicare sul tuo Instagram, ma **non come pensi**: Instagram non è tra i connettori ufficiali di Claude. Il collegamento passa da **Composio**, un servizio che fa da \"ponte\" tra l'intelligenza artificiale e oltre mille app, gestendo per te accessi e autorizzazioni. Composio usa le API ufficiali di Instagram: niente trucchi, niente password condivise. Questa guida ti porta dal collegamento ai prompt già pronti, e ti spiega cosa Claude può e non può fare, così eviti la confusione che vedo spesso nei commenti."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "preparare il tuo profilo (account creator o azienda);",
        "collegare Claude a Composio e Composio a Instagram, passo per passo;",
        "capire cosa può fare Claude: post, caroselli, reel, storie, commenti, messaggi e statistiche;",
        "usare i prompt pronti per pubblicare, rispondere e analizzare i risultati;",
        "conoscere i limiti di Instagram, per non perdere tempo;",
        "lavorare in sicurezza, con te che approvi ogni pubblicazione."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** Claude prepara, tu approvi. Fatti sempre mostrare l'anteprima (testo, immagine, orario) prima di qualsiasi pubblicazione o risposta pubblica: è il tuo profilo e la tua reputazione."
    },
    {
      "type": "cta",
      "heading": "Vuoi un Instagram che lavora anche quando tu non ci sei?",
      "content": "Costruiamo per te automazioni su misura: risposte ai commenti con invio della risorsa in DM, contenuti creati con l'IA, report settimanali e collegamento con WhatsApp e CRM. Scrivimi su WhatsApp e dimmi cosa vendi."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Composio - pagina per collegare Claude](https://composio.dev/claude)",
        "[Composio Connect - guida ufficiale (URL MCP)](https://docs.composio.dev/docs/composio-connect)",
        "[Composio - strumenti Instagram disponibili](https://docs.composio.dev/toolkits/instagram)",
        "[Composio - prezzi](https://composio.dev/pricing)",
        "[Claude - connettori personalizzati (guida Anthropic)](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)",
        "[Claude Code - collegare un MCP](https://code.claude.com/docs/en/mcp)",
        "[Instagram - passare a un account per professionisti](https://help.instagram.com/502981923235522/?locale=it_IT)",
        "[Instagram - etichettare i contenuti creati con l'IA](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT)",
        "[Meta - pubblicazione via API (limiti e formati)](https://developers.facebook.com/docs/instagram-platform/content-publishing)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Prima di iniziare: cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/02-slide-02.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Per partire non spendi nulla. Ti servono quattro cose: un profilo Instagram professionale, un account Claude, un account Composio e i tuoi contenuti su un link pubblico (Instagram scarica foto e video da lì)."
    },
    {
      "type": "table",
      "headers": [
        "Cosa",
        "Dove",
        "Costo (ottobre 2026)"
      ],
      "rows": [
        [
          "Account Instagram creator o azienda",
          "App Instagram (capitolo 2)",
          "Gratis"
        ],
        [
          "Account Claude",
          "[claude.ai](https://claude.ai/) o Claude Desktop",
          "Gratis: 1 connettore personalizzato. Pro, Max, Team: più connettori"
        ],
        [
          "Account Composio",
          "[composio.dev](https://composio.dev/)",
          "Piano Hobby gratuito, senza carta. Con l'app di Composio: 20.000 azioni al mese incluse"
        ],
        [
          "Foto e video online",
          "Il tuo sito o un servizio di hosting",
          "Le foto solo in JPG"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** oltre le azioni incluse, Composio fa pagare $0,0002 per azione (o il piano Pro da $29 al mese). Per un'attività che pubblica qualche post a settimana il piano gratuito basta e avanza. Prezzi rilevati a ottobre 2026 sulla pagina ufficiale."
    },
    {
      "type": "h2",
      "heading": "2. Passa all'account professionale (creator o azienda)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/03-slide-03.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Le API di Instagram funzionano **solo con gli account per professionisti** (creator o azienda), non con quelli personali. Il passaggio è gratuito, richiede un minuto e si può annullare."
    },
    {
      "type": "list",
      "items": [
        "Apri l'app di Instagram e tocca la tua immagine del profilo.",
        "Tocca il menu ☰ in alto a destra (Impostazioni e attività).",
        "Nella sezione \"Per professionisti\" tocca **Tipo di account e strumenti**.",
        "Tocca **Passa a un account per professionisti**.",
        "Scegli la categoria che descrive la tua attività.",
        "Scegli **Creator** o **Azienda** e tocca Avanti. Il collegamento a una Pagina Facebook è facoltativo: puoi saltarlo."
      ]
    },
    {
      "type": "table",
      "headers": [
        "Tipo di account",
        "Per chi è",
        "Con Claude"
      ],
      "rows": [
        [
          "Azienda",
          "Negozi, attività locali, brand, servizi",
          "Funziona"
        ],
        [
          "Creator",
          "Professionisti, personal brand, artisti",
          "Funziona"
        ],
        [
          "Personale",
          "Uso privato",
          "Non funziona"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Attenzione:** se il tuo account è privato, diventa pubblico e tutte le richieste di follow in attesa vengono accettate. Puoi tornare all'account personale quando vuoi, ma perdi statistiche e strumenti professionali."
    },
    {
      "type": "h2",
      "heading": "3. Collega Claude a Composio e Composio a Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/04-slide-04.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Un **connettore** (o MCP) è un collegamento che dà a Claude nuovi strumenti. Composio ti dà un unico indirizzo da incollare in Claude: da lì Claude può usare Instagram e le altre app che decidi di collegare."
    },
    {
      "type": "list",
      "items": [
        "Apri [claude.ai](https://claude.ai/) o Claude Desktop e vai su **Personalizza → Connettori** (in inglese: Customize → Connectors).",
        "Clicca **+** e poi **Aggiungi connettore personalizzato**.",
        "Come nome scrivi **Composio** e incolla l'URL qui sotto, poi clicca Aggiungi.",
        "Si apre il browser: accedi (o registrati) a Composio e autorizza il collegamento.",
        "Torna in chat e scrivi: \"Collega il mio account Instagram tramite Composio\". Claude ti dà un link: aprilo, accedi a Instagram e concedi i permessi richiesti.",
        "Fai una prova con il primo prompt del capitolo 5: Claude deve leggere il nome del tuo profilo."
      ]
    },
    {
      "type": "code",
      "content": "https://connect.composio.dev/mcp"
    },
    {
      "type": "callout",
      "content": "**Scorciatoia:** dalla pagina [composio.dev/claude](https://composio.dev/claude) c'è il pulsante \"Add to Claude\", che apre le impostazioni dei connettori con l'URL già compilato."
    },
    {
      "type": "h3",
      "heading": "Se Claude non usa il connettore",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "nella chat clicca **+** → Connettori e controlla che Composio sia attivo;",
        "nel prompt scrivi esplicitamente \"usa Composio\";",
        "se Claude dice che non riesce a rispondere ai commenti, ripeti il collegamento e concedi tutti i permessi: senza il permesso di gestione dei commenti quelle azioni non funzionano;",
        "piano Team o Enterprise: il connettore lo aggiunge prima il proprietario dell'organizzazione, poi ognuno si collega dal proprio account."
      ]
    },
    {
      "type": "h3",
      "heading": "Usi Claude Code? Un solo comando",
      "content": ""
    },
    {
      "type": "code",
      "content": "# dal terminale\nclaude mcp add --transport http composio https://connect.composio.dev/mcp\n\n# poi dentro Claude Code: /mcp → Composio → autenticati nel browser\n/mcp"
    },
    {
      "type": "callout",
      "content": "**Sicurezza:** Anthropic ricorda che i connettori personalizzati non sono verificati da Anthropic: collega solo servizi di cui ti fidi, leggi i permessi che concedi e usa \"Consenti sempre\" solo per le azioni di sola lettura. Per pubblicare, lascia che Claude ti chieda conferma ogni volta."
    },
    {
      "type": "h2",
      "heading": "4. Cosa può fare Claude sul tuo Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/05-slide-05.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Composio mette a disposizione **più di 30 azioni Instagram** (nel video ne contavo 29: il numero cresce con gli aggiornamenti). Con Composio Connect Claude non le vede tutte insieme: le cerca e le usa quando gli servono, per questo è importante chiedere in modo chiaro cosa vuoi."
    },
    {
      "type": "table",
      "headers": [
        "Area",
        "Cosa può fare Claude",
        "Da sapere"
      ],
      "rows": [
        [
          "Pubblicazione",
          "Post con foto, caroselli (2-10 elementi), reel e storie",
          "Pubblica in due passi: prepara il contenuto, poi lo pubblica"
        ],
        [
          "Commenti",
          "Leggere, rispondere, eliminare, attivare o disattivare i commenti di un post",
          "Serve il permesso di gestione dei commenti"
        ],
        [
          "Menzioni",
          "Rispondere a chi ti menziona",
          ""
        ],
        [
          "Messaggi diretti",
          "Leggere le conversazioni, inviare testo e immagini",
          "Solo a chi ti ha scritto, di norma entro 24 ore dal suo messaggio"
        ],
        [
          "Statistiche",
          "Dati del profilo e dei singoli post",
          "Alcuni dati non ci sono sotto i 100 follower"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** Instagram non ha una vera programmazione dei post via API. Se chiedi \"pubblica domani alle 18\", Claude deve essere attivo in quel momento (per esempio con le attività pianificate di Claude, se il tuo piano le include). Per programmare in modo affidabile usa uno strumento dedicato (vedi il Bonus)."
    },
    {
      "type": "h2",
      "heading": "5. I prompt che funzionano (copia e incolla)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/06-slide-06.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Copia il prompt, sostituisci le parti tra parentesi quadre e incollalo in Claude con Composio attivo. Tutti i prompt che pubblicano chiedono prima un'anteprima: tieni questa abitudine."
    },
    {
      "type": "h3",
      "heading": "Collegamento e controllo",
      "content": ""
    },
    {
      "type": "code",
      "content": "Usa Composio e controlla il mio account Instagram: dimmi nome utente, numero di follower, gli ultimi 5 post con data e numero di like e commenti, e quanti post posso ancora pubblicare nelle prossime 24 ore. Non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Verifichi che il collegamento funzioni, senza rischi."
    },
    {
      "type": "h3",
      "heading": "Pubblicare",
      "content": ""
    },
    {
      "type": "code",
      "content": "Prepara un post Instagram con questa foto: [LINK PUBBLICO DELLA FOTO .jpg]. Argomento: [ARGOMENTO]. Scrivi una didascalia per [IL TUO CLIENTE IDEALE] con: prima riga che incuriosisce, 3 frasi utili, invito a commentare [PAROLA] e massimo 5 hashtag pertinenti. Mostrami l'anteprima e pubblica solo quando ti scrivo \"OK pubblica\"."
    },
    {
      "type": "paragraph",
      "content": "È il prompt base: tu controlli il testo, Claude fa il resto."
    },
    {
      "type": "code",
      "content": "Crea un carosello Instagram con queste immagini, in quest'ordine: [LINK 1], [LINK 2], [LINK 3]. Tema: [TEMA]. Scrivi una didascalia che riassuma il carosello e inviti a salvarlo. Prima di pubblicare mostrami ordine delle immagini e testo."
    },
    {
      "type": "paragraph",
      "content": "I caroselli sono il formato più salvato: Claude li monta per te."
    },
    {
      "type": "code",
      "content": "Pubblica come Reel questo video: [LINK PUBBLICO DEL VIDEO .mp4]. Scrivi una didascalia con la parola chiave [PAROLA CHIAVE] nella prima riga, una domanda per i commenti e 3-5 hashtag. Il contenuto [È / NON È] creato con l'IA: se lo è, segnalo come contenuto generato con l'IA. Mostrami tutto prima di pubblicare."
    },
    {
      "type": "paragraph",
      "content": "Ricordi a Claude anche l'etichetta IA, quando serve."
    },
    {
      "type": "code",
      "content": "Pubblica questa immagine come storia: [LINK PUBBLICO .jpg]. Poi dimmi se è stata pubblicata correttamente."
    },
    {
      "type": "paragraph",
      "content": "Le storie via API non possono avere sticker: per link e sondaggi usa l'app."
    },
    {
      "type": "h3",
      "heading": "Pianificare i contenuti",
      "content": ""
    },
    {
      "type": "code",
      "content": "Analizza i miei ultimi 20 post Instagram e dimmi quali argomenti e formati hanno avuto più interazioni. Poi proponi un piano editoriale di 7 giorni per [LA MIA ATTIVITÀ] a [CITTÀ]: per ogni giorno formato (reel, carosello, foto o storia), idea, prima riga della didascalia e orario consigliato in base ai miei dati. Non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Parti dai tuoi numeri, non da idee a caso."
    },
    {
      "type": "h3",
      "heading": "Commenti e messaggi",
      "content": ""
    },
    {
      "type": "code",
      "content": "Leggi i commenti degli ultimi 3 post e dividili in: domande, complimenti, critiche e spam. Per domande e complimenti scrivi una risposta breve, cordiale e nel mio tono ([DESCRIVI IL TUO TONO: es. diretto, simpatico, dai del tu]). Mostrami l'elenco commento → risposta e rispondi solo a quelli che approvo. Non eliminare nulla senza chiedermelo."
    },
    {
      "type": "paragraph",
      "content": "Rispondi a tutti in pochi minuti, senza risposte automatiche fredde."
    },
    {
      "type": "code",
      "content": "Controlla i messaggi diretti non letti. Fammi un riassunto di chi ha scritto e cosa chiede, segnala le possibili richieste di preventivo e prepara una bozza di risposta per ognuno. Non inviare nulla senza la mia conferma."
    },
    {
      "type": "paragraph",
      "content": "Non perdi i clienti che ti scrivono in DM."
    },
    {
      "type": "h3",
      "heading": "Statistiche e report",
      "content": ""
    },
    {
      "type": "code",
      "content": "Fammi il report Instagram degli ultimi 7 giorni: copertura, interazioni, nuovi follower, i 3 post migliori e i 3 peggiori con il motivo probabile. Chiudi con 3 azioni concrete per la prossima settimana. Scrivilo in modo semplice, come se lo spiegassi a un imprenditore che non è esperto di social."
    },
    {
      "type": "paragraph",
      "content": "Ogni lunedì sai cosa funziona, in 2 minuti."
    },
    {
      "type": "code",
      "content": "Prendi il mio post con più interazioni degli ultimi 3 mesi e proponi 3 modi per riutilizzarlo: un carosello, un reel parlato (con il testo da leggere) e una storia. Non pubblicare: voglio solo le bozze."
    },
    {
      "type": "paragraph",
      "content": "Moltiplichi i contenuti che hanno già funzionato."
    },
    {
      "type": "h2",
      "heading": "6. I limiti da conoscere (e le regole di Meta)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/07-slide-07.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude usa le API ufficiali di Instagram, quindi ha gli stessi limiti che Meta impone a tutte le app di pubblicazione. Saperlo prima ti evita tentativi a vuoto. E ricorda: usa Claude per lavorare meglio, non di più. Meno post ma utili, risposte vere ai commenti e un ritmo costante sono ciò che premia l'algoritmo e ti protegge dalle limitazioni."
    },
    {
      "type": "table",
      "headers": [
        "Cosa",
        "Via Claude",
        "Nota"
      ],
      "rows": [
        [
          "Foto",
          "Sì",
          "Solo JPG, massimo 8 MB, da un link pubblico"
        ],
        [
          "Reel",
          "Sì",
          "MP4 o MOV, da 3 secondi a 15 minuti, formato 9:16 consigliato"
        ],
        [
          "Storie",
          "Sì",
          "Senza sticker (link, sondaggi, posizione)"
        ],
        [
          "Caroselli",
          "Sì",
          "Gli elementi vengono ritagliati come il primo"
        ],
        [
          "Collaboratori",
          "Sì",
          "Fino a 3 per post, reel o carosello"
        ],
        [
          "Musica dalla libreria di Instagram",
          "No",
          "Solo l'audio originale del video"
        ],
        [
          "Filtri e tag dei prodotti",
          "No",
          "Da fare nell'app"
        ],
        [
          "Programmare un post",
          "No (nativo)",
          "Serve uno strumento dedicato o un'attività pianificata"
        ],
        [
          "Quantità",
          "Limitata",
          "50 post ogni 24 ore (Meta indica 50 o 100 in pagine diverse: il limite reale si controlla con l'apposita azione)"
        ],
        [
          "Didascalia",
          "Sì",
          "Massimo 2.200 caratteri, 30 hashtag e 20 menzioni"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Il link pubblico:** Instagram scarica il file dal link che gli passi. Il link deve aprire direttamente il file (spesso finisce con .jpg o .mp4), non una pagina di anteprima: i normali link di condivisione di Google Drive di solito non funzionano. Usa il tuo sito o un servizio di hosting di immagini e video."
    },
    {
      "type": "h3",
      "heading": "Le regole di Meta da rispettare",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Contenuti IA:** video fotorealistici e audio realistici creati o modificati con l'IA vanno etichettati come \"Contenuti IA\", altrimenti rischi sanzioni ([guida Instagram](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT));",
        "**Niente spam:** pubblicare o interagire in automatico con frequenze molto alte, o con contenuti ripetitivi, può portare a limitazioni del profilo ([standard della community sullo spam](https://transparency.meta.com/it-it/policies/community-standards/spam/));",
        "**Messaggi:** puoi scrivere in DM solo a chi ti ha scritto per primo; la finestra standard per rispondere è di 24 ore;",
        "**Risposta privata a un commento:** un solo messaggio, entro 7 giorni dal commento;",
        "**Niente like o follower comprati**, nemmeno \"in automatico\"."
      ]
    },
    {
      "type": "h2",
      "heading": "Bonus: alternative a Composio e risorse per Claude Code",
      "content": "Composio è la strada più flessibile, ma non l'unica. Se ti serve soprattutto **programmare** i post, questi servizi hanno un connettore per Claude e un calendario vero."
    },
    {
      "type": "table",
      "headers": [
        "Servizio",
        "Cosa fa con Instagram",
        "Prezzo (ottobre 2026)",
        "Come collegarlo"
      ],
      "rows": [
        [
          "[Metricool](https://claude.com/connectors/metricool-social-media-management)",
          "Programma post, caroselli e reel; statistiche di più social",
          "Funziona anche con il piano gratuito di Metricool",
          "Connettore nella directory di Claude, verificato da Anthropic"
        ],
        [
          "[Buffer](https://developers.buffer.com/guides/integrations/claude.html)",
          "Crea e programma post su Instagram e altri social",
          "Dipende dal piano Buffer (da verificare)",
          "Personalizza → Connettori → cerca \"Buffer\""
        ],
        [
          "[Zernio](https://zernio.com/instagram-mcp)",
          "Post, caroselli, reel, storie, commenti, DM e statistiche",
          "MCP gratuito; 2 account Instagram gratis, poi $6/mese per account",
          "Connettore personalizzato: https://mcp.zernio.com/mcp"
        ],
        [
          "[Meta Ads MCP](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview)",
          "Solo campagne pubblicitarie, niente post organici",
          "Da verificare",
          "Connettore ufficiale Meta: https://mcp.facebook.com/ads"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Per chi usa Claude Code",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Documentazione MCP di Claude Code](https://code.claude.com/docs/en/mcp): come aggiungere, autenticare e gestire i connettori (comandi claude mcp add e /mcp);",
        "[Composio Connect](https://docs.composio.dev/docs/composio-connect): l'URL unico e il plugin di Composio per Claude Code e altri agenti;",
        "[Strumenti Instagram di Composio](https://docs.composio.dev/toolkits/instagram): l'elenco completo delle azioni, utile per scrivere prompt precisi;",
        "[Guida Meta alla pubblicazione](https://developers.facebook.com/docs/instagram-platform/content-publishing): formati, dimensioni e limiti aggiornati."
      ]
    },
    {
      "type": "code",
      "content": "Ogni lunedì mattina: usa Composio, leggi le statistiche Instagram della settimana passata, scrivi il report in 10 righe con 3 azioni consigliate e prepara 3 bozze di post per la settimana (formato, testo, idea per l'immagine). Salva tutto in un documento e non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Da usare come attività pianificata in Claude o in Claude Code: ogni settimana trovi report e bozze pronti."
    },
    {
      "type": "h2",
      "heading": "7. Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/08-slide-08.webp",
      "alt": "Guida pratica: Claude che lavora sul tuo Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude è un ottimo assistente social, ma la strategia resta tua: a chi parli, cosa vendi, quale azione vuoi dal cliente. Quando questi punti sono chiari, l'IA ti fa risparmiare ore ogni settimana senza togliere personalità al tuo profilo."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "vuoi che chi commenta una parola riceva in automatico la risorsa in DM;",
        "pubblichi poco perché non hai tempo di creare contenuti;",
        "hai tanti messaggi e commenti e rischi di perdere richieste di preventivo;",
        "vuoi collegare Instagram a WhatsApp, CRM e funnel di vendita;",
        "vuoi un agente IA con Claude costruito sulla tua attività."
      ]
    },
    {
      "type": "h3",
      "heading": "Come possiamo aiutarti",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Automazioni Instagram: commento → DM con la risorsa, risposte e raccolta contatti",
        "Contenuti, reel e immagini creati con l'IA",
        "Agenti IA con Claude per social, clienti e back office",
        "Funnel, WhatsApp e CRM collegati",
        "Formazione per te e il tuo team"
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp, dimmi cosa vendi e mandami il link del tuo profilo Instagram: ti dico cosa conviene automatizzare per primo e come."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Claude_Instagram.pdf](/guide/claude-per-instagram.pdf)"
    }
  ]
}

export default post
