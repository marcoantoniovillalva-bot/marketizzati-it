'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  before: string
  after: string
  alt: string
  labels: { before: string; after: string }
}

/** Drag the handle to compare the old site with the new one. Keyboard: the range input. */
export function BeforeAfter({ before, after, alt, labels }: Props) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-ink/10">
      <Image src={after} alt={`${alt} — ${labels.after}`} fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} — ${labels.before}`} fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover object-top" />
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">{labels.before}</span>
      <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">{labels.after}</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg ring-1 ring-ink/10" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${labels.before} / ${labels.after}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
