import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "audit-sicurezza-skill-cloudflare",
  "title": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report",
  "description": "Checklist AUDIT per la skill Cloudflare: preparazione, isolamento Docker da adattare, installazione ufficiale, tre passi e report inventato a scopo…",
  "date": "2026-11-16",
  "readTime": 10,
  "category": "Risorse gratuite",
  "keywords": [
    "AUDIT",
    "la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report",
    "Checklist AUDIT per la skill Cloudflare",
    "preparazione",
    "isolamento Docker da adattare",
    "installazione ufficiale"
  ],
  "image": "/images/blog/covers/audit-sicurezza-skill-cloudflare-wide.webp",
  "imageTall": "/images/blog/covers/audit-sicurezza-skill-cloudflare-tall.webp",
  "imageAlt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/01-slide-01.webp", "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report" },
    {
      "type": "h2",
      "heading": "1. Cos’è e cosa controlla",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/02-slide-02.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "intro",
      "content": "**security-audit è la skill open source di Cloudflare.** Guida un agente nell’analisi del codice. Cerca vulnerabilità e verifica le evidenze con agenti indipendenti. Non è il riquadro Turnstile che vedi sui siti. Controllo delle fonti: **16 novembre 2026**."
    },
    {
      "type": "cta",
      "heading": "Prepariamo l’audit della tua app?",
      "content": "Scrivici su WhatsApp con **AUDIT**. Ti aiutiamo a definire il perimetro e a preparare il materiale da controllare."
    },
    {
      "type": "list",
      "items": [
        "**Codice e confini di fiducia:** input, autenticazione, autorizzazioni, dati e separazione tra utenti.",
        "**Aree pertinenti:** browser, dipendenze, distribuzione, cloud, API e componenti AI. Dipende dal progetto e dal perimetro scelto.",
        "**Risultato:** report leggibile, risultati JSON e registro della copertura. Una parte non esaminata deve restare dichiarata."
      ]
    },
    {
      "type": "callout",
      "content": "**Gratuita è la skill.** La licenza è **MIT**. L’uso del modello può avere costi o limiti del tuo piano. “Audit completo” è una richiesta di lavoro. Non è una garanzia di trovare ogni vulnerabilità."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: progetto e licenza](https://github.com/cloudflare/security-audit-skill)",
        "[Aree di ricerca](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/ATTACK-CLASSES.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "2. La checklist prima di iniziare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/03-slide-03.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**Prepara prima una copia di prova.** Queste precauzioni sono proposte Marketizzati. La skill richiede strumenti con uso di tool, sottoagenti paralleli, Node.js per i validatori e isolamento tecnico per eseguire codice del progetto."
    },
    {
      "type": "list",
      "items": [
        "☐ **Backup e Git pulito.** Salva il lavoro legittimo. Annota il commit. Prepara un branch dedicato. Non usare comandi che scartano modifiche.",
        "☐ **Perimetro.** Elenca cartelle, funzioni e parti escluse. Indica dove scrivere i report fuori dal repo.",
        "☐ **Segreti esclusi.** Nella copia non mettere chiavi, token, database reali o .env con credenziali vere. Usa valori fittizi anche nel .env di prova. Controlla cronologia Git, log e allegati. Se un segreto è già esposto, fallo revocare e sostituire.",
        "☐ **Ambiente pronto.** Usa dipendenze locali già revisionate. Non far scaricare pacchetti alle prove. Prepara dati e account sintetici.",
        "☐ **Budget scritto.** Compila: tempo ___; spesa massima ___; invocazioni agenti ___. Scegli quick, standard o deep. La durata e i token non hanno una stima universale ufficiale.",
        "☐ **Permessi limitati.** In Claude Code controlla letture, scritture, shell e rete. Autorizza solo le cartelle necessarie. Durante l’audit il sorgente resta in sola lettura."
      ]
    },
    {
      "type": "code",
      "content": "/permissions\n/usage"
    },
    {
      "type": "paragraph",
      "content": "Il primo comando mostra i permessi. Il secondo mostra l’uso; il costo della sessione è una stima, non la fattura. La skill misura il budget in invocazioni di agenti. Un importo o un tempo nel prompt non impone un tetto tecnico. **Da verificare:** limiti del tuo piano. Permessi e sandbox sono controlli diversi."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: requisiti e budget](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/SKILL.md)",
        "[Claude Code: permessi](https://code.claude.com/docs/en/permissions)",
        "[Claude Code: costi](https://code.claude.com/docs/en/costs)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Isola le prove con Docker",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/04-slide-04.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**Esempio Marketizzati, DA ADATTARE.** La skill non prepara Docker al posto tuo. Anche build e test ordinari eseguono codice del progetto. Richiedono isolamento. L’agente resta fuori dal container; nel container gira solo la prova locale."
    },
    {
      "type": "code",
      "content": "# compose.audit.yaml — DA ADATTARE, NON TESTATO\nservices:\n  check:\n    image: audit-runtime:local # Immagine fidata già locale\n    pull_policy: never       # Runtime e dipendenze già pronti\n    network_mode: none       # Nessuna rete esterna\n    read_only: true          # Root filesystem non scrivibile\n    user: \"10001:10001\"      # UID/GID da verificare\n    cap_drop: [ALL]\n    security_opt: [\"no-new-privileges:true\"]\n    cpus: 1\n    mem_limit: 512m\n    memswap_limit: 512m\n    pids_limit: 64\n    ulimits: {fsize: 10485760, nofile: 128}\n    volumes:\n      - ./audit-source:/src:ro # Copia SENZA segreti\n    tmpfs:\n      - /scratch:rw,nosuid,nodev,size=64m,uid=10001,gid=10001,mode=0700\n    working_dir: /scratch\n    # env -i pulisce l’ambiente; verificare i percorsi dei tool.\n    entrypoint:\n      [\"/usr/bin/env\", \"-i\", \"PATH=/usr/local/bin:/usr/bin:/bin\",\n       \"HOME=/scratch\", \"TMPDIR=/scratch\", \"XDG_CACHE_HOME=/scratch\",\n       \"/usr/bin/timeout\", \"--kill-after=5s\", \"60s\"]\n    command: [\"node\", \"/src/tests/security-local.cjs\"]"
    },
    {
      "type": "paragraph",
      "content": "Prepara audit-source come copia depurata. Il test security-local.cjs è un segnaposto da scrivere per la tua app. L’immagine audit-runtime:local deve già contenere Node, env e timeout nei percorsi indicati. **Da verificare:** assenza di segreti, VOLUME o servizi inattesi nell’immagine; limiti effettivi del runtime; nessuna scrittura fuori da /scratch. Non montare home, socket Docker o report conservati. Ogni agente richiede uno scratch separato."
    },
    {
      "type": "callout",
      "content": "**Se manca un controllo, fermati.** Questo esempio non è stato eseguito e non implementa l’intera gestione sicura degli artefatti della skill. Se rete, ambiente, filesystem o limiti non sono verificabili, resta alla lettura del sorgente. Lascia la prova decisiva come **da verificare**. Non usare produzione."
    },
    {
      "type": "list",
      "items": [
        "[Docker: opzioni Compose](https://docs.docker.com/reference/compose-file/services/)",
        "[Claude Code: sandbox e Windows/WSL2](https://code.claude.com/docs/en/sandboxing)"
      ]
    },
    {
      "type": "h2",
      "heading": "4. Installa la skill ufficiale",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/05-slide-05.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**Leggi prima il repository Cloudflare.** Rivedi istruzioni, file di supporto e script. Annota la revisione scelta. Apri il terminale nella cartella della tua app. I comandi seguenti sono documentati; qui non sono stati eseguiti."
    },
    {
      "type": "h3",
      "heading": "Nel terminale: scegli una sola variante",
      "content": ""
    },
    {
      "type": "code",
      "content": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit"
    },
    {
      "type": "paragraph",
      "content": "Scegli **Claude Code** nell’installer. Per una installazione a livello utente, usa invece la variante ufficiale con --global:"
    },
    {
      "type": "code",
      "content": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit --global"
    },
    {
      "type": "paragraph",
      "content": "npx può scaricare ed eseguire Skills CLI. Non è un comando da incollare nella chat di Claude. Cloudflare non documenta qui una coppia di comandi /plugin marketplace add e /plugin install."
    },
    {
      "type": "h3",
      "heading": "Nella chat di Claude Code: chiedi l’audit",
      "content": ""
    },
    {
      "type": "code",
      "content": "security audit this codebase"
    },
    {
      "type": "paragraph",
      "content": "È un esempio ufficiale di avvio. Per partire con perimetro, budget e limiti, usa il prompt della prossima pagina. Verifica che Claude abbia caricato proprio **security-audit** di Cloudflare. Se non compare, controlla la configurazione prima di proseguire."
    },
    {
      "type": "paragraph",
      "content": "**Alternativa manuale:** la documentazione Claude ammette .claude/skills/security-audit/SKILL.md. Dopo aver acquisito e letto la sorgente, copia l’intera cartella skills/security-audit, con i file di supporto. È un adattamento alle regole Claude, non un secondo installer Cloudflare."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: installazione ufficiale](https://github.com/cloudflare/security-audit-skill#installation)",
        "[Claude Code: cartelle delle skill](https://code.claude.com/docs/en/skills)"
      ]
    },
    {
      "type": "h2",
      "heading": "5. I tre passi con i prompt pronti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/06-slide-06.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**Flusso pratico di Marco.** Cloudflare sostiene riesecuzioni e verifiche indipendenti. La seconda chat per correggere è una nostra scelta. I prompt sono Marketizzati, **da verificare sul tuo progetto**. Sostituisci i campi in MAIUSCOLO. I prompt non creano una sandbox."
    },
    {
      "type": "code",
      "label": "1 — AUDIT COMPLETO",
      "content": "Usa security-audit di Cloudflare per un audit completo di questa codebase. Perimetro: PERCORSI. Profilo: PROFILO. Massimo BUDGET_AGENTI invocazioni totali. Scrivi i report fuori dal repo in CARTELLA_OUTPUT_NUOVA. Registra commit, copertura e limiti. Non modificare il sorgente. Esegui codice solo nella sandbox già verificata: niente rete esterna, segreti o download; ambiente ammesso esplicitamente, sorgente in sola lettura, scratch separati e limiti di risorse/tempo. Se manca un requisito, non eseguire. Distingui confirmed, needs_validation e rejected. Dichiara eventuale incompletezza."
    },
    {
      "type": "code",
      "label": "2 — CORREZIONE IN UNA SECONDA CHAT",
      "content": "Leggi il report allegato e il codice al commit COMMIT. Verifica ogni confirmed prima della patch. Correggi sul branch dedicato i problemi ancora dimostrabili. Per ogni correzione spiega il motivo e aggiungi una verifica di regressione pertinente. I needs_validation richiedono prima il fatto mancante. Non correggere automaticamente i rejected. Non cambiare i verdetti per far sembrare risolto il report. Esegui test solo nella sandbox verificata, con dati fittizi. Non installare nulla. Consegna diff, controlli eseguiti e limiti."
    },
    {
      "type": "paragraph",
      "content": "Passa alla seconda chat REPORT.md, findings.json, NEEDS-VALIDATION.md e i dettagli pertinenti. Rimuovi segreti e dati personali. Rendi disponibili anche commit, registro di copertura e prove locali sicure."
    },
    {
      "type": "code",
      "label": "3 — NUOVO AUDIT",
      "content": "Ripeti security-audit sul commit corretto COMMIT_NUOVO. Usa i report precedenti in CARTELLA_PRECEDENTE e un nuovo output esterno in CARTELLA_NUOVA. Rivalida le correzioni, cerca regressioni e aggiorna la copertura. Mantieni i vincoli del primo audit e il massimo BUDGET_AGENTI. Distingui risolto, ancora confermato e da verificare. Dichiara esclusioni e parti incomplete. Non certificare che l’app sia sicura."
    },
    {
      "type": "code",
      "label": "VERIFICA INCROCIATA — CODEX",
      "content": "Rivedi in modo indipendente il diff della correzione e il codice interessato. Prima formula la tua valutazione dal sorgente; poi confrontala con il report allegato. Cerca bypass e regressioni. Non modificare file. Non eseguire codice fuori dalla sandbox verificata. Riporta percorso, evidenza e limite. Se non puoi dimostrare un punto, scrivi DA VERIFICARE."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: modelli diversi e riesecuzioni](https://blog.cloudflare.com/build-your-own-vulnerability-harness)"
      ]
    },
    {
      "type": "h2",
      "heading": "6. Esempio di report da saper leggere",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/07-slide-07.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**ESEMPIO INVENTATO A SCOPO DIDATTICO.** App immaginaria: NoteTeam, piccola app Node con note separate per organizzazione. Revisione: DEMO-01, non un commit reale. Profilo quick. Perimetro: API note e login. Esclusi: hosting, email e pagamenti. Le evidenze sotto sono parte della simulazione. Nessun audit è stato eseguito."
    },
    {
      "type": "table",
      "headers": [
        "Stato / problema",
        "Gravità",
        "File fittizio",
        "Azione proposta"
      ],
      "rows": [
        [
          "Confermato · confirmed\nF-01: lettura tra tenant",
          "high",
          "src/routes/notes.ts:42",
          "Filtrare per ID nota e tenant della sessione. Test: A non può leggere la nota di B."
        ],
        [
          "Confermato · confirmed\nF-02: query SQL concatenata",
          "high",
          "src/db/search.ts:18",
          "Usare parametri SQL e mantenere il filtro tenant. Test su database fittizio."
        ],
        [
          "Da verificare · needs_validation\nN-01: cookie Secure",
          "—",
          "src/auth/session.ts:25",
          "Manca la configurazione TLS/proxy effettiva. Il proprietario deve verificarla. Poi decidere se serve una patch."
        ],
        [
          "Scartato · rejected\nR-01: modifica senza login",
          "—",
          "src/app.ts:12 → src/routes/notes.ts:70",
          "Nessuna patch: il middleware di autenticazione copre già la route. Conservare la motivazione."
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Quale evidenza sostiene i confermati?",
      "content": "**F-01, evidenza simulata:** la route usa solo note.id e non verifica il tenant. Nel test locale, un utente fittizio A riceve la nota fittizia B. Atteso: nessun dato di B. Risultato simulato: risposta 200 con il testo di B. **F-02:** l’input della ricerca entra nella query concatenata. Una fixture locale altera il filtro e restituisce ad A una nota del tenant fittizio B. Atteso: ricerca letterale limitata ad A. Nessun dato reale coinvolto."
    },
    {
      "type": "paragraph",
      "content": "**N-01:** l’esito dipende da una configurazione assente dal repo. Non è una vulnerabilità confermata e non ha gravità. **R-01:** la traccia nel sorgente smentisce il bypass. Non è un problema da “sistemare”."
    },
    {
      "type": "callout",
      "content": "**Tabella didattica, non output ufficiale.** Questa sintesi non è un findings.json valido. Cloudflare conserva tutti e tre i verdetti nel JSON. REPORT.md separa i confermati dai dubbi. Gli scartati non vanno presentati come vulnerabilità. Il report completo include anche prove, condizioni, budget e copertura."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: formato dei record](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/report-schema.json)",
        "[Cloudflare: regole dei report](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/VALIDATION-AND-REPORTING.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "7. Quando fermarti e cosa resta da verificare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/08-slide-08.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "paragraph",
      "content": "**Zero confermati non significa zero vulnerabilità.** Il modello può sbagliare. Un controllo può essere fuori perimetro, bloccato o rinviato. Un audit automatico non sostituisce un penetration test professionale né la revisione di chi conosce l’app."
    },
    {
      "type": "list",
      "items": [
        "**Controlla il diff.** Le patch devono correggere la causa e preservare le funzioni legittime. Rivedi i test e i risultati.",
        "**Leggi la copertura.** Annota cosa è stato controllato e cosa manca. Un quick è parziale. Se il budget finisce, il report deve dirlo.",
        "**Chiarisci i dubbi.** Ogni needs_validation deve indicare il fatto mancante e un controllo locale o una verifica del proprietario. Non lanciare attacchi al sistema in produzione.",
        "**Conserva la traccia.** Tieni commit, versione della skill, report precedente, evidenze minime senza segreti e limiti di esecuzione.",
        "**Ferma il ciclo.** Quando non puoi validare in sicurezza o il budget termina, registra il blocco. Chiedi una revisione umana per impatti elevati o decisioni ancora aperte."
      ]
    },
    {
      "type": "paragraph",
      "content": "**Da verificare sul tuo ambiente:** compatibilità, sandbox effettiva, dati inviati al provider, politiche di conservazione, costi e test disponibili. Docker e i prompt di questa guida sono esempi non eseguiti. L’esempio di report non contiene risultati della tua app."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: evidenze e limiti](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/VALIDATION-AND-REPORTING.md)",
        "[OpenAI: revisione del codice con Codex](https://learn.chatgpt.com/use-cases/review-code-changes-in-codex-desktop)"
      ]
    },
    {
      "type": "h3",
      "heading": "Porta AUDIT sul tuo progetto",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/09-slide-09.webp",
      "alt": "AUDIT: la checklist per preparare l’audit di sicurezza con la skill di Cloudflare + un esempio di report"
    },
    {
      "type": "cta",
      "heading": "Vuoi prepararlo con noi?",
      "content": "Scrivici su WhatsApp con **AUDIT**. Partiamo dal perimetro, prepariamo la checklist e ti aiutiamo a leggere il report prima delle correzioni."
    },
    {
      "type": "h3",
      "heading": "Fonti — controllo del 16 novembre 2026",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: repository ufficiale](https://github.com/cloudflare/security-audit-skill)",
        "[Cloudflare: annuncio e metodo](https://blog.cloudflare.com/build-your-own-vulnerability-harness)",
        "[Claude Code: permessi](https://code.claude.com/docs/en/permissions)",
        "[Docker: riferimento Compose](https://docs.docker.com/reference/compose-file/services/)"
      ]
    },
    {
      "type": "paragraph",
      "content": "I riferimenti nelle sezioni distinguono fatti documentati e proposte Marketizzati. La revisione Cloudflare controllata è c1c8a8c. Checklist, configurazione Docker, prompt e report didattico sono proposte Marketizzati da adattare e verificare sul tuo progetto."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_AUDIT_Cloudflare.pdf](/guide/audit-sicurezza-skill-cloudflare.pdf)"
    }
  ]
}

export default post
