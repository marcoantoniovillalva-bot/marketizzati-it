# Piano Landing Page Marketizzati — Definitivo
> Salvato il 2026-03-13. Da implementare dopo approvazione.

## Assets disponibili
- `public/images/icon-light.png` — logo navbar
- `public/images/Chi sono.jpg` — foto profilo
- `public/images/Certificato Florida University.PNG` — certificato Traffic Master
- Supabase bucket `gifd` URL base: `https://luhfsvgbpnaxdeydxtrn.supabase.co/storage/v1/object/public/gifd`
  - `gif-hero.gif` — già presente
  - `gif-ai-automation.gif` — già presente
  - `gif-digital-marketing.gif` — già presente
  - `gif-consulenza.gif` — già presente
  - `gif-formazione.gif` — già presente
  - `gif-youtube-casestudy.gif` — DA CARICARE (da "Stile videivo idee/youtube/video Youtube.gif")
  - `gif-lurumi.gif` — DA CARICARE (da "Stile videivo idee/lurumi/lurumi gif.gif")

## GIF references in gif-embed.tsx (aggiornare)
```ts
export const youtubeCaseStudyGifUrl = `${SUPABASE_URL}/gif-youtube-casestudy.gif`
export const lurumiGifUrl = `${SUPABASE_URL}/gif-lurumi.gif`
```

## Palette colori (invariata)
- Background: `#F7F7F7`
- Surface: `#FFFFFF`
- Accent: `#FE3314` (rosso)
- Foreground: `#090909`
- Foreground secondary: `#4A4A4A`
- Gradient header: `mz-gradient-header` (bianco → rosso caldo → bianco, 10s)

## Animazioni da implementare (Framer Motion già installato)
- Smooth scroll: CSS `scroll-behavior: smooth`
- Scroll reveal: `whileInView` + `viewport={{ once: true }}`
- Parallax hero: `useScroll` + `useTransform` (già presente)
- Tipografia responsive: `font-size: clamp(2.5rem, 7vw, 7rem)`
- Counter animati: custom hook con Framer Motion
- Stagger grid: `staggerChildren` in Framer
- Card hover elevation: `whileHover={{ y: -8 }}`
- Ripple button: CSS `::after` keyframe
- Float GIF card: `animate={{ y: [0, -12, 0] }}` loop infinito
- Slide-in laterale: `initial={{ x: -60 }}` → `{ x: 0 }`
- Sticky section Z·START: CSS `position: sticky`

## Struttura Sezioni

### NAVBAR
- Logo: `icon-light.png` (già fatto)
- Gradient animato: `mz-gradient-header` (già fatto)
- Link visibili: Servizi, Chi Siamo, Consulenza (NO "Accedi" per ora)
- Link visibili solo se loggati: Metodo Z·START nel dropdown

### S1 — HERO (Full screen)
**Badge:** `✦ Digital Factory · Traffic Master Certified · AI-Native`

**Headline** (clamp, DM Sans bold, staggered per riga):
> "Mentre Tu Ci Pensi,
> i Tuoi Competitor
> Stanno **Costruendo**."

**Sub:**
> Il Metodo Z·START in 6 fasi trasforma la tua visione in un business digitale che genera clienti — con precisione industriale e l'AI che fa il lavoro pesante.

**CTA (stagger delay):**
- Primario rosso: `Prenota la Mia Consulenza Gratuita` → `/consulenza`
- Secondario outline: `Scopri il Metodo Z·START →` → smooth scroll a S4

**Microcopy:** *30 minuti · Senza impegno · 100% personalizzata*

**Visual:** `gif-hero.gif` come floating card con float animation loop + parallax leggero allo scroll + tilt 3D on hover

**Effetti:** ParticleBackground + TechLines già presenti. Gradiente molto sottile bg.

---

### S2 — PROOF BAR (sticky, altezza ~80px)
Counter animati che partono quando entrano in viewport:

| **140k+** | **100k+** | **<1 mese** | **6** | **🎓** |
|---|---|---|---|---|
| Views YouTube organiche | Views Facebook organiche | Per lanciare lurumi.it con la Digital Factory | Fasi Metodo Z·START | Traffic Master · Florida Global University |

L'ultimo elemento è cliccabile → apre lightbox con `Certificato Florida University.PNG`

---

### S3 — CASO STUDIO (Pain + Proof)
**Headline (slide-in, bold enorme):**
> "140.000+ Views.
> Zero Clienti."

**Sub:**
> *Ecco perché il contenuto virale non basta — e cosa serve davvero.*

**Layout 2 colonne:**

**Sinistra — copy:**
> Ho creato un canale con contenuto AI-ottimizzato. In meno di 30 giorni: 140.000+ views su YouTube (32.000+ su un solo video) e 100.000+ su Facebook. Traffico organico puro, zero ads.
>
> Risultato? Zero clienti.
>
> Perché senza un sistema che converte il traffico in clienti, hai solo numeri su uno schermo. Quella lezione — imparata sulla mia pelle — è il motivo per cui esiste il Metodo Z·START.

**Chiusura bold:**
> "Il contenuto porta le persone. Il sistema le converte. Io costruisco entrambi."

**Destra — GIF YouTube:**
`gif-youtube-casestudy.gif` in card con rounded-3xl, shadow, float animation leggera
Caption sotto: *"32.000+ views su un solo video · Contenuto AI-ottimizzato"*

