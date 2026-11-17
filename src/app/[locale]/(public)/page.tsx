import type { Metadata } from 'next'
import { HomeView } from '@/features/site/components/home-view'
import { JsonLdBlocks } from '@/features/site/components/json-ld'
import { getHomeCopy } from '@/features/site/content/home'
import { BASE_URL } from '@/features/site/lib/links'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale } from '@/features/site/lib/routes'
import { faqPage, professionalService, websiteOffer } from '@/features/site/lib/schema'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const { meta } = getHomeCopy(l)
  return pageMetadata('home', l, meta.title, meta.description)
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const copy = getHomeCopy(l)
  return (
    <>
      <JsonLdBlocks blocks={[professionalService(l), websiteOffer(l, copy.meta.title, `${BASE_URL}/${l}`), faqPage(copy.faq.items)]} />
      <HomeView copy={copy} locale={l} />
    </>
  )
}
