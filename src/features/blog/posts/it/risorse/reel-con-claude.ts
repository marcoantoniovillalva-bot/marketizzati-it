import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "reel-con-claude",
  "title": "Guida pratica Reel con Claude",
  "description": "Il flusso reale di Marco e il percorso semplificato per un imprenditore",
  "date": "2026-10-31",
  "readTime": 10,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guida pratica Reel con Claude",
    "Il flusso reale di Marco e il percorso semplificato per un imprenditore",
    "Guida pratica Reel",
    "pratica Reel con",
    "Reel con Claude",
    "con Claude Il"
  ],
  "image": "/images/blog/covers/reel-con-claude-wide.webp",
  "imageTall": "/images/blog/covers/reel-con-claude-tall.webp",
  "imageAlt": "Reel con Claude — il passo a passo per partire e cosa automatizzare dopo",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/reel-con-claude/01-slide-01.webp", "alt": "Reel con Claude — il passo a passo per partire e cosa automatizzare dopo" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Nel video ti ho promesso il **passo a passo gratuito** per fare lo stesso: partire dal girato, montare un reel, preparare copertina, testi e risorsa, arrivare alla pubblicazione e alla consegna in DM. Qui trovi il sistema che ho costruito e una versione più semplice per la tua azienda. **La guida è gratuita; gli strumenti non sono tutti gratuiti.** Fonti ufficiali controllate il 31 ottobre 2026."
    },
    {
      "type": "list",
      "items": [
        "Prepara un primo reel con una cartella, un agente e un template riutilizzabile.",
        "Usa i prompt pronti per montaggio, guida e testi; controlla il risultato prima di pubblicare.",
        "Aggiungi collegamenti e DM soltanto dopo un test; conosci costi e limiti."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** un prompt breve funziona bene **dopo** che hai preparato un sistema. La prima configurazione richiede tempo e può richiedere aiuto tecnico. Non serve ricreare tutto il mio software per cominciare."
    },
    {
      "type": "cta",
      "heading": "Vuoi il flusso pronto per la tua attività?",
      "content": "**Se vuoi che te lo facciamo noi, scrivici.** Partiamo dal tuo modo di lavorare, prepariamo template e collegamenti e ti mostriamo come usarli."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali per iniziare",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code e installazione](https://code.claude.com/docs/en/overview)",
        "[Skill riutilizzabili](https://code.claude.com/docs/en/skills)",
        "[Remotion e licenza](https://www.remotion.dev/docs/license)",
        "[HyperFrames, alternativa HTML](https://github.com/heygen-com/hyperframes)",
        "[Composio per Instagram](https://docs.composio.dev/toolkits/instagram)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cosa ho costruito davvero",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/02-slide-02.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Ho collegato strumenti e script in una pipeline personalizzata.** Claude può guidare il lavoro e richiamare le istruzioni salvate nelle skill, ma trascrizione, acquisizione dello schermo e render sono eseguiti da programmi. Il risultato è frutto di setup, prove e correzioni. La revisione umana del risultato resta necessaria."
    },
    {
      "type": "table",
      "headers": [
        "Passaggio reale",
        "Cosa c’è dietro",
        "Versione semplice"
      ],
      "rows": [
        [
          "Montaggio",
          "Whisper/faster-whisper, Python, correzione sottotitoli, tracking volto, piano zoom e render Remotion.",
          "Un template, sottotitoli corretti e pochi zoom."
        ],
        [
          "Tutorial e grafica",
          "Playwright registra pagine e azioni reali; b-roll e pose della mascotte sono sincronizzati.",
          "Registra tu la demo; usa due icone o una posa già pronta."
        ],
        [
          "Guida e testi",
          "Specifiche JSON, slide HTML, DOCX e conversione PDF; copertina da fotogramma reale.",
          "Un documento breve, un titolo e quattro descrizioni controllate."
        ],
        [
          "Pubblicazione e DM",
          "Motore separato con coda, API, account collegati, webhook e regole per parola/post.",
          "Pubblica tu e consegna inizialmente il link a mano."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Nel mio flusso attuale sfocatura e color grade restano una lavorazione a parte: per iniziare puoi saltarli. Alcuni script editoriali usano API a consumo tramite OpenRouter; non sono compresi automaticamente nell’abbonamento Claude. Il sistema di pubblicazione è personalizzato: **non è Composio**."
    },
    {
      "type": "h2",
      "heading": "2. Prepara una volta il tuo piccolo sistema",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/03-slide-03.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "Ti servono un computer, il girato, il copione esatto e le tue risorse di marca. Parti con **un video breve**, per esempio 30–60 secondi: è un consiglio di lavoro, non un limite tecnico. Se hai già un piano idoneo di Claude Code o Codex usa quello, senza acquistare subito altri servizi. [Playwright](https://playwright.dev/docs/intro) serve solo se automatizzi le registrazioni."
    },
    {
      "type": "list",
      "items": [
        "Crea una cartella chiamata **Reel azienda**, con tre sottocartelle: **Ingresso**, **Lavoro**, **Consegna**. In Ingresso metti una copia del video, il copione e il logo. Conserva gli originali.",
        "Installa Claude Code seguendo la pagina ufficiale e accedi. Apri la cartella di lavoro nel programma. Se l’installazione si blocca, copia il messaggio all’agente e fatti spiegare il problema in italiano. Non incollare password o chiavi in chat.",
        "Fai preparare **un solo template**: verticale, sottotitoli leggibili, colori della tua marca e due livelli di zoom. Scegli Remotion se parti da un template React; HyperFrames è un’alternativa HTML. Non ti servono entrambi.",
        "Salva le istruzioni approvate come skill. Scarica la skill già pronta da questo link: [SKILL_Reel_Semplice.md](https://drive.google.com/file/d/19u4cdUSEhG1XZxKIrk8PpQVPD2HiZE7c/view?usp=sharing). Poi chiedi all’agente di adattarla e installarla come skill di progetto secondo la documentazione ufficiale. È un punto di partenza, non un editor già installato."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Prepara in questa cartella un flusso per un reel verticale. Leggi Ingresso e conserva gli originali. Prima verifica computer e dipendenze; spiegami cosa manca. Usa un solo motore, Remotion oppure HyperFrames, con licenza adatta alla mia azienda. Crea un template minimo con sottotitoli e due zoom; niente musica generata, sfocatura o servizi a pagamento. Salva gli output in Lavoro e Consegna. Prima di scaricare componenti grandi indicami dimensione e motivo. Non pubblicare nulla. Dammi un’anteprima di 10 secondi e istruzioni semplici per riusare il template."
    },
    {
      "type": "paragraph",
      "content": "fa emergere il lavoro iniziale e ti permette di approvare uno stile prima di elaborare tutto il video."
    },
    {
      "type": "h2",
      "heading": "3. Dal girato al primo reel",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/04-slide-04.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Prima leggilo, poi guardalo e ascoltalo.** Whisper riconosce il parlato; nomi, sigle e punteggiatura possono essere sbagliati. Un template riutilizzabile riduce il lavoro, ma la regia e il controllo restano importanti. Il modello locale non ha tariffa per minuto: usa memoria e processore, e su CPU può impiegare parecchio tempo."
    },
    {
      "type": "list",
      "items": [
        "Fai trascrivere il girato in italiano con timestamp, confrontando il risultato con il copione. Correggi prima i nomi degli strumenti e la parola della CTA.",
        "Taglia solo attese e parti concordate. Chiedi sottotitoli brevi e un cambio di zoom sulle frasi chiave; evita un effetto diverso su ogni parola.",
        "Aggiungi una tua registrazione dello schermo nei punti del tutorial. Per il primo video puoi registrarla manualmente; Playwright è un’opzione avanzata. Login e consensi li gestisci tu.",
        "Guarda l’anteprima di 10 secondi, correggi stile e posizione dei sottotitoli, poi chiedi l’MP4 completo. Per questo formato: 1080×1920, 30 fps, voce comprensibile. Controlla anche su telefono."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Usa il template approvato sul video in Ingresso. Confronta la trascrizione con il copione, segnala le parole dubbie e conserva i timestamp. Taglia solo attese iniziali/finali e pause che ti ho approvato. Metti sottotitoli brevi e pochi zoom sulle frasi importanti; non coprire il volto. Usa soltanto i materiali forniti o con fonte e licenza annotate. Crea l’anteprima e poi l’MP4 completo; prepara una lista di cose da controllare, senza pubblicare."
    },
    {
      "type": "paragraph",
      "content": "rende ripetibile la richiesta e riduce il rischio di correzioni creative non volute."
    },
    {
      "type": "callout",
      "content": "**Controllo prima di andare avanti:** nessuna parola tagliata, sottotitoli corretti, volto e titolo dentro il ritaglio social, musica più bassa della voce. Una voce chiara vale più di una mascotte animata. Se qualcosa è incerto, correggilo prima del render finale."
    },
    {
      "type": "h2",
      "heading": "4. Copertina, testi e risorsa utile",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/05-slide-05.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "La risorsa deve mantenere **la promessa detta nel video**. Prima identifica parola da commentare e materiale da inviare; poi prepara una guida concreta con passaggi, link e limiti. La copertina parte da un fotogramma vero, mantiene il tuo volto e usa un titolo corto. Le immagini generate sono facoltative; puoi usare il fotogramma con testo e logo senza altri costi."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Dal copione approvato estrai tema, parola CTA e promessa esatta. Prepara una guida italiana compatta che soddisfi la promessa, con link ufficiali verificati, azioni semplici, costi e limiti. Non inventare funzioni, risultati o prezzi. Scrivi testi distinti per Instagram, TikTok, LinkedIn e YouTube Shorts; Instagram e TikTok sotto 2.200 caratteri inclusi gli hashtag. Usa una sola parola CTA. Proponi un titolo di copertina su due righe e un fotogramma reale nitido. Salva una bozza della guida in DOCX/PDF e i testi in Consegna. Lascia [LINK_GUIDA_DA_INSERIRE] finché non ti fornisco l’URL pubblico."
    },
    {
      "type": "paragraph",
      "content": "mantiene coerenti video, guida e commento senza promettere più di quello che consegni."
    },
    {
      "type": "list",
      "items": [
        "Apri il PDF ed esamina ogni pagina. Verifica che link e schermate non contengano dati privati e che i passaggi siano applicabili alla tua attività.",
        "Carica la guida nella tua cartella Drive, imposta l’accesso che vuoi offrire ai lettori e prova il link in una finestra senza login. Poi sostituisci il segnaposto nei testi.",
        "Controlla copertina e ritaglio della griglia: titolo e viso devono restare al centro. Rileggi le quattro descrizioni prima di copiarle nelle piattaforme."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Pubblicazione e DM senza complicarti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/06-slide-06.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Prima pubblica e consegna tu.** Prova il reel, la parola RISORSA e il link della guida con un contatto disponibile al test. Dopo che funziona puoi automatizzare un solo canale. Composio può semplificare la connessione a Instagram; non monta il video e non crea da solo un sistema completo di commenti e messaggi."
    },
    {
      "type": "list",
      "items": [
        "Consegna minima: pubblica il reel dall’app, leggi i commenti e invia la guida manualmente quando la messaggistica lo consente. Se il DM non passa, invita la persona a scriverti in privato.",
        "Opzione Composio: crea un account, scegli Instagram e collega un profilo **Business o Creator** con la procedura OAuth. Completa personalmente accesso e consensi. Controlla quali azioni sono disponibili alla tua connessione.",
        "Fai preparare dall’agente una bozza di pubblicazione e verificala. Parti senza programmazione e senza invio massivo; aggiungi la pubblicazione soltanto dopo una prova riuscita.",
        "Per commento → DM serve un flusso che intercetti il commento, riconosca la parola sul post giusto e usi una **risposta privata al commento** compatibile con Meta. Se il connettore non espone questa azione, resta sull’invio manuale o usa un servizio che la supporti esplicitamente.",
        "Prova account che ti segue, account che non ti segue, commento ripetuto e link non accessibile. Mantieni un modo per vedere gli errori e intervenire. Il controllo del follow non è garantito; il mio ramo Facebook non lo esegue."
      ]
    },
    {
      "type": "callout",
      "content": "**Il limite che cambia il flusso:** il normale invio di messaggi Instagram richiede la finestra di risposta applicabile: un commento non apre da solo le 24 ore. Meta prevede una risposta privata al commento entro 7 giorni, con un solo messaggio iniziale; i successivi dipendono dalla risposta della persona. Collegare Composio non elimina questi requisiti. Fonti: [Meta](https://developers.facebook.com/documentation/instagram-platform/private-replies) e [Composio](https://docs.composio.dev/kb/guide/toolkits-instagram)."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Valuta solo Instagram per iniziare. Verifica account, autorizzazioni e azioni realmente disponibili in Composio. Prepara una prova senza pubblicare. Per la parola RISORSA sul post scelto verifica se è supportata la risposta privata al commento; non sostituirla con un normale DM fuori finestra. Se manca, spiegami come consegnare manualmente. Mostrami post, testo, destinatari di test e possibili errori prima dell’attivazione. Non promettere che il follow sia sempre verificabile."
    },
    {
      "type": "paragraph",
      "content": "evita di confondere un collegamento riuscito con un’automazione già funzionante."
    },
    {
      "type": "h2",
      "heading": "6. Costi e percorso avanzato",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/07-slide-07.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Puoi saltare musica IA, mascotte animata, registrazione automatica dei tutorial e pubblicazione multi-social.** Il primo risultato utile è un reel corretto con una guida davvero accessibile. Aggiungi un’automazione solo se il tempo risparmiato giustifica configurazione e manutenzione. Prezzi rilevati a ottobre 2026, in dollari; controlla valuta, imposte e piano al momento dell’acquisto."
    },
    {
      "type": "table",
      "headers": [
        "Voce",
        "Costo o condizione",
        "Come partire"
      ],
      "rows": [
        [
          "[Claude Code](https://claude.com/pricing)",
          "Pro: 20 $/mese mensile, limiti d’uso. API a consumo separate.",
          "Usa il piano già disponibile e controlla il limite."
        ],
        [
          "[Whisper e Playwright locali](https://github.com/SYSTRAN/faster-whisper)",
          "Nessuna tariffa per minuto; servono computer, spazio e tempo.",
          "Trascrivi in locale e registra il tutorial a mano."
        ],
        [
          "[Remotion](https://www.remotion.dev/docs/license)",
          "Gratis per individui/organizzazioni fino a 3 persone. Oltre, licenza da verificare.",
          "Per team maggiori verifica la categoria prima del lavoro."
        ],
        [
          "[HyperFrames](https://github.com/heygen-com/hyperframes)",
          "Apache 2.0; restano macchina, agente e servizi esterni.",
          "Alternativa a Remotion, non un componente obbligatorio."
        ],
        [
          "[Composio](https://composio.dev/pricing)",
          "Hobby 0 $ con quote e arresto al limite; provider IA separati.",
          "Facoltativo: inizia da pubblicazione e invio manuali."
        ],
        [
          "[Musica Replicate](https://replicate.com/minimax/music-2.6)",
          "MiniMax Music 2.6: 0,15 $ per file generato.",
          "Saltala; usa una traccia con licenza adatta o solo voce."
        ],
        [
          "[Codex](https://github.com/openai/codex)",
          "Accesso e limiti dipendono dal piano; API eventualmente a consumo.",
          "Alternativa di sviluppo se lo usi già."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Per Remotion oltre tre persone la pagina ufficiale distingue Creators (25 $/utente/mese) e Automators (0,01 $/render, minimo 100 $/mese): il tipo d’uso va valutato. Le quote di Composio dipendono anche dalle app OAuth utilizzate: non considerarlo illimitato. Una traccia royalty-free conserva condizioni di licenza; una traccia generata non diventa automaticamente priva di diritti."
    },
    {
      "type": "h3",
      "heading": "Quando passare al sistema avanzato",
      "content": "Se pubblichi con continuità, puoi aggiungere regia dei b-roll, registrazioni Playwright, musica sui beat, riuso della mascotte e un motore di pubblicazione. Il mio motore separato carica il video, pianifica i quattro canali, segue l’elaborazione e associa la regola commenti. Richiede hosting, archivio, database, autorizzazioni e manutenzione; non è un plugin da accendere. TikTok può richiedere l’ultimo passaggio manuale se l’app non è approvata per la pubblicazione diretta. I costi del sistema completo dipendono dall’utilizzo: **nessun costo mensile totale è garantito qui**."
    },
    {
      "type": "h2",
      "heading": "Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/08-slide-08.webp",
      "alt": "Guida pratica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "Per capire se il sistema ti serve, completa prima un ciclo: **girato → reel controllato → guida accessibile → consegna riuscita**. Misura quanto tempo hai impiegato e dove ti sei fermato. Possiamo aiutarti a impostare il template, semplificare il processo, collegare gli account e formare chi lo userà. Il controllo editoriale rimane tuo."
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "**Se vuoi che te lo facciamo noi, scrivici.** Raccontaci quanti video prepari, su quali canali pubblichi e cosa vuoi inviare a chi commenta: scegliamo insieme la versione più semplice da mantenere."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Reel_con_Claude.pdf](/guide/reel-con-claude.pdf)"
    }
  ]
}

export default post
