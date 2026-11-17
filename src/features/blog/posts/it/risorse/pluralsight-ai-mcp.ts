import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "pluralsight-ai-mcp",
  "title": "Guida pratica: Pluralsight AI MCP",
  "description": "Come collegare Pluralsight a Claude Code, Codex e agli altri strumenti IA per creare percorsi formativi da obiettivi di business e misurarne i risultati.",
  "date": "2026-10-20",
  "readTime": 9,
  "category": "Risorse gratuite",
  "keywords": [
    "Guida pratica",
    "Pluralsight AI MCP",
    "Come collegare Pluralsight a Claude Code",
    "Codex e agli altri strumenti IA per creare percorsi formativi da obiettivi di business e misurarne i risultati",
    "Guida pratica Pluralsight",
    "pratica Pluralsight AI"
  ],
  "image": "/images/blog/covers/pluralsight-ai-mcp-wide.webp",
  "imageTall": "/images/blog/covers/pluralsight-ai-mcp-tall.webp",
  "imageAlt": "Manuale operativo per collegare Pluralsight alla tua IA, creare percorsi formativi da un obiettivo di business e misurare se la formazione porta risultati",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/pluralsight-ai-mcp/01-slide-01.webp", "alt": "Manuale operativo per collegare Pluralsight alla tua IA, creare percorsi formativi da un obiettivo di business e misurare se la formazione porta risultati" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Il 14 ottobre 2026 Pluralsight ha lanciato l'**AI MCP**: un connettore che porta corsi, laboratori, analisi e dati sulle competenze del tuo team direttamente dentro lo strumento di intelligenza artificiale che la tua azienda usa già (Claude, ChatGPT, Copilot, Gemini, Cursor). Questa guida è pensata per imprenditori e manager: non serve essere sviluppatori per capire cosa chiedere, a chi chiederlo e come leggere i risultati."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "capire cosa fa davvero l'AI MCP e se la tua azienda può usarlo;",
        "attivarlo per il tuo piano Pluralsight senza perdere tempo;",
        "collegarlo a **Claude Code** e capire cosa sapere su **Codex**;",
        "trasformare un obiettivo di business (es. ridurre gli errori nel codice) in un percorso formativo per il team;",
        "misurare se la formazione ha migliorato ticket risolti, tempi di sviluppo e produttività;",
        "usare prompt pronti da copiare e adattare."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** l'IA legge i dati della formazione e propone piani e report. Le decisioni restano tue: Pluralsight stesso avverte che le raccomandazioni dell'IA possono essere imprecise e vanno verificate."
    },
    {
      "type": "cta",
      "heading": "Non hai tempo di configurarlo?",
      "content": "Lo attiviamo noi per il tuo team: collegamento dell'MCP, integrazione con Jira o GitHub e un primo report di impatto pronto da presentare. Scrivimi su WhatsApp e dimmi quante persone ha il tuo team e quale risultato vuoi migliorare."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali e utili",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Comunicato ufficiale Pluralsight AI MCP](https://www.pluralsight.com/newsroom/press-releases/pluralsight-launches-ai-mcp-bringing-expert-led-learning-into-ai)",
        "[Guida ufficiale (Help Center) AI MCP](https://help.pluralsight.com/hc/en-us/articles/54384284845972-Pluralsight-AI-MCP)",
        "[Novità 2026: AI MCP e Skill IQ Suite](https://www.pluralsight.com/resources/blog/news/2026-new-features-ai-mcp-skill-iq-suite)",
        "[Pagina IA di Pluralsight](https://www.pluralsight.com/ai)",
        "[Prezzi dei piani business](https://www.pluralsight.com/businesses/pricing)",
        "[Claude Code - collegare un server MCP](https://code.claude.com/docs/en/mcp)",
        "[Codex - collegare un server MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)",
        "[Termini d'uso IA di Pluralsight](https://legal.pluralsight.com/policies?name=pluralsight-artificial-intelligence-terms-of-use)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cosa ti serve prima di iniziare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/02-slide-02.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "L'AI MCP non è un'app da scaricare: è una funzione dei piani aziendali di Pluralsight che si \"accende\" dentro gli strumenti IA della tua azienda. Prima di tutto verifica questi punti."
    },
    {
      "type": "h3",
      "heading": "Controllo veloce",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Piano Pluralsight Team o Enterprise**: l'AI MCP non è disponibile per i piani individuali. Per i clienti business non ha costi aggiuntivi.",
        "**Licenza aziendale dello strumento IA**: serve l'account della tua organizzazione (es. Claude Team/Enterprise, ChatGPT Enterprise). Un abbonamento personale non basta, perché l'MCP compare solo negli strumenti collegati al tuo piano Pluralsight.",
        "**Attivazione dal referente Pluralsight**: è lui che abilita la funzione e ti manda i materiali di configurazione.",
        "**Ruolo di manager**: vedrai le analisi solo dei team in cui sei inserito come manager.",
        "**Consigliato**: Jira, GitHub o GitLab già collegati alla tua IA, se vuoi misurare ticket e tempi di sviluppo (capitolo 5)."
      ]
    },
    {
      "type": "callout",
      "content": "**Prima scelta strategica:** scrivi su un foglio un solo obiettivo misurabile per il team (es. \"meno bug in produzione\", \"onboarding dei nuovi sviluppatori in 30 giorni\"). Tutto il resto della guida parte da lì."
    },
    {
      "type": "h2",
      "heading": "2. Attiva l'AI MCP per la tua azienda",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/03-slide-03.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "L'attivazione si fa una volta sola, a livello di piano: l'amministratore non può abilitarla per un solo utente, la abilita per tutta l'organizzazione."
    },
    {
      "type": "h3",
      "heading": "Passaggi operativi",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Scrivi al tuo referente Pluralsight (account manager o assistenza business) e chiedi di attivare l'**AI MCP** per il tuo piano.",
        "Se il piano è stato creato prima del 7 ottobre 2026 serve un'adesione esplicita (opt-in); per i piani più recenti ricevi comunque i materiali dal referente.",
        "Ricevi i **materiali di setup**: contengono l'indirizzo del server MCP e il metodo di accesso. Conservali: servono a ogni persona del team.",
        "L'amministratore abilita la funzione per tutto il piano.",
        "Ogni utente collega l'MCP nel proprio strumento IA e accede sia a Pluralsight sia allo strumento IA della tua azienda."
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** l'indirizzo del server non è pubblicato online: arriva solo con i materiali di Pluralsight. Diffida di guide che ne indicano uno \"universale\"."
    },
    {
      "type": "h2",
      "heading": "3. Collegalo a Claude Code (e cosa sapere su Codex)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/04-slide-04.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Claude Code è tra gli strumenti supportati ufficialmente. I comandi qui sotto seguono la documentazione ufficiale di Claude Code: sostituisci **<PLURALSIGHT_MCP_URL>** con l'indirizzo che trovi nei materiali di Pluralsight."
    },
    {
      "type": "h3",
      "heading": "Claude Code, passo dopo passo",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Apri il terminale nella cartella del progetto (o ovunque, se lo aggiungi per il tuo utente).",
        "Aggiungi il server MCP di Pluralsight con il comando qui sotto.",
        "Avvia Claude Code e digita **/mcp** per fare l'accesso a Pluralsight (se il server usa il login via browser).",
        "Controlla che risulti \"Connected\" con **claude mcp list**.",
        "Fai la prima richiesta in italiano (trovi i prompt al capitolo 4)."
      ]
    },
    {
      "type": "code",
      "content": "claude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --scope user\nclaude mcp list\n# se i materiali ti danno un token invece del login:\nclaude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --header \"Authorization: Bearer <TOKEN>\""
    },
    {
      "type": "h3",
      "heading": "E con Codex?",
      "content": "Al momento OpenAI Codex **non compare** nella lista ufficiale degli strumenti supportati. Puoi provare a collegarlo con i comandi standard di Codex, ma il requisito \"strumento collegato al piano aziendale\" potrebbe bloccarlo. Se non funziona, usa Claude Code o ChatGPT Enterprise, che sono supportati."
    },
    {
      "type": "code",
      "content": "codex mcp add pluralsight --url <PLURALSIGHT_MCP_URL>\ncodex mcp login pluralsight\ncodex mcp list\n# oppure nel file ~/.codex/config.toml:\n[mcp_servers.pluralsight]\nurl = \"<PLURALSIGHT_MCP_URL>\""
    },
    {
      "type": "table",
      "headers": [
        "Strumento",
        "Supportato ufficialmente",
        "Come si collega"
      ],
      "rows": [
        [
          "Claude (Chat, Code, Cowork)",
          "Sì",
          "Claude Code: claude mcp add. Chat/Cowork: dall'admin"
        ],
        [
          "Cursor",
          "Sì",
          "Impostazioni MCP di Cursor"
        ],
        [
          "GitHub Copilot / VS Code",
          "Sì",
          "Configurazione MCP di VS Code"
        ],
        [
          "ChatGPT (Enterprise)",
          "Sì",
          "Connettori, attivati dall'admin"
        ],
        [
          "Gemini Enterprise",
          "Sì",
          "Console di amministrazione"
        ],
        [
          "Microsoft Copilot",
          "Sì",
          "Copilot Studio"
        ],
        [
          "OpenAI Codex",
          "Non elencato",
          "codex mcp add (da verificare)"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Sicurezza:** collega solo server MCP di cui ti fidi e non salvare token o password nei file del progetto condivisi con altri. Usa l'opzione --scope user per tenerli solo sul tuo computer."
    },
    {
      "type": "h2",
      "heading": "4. Dall'obiettivo di business al percorso formativo",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/05-slide-05.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Qui sta la vera novità: non scegli più i corsi uno per uno. Dai all'IA un obiettivo di business e lei costruisce un piano con corsi, video brevi, laboratori e test, e lo assegna al team in un canale Pluralsight."
    },
    {
      "type": "table",
      "headers": [
        "Se vuoi ottenere…",
        "Cosa chiedere all'IA",
        "Cosa controllare"
      ],
      "rows": [
        [
          "Meno errori nel codice",
          "Un piano su test, code review e debug",
          "Bug in produzione e revisioni rifiutate"
        ],
        [
          "Onboarding più veloce",
          "Un percorso per i nuovi assunti sul tuo stack",
          "Giorni al primo rilascio autonomo"
        ],
        [
          "Più sicurezza",
          "Formazione su sicurezza applicativa",
          "Vulnerabilità trovate nei controlli"
        ],
        [
          "Migrazione al cloud",
          "Percorso e certificazioni cloud",
          "Competenze verificate (Skill IQ Verified)"
        ]
      ]
    },
    {
      "type": "code",
      "content": "Il nostro obiettivo è ridurre i bug nel servizio pagamenti. Analizza il repository e crea un piano di formazione Pluralsight per il mio team, con corsi, laboratori e un test finale. Proponi la durata in settimane."
    },
    {
      "type": "paragraph",
      "content": "Parte da un risultato di business concreto e ti dà un piano già ordinato da approvare."
    },
    {
      "type": "code",
      "content": "Cosa dovrebbe studiare dopo il mio team su Pluralsight? Metti corsi, laboratori e valutazioni in un canale e assegnalo al team [NOME TEAM]."
    },
    {
      "type": "paragraph",
      "content": "Ti evita di cercare i contenuti a mano e lascia tutto tracciato in un canale."
    },
    {
      "type": "code",
      "content": "Trasforma gli errori emersi negli ultimi test e nelle ultime code review in un percorso Pluralsight mirato, una sezione per ogni tipo di errore."
    },
    {
      "type": "paragraph",
      "content": "Collega la formazione ai problemi reali del tuo codice, non a corsi generici."
    },
    {
      "type": "callout",
      "content": "**Nota:** questi prompt sono esempi costruiti sugli scenari descritti da Pluralsight. Adattali con il nome del team, il periodo e l'obiettivo."
    },
    {
      "type": "h2",
      "heading": "5. Misura se la formazione rende davvero",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/06-slide-06.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "È il punto che rende questo strumento interessante per un imprenditore: non conti più i corsi completati, ma guardi se il lavoro è migliorato. Attenzione però: le analisi di Pluralsight misurano studio e competenze; **ticket e tempi di sviluppo arrivano da Jira, GitHub o GitLab**, che devi collegare alla stessa IA."
    },
    {
      "type": "table",
      "headers": [
        "Metrica",
        "Da dove arriva",
        "Cosa guardare"
      ],
      "rows": [
        [
          "Ore di studio e di pratica",
          "Analytics Pluralsight",
          "Costanza nel tempo, non i picchi"
        ],
        [
          "Avanzamento del percorso",
          "Analytics Pluralsight (pesato sulla durata)",
          "Chi è fermo e da quanto"
        ],
        [
          "Competenze certificate",
          "Skill IQ Verified",
          "Superato / non superato rispetto alla soglia esperta"
        ],
        [
          "Tempo di chiusura dei ticket",
          "Jira (MCP collegato)",
          "Prima e dopo la formazione"
        ],
        [
          "Commit e revisioni",
          "GitHub o GitLab (MCP collegato)",
          "Revisioni rifiutate e tempi di merge"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Skill IQ: i tre livelli",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Discovery**: test di circa 15 minuti per capire il livello di partenza (ripetibile ogni 14 giorni).",
        "**Prep**: esami di prova per le certificazioni, con tentativi illimitati.",
        "**Verified**: superato / non superato rispetto a una soglia definita da esperti; è il dato più utile per dimostrare un miglioramento."
      ]
    },
    {
      "type": "code",
      "content": "Usando Jira e GitLab, confronta il tempo medio di chiusura dei ticket e i commit del team [NOME TEAM] nei 60 giorni prima e nei 60 giorni dopo la formazione Pluralsight. Scrivi un report di una pagina con i numeri e 3 conclusioni."
    },
    {
      "type": "paragraph",
      "content": "È il report che puoi portare in riunione per decidere se continuare a investire."
    },
    {
      "type": "callout",
      "content": "**Regola pratica:** fotografa i numeri prima di iniziare la formazione. Senza un \"prima\", qualunque \"dopo\" è un'opinione."
    },
    {
      "type": "h2",
      "heading": "6. Routine mensile per il manager",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Settimana 1: scegli un obiettivo per team e salva i numeri di partenza.",
        "Settimana 1: chiedi all'IA il piano formativo e assegnalo in un canale.",
        "Settimana 2: controlla chi è fermo e chiedi all'IA un riepilogo per persona.",
        "Settimana 3: fai fare il test Skill IQ a chi ha finito una parte del percorso.",
        "Settimana 4: chiedi il report prima/dopo con Jira o GitLab e decidi: continuare, cambiare o fermarsi."
      ]
    },
    {
      "type": "h3",
      "heading": "Limiti e sicurezza da conoscere",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "c'è un limite giornaliero di richieste per utente, oltre ai limiti del tuo strumento IA;",
        "il comunicato parla di accesso in sola lettura, ma la guida ufficiale indica che l'MCP può anche creare canali e assegnare team: controlla sempre prima di confermare;",
        "le raccomandazioni dell'IA vanno verificate da una persona;",
        "l'uso dei dati è regolato dai termini IA e dall'informativa privacy di Pluralsight (link in apertura)."
      ]
    },
    {
      "type": "h2",
      "heading": "7. Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/07-slide-07.webp",
      "alt": "Guida pratica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "L'AI MCP riduce molto il tempo per pianificare e misurare la formazione. Ma il valore arriva solo se l'obiettivo è chiaro, i dati di partenza sono affidabili e gli strumenti (Pluralsight, Jira, GitHub, la tua IA) sono collegati bene."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "non hai tempo di configurare MCP e strumenti IA per tutto il team;",
        "vuoi collegare Jira o GitHub per misurare l'impatto reale;",
        "devi presentare alla direzione un report sul ritorno della formazione;",
        "vuoi usare l'IA anche per automatizzare altri processi aziendali."
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
        "Setup degli MCP e degli strumenti IA aziendali",
        "Collegamento di Jira, GitHub e GitLab",
        "Report di impatto della formazione",
        "Formazione pratica del team sull'uso dell'IA",
        "Automazioni su misura per la tua azienda"
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp, dimmi quante persone ha il tuo team e quale risultato vuoi migliorare: ti indico il primo passo da fare."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Pluralsight_AI_MCP.pdf](/guide/pluralsight-ai-mcp.pdf)"
    }
  ]
}

export default post
