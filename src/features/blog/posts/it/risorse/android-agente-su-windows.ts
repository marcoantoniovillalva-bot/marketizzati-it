import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "android-agente-su-windows",
  "title": "ANDROID: configurare l’agente su Windows + 10 prove sicure",
  "description": "ARTEMIS su Windows, Claude Code, Codex e Cursor. Configurazione, ripristino, dieci prove e tre prompt per sviluppatori. Controllo: 13 novembre 2026.",
  "date": "2026-11-13",
  "readTime": 11,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "ANDROID",
    "configurare l’agente su Windows + 10 prove sicure",
    "ARTEMIS su Windows",
    "Claude Code",
    "Codex e Cursor",
    "Configurazione"
  ],
  "image": "/images/blog/covers/android-agente-su-windows-wide.webp",
  "imageTall": "/images/blog/covers/android-agente-su-windows-tall.webp",
  "videoPreview": "/videos/preview/android-agente-su-windows.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7707718630523407649",
  "imageAlt": "ANDROID: configurare l’agente su Windows + 10 prove sicure",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/android-agente-su-windows/01-slide-01.webp", "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure" },
    {
      "type": "h2",
      "heading": "1. Cos’è ARTEMIS e cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/02-slide-02.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "intro",
      "content": "**ARTEMIS controlla Android da istruzioni scritte.** Apre app, tocca elementi e osserva il risultato. Usa ADB, screenshot e struttura della schermata. È nel repository **google/artemis**. Serve anche a esplorare app, riprodurre bug e raccogliere evidenze. Controllo delle fonti: **13 novembre 2026**."
    },
    {
      "type": "cta",
      "heading": "Prepariamo il tuo primo test?",
      "content": "Scrivici su WhatsApp con **ANDROID**. Ti aiutiamo a scegliere il dispositivo di prova e a leggere la configurazione."
    },
    {
      "type": "callout",
      "content": "**Codice gratuito. Controlla i costi.** Il progetto è open source, **Apache-2.0**. Richiede un provider di modelli configurato. API e assistente di sviluppo possono avere costi propri. Non significa uso illimitato gratuito."
    },
    {
      "type": "list",
      "items": [
        "**Dispositivo:** telefono Android di prova con cavo dati e debug USB, oppure emulatore. Android Studio serve per il percorso emulatore descritto qui.",
        "**PC Windows:** PowerShell, ADB, Git, uv e Python 3.12 o successivo. Il bootstrap può installare dipendenze mancanti, scrcpy, FFmpeg e Node.js per la console.",
        "**Modelli:** credenziali di un provider supportato. Inseriscile localmente nel wizard o in .env. Non incollarle in chat."
      ]
    },
    {
      "type": "paragraph",
      "content": "**Precauzioni Marketizzati:** usa un ambiente dedicato. Togli account personali e SIM. Disattiva le notifiche private. Usa dati fittizi. Non aprire banca, email, galleria o password manager. Screenshot e log possono contenere dati visibili. La pipeline può usare modelli remoti: destinatari e conservazione sono **da verificare** per il provider scelto."
    },
    {
      "type": "list",
      "items": [
        "[Google: progetto e requisiti](https://github.com/google/artemis)",
        "[Provider e opzioni del telefono](https://github.com/google/artemis/blob/main/.env.example)"
      ]
    },
    {
      "type": "h2",
      "heading": "2. Collega Android a Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/03-slide-03.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "paragraph",
      "content": "**Scegli un percorso.** Per il telefono usa un cavo dati. Per l’emulatore non serve il cavo. Collega un solo dispositivo durante le prime prove."
    },
    {
      "type": "list",
      "items": [
        "**Prepara ADB.** In Android Studio apri SDK Manager → SDK Tools e installa Android SDK Platform-Tools. In alternativa scarica il pacchetto Windows dalla pagina ufficiale qui sotto ed estrailo, per esempio in C:/Android/platform-tools.",
        "**Rendi disponibile adb.** Aggiungi la cartella platform-tools al Path utente di Windows e riapri PowerShell. Se lavori dentro quella cartella, puoi usare .\\adb.exe al posto di adb: il prefisso .\\ è la sintassi PowerShell per un eseguibile locale.",
        "**Telefono:** in Impostazioni cerca Numero build e toccalo sette volte. Il percorso cambia tra produttori. Apri Opzioni sviluppatore e attiva Debug USB. Non sbloccare il bootloader.",
        "**Collega e autorizza.** Sblocca lo schermo. Collega il cavo e accetta sul telefono la richiesta di debug RSA soltanto per il tuo PC. Windows può richiedere il driver USB del produttore.",
        "**Alternativa emulatore:** in Android Studio apri Device Manager → Create Virtual Device. Scegli hardware e immagine di sistema. Completa con Finish e avvia l’AVD. Non aggiungere account personali."
      ]
    },
    {
      "type": "paragraph",
      "content": "In PowerShell verifica il collegamento con il comando documentato da Android:"
    },
    {
      "type": "code",
      "content": "adb devices"
    },
    {
      "type": "paragraph",
      "content": "Deve comparire un seriale con stato **device**. Con **unauthorized**, controlla l’autorizzazione sul telefono. Con **offline**, il dispositivo non è pronto. Se la lista è vuota, verifica cavo, driver o avvio dell’AVD. Conserva il seriale: sostituirà **SERIAL** nei prompt."
    },
    {
      "type": "list",
      "items": [
        "[Android: Platform-Tools per Windows](https://developer.android.com/tools/releases/platform-tools)",
        "[Android: debug e autorizzazione ADB](https://developer.android.com/tools/adb)",
        "[Android: opzioni sviluppatore](https://developer.android.com/studio/debug/dev-options)",
        "[Android: driver e telefono fisico](https://developer.android.com/studio/run/device)",
        "[Android Studio: creare un emulatore](https://developer.android.com/studio/run/managing-avds)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Installa e collega il tuo assistente",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/04-slide-04.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "callout",
      "content": "**Prima leggi. Poi avvia.** Fai prima le copie dei file della sezione 4. Il comando di avvio scarica e installa componenti. start.bat richiama PowerShell con ExecutionPolicy Bypass per quel processo. Leggi start.bat e scripts/start.ps1. Non aggirare le regole della tua organizzazione."
    },
    {
      "type": "paragraph",
      "content": "Con Git disponibile, apri PowerShell nella cartella in cui vuoi conservare ARTEMIS. Ecco il quick start ufficiale per Windows:"
    },
    {
      "type": "code",
      "content": "git clone https://github.com/google/artemis.git\ncd artemis\n.\\start.bat"
    },
    {
      "type": "paragraph",
      "content": "Alla domanda di installare MCP e regole negli IDE rispondi **n** se vuoi scegliere un solo editor. Il sì del bootstrap configura tutti i target previsti. La console si apre normalmente su **http://localhost:8000**. Lascia completare il setup."
    },
    {
      "type": "paragraph",
      "content": "Nella cartella ARTEMIS apri un’altra PowerShell. Il wizard configura chiavi e dispositivo, ma **riscrive .env**: salvalo prima se contiene già impostazioni. Al passo IDE scegli **8 — Skip for now** per usare poi il comando mirato. Controlla la diagnosi:"
    },
    {
      "type": "code",
      "content": "uv run artemis init\nuv run artemis doctor"
    },
    {
      "type": "paragraph",
      "content": "**Claude Code:** aggiungi server MCP e regole globali con il comando supportato dal progetto. Non è un plugin:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install claude"
    },
    {
      "type": "paragraph",
      "content": "**Varianti ufficiali:** scegli Codex oppure Cursor al posto di Claude. Non serve eseguirle entrambe:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install codex\nuv run artemis mcp --install cursor"
    },
    {
      "type": "paragraph",
      "content": "Riavvia l’editor o ricarica il server MCP. In Claude Code controlla **/mcp** e verifica che ARTEMIS sia disponibile. Se manca o fallisce, leggi l’errore e usa doctor. Non approvare alla cieca nuovi permessi."
    },
    {
      "type": "paragraph",
      "content": "**DA VERIFICARE sul tuo PC:** il setup non è stato eseguito per questa guida. Nomi dei menu e compatibilità dipendono dalle versioni. Per vedere la configurazione proposta usa il generatore ufficiale (uv può comunque sincronizzare l’ambiente): **uv run artemis mcp --generate-config claude**."
    },
    {
      "type": "h2",
      "heading": "4. Controlla le modifiche e torna indietro",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/05-slide-05.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "paragraph",
      "content": "L’installer modifica file **globali**. Prima salva una copia dei file presenti. Annota quelli assenti. Dopo confronta le differenze. Il target claude interviene anche su Claude Desktop."
    },
    {
      "type": "table",
      "headers": [
        "File Windows",
        "Cosa cambia"
      ],
      "rows": [
        [
          "%USERPROFILE%/.claude.json",
          "Aggiunge o aggiorna mcpServers.artemis."
        ],
        [
          "%APPDATA%/Claude/claude_desktop_config.json",
          "Aggiunge il server anche a Claude Desktop."
        ],
        [
          "%USERPROFILE%/.claude/rules/artemis.md",
          "Scrive le regole globali di test ARTEMIS."
        ],
        [
          "%USERPROFILE%/.claude/CLAUDE.md",
          "Rimuove un eventuale vecchio blocco ARTEMIS duplicato. Può eliminare il file se conteneva solo quel blocco."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Nel percorso di installazione esaminato **non risultano modifiche a settings.json, hook o regole permissions.allow** di Claude. Le regole ARTEMIS chiedono di esplorare l’app prima di scrivere test. Non sono una protezione tecnica."
    },
    {
      "type": "paragraph",
      "content": "**Codex:** modifica config.toml e AGENTS.md, oppure AGENTS.override.md se già presente e non vuoto, nella cartella CODEX_HOME (di default .codex nel profilo utente). **Cursor:** modifica .cursor/mcp.json, .cursorrules e .cursor/rules/artemis.mdc nel profilo utente. Salva anche questi file se scegli quei target."
    },
    {
      "type": "paragraph",
      "content": "Controllo Claude dalla PowerShell (comandi Anthropic): **claude mcp list** e **claude mcp get artemis**."
    },
    {
      "type": "h3",
      "heading": "Come annullare",
      "content": "Procedura Marketizzati basata sui file letti, **da verificare localmente**. Ferma i task. Dalla cartella ARTEMIS arresta la console; poi rimuovi la registrazione Claude a livello utente:"
    },
    {
      "type": "code",
      "content": "uv run artemis stop\nclaude mcp remove artemis --scope user"
    },
    {
      "type": "paragraph",
      "content": "In Claude Desktop rimuovi solo mcpServers.artemis se aggiunto dal setup. Ripristina selettivamente artemis.md e CLAUDE.md dalle copie. Conserva le altre modifiche. Per Codex o Cursor ripristina solo i blocchi ARTEMIS nei file indicati. Non cancellare intere cartelle di configurazione. Non è documentato un comando mcp --uninstall."
    },
    {
      "type": "paragraph",
      "content": "Il primo task può installare sul telefono **Artemis Accessibility Helper**. Per rimuoverlo, lascia collegato solo il dispositivo di prova ed esegui il comando ufficiale seguente. La rimozione MCP non disinstalla helper o dipendenze del PC. A fine uso scollega il cavo e disattiva debug USB."
    },
    {
      "type": "code",
      "content": "uv run artemis helper uninstall"
    },
    {
      "type": "h2",
      "heading": "5. Cinque prove senza account",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/06-slide-06.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "paragraph",
      "content": "Prompt Marketizzati **da verificare**, non test ufficiali Google. Sostituisci **SERIAL** con il tuo seriale. Incolla un prompt alla volta nell’assistente collegato ad ARTEMIS. Supervisiona lo schermo. Se un’app manca, fai segnalare il limite senza installarla. Le istruzioni non garantiscono che ogni azione sia corretta."
    },
    {
      "type": "code",
      "label": "PROVA 1 — VERSIONE ANDROID",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri Impostazioni e leggi la versione Android. Non riportare IMEI, seriali hardware o dati dell’account. Non cambiare impostazioni. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 2 — SCREENSHOT",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri la pagina principale di Impostazioni. Acquisisci uno screenshot solo se non mostra dati personali. Restituisci l’evidenza disponibile. Non inventare un percorso file. Termina entro 4 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 3 — BATTERIA",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri Impostazioni → Batteria. Leggi la percentuale se disponibile. Non attivare risparmio energetico o altri interruttori. Segnala eventuali dialoghi di errore. Termina entro 6 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 4 — CALCOLATRICE",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri la Calcolatrice di sistema se presente. Calcola 17 + 25. Verifica che il risultato sia 42. Non aprire la cronologia. Se manca, dichiaralo. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 5 — NAVIGAZIONE",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Da Impostazioni apri Display, torna indietro e poi vai alla Home. Verifica ogni passaggio senza toccare interruttori. Riporta il punto in cui ti blocchi. Termina entro 6 azioni."
    },
    {
      "type": "paragraph",
      "content": "**Risultato da cercare:** azioni osservate ed evidenze coerenti. Un passaggio non eseguito resta non verificato. Non chiedere all’agente di aggirare schermate protette."
    },
    {
      "type": "h2",
      "heading": "6. Altre cinque prove controllate",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/07-slide-07.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "paragraph",
      "content": "Per le prove 8–10 prepara tu una tua app dimostrativa già installata, senza dati reali. Usa backend locale o ambiente di test. Sostituisci **APP_DEMO** con il nome dell’app. Se manca una funzione, il risultato corretto è «non verificabile»."
    },
    {
      "type": "code",
      "label": "PROVA 6 — CERCA IN IMPOSTAZIONI",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. In Impostazioni cerca Batteria. Apri il risultato pertinente e verifica il titolo. Non cambiare opzioni. Se la ricerca non esiste, dichiaralo. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 7 — INFO CALCOLATRICE",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Da Impostazioni apri le informazioni dell’app Calcolatrice di sistema. Leggi la versione se visibile. Non cancellare dati, non disinstallare e non modificare permessi. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 8 — CAMPI VUOTI",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. Apri il login di APP_DEMO e invia il modulo vuoto una sola volta. Verifica gli errori sui campi obbligatori. Non usare altri account. Termina entro 6 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 9 — LOGIN FITTIZIO",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. In APP_DEMO inserisci demo@example.test e la password fittizia prova-sbagliata. Invia una sola volta. Verifica il rifiuto atteso, senza riprovare. Non usare recupero password. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PROVA 10 — NESSUN RISULTATO",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. Nella ricerca locale di APP_DEMO scrivi zzz-nessun-risultato. Verifica lo stato vuoto. Torna alla schermata iniziale. Non creare o eliminare elementi. Termina entro 8 azioni."
    },
    {
      "type": "paragraph",
      "content": "Per ogni prova annota: obiettivo, risultato atteso, risultato osservato, screenshot disponibile e limite incontrato. I limiti di azioni scritti nei prompt sono richieste al modello. Non sono un blocco tecnico configurato dalla guida."
    },
    {
      "type": "list",
      "items": [
        "[Google: modalità, diagnostica e selezione dispositivo](https://github.com/google/artemis/blob/main/mcp_server/rules.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "7. Tre prompt per chi sviluppa app",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/08-slide-08.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "paragraph",
      "content": "Modelli Marketizzati **da verificare**. Sostituisci **SERIAL**, **APP_DEMO** e gli attesi con quelli del tuo progetto. Usa una build di test e dati sintetici. Per piani, verifiche, diagnostica e report chiedi **Pro**. Flash è pensato per azioni semplici e non include la stessa verifica o il report finale."
    },
    {
      "type": "code",
      "label": "SVILUPPATORE 1 — RIPRODUCI UN BUG",
      "content": "Con ARTEMIS Pro, solo su SERIAL, esplora APP_DEMO: Home → Cerca → testo zzz. Atteso: stato vuoto, nessun crash. Prepara un piano breve, poi verifica il percorso entro 12 azioni. Raccogli screenshot e log disponibili senza dati personali. Riporta atteso, osservato e passaggi ripetibili. Non modificare codice o dati. Se manca un’evidenza, scrivi NON VERIFICATO."
    },
    {
      "type": "code",
      "label": "SVILUPPATORE 2 — REGRESSIONE UI",
      "content": "Con ARTEMIS Pro, solo su SERIAL, verifica in APP_DEMO tre percorsi: Home → Dettaglio → Indietro; ricerca senza risultati; login vuoto. Usa solo dati sintetici. Massimo 8 azioni per percorso. Per ciascuno riporta atteso, osservato, esito ed evidenza. Non inviare messaggi, non acquistare e non cambiare permessi. Fermati se appare un account reale."
    },
    {
      "type": "code",
      "label": "SVILUPPATORE 3 — DAL TEST AL CODICE",
      "content": "Con ARTEMIS Pro esplora su SERIAL il percorso Home → Cerca di APP_DEMO, entro 8 azioni. Poi proponi un test eseguibile nel framework già presente nel mio progetto. Usa locator osservati e attese esplicite. Non inventare ID o coordinate. Indica prerequisiti e assert. Non installare dipendenze e non modificare file senza una mia richiesta. Marca DA VERIFICARE le parti che non hai eseguito."
    },
    {
      "type": "callout",
      "content": "**Limiti da ricordare:** Il 99%+ è il risultato dichiarato sul benchmark AndroidWorld. Non garantisce il successo sulla tua app. Il modello può sbagliare tocchi e letture. Tempi, lingua, layout e schermate protette possono cambiare l’esito. Il plugin nativo Android Studio e iOS sono in roadmap, non funzioni già promesse. Supporto del tuo dispositivo e trattamento dei dati restano da verificare."
    },
    {
      "type": "list",
      "items": [
        "[Google: Flash e Pro](https://github.com/google/artemis#execution-profiles-flash-vs-pro)",
        "[Google: regole per test basati su evidenze](https://github.com/google/artemis/blob/main/mcp_server/rules.md)",
        "[Google: roadmap e benchmark](https://github.com/google/artemis#roadmap)"
      ]
    },
    {
      "type": "h3",
      "heading": "Porta ANDROID sul tuo progetto",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/09-slide-09.webp",
      "alt": "ANDROID: configurare l’agente su Windows + 10 prove sicure"
    },
    {
      "type": "cta",
      "heading": "Vuoi configurarlo con noi?",
      "content": "Scrivici su WhatsApp con **ANDROID**. Ti aiutiamo a preparare Windows, scegliere una prova e leggere screenshot, log e configurazione."
    },
    {
      "type": "h3",
      "heading": "Fonti — controllo del 13 novembre 2026",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Google: ARTEMIS, README e licenza](https://github.com/google/artemis)",
        "[Google: installer MCP e file modificati](https://github.com/google/artemis/blob/main/artemis/interfaces/cli/commands/mcp.py)",
        "[Google: provider e privacy del dispositivo](https://github.com/google/artemis/blob/main/.env.example)",
        "[Android: ADB e Platform-Tools](https://developer.android.com/tools/adb)",
        "[Anthropic: gestione dei server MCP](https://code.claude.com/docs/en/mcp)",
        "[OpenAI: configurazione MCP Codex](https://developers.openai.com/codex/mcp)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Le capacità e i comandi derivano dalle fonti ufficiali. Le precauzioni, le dieci prove e i tre prompt sono proposte Marketizzati. Setup, ripristino e prompt non sono stati provati su Windows per questa risorsa. Nessun programma è stato installato durante la preparazione. La guida non garantisce assenza di errori o di esposizione dei dati."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_ANDROID_Artemis.pdf](/guide/android-agente-su-windows.pdf)"
    }
  ]
}

export default post
