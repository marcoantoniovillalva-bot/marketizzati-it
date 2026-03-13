'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Sparkles, Award, ExternalLink, Check, Target, Zap, Users } from 'lucide-react'
import { ParticleBackground } from '@/components/shared/particle-background'
import { TechLines } from '@/components/shared/tech-lines'
import {
  GifEmbed,
  heroGifUrl,
  aiAutomationGifUrl,
  marketingGifUrl,
  consulenzaGifUrl,
  youtubeCaseStudyGifUrl,
  lurumiGifUrl,
} from '@/components/shared/gif-embed'
import { AnimatedCounter } from '@/components/shared/animated-counter'
import { Lightbox } from '@/components/shared/lightbox'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const WA_LINK = 'https://wa.link/psnpym'

const zstartSteps = [
  { letter: 'Z', title: 'Punto Zero', desc: 'Dove sei davvero. Senza illusioni.' },
  { letter: 'S', title: 'Strategia', desc: 'Il piano. Ogni decisione guidata dai dati.' },
  { letter: 'T', title: 'Tecnologia', desc: "L'infrastruttura concreta che fa girare tutto." },
  { letter: 'A', title: 'Attivazione', desc: 'Sul mercato. Campagne, funnel, contenuti.' },
  { letter: 'R', title: 'Risultati', desc: 'Analizziamo. Ottimizziamo. Massimizziamo il ROI.' },
  { letter: 'T2', title: 'Trasformazione', desc: 'Il business che scala. Non quello che sopravvive.' },
]

const services = [
  {
    title: 'Strategia & Posizionamento',
    desc: 'Definiamo chi sei, a chi parli e come ti distingui nel mercato.',
    gif: marketingGifUrl,
  },
  {
    title: 'AI & Automazione',
    desc: "L'AI che lavora per te mentre tu lavori sul tuo business.",
    gif: aiAutomationGifUrl,
  },
  {
    title: 'Web & Funnel',
    desc: 'Infrastrutture digitali che portano traffico e convertono.',
    gif: consulenzaGifUrl,
  },
]

const values = [
  {
    icon: <Target size={20} />,
    title: 'Risultati Prima di Tutto',
    desc: 'Non contiamo le ore lavorate. Contiamo i risultati generati.',
  },
  {
    icon: <Zap size={20} />,
    title: 'AI-Native',
    desc: "Usiamo l'AI non come buzzword, ma come motore per costruire più velocemente e meglio.",
  },
  {
    icon: <Users size={20} />,
    title: 'Ecosistema, Non Servizi',
    desc: 'Non siamo un fornitore. Siamo un partner nel tuo percorso di crescita.',
  },
]

