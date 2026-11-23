import { getAllPosts } from '@/features/blog/posts'
import { HomeCarousel } from '@/features/blog/components/home-carousel'
import { FUNNEL } from '../content/home-funnel'
import type { HomeCopy } from '../content/home-types'
import { PROJECTS } from '../content/projects'
import { CAL_LINK } from '../content/automation'
import { pageHref, type Locale } from '../lib/routes'
import { FunnelScene } from './funnel-scenes'
import { CardMotion } from './motion/card-motion'
import { ProjectCard } from './project-card'
import { AppTour } from './app-tour'
import { Heading, Section } from './section'
import { ArrowLink, Button, Faq, WhatsAppButton } from './ui'

const row = 'flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:overflow-visible'
const card = 'w-[85%] shrink-0 snap-start md:w-auto'

export async function HomeView({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const c = FUNNEL[locale]
  const posts = (await getAllPosts(locale)).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10)
  const projects = ['cargo-service', 'aigent', 'zernflow'].flatMap((id) => PROJECTS.filter((p) => p.id === id))
  const hint = locale === 'it' ? 'Scorri →' : locale === 'es' ? 'Desliza →' : 'Swipe →'
  return <>
    <Section tint="white" className="pt-24 md:pt-32"><div className="grid items-center gap-8 lg:grid-cols-2"><div><Heading as="h1" label={copy.hero.label} title={copy.hero.title} italic={copy.hero.italic} /><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{c.lead}</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#percorso">{c.path}</Button><WhatsAppButton label={copy.hero.ctaWhatsapp} /></div></div><FunnelScene /></div></Section>
    <Section tint="navy" id="percorso"><Heading dark label="Z-START" title={c.path} /><p className="mt-4 text-sm text-white/70 md:hidden">{hint}</p><ol className={`${row} mt-4 md:grid-cols-2 lg:grid-cols-4`}>{c.steps.map((step, i) => <li key={step.title} className={`${card} rounded-3xl border border-white/10 bg-white/5 p-5`}><span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">{i + 1}</span><h3 className="mt-4 text-xl font-bold">{step.title}</h3><p className="mt-3 min-h-20 text-sm leading-relaxed text-white/80">{step.text}</p><div className="mt-4"><FunnelScene step={i} /></div><div className="mt-4 flex flex-wrap gap-3 text-brand-soft">{step.links.map((link) => <ArrowLink key={link.key} href={pageHref(link.key, locale)}>{link.label}</ArrowLink>)}</div></li>)}</ol><p className="mt-6 text-sm font-semibold text-white/80">{c.method}</p></Section>
    <Section tint="white"><Heading title={c.work} /><p className="mt-4 text-sm text-ink-soft md:hidden">{hint}</p><div className={`${row} mt-4 md:grid-cols-3`}>{projects.map((project) => <div key={project.id} className={card}>{project.tour ? <article className="h-full overflow-hidden rounded-3xl bg-brand-cream p-5"><AppTour frames={project.tour.frames} device={project.tour.device} name={project.name} locale={locale} /><h3 className="mt-4 text-xl font-bold">{project.name}</h3><p className="mt-2 text-sm text-ink-soft">{project.text[locale]}</p></article> : <ProjectCard project={project} locale={locale} />}</div>)}</div><div className="mt-5"><ArrowLink href={pageHref('progetti', locale)}>{c.all}</ArrowLink></div></Section>
    <Section tint="navy"><Heading dark title={c.why} /><p className="mt-4 text-sm text-white/70 md:hidden">{hint}</p><div className={`${row} mt-4 md:grid-cols-3`}>{c.reasons.map((reason, i) => <div key={reason} className={`${card} rounded-3xl border border-white/10 bg-white/5 p-6`}><CardMotion kind="reason" index={i} locale={locale} /><p className="mt-4 text-lg font-semibold">{reason}</p></div>)}</div><div className="mt-8 text-brand-soft"><ArrowLink href={pageHref('siti', locale)}>{c.teaser}</ArrowLink></div></Section>
    <Section tint="cream"><Heading title={c.guides} /><div className="mt-8"><HomeCarousel posts={posts} locale={locale} previous={c.previous} next={c.next} /></div><div className="mt-5"><ArrowLink href={pageHref('blog', locale)}>{copy.blog.cta}</ArrowLink></div></Section>
    <Section tint="navy"><Heading dark title={c.how} /><p className="mt-4 text-sm text-white/70 md:hidden">{hint}</p><ol className={`${row} mt-4 md:grid-cols-4`}>{c.process.map((item, i) => <li key={item} className={`${card} rounded-3xl border border-white/10 bg-white/5 p-6`}><CardMotion kind="process" index={i} locale={locale} /><span className="mt-4 block font-serif text-4xl italic text-brand-soft">{i + 1}</span><p className="mt-3">{item}</p></li>)}</ol></Section>
    <Section tint="cream"><Heading title={copy.faq.title} italic={copy.faq.italic} /><div className="mt-8"><Faq items={c.faq} /></div></Section>
    <Section tint="navy"><div className="text-center"><Heading dark center title={c.final} /><div className="mt-8 flex flex-wrap justify-center gap-3"><Button href={CAL_LINK} external>{c.book}</Button><WhatsAppButton label={copy.final.ctaWhatsapp} /></div></div></Section>
  </>
}
