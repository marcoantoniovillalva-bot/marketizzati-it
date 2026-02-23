import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionHeading } from '@/components/shared/section-heading'
import { ServiceCard } from '@/components/shared/service-card'
import { CTABanner } from '@/components/shared/cta-banner'
import { CookieBanner } from '@/components/shared/cookie-banner'
import { siteConfig } from '@/config/siteConfig'
import { ArrowRight, Sparkles, MessageCircle, Search, LayoutDashboard, Cpu, Target, Layers } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations('home')
  const tServices = useTranslations('services')
  const tCommon = useTranslations('common')

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
          <div className="max-w-4xl">
            <h1 className="font-heading text-display-lg md:text-display-xl lg:text-display-2xl leading-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-body-lg md:text-body-xl text-foreground-secondary max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consulenza"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all text-body-lg shadow-glow-red hover:shadow-glow-red-lg"
              >
                {tCommon('cta.bookMy')}
              </Link>
            </div>
            <p className="mt-4 text-body-sm text-foreground-muted">
              {t('cta.microcopy')}
            </p>
          </div>

          {/* Method Proof */}
          <div className="mt-16 inline-flex items-center gap-3 bg-surface-elevated border border-surface-border rounded-full px-6 py-3">
            <Cpu size={18} className="text-accent" />
            <span className="text-body-sm text-foreground-secondary">{t('hero.socialProof')}</span>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title={t('ecosystem.title')}
              subtitle={t('ecosystem.subtitle')}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Sparkles size={28} />, step: t('ecosystem.step1'), desc: t('ecosystem.step1Desc') },
                { icon: <MessageCircle size={28} />, step: t('ecosystem.step2'), desc: t('ecosystem.step2Desc') },
                { icon: <Search size={28} />, step: t('ecosystem.step3'), desc: t('ecosystem.step3Desc') },
                { icon: <LayoutDashboard size={28} />, step: t('ecosystem.step4'), desc: t('ecosystem.step4Desc') },
              ].map((item, i) => (
                <div key={i} className="relative bg-surface-elevated border border-surface-border rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-display-xs mb-2">{item.step}</h3>
                  <p className="text-body-sm text-foreground-secondary">{item.desc}</p>
                  {i < 3 && (
                    <ArrowRight size={20} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-foreground-muted" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title={t('services.title')}
              subtitle={t('services.subtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={tServices(`${service.id === 'ai-automation' ? 'ai' : service.id}.title`)}
                  description={tServices(`${service.id === 'ai-automation' ? 'ai' : service.id}.description`)}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Method Preview */}
        <section className="section-padding bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionHeading
              title={t('method.title')}
              subtitle={t('method.subtitle')}
            />
            <Link
              href="/metodo"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all text-body-lg"
            >
              {t('method.cta')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Why It Works */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              title={t('whyItWorks.title')}
              subtitle={t('whyItWorks.subtitle')}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Target size={28} />, title: t('whyItWorks.pillar1'), desc: t('whyItWorks.pillar1Desc') },
                { icon: <Cpu size={28} />, title: t('whyItWorks.pillar2'), desc: t('whyItWorks.pillar2Desc') },
                { icon: <Layers size={28} />, title: t('whyItWorks.pillar3'), desc: t('whyItWorks.pillar3Desc') },
              ].map((item, i) => (
                <div key={i} className="bg-surface-elevated border border-surface-border rounded-2xl p-8 text-center hover:border-accent/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-display-xs mb-3">{item.title}</h3>
                  <p className="text-body-sm text-foreground-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTABanner
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          ctaText={tCommon('cta.bookMy')}
          ctaHref="/consulenza"
          microcopy={t('cta.microcopy')}
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
