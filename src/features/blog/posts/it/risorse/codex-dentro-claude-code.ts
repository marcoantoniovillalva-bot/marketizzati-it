import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "codex-dentro-claude-code",
  "title": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat",
  "description": "La guida promessa nel video: cos'è il plugin ufficiale di OpenAI che porta Codex dentro Claude Code, cosa ti serve, i 4 comandi di installazione…",
  "date": "2026-10-26",
  "readTime": 12,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Guida pratica",
    "Codex dentro Claude Code",
    "due agenti IA in una sola chat",
    "La guida promessa nel video",
    "cos'è il plugin ufficiale di OpenAI che porta Codex dentro Claude Code",
    "cosa ti serve"
  ],
  "image": "/images/blog/covers/codex-dentro-claude-code-wide.webp",
  "imageTall": "/images/blog/covers/codex-dentro-claude-code-tall.webp",
  "imageAlt": "Il plugin ufficiale di OpenAI che fa lavorare Codex dentro Claude Code: installazione, comandi, prompt pronti, limiti e costi",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/codex-dentro-claude-code/01-slide-01.webp", "alt": "Il plugin ufficiale di OpenAI che fa lavorare Codex dentro Claude Code: installazione, comandi, prompt pronti, limiti e costi" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Se paghi già Claude e ChatGPT, probabilmente li usi in due finestre diverse. Con il **plugin Codex per Claude Code**, pubblicato da OpenAI come progetto open source, puoi chiamare **Codex** (l'agente di programmazione di OpenAI) direttamente dalla chat di **Claude Code**: Claude scrive, Codex controlla o prende in carico un compito, e tu resti nella stessa conversazione. Qui trovi tutti i comandi del video, verificati sulla documentazione ufficiale, più quello che nel video non c'era il tempo di dire."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "capire cosa fa il plugin e quando ti conviene usarlo;",
        "verificare in 2 minuti di avere tutto il necessario (piani, programmi, sistema operativo);",
        "installarlo con i 4 comandi del video e collegare il tuo account ChatGPT;",
        "usare /codex:review, /codex:rescue e gli altri comandi, con prompt pronti da copiare;",
        "tenere sotto controllo limiti, costi e sicurezza;",
        "risolvere da solo i problemi più comuni."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** **/codex:review controlla, /codex:rescue agisce.** La review non tocca mai i tuoi file; rescue invece può modificarli. Prima di dare un compito a Codex salva il lavoro con Git (un commit), così puoi sempre tornare indietro."
    },
    {
      "type": "cta",
      "heading": "Vuoi una squadra di agenti IA già configurata?",
      "content": "Se vuoi usare Claude Code e Codex sui tuoi progetti (sito, automazioni, gestionale) senza perdere ore in configurazioni, scrivimi su WhatsApp: guardiamo insieme da dove partire."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Plugin Codex per Claude Code (GitHub, OpenAI)](https://github.com/openai/codex-plugin-cc)",
        "[Claude Code - installare plugin e marketplace](https://code.claude.com/docs/en/discover-plugins)",
        "[Claude Code - app Desktop](https://code.claude.com/docs/en/desktop)",
        "[Claude Code - requisiti e installazione](https://code.claude.com/docs/en/setup)",
        "[Codex CLI - installazione](https://learn.chatgpt.com/docs/codex/cli)",
        "[Codex - accesso con ChatGPT o chiave API](https://learn.chatgpt.com/docs/auth)",
        "[Codex - prezzi e limiti](https://learn.chatgpt.com/docs/pricing)",
        "[Codex con il tuo piano ChatGPT (centro assistenza)](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)",
        "[Node.js - download](https://nodejs.org/en/download)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cos'è il plugin Codex per Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/02-slide-02.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "**Cos'è il plugin Codex per Claude Code?** È un'estensione gratuita e open source (licenza Apache 2.0) pubblicata da OpenAI il 30 marzo 2026 nel repository **openai/codex-plugin-cc**, che aggiunge a Claude Code i comandi **/codex:…**. Non è un nuovo programma: usa la **Codex CLI** installata sul tuo computer, con lo stesso account, le stesse impostazioni e la stessa cartella di progetto. In pratica Claude Code diventa il capo squadra e Codex il secondo agente che puoi chiamare quando serve."
    },
    {
      "type": "table",
      "headers": [
        "Chi",
        "Cos'è",
        "Ruolo nella squadra"
      ],
      "rows": [
        [
          "**Claude Code**",
          "l'agente di programmazione di Anthropic (app Desktop, terminale, VS Code)",
          "la chat in cui lavori: scrive, modifica, coordina"
        ],
        [
          "**Codex**",
          "l'agente di programmazione di OpenAI, incluso nei piani ChatGPT",
          "il secondo parere: rivede il codice o prende in carico un compito"
        ],
        [
          "**Il plugin**",
          "il \"ponte\" ufficiale di OpenAI (versione 1.0.6, luglio 2026)",
          "aggiunge i comandi /codex:… e un subagente chiamato codex:codex-rescue"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Quando conviene a un imprenditore:** **seconda opinione** prima di pubblicare un sito o un'automazione; **sblocco** quando Claude gira in tondo su un errore; **risparmio** dei limiti di Claude, delegando a Codex i compiti lunghi; **controllo di sicurezza** sul codice scritto dall'IA."
    },
    {
      "type": "h2",
      "heading": "2. Cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/03-slide-03.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Il plugin è gratuito, ma servono i due \"cervelli\": un piano Claude che includa Claude Code e un account ChatGPT per Codex. Prezzi rilevati a ottobre 2026 sulle pagine ufficiali, in dollari e IVA esclusa."
    },
    {
      "type": "table",
      "headers": [
        "Requisito",
        "Dettaglio",
        "Costo"
      ],
      "rows": [
        [
          "**Claude Code**",
          "app Claude Desktop (scheda Code), terminale o VS Code. Il piano Free di Claude **non** include Claude Code",
          "Claude Pro 17 $/mese (annuale) o 20 $ mensile; Max da 100 $"
        ],
        [
          "**Account ChatGPT** o chiave API OpenAI",
          "Codex è incluso nei piani ChatGPT, anche Free e Go; con la chiave API paghi a consumo",
          "Free 0 $, Go 8 $, Plus 20 $, Pro da 100 $ al mese"
        ],
        [
          "**Node.js 18.18 o successivo**",
          "serve al plugin per funzionare (e porta con sé npm)",
          "gratis, da nodejs.org"
        ],
        [
          "**Codex CLI**",
          "se manca, la installa /codex:setup al passo 4",
          "gratis"
        ],
        [
          "**Sistema operativo**",
          "Windows 10 1809+ (meglio Windows 11), macOS 13+, Ubuntu 20.04+",
          "-"
        ],
        [
          "**Git** (consigliato)",
          "/codex:review lavora sulle modifiche registrate da Git; su Windows installa Git for Windows",
          "gratis, da git-scm.com"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** nel video dico che funziona anche con il piano **Free** di ChatGPT, ed è quello che dichiara OpenAI. Però la pagina prezzi di Codex, per Free e Go, cita solo un modello base \"nell'app desktop, in base alla disponibilità\", mentre la CLI è elencata da **Plus** in su. Con Free provalo pure, ma aspettati limiti bassi: per un uso regolare serve Plus."
    },
    {
      "type": "h2",
      "heading": "3. Installazione: i 4 comandi del video",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/04-slide-04.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Apri **Claude Code** (nell'app Desktop, scheda **Code**) e apri la cartella del tuo progetto. Nella chat scrivi questi comandi **uno alla volta**, aspettando che ognuno finisca. Sono copiati dal README ufficiale di OpenAI: scrivili esattamente così, tutto minuscolo."
    },
    {
      "type": "code",
      "content": "# 1. Aggiunge il marketplace di OpenAI (il \"negozio\" da cui arriva il plugin)\n/plugin marketplace add openai/codex-plugin-cc\n# 2. Installa il plugin \"codex\" dal marketplace \"openai-codex\"\n/plugin install codex@openai-codex\n# 3. Ricarica i plugin per attivarlo subito\n/reload-plugins\n# 4. Controlla che Codex sia installato e collegato\n/codex:setup\n# 5. Se /codex:setup dice che non hai fatto l'accesso:\n!codex login"
    },
    {
      "type": "list",
      "items": [
        "**/plugin marketplace add openai/codex-plugin-cc** - Claude Code risponde \"Successfully added marketplace\".",
        "**/plugin install codex@openai-codex** - si apre la scheda del plugin: scegli **Install for you** (lo avrai in tutti i progetti). Attenzione: installa il **plugin**, non ancora il programma Codex.",
        "**/reload-plugins** - attiva il plugin senza riavviare. Spesso Claude Code lo fa già da solo dopo l'installazione: rilanciarlo non fa danni.",
        "**/codex:setup** - controlla che la Codex CLI sia installata e collegata. Se manca e hai npm, ti propone **Install Codex**: accetta (esegue npm install -g @openai/codex).",
        "**!codex login** - il punto esclamativo esegue il comando dalla chat: si apre il browser, scegli **Sign in with ChatGPT** e accedi. Se usi Codex già su quel computer, l'accesso è già fatto. Poi rilancia /codex:setup per conferma."
      ]
    },
    {
      "type": "callout",
      "content": "**Nota per l'app Desktop:** se un comando /plugin risponde \"isn't available in this environment\", fai lo stesso dal menu: pulsante **+** accanto alla chat → **Plugins** (o **Add plugins**) → aggiungi il marketplace **openai/codex-plugin-cc** e installa **codex**. Funziona nelle sessioni locali e SSH, non in quelle cloud. Dal terminale vale anche **claude plugin marketplace add openai/codex-plugin-cc** seguito da **claude plugin install codex@openai-codex**."
    },
    {
      "type": "paragraph",
      "content": "**Vuoi installare Codex a mano?** Su Windows apri PowerShell ed esegui **powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"**; su Mac e Linux **curl -fsSL https://chatgpt.com/codex/install.sh | sh**; ovunque **npm install -g @openai/codex**. **Come capisci che è tutto pronto:** scrivendo **/codex** vedi l'elenco dei comandi, e in **/agents** compare il subagente **codex:codex-rescue**. Prima prova consigliata dal README: **/codex:review --background**, poi **/codex:status** e **/codex:result**."
    },
    {
      "type": "h2",
      "heading": "4. Tutti i comandi e cosa fanno",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/05-slide-05.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Nel video ne ho mostrati due: **/codex:rescue** per passare un'attività e **/codex:review** per far controllare il codice senza modificarlo. Il plugin ne ha altri sei, utili soprattutto per i lavori lunghi. Quasi tutti accettano **--background** (lavora in sottofondo mentre continui con Claude) e **--wait** (aspetti il risultato)."
    },
    {
      "type": "table",
      "headers": [
        "Comando",
        "Cosa fa",
        "Modifica i file?"
      ],
      "rows": [
        [
          "**/codex:review**",
          "revisione del codice delle modifiche non ancora salvate, oppure del branch rispetto a main con **--base main**. Stessa qualità del /review dentro Codex",
          "**No**"
        ],
        [
          "**/codex:adversarial-review**",
          "revisione \"critica\": mette in discussione scelte, rischi e alternative. Accetta un testo libero dopo le opzioni",
          "**No**"
        ],
        [
          "**/codex:rescue <compito>**",
          "passa un'attività a Codex: indagare un bug, provare una correzione, continuare un lavoro. Opzioni **--resume**, **--fresh**, **--model**, **--effort**",
          "**Sì, può**"
        ],
        [
          "**/codex:status**",
          "mostra i lavori di Codex in corso e recenti nel progetto",
          "No"
        ],
        [
          "**/codex:result**",
          "mostra il risultato finale di un lavoro e l'ID per riaprirlo in Codex",
          "No"
        ],
        [
          "**/codex:cancel**",
          "ferma un lavoro in sottofondo",
          "No"
        ],
        [
          "**/codex:transfer**",
          "trasforma la conversazione di Claude Code in una sessione Codex da continuare con **codex resume <id>**",
          "No"
        ],
        [
          "**/codex:setup**",
          "controlla installazione e accesso; attiva o disattiva la \"review gate\"",
          "No"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Puoi anche chiederlo a parole:** scrivi a Claude \"chiedi a Codex di…\" e Claude passa il compito al subagente codex:codex-rescue. Le **review** invece partono solo quando le lanci tu con il comando: Claude non può avviarle da solo."
    },
    {
      "type": "h2",
      "heading": "5. Prompt pronti da copiare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/06-slide-06.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Scrivili nella chat di Claude Code, nella cartella del progetto. Puoi scriverli in italiano. Sostituisci le parti tra parentesi quadre. La combinazione più utile è la \"squadra\": **Codex rivede, Claude corregge, tu approvi**."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Controllo prima di salvare",
      "content": "/codex:review"
    },
    {
      "type": "paragraph",
      "content": "fai rivedere a Codex le modifiche appena fatte da Claude, senza che tocchi nulla. Se sono tante, aggiungi --background e poi usa /codex:status e /codex:result."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Claude corregge quello che ha trovato Codex",
      "content": "Leggi la revisione di Codex qui sopra. Dividi i problemi in critici, importanti e minori, spiegameli in parole semplici e correggi solo quelli critici. Poi dimmi quali file hai cambiato e cosa resta da decidere."
    },
    {
      "type": "paragraph",
      "content": "è il lavoro di squadra del video: un agente controlla, l'altro sistema, tu decidi le priorità."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Revisione critica prima di pubblicare",
      "content": "/codex:adversarial-review --base main controlla se la gestione dei dati dei clienti, dei pagamenti e delle password è sicura e cosa succede se un servizio esterno non risponde"
    },
    {
      "type": "paragraph",
      "content": "non cerca solo errori di scrittura: mette in discussione le scelte e i rischi, come farebbe un consulente esterno."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Quando Claude si blocca su un errore",
      "content": "/codex:rescue scopri perché [il modulo contatti non invia le email] e correggilo con la modifica più piccola e sicura possibile. Non toccare altri file e spiegami la causa."
    },
    {
      "type": "paragraph",
      "content": "il \"rescue\" (salvataggio): un secondo agente con occhi nuovi spesso trova subito quello che il primo non vede."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Solo indagine, nessuna modifica",
      "content": "/codex:rescue analizza [la pagina del carrello che a volte va in errore], trova le cause più probabili e proponi le soluzioni, ma non modificare nessun file."
    },
    {
      "type": "paragraph",
      "content": "quando vuoi capire prima di agire: rescue esegue quello che chiedi, quindi digli chiaramente che non deve toccare nulla."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Compito lungo in sottofondo",
      "content": "/codex:rescue --background [aggiungi i test automatici alle funzioni di login e di pagamento]"
    },
    {
      "type": "paragraph",
      "content": "Codex lavora mentre tu continui con Claude. Controlla con /codex:status, leggi con /codex:result, fermalo con /codex:cancel."
    },
    {
      "type": "code",
      "label": "PROMPT 7 · Seconda opinione su un piano",
      "content": "Prima di procedere, chiedi a Codex una seconda opinione su questo piano: [descrivi la modifica]. Voglio sapere rischi, alternative più semplici e cosa potrebbe rompersi. Poi confronta la sua risposta con la tua e dimmi cosa consigli."
    },
    {
      "type": "paragraph",
      "content": "due modelli di aziende diverse ragionano in modo diverso: il confronto ti aiuta a decidere meglio."
    },
    {
      "type": "code",
      "label": "PROMPT 8 · Continuare il lavoro dentro Codex",
      "content": "/codex:transfer"
    },
    {
      "type": "paragraph",
      "content": "porta l'intera conversazione in Codex: copi il comando codex resume che ti restituisce e continui nell'app o nel terminale di Codex. Serve una versione recente di Codex."
    },
    {
      "type": "h2",
      "heading": "6. Limiti, costi e sicurezza",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/07-slide-07.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Ogni comando /codex:… usa **i limiti del tuo piano ChatGPT** (gli stessi di Codex nell'app, sul web e nel terminale); Claude consuma solo la piccola parte che serve a passare il compito e a mostrarti il risultato. Con una chiave API invece paghi a consumo alle tariffe API di OpenAI. I limiti dipendono da modello, dimensione del progetto e durata del compito: una review di molti file consuma molto più di una domanda veloce."
    },
    {
      "type": "table",
      "headers": [
        "Cosa sapere",
        "Perché conta",
        "Cosa fare"
      ],
      "rows": [
        [
          "**Limiti condivisi**",
          "Codex nel plugin, nell'app e nella CLI pesca dallo stesso pacchetto",
          "controlla l'uso su chatgpt.com/codex/settings/usage"
        ],
        [
          "**Review gate**",
          "con /codex:setup --enable-review-gate Codex rivede ogni risposta di Claude: il README avverte che può creare un ciclo lungo e \"consumare rapidamente i limiti\"",
          "attivala solo se segui la sessione; spegnila con --disable-review-gate"
        ],
        [
          "**Rescue modifica i file**",
          "Codex lavora nella stessa cartella, sugli stessi file di Claude",
          "fai un commit prima e rivedi le modifiche dopo"
        ],
        [
          "**Due aziende, due servizi**",
          "il codice che fai analizzare a Codex viene inviato a OpenAI, quello di Claude ad Anthropic",
          "niente password o dati dei clienti nel codice; usa il file .env"
        ],
        [
          "**Lavori lunghi**",
          "review di molti file e compiti complessi possono richiedere minuti",
          "usa --background e /codex:status"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Quanto spendi davvero:** plugin 0 €. Se hai già Claude Pro e ChatGPT Plus, **nessun costo in più**: usi i limiti che stai già pagando. Partendo da zero, la combinazione consigliata è Claude Pro + ChatGPT Plus, circa 40 $ al mese (prezzi di ottobre 2026, IVA esclusa)."
    },
    {
      "type": "h2",
      "heading": "7. Se qualcosa non funziona",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/08-slide-08.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Il primo passo è sempre **/codex:setup**: ti dice cosa manca. Su Windows il plugin ha ancora alcune segnalazioni aperte su GitHub: se qualcosa si comporta in modo strano, aggiorna plugin e Codex prima di tutto."
    },
    {
      "type": "table",
      "headers": [
        "Problema",
        "Causa probabile",
        "Soluzione"
      ],
      "rows": [
        [
          "**I comandi /codex non compaiono**",
          "plugin non ancora attivo",
          "**/reload-plugins**, oppure chiudi e riapri la sessione; controlla in **/plugin** → Installed"
        ],
        [
          "**\"Marketplace not found\"** all'installazione",
          "manca il passo 1 o c'è un errore di battitura",
          "rilancia **/plugin marketplace add openai/codex-plugin-cc** e poi l'installazione"
        ],
        [
          "**/codex:setup: Codex non trovato**",
          "Codex CLI non installata o terminale da riaprire",
          "accetta **Install Codex**, oppure **npm install -g @openai/codex**, poi riapri Claude Code"
        ],
        [
          "**npm non trovato**",
          "Node.js non installato o troppo vecchio",
          "installa Node.js LTS da nodejs.org (serve 18.18 o successivo)"
        ],
        [
          "**Codex non autenticato**",
          "accesso non fatto su questo computer",
          "**!codex login**; per controllare **!codex login status**"
        ],
        [
          "**\"Limite raggiunto\"**",
          "hai finito i limiti del piano ChatGPT",
          "aspetta il reset, acquista crediti o passa a un piano superiore"
        ],
        [
          "**/codex:review dice che non c'è nulla**",
          "nessuna modifica rispetto all'ultimo commit, o cartella senza Git",
          "usa **--base main** per rivedere il branch; inizializza Git nel progetto"
        ],
        [
          "**Plugin vecchio o con errori**",
          "versione non aggiornata",
          "**/plugin marketplace update openai-codex** e poi /reload-plugins"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "8. Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/09-slide-09.webp",
      "alt": "Guida pratica: Codex dentro Claude Code, due agenti IA in una sola chat"
    },
    {
      "type": "paragraph",
      "content": "Due agenti valgono il doppio solo se hanno **ruoli chiari**: Claude Code costruisce, Codex controlla o sblocca, tu decidi cosa entra nel progetto. Tre abitudini: un commit prima di ogni compito, una review prima di pubblicare, le correzioni approvate da te."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "vuoi usare Claude Code e Codex ma non sai da dove iniziare con l'installazione;",
        "hai progetti creati con l'IA che nessuno ha mai controllato;",
        "vuoi un flusso di lavoro con revisioni automatiche e regole chiare per il tuo team;"
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
        "Setup di Claude Code, Codex e del plugin sui tuoi computer",
        "Revisioni del codice e controlli di sicurezza con l'IA",
        "Automazioni e piccoli software costruiti con l'IA",
        "Formazione per te e il tuo team"
      ]
    },
    {
      "type": "h3",
      "heading": "Promemoria: i comandi da tenere a portata di mano",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Comando",
        "Quando",
        "Cosa fa"
      ],
      "rows": [
        [
          "/plugin marketplace add openai/codex-plugin-cc",
          "una volta sola",
          "aggiunge il marketplace di OpenAI"
        ],
        [
          "/plugin install codex@openai-codex + /reload-plugins",
          "una volta sola",
          "installa e attiva il plugin"
        ],
        [
          "/codex:setup",
          "se qualcosa non va",
          "controlla installazione e accesso"
        ],
        [
          "!codex login",
          "se serve l'accesso",
          "collega il tuo account ChatGPT"
        ],
        [
          "/codex:review",
          "prima di pubblicare",
          "revisione senza modifiche"
        ],
        [
          "/codex:rescue <compito>",
          "quando serve aiuto",
          "passa un'attività a Codex"
        ],
        [
          "/codex:status · /codex:result",
          "lavori in sottofondo",
          "avanzamento e risultato"
        ]
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp e dimmi cosa stai costruendo con l'IA: ti dico come organizzare Claude Code e Codex perché lavorino davvero in squadra, e quale piano ti conviene."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Codex_Claude_Code.pdf](/guide/codex-dentro-claude-code.pdf)"
    }
  ]
}

export default post
