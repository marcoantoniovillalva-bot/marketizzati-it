# Brief: nuovo marketizzati.it con l'offerta "sito per artigiani" acquistabile online

Scritto il 17/11/2026 dalla sessione "Max Installazioni", su istruzioni di Marco.
Dati di questa cartella:
- `volumi-lombardia-2026-11.tsv`: volumi mensili e CPC di Google Ads (Keyword Planner via Apify), Lombardia, lingua italiana.
- `autocomplete-grezzo.json`: 450 suggerimenti di Google Autocomplete.
- `keyword-senza-volume.txt`: le ricerche con meno di 10 al mese.

La lettura per tutta Italia non è stata fatta: l'actor Apify aveva raggiunto il limite giornaliero. Si può ripetere domani con `magenta_waterwheel/keyword-search-volume`, `location: "Italy"`.

---

## 1. Cosa cambia rispetto al piano già concordato

**Resta tutto quello che Marco ha già chiesto in questa sessione:**
- Sito multipagina orientato alla SEO, in tre lingue (IT/ES/EN).
- Servizi.
- Link ai social.
- WhatsApp https://wa.link/psnpym.
- Loghi di partner e clienti, senza recensioni.
- Progetti mostrati con motion graphics realistiche.
  - ProspectBot e Zernflow: "Privato per i clienti".
  - Fonbot / botfon.ai: non devono comparire.
- Blog alimentato dalle risorse su Drive, con immagini in WebP/AVIF.
- Bianco come colore di base, arancio `#F2541B` come accento.

Va **fuso** con quanto segue. Dove c'è un conflitto, vale questo brief.

1. **Niente Blender e niente 3D nel sito.**
   - Il sito deve essere "normale": bello, veloce, responsive, con motion graphics in CSS/SVG. Niente WebGL e niente three.js.
   - Il copy è la cosa più importante.
2. **Il lavoro su Blender e three.js NON va cancellato.**
   - Va spostato nel repo dei motion script (`C:\dev\Clienti\marcoantoniovillalva-bot\motion-script`), così Marco lo riusa per i video verticali a partire dai suoi prompt.
   - Cosa spostare:
     - mascotte, isola e cielo;
     - `src/features/mascot`, `journey`, `studio`;
     - `public/models`, `public/media/journey`;
     - `design-drafts/3d`;
     - la pagina `lab`;
     - gli script di build.
   - Procedura:
     1. Copia i file.
     2. Verifica che nel repo `motion-script` funzionino.
     3. Aggiungi un README su come riusarli per un video verticale.
     4. Solo dopo, togli i file dal bundle del sito.
3. **Prezzi visibili** per l'offerta sito. Prima era "niente prezzi": ora l'offerta sito ha un prezzo pubblico.
   - Gli altri servizi (agenti AI, automazioni, video) restano "su richiesta", salvo diversa decisione di Marco.
4. **Si compra direttamente dal sito**, con un pagamento online (vedi §4).

## 2. L'offerta (dal preventivo fatto a Max Installazioni)

Modello già usato con Max Installazioni, Iguana Blu e altri piccoli artigiani:
- Contratto: `C:\dev\Clienti\marcoantoniovillalva-bot\Max Istallazioni\docs\preventivo\contratto.html`
- PDF: `C:\dev\Clienti\marcoantoniovillalva-bot\Max Istallazioni\docs\preventivo\Contratto Max Installazioni - Marketizzati.pdf`

| Cosa | Prezzo |
|---|---|
| **Paghi subito** | **800 €** una volta, e il sito è tuo |
| **Paghi a rate** | **100 € al mese per 12 mesi** (1.200 €), poi il sito è tuo |
| Hosting (VHosting) | circa 32 €/anno, intestato e pagato dal cliente |
| Pubblicità Google + ChatGPT (facoltativa) | gestione a 50 €/mese per i primi 3 mesi, poi 150 €/mese. Budget pubblicitario da 100 €/mese, pagato direttamente a Google/OpenAI |

**Cosa è incluso** (stesse voci del contratto):
- Logo e identità visiva. Se il cliente ha già un logo, si sistema quello.
- Sito su più pagine, **massimo 9**, testi scritti sulle ricerche reali dei clienti della sua zona.
- Pulsanti chiama, WhatsApp e modulo contatti.
- Indicizzazione su Google e Bing.
- Scheda Google Business Profile: creata, oppure sistemata se esiste già.
- Messa online con HTTPS. Email professionale facoltativa.
- 30 giorni di assistenza.

Se il cliente ha già logo o scheda Google, il prezzo non cambia: vengono sistemati.

**Leve psicologiche, da usare con onestà:**
- **Ancoraggio.** Mostrare il valore di mercato barrato, preso dalla tabella del contratto di Max: sito 2.800 €, logo e manuale 500 €, scheda Google 300 €, cioè **3.600 €**. Accanto, 800 € oppure 100 €/mese.
  - Fonti per il valore di mercato, citabili in pagina:
    - un sito vetrina costa in media 1.000–3.000 € (futuraweb.eu, uretech.it, milowebapp.it);
    - ortica.io indica "da 2.200 €".
