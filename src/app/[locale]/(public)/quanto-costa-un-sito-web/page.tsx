import type { Metadata } from 'next'
import { JsonLdBlocks } from '@/features/site/components/json-ld'
import { PrezziView } from '@/features/site/components/prezzi-view'
import { getHomeCopy } from '@/features/site/content/home'
import { prezziIt } from '@/features/site/content/prezzi-it'
import { prezziEs } from '@/features/site/content/prezzi-es'
import { prezziEn } from '@/features/site/content/prezzi-en'
import { BASE_URL } from '@/features/site/lib/links'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, pageHref } from '@/features/site/lib/routes'
import { faqPage, professionalService, websiteOffer } from '@/features/site/lib/schema'

type Props = { params: Promise<{ locale: string }> }


const getCopy = (locale: 'it' | 'es' | 'en') => ({ it: prezziIt, es: prezziEs, en: prezziEn })[locale]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const { meta } = getCopy(l)
  return pageMetadata('prezzi', l, meta.title, meta.description)
}

export default async function PricesPage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const copy = getCopy(l)
  return (
    <>
      <JsonLdBlocks blocks={[professionalService(l), websiteOffer(l, copy.title, `${BASE_URL}${pageHref('prezzi', l)}`), faqPage(copy.faq.items)]} />
      <PrezziView copy={copy} offer={getHomeCopy(l).offer} locale={l} />
    </>
  )
}


