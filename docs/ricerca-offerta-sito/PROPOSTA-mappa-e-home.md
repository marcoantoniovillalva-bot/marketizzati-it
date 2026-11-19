# Proposta: mappa delle pagine e testo della home

Bozza da approvare prima di scrivere codice. Fonti:
- `BRIEF-nuovo-sito.md`;
- le keyword in `volumi-lombardia-2026-11.tsv`;
- il contratto di Max Installazioni.

---

## 1. Mappa delle pagine

### Pagine che vendono (IT, priorità 1)

| URL | Keyword principale (Lombardia, ricerche al mese) | Ruolo |
|---|---|---|
| `/` | web agency 880, agenzia marketing 720 | Chi sono, l'offerta in evidenza, gli altri servizi |
| `/quanto-costa-un-sito-web` | quanto costa un sito web / fare un sito web 110 + 110 (+ varianti), CPC 3–5 € | **Pagina prezzi e acquisto (Stripe)** |
| `/realizzazione-siti-web` | realizzazione siti web 390, sito web professionale 140 | Il servizio sito, il metodo, i progetti |
| `/sito-web-per-artigiani` | ricerche lunghe con meno di 10 al mese (idraulico, elettricista…) | Una sezione per mestiere; serve soprattutto per ChatGPT |
| `/scheda-google-business-profile` | google my business 9.900, profile 5.400 | Guida completa più il servizio |
| `/pubblicita-google-ads` | agenzia/consulente google ads 70 + 70 | Gestione Google Ads + ChatGPT Ads, **acquistabile (Stripe)** |
| `/chatgpt-ads` | chatgpt ads 590 (+1.344%) | Guida "ChatGPT Ads in Italia" più la gestione, **acquistabile (Stripe)** |
| `/condizioni-sito-web` | — | Condizioni di vendita, da accettare prima di pagare |

**Cosa si compra con Stripe** (solo questo):
- **Sito:** 800 € una volta, oppure 100 €/mese × 12 (+ 2 € di bollo per fattura).
- **Gestione pubblicità su Google Ads e ChatGPT Ads** (i due canali insieme). Il budget si paga a parte, direttamente a Google e OpenAI.
  - **Con il sito:** nel checkout del sito c'è l'opzione "Aggiungi la pubblicità: 3 mesi di gestione a 50 €/mese". Dopo i 3 mesi si ferma da sola; chi vuole continuare passa alla gestione a 150 €/mese.
  - **Senza il sito:** la gestione parte da 150 €/mese, disdicibile.
  - Meta Ads (Facebook e Instagram) non è qui: va con contenuti e social, su preventivo.

### Servizi su preventivo (senza Stripe, solo WhatsApp)
- `/agenti-ai-whatsapp`: agenti AI, anche vocali.
- `/sistemi-automatizzati`: sistemi su misura (gestionali, flussi di lavoro, automazioni). Un sito multipagina rientra nell'offerta; un lavoro grande va preventivato.
- `/social-media-manager`: creazione dei contenuti, pubblicazione, gestione dei profili e pubblicità sui contenuti, Meta Ads compreso.
- `/contenuti-video`

### Pagine locali
`/web-agency-milano`, `/web-agency-pavia`, `/web-agency-lodi`, `/web-agency-crema`.

Ogni pagina ha un testo diverso, scritto per la sua città. Pavia è in crescita (+100% / +150%) e Milano ha 390 ricerche.

### Istituzionali
- `/progetti`, `/chi-sono`, `/blog` (+ `/blog/[articolo]`), `/contatti`
- `/privacy`, `/cookie`, `404`
- Dopo il pagamento: `/grazie` (onboarding: modulo per logo, foto, servizi e zona, poi la call)

**Totale IT:** 23 pagine più gli articoli del blog.

### File tecnici
- `sitemap.xml` e `robots.txt` (aperto a OAI-SearchBot, GPTBot, ChatGPT-User e Bingbot)
- `/llms.txt`
- Schema in ogni pagina:
  - `ProfessionalService` con `areaServed`;
  - `Service`;
  - `Offer` / `PriceSpecification` sulla pagina prezzi;
  - `FAQPage`;
  - `BreadcrumbList`.

### Spagnolo e inglese
**Tutte le pagine**, con slug tradotti (per esempio `/es/cuanto-cuesta-una-pagina-web`, `/en/how-much-does-a-website-cost`) e hreflang tra le tre lingue. I testi sono adattati, non tradotti parola per parola.

---

## 2. Home in bozza di testo