- **Risparmio se paghi subito.** "Paghi subito e risparmi 400 €": 800 € contro 1.200 €.
- **Rata piccola.** "Meno di 3,30 € al giorno".
- **Scarsità** solo se è vera, per esempio "prendo N siti al mese". Mai un timer finto.
- **Niente promesse** di contatti o fatturato. Solo metriche oggettive di settore, come nel preventivo di Max.

**Concorrente diretto da tenere d'occhio:** sito-facile.it mostra prezzi pubblici (vetrina 599 € oppure 24,90 €/mese). Bisogna distinguersi:
- fatto da una persona vicina, non con un builder;
- logo e scheda Google inclusi;
- testi scritti sulle ricerche reali;
- il sito diventa del cliente.

## 3. Cosa cercano le persone (Lombardia, novembre 2026)

| Ricerca | Volume/mese | CPC € | Uso |
|---|---:|---:|---|
| google my business / profile | 9.900 / 5.400 | 5,3 | Pagina guida "Scheda Google": molto traffico informativo |
| sito web / sito internet | 1.900 | 8,1 | Generica, solo SEO |
| web agency | 880 | 4,0 | Home e Ads |
| agenzia marketing | 720 | 6,0 | Home |
| **chatgpt ads** | **590** | 5,5 | **+1.344% in un anno**: guida "ChatGPT Ads in Italia" |
| web designer | 590 | 5,3 | Ads (CPC basso) |
| creare sito web | 480 | 13,6 | Chi vuole farlo da solo: non fare Ads |
| realizzazione siti web | 390 | 6,6 | Pagina servizio principale |
| realizzazione siti web milano | 390 | **14,9** | Solo SEO, troppo cara per le Ads |
| web agency milano | 390 | 4,5 | Ads e pagina locale |
| agenzia seo | 320 | 10,6 | SEO |
| creare sito web con ai | 140 | 14,2 | La persona che "prova con ChatGPT e si stufa": contenuto blog |
| sito web professionale | 140 | 8,1 | Pagina servizio |
| **quanto costa un sito web** / **fare un sito web** | 110 + 110 (+ varianti ~100) | **3,3–4,7** | **Pagina prezzi: intento perfetto, CPC basso** |
| preventivo sito web | 70 | 19,9 | Il prezzo pubblico è la risposta. Ads con cautela |
| sito vetrina | 70 | 4,5 | Ads |
| web agency pavia / realizzazione siti web pavia | 30 + 30 | 1,3–3,5 | In crescita (+100% e +150%): pagina locale |
| web agency lodi / crema | 20 / 10 | – | Pagine locali, poca concorrenza |
| pubblicità su chatgpt / chatgpt ads italia | 30 / 20 | 3–4 | Guida ChatGPT Ads |

- Le ricerche "sito web a rate", "in abbonamento" e "per artigiani/idraulico/elettricista" hanno meno di 10 ricerche al mese in Lombardia. Vanno usate nel copy e su ChatGPT, dove contano le domande lunghe. Non vanno usate come keyword di Ads.
- Messaggio chiave: **quasi nessuno nella zona mostra il prezzo, tutti chiedono "chiama per un preventivo".** Il prezzo visibile è il vantaggio competitivo, sia su Google sia su ChatGPT.

## 4. Pagamento online

- **Stripe Checkout**, con due prodotti:
  1. **800 €**, pagamento unico.
  2. **100 €/mese** in abbonamento che **si chiude da solo dopo 12 rate**: subscription schedule con `iterations: 12`, oppure `cancel_at`.
- Prima del pagamento serve una checkbox obbligatoria di accettazione di **Condizioni di vendita** e **privacy**: una pagina `/condizioni-sito-web` con le clausole del contratto di Max.
- Dati di fatturazione: ragione sociale, P.IVA/CF, SDI/PEC. Marketizzati emette fattura con P.IVA 03028360182.
- Webhook Stripe → Supabase:
  - crea il cliente;
  - gli dà accesso al **portale clienti** che esiste già;
  - avvia l'onboarding: modulo con logo, foto, servizi e zona, poi call.
- Accanto al pulsante di pagamento serve sempre un'alternativa: "Preferisci parlarne prima? WhatsApp".
- Chiavi Stripe solo in `.env.local` e lato server. **Mai nel codice o nel bundle client.**

## 5. Pagine proposte (slug dalle keyword)