// Wave SVG divider
function WaveDivider({ flip = false, fill = '#FFFFFF' }: { flip?: boolean; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: 60 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={fill} />
      </svg>
    </div>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const [certOpen, setCertOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const headlineLines = ['Mentre Tu Ci Pensi,', 'i Tuoi Competitor', 'Stanno Costruendo.']

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Lightbox
        src="/images/Certificato Florida University.PNG"
        alt="Certificato Traffic Master – Florida Global University"
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
      />

      <main className="relative">

        {/* ── S1: HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        >
          {/* GIF hero come sfondo */}
          <motion.div
            style={{ scale: bgScale }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroGifUrl}
              alt=""
              fill
              className="object-cover"
              unoptimized
              priority
            />
            {/* Overlay gradiente per leggibilità */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
          </motion.div>

          <ParticleBackground />
          <TechLines />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-5xl mx-auto text-center w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent tracking-wide">
                Digital Factory · Traffic Master Certified · AI-Native
              </span>
            </motion.div>

            {/* Headline staggered */}
            <h1 style={{ fontSize: 'clamp(2.6rem, 7.5vw, 7rem)', lineHeight: 1.05 }}
              className="font-heading font-black mb-4">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block text-accent"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Con l&apos;IA.
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto"
            >
              Il Metodo Z·START in 6 fasi trasforma la tua visione in un business digitale
              che genera clienti — con precisione industriale e l&apos;AI che fa il lavoro pesante.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-btn px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all text-base md:text-lg hover:shadow-[0_0_30px_rgba(254,51,20,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Prenota la Mia Consulenza Gratuita
              </a>
              <button
                onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-foreground/20 hover:border-accent text-foreground hover:text-accent font-semibold rounded-xl transition-all text-base md:text-lg flex items-center gap-2 group"
              >
                Risparmia Mesi. Porta Clienti.
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-sm text-foreground-muted"
            >
              30 minuti · Senza impegno · 100% personalizzata
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* ── S2: PROOF BAR ── */}
        <section className="py-10 bg-foreground overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
              {[
                { value: 140, suffix: 'k+', label: 'Views YouTube organiche' },
                { value: 100, suffix: 'k+', label: 'Views Facebook organiche' },
                { value: null, raw: '< 1 mese', label: 'Per lanciare lurumi.it' },
                { value: 6, suffix: '', label: 'Fasi Metodo Z·START' },
                { value: null, raw: '🎓', label: 'Traffic Master Certified', cert: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${item.cert ? 'cursor-pointer hover:scale-105 transition-transform col-span-2 md:col-span-1' : ''}`}
                  onClick={item.cert ? () => setCertOpen(true) : undefined}
                >
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">
                    {item.value !== null
                      ? <AnimatedCounter target={item.value} suffix={item.suffix ?? ''} />
                      : item.raw}
                  </div>
                  <div className="text-xs text-white/50 font-medium leading-tight">
                    {item.label}
                    {item.cert && (
                      <span className="block text-accent/80 mt-0.5 text-[10px]">
                        Florida Global University · Clicca per vedere
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: CASO STUDIO ── */}
        <WaveDivider fill="#090909" flip />
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2
                  className="font-heading font-black mb-2"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
                >
                  140.000+ Views.
                </h2>
                <h2
                  className="font-heading font-black text-accent mb-6"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
                >
                  Zero Clienti.
                </h2>

                <div className="space-y-4 text-foreground-secondary text-base md:text-lg leading-relaxed">
                  <p>
                    Ho creato un canale con contenuto AI-ottimizzato. In meno di 30 giorni:
                    <strong className="text-foreground"> 140.000+ views su YouTube</strong> (32.000+ su un solo video)
                    e <strong className="text-foreground">100.000+ su Facebook</strong>.
                    Traffico organico puro, zero ads.
                  </p>
                  <p>
                    Risultato? <strong className="text-accent">Zero clienti.</strong>
                  </p>
                  <p>
                    Perché senza un sistema che converte il traffico in clienti, hai solo
                    numeri su uno schermo. Quella lezione — imparata sulla mia pelle —
                    è il motivo per cui esiste il Metodo Z·START.
                  </p>
                </div>

                <div className="mt-8 p-5 bg-foreground rounded-2xl">
                  <p className="text-white font-bold text-base md:text-lg">
                    &ldquo;Il contenuto porta le persone.
                    Il sistema le converte.
                    Io costruisco entrambi.&rdquo;
                  </p>
                </div>
              </motion.div>

              {/* YouTube GIF cliccabile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.a
                  href="https://youtube.com/shorts/03avyCsZ8us"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block max-w-xs mx-auto md:max-w-sm lg:max-w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-surface-border group relative"
                >
                  <img
                    src={youtubeCaseStudyGifUrl}
                    alt="Video YouTube case study — 32k views"
                    className="w-full h-auto"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
                <p className="mt-3 text-center text-sm text-foreground-muted">
                  32.000+ views · Clicca per guardare il video →
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── S4: METODO Z·START ── */}
        <WaveDivider fill="#F7F7F7" />
        <section id="metodo" className="py-24 bg-surface overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left: headline + steps */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6"
                >
                  <span className="text-xs font-bold text-accent tracking-wider uppercase">
                    ✦ Framework Proprietario — Già applicato su lurumi.it
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-heading font-bold mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.1 }}
                >
                  Il Sistema Operativo<br />del Tuo Business Digitale
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-foreground-secondary mb-10 text-base md:text-lg"
                >
                  Non consulenza generica. Un framework in 6 fasi che costruisce il tuo
                  ecosistema digitale come una macchina industriale — e ti porta clienti
                  risparmiando mesi di tentativi.
                </motion.p>

                <div className="space-y-3">
                  {zstartSteps.map((step, i) => (
                    <motion.div
                      key={step.letter}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-surface-border hover:border-accent/40 hover:shadow-md transition-all group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-accent text-white font-black text-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {step.letter === 'T2' ? 'T' : step.letter}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm md:text-base">{step.title}</p>
                        <p className="text-foreground-muted text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/metodo"
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all group"
                  >
                    Scopri il Metodo Completo
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Right: lurumi come proof + GIF sticky */}
              <div className="hidden lg:block sticky top-24 self-start space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-3xl overflow-hidden shadow-elevated border border-surface-border"
                  >
                    <GifEmbed src={aiAutomationGifUrl} alt="AI in azione" />
                  </motion.div>
                </motion.div>

                {/* Lurumi come proof del metodo */}
                <motion.a
                  href="https://lurumi.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="block rounded-2xl overflow-hidden border border-surface-border shadow-md"
                >
                  <img src={lurumiGifUrl} alt="lurumi.it — primo progetto Marketizzati live" className="w-full h-auto" />
                  <div className="bg-foreground px-4 py-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold">lurumi.it — Il Metodo in Azione</p>
                      <p className="text-white/40 text-[10px]">Primo progetto Marketizzati · Live in &lt;1 mese</p>
                    </div>
                    <ExternalLink size={12} className="text-white/40 shrink-0" />
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* ── S5: CHI SONO ── */}
        <WaveDivider fill="#FFFFFF" />
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Chi c&apos;è Dietro Marketizzati
              </h2>
              <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                Non un&apos;agenzia. Una Digital Factory fondata su risultati reali.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Sinistra: foto + certificato */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center lg:items-start gap-5"
              >
                <motion.div
                  whileHover={{ rotate: 1, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative w-72 h-96 rounded-3xl overflow-hidden border-4 border-accent shadow-[0_20px_60px_rgba(254,51,20,0.2)]"
                >
                  <Image
                    src="/images/Chi sono.jpg"
                    alt="Marco Antonio Villalva"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </motion.div>

                {/* Certificate badge */}
                <motion.button
                  onClick={() => setCertOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 bg-surface border-2 border-surface-border hover:border-accent rounded-2xl transition-all shadow-sm group w-full max-w-xs"
                >
                  <Award size={20} className="text-accent shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">Traffic Master Certified</p>
                    <p className="text-[11px] text-foreground-muted">Florida Global University · 2025</p>
                  </div>
                  <ExternalLink size={14} className="text-foreground-muted group-hover:text-accent transition-colors ml-auto" />
                </motion.button>
              </motion.div>

              {/* Destra: mission + valori */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Mission */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-xl mb-3 text-accent">La Mission</h3>
                  <p className="text-foreground-secondary text-base md:text-lg leading-relaxed">
                    Ho costruito sistemi digitali prima di venderli.
                    lurumi.it è il primo prodotto lanciato da Marketizzati: una PWA full-stack
                    con AI, pagamenti Stripe e più di 200 funzionalità — costruita in{' '}
                    <strong className="text-foreground">meno di un mese</strong> usando la stessa
                    Digital Factory che offro ai miei clienti.
                  </p>
                  <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mt-3">
                    La mission è semplice: <strong className="text-foreground">aiutare PMI e professionisti
                    a costruire il proprio ecosistema digitale completo</strong> — non singoli servizi, ma
                    un sistema integrato potenziato dall&apos;AI attraverso il Metodo Z·START.
                  </p>
                </div>

                {/* Valori */}
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4 text-accent">I Valori</h3>
                  <div className="space-y-4">
                    {values.map((val, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-surface-border hover:border-accent/30 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                          {val.icon}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-foreground">{val.title}</p>
                          <p className="text-foreground-muted text-sm mt-0.5">{val.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Check list */}
                <div className="mt-8 space-y-2">
                  {[
                    'Traffic Master Certified · Florida Global University 2025',
                    'lurumi.it — Digital Product live in meno di 1 mese',
                    'AI applicata a contenuto, automazione e prodotto',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-sm text-foreground-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── S6: SERVIZI ── */}
        <WaveDivider fill="#F7F7F7" />
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                La Digital Factory al Completo
              </h2>
              <p className="text-foreground-secondary text-lg max-w-xl mx-auto">
                Ogni elemento progettato per lavorare in sinergia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl overflow-hidden border border-surface-border hover:border-accent/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all"
                >
                  <div className="overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                      <GifEmbed src={service.gif} alt={service.title} />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-foreground-secondary text-sm mb-4">{service.desc}</p>
                    <Link
                      href="/servizi"
                      className="text-accent font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all group"
                    >
                      Scopri di più
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7: CTA FINALE ── */}
        <WaveDivider fill="#FE3314" />
        <section className="py-28 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <TechLines />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-heading font-black text-white mb-6"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', lineHeight: 1.05 }}
              >
                30 Minuti.<br />
                Una Conversazione.<br />
                Tutto Cambia.
              </h2>

              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                Scopri esattamente cosa blocca la tua crescita e i 3 passi concreti da fare subito.
              </p>

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent font-black text-lg rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all"
              >
                Scrivimi su WhatsApp
                <ArrowRight size={22} />
              </motion.a>

              <p className="mt-5 text-white/50 text-sm">
                Zero spam · Zero impegno · Rispondo entro poche ore
              </p>
              <p className="mt-2 text-white/40 text-xs">
                Accettiamo un numero limitato di consulenze a settimana per garantire qualità
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