Ogni sezione ha la sua tinta: lo sfondo sfuma da una all'altra mentre si scorre, come su officeaigent.com.

**Header fisso:** logo · Servizi · Prezzi · Progetti · Chi sono · Blog · **[Scrivimi su WhatsApp]**
**Sempre visibile:** il pulsante WhatsApp flottante.

---

### 01 · Hero
*Tinta: bianco → bianco caldo*

`01 · SITI PER ARTIGIANI E PICCOLE IMPRESE`

# Il tuo sito professionale, *fatto da una persona vera.*

Sito fino a 9 pagine, logo e scheda Google inclusi.
**800 € una volta sola, oppure 100 € al mese per 12 mesi. Poi è tuo.**

[Vedi cosa è incluso →] · [Scrivimi su WhatsApp]

<small>Il prezzo è scritto qui: niente preventivo da aspettare.</small>

*Visual:* un browser in CSS dove il sito di un idraulico si costruisce pezzo per pezzo, con accanto il telefono che lo mostra.

---

### 02 · Il problema
*Tinta: pesca chiaro*

`02 · LO CONOSCI GIÀ`

## Hai provato con Wix o ChatGPT. *Poi è arrivato il lavoro vero.*

Fare un sito da soli sembra facile, finché non serve:
- **scegliere cosa scrivere,**
- **farlo trovare su Google**
- **e aggiornarlo mentre sei in cantiere.**

Il tempo non c'è mai, e il sito resta a metà.

Gli altri invece ti chiedono di chiamare per un preventivo, e la risposta arriva dopo una settimana.

**Io faccio il contrario: prezzo scritto, sito fatto da me, online in circa 2 settimane.**

---

### 03 · L'offerta
*Tinta: arancio tenue (la sezione più calda)*

`03 · L'OFFERTA`

## Un prezzo scritto, *non un preventivo.*

| | |
|---|---|
| Valore di mercato | ~~3.600 €~~ *(sito 2.800 € · logo 500 € · scheda Google 300 €)* |
| **Paghi subito** | **800 €** · risparmi 400 € |
| **Paghi a rate** | **100 € al mese × 12** · meno di 3,30 € al giorno |

**Cosa è incluso:**
- ✓ Logo e identità visiva. Se ce l'hai già, lo sistemo.
- ✓ Sito fino a 9 pagine, con testi scritti su quello che i clienti della tua zona cercano davvero.
- ✓ Pulsanti per chiamare, WhatsApp e modulo contatti.
- ✓ Scheda Google Business: la creo, oppure sistemo quella che hai.
- ✓ Indicizzazione su Google e Bing, sito online in HTTPS, email professionale se ti serve.
- ✓ 30 giorni di assistenza dopo la messa online.

**Dopo l'ultima rata il sito è tuo.** Niente canoni mensili da pagarmi.
**A parte:** dominio ed email su VHosting, circa 32 € l'anno, intestati e pagati da te.

<small>+ 2 € di marca da bollo per fattura (regime forfettario, niente IVA).</small> *Su Stripe gli importi diventano 802 € e 102 €/mese.*

[Compra il sito] · Preferisci parlarne prima? [WhatsApp]

<small>Un sito vetrina costa in media 1.000–3.000 € (fonti: futuraweb.eu, uretech.it, milowebapp.it).</small>

---

### 04 · Come funziona
*Tinta: bianco*

`04 · COME FUNZIONA`

## Quattro passi, *e il sito è online.*

1. **Scegli come pagare.** Online qui, oppure ne parliamo prima su WhatsApp.
2. **Mi mandi il materiale.** Logo se ce l'hai, foto dei tuoi lavori, servizi e zone. Poi una call di 20 minuti.
3. **Scrivo e costruisco.** Il sito è online in circa 2 settimane da quando ho il materiale.
4. **Ti seguo per 30 giorni.** Correzioni e ritocchi inclusi.

---

### 05 · I numeri dell'offerta
*Tinta: bianco caldo. Sono quattro card con fatti dell'offerta, non promesse di risultati.*

| **800 €** *(card arancio piena)* | **9 pagine** | **~2 settimane** | **30 giorni** |
|---|---|---|---|
| una volta sola, e il sito è tuo | testi scritti sulle ricerche reali | dal materiale alla messa online | di assistenza inclusa |

---

### 06 · Gli altri servizi
*Tinta: pesca → bianco*

`05 · NON SOLO SITI`

## Quando il sito non basta, *ci pensa il resto.*

