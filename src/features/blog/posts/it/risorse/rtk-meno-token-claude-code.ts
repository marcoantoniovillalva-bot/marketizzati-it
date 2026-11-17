import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "rtk-meno-token-claude-code",
  "title": "RTK: meno token sprecati con Claude Code",
  "description": "Guida TOKEN: installazione Windows, misure, cinque casi d'uso e quattro prompt. Controllata il 10 novembre 2026.",
  "date": "2026-11-10",
  "readTime": 9,
  "category": "Risorse gratuite",
  "keywords": [
    "RTK",
    "meno token sprecati con Claude Code",
    "Guida TOKEN",
    "installazione Windows",
    "misure",
    "cinque casi d'uso e quattro prompt"
  ],
  "image": "/images/blog/covers/rtk-meno-token-claude-code-wide.webp",
  "imageTall": "/images/blog/covers/rtk-meno-token-claude-code-tall.webp",
  "imageAlt": "RTK: meno token sprecati con Claude Code — guida gratuita TOKEN",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/rtk-meno-token-claude-code/01-slide-01.webp", "alt": "RTK: meno token sprecati con Claude Code — guida gratuita TOKEN" },
    {
      "type": "h2",
      "heading": "1. Cos'è RTK e cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/02-slide-02.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "intro",
      "content": "**RTK significa Rust Token Killer.** Nel reel dico «RTX», ma il nome corretto è RTK. Riduce il testo dei comandi prima che Claude Code lo legga. Qui trovi installazione, cinque casi d'uso e quattro prompt pronti. Fonti ufficiali controllate il **10 novembre 2026**."
    },
    {
      "type": "cta",
      "heading": "Vuoi configurarlo sul tuo progetto?",
      "content": "Scrivici su WhatsApp con la parola **TOKEN**. Ti aiutiamo a verificare la configurazione e a misurare il risultato sul tuo lavoro."
    },
    {
      "type": "paragraph",
      "content": "Immagina un test che stampa 500 righe di successi e pochi errori. È l'esempio del quick start ufficiale: RTK conserva i fallimenti e riassume i test superati. Claude Code limita già gli output troppo lunghi, ma il testo che legge occupa comunque contesto e utilizzo. Con API incide sui token fatturati. Con un abbonamento consuma i limiti del piano."
    },
    {
      "type": "list",
      "items": [
        "**Claude Code già funzionante**, con un account abilitato o accesso API. Il piano gratuito di Claude non basta.",
        "**Windows e PowerShell**, con winget disponibile. Per Claude Code: Windows 10 1809 o successivo e almeno 4 GB di RAM, secondo Anthropic.",
        "Un progetto e i suoi strumenti già presenti: RTK non installa al posto tuo Git, Python o il programma che deve filtrare.",
        "Per il filtro automatico standard serve verificare il tool **Bash**. Git for Windows fornisce Git Bash. Il tool PowerShell distinto è **da verificare**."
      ]
    },
    {
      "type": "callout",
      "content": "**Costo e licenza:** la CLI è gratuita. Hook e filtri sono Apache-2.0. L'edizione completa include anche un motore BUSL-1.1, con condizioni proprie. Esiste un'edizione solo Apache-2.0. Le due edizioni usano lo stesso nome rtk: scegline una. Il costo di Claude Code resta separato."
    },
    {
      "type": "h2",
      "heading": "2. Installa RTK su Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/03-slide-03.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Apri **PowerShell**. Prima controlla se RTK è già presente. Questi due comandi devono mostrare la versione e il riepilogo dei risparmi, anche se ancora senza dati. Se funzionano, passa alla sezione 3."
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "Se manca, usa il comando Windows riportato nella documentazione ufficiale. Serve winget già disponibile:"
    },
    {
      "type": "code",
      "content": "winget install rtk-ai.rtk"
    },
    {
      "type": "paragraph",
      "content": "Dopo l'installazione, riapri il terminale e ripeti il controllo:"
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "callout",
      "content": "**Nome simile:** esiste anche Rust Type Kit. Non usare il generico comando cargo install rtk. Se la versione compare ma gain non è riconosciuto, controlla il pacchetto e il percorso prima di continuare."
    },
    {
      "type": "paragraph",
      "content": "**Se winget non è disponibile:** dalle release ufficiali scarica rtk-x86_64-pc-windows-msvc.zip. Estrai rtk.exe e mettilo in una cartella del PATH, cioè tra i percorsi in cui il terminale cerca i programmi. Per altre architetture il pacchetto Windows adatto è **da verificare**. Non aprire l'eseguibile con doppio clic."
    },
    {
      "type": "paragraph",
      "content": "Alcuni filtri richiedono **ripgrep**, il comando rg, nel PATH. Se compare l'avviso che manca, la documentazione Windows indica:"
    },
    {
      "type": "code",
      "content": "winget install BurntSushi.ripgrep.MSVC"
    },
    {
      "type": "paragraph",
      "content": "**Mac/Linux:** il README indica il comando seguente se Homebrew è già presente. La guida ufficiale offre anche lo script per Linux, Mac e WSL."
    },
    {
      "type": "code",
      "content": "brew install rtk"
    },
    {
      "type": "list",
      "items": [
        "[Installazione ufficiale e alternative](https://www.rtk-ai.app/docs/getting-started/installation/)",
        "[Release ufficiali](https://github.com/rtk-ai/rtk/releases)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Collegalo a Claude Code e controlla i limiti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/04-slide-04.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Il collegamento automatico usa un **hook**: una regola che interviene prima del comando. Per esempio trasforma git status in rtk git status. Prima puoi vedere le modifiche previste. Poi applichi la configurazione globale:"
    },
    {
      "type": "code",
      "content": "rtk init --global --dry-run\nrtk init --global"
    },
    {
      "type": "paragraph",
      "content": "Il primo comando non scrive nulla. Il secondo registra l'hook in **~/.claude/settings.json** e vale per tutti i progetti dell'utente. Segui le richieste mostrate dall'installer. Per questa guida basta il filtro dei comandi: lascia disattivati il proxy e le pipeline opzionali. **Chiudi e riapri Claude Code.**"
    },
    {
      "type": "callout",
      "content": "**Attenzione a init:** rtk init senza --global aggiunge istruzioni a CLAUDE.md e un modello di filtri nel progetto. Nelle versioni attuali non installa l'hook automatico. Per quello serve --global, abbreviabile in -g."
    },
    {
      "type": "list",
      "items": [
        "In Claude Code apri /hooks e controlla l'hook PreToolUse di RTK.",
        "Chiedi a Claude di eseguire git status. Controlla se usa il tool Bash o il tool PowerShell.",
        "Nel terminale guarda la cronologia qui sotto. Cerca una nuova esecuzione filtrata. Se manca, l'automatismo non è verificato."
      ]
    },
    {
      "type": "code",
      "content": "rtk gain --history"
    },
    {
      "type": "paragraph",
      "content": "**Windows è supportato.** Dalla v0.37.2 RTK usa un hook nativo. Ma il filtro standard di Claude Code intercetta il tool **Bash**: avviare Claude da PowerShell non garantisce che usi Bash. L'intercettazione del tool **PowerShell è da verificare**. Puoi provare esplicitamente un comando RTK supportato:"
    },
    {
      "type": "code",
      "content": "rtk git status"
    },
    {
      "type": "paragraph",
      "content": "Read, Grep e Glob integrati non passano dal filtro Bash. L'edizione completa ha opzioni aggiuntive, ma non sono necessarie per iniziare. Un comando senza filtro può arrivare invariato. Se perdi un dettaglio utile, chiedi l'output completo con rtk bypass seguito dal comando."
    },
    {
      "type": "h2",
      "heading": "4. Misura il prima e dopo con rtk gain",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/05-slide-05.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Parti da un confronto piccolo. In un repository Git, senza cambiare file tra le due prove, confronta lo stesso stato con e senza filtro. Prima annota i contatori. Poi esegui i passaggi qui sotto. bypass mostra l'output completo e registra la prova con risparmio zero."
    },
    {
      "type": "code",
      "content": "rtk gain\nrtk bypass git status\nrtk git status\nrtk gain --history\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "Nella cronologia confronta le due esecuzioni. Nel riepilogo guarda la differenza rispetto ai contatori iniziali. La percentuale cumulativa comprende anche la prova bypass: non è la percentuale del solo filtro. Le statistiche sono condivise tra progetti e sessioni sulla macchina. Durante la prova evita altri comandi RTK."
    },
    {
      "type": "h3",
      "heading": "Come leggere i numeri",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Voce",
        "Significato"
      ],
      "rows": [
        [
          "Input",
          "Token stimati dell'output originale."
        ],
        [
          "Output",
          "Token stimati dopo il filtro."
        ],
        [
          "Saved",
          "Differenza tra Input e Output."
        ],
        [
          "Save%",
          "Riduzione dei byte dell'output, non della fattura."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Esempio illustrativo del quick start ufficiale. **Non è una misurazione del tuo progetto:**"
    },
    {
      "type": "code",
      "content": "Total commands : 10\nInput tokens   : 50,000\nOutput tokens  : 5,000\nSaved          : 45,000  (90.0%)"
    },
    {
      "type": "callout",
      "content": "**Token stimati:** RTK usa byte / 4. Non conta i token esatti del modello. Il progetto pubblicizza 60–90% sui comandi comuni e fino al 90% di output in meno. La tua percentuale va misurata. Un output più corto del 90% non rende l'intera sessione più economica del 90%."
    },
    {
      "type": "paragraph",
      "content": "Per continuare: misura una giornata di lavoro comparabile e controlla gli errori conservati. Per l'effetto sui costi guarda anche l'utilizzo di Claude. Non confrontare due installazioni consecutive: la seconda può stampare meno perché i pacchetti sono già presenti. Non azzerare lo storico per questa prova."
    },
    {
      "type": "h2",
      "heading": "5. Cinque casi d'uso concreti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/06-slide-06.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Scegli il caso che esiste nel tuo progetto. I comandi qui sotto sono esempi separati: non devi eseguirli tutti. Servono gli strumenti del relativo progetto. Dopo ogni prova controlla il risultato e la cronologia dei risparmi."
    },
    {
      "type": "h3",
      "heading": "Test: trova subito il fallimento",
      "content": "In un progetto Rust, riassumi i test superati e concentrati sui fallimenti. RTK supporta anche test JavaScript, pytest e Go: verifica il comando del tuo progetto."
    },
    {
      "type": "code",
      "content": "rtk cargo test"
    },
    {
      "type": "h3",
      "heading": "Build: leggi errori e avvisi",
      "content": "Sempre in un progetto Rust, riduci il rumore della compilazione. Se manca un dettaglio diagnostico, ripeti con bypass."
    },
    {
      "type": "code",
      "content": "rtk cargo build"
    },
    {
      "type": "h3",
      "heading": "Git log e diff: rivedi le modifiche",
      "content": "Leggi una cronologia compatta e un diff con meno contesto. Prima di approvare una modifica delicata, torna al diff completo se serve."
    },
    {
      "type": "code",
      "content": "rtk git log\nrtk git diff"
    },
    {
      "type": "h3",
      "heading": "Pacchetti: togli le barre di avanzamento",
      "content": "In un progetto Node.js, installa le dipendenze dichiarate dal progetto. Il filtro npm riduce il rumore, ma può togliere anche avvisi: per diagnosticare un'installazione controlla l'output completo."
    },
    {
      "type": "code",
      "content": "rtk npm install"
    },
    {
      "type": "h3",
      "heading": "Log lunghi: raggruppa le ripetizioni",
      "content": "Con Docker già presente, **rtk docker logs nome-container** riassume le ripetizioni delle ultime 100 righe dei log (sostituisci nome-container con un container esistente). Se manca la sequenza precisa dell'errore, usa bypass."
    },
    {
      "type": "h2",
      "heading": "6. Quattro prompt pronti e CLAUDE.md",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/07-slide-07.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Incolla un prompt alla volta in Claude Code, dalla cartella del progetto. Sono modelli da adattare. **Quando li usi, Claude può eseguire comandi e modificare la configurazione.** Qui sono solo testi pronti da copiare."
    },
    {
      "type": "code",
      "label": "PROMPT 1 — CONFIGURAZIONE",
      "content": "Installa e configura RTK per questo progetto usando solo la documentazione ufficiale di rtk-ai/rtk. Prima controlla rtk --version e rtk gain. Su Windows usa winget install rtk-ai.rtk se manca. Mostrami rtk init --global --dry-run e spiega che l'hook vale per tutti i progetti. Configura solo il filtro base. Verifica quale tool shell usi e controlla rtk gain --history. Segnala PowerShell come da verificare se non viene intercettato."
    },
    {
      "type": "code",
      "label": "PROMPT 2 — TEST",
      "content": "Trova il comando dei test di questo progetto. Verifica se RTK lo supporta. Eseguilo con il filtro e riportami fallimenti, messaggi ed esito finale. Se mancano dettagli, usa rtk bypass sullo stesso comando. Non modificare il codice in questa prima diagnosi."
    },
    {
      "type": "code",
      "label": "PROMPT 3 — REVISIONE GIT",
      "content": "Usa rtk git log e rtk git diff per spiegarmi le modifiche locali. Se il contesto del diff non basta, recupera l'output completo con rtk bypass git diff. Indica file, problemi e punti da controllare. Non creare commit."
    },
    {
      "type": "code",
      "label": "PROMPT 4 — MISURAZIONE",
      "content": "Annota rtk gain. Confronta rtk bypass git status e rtk git status senza modificare file tra le prove. Leggi rtk gain --history e il riepilogo finale. Separa contatori cumulativi e singoli comandi. Spiega token stimati, percentuale di output e limiti della misura. Non promettere un risparmio in euro e non azzerare lo storico."
    },
    {
      "type": "h3",
      "heading": "Una riga per CLAUDE.md",
      "content": "Aggiungi questa regola al CLAUDE.md esistente senza cancellare le altre istruzioni. È un promemoria editoriale, non sostituisce l'hook:"
    },
    {
      "type": "code",
      "content": "- Usa RTK per i comandi supportati; se mancano dettagli usa rtk bypass, controlla rtk gain e verifica l'hook quando usi PowerShell."
    },
    {
      "type": "h3",
      "heading": "Parti da un comando, poi misura",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/08-slide-08.webp",
      "alt": "RTK: meno token sprecati con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Prova prima un comando semplice. Controlla che il filtro conservi ciò che ti serve. Poi estendi l'uso a test, build e log del tuo progetto. **Più corto deve restare utile.** Se non lo è, recupera l'output completo. La compatibilità effettiva sul tuo PC resta da verificare."
    },
    {
      "type": "cta",
      "heading": "Vuoi aiuto con Claude Code?",
      "content": "Scrivici su WhatsApp con **TOKEN**. Raccontaci che progetto usi e dove perdi tempo. Ti aiutiamo a configurare RTK, verificare i comandi e leggere i risultati."
    },
    {
      "type": "h3",
      "heading": "Fonti ufficiali — controllo del 10 novembre 2026",
      "content": "Comandi e limiti: [installazione RTK](https://www.rtk-ai.app/docs/getting-started/installation/), [quick start](https://www.rtk-ai.app/docs/getting-started/quick-start/), [comandi supportati](https://www.rtk-ai.app/docs/resources/what-rtk-covers/). Misure: [rtk gain](https://www.rtk-ai.app/docs/analytics/gain/) e [significato dei risparmi](https://www.rtk-ai.app/docs/resources/savings-explained/). Licenze: [edizioni RTK](https://www.rtk-ai.app/docs/resources/editions/)."
    },
    {
      "type": "paragraph",
      "content": "Controlli sul codice: [hook RTK](https://github.com/rtk-ai/rtk/blob/master/src/hooks/constants.rs), [npm](https://github.com/rtk-ai/rtk/blob/master/src/cmds/js/npm_cmd.rs), [log Docker](https://github.com/rtk-ai/rtk/blob/master/src/cmds/cloud/container.rs). Per Claude Code: [hook PowerShell](https://code.claude.com/docs/en/hooks#windows-powershell-tool), [setup](https://code.claude.com/docs/en/setup), [output dei comandi](https://code.claude.com/docs/en/tools-reference#output-limits) e [costi](https://code.claude.com/docs/en/costs). Repository: [rtk-ai/rtk](https://github.com/rtk-ai/rtk)."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_RTK_Meno_Token.pdf](/guide/rtk-meno-token-claude-code.pdf)"
    }
  ]
}

export default post
