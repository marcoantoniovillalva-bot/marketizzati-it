import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/shared/section-heading'
import { ServiceCard } from '@/components/shared/service-card'
import { CTABanner } from '@/components/shared/cta-banner'
import { siteConfig } from '@/config/siteConfig'
import { Check } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('services.title'), description: t('services.description') }
}

const packageKeys = ['launchpad', 'scale', 'dominate'] as const
const featureCounts = { launchpad: 4, scale: 5, dominate: 6 }

export default function ServiziPage() {
  const t = useTranslations('services')
  const tCommon = useTranslations('common')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-display-lg md:text-display-xl">{t('hero.title')}</h1>
          <p className="mt-6 text-body-lg text-foreground-secondary max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={t(`${service.id === 'ai-automation' ? 'ai' : service.id}.title`)}
                description={t(`${service.id === 'ai-automation' ? 'ai' : service.id}.description`)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t('pricing.title')} subtitle={t('pricing.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageKeys.map((key, i) => (
              <div
                key={key}
                className={`rounded-2xl p-8 border ${
                  i === 1
                    ? 'border-accent bg-surface-elevated shadow-glow-red'
                    : 'border-surface-border bg-surface-elevated'
                }`}
              >
                <h3 className="font-heading text-display-xs">{t(`pricing.${key}.name`)}</h3>
                <p className="mt-2 text-body-sm text-foreground-secondary">{t(`pricing.${key}.description`)}</p>
                <ul className="mt-8 space-y-3">
                  {Array.from({ length: featureCounts[key] }, (_, j) => (
                    <li key={j} className="flex items-center gap-3 text-body-sm text-foreground-secondary">
                      <Check size={16} className="text-accent shrink-0" />
                      {t(`pricing.${key}.features.${j}`)}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 rounded-lg font-semibold text-body-sm transition-colors ${
                  i === 1
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'border border-surface-border text-foreground hover:bg-surface'
                }`}>
                  {t(`pricing.${key}.cta`)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={tCommon('cta.bookConsultation')}
        subtitle=""
        ctaText={tCommon('cta.bookMy')}
        ctaHref="/consulenza"
        microcopy={tCommon('cta.microcopy')}
      />
    </>
  )
}