- **Agenti AI su WhatsApp.** Rispondono ai clienti anche di notte e fissano gli appuntamenti. *Visual: un telefono con una chat che si scrive da sola.*
- **Pubblicità su Google e ChatGPT.** Gestione dei due canali a 150 € al mese. Se la prendi insieme al sito, i primi 3 mesi costano 50 € al mese. Il budget lo paghi direttamente a Google e OpenAI. [Attiva la gestione]
- **Sistemi automatizzati su misura.** Gestionali e flussi che fanno da soli le parti ripetitive del lavoro, anche con agenti vocali. *Su preventivo.*
- **Contenuti e social.** Creo i contenuti, li pubblico, gestisco i profili e la pubblicità su Facebook e Instagram. *Su preventivo.*

Per i lavori su preventivo: [Scrivimi su WhatsApp]

---

### 07 · Progetti
*Tinta: bianco*

`06 · LAVORI FATTI`

## Guardali qui, *senza cambiare sito.*

Ogni progetto si vede **dentro marketizzati.it**: anteprime animate e motion graphics della struttura, senza mandare il traffico su altri siti.
- **lurumi.it** — costruito in meno di un mese. Anteprima navigabile del sito dentro un browser animato.
- **Cargo Service**
- **AIGENT** — anteprima dentro la pagina; il link al sito reale resta secondario.
- **ProspectBot** e **Zernflow** — *Privato per i clienti.* Motion graphics di come lavorano: il flusso che automatizza le parti del lavoro e l'agente vocale che risponde e richiama.

*Slider prima/dopo:* solo per i clienti già fatti che avevano un sito prima. Max Installazioni no, finché non dà il permesso.

[Vedi tutti i progetti →]

---

### 08 · Chi sono
*Blocco scuro (navy): il contrasto forte della pagina*

`07 · CHI C'È DIETRO`

## Ciao, sono Marco. *Ti rispondo io.*

Sviluppatore e creator. Non sono un'agenzia con dieci passaggi: sono la persona che scrive il tuo sito e che risponde su WhatsApp.

Traffic Master Certified.

[Loghi di partner e clienti, senza recensioni]

[Conosciamoci →]

---

### 09 · Domande frequenti
*Tinta: bianco caldo. Le domande vengono dall'autocomplete di Google.*

`08 · DOMANDE`

## Le domande *che mi fanno tutti.*

- **Quanto costa un sito web all'anno?**
  800 € una volta, oppure 100 € al mese per 12 mesi. Poi solo il dominio con l'email, circa 32 € l'anno, pagati a VHosting.
- **Posso pagare il sito a rate?**
  Sì: 12 rate da 100 €. Dopo l'ultima il sito è tuo.
- **Il sito resta mio?**
  Sì. Dominio, email, logo e scheda Google sono intestati a te dal primo giorno, il sito dopo l'ultima rata.
- **Serve avere già un logo?**
  No, è incluso. Se ce l'hai, lo sistemo.
- **Ho già una scheda Google o un vecchio sito.**
  Il prezzo non cambia: li sistemo o li rifaccio.
- **In quanto tempo è online?**
  In circa 2 settimane dal materiale. La verifica della scheda Google ha i tempi che decide Google.
- **E dopo i 30 giorni?**
  Le modifiche si fanno su richiesta, con un piccolo preventivo. Non ci sono canoni.

---

### 10 · CTA finale
*Tinta: arancio tenue*

## Il tuo sito, *online in due settimane.*

800 € oppure 100 € al mese. Logo e scheda Google inclusi.

[Compra il sito] · [Scrivimi su WhatsApp]

---

## 3. Blog

Il blog esiste già nel sito e si tiene: articoli in Supabase, editor nel portale (`/admin/blog`), 3 articoli statici di riserva. Si rifà la parte pubblica con il nuovo design e si struttura così.

