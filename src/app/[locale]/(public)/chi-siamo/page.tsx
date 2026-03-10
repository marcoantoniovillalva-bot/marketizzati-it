import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABanner } from '@/components/shared/cta-banner'
import { Eye, Target, Lightbulb, Users } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('about.title'), description: t('about.description') }
}

const values = [
  { key: 'transparency', icon: Eye },
  { key: 'results', icon: Target },
  { key: 'innovation', icon: Lightbulb },
  { key: 'ecosystem', icon: Users },
]

// Placeholder team
const team = [
  { name: 'Founder', role: 'CEO & Strategist' },
  { name: 'Team Member', role: 'Head of Marketing' },
  { name: 'Team Member', role: 'Tech Lead' },
]

export default function ChiSiamoPage() {
  const t = useTranslations('about')
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

      {/* Mission */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-display-md">{t('mission.title')}</h2>
          <p className="mt-6 text-body-xl text-foreground-secondary leading-relaxed">{t('mission.text')}</p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t('values.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(({ key, icon: Icon }) => (
              <div key={key} className="bg-surface-elevated border border-surface-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-display-xs mb-2">{t(`values.${key}`)}</h3>
                <p className="text-body-md text-foreground-secondary">{t(`values.${key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title={t('team.title')} subtitle={t('team.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-full bg-surface-elevated border border-surface-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-foreground-muted text-body-xs">Foto</span>
                </div>
                <h3 className="font-heading text-body-lg font-semibold">{member.name}</h3>
                <p className="text-body-sm text-foreground-secondary">{member.role}</p>
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
      />
    </>
  )
}
