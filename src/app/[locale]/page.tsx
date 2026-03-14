'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Sparkles, Award, ExternalLink, Check, Target, Zap, Users, ChevronDown, Bot, Cpu, Globe, TrendingUp, Mail, Palette, BarChart2, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
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

function AccordionCard({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-2xl border border-surface-border bg-surface overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-accent/5 transition-colors"
      >
        <h3 className="font-heading font-bold text-lg text-accent">{title}</h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-accent shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-surface-border pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ZStartModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('landing')

  const zstartModalSteps = [
    {
      letter: 'Z',
      title: t('modal.step1Title'),
      desc: t('modal.step1Desc'),
      benefit: t('modal.step1Benefit'),
    },
    {
      letter: 'S',
      title: t('modal.step2Title'),
      desc: t('modal.step2Desc'),
      benefit: t('modal.step2Benefit'),
    },
    {
      letter: 'T',
      title: t('modal.step3Title'),
      desc: t('modal.step3Desc'),
      benefit: t('modal.step3Benefit'),
    },
    {
      letter: 'A',
      title: t('modal.step4Title'),
      desc: t('modal.step4Desc'),
      benefit: t('modal.step4Benefit'),
    },
    {
      letter: 'R',
      title: t('modal.step5Title'),
      desc: t('modal.step5Desc'),
      benefit: t('modal.step5Benefit'),
    },
    {
      letter: 'T',
      title: t('modal.step6Title'),
      desc: t('modal.step6Desc'),
      benefit: t('modal.step6Benefit'),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-surface-border flex items-center justify-between px-6 py-4 rounded-t-3xl z-10">
          <div>
            <span className="text-xs font-bold text-accent tracking-wider uppercase">{t('modal.badge')}</span>
            <h2 className="font-heading font-bold text-xl leading-tight">{t('modal.title')}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full hover:bg-surface flex items-center justify-center transition-colors shrink-0 ml-4">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-3">
          {zstartModalSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 p-4 rounded-2xl bg-surface border border-surface-border"
            >
              <div className="w-10 h-10 rounded-xl bg-accent text-white font-black text-base flex items-center justify-center shrink-0">
                {step.letter}
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{step.title}</p>
                <p className="text-foreground-muted text-xs mt-1 leading-relaxed">{step.desc}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <Check size={12} className="text-accent shrink-0" />
                  <p className="text-accent font-semibold text-xs">{step.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-6 pb-6">
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="font-bold text-sm mb-4 text-center">{t('modal.timelineTitle')}</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3">
                <p className="text-accent font-black text-2xl">4-6</p>
                <p className="text-[11px] text-foreground-muted mt-0.5">{t('modal.timelineWeeks')}</p>
                <p className="text-sm font-bold mt-2">{t('modal.timeline1Name')}</p>
                <p className="text-[11px] text-foreground-muted mt-1">{t('modal.timeline1Phases')}</p>
              </div>
              <div className="p-3 border-x border-surface-border">
                <p className="text-accent font-black text-2xl">8-12</p>
                <p className="text-[11px] text-foreground-muted mt-0.5">{t('modal.timelineWeeks')}</p>
                <p className="text-sm font-bold mt-2">{t('modal.timeline2Name')}</p>
                <p className="text-[11px] text-foreground-muted mt-1">{t('modal.timeline2Phases')}</p>
              </div>
              <div className="p-3">
                <p className="text-accent font-black text-2xl">12-16</p>
                <p className="text-[11px] text-foreground-muted mt-0.5">{t('modal.timelineWeeks')}</p>
                <p className="text-sm font-bold mt-2">{t('modal.timeline3Name')}</p>
                <p className="text-[11px] text-foreground-muted mt-1">{t('modal.timeline3Phases')}</p>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-foreground-muted text-center leading-relaxed">
              {t('modal.timelineDisclaimer')}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ripple-btn mt-4 flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-2xl transition-all text-sm"
          >
            {t('modal.modalCta')}
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ServiceCardItem({ service }: { service: { title: string; desc: string; gif: string; subServices: { Icon: React.ElementType; label: string; desc: string }[] } }) {
  const t = useTranslations('landing')
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 0.95', 'end 0.05'],
  })
  const liftY = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [10, -12, -20, -12, 10])
  const liftScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.97, 1.02, 1.04, 1.02, 0.97])

  return (
    <div ref={cardRef}>
      <motion.div
        style={isMobile ? { y: liftY, scale: liftScale } : {}}
        className="bg-surface rounded-3xl overflow-hidden border border-surface-border hover:border-accent/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all"
      >
        <div className="overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
            <GifEmbed src={service.gif} alt={service.title} />
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">{service.title}</h3>
          <p className="text-foreground-secondary text-sm mb-4">{service.desc}</p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all group"
          >
            {expanded ? t('services.collapseBtn') : t('services.expandBtn')}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={15} />
            </motion.div>
          </button>
        </div>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="sub"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-surface-border space-y-3">
                {service.subServices.map((sub, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background hover:bg-accent/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <sub.Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{sub.label}</p>
                      <p className="text-xs text-foreground-muted mt-0.5">{sub.desc}</p>
                    </div>
                  </div>
                ))}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all group"
                >
                  {t('services.waBtn')}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

function WaveDivider({ flip = false, fill = '#FFFFFF' }: { flip?: boolean; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: 56 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  )
}

function CaseStudyCard({ study }: { study: { id: string; title: string; tag: string; brief: string; detail: { headline: string; body: string[]; gif: string; gifCaption: string; gifLink: string; quote: string } } }) {
  const t = useTranslations('landing')
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="bg-white rounded-3xl border border-surface-border overflow-hidden hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all min-w-[300px] md:min-w-0 flex-1"
    >
      {/* Card header */}
      <div className="p-6">
        <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
          {study.tag}
        </span>
        <h3 className="font-heading font-bold text-xl mb-2">{study.title}</h3>
        <p className="text-foreground-secondary text-sm leading-relaxed">{study.brief}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all group"
        >
          {expanded ? t('casiStudio.collapseBtn') : t('casiStudio.expandBtn')}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-surface-border pt-5 space-y-4">
              <h4 className="font-bold text-lg text-foreground">{study.detail.headline}</h4>

              {study.detail.body.map((para, i) => (
                <p key={i} className="text-foreground-secondary text-sm leading-relaxed">{para}</p>
              ))}

              {/* GIF cliccabile */}
              <motion.a
                href={study.detail.gifLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block rounded-2xl overflow-hidden border border-surface-border relative group mt-2"
              >
                <img
                  src={study.detail.gif}
                  alt={study.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} className="text-white" />
                  </div>
                </div>
              </motion.a>
              <p className="text-xs text-foreground-muted text-center">{study.detail.gifCaption}</p>

              {/* Quote */}
              <div className="bg-foreground rounded-2xl p-4 mt-2">
                <p className="text-white font-bold text-sm">&ldquo;{study.detail.quote}&rdquo;</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HomePage() {
  const t = useTranslations('landing')
  const heroRef = useRef(null)
  const [certOpen, setCertOpen] = useState(false)
  const [zstartOpen, setZstartOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const zstartSteps = [
    { letter: 'Z', title: t('metodo.step1Title'), desc: t('metodo.step1Desc') },
    { letter: 'S', title: t('metodo.step2Title'), desc: t('metodo.step2Desc') },
    { letter: 'T', title: t('metodo.step3Title'), desc: t('metodo.step3Desc') },
    { letter: 'A', title: t('metodo.step4Title'), desc: t('metodo.step4Desc') },
    { letter: 'R', title: t('metodo.step5Title'), desc: t('metodo.step5Desc') },
    { letter: 'T2', title: t('metodo.step6Title'), desc: t('metodo.step6Desc') },
  ]

  const services = [
    {
      title: t('services.card1Title'),
      desc: t('services.card1Desc'),
      gif: marketingGifUrl,
      subServices: [
        { Icon: Target, label: t('services.card1Sub1Label'), desc: t('services.card1Sub1Desc') },
        { Icon: Palette, label: t('services.card1Sub2Label'), desc: t('services.card1Sub2Desc') },
        { Icon: BarChart2, label: t('services.card1Sub3Label'), desc: t('services.card1Sub3Desc') },
      ],
    },
    {
      title: t('services.card2Title'),
      desc: t('services.card2Desc'),
      gif: aiAutomationGifUrl,
      subServices: [
        { Icon: Bot, label: t('services.card2Sub1Label'), desc: t('services.card2Sub1Desc') },
        { Icon: Zap, label: t('services.card2Sub2Label'), desc: t('services.card2Sub2Desc') },
        { Icon: Cpu, label: t('services.card2Sub3Label'), desc: t('services.card2Sub3Desc') },
      ],
    },
    {
      title: t('services.card3Title'),
      desc: t('services.card3Desc'),
      gif: consulenzaGifUrl,
      subServices: [
        { Icon: Globe, label: t('services.card3Sub1Label'), desc: t('services.card3Sub1Desc') },
        { Icon: TrendingUp, label: t('services.card3Sub2Label'), desc: t('services.card3Sub2Desc') },
        { Icon: Mail, label: t('services.card3Sub3Label'), desc: t('services.card3Sub3Desc') },
      ],
    },
  ]

  const values = [
    {
      icon: <Target size={20} />,
      title: t('chiSono.val1Title'),
      desc: t('chiSono.val1Desc'),
    },
    {
      icon: <Zap size={20} />,
      title: t('chiSono.val2Title'),
      desc: t('chiSono.val2Desc'),
    },
    {
      icon: <Users size={20} />,
      title: t('chiSono.val3Title'),
      desc: t('chiSono.val3Desc'),
    },
  ]

  const caseStudies = [
    {
      id: 'chistes',
      title: t('casiStudio.study1Title'),
      tag: t('casiStudio.study1Tag'),
      brief: t('casiStudio.study1Brief'),
      detail: {
        headline: t('casiStudio.study1Headline'),
        body: [
          t('casiStudio.study1Body1'),
          t('casiStudio.study1Body2'),
          t('casiStudio.study1Body3'),
        ],
        gif: youtubeCaseStudyGifUrl,
        gifCaption: t('casiStudio.study1GifCaption'),
        gifLink: 'https://youtube.com/shorts/03avyCsZ8us',
        quote: t('casiStudio.study1Quote'),
      },
    },
    {
      id: 'lurumi',
      title: t('casiStudio.study2Title'),
      tag: t('casiStudio.study2Tag'),
      brief: t('casiStudio.study2Brief'),
      detail: {
        headline: t('casiStudio.study2Headline'),
        body: [
          t('casiStudio.study2Body1'),
          t('casiStudio.study2Body2'),
          t('casiStudio.study2Body3'),
        ],
        gif: lurumiGifUrl,
        gifCaption: t('casiStudio.study2GifCaption'),
        gifLink: 'https://lurumi.it',
        quote: t('casiStudio.study2Quote'),
      },
    },
  ]

  const heroLines = [t('hero.line1'), t('hero.line2'), t('hero.line3')]

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
      <AnimatePresence>
        {zstartOpen && <ZStartModal onClose={() => setZstartOpen(false)} />}
      </AnimatePresence>

      <main className="relative">

        {/* ── S1: HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        >
          <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
            <Image src={heroGifUrl} alt="" fill className="object-cover" unoptimized priority />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
          </motion.div>

          <ParticleBackground />
          <TechLines />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-5xl mx-auto text-center w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent tracking-wide">
                {t('hero.badge')}
              </span>
            </motion.div>

            <h1
              style={{ fontSize: 'clamp(2.6rem, 7.5vw, 7rem)', lineHeight: 1.05 }}
              className="font-heading font-black mb-4"
            >
              {heroLines.map((line, i) => (
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
                {t('hero.accent')}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>

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
                {t('hero.cta1')}
              </a>
              <button
                onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-foreground/20 hover:border-accent text-foreground hover:text-accent font-semibold rounded-xl transition-all text-base md:text-lg flex items-center gap-2 group"
              >
                {t('hero.cta2')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-sm text-foreground-muted"
            >
              {t('hero.microcopy')}
            </motion.p>
          </motion.div>

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

        {/* ── S2: RISULTATI ── */}
        <section id="risultati" className="py-12 bg-foreground overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-heading font-black text-2xl md:text-3xl text-center mb-8"
            >
              {t('risultati.title')}
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
              {[
                { value: 140, suffix: 'k+', label: t('risultati.stat1Label') },
                { value: 100, suffix: 'k+', label: t('risultati.stat2Label') },
                { value: null, raw: '< 1 mese', label: t('risultati.stat3Label') },
                { value: 6, suffix: '', label: t('risultati.stat4Label') },
                { value: null, raw: '🎓', label: t('risultati.stat5Label'), cert: true },
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
                      <>
                        <span className="block text-white/60 mt-0.5 text-[10px]">
                          {t('risultati.stat5Sub')}
                        </span>
                        <div className="mt-2 mx-auto w-16 h-10 rounded-lg overflow-hidden border border-white/20 opacity-70 hover:opacity-100 transition-opacity">
                          <img
                            src="/images/Certificato Florida University.PNG"
                            alt="Certificato"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="block text-accent/80 mt-1 text-[10px]">
                          {t('risultati.stat5Cta')}
                        </span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: SERVIZI ── */}
        <WaveDivider fill="#090909" flip />
        <section id="servizi" className="py-24 bg-white overflow-hidden">
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
                {t('services.title')}
              </h2>
              <p className="text-foreground-secondary text-lg max-w-xl mx-auto">
                {t('services.subtitle')}
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
                >
                  <ServiceCardItem service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4: METODO Z·START ── */}
        <WaveDivider fill="#F7F7F7" />
        <section id="metodo" className="py-24 bg-surface overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6"
                >
                  <span className="text-xs font-bold text-accent tracking-wider uppercase">
                    {t('metodo.badge')}
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
                  {t('metodo.title1')}<br />{t('metodo.title2')}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-foreground-secondary mb-10 text-base md:text-lg"
                >
                  {t('metodo.subtitle')}
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
                  className="mt-8"
                >
                  <button
                    onClick={() => setZstartOpen(true)}
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all group"
                  >
                    {t('metodo.cta')}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>

              {/* Right: AI GIF + lurumi proof */}
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
                  <img src={lurumiGifUrl} alt="lurumi.it" className="w-full h-auto" />
                  <div className="bg-foreground px-4 py-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold">{t('metodo.lurumiLabel')}</p>
                      <p className="text-white/40 text-[10px]">{t('metodo.lurumiSub')}</p>
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
        <section id="chi-sono" className="py-24 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
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
                {t('chiSono.title')}
              </h2>
              <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                {t('chiSono.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

                <motion.button
                  onClick={() => setCertOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 bg-surface border-2 border-surface-border hover:border-accent rounded-2xl transition-all shadow-sm group w-full max-w-xs"
                >
                  <Award size={20} className="text-accent shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-foreground">{t('chiSono.certLabel')}</p>
                    <p className="text-[11px] text-foreground-muted">{t('chiSono.certSub')}</p>
                  </div>
                  <ExternalLink size={14} className="text-foreground-muted group-hover:text-accent transition-colors ml-auto" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-4">
                  <AccordionCard title={t('chiSono.missionTitle')} defaultOpen>
                    <p className="text-foreground-secondary text-base leading-relaxed">
                      {t('chiSono.missionP1').split('{bold}')[0]}
                      <strong className="text-foreground">{t('chiSono.missionP1Bold')}</strong>
                      {t('chiSono.missionP1').split('{bold}')[1] ?? ''}
                    </p>
                    <p className="text-foreground-secondary text-base leading-relaxed mt-3">
                      {t('chiSono.missionP2').split('{bold}')[0]}
                      <strong className="text-foreground">
                        {t('chiSono.missionP2Bold')}
                      </strong>
                      {t('chiSono.missionP2').split('{bold}')[1] ?? ''}
                    </p>
                  </AccordionCard>

                  <AccordionCard title={t('chiSono.valoriTitle')}>
                    <div className="space-y-3">
                      {values.map((val, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-surface-border hover:border-accent/30 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                            {val.icon}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-foreground">{val.title}</p>
                            <p className="text-foreground-muted text-sm mt-0.5">{val.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionCard>
                </div>

                <div className="mt-8 space-y-2">
                  {[
                    t('chiSono.check1'),
                    t('chiSono.check2'),
                    t('chiSono.check3'),
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

        {/* ── S6: CASI STUDIO ── */}
        <WaveDivider fill="#F7F7F7" />
        <section id="casi-studio" className="py-24 bg-surface overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="font-heading font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                {t('casiStudio.title')}
              </h2>
              <p className="text-foreground-secondary text-lg max-w-xl mx-auto">
                {t('casiStudio.subtitle')}
              </p>
            </motion.div>

            {/* Cards scrollabili su mobile, griglia su desktop */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7: CTA FINALE ── */}
        <WaveDivider fill="#FE3314" />
        <section id="contatti" className="py-28 bg-accent relative overflow-hidden">
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
                {t('ctaFinale.title1')}<br />
                {t('ctaFinale.title2')}<br />
                {t('ctaFinale.title3')}
              </h2>

              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                {t('ctaFinale.subtitle')}
              </p>

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent font-black text-lg rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-all"
              >
                {t('ctaFinale.cta')}
                <ArrowRight size={22} />
              </motion.a>

              <p className="mt-5 text-white/50 text-sm">
                {t('ctaFinale.micro1')}
              </p>
              <p className="mt-2 text-white/80 text-xs font-medium">
                {t('ctaFinale.micro2')}
              </p>
              <p className="mt-1.5 text-white/40 text-xs">
                {t('ctaFinale.micro3')}
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