---

### S4 — METODO Z·START (sticky durante scroll)
**Badge:** `✦ Framework Proprietario — Già applicato su lurumi.it`

**Headline:**
> "Il Sistema Operativo
> del Tuo Business Digitale"

**Sub:**
> Non consulenza generica. Non un corso da guardare in pigiama. Un framework in 6 fasi che costruisce il tuo ecosistema digitale come una macchina industriale.

**6 lettere animate (stagger, una alla volta):**
```
Z — Zero Point     → "Dove sei davvero. Senza illusioni."
S — Strategy       → "Il piano. Ogni decisione guidata dai dati."
T — Technology     → "L'infrastruttura concreta che fa girare tutto."
A — Activation     → "Sul mercato. Campagne, funnel, contenuti."
R — Results        → "Analizziamo. Ottimizziamo. Massimizziamo il ROI."
T — Transformation → "Il business che scala. Non quello che sopravvive."
```

**Visual destra:** `gif-ai-automation.gif` con parallax

**CTA:** `Scopri il Metodo Completo →` → `/metodo`

---

### S5 — CHI SONO (Credibility + Trust)
**Headline:**
> "Non un'Agenzia.
> Una Digital Factory Fondata su Risultati Reali."

**Layout 2 colonne:**

**Sinistra:**
- Foto `Chi sono.jpg` con bordo rosso animato, shadow forte, tilt leggero on hover
- Sotto la foto: badge certificato (logo piccolo FGU + "Traffic Master Certified · 2025") → click → lightbox con `Certificato Florida University.PNG`

**Destra — copy:**
> Ho costruito sistemi digitali prima di venderli.
>
> lurumi.it è il primo prodotto lanciato da Marketizzati: una PWA full-stack con AI, pagamenti Stripe e più di 200 funzionalità — costruita in meno di un mese usando la stessa Digital Factory che offro ai miei clienti.
>
> Il Metodo Z·START nasce dall'esperienza diretta: dall'aver visto 140.000+ views non portare nemmeno un cliente, e dall'aver costruito sistemi che invece funzionano.

**3 credential (icon + label):**
- 🎯 Traffic Master Certified · Florida Global University 2025
- 🌐 lurumi.it — Digital Product live (< 1 mese)
- 🤖 AI applicata a contenuto, automazione e prodotto

**GIF lurumi sotto i credential:**
`gif-lurumi.gif` in card compatta con caption: *"lurumi.it — Primo progetto Marketizzati live"* + link → lurumi.it (nuova tab)

---

### S6 — SERVIZI (3 card con GIF)
**Headline:** "La Digital Factory al Completo"

Card con stagger animation:
1. **Strategia & Posizionamento** → `gif-digital-marketing.gif`
   *Definiamo chi sei, a chi parli e come ti distingui nel mercato.*
2. **AI & Automazione** → `gif-ai-automation.gif`
   *L'AI che lavora per te mentre tu lavori sul tuo business.*
3. **Web & Funnel** → `gif-consulenza.gif`
   *Infrastrutture digitali che portano traffico e convertono.*

**Effetti:** GIF zoom on hover, card shadow elevation on hover.

---

### S7 — CTA FINALE (bg rosso, full section)
**Headline (bianco, enorme):**
> "30 Minuti.
> Una Conversazione.
> Tutto Cambia."

**Sub:**
> Scopri esattamente cosa blocca la tua crescita e i 3 passi concreti da fare subito.

**CTA:** `Prenoto la Mia Consulenza Gratuita →` → `/consulenza`

**Microcopy:** *Zero spam · Zero impegno · 100% strategica*

**Urgenza leggera:** *Accettiamo un numero limitato di consulenze a settimana per garantire qualità.*

**Visual:** TechLines overlay semitrasparente

---

### FOOTER (semplificato)
Solo:
- Logo `icon-light.png` centrato
- © 2025 Marketizzati · Tutti i diritti riservati
- 3 link: Privacy Policy · Cookie Policy · Termini e Condizioni

---

## File da modificare / creare
1. `src/app/[locale]/page.tsx` — riscrivere completamente la homepage
2. `src/components/shared/gif-embed.tsx` — aggiungere `youtubeCaseStudyGifUrl` e `lurumiGifUrl`
3. `src/components/layout/footer.tsx` — semplificare
4. `src/i18n/messages/it.json` — aggiornare testi se necessario
5. `src/app/globals.css` — aggiungere classi CSS per animazioni custom (ripple, float, counter)
6. Supabase storage bucket `gifd` — caricare `gif-youtube-casestudy.gif` e `gif-lurumi.gif`

## Componenti nuovi da creare
- `src/components/shared/animated-counter.tsx` — counter animato viewport
- `src/components/shared/lightbox.tsx` — lightbox per certificato
- `src/components/shared/proof-bar.tsx` — striscia proof con counter
- `src/components/shared/certificate-badge.tsx` — badge certificato interattivo

## Note tecniche
- YouTube GIF: 56MB → servire da Supabase CDN (no next/image optimization, `unoptimized`)
- Lurumi GIF: 17MB → stesso approccio
- Lightbox: implementare con Framer Motion (AnimatePresence + backdrop)
- Counter animati: useInView + useMotionValue di Framer Motion
- Sticky section Z·START: CSS `position: sticky; top: 80px`
- Certificato: PNG da mostrare in lightbox, non compresso
