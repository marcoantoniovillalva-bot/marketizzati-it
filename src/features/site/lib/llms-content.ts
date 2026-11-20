import { getAllPosts } from '@/features/blog/posts'
import { CAL_LINK } from '../content/automation'
import { getHomeCopy } from '../content/home'
import { sitePlans, adsPlans, automationPlans, socialPlans } from '../content/plans'
import { prezziIt } from '../content/prezzi-it'
import { PROJECTS } from '../content/projects'
import { getServiceCopy, isServicePage } from '../content/service-pages'
import { BASE_URL, BUSINESS, WA_LINK } from './links'
import { PAGES, pageHref, type PageKey } from './routes'

const url = (key: PageKey) => `${BASE_URL}${pageHref(key, 'it')}`
const keys = (Object.keys(PAGES) as PageKey[]).filter(isServicePage)
const link = (title: string, href: string, description: string) => `- [${title}](${href}): ${description}`

function plans(): string {
  return [...sitePlans('it'), ...adsPlans('it'), ...automationPlans('it'), ...socialPlans('it')]
    .map((p) => `- ${p.title}: ${p.price}${typeof p.price === 'number' ? ' €' : ''} ${p.suffix ?? ''}. ${p.note ?? ''} ${(p.points ?? []).join('; ')}. ${p.addon ?? ''}`)
    .join('\n')
}

function overview(): string {
  const home = getHomeCopy('it')
  return `# Marketizzati\n\n> ${home.meta.description}\n\n## Chi è e per chi lavora\n\n${home.about.text}\n${home.hero.lead}\nZone: ${BUSINESS.areaServed.join(', ')} e Italia.\n\n## Offerte e prezzi\n\n${plans()}\n${home.offer.included.join('; ')}.\n${home.offer.ownership} ${home.offer.hosting} ${home.offer.stamp}\n${prezziIt.ads.text}\n\n## Perché scegliere Marketizzati\n\n${home.problem.text}\n${home.steps.items.map((item) => `- ${item.title}: ${item.text}`).join('\n')}\n\n## Progetti\n\n${PROJECTS.map((p) => link(p.name, p.kind === 'site' ? p.url : url('progetti'), p.text.it)).join('\n')}\n\n## Prenotare e contatti\n\n- [Prenota una call](${CAL_LINK})\n- [WhatsApp](${WA_LINK})\n- Email: marco.villalva@marketizzati.it\n- P. IVA: ${BUSINESS.vat}\n\n## Servizi e zone\n\n${keys.map((key) => { const c = getServiceCopy(key, 'it'); return link(c.meta.title, url(key), c.meta.description) }).join('\n')}\n\n## Pagine principali\n\n${(['home', 'prezzi', 'progetti', 'chiSono', 'contatti', 'condizioni', 'blog'] as PageKey[]).map((key) => `- [${key}](${url(key)})`).join('\n')}\n`
}

function fullPages(): string {
  return keys.map((key) => {
    const c = getServiceCopy(key, 'it')
    const blocks = c.blocks.map((b) => `### ${b.title} ${b.italic ?? ''}\n\n${b.text ?? ''}\n${(b.points ?? []).join('\n')}\n${(b.cards ?? []).map((card) => `${card.title}: ${card.text}`).join('\n')}`).join('\n\n')
    return `## ${c.title} ${c.italic}\n\n${url(key)}\n\n${c.answer}\n\n${blocks}\n\n${c.faq.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}`
  }).join('\n\n')
}

export async function llmsContent(full: boolean): Promise<string> {
  const posts = await getAllPosts('it')
  const blog = posts.map((p) => link(p.title, `${BASE_URL}/it/blog/${p.slug}`, p.description)).join('\n')
  const languages = (['es', 'en'] as const).map((l) => `## ${l.toUpperCase()}\n\n${getHomeCopy(l).meta.description}\n${BASE_URL}/${l}`).join('\n\n')
  const home = getHomeCopy('it')
  const faqs = [...home.faq.items, ...prezziIt.faq.items].map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')
  return `${overview()}\n## Blog e risorse\n\n${blog}\n\n${languages}\n${full ? `\n## Home e prezzi\n\n${home.hero.lead}\n${home.about.text}\n${prezziIt.answer}\n\n${faqs}\n\n${fullPages()}` : ''}\n`
}
