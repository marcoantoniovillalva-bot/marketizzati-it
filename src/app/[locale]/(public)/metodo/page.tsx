import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { CTABanner } from '@/components/shared/cta-banner'
import { siteConfig } from '@/config/siteConfig'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('method.title'), description: t('method.description') }
}

export default function MetodoPage() {
  const t = useTranslations('method')
  const tCommon = useTranslations('common')

  const steps = siteConfig.method.steps

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-display-lg md:text-display-xl">{t('hero.title')}</h1>
          <p className="mt-6 text-body-lg text-foreground-secondary max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-surface-border" />

            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-8 mb-16 last:mb-0">
                {/* Letter circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center shrink-0">
                  <span className="text-accent font-heading font-bold text-display-xs">{step.letter}</span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="text-body-xs text-accent font-medium uppercase tracking-wider">
                    {step.duration}
                  </span>
                  <h3 className="font-heading text-display-xs mt-2">
                    {t(`step${step.number}.title`)}
                  </h3>
                  <p className="mt-3 text-body-md text-foreground-secondary">
                    {t(`step${step.number}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        ctaText={tCommon('cta.bookMy')}
        ctaHref="/consulenza"
        microcopy="30 minuti · Senza impegno · 100% personalizzata"
      />
    </>
  )
}
