import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { CheckCircle, Users } from 'lucide-react'
import { ConsultationForm } from './consultation-form'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('consultation.title'), description: t('consultation.description') }
}

export default function ConsulenzaPage() {
  const t = useTranslations('consultation')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-display-lg md:text-display-xl">{t('hero.title')}</h1>
          <p className="mt-6 text-body-lg text-foreground-secondary max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-display-xs text-center mb-8">{t('benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['benefit1', 'benefit2', 'benefit3'] as const).map((key, i) => (
              <div key={key} className="flex items-start gap-4 bg-surface-elevated border border-surface-border rounded-xl p-6">
                <CheckCircle size={24} className="text-accent shrink-0 mt-0.5" />
                <p className="text-body-md">{t(`benefits.${key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-xl mx-auto px-6">
          <ConsultationForm />
          {/* Scarcity */}
          <div className="mt-8 flex items-center justify-center gap-2 text-body-sm text-foreground-muted">
            <Users size={16} />
            <span>{t('scarcity', { max: 10 })}</span>
          </div>
        </div>
      </section>

{/* Testimonials - Coming Soon */}
    </>
  )
}
