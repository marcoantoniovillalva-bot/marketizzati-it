import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "montare-video-con-claude-code",
  "title": "Montare i video con Claude Code",
  "description": "I 5 strumenti gratuiti, passo a passo su Windows",
  "date": "2026-11-09",
  "readTime": 7,
  "category": "Risorse gratuite",
  "keywords": [
    "Montare i video con Claude Code",
    "I 5 strumenti gratuiti",
    "passo a passo su Windows",
    "Montare i video",
    "i video con",
    "video con Claude"
  ],
  "image": "/images/blog/covers/montare-video-con-claude-code-wide.webp",
  "imageTall": "/images/blog/covers/montare-video-con-claude-code-tall.webp",
  "imageAlt": "Montare i video con Claude Code: i 5 strumenti gratuiti, passo a passo su Windows",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/montare-video-con-claude-code/01-slide-01.webp", "alt": "Montare i video con Claude Code: i 5 strumenti gratuiti, passo a passo su Windows" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Nel video ti ho mostrato i cinque strumenti gratuiti con cui Claude Code monta i miei reel. **Come si monta un video con Claude Code?** Claude Code fa da regista: legge il copione e i file, decide tagli, sottotitoli e grafiche, e fa lavorare cinque programmi gratuiti: **Whisper** (trascrizione), **Silero VAD** (pause), **OpenCV e RVM** (volto e sfondo), **Remotion** (grafiche) e **FFmpeg** (taglio, audio, esportazione). Comandi e prezzi controllati sulle pagine ufficiali il 9 novembre 2026."
    },
    {
      "type": "list",
      "items": [
        "Cosa ti serve e quanto costa (solo Claude Code è a pagamento).",
        "I comandi per installare ogni strumento su Windows.",
        "A cosa serve ogni strumento, con il comando che uso io.",
        "Il file CLAUDE.md e il primo prompt per far montare il video a Claude."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** **non devi imparare a usare i cinque programmi.** Li installi una volta, poi chiedi a Claude Code cosa vuoi ottenere: è lui che scrive ed esegue i comandi. Tu controlli il risultato."
    },
    {
      "type": "cta",
      "heading": "Vuoi la pipeline già pronta?",
      "content": "**Se vuoi risparmiare tempo, scrivici.** Installiamo e configuriamo la pipeline sul tuo computer e la adattiamo al tuo stile di video."
    },
    {
      "type": "h3",
      "heading": "Link ufficiali",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code — installazione e requisiti](https://code.claude.com/docs/en/setup)",
        "[Claude — piani e prezzi](https://claude.com/pricing)",
        "[faster-whisper (Whisper veloce, licenza MIT)](https://github.com/SYSTRAN/faster-whisper)",
        "[OpenAI Whisper (il modello originale)](https://github.com/openai/whisper)",
        "[Silero VAD (licenza MIT)](https://github.com/snakers4/silero-vad)",
        "[RobustVideoMatting — RVM (licenza GPL-3.0)](https://github.com/PeterL1n/RobustVideoMatting)",
        "[OpenCV](https://opencv.org/)",
        "[Remotion e la sua licenza](https://www.remotion.dev/docs/license)",
        "[FFmpeg](https://ffmpeg.org/)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Come funziona",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/02-slide-02.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Claude Code è il **regista**: gli dai il video grezzo, il copione e le tue regole di stile, lui prepara il piano e chiama gli strumenti. Whisper scrive ogni parola con il suo tempo esatto; Silero trova le pause da togliere; OpenCV segue la faccia e RVM separa la persona dallo sfondo; Remotion disegna sottotitoli, titoli e animazioni; FFmpeg taglia, sistema l’audio ed esporta il file per Instagram e TikTok."
    },
    {
      "type": "h2",
      "heading": "2. Cosa ti serve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/03-slide-03.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Un PC con **Windows 10 (versione 1809 o successiva) o Windows 11** e almeno 4 GB di RAM (per i video ne servono di più: 16 GB vanno bene). I cinque strumenti sono gratuiti; serve solo un abbonamento a Claude."
    },
    {
      "type": "table",
      "headers": [
        "Cosa",
        "Costo",
        "Comando su Windows (PowerShell)"
      ],
      "rows": [
        [
          "**Claude Pro** (include Claude Code)",
          "18 € al mese + IVA, oppure 15 € al mese + IVA con l’annuale",
          "abbonamento su claude.com/pricing"
        ],
        [
          "**Python 3.12**",
          "gratis",
          "winget install -e --id Python.Python.3.12"
        ],
        [
          "**Node.js LTS** (per Remotion)",
          "gratis",
          "winget install -e --id OpenJS.NodeJS.LTS"
        ],
        [
          "**Git per Windows** (consigliato)",
          "gratis",
          "winget install -e --id Git.Git"
        ],
        [
          "**FFmpeg**",
          "gratis",
          "winget install -e --id Gyan.FFmpeg"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** il piano gratuito di Claude **non include** Claude Code: servono Pro, Max o un piano Team/Enterprise. Nel video dico «almeno 20 euro al mese»: oggi il Pro costa 18 € al mese più IVA (circa 22 € con l’IVA al 22%)."
    },
    {
      "type": "h2",
      "heading": "3. Installa Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/04-slide-04.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Apri **PowerShell** (il prompt inizia con PS C:\\) e incolla il comando ufficiale. Non serve aprirlo come amministratore."
    },
    {
      "type": "code",
      "content": "irm https://claude.ai/install.ps1 | iex\nclaude --version\nclaude"
    },
    {
      "type": "paragraph",
      "content": "Al primo avvio **claude** apre il browser per l’accesso con il tuo account. In alternativa: **winget install Anthropic.ClaudeCode**. Crea una cartella per i video (per esempio C:\\video-editor), aprila nel terminale e lancia claude da lì."
    },
    {
      "type": "h2",
      "heading": "4. Whisper: ogni parola con il suo tempo",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/05-slide-05.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Io uso **faster-whisper**, una versione più veloce di Whisper che gira bene anche senza scheda video. Crea un ambiente Python nella cartella del progetto e installalo:"
    },
    {
      "type": "code",
      "content": "py -3.12 -m venv .venv\n.venv\\Scripts\\activate\npip install faster-whisper"
    },
    {
      "type": "paragraph",
      "content": "Con **word_timestamps** ottieni l’inizio e la fine di ogni parola: da qui nascono i sottotitoli e i tagli al secondo esatto. Il modello **large-v3** è il più preciso in italiano (pesa circa 3 GB, si scarica da solo la prima volta)."
    },
    {
      "type": "code",
      "content": "from faster_whisper import WhisperModel\nmodel = WhisperModel(\"large-v3\", device=\"cpu\", compute_type=\"int8\")\nsegments, _ = model.transcribe(\"video.mp4\", language=\"it\", word_timestamps=True)\nfor s in segments:\n    for w in s.words:\n        print(f\"{w.start:.2f} {w.end:.2f} {w.word}\")"
    },
    {
      "type": "h2",
      "heading": "5. Silero VAD: via le pause",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/06-slide-06.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**Cos’è Silero VAD?** È un rilevatore di voce: per ogni pezzo di audio dice se stai parlando o no. Con questi tempi Claude taglia le pause inutili. Nel video 16 ha tolto 3,4 secondi di pause su 73."
    },
    {
      "type": "code",
      "content": "pip install silero-vad"
    },
    {
      "type": "code",
      "content": "from silero_vad import load_silero_vad, read_audio, get_speech_timestamps\nmodel = load_silero_vad()\nwav = read_audio(\"voce.wav\")\nprint(get_speech_timestamps(wav, model, return_seconds=True))"
    },
    {
      "type": "callout",
      "content": "**Importante:** fai tagliare solo le pause più lunghe di un paio di decimi di secondo e lascia un po’ d’aria prima e dopo ogni frase, altrimenti il parlato sembra «mangiato». E fai allineare i tagli ai fotogrammi (30 al secondo), così l’audio non va fuori sincrono."
    },
    {
      "type": "h2",
      "heading": "6. Volto e sfondo: OpenCV e RVM",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/07-slide-07.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**OpenCV** trova la faccia in ogni fotogramma: serve per mettere i sottotitoli all’altezza giusta e per gli zoom. **RVM (Robust Video Matting)** separa la persona dallo sfondo, fotogramma per fotogramma: così puoi cambiare sfondo, metterlo in bianco e nero o scrivere un testo dietro di te. Su Mac lo stesso lavoro lo fa **Apple Vision**, già incluso nel sistema."
    },
    {
      "type": "code",
      "content": "pip install opencv-python onnxruntime numpy"
    },
    {
      "type": "paragraph",
      "content": "Il modello di RVM si scarica dalla pagina Releases del progetto su GitHub: io uso **rvm_mobilenetv3_fp32.onnx**, che gira sul processore senza scheda video. RVM ha licenza **GPL-3.0**: puoi usarlo per i tuoi video; se lo includi in un software che distribuisci, valgono gli obblighi della GPL."
    },
    {
      "type": "h2",
      "heading": "7. Remotion: sottotitoli, titoli e animazioni",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/08-slide-08.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Remotion crea video con il codice (React): ogni scritta, sottotitolo o animazione è un componente che Claude scrive per te. Crea il progetto con:"
    },
    {
      "type": "code",
      "content": "npx create-video@latest\nnpm run dev"
    },
    {
      "type": "callout",
      "content": "**Licenza:** Remotion è gratuito per **le persone singole**, per **le aziende fino a 3 dipendenti** e per le organizzazioni non profit. Sopra i 3 dipendenti serve la **Company License** (remotion.dev/docs/license)."
    },
    {
      "type": "h2",
      "heading": "8. FFmpeg: taglio, audio ed esportazione",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/09-slide-09.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "FFmpeg è il coltellino svizzero del video: taglia, unisce, abbassa la musica sotto la voce e comprime il file. Per Instagram e TikTok io esporto in **verticale 1080 × 1920**, 30 fotogrammi al secondo, H.264 e audio AAC, con la voce intorno a **-14 LUFS** (il volume a cui le piattaforme normalizzano)."
    },
    {
      "type": "code",
      "content": "ffmpeg -i montato.mp4 -vf \"scale=1080:1920\" -r 30 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:a aac -b:a 256k -ar 48000 -movflags +faststart reel.mp4"
    },
    {
      "type": "h2",
      "heading": "9. Il file CLAUDE.md e il primo prompt",
      "content": "Nella cartella del progetto crea un file **CLAUDE.md**: Claude lo legge a ogni sessione. Scrivici le tue regole di stile, così non le ripeti ogni volta. Un esempio da adattare:"
    },
    {
      "type": "code",
      "content": "# Regole per i miei reel\n- Formato 9:16, 1080x1920, 30 fps.\n- Trascrizione con faster-whisper large-v3, lingua italiana.\n- Taglia le pause con Silero VAD (solo oltre 0,2 s, tagli sui fotogrammi).\n- Sottotitoli grandi, 2-4 parole, una parola chiave evidenziata nel mio colore.\n- Grafiche con Remotion: poche parole, icone e loghi veri.\n- Musica sempre almeno 15 dB sotto la voce.\n- Export finale con FFmpeg a -14 LUFS."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Nella cartella video-grezzi c’è il mio reel. Trascrivilo con faster-whisper, togli le pause con Silero, aggiungi i sottotitoli con Remotion seguendo il CLAUDE.md ed esportalo con FFmpeg per Instagram. Prima di renderizzare mostrami il piano dei tagli e 5 fotogrammi di prova."
    },
    {
      "type": "paragraph",
      "content": "chiedere il piano e i fotogrammi prima del render ti fa correggere gli errori quando costano poco."
    },
    {
      "type": "h2",
      "heading": "Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/10-slide-10.webp",
      "alt": "Montare i video con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Parti da un video corto e da una sola cosa alla volta (prima i sottotitoli, poi i tagli, poi le grafiche). Tieni il grezzo originale, controlla sempre l’anteprima e scrivi nel CLAUDE.md ogni correzione che fai: il video dopo verrà meglio. Se preferisci partire da una pipeline già funzionante, possiamo installarla e adattarla al tuo stile."
    },
    {
      "type": "cta",
      "heading": "Vuoi un confronto sul tuo caso?",
      "content": "**Se vuoi che ti aiutiamo, scrivici.** Raccontaci che video fai e con che computer: ti diciamo come impostare la pipeline."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_Montare_Video_Claude_Code.pdf](/guide/montare-video-con-claude-code.pdf)"
    }
  ]
}

export default post
