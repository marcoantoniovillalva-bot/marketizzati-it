import Image from 'next/image'
import type { HomeCopy } from '../content/home-types'
import { PARTNERS, PROJECTS } from '../content/projects'
import { euro, OFFER, totalInstalments } from '../lib/offer'
import { pageHref, type Locale } from '../lib/routes'
import { getVisualCopy } from '../content/visuals'
import { CAL_LINK } from '../content/automation'
import { PAYMENTS_ENABLED } from '../lib/offer'
import { DiyVsPro, OwnershipTimeline, PriceStack, StepsRail } from './explainers-site'
import { BrowserBuild } from './mockups'
import { IconTile, iconFor } from './icons'
import { ProjectCard } from './project-card'
import { StepScene } from './step-scenes'
import { SocialLinks } from './social-links'
import { Heading, Section } from './section'
import { ArrowLink, Button, CheckList, Faq, Rich, StatCards, WhatsAppButton } from './ui'

/** The home page, all sections; copy comes from content/home-<locale>.ts. */
export function HomeView({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const buy = pageHref('prezzi', locale, '#acquista')
  // while online payments are off, the buy buttons book a call on cal.com
  const book = PAYMENTS_ENABLED ? buy : CAL_LINK
  const { hero, problem, offer, steps, services, blog, projects, about, faq, final } = copy
  const v = getVisualCopy(locale)
  return (
    <>
      <Section tint="white" className="pt-24 md:pt-32">
        <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading as="h1" label={`01 · ${hero.label}`} title={hero.title} italic={hero.italic} />
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.lead}</p>
            <p className="mt-3 max-w-xl text-xl leading-relaxed">
              <Rich text={hero.price} />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#servizi">{hero.ctaPrimary}</Button>
              <WhatsAppButton label={hero.ctaWhatsapp} />
            </div>
            <p className="mt-4 text-sm text-ink-muted">{hero.note}</p>
          </div>
          <BrowserBuild {...hero.browser} />
        </div>
      </Section>

      <ServicesSection services={services} locale={locale} />

      <Section tint="peach">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
          <Heading label={problem.label} title={problem.title} italic={problem.italic} intro={problem.text} />
          <ul className="mt-8 space-y-4">
            {problem.points.map((p) => (
              <li key={p} className="rounded-2xl bg-white/80 p-5 text-lg leading-relaxed ring-1 ring-ink/5">
                <Rich text={p} />
              </li>
            ))}
          </ul>
          </div>
          <DiyVsPro v={v} />
        </div>
      </Section>

      <Section tint="orange" id="offerta">
        <Heading label={offer.label} title={offer.title} italic={offer.italic} />
        <div className="mt-8 md:mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <PriceStack v={v} locale={locale} />
            <p className="sr-only">
              {offer.marketLabel}: {euro(OFFER.marketValue, locale)}. {offer.marketDetail}
            </p>
            <div className="rounded-3xl bg-ink p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-soft">{offer.oneOff.title}</p>
              <p className="mt-1 text-6xl font-bold tracking-tight">{euro(OFFER.oneOff, locale)}</p>
              <p className="mt-2 text-white/70">{offer.oneOff.note}</p>
            </div>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink/5">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">{offer.monthly.title}</p>
              <p className="mt-1 text-5xl font-bold tracking-tight">
                {euro(OFFER.monthly, locale)}
                <span className="text-xl font-semibold text-ink-muted"> × {OFFER.months}</span>
              </p>
              <p className="mt-2 text-ink-soft">
                {offer.monthly.note} · {euro(totalInstalments, locale)}
              </p>
            </div>
            <p className="px-2 text-xs text-ink-muted">{offer.stamp}</p>
          </div>
          <div className="rounded-3xl bg-white/90 p-7 ring-1 ring-ink/5 md:p-9">
            <p className="mb-5 text-lg font-bold">{offer.includedTitle}</p>
            <CheckList items={offer.included} />
            <p className="mt-6 rounded-2xl bg-brand-cream p-4 leading-relaxed">
              <Rich text={offer.ownership} />
            </p>
            <p className="mt-3 text-sm text-ink-muted">{offer.hosting}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href={book} external={!PAYMENTS_ENABLED}>{offer.ctaBuy}</Button>
              <span className="text-sm text-ink-muted">{offer.ctaTalk}</span>
              <WhatsAppButton label="WhatsApp" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <OwnershipTimeline v={v} locale={locale} />
        </div>
        <p className="mt-6 text-xs text-ink-muted">{offer.source}</p>
      </Section>

      <Section tint="white">
        <Heading label={steps.label} title={steps.title} italic={steps.italic} />
        <div className="mx-auto mt-8 md:mt-12 max-w-3xl">
          <StepsRail labels={v.steps} />
        </div>
        <ol className="rail mt-6 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.items.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-brand-cream p-5">
              <StepScene step={i} />
              <span className="mt-4 block font-serif text-4xl italic text-brand">{i + 1}</span>
              <p className="mt-3 text-lg font-bold">{s.title}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <StatCards stats={copy.stats} />
        </div>
      </Section>

      <Section tint="white">
        <Heading label={projects.label} title={projects.title} italic={projects.italic} intro={projects.intro} />
        <div className="rail mt-8 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} locale={locale} />
          ))}
        </div>
        <div className="mt-8">
          <ArrowLink href={pageHref('progetti', locale)}>{projects.cta}</ArrowLink>
        </div>
      </Section>

      <Section tint="navy">
        <div className="grid items-center gap-8 lg:gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-navy-soft">
              <Image src="/images/marco-villalva.png" alt="Marco Antonio Villalva" fill sizes="(min-width: 768px) 260px, 45vw" className="object-cover" />
              <figcaption className="absolute inset-x-2 bottom-2 rounded-xl bg-navy/80 px-3 py-2 text-xs font-semibold backdrop-blur">Marco · Backend &amp; AI</figcaption>
            </figure>
            <figure className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-navy-soft">
              <Image src="/images/team/ritratto-gabriela-BLiCr7F7.webp" alt="Gabriela Villalva" fill sizes="(min-width: 768px) 260px, 45vw" className="object-cover" />
              <figcaption className="absolute inset-x-2 bottom-2 rounded-xl bg-navy/80 px-3 py-2 text-xs font-semibold backdrop-blur">Gabriela · Design &amp; Dev</figcaption>
            </figure>
          </div>
          <div>
            <Heading dark label={about.label} title={about.title} italic={about.italic} intro={about.text} />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Image src="/images/Certificato Florida University.PNG" alt={about.badges[0]} width={120} height={85} className="h-14 w-auto rounded-lg bg-white p-1" />
              <ul className="flex flex-wrap gap-2">
                {about.badges.map((b) => (
                  <li key={b} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{about.partnersTitle}</p>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-lg font-semibold text-white/80">
              {PARTNERS.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-soft">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
            <SocialLinks tone="dark" className="mt-6" />
            <div className="mt-8">
              <Button href={pageHref('chiSono', locale)} variant="light">
                {about.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tint="peach">
        <Heading title={blog.title} intro={blog.text} />
        <div className="mt-6"><ArrowLink href={pageHref('blog', locale)}>{blog.cta}</ArrowLink></div>
      </Section>

      <Section tint="cream">
        <Heading label={faq.label} title={faq.title} italic={faq.italic} />
        <div className="mt-6 md:mt-10">
          <Faq items={faq.items} />
          <div className="mt-6"><ArrowLink href={pageHref('prezzi', locale)}>{faq.linkLabel}</ArrowLink></div>
        </div>
      </Section>

      <Section tint="orange">
        <div className="text-center">
          <Heading center title={final.title} italic={final.italic} intro={final.text} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={book} external={!PAYMENTS_ENABLED}>{final.ctaBuy}</Button>
            <WhatsAppButton label={final.ctaWhatsapp} />
          </div>
        </div>
      </Section>
    </>
  )
}

function ServicesSection({ services, locale }: { services: HomeCopy['services']; locale: Locale }) {
  return (
    <Section tint="navy" id="servizi">
      <Heading dark label={services.label} title={services.title} italic={services.italic} />
      <div className="rail mt-8 grid gap-4 md:grid-cols-2">
        {services.items.map((item) => (
          <article key={item.key} className="flex gap-4 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-6">
            <IconTile icon={iconFor(item.title + ' ' + item.tag)} dark />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-soft">{item.tag}</p>
              <h3 className="mt-1.5 text-lg font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.text}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {item.links.map((link) => <a key={link.key} className="text-sm font-semibold text-brand-soft underline" href={pageHref(link.key, locale)}>{link.label} ?</a>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
