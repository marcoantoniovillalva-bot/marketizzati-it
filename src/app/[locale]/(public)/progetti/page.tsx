import type { Metadata } from 'next'
import { Lock } from 'lucide-react'
import { AppTour } from '@/features/site/components/app-tour'
import { LiveFrame } from '@/features/site/components/live-frame'
import { ProjectCard } from '@/features/site/components/project-card'
import { Heading, Section } from '@/features/site/components/section'
import { WhatsAppButton } from '@/features/site/components/ui'
import { PROJECTS, type SiteProject } from '@/features/site/content/projects'
import { pageMetadata } from '@/features/site/lib/metadata'
import { isLocale, type Locale } from '@/features/site/lib/routes'

type Props = { params: Promise<{ locale: string }> }

const COPY: Record<Locale, { title: string; italic: string; intro: string; label: string; meta: string; desc: string; phone: string; hint: string; tour: string; cta: string }> = {
  it: { label: 'Progetti', title: 'Lavori fatti,', italic: 'da guardare qui.', intro: 'Siti, app e sistemi AI che ho costruito. Li vedi dentro questa pagina, su computer e su telefono; i sistemi privati li vedi in azione, passo per passo.', meta: 'Progetti: siti web, app e agenti AI realizzati | Marketizzati', desc: 'Siti, web app e agenti AI realizzati da Marketizzati: AIGENT, Cargo Service, Delizie della Certosa, GF Memories, JPower Electric, lurumi.it e altri.', phone: 'Sul telefono', hint: 'Scorri dentro lo schermo: è il sito vero.', tour: 'Schermate vere dell’app, con i dati privati sfocati.', cta: 'Vuoi qualcosa di simile? Scrivimi' },
  es: { label: 'Proyectos', title: 'Trabajos hechos,', italic: 'para ver aquí.', intro: 'Webs, apps y sistemas de IA que he construido. Los ves dentro de esta página, en ordenador y en móvil; los sistemas privados los ves en acción, paso a paso.', meta: 'Proyectos: webs, apps y agentes de IA | Marketizzati', desc: 'Webs, web apps y agentes de IA hechos por Marketizzati: AIGENT, Cargo Service, Delizie della Certosa, GF Memories, JPower Electric, lurumi.it y más.', phone: 'En el móvil', hint: 'Desplázate dentro de la pantalla: es la web real.', tour: 'Pantallas reales de la app, con los datos privados difuminados.', cta: '¿Quieres algo parecido? Escríbeme' },
  en: { label: 'Projects', title: 'Work done,', italic: 'to see right here.', intro: 'Websites, apps and AI systems I built. You see them inside this page, on desktop and mobile; the private systems you see in action, step by step.', meta: 'Projects: websites, apps and AI agents | Marketizzati', desc: 'Websites, web apps and AI agents built by Marketizzati: AIGENT, Cargo Service, Delizie della Certosa, GF Memories, JPower Electric, lurumi.it and more.', phone: 'On mobile', hint: 'Scroll inside the screen: it is the real site.', tour: 'Real screens from the app, with private data blurred.', cta: 'Want something similar? Message me' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  return pageMetadata('progetti', l, COPY[l].meta, COPY[l].desc)
}

/** Every project viewed inside the site: no traffic sent to other domains. */
export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  const l = isLocale(locale) ? locale : 'it'
  const c = COPY[l]
  const withTour = PROJECTS.filter((p) => p.tour)
  const sites = PROJECTS.filter((p): p is SiteProject => p.kind === 'site' && !p.tour)
  const rest = PROJECTS.filter((p) => p.kind === 'private' && !p.tour)
  return (
    <>
      <Section tint="white" className="pt-24 md:pt-32">
        <Heading as="h1" label={c.label} title={c.title} italic={c.italic} intro={c.intro} />
      </Section>
      {sites.map((p, i) => (
        <Section key={p.id} tint={i % 2 ? 'cream' : 'peach'}>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.tag[l]}</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">{p.name}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.text[l]}</p>
              <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink/10">
                <div className="flex gap-1.5 border-b border-ink/5 bg-[#f7f4f1] px-4 py-2.5" aria-hidden>
                  {['#ff5f57', '#febc2e', '#28c840'].map((col) => (
                    <span key={col} className="h-2.5 w-2.5 rounded-full" style={{ background: col }} />
                  ))}
                </div>
                <LiveFrame
                  url={p.video ? undefined : p.url}
                  scrollImage={p.video ? p.desk.replace('.webp', '-full.webp') : undefined}
                  poster={p.desk}
                  title={`${p.name}, desktop`}
                  virtualWidth={1280}
                  className="aspect-[16/10]"
                />
              </div>
              <p className="mt-3 text-sm text-ink-muted">{c.hint}</p>
            </div>
            <div className="self-end">
              <p className="mb-3 text-sm font-semibold text-ink-muted">{c.phone}</p>
              <div className="mx-auto w-[240px] rounded-[2.4rem] bg-ink p-2.5 shadow-2xl">
                <LiveFrame
                  url={p.video ? undefined : p.url}
                  scrollImage={p.video ? p.phone.replace('.webp', '-full.webp') : undefined}
                  poster={p.phone}
                  title={`${p.name}, mobile`}
                  virtualWidth={390}
                  className="aspect-[390/780] rounded-[1.9rem]"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}
      {withTour.map((p, i) => (
        <Section key={p.id} tint={(sites.length + i) % 2 ? 'cream' : 'peach'}>
          <div className={`grid items-center gap-10 ${p.tour?.device === 'phone' ? 'lg:grid-cols-[1fr_0.8fr]' : 'lg:grid-cols-[0.7fr_1.3fr]'}`}>
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                {p.kind === 'private' && <Lock size={12} aria-hidden />}
                {p.tag[l]}
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">{p.name}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.text[l]}</p>
              <p className="mt-4 text-sm text-ink-muted">{c.tour}</p>
            </div>
            {p.tour && <AppTour frames={p.tour.frames} device={p.tour.device} name={p.name} locale={l} />}
          </div>
        </Section>
      ))}
      <Section tint="white">
        {rest.length > 0 && (
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} locale={l} />
            ))}
          </div>
        )}
        <div>
          <WhatsAppButton label={c.cta} variant="primary" />
        </div>
      </Section>
    </>
  )
}