```
/                                   Home: chi sono e cosa faccio + offerta in evidenza
/realizzazione-siti-web             servizio sito (keyword: realizzazione siti web, sito web professionale)
/quanto-costa-un-sito-web           PAGINA PREZZI e acquisto (800 € / 100 € al mese), tabella, confronto mercato, FAQ
/sito-web-per-artigiani             per mestiere: idraulico, elettricista, serramentista/tapparelle, estetista, ristorante, impresa edile
/scheda-google-business-profile     guida + servizio (volume 9.900)
/pubblicita-google-ads              gestione Ads
/chatgpt-ads                        guida "ChatGPT Ads in Italia: come funziona e quanto costa" + servizio (trend +1.344%)
/agenti-ai-whatsapp  /automazioni  /contenuti-video  /social-media   (servizi già previsti)
/progetti   /chi-sono   /blog   /contatti
/web-agency-milano  /web-agency-lodi  /web-agency-pavia  /web-agency-crema   (pagine locali, testo unico per ognuna)
/condizioni-sito-web  /privacy  /cookie  + 404
```

Ogni pagina ha:
- H1, title e meta description presi dalla keyword;
- schema `ProfessionalService` con `areaServed` (Milano, Lodi, Pavia, Crema);
- schema `Service`, e `Offer`/`PriceSpecification` sulla pagina prezzi;
- schema `FAQPage`;
- breadcrumb.

## 6. Ottimizzazione per ChatGPT (GEO)

L'idea di Marco: chi chiede a ChatGPT "trovami chi mi fa il sito vicino a me, quanto costa?" deve ricevere una risposta con prezzo e condizioni, perché sono scritti sul sito.
- Prezzi e condizioni come **testo HTML** server-rendered: non in immagini, non caricati via JS.
- Una frase-risposta chiara in alto, per esempio: "Un sito per artigiani con Marketizzati costa 800 € in un'unica soluzione oppure 100 € al mese per 12 mesi, logo e scheda Google inclusi."
- FAQ con domande reali prese dall'autocomplete:
  - quanto costa un sito web al mese / all'anno;
  - si può pagare a rate;
  - il sito resta mio;
  - serve il logo;
  - quanto costa l'hosting.
- `robots.txt` deve permettere `OAI-SearchBot`, `GPTBot`, `ChatGPT-User` e `Bingbot`.
- Pubblicare `/llms.txt` con riassunto, offerta e link.
- **Bing Webmaster Tools** con sitemap: la ricerca di ChatGPT si appoggia anche all'indice Bing.
- Nome, indirizzo e telefono coerenti tra sito, Google Business Profile e social.

## 7. Pubblicità (dopo il lancio)

- **Google:**
  - Puntare sulle ricerche di prezzo ("quanto costa un sito web/fare un sito web", CPC 3–5 €), "web agency/web designer vicino a me", Pavia, Lodi, Crema e "sito vetrina".
  - Evitare all'inizio "realizzazione siti web milano" (14,9 €) e "creare sito web" (chi lo vuole fare da solo).
  - Negative: gratis, corso, lavoro, stipendio, fai da te, wix, tutorial, "con ai", wordpress tutorial.
- **ChatGPT Ads:** piccolo budget di prova, da decidere con Marco. È ancora presto e c'è poca concorrenza.
- Il messaggio dell'annuncio contiene già il prezzo: "Sito professionale 800 € o 100 €/mese, logo e scheda Google inclusi". Così arrivano clic già qualificati.

## 8. Design: riferimento officeaigent.com (fatto da Marco)

Cosa riprendere:
- **Cambio di colore dello sfondo per sezione, dinamico e naturale.** È ciò che a Marco piace di più.
  - Ogni `<section>` ha `data-tinta="#colA,#colB"`.
  - Allo scroll, uno script leggero (IntersectionObserver + interpolazione) sfuma lo sfondo del body verso la tinta della sezione visibile.
  - Una sezione forte su fondo scuro navy fa da contrasto.
  - Da adattare alla palette Marketizzati: bianchi caldi, pesca e arancio tenue, un blocco scuro.
- Etichetta numerata sopra ogni titolo, nello stile "01 · I CONTATTI" (maiuscoletto, spaziato, con una linea).
- Titoli in Inter bold con **una parte in corsivo serif** (Instrument Serif), per esempio "Il primo che risponde, *vende.*".
- Griglie di 4 card con statistiche, una delle quali piena di colore.
- **Mockup realistici animati in CSS:**
  - un telefono con chat WhatsApp che si scrive da sola;
  - un browser con il sito che si costruisce.
  - Rispettare `prefers-reduced-motion`.
- Slider prima/dopo, ad esempio sito vecchio contro sito nuovo di un cliente.
- Header fisso con un CTA, pulsante WhatsApp flottante, FAQ ad accordion, CTA finale.
- Nessuna libreria JS pesante: CSS keyframes e IntersectionObserver. Puntare a LCP sotto i 2 secondi su mobile.

## 9. Copy: tono

- Parlare all'artigiano che "ha provato a farselo con ChatGPT o Wix e non ha tempo".
- Frasi corte, concrete, in seconda persona, senza gergo.
- Si possono riprendere dal sito attuale le parti valide: lurumi.it costruito in meno di un mese, Traffic Master Certified, il Metodo Z·START (in secondo piano).
- Da togliere: i toni da "competitor che ti superano" e i numeri animati che partono da 0.
