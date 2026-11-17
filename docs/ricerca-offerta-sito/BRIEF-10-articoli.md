# Brief: i primi 10 articoli del blog

Gli articoli vanno scritti in italiano, come post statici. Non fare commit e crea solo i file indicati qui sotto.

## Formato
- I tipi sono in `src/features/blog/types.ts`:
  - `BlogPost`;
  - `BlogSection`, con le sezioni intro, paragraph, h2, h3, list, callout, cta, image, video, table e code.
- Un file per articolo in `src/features/blog/posts/it/guide/<slug>.ts`, con `export default post`.
- Un file `src/features/blog/posts/it/guide/index.ts` che esporta `guidePosts: BlogPost[]`.
- In `src/features/blog/posts/index.ts`, aggiungi `...guidePosts` all'array `it`, dopo le voci già presenti.
- Per ora l'immagine è `'/images/og-image.png'`, con un `imageAlt` sensato.
- Data: `2026-11-17`.
- `category` deve essere esattamente una di queste:
  - `'Siti web'`
  - `'Scheda Google e SEO locale'`
  - `'Pubblicità Google e ChatGPT'`
  - `'AI e automazioni'`
- Ogni articolo ha 4–6 `keywords` e una `description` di massimo 155 caratteri.
- Lunghezza: 900–1400 parole.

## Chi scrive, a chi, con che tono
- **Chi scrive:** Marco Villalva (Marketizzati), sviluppatore a Vigevano (Lombardia) che fa siti per artigiani.
- **Lettore:** un artigiano o il titolare di una piccola impresa (idraulico, elettricista, tapparellista, impresa edile, estetista, ristorante). Ha provato con Wix o ChatGPT e non ha tempo.
- **Tono:** frasi corte e concrete, in seconda persona, senza gergo, senza enfasi, onesto.
- **Vietato:**
  - promettere contatti, chiamate o fatturato;
  - inventare statistiche, casi studio o citazioni.
- **Fatti che possono cambiare** (funzioni di Google o OpenAI, prezzi di terzi): scrivili con cautela e invita a verificarli sulla pagina ufficiale.

## Struttura di ogni articolo
1. **`intro`:** risponde alla domanda del titolo in 2–3 frasi, così Google e ChatGPT possono citarla.
2. **Corpo:**
   - sezioni `h2` ed elenchi;
   - almeno una `table` dove è utile;
   - una `cta` a metà articolo e una `cta` finale verso la pagina dell'offerta giusta.
3. **"Domande frequenti":** un `h2` finale con 3–4 domande e risposte, ognuna come `h3`.

I link nel testo sono in markdown: `[testo](/it/<slug>)`.

## L'offerta (usa esattamente questi dati)
- **Sito:** 800 € una volta sola, oppure 100 €/mese per 12 mesi. Dopo l'ultima rata il sito è del cliente, codice compreso.
- **Incluso:**
  - logo;
  - fino a 9 pagine;
  - testi sulle ricerche reali della zona;
  - pulsanti chiama e WhatsApp, modulo contatti;
  - indicizzazione su Google e Bing;
  - scheda Google Business Profile creata o sistemata;
  - HTTPS;
  - 30 giorni di assistenza.
- **Costi a parte:** dominio ed email su VHosting, circa 32 € l'anno, pagati dal cliente.
- **Fattura:** niente IVA (regime forfettario), più una marca da bollo di 2 € per fattura.
- **Tempi:** online in circa 2 settimane dal materiale.
- **Rate interrotte:** il sito viene sospeso.
- **Gestione Google Ads + ChatGPT Ads insieme:** 150 €/mese, oppure 50 €/mese per i primi 3 mesi se presa insieme al sito. Il budget pubblicitario parte da 100 €/mese e si paga direttamente a Google e OpenAI.

## Pagine da collegare
- `/it/quanto-costa-un-sito-web`
- `/it/realizzazione-siti-web`
- `/it/sito-web-per-artigiani`
- `/it/scheda-google-business-profile`
- `/it/pubblicita-google-ads`
- `/it/chatgpt-ads`
- `/it/agenti-ai-whatsapp`
- `/it/web-agency-milano`, `/it/web-agency-pavia`, `/it/web-agency-lodi`, `/it/web-agency-crema`

## Articoli
Per ogni articolo: slug, titolo, ricerca di partenza, categoria e pagina principale da collegare.

1. **quanto-costa-un-sito-web-all-anno**
   - Titolo: Quanto costa un sito web all'anno: le spese vere dopo la consegna
   - Ricerca: "quanto costa un sito web all'anno"
   - Categoria: Siti web
   - Collega a: /it/quanto-costa-un-sito-web
2. **creare-sito-con-chatgpt-o-claude**
   - Titolo: Creare un sito con ChatGPT o Claude: dove arrivi da solo e dove ti fermi
   - Ricerca: "creare sito web con ai"
   - Categoria: Siti web
   - Collega a: /it/quanto-costa-un-sito-web
3. **sito-vetrina-o-sito-multipagina**
   - Titolo: Sito vetrina o sito su più pagine: cosa serve a un artigiano
   - Ricerca: "sito vetrina"
   - Categoria: Siti web
   - Collega a: /it/realizzazione-siti-web
4. **wix-wordpress-o-sito-su-misura**
   - Titolo: Wix, WordPress o sito su misura: cosa scegliere se non hai tempo
   - Ricerche: "sito wordpress", "sito internet fai da te"
   - Categoria: Siti web
   - Collega a: /it/quanto-costa-un-sito-web
5. **scheda-google-non-verificata-o-sospesa**
   - Titolo: Scheda Google non verificata o sospesa: cosa fare
   - Ricerca: "google my business"
   - Categoria: Scheda Google e SEO locale
   - Collega a: /it/scheda-google-business-profile
6. **seo-locale-milano-pavia-lodi-crema**
   - Titolo: SEO locale: farti trovare a Milano, Pavia, Lodi e Crema
   - Ricerca: "seo locale"
   - Categoria: Scheda Google e SEO locale
   - Collega a: le quattro pagine locali
7. **chatgpt-ads-italia-come-funzionano**
   - Titolo: ChatGPT Ads in Italia: come funzionano e quanto costano
   - Ricerca: "chatgpt ads"
   - Categoria: Pubblicità Google e ChatGPT
   - Collega a: /it/chatgpt-ads
   - Attenzione: disponibilità e formati cambiano, invita a verificare sulle pagine ufficiali di OpenAI.
8. **google-ads-per-artigiani-budget**
   - Titolo: Google Ads per artigiani: quanto budget serve davvero
   - Ricerca: "consulente google ads"
   - Categoria: Pubblicità Google e ChatGPT
   - Collega a: /it/pubblicita-google-ads
9. **farsi-consigliare-da-chatgpt**
   - Titolo: Come farti consigliare da ChatGPT quando un cliente cerca un artigiano
   - Tema: GEO, cioè farsi citare dagli assistenti AI
   - Categoria: Scheda Google e SEO locale
   - Collega a: /it/quanto-costa-un-sito-web
10. **agente-ai-whatsapp-piccola-impresa**
    - Titolo: Agente AI su WhatsApp: cosa fa per una piccola impresa
    - Ricerca: "agente ai whatsapp"
    - Categoria: AI e automazioni
    - Collega a: /it/agenti-ai-whatsapp

## Alla fine
Esegui `npx tsc --noEmit -p .`: deve passare senza errori. Riporta gli slug e il numero di parole di ogni articolo.