### A cosa serve
Ogni articolo risponde a una domanda reale (dall'autocomplete e dalle keyword) e porta a una pagina che vende. Le pagine servizio sono i "pilastri", gli articoli i "rami" che ci puntano.

### Struttura
- `/blog`: ultimi articoli, filtro per categoria, ricerca.
- `/blog/categoria/[categoria]`, sei categorie, una per servizio più le risorse:
  - **Siti web** → `/quanto-costa-un-sito-web`, `/realizzazione-siti-web`
  - **Scheda Google e SEO locale** → `/scheda-google-business-profile`, pagine locali
  - **Pubblicità Google e ChatGPT** → `/pubblicita-google-ads`, `/chatgpt-ads`
  - **AI e automazioni** → `/agenti-ai-whatsapp`, `/sistemi-automatizzati`
  - **Contenuti e social** → `/social-media-manager`, `/contenuti-video`
  - **Risorse gratuite** → le 18 guide già pronte nei lead magnet della pipeline video (`marketizzati-video-renderer/lead-magnets/*/content.json`), copiate così come sono, con il PDF scaricabile. Esempi: 70 ganci virali, agente WhatsApp Business, Git e GitHub, Voucher Cloud & Cybersecurity.
- `/blog/[articolo]`: slug in italiano, tradotto in ES ed EN.

### Com'è fatto un articolo
- **Risposta subito:** le prime due righe rispondono alla domanda del titolo, per Google e per ChatGPT.
- Indice, sezioni brevi, tabella dove serve, FAQ in fondo.
- Box del servizio collegato a metà e in fondo (per esempio "Il sito lo faccio io: 800 € o 100 €/mese").
- Autore Marco con foto, data di pubblicazione e di aggiornamento.
- Schema `Article` + `FAQPage` + `BreadcrumbList`; immagini in WebP/AVIF con testo alternativo.
- Tre articoli correlati della stessa categoria.

### Da Drive al blog
1. Marco mette in una cartella Drive il materiale di un articolo (testo o appunti, immagini).
2. Uno script lo importa in Supabase come **bozza**: converte le immagini in WebP/AVIF, le carica nello storage del blog e prepara le versioni ES/EN.
3. Marco rilegge nell'editor del portale e pubblica.

### Primi articoli (dalle keyword)
| Articolo | Ricerca di partenza | Porta a |
|---|---|---|
| Quanto costa un sito web all'anno: le spese vere dopo la consegna | quanto costa un sito web all'anno | Prezzi |
| Creare un sito con ChatGPT o Claude: dove arrivi da solo e dove ti fermi | creare sito web con ai (140) | Prezzi |
| Sito vetrina o sito su più pagine: cosa serve a un artigiano | sito vetrina (70) | Realizzazione siti |
| Wix, WordPress o sito su misura | sito wordpress, fai da te | Prezzi |
| Scheda Google non verificata o sospesa: cosa fare | google my business (9.900) | Scheda Google |
| SEO locale: farti trovare a Milano, Pavia, Lodi e Crema | seo locale | Pagine locali |
| ChatGPT Ads in Italia: come funzionano e quanto costano | chatgpt ads (590, +1.344%) | ChatGPT Ads |
| Google Ads per artigiani: quanto budget serve davvero | consulente google ads | Google Ads |
| Come farti consigliare da ChatGPT quando un cliente cerca un artigiano | (GEO) | Prezzi |
| Agente AI su WhatsApp: cosa fa per una piccola impresa | agente ai whatsapp | Agenti AI |

**I 3 articoli esistenti:**
- "Quanto costa realizzare un sito web professionale nel 2025" fa concorrenza alla pagina prezzi: si riscrive come articolo sulle spese annuali e il vecchio indirizzo va in redirect 301.
- "Facebook Ads per generare lead" e "Scegliere un'agenzia di social media": restano in **Contenuti e social**, aggiornati al 2026.

## 4. Decisioni

- **Valore barrato:** 3.600 € (somma voce per voce). Il 3.300 € nel titolo del contratto di Max è un refuso.
- **Marca da bollo:** riga piccola sotto il prezzo; su Stripe 802 € e 102 €/mese.
- **Lingue:** IT, ES ed EN su tutte le pagine.
- **Progetti:** si vedono dentro il sito. Max Installazioni no, finché non dà il permesso.
- **Nessun limite** di siti al mese: niente scarsità.
- **Rate non pagate:** il sito viene sospeso finché non si riprende a pagare. Dopo la 12ª rata il sito, codice compreso, è del cliente. Va scritto nelle condizioni di vendita e gestito dal webhook Stripe (pagamento fallito → sito sospeso).
- **Stripe** solo per il sito e la gestione Google Ads + ChatGPT Ads (50 €/mese per 3 mesi solo insieme al sito, altrimenti 150 €/mese). Meta Ads, sistemi su misura e contenuti/social sono su preventivo via WhatsApp.
- **Materiale 3D:** copiato in `marketizzati-video-renderer/materiale/marketizzati-3d/` (la pipeline "Recordly vertical video"), verificato file per file, con un indice. Si toglie dal sito quando si costruisce la nuova home.

## 5. Ancora aperto

- **Slider prima/dopo:** quali clienti già fatti avevano un sito prima?
- **Cartella Drive del blog:** link della cartella. Il connettore Google Drive va autorizzato (comando /mcp), oppure basta la cartella sincronizzata sul PC.
