import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "voicestudio-doppiaggio-open-source",
  "title": "VoiceStudio, lo studio di doppiaggio open source sul tuo computer",
  "description": "La guida promessa nel video: link al repository ufficiale di VoiceStudio, requisiti, installazione passo passo su Windows, Mac e Linux, prima voce…",
  "date": "2026-10-27",
  "readTime": 11,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guida pratica",
    "VoiceStudio",
    "lo studio di doppiaggio open source sul tuo computer",
    "La guida promessa nel video",
    "link al repository ufficiale di VoiceStudio",
    "requisiti"
  ],
  "image": "/images/blog/covers/voicestudio-doppiaggio-open-source-wide.webp",
  "imageTall": "/images/blog/covers/voicestudio-doppiaggio-open-source-tall.webp",
  "videoPreview": "/videos/preview/voicestudio-doppiaggio-open-source.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7701699199821253920",
  "imageAlt": "VoiceStudio, l'alternativa open source e locale a ElevenLabs: link, requisiti, installazione, licenze e casi d'uso",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/01-slide-01.webp", "alt": "VoiceStudio, l'alternativa open source e locale a ElevenLabs: link, requisiti, installazione, licenze e casi d'uso" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai in questa guida",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Nel video ti ho parlato di **VoiceStudio**, il progetto open source che in questi giorni è tra i più seguiti su GitHub: clona una voce, doppia video, trascrive audio, crea audiolibri e si collega agli agenti IA, **tutto sul tuo computer**. Qui trovi quello che ti ho promesso, cioè il link al repository, i requisiti e la guida di installazione, più le cose che nel video non c'era il tempo di dire: costi, licenze e come usarlo davvero in azienda. Tutte le informazioni sono verificate sulle pagine ufficiali il 27 ottobre 2026."
    },
    {
      "type": "h3",
      "heading": "In questa guida impari a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "capire cosa fa VoiceStudio e quando può sostituire un abbonamento come ElevenLabs;",
        "verificare in 2 minuti se il tuo computer è adatto (8 GB di RAM, 10 GB di spazio);",
        "installarlo su Windows, Mac o Linux e creare la prima voce;",
        "collegarlo a Claude Code, Codex o Cursor con API e MCP;",
        "conoscere le licenze, perché l'app è gratuita ma il modello vocale predefinito non è per uso commerciale;",
        "risolvere da solo i problemi più comuni."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** **l'app è gratis anche per lavoro, i modelli vocali hanno licenze proprie.** Il modello predefinito (OmniVoice) ha una licenza **non commerciale** (CC-BY-NC). Provalo pure liberamente; prima di pubblicare contenuti per la tua azienda scegli un modello con licenza adatta o fatti consigliare. E clona solo voci di persone che ti hanno dato il consenso."
    },
    {
      "type": "cta",
      "heading": "Vuoi una voce aziendale sotto il tuo controllo?",
      "content": "Se vuoi usare VoiceStudio per corsi, video o agenti vocali senza perdere ore tra installazione, modelli e licenze, scrivimi su WhatsApp: guardiamo insieme da dove partire."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali (quello promesso nel video è il primo)",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Repository GitHub di VoiceStudio (debpalash/VoiceStudio)](https://github.com/debpalash/VoiceStudio)",
        "[Download: ultima versione (Windows, Mac, Linux, Android)](https://github.com/debpalash/VoiceStudio/releases/latest)",
        "[Sito ufficiale e requisiti hardware](https://voicestudio.sh/download)",
        "[Guida di installazione per Windows](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/windows.md)",
        "[Guida di installazione per macOS](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/macos.md)",
        "[Guida di installazione per Linux](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/linux.md)",
        "[Risoluzione dei problemi](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/troubleshooting.md)",
        "[Collegare gli agenti con MCP](https://voicestudio.sh/docs/mcp)",
        "[Licenza in parole semplici](https://voicestudio.sh/license)",
        "[Modello predefinito OmniVoice e la sua licenza (Hugging Face)](https://huggingface.co/k2-fsa/OmniVoice)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cos'è VoiceStudio e cosa può fare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/02-slide-02.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "**Cos'è VoiceStudio?** È un'app desktop **open source** (licenza AGPL-3.0) che funziona interamente sul tuo computer e si presenta come alternativa locale a ElevenLabs. È creata da Palash Debnath, si chiamava prima **OmniVoice Studio** e il 27 ottobre 2026 ha circa **90.000 stelle su GitHub**, con la versione **0.5.7** uscita il giorno prima. Non serve un account e non c'è un contatore di utilizzo: va online solo quando scarichi un modello o un aggiornamento."
    },
    {
      "type": "table",
      "headers": [
        "Funzione",
        "Cosa fa",
        "Esempio in azienda"
      ],
      "rows": [
        [
          "**Clonazione della voce**",
          "copia una voce da una breve registrazione pulita (secondo il sito di solito bastano 3 secondi)",
          "la tua voce per le lezioni di un corso"
        ],
        [
          "**Voice design**",
          "crea una voce nuova da una descrizione: genere, età, accento, tono",
          "una voce di marca per i video"
        ],
        [
          "**Doppiaggio video**",
          "trascrive, traduce e ri-doppia, ogni persona con la sua voce e i tempi originali; esporta anche i sottotitoli",
          "lo stesso video in inglese o spagnolo"
        ],
        [
          "**Dettatura e trascrizione**",
          "dall'audio al testo, anche con un widget per dettare",
          "verbali di riunioni, testi dai vocali"
        ],
        [
          "**Audiolibri e storie**",
          "lunghi testi letti a capitoli, con lavori in coda",
          "un ebook trasformato in audio"
        ],
        [
          "**API e MCP**",
          "API locale compatibile OpenAI e server MCP per gli agenti IA",
          "Claude Code che genera l'audio da solo"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** il progetto dichiara **646 lingue**, italiano compreso. La qualità finale dipende dal modello scelto e dal tuo computer: fai sempre una prova con i tuoi testi prima di decidere."
    },
    {
      "type": "h2",
      "heading": "2. Requisiti: cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/03-slide-03.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Nel video ho detto \"minimo 8 GB di RAM\": è proprio il controllo che l'app fa all'installazione. Il sito consiglia però **16 GB o più** per lavorare comodi, soprattutto con i doppiaggi. La scheda video (GPU) non è obbligatoria: senza, l'app funziona sul processore, solo più lentamente."
    },
    {
      "type": "table",
      "headers": [
        "Requisito",
        "Dettaglio",
        "Note"
      ],
      "rows": [
        [
          "**Memoria (RAM)**",
          "8 GB minimo, 16 GB o più consigliati",
          "con 8 GB i lavori lunghi possono bloccarsi"
        ],
        [
          "**Spazio su disco**",
          "circa 10 GB liberi per app, ambiente Python e modelli",
          "senza GPU NVIDIA bastano circa 5 GB"
        ],
        [
          "**Windows**",
          "Windows 10 o 11 a 64 bit (x64)",
          "Windows su ARM: sperimentale"
        ],
        [
          "**Mac**",
          "Apple Silicon (M1-M5) con macOS 13.3 o successivo",
          "**Mac Intel: non supportati** per il motore locale"
        ],
        [
          "**Linux**",
          "x86_64 (AppImage, .deb, Snap) oppure Docker",
          "AppImage richiede glibc 2.39 o successivo"
        ],
        [
          "**GPU (facoltativa)**",
          "NVIDIA con CUDA su Windows e Linux; Metal automatico sui Mac Apple Silicon",
          "4 GB di memoria video bastano per iniziare"
        ],
        [
          "**Programmi extra**",
          "nessuno: Python, FFmpeg e modelli li scarica l'app al primo avvio",
          "serve una connessione per i download iniziali"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "3. Installazione passo passo",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/04-slide-04.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Il modo più semplice è scaricare l'installer dalla pagina **Releases** di GitHub (nessun account, nessun pagamento). L'ultima versione verificata è la **0.5.7 del 26 ottobre 2026**: su Windows il file si chiama **VoiceStudio-0.5.7-win-x64.exe** (circa 222 MB), sul Mac **VoiceStudio-0.5.7-mac-arm64.dmg** (circa 281 MB)."
    },
    {
      "type": "list",
      "items": [
        "**Scarica** l'installer adatto al tuo sistema da [github.com/debpalash/VoiceStudio/releases/latest](https://github.com/debpalash/VoiceStudio/releases/latest). Scarica solo da qui o da voicestudio.sh, mai da siti copia.",
        "**Installa.** Su Windows apri il file .exe: installa per il tuo utente, senza diritti di amministratore. Sul Mac apri il .dmg e trascina l'app in Applicazioni; al primo avvio clic destro → **Apri** per confermare.",
        "**Primo avvio.** La procedura guidata controlla il computer (RAM, disco, scheda video) e scarica Python, FFmpeg e i componenti necessari. Può richiedere diversi minuti: lascia il computer acceso e collegato.",
        "**Modello vocale.** Quando l'app lo chiede, installa il modello. I modelli senza una licenza chiaramente commerciale, incluso quello predefinito, chiedono di **accettare la licenza** una volta nel Catalogo modelli.",
        "**Controllo finale.** In **Settings → About → Run self-check** l'app verifica da sola dispositivo, FFmpeg, spazio su disco, RAM e motori installati."
      ]
    },
    {
      "type": "code",
      "content": "# In alternativa, installazione con un comando\n# Windows (PowerShell, non come amministratore):\nirm https://voicestudio.sh/install.ps1 | iex\n# macOS (Apple Silicon) e Linux (Terminale):\ncurl -fsSL https://voicestudio.sh/install | sh\n# Server o computer con Docker (interfaccia web su http://localhost:3900):\ndocker run -d --pull always --name omnivoice -p 127.0.0.1:3900:3900 -v omnivoice-data:/app/omnivoice_data palashdeb/omnivoice-studio:latest"
    },
    {
      "type": "code",
      "label": "PROMPT · Fallo installare al tuo agente IA (Claude Code, Codex, Cursor)",
      "content": "Install the VoiceStudio Electron app on this device and verify it works, following https://github.com/debpalash/VoiceStudio/blob/main/docs/install/agent.md"
    },
    {
      "type": "paragraph",
      "content": "è il prompt ufficiale del README: l'agente controlla il tuo hardware, ti chiede il permesso prima di scaricare un modello (con dimensione e licenza) e alla fine genera una prova audio. Puoi aggiungere \"rispondimi in italiano\"."
    },
    {
      "type": "h2",
      "heading": "4. La prima voce in 5 minuti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/05-slide-05.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Apri **Voice cloning**, scegli una voce di esempio oppure aggiungi una registrazione pulita della voce da copiare, scrivi il testo e premi genera. Se manca il modello, l'app ti propone di installarlo. In alternativa usa **Voice design**: descrivi la voce a parole (per esempio \"voce femminile, adulta, tono caldo e calmo\") e VoiceStudio la crea senza registrazioni."
    },
    {
      "type": "list",
      "items": [
        "**Registrazione di riferimento:** stanza silenziosa, niente musica, una sola persona che parla, buon microfono. Meglio pochi secondi puliti che un minuto rumoroso.",
        "**Consenso:** clona solo la tua voce o quella di chi ti ha dato il permesso scritto. Impersonare qualcuno è vietato dalle regole d'uso del progetto (e dalla legge).",
        "**Prova prima di pubblicare:** ascolta nomi propri, numeri e parole straniere; se serve correggi la pronuncia nel testo."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Collegarlo agli agenti IA con API e MCP",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/06-slide-06.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "**Cos'è l'MCP?** Il Model Context Protocol è lo standard con cui un agente IA come Claude Code usa strumenti esterni. Quando VoiceStudio è aperto, il suo server MCP è già attivo all'indirizzo **http://localhost:3900/mcp/** (con la barra finale), senza chiavi. Dagli agenti puoi generare parlato, clonare o progettare una voce, trascrivere e vedere le voci disponibili. Per i programmatori c'è anche un'**API locale compatibile con OpenAI** sulla porta 3900."
    },
    {
      "type": "code",
      "content": "# Claude Code: aggiunge VoiceStudio come server MCP (con l'app VoiceStudio aperta)\nclaude mcp add --transport http voicestudio http://localhost:3900/mcp/"
    },
    {
      "type": "code",
      "label": "PROMPT · Audio da un testo, direttamente dall'agente",
      "content": "Usa VoiceStudio per leggere questo testo con la voce [nome del profilo] e salva l'audio nella cartella del progetto: [incolla il testo]"
    },
    {
      "type": "paragraph",
      "content": "l'agente usa lo strumento generate_speech di VoiceStudio: niente copia-incolla tra programmi, e l'audio non lascia il tuo computer."
    },
    {
      "type": "callout",
      "content": "**Importante:** il server MCP **non ha password**: non esporlo mai su internet. Per usarlo da un altro computer della rete c'è **Settings → Sharing → Local network** con un PIN, solo su reti fidate. Il comando claude mcp add sopra segue la sintassi standard di Claude Code; in alternativa l'app esporta configurazioni pronte nella sezione **Integrations** (Claude Code, Cursor, Codex CLI)."
    },
    {
      "type": "h2",
      "heading": "6. Come usarlo nella tua azienda",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/07-slide-07.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Il vantaggio vero, come dico nel video, è avere \"uno studio di doppiaggio dentro l'azienda\": audio, trascrizioni e impronte vocali restano sul tuo computer e non vengono caricati su un servizio esterno. Ecco dove può far risparmiare tempo a un imprenditore."
    },
    {
      "type": "table",
      "headers": [
        "Caso d'uso",
        "Come",
        "Attenzione a"
      ],
      "rows": [
        [
          "**Corsi e formazione**",
          "registri pochi secondi della tua voce e generi le lezioni dal testo",
          "licenza del modello se il corso è a pagamento"
        ],
        [
          "**Video per i social**",
          "voce fuori campo per reel e tutorial, anche in più versioni",
          "rileggi sempre pronuncia e ritmo"
        ],
        [
          "**Mercati esteri**",
          "doppiaggio dello stesso video in altre lingue, con sottotitoli",
          "fai controllare la traduzione a un madrelingua"
        ],
        [
          "**Agenti vocali e assistenti**",
          "voce e trascrizione locali collegate al tuo agente via API o MCP",
          "i dati dei clienti restano in casa: un vantaggio per la privacy"
        ],
        [
          "**Riunioni e note vocali**",
          "trascrizione di audio e vocali in testo da archiviare",
          "informa i partecipanti che registri"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "7. Quanto costa: VoiceStudio o ElevenLabs?",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/08-slide-08.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Nel video dico \"potenzialmente meno costi ricorrenti\": il potenzialmente è importante. VoiceStudio open source costa **0 $**, ma paghi in hardware, tempo di configurazione e, per alcuni usi, licenze. Prezzi rilevati a ottobre 2026 sulle pagine ufficiali, in dollari, imposte escluse."
    },
    {
      "type": "table",
      "headers": [
        "Opzione",
        "Prezzo",
        "Cosa include"
      ],
      "rows": [
        [
          "**VoiceStudio open source**",
          "0 $",
          "tutte le funzioni dell'app, uso anche al lavoro; gira sul tuo computer"
        ],
        [
          "**VoiceStudio Pro**",
          "99 $ per utente/anno, oppure 299 $ una tantum (Lifetime)",
          "build chiusa con licenza commerciale \"da mostrare al cliente\", 3 dispositivi, funzioni in anteprima; non copre le licenze dei modelli"
        ],
        [
          "**ElevenLabs Free**",
          "0 $ (10.000 crediti al mese)",
          "nessuna licenza commerciale: obbligo di citare ElevenLabs"
        ],
        [
          "**ElevenLabs Starter**",
          "6 $ al mese",
          "licenza commerciale, clonazione istantanea, doppiaggio"
        ],
        [
          "**ElevenLabs Creator / Pro**",
          "22 $ / 99 $ al mese",
          "clonazione professionale, più crediti, audio di qualità superiore"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Quando conviene davvero:** se produci **molto audio** (corsi, doppiaggi, molte varianti) o tratti **dati riservati**, una soluzione locale può ripagarsi. Se ti servono pochi minuti al mese, la massima qualità senza pensieri o agenti vocali telefonici già pronti, un servizio cloud come ElevenLabs può restare più comodo. La qualità a confronto va provata sui tuoi testi: non esiste un test ufficiale indipendente in italiano (**da verificare** caso per caso)."
    },
    {
      "type": "h2",
      "heading": "8. Licenze, limiti e problemi comuni",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/09-slide-09.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "**L'app:** licenza AGPL-3.0. Puoi usarla al lavoro e per guadagnare senza fare nulla. Gli obblighi scattano solo se la **distribuisci dentro un tuo prodotto** o se offri ad altri **una versione modificata via internet**: in quel caso devi rendere disponibile il codice. **I modelli:** il predefinito **k2-fsa/OmniVoice** ha il codice Apache 2.0 ma i pesi del modello in licenza **CC-BY-NC (non commerciale)**. Tra i motori alternativi, per esempio **VoxCPM2** dichiara sulla sua scheda una licenza Apache-2.0: controlla sempre la licenza nel Catalogo modelli o sulla pagina [voicestudio.sh/library](https://voicestudio.sh/library) prima dell'uso commerciale. Questa guida non è una consulenza legale."
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
          "**Installazione bloccata su \"System RAM\"**",
          "il computer ha meno di 8 GB utilizzabili",
          "aggiorna all'ultima versione (tollera i 7,8 GB reali dei PC da 8 GB); sotto il minimo meglio cambiare computer"
        ],
        [
          "**Primo avvio lentissimo**",
          "sta scaricando Python e librerie (anche vari GB)",
          "lascia finire; in **Details** vedi da dove scarica e se si è fermato"
        ],
        [
          "**Generazione molto lenta**",
          "nessuna GPU: lavora sul processore",
          "scegli un motore leggero (KittenTTS, Supertonic-3, PocketTTS) e un modello Whisper piccolo"
        ],
        [
          "**Memoria piena dopo tanti lavori**",
          "più modelli caricati insieme",
          "pulsante **Flush** in alto → **Unload all + flush**"
        ],
        [
          "**Disco C: pieno**",
          "i motori aggiuntivi occupano diversi GB",
          "sposta i motori su un altro disco con la variabile OMNIVOICE_ENGINES_DIR (vedi guida Windows)"
        ],
        [
          "**L'agente riceve un errore di licenza**",
          "licenza del modello non ancora accettata",
          "aprila nel Catalogo modelli e accettala una volta"
        ],
        [
          "**Mac: \"l'app è danneggiata\"**",
          "blocco di sicurezza di macOS (Gatekeeper)",
          "segui la sezione Gatekeeper della guida macOS"
        ],
        [
          "**Mac Intel**",
          "non supportato per il motore locale",
          "usalo collegato a un VoiceStudio su un altro computer, o usa Windows/Linux/Mac Apple Silicon"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "9. Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/10-slide-10.webp",
      "alt": "Guida pratica: VoiceStudio, lo studio di doppiaggio open source sul tuo computer"
    },
    {
      "type": "paragraph",
      "content": "Tre abitudini per usare VoiceStudio in azienda senza sorprese: **consenso scritto** per ogni voce clonata, **licenza del modello verificata** prima di pubblicare, **una prova di ascolto** su ogni contenuto prima che arrivi ai clienti. E tieni l'app aggiornata: il progetto rilascia nuove versioni molto spesso."
    },
    {
      "type": "h3",
      "heading": "Quando può servirti un supporto professionale",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "vuoi produrre corsi, video o doppiaggi in serie ma non hai tempo di configurare modelli e computer;",
        "vuoi un agente vocale o un'automazione che usi una voce aziendale tenendo i dati in casa;",
        "non sei sicuro di quali modelli e licenze puoi usare per i tuoi contenuti commerciali."
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
        "Installazione e configurazione di VoiceStudio sui tuoi computer o su un server",
        "Scelta dei modelli e verifica delle licenze per l'uso commerciale",
        "Automazioni e agenti IA collegati alla voce (Claude Code, MCP, API)",
        "Formazione per te e il tuo team"
      ]
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "Scrivimi su WhatsApp e dimmi cosa vuoi fare con la voce (corsi, video, doppiaggi, agenti): ti dico se VoiceStudio fa al caso tuo, su quale computer e con quale modello."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_VoiceStudio.pdf](/guide/voicestudio-doppiaggio-open-source.pdf)"
    }
  ]
}

export default post
