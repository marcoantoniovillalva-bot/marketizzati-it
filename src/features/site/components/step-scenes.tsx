import { Brush, Camera, Check, CreditCard, FileText, FolderOpen, Globe, MessageCircle } from 'lucide-react'
import { d } from './explainers-site'
import { PlayOnView } from './play-on-view'

/** Small animated scene on top of each "how it works" step, so the step reads without the text. */
export function StepScene({ step }: { step: number }) {
  return (
    <PlayOnView className="relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-white/70 ring-1 ring-ink/5">
      <div className="flex h-24 items-center justify-center gap-3">{SCENES[step] ?? null}</div>
    </PlayOnView>
  )
}

const SCENES = [
  // 1 · pay: card slides in, payment confirmed
  <>
    <span key="card" className="mk-build flex h-12 w-[4.5rem] flex-col justify-between rounded-lg bg-gradient-to-br from-ink to-navy-soft p-1.5 text-white shadow-md" style={d(0.2)}>
      <CreditCard size={14} />
      <span className="h-1 w-8 rounded bg-white/50" />
    </span>
    <span key="ok" className="mk-pop flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white" style={d(1)}>
      <Check size={18} strokeWidth={3} />
    </span>
  </>,
  // 2 · material: logo, photos, texts fly into the folder
  <>
    {[Brush, Camera, FileText].map((Icon, i) => (
      <span key={i} className="mk-build flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand" style={d(0.2 + i * 0.4)}>
        <Icon size={15} />
      </span>
    ))}
    <span key="arrow" className="mk-pop text-brand" style={d(1.4)}>→</span>
    <span key="folder" className="mk-pop flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white" style={d(1.6)}>
      <FolderOpen size={20} />
    </span>
  </>,
  // 3 · build: a page assembles itself
  <span key="page" className="flex w-32 flex-col gap-1.5 rounded-lg bg-white p-2 shadow-md ring-1 ring-ink/10">
    <span className="mk-grow-x h-2 w-1/2 rounded bg-brand" style={d(0.2)} />
    <span className="mk-grow-x h-5 rounded bg-brand-soft" style={d(0.6)} />
    <span className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span key={i} className="mk-pop h-4 flex-1 rounded bg-brand-cream ring-1 ring-brand/20" style={d(1 + i * 0.2)} />
      ))}
    </span>
  </span>,
  // 4 · online and 30 days of support
  <>
    <span key="globe" className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
      <Globe size={20} />
      <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-[#25D366]">
        <span className="mk-pulse absolute inset-0 rounded-full bg-[#25D366]" />
      </span>
    </span>
    <span key="cal" className="mk-pop flex h-12 w-11 flex-col overflow-hidden rounded-lg bg-white text-center shadow-md ring-1 ring-ink/10" style={d(0.6)}>
      <span className="bg-brand text-[8px] font-bold leading-4 text-white">30</span>
      <span className="flex flex-1 items-center justify-center text-[11px] font-bold">✓</span>
    </span>
    <span key="chat" className="mk-pop flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white" style={d(1.1)}>
      <MessageCircle size={15} />
    </span>
  </>,
]
