import Image from 'next/image'
import { Lock } from 'lucide-react'
import type { Project } from '../content/projects'
import { LiveFrame } from './live-frame'
import type { Locale } from '../lib/routes'

/** A project shown inside the site: screenshots in device frames, or an animated flow for private systems. */
export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white/85 ring-1 ring-ink/5">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-cream to-brand-peach">
        {project.kind === 'site' ? (
          <>
            <div className="absolute left-5 right-16 top-6 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-ink/10">
              <div className="flex gap-1.5 border-b border-ink/5 bg-[#f7f4f1] px-3 py-2" aria-hidden>
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <LiveFrame
                url={project.video ? undefined : project.url}
                scrollImage={project.video ? project.desk.replace('.webp', '-full.webp') : undefined}
                poster={project.desk}
                title={`${project.name}, desktop`}
                virtualWidth={1280}
                className="h-56"
              />
            </div>
            <div className="absolute bottom-[-18px] right-4 w-[92px] overflow-hidden rounded-[1.1rem] border-4 border-ink bg-white shadow-xl">
              <div className="relative h-[170px]">
                <Image src={project.phone} alt={`${project.name}, versione mobile`} fill sizes="92px" className="object-cover object-top" />
              </div>
            </div>
          </>
        ) : (
          <ol className="absolute inset-0 flex flex-col justify-center gap-2 px-6">
            {project.flow[locale].map((step, i) => (
              <li key={step} className="mk-build flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium shadow-sm" style={{ animationDelay: `${0.3 + i * 0.6}s` }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-ink">
          {project.kind === 'private' && <Lock size={12} aria-hidden />}
          {project.tag[locale]}
        </p>
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="leading-relaxed text-ink-soft">{project.text[locale]}</p>
      </div>
    </article>
  )
}
