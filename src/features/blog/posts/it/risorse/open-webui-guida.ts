import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "open-webui-guida",
  "title": "Guida pratica Open WebUI",
  "description": "Installa Open WebUI in mezz'ora: modelli, team e funzionalità",
  "date": "2026-11-03",
  "readTime": 6,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Guida pratica Open WebUI",
    "Installa Open WebUI in mezz'ora",
    "modelli",
    "team e funzionalità",
    "Guida pratica Open",
    "pratica Open WebUI"
  ],
  "image": "/images/blog/covers/open-webui-guida-wide.webp",
  "imageTall": "/images/blog/covers/open-webui-guida-tall.webp",
  "imageAlt": "Open WebUI in mezz'ora — la chat IA della tua azienda, sul tuo computer o sul tuo server",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/open-webui-guida/01-slide-01.webp", "alt": "Open WebUI in mezz'ora — la chat IA della tua azienda, sul tuo computer o sul tuo server" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Nel video ti ho promesso la guida per installare **Open WebUI** in mezz’ora e scoprire le sue funzionalità. **Cos’è Open WebUI?** È un’interfaccia di chat per l’intelligenza artificiale, molto simile a ChatGPT, che installi tu: sul tuo computer o sul server della tua azienda. Ci colleghi i modelli che vuoi (anche quelli locali e gratuiti) e ogni persona del team entra con il proprio account. Istruzioni controllate sulla documentazione ufficiale e su un’installazione reale il 3 novembre 2026."
    },
    {
      "type": "list",
      "items": [
        "Installare Open WebUI con Docker (consigliato) o con Python.",
        "Collegare un modello locale e gratuito con Ollama, oppure i modelli a pagamento con la chiave API.",
        "Creare gli account del team, i ruoli e i gruppi.",
        "Usare documenti, ricerca web, voce, immagini e assistenti personalizzati.",
        "Capire costi e limiti prima di sostituire gli abbonamenti."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** i dati restano davvero da te **solo se il modello gira su un computer o un server che controlli** (per esempio con Ollama). Se colleghi un modello a pagamento via API, i messaggi passano dal fornitore del modello e paghi in base al consumo."
    },
    {
      "type": "cta",
      "heading": "Vuoi che la installiamo noi per il tuo team?",
      "content": "**Se vuoi risparmiare tempo, scrivici.** Installiamo Open WebUI sul tuo server, colleghiamo i modelli e creiamo gli account del team."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Open WebUI su GitHub (codice, istruzioni, licenza)](https://github.com/open-webui/open-webui)",
        "[Documentazione — Quick Start](https://docs.openwebui.com/getting-started/quick-start/)",
        "[Elenco delle funzionalità](https://docs.openwebui.com/features/)",
        "[Docker Desktop](https://www.docker.com/products/docker-desktop/)",
        "[Ollama (modelli locali)](https://ollama.com)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cos’è e perché conviene",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/02-slide-02.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Open WebUI è uno dei progetti più seguiti su GitHub: **157.600 stelle** a novembre 2026. Il codice è pubblico e gratuito da installare; dal 2025 usa una licenza propria (la **Open WebUI License**, basata sulla BSD-3) che vieta di togliere il marchio Open WebUI se più di 50 persone lo usano in 30 giorni, salvo licenza enterprise. Per un’azienda il vantaggio è avere **una sola chat per tutti**, con i modelli che scegli tu e gli account gestiti da un amministratore."
    },
    {
      "type": "h2",
      "heading": "2. Installa in 30 minuti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/03-slide-03.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Funziona su Windows, macOS e Linux. La strada consigliata dalla documentazione è **Docker**: un solo comando scarica e avvia tutto."
    },
    {
      "type": "h3",
      "heading": "Opzione A — Docker (consigliata)",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Installa **Docker Desktop** dal sito ufficiale e avvialo (su Windows scegli il motore WSL 2).",
        "Genera una chiave segreta e tienila da parte: serve a non far uscire tutti a ogni aggiornamento. Su Mac/Linux il comando è **openssl rand -hex 32**; in alternativa va bene una frase lunga e casuale.",
        "Apri il terminale e lancia il comando qui sotto, mettendo la tua chiave al posto di **la-tua-chiave**.",
        "Apri il browser su **http://localhost:3000**.",
        "Crea il primo account: **il primo utente registrato diventa amministratore**."
      ]
    },
    {
      "type": "code",
      "content": "docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data -e WEBUI_SECRET_KEY=la-tua-chiave --name open-webui --restart always ghcr.io/open-webui/open-webui:main"
    },
    {
      "type": "callout",
      "content": "**Importante:** la parte **-v open-webui:/app/backend/data** salva chat, utenti e impostazioni in un volume che sopravvive agli aggiornamenti. Non toglierla. Se usi solo modelli via API puoi scegliere l’immagine **:slim** (circa 197 MB invece di 1,6 GB)."
    },
    {
      "type": "h3",
      "heading": "Opzione B — Python",
      "content": "Serve **Python 3.11 o 3.12** (la 3.13 non è ancora supportata). Poi bastano due comandi; l’interfaccia si apre su **http://localhost:8080**."
    },
    {
      "type": "code",
      "content": "pip install open-webui\nopen-webui serve"
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Sono su [Windows 11 / Mac / server Linux] e voglio installare Open WebUI con Docker seguendo la documentazione ufficiale. Guidami un passo alla volta: aspetta che ti dica com’è andato ogni passaggio prima di darmi il successivo, e se compare un errore spiegami cosa significa."
    },
    {
      "type": "paragraph",
      "content": "se non hai mai usato il terminale, Claude o ChatGPT ti accompagnano nell’installazione senza saltare passaggi."
    },
    {
      "type": "h2",
      "heading": "3. Collega i modelli",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/04-slide-04.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Open WebUI non contiene un modello: lo colleghi tu. Puoi usarne più di uno e cambiarlo anche a metà conversazione."
    },
    {
      "type": "list",
      "items": [
        "**Locale e gratuito:** installa **Ollama** da ollama.com e scarica un modello, per esempio con **ollama pull gemma3**. Open WebUI prova a collegarsi a Ollama da solo; con Docker l’indirizzo è **http://host.docker.internal:11434**.",
        "**A pagamento via API:** vai in **Pannello di amministrazione → Impostazioni → Connessioni**, premi **+** accanto alle connessioni OpenAI e inserisci l’indirizzo (per OpenAI **https://api.openai.com/v1**) e la tua chiave API. Funzionano anche Claude di Anthropic e gli altri fornitori compatibili (Mistral, Groq, DeepSeek…).",
        "Torna alla chat, apri **Seleziona modello** in alto e scegli quello da usare."
      ]
    },
    {
      "type": "table",
      "headers": [
        "",
        "Modello locale (Ollama)",
        "Modello a pagamento (API)"
      ],
      "rows": [
        [
          "Costo",
          "Gratis, ma serve un computer adatto",
          "Paghi il consumo al fornitore"
        ],
        [
          "Dati",
          "Restano sul tuo computer o server",
          "Passano dal fornitore del modello"
        ],
        [
          "Qualità",
          "Buona per testi e riassunti; dipende dal modello e dall’hardware",
          "I modelli più potenti"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "4. Il tuo team con i propri account",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/05-slide-05.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Ogni persona entra con il proprio account e vede solo le proprie chat. L’amministratore decide chi può usare quali modelli."
    },
    {
      "type": "list",
      "items": [
        "Apri il menu del tuo profilo e scegli **Pannello di amministrazione → Utenti → Aggiungi utente**: nome, email, password e ruolo (**Utente** o **Amministratore**).",
        "In alternativa attiva la registrazione: i nuovi account restano **in attesa** finché l’amministratore non li approva.",
        "Nella scheda **Gruppi** crea i reparti (per esempio Vendite, Amministrazione) e assegna a ogni gruppo i modelli e i permessi.",
        "Per le aziende più strutturate Open WebUI supporta l’accesso con gli account aziendali tramite **SSO / OIDC / LDAP** (per esempio Microsoft o Google)."
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** con molti utenti contemporanei conviene installarlo su un server (anche in cloud) invece che sul computer di una persona, e fare un **backup del volume dati** a intervalli regolari."
    },
    {
      "type": "h2",
      "heading": "5. Le funzionalità da provare",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/06-slide-06.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Dopo la chat, queste sono le funzioni che fanno risparmiare più tempo in azienda:"
    },
    {
      "type": "table",
      "headers": [
        "Funzionalità",
        "Cosa fa",
        "Dove la trovi"
      ],
      "rows": [
        [
          "Conoscenza (documenti)",
          "Carichi PDF, listini, procedure: l’IA risponde citando i tuoi file.",
          "Spazio di lavoro → Conoscenza"
        ],
        [
          "Assistenti personalizzati",
          "Un modello con istruzioni, documenti e strumenti fissi (es. «Risposte clienti»).",
          "Spazio di lavoro → Modelli"
        ],
        [
          "Ricerca web",
          "L’IA cerca online e cita le fonti.",
          "Impostazioni amministratore"
        ],
        [
          "Voce e immagini",
          "Dettatura, lettura ad alta voce, generazione di immagini.",
          "Impostazioni amministratore"
        ],
        [
          "Due modelli a confronto",
          "Stessa domanda a due modelli, risposte affiancate.",
          "Seleziona modello → +"
        ],
        [
          "Strumenti e MCP",
          "Colleghi servizi esterni e automazioni.",
          "Spazio di lavoro → Strumenti"
        ]
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Sei l’assistente dell’ufficio clienti di [nome azienda]. Rispondi solo usando i documenti della conoscenza «Listino e procedure». Se l’informazione non c’è, dillo e suggerisci di contattare [referente]. Tono cordiale, frasi brevi, niente prezzi inventati."
    },
    {
      "type": "paragraph",
      "content": "incollalo come istruzioni di sistema quando crei un assistente in Spazio di lavoro → Modelli."
    },
    {
      "type": "h2",
      "heading": "6. Costi e limiti, prima di disdire gli abbonamenti",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/07-slide-07.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "list",
      "items": [
        "**Modelli a pagamento:** non paghi più un abbonamento per persona, ma paghi il consumo via API. Imposta un limite di spesa sul sito del fornitore.",
        "**Dati:** con un modello via API i messaggi passano dal fornitore. Per i documenti riservati usa un modello locale.",
        "**Installazione e manutenzione:** qualcuno deve installarlo, aggiornarlo e fare i backup.",
        "**Hardware:** i modelli locali grandi chiedono molta memoria e una buona scheda video; quelli piccoli girano anche su un portatile recente, ma sono meno precisi."
      ]
    },
    {
      "type": "h2",
      "heading": "Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/08-slide-08.webp",
      "alt": "Guida pratica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Parti in piccolo: installalo sul tuo computer, collega un modello locale e prova con 2-3 colleghi per una settimana. Poi decidi se spostarlo su un server e quali modelli a pagamento servono davvero. Possiamo aiutarti con l’installazione, gli account del team e gli assistenti personalizzati sui tuoi documenti."
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "**Se vuoi che te la installiamo noi, scrivici.** Raccontaci quante persone siete e cosa usate oggi: ti diciamo se conviene e quanto costa."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Open_WebUI.pdf](/guide/open-webui-guida.pdf)"
    }
  ]
}

export default post
