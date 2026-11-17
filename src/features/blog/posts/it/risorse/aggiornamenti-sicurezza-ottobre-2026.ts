import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "aggiornamenti-sicurezza-ottobre-2026",
  "title": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)",
  "description": "I prompt promessi nel video per controllare con Claude Code e Codex, progetto per progetto, cosa aggiornare dopo le correzioni di sicurezza di ottobre…",
  "date": "2026-10-23",
  "readTime": 16,
  "category": "Risorse gratuite",
  "keywords": [
    "Guida pratica",
    "aggiornamenti di sicurezza di ottobre 2026 (PHP",
    "Node",
    "js",
    "Python",
    "Go"
  ],
  "image": "/images/blog/covers/aggiornamenti-sicurezza-ottobre-2026-wide.webp",
  "imageTall": "/images/blog/covers/aggiornamenti-sicurezza-ottobre-2026-tall.webp",
  "imageAlt": "Cosa è successo davvero a ottobre 2026, chi è a rischio, cosa aggiornare e i prompt per farlo controllare a Claude Code e Codex, progetto per progetto",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/01-slide-01.webp", "alt": "Cosa è successo davvero a ottobre 2026, chi è a rischio, cosa aggiornare e i prompt per farlo controllare a Claude Code e Codex, progetto per progetto" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Tra il 17 e il 22 ottobre 2026 sono arrivati, quasi insieme, diversi aggiornamenti di sicurezza: **PHP** ha corretto due vulnerabilità critiche, **Node.js** ne ha corrette dieci e un'autorità di certificazione, **eMudhra**, ha avuto otto chiavi di certificati intermedi deboli, al punto che **Python**, **Go**, **Rust** e molti sistemi operativi hanno aggiornato i certificati di cui si fidano. Sui social è diventato \"hanno hackerato tutti i linguaggi\". Non è così. Qui trovi i fatti verificati sulle fonti ufficiali e, soprattutto, i **prompt per Claude Code e Codex** che ti ho promesso nel video, per controllare ogni progetto e sapere esattamente cosa aggiornare."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "capire cosa è successo davvero, senza allarmismi e con le fonti;",
        "riconoscere se il tuo sito, le tue app o i tuoi script sono interessati;",
        "sapere le versioni minime da installare per PHP, Node.js, Python, Go e Rust;",
        "controllare il tuo sito e l'hosting anche se non sei tecnico;",
        "far analizzare ogni progetto a Claude Code o Codex con prompt pronti, in sola lettura;",
        "chiedere le cose giuste al tuo sviluppatore o al tuo hosting, e farti dare una conferma scritta."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** aggiornare il codice non basta. Una correzione è attiva solo quando è arrivata **dove gira davvero il tuo progetto**: il server, il container, il binario compilato o l'ambiente virtuale. Per questo si controlla progetto per progetto: versioni, Dockerfile, lockfile e immagini sul server, poi si aggiorna, si ricostruisce senza cache, si testa e si ridistribuisce."
    },
    {
      "type": "cta",
      "heading": "Vuoi che controlliamo noi i tuoi progetti?",
      "content": "Se hai un sito WordPress, un e-commerce, delle automazioni o un'app e non sai da dove partire, scrivimi su WhatsApp: guardiamo insieme cosa usi, cosa va aggiornato e chi deve farlo (tu, lo sviluppatore o l'hosting)."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[PHP - avviso di sicurezza e rilasci del 21 ottobre 2026](https://www.php.net/archive/2026.php)",
        "[PHP - versioni supportate e date di fine supporto](https://www.php.net/supported-versions.php)",
        "[Node.js - Security Releases del 21 ottobre 2026](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)",
        "[Node.js - versioni e fine vita](https://nodejs.org/en/about/previous-releases)",
        "[Mozilla - blog sul caso eMudhra](https://blog.mozilla.org/security/2026/10/20/protecting-firefox-users-following-the-compromise-of-emudhra-intermediate-certificates/)",
        "[Cloudflare - cosa sapere sui certificati eMudhra](https://blog.cloudflare.com/emudhra-certificate-compromise/)",
        "[Sito tecnico dell'incidente, test e versioni corrette](https://emudhra.we-have-a-problem.com/)",
        "[Python - informazioni per gli utenti Python](https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576)",
        "[Go - storico rilasci (1.27.3 e 1.26.10)](https://go.dev/doc/devel/release)",
        "[Rust - rustup 1.29.2](https://blog.rust-lang.org/2026/10/20/Rustup-1.29.2/)",
        "[Amazon Threat Intelligence - PHP2Shell](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/)",
        "[Claude Code - documentazione](https://code.claude.com/docs/en/overview)",
        "[Codex CLI (OpenAI) - documentazione](https://developers.openai.com/codex/cli)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cosa è successo davvero (ottobre 2026)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/02-slide-02.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Sono **tre fatti diversi** arrivati nella stessa settimana. Due sono bug nel software (PHP e Node.js) e si risolvono aggiornando. Il terzo riguarda un'autorità di certificazione (eMudhra): non è un bug dei linguaggi, ma Python, Go, Rust e i sistemi operativi hanno dovuto aggiornare la lista dei certificati di cui si fidano. **Cos'è una CVE?** È il codice pubblico, per esempio CVE-2026-109618, con cui si identifica una vulnerabilità: ti serve per chiedere a sviluppatore o hosting \"questa è corretta?\"."
    },
    {
      "type": "table",
      "headers": [
        "Cosa",
        "Cosa è successo (fonte ufficiale)",
        "Gravità"
      ],
      "rows": [
        [
          "**PHP**",
          "Il 21/10/2026 PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35 correggono **CVE-2026-109618** e **CVE-2026-109619** (detta anche \"PHP2Shell\"): un attaccante può eseguire codice sul server **senza credenziali**. Amazon ha visto **tentativi** di sfruttamento dal 17/10, prima della correzione.",
          "Critica (CVSS 4.0: 9.2)"
        ],
        [
          "**Node.js**",
          "Il 21/10/2026 Node.js 22.23.4, 24.22.1 e 26.12.1 correggono **10 vulnerabilità** (4 alte, 3 medie, 3 basse). La più seria è nel decoder **Brotli** (CVE-2026-111497): dati compressi manipolati possono portare all'esecuzione di codice. Le altre riguardano DNS, certificati, numeri casuali, permessi sui file, HTTP e ZIP.",
          "Alta per Node.js (9.2 per Google, che gestisce Brotli)"
        ],
        [
          "**eMudhra**",
          "Il 17/10/2026 un ricercatore ha dimostrato che le **chiavi private di 8 certificati intermedi** eMudhra erano deboli e **recuperabili** dai certificati pubblici. Con quelle chiavi si potevano creare certificati HTTPS falsi per qualsiasi sito.",
          "Seria per i programmi non aggiornati"
        ],
        [
          "**Python, Go, Rust e sistemi**",
          "Dal 19 al 22/10 sono usciti certifi 2026.10.19, pip 26.2.2, uv 0.13.4, Go 1.27.3 e 1.26.10, rustup 1.29.2 e i pacchetti ca-certificates/NSS di Red Hat, Ubuntu, Debian e altri, che **smettono di fidarsi** di quei certificati.",
          "Da aggiornare, nessun \"hackeraggio\" dei linguaggi"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Senza sensazionalismi:** nessuno ha \"hackerato tutti i linguaggi contemporaneamente\". Amazon parla di **tentativi** di sfruttamento su PHP e precisa che non è chiaro se sarebbero riusciti su sistemi reali (oggi vede tentativi diffusi). Cloudflare non ha trovato sfruttamento attivo del caso eMudhra sui suoi servizi; eMudhra dichiara che la sua infrastruttura non è stata violata, che non c'è stato furto di dati e che dagli 8 intermedi non è mai stato emesso un certificato. Per usare un certificato falso, poi, l'attaccante deve anche trovarsi \"in mezzo\" alla connessione (man-in-the-middle). Il rischio è reale per chi resta indietro, non è la fine di Internet."
    },
    {
      "type": "paragraph",
      "content": "**Le date in breve:** 17/10 segnalazione eMudhra a Mozilla, Google, Apple e Microsoft (Firefox e Chrome bloccano i certificati lo stesso giorno, Microsoft dal 20/10, Apple dal 22/10) e primo tentativo su PHP visto da Amazon; 18/10 eMudhra revoca gli 8 intermedi; 19/10 Go 1.27.3 e 1.26.10; 20/10 Mozilla pubblica l'avviso e rustup 1.29.2; 21/10 rilasci di sicurezza di PHP e Node.js; 23/10 PHP pubblica un ulteriore avviso informativo (vedi sezione 3)."
    },
    {
      "type": "h2",
      "heading": "2. Sei a rischio? Dipende da cosa usi",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/03-slide-03.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "La domanda giusta non è \"uso PHP?\" ma \"**quale versione** gira, e dove?\". Un sito WordPress, WooCommerce, PrestaShop o Joomla gira su PHP; molte app, API, siti Next.js e automazioni girano su Node.js; bot, scraper e integrazioni spesso sono in Python. Se usi una piattaforma gestita (Shopify, Wix, Squarespace) il server lo aggiorna in genere il fornitore, ma le integrazioni fatte su misura vanno controllate a parte."
    },
    {
      "type": "table",
      "headers": [
        "Se hai…",
        "Sei interessato se…",
        "Cosa fare"
      ],
      "rows": [
        [
          "Sito in PHP (WordPress, WooCommerce, PrestaShop, Joomla, Laravel…)",
          "il server usa PHP prima di 8.2.35, 8.3.36, 8.4.27 o 8.5.12, oppure PHP 8.1 o più vecchio",
          "chiedi all'hosting la versione esatta e l'aggiornamento; con PHP 8.1 o precedenti pianifica la migrazione"
        ],
        [
          "App, API, siti o automazioni su Node.js",
          "la versione è precedente a 22.23.4, 24.22.1 o 26.12.1, oppure Node.js 20, 25 o più vecchio (fine vita)",
          "aggiorna Node.js, ricostruisci e ridistribuisci"
        ],
        [
          "Script, bot e integrazioni in Python",
          "pip prima di 26.2.2, certifi prima di 2026.10.19, uv prima di 0.13.4, conda prima di 26.9.4",
          "aggiorna in **ogni** ambiente virtuale e in ogni immagine Docker"
        ],
        [
          "Servizi o strumenti in Go",
          "compilati con Go prima di 1.26.10, o 1.27.0-1.27.2",
          "ricompila con Go aggiornato e ridistribuisci"
        ],
        [
          "Strumenti in Rust",
          "rustls-webpki prima di 0.103.16, webpki-roots / webpki-root-certs prima di 1.0.10, rustup prima di 1.29.2",
          "aggiorna le dipendenze e ricompila"
        ],
        [
          "Container Docker e server Linux",
          "immagini base o pacchetto ca-certificates non aggiornati dopo il 20/10",
          "aggiorna i pacchetti e ricostruisci le immagini senza cache"
        ],
        [
          "Browser, PC e telefono",
          "non aggiorni da settimane",
          "aggiorna normalmente: i browser sono già protetti"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** per PHP il problema è nel motore, non nel tema o nei plugin. Secondo php.net sono a rischio tutte le installazioni che rispondono a richieste web (PHP-FPM, Apache con mod_php, php-cgi, FrankenPHP, LiteSpeed); il rischio più alto è con **mod_php**, dove l'attacco funziona prima ancora che parta il codice del sito. Il certificato HTTPS del tuo sito, invece, quasi certamente non c'entra: gli 8 intermedi eMudhra non hanno mai emesso certificati."
    },
    {
      "type": "h2",
      "heading": "3. Le azioni minime per ogni tecnologia",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/04-slide-04.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Queste sono le **versioni minime** indicate dalle fonti ufficiali al 23 ottobre 2026. \"Minime\" significa che vanno bene queste o successive dello stesso ramo: se usi PHP 8.3, ti serve la 8.3.36 o più recente, non per forza la 8.5. **Dopo ogni aggiornamento** il servizio va riavviato o ridistribuito, altrimenti continua a girare la versione vecchia in memoria."
    },
    {
      "type": "table",
      "headers": [
        "Tecnologia",
        "Versione minima",
        "Azione minima"
      ],
      "rows": [
        [
          "**PHP**",
          "8.5.12 · 8.4.27 · 8.3.36 · 8.2.35",
          "aggiorna e riavvia **tutti** i worker (PHP-FPM, Apache). PHP 8.2 esce dal supporto il 31/12/2026. PHP 8.1 e precedenti non ricevono più aggiornamenti dal progetto PHP: chiedi al fornitore Linux/LTS se ha la patch o migra"
        ],
        [
          "**Node.js**",
          "22.23.4 · 24.22.1 · 26.12.1",
          "aggiorna, reinstalla le dipendenze dal lockfile, ridistribuisci. Le versioni a fine vita (20, 25 e precedenti) sono sempre esposte"
        ],
        [
          "**Python**",
          "pip 26.2.2 · certifi 2026.10.19 · uv 0.13.4 · sigstore 4.5.1 · conda 26.9.4 · pixi 0.82.1",
          "aggiorna in ogni ambiente virtuale e ricostruisci i container **senza cache**. Un pip vecchio continua a fidarsi dei certificati compromessi anche se il sistema è aggiornato"
        ],
        [
          "**Go**",
          "1.27.3 · 1.26.10",
          "ricompila e ridistribuisci i programmi: la libreria che controlla i certificati è dentro il binario"
        ],
        [
          "**Rust**",
          "rustup 1.29.2 · rustls-webpki 0.103.16 · webpki-roots / webpki-root-certs 1.0.10",
          "aggiorna le dipendenze (cargo update), ricompila e ridistribuisci"
        ],
        [
          "**PHP Composer**",
          "ca-bundle 1.4.16 o 1.6.0",
          "aggiorna le dipendenze se il progetto usa composer/ca-bundle (fonte: elenco del sito dell'incidente)"
        ],
        [
          "**Server e container**",
          "ca-certificates / NSS aggiornati (es. Red Hat RHSB-2026-012, Ubuntu USN-8947-1, NSS 3.131.1)",
          "aggiorna i pacchetti di sistema e ricostruisci le immagini"
        ],
        [
          "**Browser**",
          "Firefox 158.0.1, ESR 115.43.1 e 153.5.1; Chrome, Edge e Safari aggiornati",
          "aggiorna come sempre: la protezione è già arrivata in automatico"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Se non puoi aggiornare PHP subito:** php.net indica alcune misure che **riducono** il rischio ma \"non rendono sicura\" l'installazione: **session.upload_progress.enabled=0** nel php.ini o nel pool FPM (poi riavvio di tutti i worker), un **post_max_size** basso (8M se il sito non riceve file, 32M se li riceve) e, su PHP 8.5, **fatal_error_backtraces=0**. Su AWS esiste una regola WAF dedicata. Il 23/10 php.net ha segnalato un ulteriore caso raro (CVE-2026-115560, scheda pubblica non ancora disponibile: **da verificare**) e consiglia di tenere **session.upload_progress.enabled=0** fino al prossimo rilascio. Sono soluzioni ponte: l'unica soluzione completa è l'aggiornamento."
    },
    {
      "type": "h2",
      "heading": "4. Come controllare il tuo sito e l'hosting (senza essere tecnico)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/05-slide-05.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Bastano pochi minuti. **Sito WordPress:** dalla bacheca vai su **Strumenti → Salute del sito → Info → Server**: trovi la versione di PHP completa (per esempio 8.3.36). **Pannello dell'hosting** (cPanel, Plesk o il pannello del tuo provider): cerca la voce sulla versione PHP; spesso mostra solo \"8.3\" senza il numero finale, e in quel caso il numero esatto va chiesto all'hosting."
    },
    {
      "type": "list",
      "items": [
        "**Versione PHP:** confrontala con la tabella della sezione 3. Se è più vecchia o è 8.1 o precedente, scrivi all'hosting (sezione 6).",
        "**Cloudflare (se lo usi):** in SSL/TLS controlla di essere in modalità **Full (strict)**. Cloudflare consiglia a chi usa Full (strict) di ricontrollare i certificati di origine personalizzati e i certificati caricati per il mutual TLS, e sta aggiornando Automatic SSL/TLS per avvisarti se usi certificati non più fidati.",
        "**Browser:** apri il test su [emudhra.we-have-a-problem.com](https://emudhra.we-have-a-problem.com/). Se le connessioni di prova danno **errore di certificato**, il tuo browser non si fida più degli intermedi compromessi: è il risultato giusto. Vale solo per il browser, non per le app e i servizi sul server.",
        "**Errori di certificato dopo gli aggiornamenti:** se un servizio esterno o un'integrazione smette di collegarsi, **non disattivare la verifica dei certificati** (lo raccomanda Cloudflare): fai controllare la catena del certificato allo sviluppatore. Alcuni sistemi hanno rimosso, oltre alla root emSign ECC Root CA - G3, anche la root \"Comodo AAA Services root\" (Ubuntu USN-8947-1).",
        "**Log del server (per chi ha accesso):** Amazon consiglia di cercare richieste POST con la stringa **PHP_SESSION_UPLOAD_PROGRESS**, processi o file modificati in modo inatteso, e di partire **almeno dal 17 ottobre**, non dalla data della correzione."
      ]
    },
    {
      "type": "h2",
      "heading": "5. I prompt per Claude Code e Codex (progetto per progetto)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/06-slide-06.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Sono i prompt promessi nel video. Funzionano con **Claude Code** (Anthropic) e **Codex** (OpenAI): apri il terminale nella cartella del progetto e avvia **claude** oppure **codex --sandbox read-only** (Codex in sola lettura). In Claude Code puoi usare la modalità di permessi **Manual**, che parte in sola lettura e ti chiede l'ok prima di modificare file o eseguire comandi. Ripeti per **ogni progetto**: sito, gestionale, automazioni, script."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Inventario",
      "content": "Analizza questo progetto in sola lettura: non modificare file e non installare nulla. Elenca in una tabella le tecnologie e le versioni che usa davvero: PHP, Node.js, Python, Go, Rust, CMS e framework (es. WordPress, Laravel, Next.js). Cerca in composer.json e composer.lock, package.json e lockfile (package-lock.json, pnpm-lock.yaml, yarn.lock), .nvmrc e .tool-versions, requirements.txt, poetry.lock e uv.lock, go.mod, Cargo.toml e Cargo.lock, Dockerfile e docker-compose, file di CI (.github/workflows) e configurazioni di deploy. Per ogni riga indica il file da cui l'hai letta. Se una versione non è scritta nel progetto (per esempio quella di PHP sul server), scrivi \"da verificare sul server\"."
    },
    {
      "type": "paragraph",
      "content": "parti da dati certi: sai cosa gira davvero e dove, senza rischiare di rompere nulla."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Confronto con gli aggiornamenti di ottobre 2026",
      "content": "Confronta le versioni trovate con questi minimi di sicurezza pubblicati a ottobre 2026 e per ognuna scrivi OK, DA AGGIORNARE o DA VERIFICARE: PHP 8.5.12, 8.4.27, 8.3.36 o 8.2.35 (PHP 8.1 o precedenti = fuori supporto); Node.js 22.23.4, 24.22.1 o 26.12.1 (Node.js 20, 25 e precedenti = fine vita); pip 26.2.2, certifi 2026.10.19, uv 0.13.4, sigstore 4.5.1, conda 26.9.4, pixi 0.82.1; Go 1.27.3 o 1.26.10; rustls-webpki 0.103.16, webpki-roots e webpki-root-certs 1.0.10, rustup 1.29.2; composer/ca-bundle 1.4.16 o 1.6.0. Controlla anche le dipendenze indirette nei lockfile. Non inventare versioni: se un dato manca, scrivi da dove andrebbe letto."
    },
    {
      "type": "paragraph",
      "content": "ottieni una lista chiara di cosa aggiornare, con la priorità, invece di aggiornare tutto alla cieca."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Certificati (caso eMudhra)",
      "content": "Controlla come questo progetto verifica i certificati HTTPS quando si collega a servizi esterni (API, pagamenti, email, webhook). Cerca bundle di certificati inclusi nel progetto o nelle dipendenze (certifi, composer/ca-bundle, webpki-roots, file .pem o .crt), opzioni che disattivano la verifica (verify=False, rejectUnauthorized: false, CURLOPT_SSL_VERIFYPEER false, InsecureSkipVerify) e immagini Docker che installano ca-certificates. Dimmi cosa va aggiornato perché il progetto smetta di fidarsi degli intermedi eMudhra compromessi e segnala ogni punto in cui la verifica è disattivata. Non modificare nulla."
    },
    {
      "type": "paragraph",
      "content": "il caso eMudhra non si vede nel codice: si nasconde nelle dipendenze e nelle immagini. E una verifica disattivata è un rischio a prescindere."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Piano di aggiornamento",
      "content": "Preparami un piano di aggiornamento passo passo per questo progetto, senza eseguirlo: quali file cambiare (versioni nel Dockerfile, nei lockfile, in .nvmrc, in go.mod, nella CI), quali comandi lanciare, come ricostruire le immagini senza cache (es. docker build --no-cache --pull), quali test eseguire e cosa controllare dopo il rilascio. Indica i rischi di compatibilità (per esempio il passaggio da PHP 8.1 a 8.3 o da Node.js 20 a 22) e cosa conviene provare prima in un ambiente di prova."
    },
    {
      "type": "paragraph",
      "content": "hai un piano da approvare o da girare al tuo sviluppatore, con tempi e rischi chiari."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Esegui su un ramo separato",
      "content": "Ok, esegui il piano su un nuovo ramo git chiamato aggiornamenti-sicurezza-ottobre-2026: aggiorna le versioni, rigenera i lockfile, ricostruisci senza cache ed esegui i test. Fermati e chiedimi conferma prima di fare push, pubblicare o toccare il server di produzione. Alla fine riassumi cosa hai cambiato, l'esito dei test e cosa resta da fare a mano sul server o sull'hosting."
    },
    {
      "type": "paragraph",
      "content": "l'IA fa il lavoro ripetitivo, ma la messa online resta una tua decisione."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Più progetti insieme",
      "content": "Nella cartella in cui ti trovi ci sono più progetti, uno per sottocartella. Per ognuno esegui l'inventario e il confronto dei prompt 1 e 2, in sola lettura, e alla fine dammi un'unica tabella: progetto, tecnologia, versione attuale, versione minima, stato (OK / DA AGGIORNARE / DA VERIFICARE) e chi deve intervenire (io, sviluppatore, hosting)."
    },
    {
      "type": "paragraph",
      "content": "in un colpo solo vedi quali progetti sono a posto e quali no, e a chi scrivere."
    },
    {
      "type": "callout",
      "content": "**Nota:** l'IA legge i file del progetto, non il tuo server: la versione che gira davvero online va confermata con l'hosting o con il pannello (sezioni 4 e 6). Le versioni minime sono aggiornate al 23 ottobre 2026."
    },
    {
      "type": "h2",
      "heading": "6. Cosa chiedere al tuo sviluppatore o al tuo hosting",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/07-slide-07.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Non devi sapere come si aggiorna un server: devi sapere **cosa chiedere** e farti dare una **risposta scritta**. Le domande sotto vanno bene per l'hosting, per l'agenzia o per lo sviluppatore che segue il tuo sito. Se ti rispondono \"tutto a posto\" senza numeri di versione, chiedi i numeri."
    },
    {
      "type": "list",
      "items": [
        "**Che versione esatta di PHP gira sul mio sito?** È almeno 8.2.35, 8.3.36, 8.4.27 o 8.5.12? I worker PHP-FPM o Apache sono stati riavviati dopo l'aggiornamento?",
        "**Se uso PHP 8.1 o precedente:** il server ha patch del fornitore Linux o LTS? Quando migriamo a una versione supportata?",
        "**Node.js:** su che versione girano app, API e automazioni? Sono state ridistribuite dopo il 21 ottobre?",
        "**Certificati:** il pacchetto ca-certificates del server e le immagini Docker sono stati aggiornati dopo il 20 ottobre? Ci sono servizi con verifica dei certificati disattivata?",
        "**Log:** avete controllato i log dal 17 ottobre per tentativi contro PHP (richieste con PHP_SESSION_UPLOAD_PROGRESS)?",
        "**Backup:** c'è un backup recente e funzionante prima degli aggiornamenti?"
      ]
    },
    {
      "type": "code",
      "label": "MESSAGGIO PRONTO",
      "content": "Ciao, a ottobre 2026 PHP ha pubblicato correzioni critiche (CVE-2026-109618 e CVE-2026-109619, versioni 8.2.35, 8.3.36, 8.4.27 e 8.5.12), Node.js ha rilasciato 22.23.4, 24.22.1 e 26.12.1 e sono stati aggiornati i certificati di sistema per il caso eMudhra. Mi confermi per iscritto, per il mio sito/progetto [nome]: 1) la versione esatta di PHP e Node.js in uso; 2) se è stato aggiornato il pacchetto ca-certificates; 3) se i servizi sono stati riavviati o ridistribuiti; 4) se avete controllato i log dal 17 ottobre? Grazie."
    },
    {
      "type": "paragraph",
      "content": "una richiesta precisa, con i codici ufficiali, ottiene una risposta precisa. E resta scritta."
    },
    {
      "type": "h2",
      "heading": "7. Dopo l'aggiornamento: ricostruire, testare, ridistribuire",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/08-slide-08.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "È il passaggio che si salta più spesso. Un'immagine Docker costruita con la cache può riusare il vecchio strato con i vecchi certificati; un programma Go compilato prima del 19 ottobre contiene ancora la vecchia libreria; un worker PHP non riavviato continua a usare la versione vecchia. Per questo l'avviso su Discussions on Python.org raccomanda di **ricostruire le immagini con la cache disattivata** e Cloudflare di aggiornare le dipendenze, ricostruire e poi riavviare o ridistribuire."
    },
    {
      "type": "list",
      "items": [
        "**Aggiorna** versioni e dipendenze, anche quelle indirette nei lockfile.",
        "**Ricostruisci senza cache** immagini e binari (per esempio **docker build --no-cache --pull**).",
        "**Testa** in un ambiente di prova: login, pagamenti, moduli di contatto, integrazioni esterne.",
        "**Ridistribuisci** e riavvia i servizi; poi verifica online la versione che gira davvero.",
        "**Annota** data, versioni e chi ha fatto cosa: alla prossima correzione parti già pronto."
      ]
    },
    {
      "type": "h2",
      "heading": "8. Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/09-slide-09.webp",
      "alt": "Guida pratica: aggiornamenti di sicurezza di ottobre 2026 (PHP, Node.js, Python, Go, Rust e il caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Le correzioni di sicurezza arriveranno sempre più spesso e sempre più in fretta: Amazon nota che con l'IA il tempo tra la correzione e il primo attacco si misura ormai in ore. La difesa migliore per un'azienda non è il panico, è un'abitudine: sapere cosa usi, chi lo aggiorna e controllarlo a ogni avviso importante. Con i prompt di questa guida il controllo di un progetto richiede minuti, non giorni."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "hai più siti, e-commerce o automazioni e non sai su cosa girano;",
        "il tuo sito è ancora su PHP 8.1 o più vecchio, o su Node.js fuori supporto;",
        "il tuo sviluppatore o la tua agenzia non rispondono o non danno numeri di versione;",
        "vuoi usare Claude Code o Codex in sicurezza sui tuoi progetti;",
        "vuoi un controllo periodico, non solo quando esce una notizia."
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
        "Controllo dei tuoi progetti con un report chiaro: cosa va aggiornato e chi deve farlo",
        "Aggiornamenti sicuri con test e rilascio guidato",
        "Automazioni con IA che avvisano quando una tecnologia che usi riceve una correzione",
        "Migrazione di siti e app da versioni fuori supporto",
        "Formazione per te e il tuo team su Claude Code e Codex"
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp e dimmi che sito o progetti hai (WordPress, e-commerce, automazioni, app): ti dico cosa controllare per primo e se puoi farlo da solo con i prompt di questa guida."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Sicurezza_Aggiornamenti_Ottobre_2026.pdf](/guide/aggiornamenti-sicurezza-ottobre-2026.pdf)"
    }
  ]
}

export default post
