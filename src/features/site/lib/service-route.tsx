import type { Metadata } from 'next'
import { JsonLdBlocks } from '../components/json-ld'
import { ServiceView } from '../components/service-view'
import { getServiceCopy, type ServicePageKey } from '../content/service-pages'
import { BASE_URL } from './links'
import { pageMetadata } from './metadata'
import { isLocale, pageHref } from './routes'
import { breadcrumb, faqPage, professionalService, websiteOffer } from './schema'

type Props = { params: Promise<{ locale: string }> }

/** generateMetadata + page component for a service/local page, so each route file is two lines. */
export function serviceRoute(key: ServicePageKey) {
  const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { locale } = await params
    const l = isLocale(locale) ? locale : 'it'
    const { meta } = getServiceCopy(key, l)
    return pageMetadata(key, l, meta.title, meta.description)
  }
  const Page = async ({ params }: Props) => {
    const { locale } = await params
    const l = isLocale(locale) ? locale : 'it'
    const copy = getServiceCopy(key, l)
    const url = `${BASE_URL}${pageHref(key, l)}`
    const blocks = [professionalService(l), faqPage(copy.faq), breadcrumb(l, copy.title, url)]
    if (copy.cta === 'buy') blocks.push(websiteOffer(l, copy.meta.title, url))
    return (
      <>
        <JsonLdBlocks blocks={blocks} />
        <ServiceView copy={copy} locale={l} pageKey={key} />
      </>
    )
  }
  return { generateMetadata, Page }
}
