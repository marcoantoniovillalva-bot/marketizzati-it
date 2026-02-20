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

            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-8 mb-16 last:mb-0">
                {/* Letter circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center shrink-0">
                  <span className="text-accent font-heading font-bold text-display-xs">{step.letter}</span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="text-body-xs text-accent font-medium uppercase tracking-wider">
                    {t(`phases.step${step.number}`)}
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

          {/* Timelines Box */}
          <div className="mt-16 rounded-2xl border border-surface-border bg-surface-elevated p-8">
            <h3 className="font-heading text-display-xs mb-6">{t('timelines.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <p className="text-accent font-heading font-bold text-display-xs">4-6</p>
                <p className="text-body-sm text-foreground-secondary mt-1">{t('timelines.weeks')}</p>
                <p className="text-body-sm font-semibold mt-3">Launchpad</p>
                <p className="text-body-xs text-foreground-muted mt-1">Z + S + T</p>
              </div>
              <div className="text-center p-4 border-x border-surface-border">
                <p className="text-accent font-heading font-bold text-display-xs">8-12</p>
                <p className="text-body-sm text-foreground-secondary mt-1">{t('timelines.weeks')}</p>
                <p className="text-body-sm font-semibold mt-3">Scale</p>
                <p className="text-body-xs text-foreground-muted mt-1">Z + S + T + A</p>
              </div>
              <div className="text-center p-4">
                <p className="text-accent font-heading font-bold text-display-xs">12-16</p>
                <p className="text-body-sm text-foreground-secondary mt-1">{t('timelines.weeks')}</p>
                <p className="text-body-sm font-semibold mt-3">Dominate</p>
                <p className="text-body-xs text-foreground-muted mt-1">{t('timelines.allPhases')}</p>
              </div>
            </div>
            <p className="mt-6 text-body-xs text-foreground-muted text-center">
              {t('timelines.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        ctaText={tCommon('cta.bookMy')}
        ctaHref="/consulenza"
        microcopy={t('microcopy')}
      />
    </>
  )
}
