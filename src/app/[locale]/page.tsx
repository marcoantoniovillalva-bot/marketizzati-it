'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ParticleBackground } from '@/components/shared/particle-background'
import { TechLines } from '@/components/shared/tech-lines'
import { VideoEmbed } from '@/components/shared/video-embed'
import { ArrowRight, Sparkles, MessageCircle, Search, LayoutDashboard, Cpu, Target, Layers, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations('home')
  const tServices = useTranslations('services')
  const tCommon = useTranslations('common')
  
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Navbar />
      <ParticleBackground />
      
      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          <TechLines />
          
          <motion.div 
            style={{ y: y1, opacity }}
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Il Futuro del Marketing è Qui</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              Trasforma la tua <span className="text-accent">Azienda</span> <br />
              con l'Intelligenza Artificiale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl text-foreground-secondary max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/consulenza"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all text-lg hover:shadow-glow-red hover:scale-105"
              >
                {tCommon('cta.bookMy')}
              </Link>
              <Link
                href="/metodo"
                className="px-8 py-4 border-2 border-foreground text-foreground hover:border-accent hover:text-accent font-semibold rounded-xl transition-all text-lg flex items-center gap-2"
              >
                Scopri il Metodo <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Video CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <VideoEmbed canvaId="DAHDu6kH-RQ/UrVpybRPs4KNAXR8ZSqs2g" className="rounded-2xl shadow-elevated" />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('ecosystem.title')}
              </h2>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                {t('ecosystem.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Sparkles size={28} />, step: t('ecosystem.step1'), desc: t('ecosystem.step1Desc'), delay: 0 },
                { icon: <MessageCircle size={28} />, step: t('ecosystem.step2'), desc: t('ecosystem.step2Desc'), delay: 0.1 },
                { icon: <Search size={28} />, step: t('ecosystem.step3'), desc: t('ecosystem.step3Desc'), delay: 0.2 },
                { icon: <LayoutDashboard size={28} />, step: t('ecosystem.step4'), desc: t('ecosystem.step4Desc'), delay: 0.3 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="relative bg-white border-2 border-surface-border rounded-3xl p-8 text-center hover:border-accent hover:shadow-elevated transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <p className="text-foreground-secondary">{item.desc}</p>
                  {i < 3 && (
                    <ChevronRight size={24} className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-foreground-muted" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Cpu size={32} />, title: 'AI Automation', desc: 'Automazione intelligente dei processi', video: 'DAHDvAerLQ8/QztHtqKP4JNH9IlrdHCCTg' },
                { icon: <MessageCircle size={32} />, title: 'Marketing Digital', desc: 'Strategie di marketing innovative', video: 'DAHDvJGSZIs/ZCro6nZKTcNJ1AbU6sRr7g' },
                { icon: <Search size={32} />, title: 'SEO & Content', desc: 'Posizionamento e contenuti', video: 'DAHDvJGSZIs/ZCro6nZKTcNJ1AbU6sRr7g' },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden border-2 border-surface-border hover:border-accent hover:shadow-elevated transition-all"
                >
                  <div className="aspect-video">
                    <VideoEmbed canvaId={service.video} className="h-full" />
                  </div>
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-foreground-secondary mb-4">{service.desc}</p>
                    <Link href="/servizi" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Scopri di più <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulenza Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Vuoi trasformare il tuo business?
                </h2>
                <p className="text-xl text-foreground-secondary mb-8">
                  Prenota una consulenza gratuita e scopri come l'AI può rivoluzionare la tua azienda.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Analisi gratuita del tuo business', 'Strategia personalizzata', 'Preventivo senza impegno'].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <ArrowRight size={14} className="text-accent" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="/consulenza"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:shadow-glow-red transition-all"
                >
                  Prenota Consulenza <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-elevated"
              >
                <VideoEmbed canvaId="DAHDvKJMA5g/rK-FY_l-p166ANNHHdPvdQ" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <TechLines />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pronto a iniziare?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Unisciti alle aziende che hanno già trasformato il proprio business con Marketizzati.
              </p>
              <Link
                href="/consulenza"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-accent font-bold rounded-xl hover:scale-105 transition-transform"
              >
                Inizia Ora <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
