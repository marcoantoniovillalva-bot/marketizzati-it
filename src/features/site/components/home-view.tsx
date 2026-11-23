import Image from 'next/image'
import { getAllPosts } from '@/features/blog/posts'
import { HomeCarousel } from '@/features/blog/components/home-carousel'
import { FUNNEL } from '../content/home-funnel'
import type { HomeCopy } from '../content/home-types'
import { PROJECTS } from '../content/projects'
import { CAL_LINK } from '../content/automation'
import { SOCIAL } from '../lib/links'
import { pageHref, type Locale } from '../lib/routes'
import { FunnelScene } from './funnel-scenes'
import { Heading, Section } from './section'
import { ArrowLink, Button, Faq, WhatsAppButton } from './ui'

export async function HomeView({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const c = FUNNEL[locale]
  const posts = (await getAllPosts(locale)).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10)
  const projects = ['cargo-service', 'aigent', 'zernflow'].flatMap((id) => PROJECTS.filter((p) => p.id === id))
  return <>
    <Section tint="white" className="pt-24 md:pt-32"><div className="grid items-center gap-8 lg:grid-cols-2"><div><Heading as="h1" label={copy.hero.label} title={copy.hero.title} italic={copy.hero.italic} /><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{c.lead}</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#percorso">{c.path}</Button><WhatsAppButton label={copy.hero.ctaWhatsapp} /></div></div><FunnelScene /></div></Section>
    <Section tint="cream" id="percorso"><Heading label="Z-START" title={c.path} /><ol className="relative mt-8 grid gap-5 before:absolute before:bottom-0 before:left-7 before:top-0 before:border-l-2 before:border-brand/30 md:grid-cols-2 md:before:hidden lg:grid-cols-4 lg:before:block lg:before:bottom-auto lg:before:left-0 lg:before:right-0 lg:before:top-7 lg:before:border-l-0 lg:before:border-t-2">{c.steps.map((step, i) => <li key={step.title} className="relative rounded-3xl bg-white p-5 ring-1 ring-ink/5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">{i + 1}</span><h3 className="mt-4 text-xl font-bold">{step.title}</h3><p className="mt-3 min-h-20 text-sm leading-relaxed text-ink-soft">{step.text}</p><div className="mt-4"><FunnelScene step={i} /></div><div className="mt-4 flex flex-wrap gap-3">{step.links.map((link) => <ArrowLink key={link.key} href={pageHref(link.key, locale)}>{link.label}</ArrowLink>)}</div></li>)}</ol><p className="mt-6 text-sm font-semibold text-ink-soft">{c.method}</p></Section>
    <Section tint="white"><Heading title={c.work} /><div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">{projects.map((project, i) => <article key={project.id} className="w-[85%] shrink-0 snap-center overflow-hidden rounded-3xl bg-brand-cream sm:w-[46%] lg:w-[31%]"><div className="relative h-52 bg-white"><Image src={project.kind === 'site' ? project.desk : '/images/progetti/tour/zern-1-publish.webp'} alt={project.name} fill sizes="(min-width: 1024px) 31vw, 85vw" className="object-cover object-top" /></div><div className="p-5"><p className="text-xs font-bold uppercase text-brand-ink">{[locale === 'it' ? 'Sito web' : locale === 'es' ? 'Página web' : 'Website', locale === 'it' ? 'Agente AI' : locale === 'es' ? 'Agente IA' : 'AI agent', locale === 'it' ? 'Automazione' : locale === 'es' ? 'Automatización' : 'Automation'][i]}</p><h3 className="mt-2 text-xl font-bold">{project.name}</h3><p className="mt-2 line-clamp-2 text-sm text-ink-soft">{project.text[locale]}</p></div></article>)}</div><div className="mt-5"><ArrowLink href={pageHref('progetti', locale)}>{c.all}</ArrowLink></div></Section>
    <Section tint="peach"><Heading title={c.why} /><div className="mt-8 grid gap-4 md:grid-cols-3">{c.reasons.map((reason) => <p key={reason} className="rounded-3xl bg-white p-6 text-lg font-semibold">{reason}</p>)}</div><div className="mt-8"><ArrowLink href={pageHref('siti', locale)}>{c.teaser}</ArrowLink></div></Section>
    <Section tint="cream"><Heading title={c.guides} /><div className="mt-8"><HomeCarousel posts={posts} locale={locale} previous={c.previous} next={c.next} /></div><div className="mt-5 flex flex-wrap gap-6"><ArrowLink href={pageHref('blog', locale)}>{copy.blog.cta}</ArrowLink><a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="font-semibold underline">TikTok ↗</a></div></Section>
    <Section tint="white"><Heading title={c.how} /><ol className="mt-8 grid gap-4 md:grid-cols-4">{c.process.map((item, i) => <li key={item} className="rounded-3xl bg-brand-cream p-6"><span className="font-serif text-4xl italic text-brand">{i + 1}</span><p className="mt-3">{item}</p></li>)}</ol></Section>
    <Section tint="cream"><Heading title={copy.faq.title} italic={copy.faq.italic} /><div className="mt-8"><Faq items={c.faq} /></div></Section>
    <Section tint="orange"><div className="text-center"><Heading center title={c.final} /><div className="mt-8 flex flex-wrap justify-center gap-3"><Button href={CAL_LINK} external>{c.book}</Button><WhatsAppButton label={copy.final.ctaWhatsapp} /></div></div></Section>
  </>
}
