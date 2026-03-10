import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { PenTool } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })
  return { title: t('blog.title'), description: t('blog.description') }
}

export default function BlogPage() {
  const t = useTranslations('blog')

  return (
    <section className="pt-32 pb-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
          <PenTool size={28} className="text-accent" />
        </div>
        <h1 className="font-heading text-display-lg">{t('hero.title')}</h1>
        <p className="mt-6 text-body-lg text-foreground-secondary">{t('hero.subtitle')}</p>
        <div className="mt-12 p-8 bg-surface-elevated border border-surface-border rounded-2xl">
          <p className="text-body-md text-foreground-secondary">{t('comingSoon')}</p>
        </div>
      </div>
    </section>
  )
}
