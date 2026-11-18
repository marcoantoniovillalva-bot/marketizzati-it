import type { BlogPost } from '../../../types'

const post: BlogPost = {
  "slug": "70-ganci-virali",
  "title": "Guida pratica 70 ganci virali",
  "description": "Scarica, installa e usa la skill hook-virali su Claude",
  "date": "2026-11-02",
  "readTime": 5,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guida pratica 70 ganci virali",
    "Scarica",
    "installa e usa la skill hook-virali su Claude",
    "Guida pratica 70",
    "pratica 70 ganci",
    "70 ganci virali"
  ],
  "image": "/images/blog/covers/70-ganci-virali-wide.webp",
  "imageTall": "/images/blog/covers/70-ganci-virali-tall.webp",
  "imageAlt": "70 ganci virali — scarica la skill, installala su Claude e scrivi i ganci dei tuoi video",
  "sections": [
    { "type": "image", "url": "/images/blog/risorse/70-ganci-virali/01-slide-01.webp", "alt": "70 ganci virali — scarica la skill, installala su Claude e scrivi i ganci dei tuoi video" },
    {
      "type": "h2",
      "heading": "Prima di iniziare: cosa troverai",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Nel video ti ho promesso la **skill con 70 strutture di ganci**, prese da reel che hanno funzionato. Una skill è un file di istruzioni che Claude legge quando gli chiedi un gancio: invece di partire da zero, usa le strutture, le adatta al tuo argomento e ti propone 5 versioni da dire ad alta voce. **La guida e la skill sono gratuite.** Istruzioni controllate sulle pagine ufficiali di Claude il 2 novembre 2026."
    },
    {
      "type": "list",
      "items": [
        "Scarica la skill: un file .md per Claude Code, uno .zip per Claude sul sito o nell’app.",
        "Installala in pochi minuti seguendo il passo a passo.",
        "Usala con i prompt pronti e scegli il gancio che suona come te."
      ]
    },
    {
      "type": "callout",
      "content": "**Regola chiave:** un gancio forte ferma lo scroll, ma **non garantisce le visualizzazioni**. Il video deve mantenere quello che il gancio promette, già dalla frase successiva."
    },
    {
      "type": "cta",
      "heading": "Vuoi i copioni pronti ogni settimana?",
      "content": "**Se vuoi che te lo facciamo noi, scrivici.** Prepariamo ganci, copioni e montaggio partendo dalla tua attività."
    },
    {
      "type": "h2",
      "heading": "1. Scarica la skill",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/02-slide-02.webp",
      "alt": "Guida pratica 70 ganci virali"
    },
    {
      "type": "paragraph",
      "content": "È la stessa skill, in due formati. Scegli quello che corrisponde a dove usi Claude:"
    },
    {
      "type": "list",
      "items": [
        "[hook-virali.zip — per Claude sul sito o nell’app](https://drive.google.com/file/d/1_RW-TlK1YFkAYZTfumxJBQ72uTBLAmSd/view?usp=sharing)",
        "[SKILL_Hook_Virali.md — per Claude Code](https://drive.google.com/file/d/1924c5ulcqIHS2V2FSqHhdxJyKRFzwV-C/view?usp=sharing)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Dentro trovi 70 formule divise in 7 famiglie (risultato e tutorial, liste, problemi, domande, esperienza personale, sorpresa, tempo e strumenti), i reel di riferimento e le regole per non promettere cose che il video non mantiene."
    },
    {
      "type": "h2",
      "heading": "2. Installa su Claude (sito o app)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/03-slide-03.webp",
      "alt": "Guida pratica 70 ganci virali"
    },
    {
      "type": "paragraph",
      "content": "È la strada più semplice. Le skill sono disponibili anche sul piano gratuito, ma serve l’esecuzione del codice attiva."
    },
    {
      "type": "list",
      "items": [
        "Scarica **hook-virali.zip** dal link qui sopra. **Non aprirlo e non estrarlo**: si carica così com’è.",
        "Su claude.ai (o nell’app) vai in **Impostazioni → Funzionalità** (in inglese Settings → Capabilities) e attiva l’esecuzione del codice (**Code execution and file creation**).",
        "Apri **Personalizza → Skill** (Customize → Skills), premi **+**, poi **Crea skill → Carica una skill** (Create skill → Upload a skill) e scegli il file ZIP.",
        "Controlla che **hook-virali** compaia nell’elenco e che l’interruttore sia acceso.",
        "Apri una nuova chat e scrivi: «Usa la skill hook-virali per scrivere 5 ganci per…»."
      ]
    },
    {
      "type": "callout",
      "content": "**Se non trovi il menu:** Anthropic aggiorna spesso l’interfaccia e i nomi possono cambiare un po’. Cerca la voce **Skill** nelle impostazioni o nel menu Personalizza. Su Team ed Enterprise le skill le abilita prima l’amministratore."
    },
    {
      "type": "h2",
      "heading": "3. Installa in Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/04-slide-04.webp",
      "alt": "Guida pratica 70 ganci virali"
    },
    {
      "type": "paragraph",
      "content": "Se lavori già con Claude Code sul computer, la skill è un file da mettere nella cartella giusta. Non serve riavviare: Claude Code vede le skill nuove da solo."
    },
    {
      "type": "list",
      "items": [
        "Scarica **SKILL_Hook_Virali.md** e rinominalo **SKILL.md**.",
        "Per usarla in un solo progetto, mettilo in **.claude/skills/hook-virali/SKILL.md** dentro la cartella del progetto. Per averla in tutti i progetti, mettilo in **~/.claude/skills/hook-virali/SKILL.md** nella tua cartella utente.",
        "Scrivi **/hook-virali** seguito dalla richiesta, oppure chiedi semplicemente un gancio: Claude la usa da solo quando la richiesta corrisponde.",
        "Se hai creato la cartella skills per la prima volta mentre Claude Code era già aperto, scrivi **/reload-skills**."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Installa come skill di progetto il file SKILL_Hook_Virali.md che trovi nella cartella Download: crea .claude/skills/hook-virali/SKILL.md, non modificare il contenuto e poi mostrami che la skill hook-virali è disponibile."
    },
    {
      "type": "paragraph",
      "content": "se non vuoi spostare file a mano, lo fa Claude Code al posto tuo."
    },
    {
      "type": "h2",
      "heading": "4. Come usarla",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/05-slide-05.webp",
      "alt": "Guida pratica 70 ganci virali"
    },
    {
      "type": "paragraph",
      "content": "Più dettagli concreti dai, più il gancio suona tuo. Indica sempre **di cosa parla il video, a chi è rivolto e cosa ottiene chi guarda**."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Usa la skill hook-virali. Il video parla di [argomento] ed è per [pubblico, per esempio titolari di piccole attività]. Chi guarda impara a [risultato concreto]. Scrivimi 5 ganci di tipo diverso, da dire in meno di 3 secondi, con parole semplici. Per ognuno indica il tipo e perché può funzionare. Non inventare numeri o risultati."
    },
    {
      "type": "paragraph",
      "content": "dai a Claude pubblico e promessa: sono le due cose che rendono un gancio specifico."
    },
    {
      "type": "table",
      "headers": [
        "Tipo",
        "Quando usarlo",
        "Esempio dal video"
      ],
      "rows": [
        [
          "Tutorial",
          "Prometti un risultato chiaro, con tempo e metodo.",
          "«Ecco come preparare i contenuti di tutta la settimana in un’ora con l’IA.»"
        ],
        [
          "Lista",
          "Chi guarda vuole sapere se fa anche lui quegli errori.",
          "«Cinque abbonamenti che stai pagando senza usarli.»"
        ],
        [
          "Storia",
          "Un problema in cui il pubblico si riconosce, poi la soluzione.",
          "«Volevo pubblicare ogni giorno, ma perdevo un’ora solo per trovare un’idea.»"
        ],
        [
          "Domanda",
          "Vuoi far pensare o commentare.",
          "«Se potessi trovare i primi clienti online senza migliaia di follower, ci proveresti?»"
        ],
        [
          "Esperienza",
          "Una storia vera crea fiducia.",
          "«Quando ho iniziato a vendere online, pensavo bastasse pubblicare. Mi sbagliavo.»"
        ]
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Ecco il copione del mio prossimo video: [incolla il copione]. Con la skill hook-virali dimmi se il gancio iniziale funziona, cosa cambieresti e proponimi 3 alternative che restino fedeli a quello che il video mostra davvero."
    },
    {
      "type": "paragraph",
      "content": "la skill serve anche per controllare un gancio che hai già scritto."
    },
    {
      "type": "callout",
      "content": "**Prima di registrare:** leggi il gancio ad alta voce. Se ti inciampi o non lo diresti a un cliente, riscrivilo con parole tue. Nessun numero inventato: se dici «70», devono essere 70."
    },
    {
      "type": "h2",
      "heading": "Best practice e supporto Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/06-slide-06.webp",
      "alt": "Guida pratica 70 ganci virali"
    },
    {
      "type": "paragraph",
      "content": "Prova la skill per una settimana: un gancio al giorno, cinque tipi diversi, come nel video. Poi guarda nelle statistiche quale video ha tenuto le persone più a lungo e quale è stato condiviso o salvato di più, e riparti da quel tipo. Possiamo aiutarti a preparare il piano dei contenuti, i copioni e il montaggio."
    },
    {
      "type": "cta",
      "heading": "Vuoi un piano editoriale per la tua attività?",
      "content": "**Se vuoi che te lo facciamo noi, scrivici.** Raccontaci cosa vendi e a chi: prepariamo insieme ganci e copioni per le prossime settimane."
    },
    {
      "type": "callout",
      "content": "**Scarica la guida in PDF:** [Guida_Marketizzati_70_Ganci_Virali.pdf](/guide/70-ganci-virali.pdf)"
    }
  ]
}

export default post
