import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "git-e-github-per-costruire-con-ia",
  "title": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile",
  "description": "La guida promessa nel video: il flusso completo di Git e GitHub spiegato con la metafora della cucina (clone, main, pull, branch, add, commit, push,…",
  "date": "2026-10-23",
  "readTime": 15,
  "category": "Siti web",
  "freeGuide": true,
  "keywords": [
    "Guida pratica",
    "Git e GitHub per costruire con l'IA in modo professionale",
    "strutturato e delegabile",
    "La guida promessa nel video",
    "il flusso completo di Git e GitHub spiegato con la metafora della cucina (clone",
    "main"
  ],
  "image": "/images/blog/covers/git-e-github-per-costruire-con-ia-wide.webp",
  "imageTall": "/images/blog/covers/git-e-github-per-costruire-con-ia-tall.webp",
  "imageAlt": "Il flusso di lavoro con Git e GitHub, i comandi, i prompt per Claude Code e Codex e le regole per delegare i progetti senza caos",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/01-slide-01.webp", "alt": "Il flusso di lavoro con Git e GitHub, i comandi, i prompt per Claude Code e Codex e le regole per delegare i progetti senza caos" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Con Claude Code e Codex oggi un imprenditore può costruire siti, automazioni e piccoli software da solo. Il problema arriva dopo: modifiche fatte \"un po' a caso\", nessuna storia di cosa è cambiato e un progetto che nessuno sviluppatore vuole prendere in mano. **Git** (il programma che registra ogni versione del progetto) e **GitHub** (il servizio online dove il progetto vive e il team collabora) risolvono proprio questo. Qui trovi, più in dettaglio, il flusso che ti ho mostrato nel video con la metafora della cucina, i comandi e i **prompt pronti** per farlo fare all'IA."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "capire repository, main, branch, commit, pull request e merge senza gergo tecnico;",
        "preparare una volta sola account, Git e progetto (con le password al sicuro);",
        "seguire il flusso in 8 passi, dal git pull al merge;",
        "far fare tutto a Claude Code o Codex con prompt pronti, restando tu a decidere;",
        "proteggere main con revisioni e test automatici;",
        "consegnare un progetto ordinato a uno sviluppatore o a un collaboratore."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** **main non si tocca direttamente.** Ogni modifica, anche quella fatta dall'IA, nasce in un branch separato, viene salvata con commit chiari, passa da una pull request con revisione e test, e solo alla fine entra in main con il merge. È questo che rende un progetto professionale e delegabile."
    },
    {
      "type": "cta",
      "heading": "Vuoi impostare Git e GitHub sui tuoi progetti?",
      "content": "Se costruisci con l'IA e vuoi un metodo ordinato fin da subito, o hai già progetti da sistemare prima di delegarli, scrivimi su WhatsApp: guardiamo insieme da dove partire."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Git - sito ufficiale e download](https://git-scm.com/downloads)",
        "[Pro Git in italiano (libro gratuito)](https://git-scm.com/book/it/v2)",
        "[GitHub flow - il flusso ufficiale di GitHub](https://docs.github.com/en/get-started/using-github/github-flow)",
        "[GitHub - cosa sono le pull request](https://docs.github.com/en/pull-requests/reference/pull-requests)",
        "[GitHub - branch protetti](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)",
        "[GitHub Actions - test automatici (CI)](https://docs.github.com/en/actions/get-started/continuous-integration)",
        "[GitHub - piani e prezzi](https://github.com/pricing)",
        "[Claude Code - flussi di lavoro con Git e pull request](https://code.claude.com/docs/en/common-workflows)",
        "[Claude Code - GitHub Actions e @claude](https://code.claude.com/docs/en/github-actions)",
        "[Codex CLI (OpenAI)](https://learn.chatgpt.com/docs/codex/cli)",
        "[Codex - revisione delle pull request su GitHub](https://learn.chatgpt.com/docs/third-party/github)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Git e GitHub in due minuti: la cucina del ristorante",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/02-slide-02.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "**Cos'è Git?** È un programma gratuito e open source che registra ogni modifica di un progetto, così puoi vedere chi ha cambiato cosa e tornare indietro quando vuoi. **Cos'è GitHub?** È il servizio online (di Microsoft) dove tieni la copia condivisa del progetto e dove il team propone, controlla e approva le modifiche. Git lavora sul tuo computer, GitHub è il punto d'incontro. Nel video li ho paragonati alla cucina di un ristorante: ecco la stessa metafora, parola per parola."
    },
    {
      "type": "table",
      "headers": [
        "Parola",
        "Nella cucina",
        "Cosa è davvero"
      ],
      "rows": [
        [
          "**Repository**",
          "il ristorante con tutte le ricette",
          "la cartella del progetto con tutta la storia delle modifiche"
        ],
        [
          "**git clone**",
          "una copia della cucina a casa tua",
          "scarica sul tuo computer una copia completa del progetto, con tutte le versioni di ogni file"
        ],
        [
          "**main**",
          "la cucina ufficiale che serve i clienti",
          "il branch principale, quello che va online. Su GitHub i nuovi repository lo chiamano **main**; nei progetti vecchi può chiamarsi **master**"
        ],
        [
          "**git pull**",
          "ricevere le ultime ricette",
          "scarica e integra gli ultimi aggiornamenti dal repository su GitHub"
        ],
        [
          "**branch**",
          "una postazione separata",
          "una linea di lavoro parallela: modifichi senza toccare main"
        ],
        [
          "**git add**",
          "scegliere i piatti da presentare",
          "sceglie quali modifiche entrano nel prossimo salvataggio (staging)"
        ],
        [
          "**commit**",
          "l'etichetta sul piatto",
          "salva una fotografia delle modifiche scelte **più** un messaggio che spiega cosa è cambiato"
        ],
        [
          "**git push**",
          "portare il piatto al pass",
          "invia i tuoi commit su GitHub"
        ],
        [
          "**pull request**",
          "chiedere allo chef di assaggiare",
          "la proposta di unire il tuo branch a main, con discussione e revisione"
        ],
        [
          "**merge**",
          "il piatto entra nel menu",
          "unisce le modifiche approvate a main"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Il flusso del video in una riga:** **git pull** su main → **branch** → modifiche con Claude Code o Codex → **git add** → **git commit** → **git push** → **pull request** → revisione e test → **merge** su main."
    },
    {
      "type": "h2",
      "heading": "2. Cosa ti serve (si prepara una volta sola)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/03-slide-03.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "**Per iniziare non spendi nulla.** Il piano **GitHub Free** costa 0 $ e include repository pubblici e privati illimitati e 2.000 minuti al mese di GitHub Actions per i test automatici (prezzi rilevati a ottobre 2026 su github.com/pricing; il piano Team costa 4 $ per utente al mese). Per i tuoi progetti aziendali usa sempre un repository **privato**. Se non ami il terminale, esiste anche **GitHub Desktop**, l'app con interfaccia grafica, ma con Claude Code e Codex i comandi li scrive l'IA."
    },
    {
      "type": "list",
      "items": [
        "**Account GitHub:** crealo su github.com (va bene il piano Free). Attiva la verifica in due passaggi.",
        "**Git sul computer:** scaricalo da [git-scm.com/downloads](https://git-scm.com/downloads) (su Windows è \"Git for Windows\", consigliato anche da Claude Code). Poi imposta nome ed email: **git config --global user.name \"Tuo Nome\"** e **git config --global user.email \"tua@email.it\"**.",
        "**Claude Code o Codex:** l'agente IA che scrive il codice e usa Git al posto tuo.",
        "**Il file .gitignore:** dice a Git quali file **non** salvare mai, per esempio **.env** con password e chiavi API, la cartella node_modules, i file temporanei. GitHub offre modelli pronti nel repository github/gitignore.",
        "**Un README:** due righe su cosa fa il progetto e come si avvia. Per l'IA aggiungi **CLAUDE.md** (Claude Code lo legge a inizio sessione) o **AGENTS.md** (le istruzioni per Codex)."
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** password, token e chiavi API **non vanno mai** nel repository, nemmeno privato. GitHub ha una protezione (push protection) che blocca i push con segreti riconoscibili: per il tuo account è attiva di default sui repository **pubblici**; sui privati delle organizzazioni richiede GitHub Secret Protection. Non contarci come unica difesa: usa .gitignore e il file .env."
    },
    {
      "type": "h2",
      "heading": "3. Il flusso completo in 8 passi (con i comandi)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/04-slide-04.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "È il **GitHub flow**, il flusso ufficiale consigliato da GitHub, lo stesso del video. I comandi servono a capire cosa succede: nella sezione 4 trovi i prompt per farli eseguire a Claude Code o Codex. Al posto di **nome-branch** usa un nome breve e descrittivo, per esempio **modulo-contatti** o **fix-checkout**."
    },
    {
      "type": "callout",
      "content": "**Nota:** **git checkout -b** (quello del video) e **git switch -c** fanno la stessa cosa: creano il branch e ci passano sopra. switch è il comando più recente e più chiaro. Se il tuo progetto usa **master** invece di main, sostituisci il nome: Git 2.56 (ottobre 2026) chiama ancora \"master\" il primo branch dei repository creati da zero con git init, mentre GitHub usa main."
    },
    {
      "type": "code",
      "content": "# 0. Solo la prima volta: copia il progetto da GitHub sul computer\ngit clone https://github.com/tua-azienda/progetto.git\n# 1. Parti da main aggiornato\ngit switch main\ngit pull\n# 2. Crea la tua postazione separata (branch) e passaci sopra\ngit switch -c nome-branch        # oppure: git checkout -b nome-branch\n# 3. Fai le modifiche (anche con Claude Code o Codex), poi guarda cosa è cambiato\ngit status\n# 4. Scegli cosa salvare e salvalo con un messaggio chiaro\ngit add percorso/del/file        # oppure: git add .  (tutto)\ngit commit -m \"Aggiunge il modulo contatti alla home\"\n# 5. Manda il branch su GitHub (-u solo la prima volta)\ngit push -u origin nome-branch\n# 6. Apri la pull request (dal sito di GitHub oppure con GitHub CLI)\ngh pr create\n# 7. Revisione + test automatici, poi merge su GitHub\n# 8. Torna su main, aggiornalo ed elimina il branch finito\ngit switch main\ngit pull\ngit branch -d nome-branch"
    },
    {
      "type": "paragraph",
      "content": "**Cosa succede nella pull request.** Su GitHub la pull request mostra le differenze riga per riga: chi la rivede può commentare, suggerire modifiche, approvare o chiedere cambiamenti. Se il lavoro non è finito, aprila come **bozza** (draft): una bozza non si può unire. Quando tutto è approvato e i controlli sono verdi, scegli **Merge** (oppure **Squash and merge**, che unisce tutti i commit del branch in uno solo e tiene main più leggibile). Se dopo il merge qualcosa non va, il pulsante **Revert** crea una nuova pull request che annulla la modifica."
    },
    {
      "type": "h2",
      "heading": "4. I prompt per farlo fare a Claude Code e Codex",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/05-slide-05.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "Secondo la documentazione ufficiale, Claude Code lavora direttamente con Git: prepara le modifiche, scrive i messaggi di commit, crea i branch e apre le pull request. Codex CLI lavora nello stesso modo sul tuo repository. Apri il terminale nella cartella del progetto e avvia **claude** oppure **codex**. Se vuoi approvare ogni azione, in Claude Code usa la modalità **Manual** o **plan** (si cambia con Shift+Tab). I prompt funzionano con entrambi."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Prepara il progetto",
      "content": "Controlla se questa cartella è già un repository Git e se è collegata a GitHub. Se manca, inizializzala con il branch principale chiamato main. Verifica che esista un .gitignore adatto alla tecnologia del progetto e che file come .env, chiavi, password e node_modules siano esclusi; se trovi segreti già salvati nella storia di Git, fermati e avvisami. Crea un README breve (cosa fa il progetto, come si avvia, come si testa). Non fare push senza il mio ok."
    },
    {
      "type": "paragraph",
      "content": "parti con le fondamenta giuste: niente password nel repository e un progetto che chiunque capisce."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Inizia una modifica nel modo giusto",
      "content": "Prima di toccare il codice: passa su main, scarica gli ultimi aggiornamenti con git pull e crea un nuovo branch chiamato [nome-breve] per questa modifica: [descrivi cosa vuoi]. Lavora solo su questo branch, mai su main. Quando hai finito, mostrami in parole semplici quali file hai cambiato e perché."
    },
    {
      "type": "paragraph",
      "content": "è il passaggio del video \"una postazione separata\": main resta sempre funzionante."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Commit ordinati",
      "content": "Guarda le modifiche con git status e git diff e raggruppale in commit piccoli e coerenti. Per ogni commit proponi un messaggio chiaro in italiano che spieghi cosa cambia e perché (per esempio \"Aggiunge la validazione dell'email nel modulo contatti\"). Mostrami l'elenco prima di eseguire i commit e non includere file con dati sensibili."
    },
    {
      "type": "paragraph",
      "content": "fra sei mesi, tu o chi lavorerà al progetto capirete la storia leggendo solo i messaggi."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Apri la pull request",
      "content": "Fai push del branch su GitHub e apri una pull request verso main. Nella descrizione scrivi: cosa cambia, perché, come provarlo passo passo, eventuali rischi e cosa non è stato testato. Se il lavoro non è completo, aprila come bozza."
    },
    {
      "type": "paragraph",
      "content": "una pull request ben scritta si rivede in pochi minuti, anche da chi non conosce il progetto."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Revisione prima del merge",
      "content": "Rivedi questa pull request come farebbe uno sviluppatore senior: cerca bug, problemi di sicurezza, password o chiavi finite nel codice, test mancanti e modifiche che non c'entrano con lo scopo della PR. Dammi un elenco ordinato per gravità e non modificare nulla finché non te lo dico."
    },
    {
      "type": "paragraph",
      "content": "un secondo controllo prima di \"servire il piatto\". In Claude Code puoi anche usare il comando /code-review (su ogni piano), in Codex il comando /review."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Aggiungi i test automatici",
      "content": "Crea un workflow di GitHub Actions che a ogni pull request verso main installi le dipendenze, esegua i test e il controllo dello stile del codice. Se il progetto non ha test, proponi i 3-5 test più importanti per le funzioni critiche (per esempio login, pagamenti, moduli). Fai tutto su un branch e apri una pull request."
    },
    {
      "type": "paragraph",
      "content": "i \"test automatici\" del video partono solo se qualcuno li configura: questo prompt lo fa per te."
    },
    {
      "type": "code",
      "label": "PROMPT 7 · Ho lavorato su main per sbaglio",
      "content": "Ho fatto delle modifiche direttamente su main. Spostale su un nuovo branch chiamato [nome-breve] senza perdere nulla e lascia main uguale a quello su GitHub. Spiegami cosa fai prima di farlo e non usare comandi che cancellano modifiche senza chiedermelo."
    },
    {
      "type": "paragraph",
      "content": "l'errore più comune si risolve in un minuto, se sai cosa chiedere."
    },
    {
      "type": "code",
      "label": "PROMPT 8 · Prepara la consegna",
      "content": "Prepara questo progetto per essere consegnato a uno sviluppatore che non lo conosce. Aggiorna il README (scopo, requisiti, installazione, come avviarlo, come eseguire i test, variabili d'ambiente necessarie con nomi ma senza valori), crea un file CONTRIBUTING.md con le regole di lavoro (branch, commit, pull request, revisione, test) e un modello di pull request in .github/pull_request_template.md. Segnalami tutto ciò che oggi è solo nella mia testa e andrebbe scritto. Fai tutto su un branch e apri una pull request."
    },
    {
      "type": "paragraph",
      "content": "in un'ora l'IA scrive la documentazione che di solito nessuno scrive mai."
    },
    {
      "type": "callout",
      "content": "**Nota:** l'IA esegue comandi Git veri: rivedi sempre la pull request prima del merge e non permetterle push su main, force push o reset senza chiederti conferma."
    },
    {
      "type": "h2",
      "heading": "5. Proteggi main: revisioni e test automatici",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/06-slide-06.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "Nel video ho detto che main \"non dovresti modificarla direttamente\". GitHub però non lo impedisce da solo: per renderlo una regola si attivano i **branch protetti** o i **rulesets** (nelle impostazioni del repository su GitHub). Con una regola su main puoi richiedere una pull request per ogni modifica, un numero minimo di approvazioni, che i test (status check) siano verdi prima del merge, e bloccare cancellazione e push forzati."
    },
    {
      "type": "table",
      "headers": [
        "Strumento",
        "A cosa serve",
        "Disponibilità (ottobre 2026)"
      ],
      "rows": [
        [
          "**Branch protetti / rulesets**",
          "obbligano a passare da pull request, revisioni e test prima del merge su main",
          "repository pubblici con GitHub Free; pubblici e privati con Pro, Team ed Enterprise"
        ],
        [
          "**CODEOWNERS**",
          "indica chi deve approvare le modifiche a certi file o cartelle",
          "stessa disponibilità dei branch protetti"
        ],
        [
          "**GitHub Actions**",
          "esegue test e controlli automatici a ogni push o pull request",
          "Free: 2.000 minuti al mese sui privati, gratis sui pubblici"
        ],
        [
          "**@claude nella PR**",
          "Claude Code GitHub Action: analizza, corregge e rivede su richiesta (/install-github-app)",
          "abbonamento Claude (Pro, Max, Team, Enterprise) o chiave API"
        ],
        [
          "**Claude Code Code Review**",
          "revisione automatica di ogni pull request con commenti riga per riga",
          "piani Claude Team ed Enterprise"
        ],
        [
          "**@codex review**",
          "revisione di Codex sulla pull request, anche automatica",
          "repository GitHub collegato a Codex"
        ],
        [
          "**Dependabot**",
          "apre pull request per aggiornare le dipendenze vulnerabili",
          "incluso in GitHub Free"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Se usi GitHub Free con repository privati:** le regole di protezione non ci sono, quindi la disciplina la mette il metodo: tutti su branch, ogni modifica passa da pull request, il merge lo fa chi rivede. Il piano Team (4 $ per utente al mese) sblocca le regole sui privati. Nota: il proprietario di un repository personale può unire anche senza approvazioni, e la revisione dell'IA non approva né blocca nulla."
    },
    {
      "type": "h2",
      "heading": "6. Pronto per delegare: cosa deve trovare chi arriva",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/07-slide-07.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "È il punto finale del video: quando delegherai, chi arriva deve trovare **un processo ordinato e non codice modificato a caso**. Con il flusso di questa guida la storia è già scritta: ogni pull request conserva commenti, commit e motivazioni. Prima di consegnare il progetto a uno sviluppatore, a un'agenzia o a un collaboratore, controlla questi punti (e fai preparare la documentazione all'IA con il prompt 8 della sezione 4)."
    },
    {
      "type": "list",
      "items": [
        "**Il repository è tuo** (o della tua organizzazione GitHub), non dello sviluppatore: lui entra come **collaboratore** e, se lo lasci, togli l'accesso con un clic.",
        "**README aggiornato:** cosa fa il progetto, come si avvia, come si testa, dove gira online. Più **CLAUDE.md** o **AGENTS.md** con le regole per l'IA.",
        "**Regole scritte:** \"si lavora su branch\", \"ogni modifica passa da pull request\", \"pull request piccole, una per argomento\", \"merge solo dopo revisione e test verdi\".",
        "**Niente password nel codice:** i segreti stanno nel file .env (escluso con .gitignore) o nei secrets di GitHub Actions; consegnali a parte, in modo sicuro.",
        "**Pull request piccole:** GitHub stesso consiglia pull request piccole e unite presto, perché si rivedono meglio e creano meno conflitti.",
        "**Un'organizzazione GitHub** quando lavorano più persone: permessi più granulari rispetto al repository personale."
      ]
    },
    {
      "type": "h2",
      "heading": "7. Gli errori più comuni (e come rimediare)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/08-slide-08.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "Quasi tutto in Git si può recuperare, perché ogni commit resta nella storia. Proprio per questo l'unico errore davvero serio è salvare password o chiavi: anche se le cancelli dopo, restano nelle versioni precedenti."
    },
    {
      "type": "table",
      "headers": [
        "Errore",
        "Cosa succede",
        "Come rimediare"
      ],
      "rows": [
        [
          "**Lavorare su main**",
          "modifiche non controllate finiscono nella cucina ufficiale",
          "**git switch -c nuovo-branch**: le modifiche non ancora salvate ti seguono sul nuovo branch (prompt 7)"
        ],
        [
          "**Password o .env nel repository**",
          "il segreto resta nella storia di Git, anche se lo cancelli",
          "**cambia subito** la password o la chiave, poi togli il file dal tracciamento (git rm --cached .env) e aggiungilo a .gitignore"
        ],
        [
          "**Dimenticare il git pull**",
          "lavori su una versione vecchia e arrivano i conflitti",
          "parti sempre da main aggiornato; durante il lavoro porta spesso main nel tuo branch"
        ],
        [
          "**Pull request enormi**",
          "nessuno riesce a rivederle davvero",
          "una pull request per argomento, piccola, unita presto"
        ],
        [
          "**Commit \"modifiche varie\"**",
          "fra un mese nessuno sa cosa è cambiato",
          "messaggi chiari: cosa cambia e perché (prompt 3)"
        ],
        [
          "**Merge sbagliato**",
          "un errore è finito su main",
          "su GitHub usa **Revert** nella pull request: crea una nuova PR che annulla la modifica"
        ],
        [
          "**\"I test automatici non partono\"**",
          "nessuno li ha configurati",
          "crea un workflow di GitHub Actions (prompt 6)"
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
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/09-slide-09.webp",
      "alt": "Guida pratica: Git e GitHub per costruire con l'IA in modo professionale, strutturato e delegabile"
    },
    {
      "type": "paragraph",
      "content": "Costruire con l'IA è veloce; farlo **in modo professionale** significa che ogni modifica ha un perché, un controllo e una storia. Bastano tre abitudini: un branch per ogni modifica, pull request con revisione, merge solo quando è tutto verde."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "hai progetti creati con l'IA senza Git, o con tutto su main;",
        "vuoi delegare a uno sviluppatore o a un'agenzia e non sai cosa consegnare;",
        "vuoi test automatici e revisioni con l'IA su ogni pull request;",
        "hai trovato password o chiavi nel codice."
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
        "Setup di Git e GitHub con regole e permessi giusti",
        "Revisioni e test automatici (GitHub Actions, Claude Code, Codex)",
        "Documentazione e consegna dei progetti a sviluppatori",
        "Formazione per te e il tuo team su Claude Code e Codex"
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
          "git clone <indirizzo>",
          "una volta sola",
          "copia il progetto da GitHub sul computer"
        ],
        [
          "git switch main + git pull",
          "prima di ogni lavoro",
          "porta main all'ultima versione"
        ],
        [
          "git switch -c nome-branch",
          "inizio di ogni modifica",
          "crea la postazione separata (come git checkout -b)"
        ],
        [
          "git status",
          "sempre, quando hai dubbi",
          "mostra cosa è cambiato e su quale branch sei"
        ],
        [
          "git add <file>",
          "prima del commit",
          "sceglie le modifiche da salvare"
        ],
        [
          "git commit -m \"messaggio\"",
          "a ogni passo concluso",
          "salva le modifiche con la spiegazione"
        ],
        [
          "git push -u origin nome-branch",
          "quando vuoi condividere",
          "manda il branch su GitHub"
        ],
        [
          "gh pr create",
          "a lavoro pronto",
          "apre la pull request (anche dal sito di GitHub)"
        ],
        [
          "Merge / Revert su GitHub",
          "dopo revisione e test",
          "unisce a main, oppure annulla una modifica unita"
        ]
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp e dimmi cosa stai costruendo con l'IA (sito, automazioni, gestionale, app): ti dico come impostare Git e GitHub e cosa ti serve per poterlo delegare."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Git_GitHub.pdf](/guide/git-e-github-per-costruire-con-ia.pdf)"
    }
  ]
}

export default post
