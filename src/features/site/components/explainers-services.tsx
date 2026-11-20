import { Bell, Bot, CalendarCheck, Clapperboard, Database, FileText, Globe, Inbox, MapPin, MessageCircle, MessageSquare, MonitorSmartphone, Music, Phone, PhoneCall, Search, Send, Share2, Sparkles, Type } from 'lucide-react'
import type { VisualCopy } from '../content/visuals'
import { ADS, euro } from '../lib/offer'
import type { Locale } from '../lib/routes'
import { d, Frame } from './explainers-site'

/** Ads management price: with a website the first months cost less, then the same monthly price. */
export function AdsPriceChart({ v, locale }: { v: VisualCopy; locale: Locale }) {
  const months = 6
  const height = (value: number) => `${(value / ADS.monthly) * 100}%`
  return (
    <Frame>
      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{v.adsPrice.title}</p>
      <div className="mt-5 flex h-36 items-end gap-2 border-b border-ink/10">
        {Array.from({ length: months }, (_, i) => {
          const withSite = i < ADS.launchMonths ? ADS.launchMonthly : ADS.monthly
          return (
            <div key={i} className="flex h-full flex-1 items-end justify-center gap-1">
              <span className="mk-grow-y relative w-1/2 rounded-t-md bg-brand" style={{ height: height(withSite), ...d(0.3 + i * 0.35) }}>
                {(i === 0 || i === ADS.launchMonths) && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-brand-ink">{euro(withSite, locale)}</span>
                )}
              </span>
              <span className="mk-grow-y w-1/2 rounded-t-md bg-ink/20" style={{ height: height(ADS.monthly), ...d(0.45 + i * 0.35) }} />
            </div>
          )
        })}
      </div>
      <div className="mt-1.5 flex gap-2 text-center text-[10px] text-ink-muted">
        {Array.from({ length: months }, (_, i) => (
          <span key={i} className="flex-1">
            {v.adsPrice.month} {i + 1}
          </span>
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-soft">
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" /> {v.adsPrice.withSite}
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/20" /> {v.adsPrice.alone} · {euro(ADS.monthly, locale)}
        </li>
      </ul>
      <p className="mt-3 text-[11px] text-ink-muted">{v.adsPrice.budget}</p>
    </Frame>
  )
}

const Dots = () => (
  <span className="relative block h-1 w-full rounded-full bg-brand/15">
    <span className="mk-travel absolute -top-1 h-3 w-3 rounded-full bg-brand" />
  </span>
)

/** Google ad and ChatGPT answer, both leading to the client's website. */
export function AdsFlow({ v }: { v: VisualCopy }) {
  return (
    <Frame className="max-w-lg">
      <div className="mk-build rounded-2xl bg-brand-cream p-4" style={d(0.3)}>
        <p className="flex items-center gap-1.5 text-xs font-bold text-ink-muted">
          <Search size={12} /> {v.ads.google}
        </p>
        <p className="mt-2 text-[11px] font-bold">{v.ads.sponsored}</p>
        <p className="text-sm font-semibold text-[#1a0dab]">{v.ads.adTitle}</p>
      </div>
      <div className="mt-3 rounded-2xl bg-brand-cream p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold text-ink-muted">
          <Sparkles size={12} /> {v.ads.chatgpt}
        </p>
        <p className="mk-build ml-auto mt-2 w-fit max-w-[85%] rounded-xl bg-white px-3 py-2 text-xs" style={d(1.2)}>
          {v.ads.question}
        </p>
        <p className="mk-build mt-2 text-xs text-ink-soft" style={d(2)}>{v.ads.answer}</p>
        <p className="mk-build mt-1.5 flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs font-semibold ring-1 ring-brand/30" style={d(2.5)}>
          {v.phone.brand}
          <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[9px] font-bold uppercase text-brand-ink">{v.ads.sponsored}</span>
        </p>
      </div>
      <div className="my-4 px-8">
        <Dots />
      </div>
      <div className="mk-pop flex items-center gap-3 rounded-2xl bg-ink p-4 text-white" style={d(3.2)}>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
          <Globe size={18} />
        </span>
        <p className="font-bold">{v.ads.site}</p>
      </div>
    </Frame>
  )
}

/** AI phone agent: incoming call, voice, short exchange, appointment in the calendar. */
export function VoiceCall({ v }: { v: VisualCopy }) {
  const bars = [0.2, 0.5, 0.1, 0.7, 0.3, 0.6, 0.15, 0.45, 0.25, 0.65, 0.35, 0.55]
  return (
    <Frame>
      <div className="flex items-center gap-3">
        <span className="relative flex h-11 w-11 items-center justify-center">
          <span className="mk-pulse absolute inset-0 rounded-full bg-[#25D366]" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
            <Phone size={18} />
          </span>
        </span>
        <div>
          <p className="text-sm font-bold">{v.voice.incoming}</p>
          <p className="flex items-center gap-1 text-xs text-ink-muted">
            <Bot size={12} /> {v.voice.agent}
          </p>
        </div>
      </div>
      <div className="mt-4 flex h-10 items-center justify-center gap-1">
        {bars.map((b, i) => (
          <span key={i} className="mk-wave h-full w-1.5 rounded-full bg-brand" style={d(b)} />
        ))}
      </div>
      <p className="mk-msg mt-4 max-w-[85%] rounded-xl rounded-tl-sm bg-brand-cream px-3 py-2 text-xs" style={d(0.8)}>
        {v.voice.lines[0]}
      </p>
      <p className="mk-msg ml-auto mt-2 max-w-[85%] rounded-xl rounded-tr-sm bg-ink px-3 py-2 text-xs text-white" style={d(2.2)}>
        {v.voice.lines[1]}
      </p>
      <p className="mk-pop mt-4 flex items-center gap-2 rounded-xl bg-[#e9f8ee] px-3 py-2 text-sm font-semibold text-[#1c8a43]" style={d(3.6)}>
        <CalendarCheck size={16} /> {v.voice.booked} · {v.voice.slot}
      </p>
    </Frame>
  )
}

/** Custom automation: request, AI, business system, notification, with data travelling between them. */
export function AutomationFlow({ v }: { v: VisualCopy }) {
  const icons = [Inbox, Bot, Database, Bell]
  return (
    <Frame className="max-w-lg">
      <div className="flex items-center">
        {v.automation.nodes.map((node, i) => {
          const Icon = icons[i]
          return (
            <div key={node} className={`flex items-center ${i < icons.length - 1 ? 'flex-1' : ''}`}>
              <div className="flex w-16 flex-col items-center gap-2 text-center">
                <span className={`mk-pop flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? 'bg-brand' : 'bg-ink'} text-white`} style={d(0.3 + i * 0.6)}>
                  <Icon size={20} />
                </span>
                <span className="text-[10px] font-semibold leading-tight text-ink-soft">{node}</span>
              </div>
              {i < icons.length - 1 && (
                <div className="mb-6 flex-1 px-1">
                  <Dots />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="mt-5 rounded-xl bg-brand-cream px-3 py-2 text-center text-sm font-semibold">{v.automation.caption}</p>
    </Frame>
  )
}

/** Social media management: a week of content fills up the calendar. */
export function SocialCalendar({ v }: { v: VisualCopy }) {
  const plan: Record<number, { label: string; color: string }[]> = {
    0: [{ label: v.social.post, color: 'bg-brand' }],
    1: [{ label: v.social.story, color: 'bg-[#F79A6E]' }],
    2: [{ label: v.social.reel, color: 'bg-ink' }],
    3: [{ label: v.social.ads, color: 'bg-[#1877F2]' }],
    4: [{ label: v.social.post, color: 'bg-brand' }, { label: v.social.story, color: 'bg-[#F79A6E]' }],
    5: [{ label: v.social.reel, color: 'bg-ink' }],
  }
  return (
    <Frame className="max-w-lg">
      <div className="grid grid-cols-7 gap-1.5">
        {v.social.days.map((day, i) => (
          <div key={day} className="flex min-h-[120px] flex-col gap-1 rounded-xl bg-brand-cream p-1.5">
            <span className="text-center text-[10px] font-bold text-ink-muted">{day}</span>
            {(plan[i] ?? []).map((item, j) => (
              <span key={item.label + j} className={`mk-pop rounded-md px-1 py-1.5 text-center text-[9px] font-semibold leading-tight text-white ${item.color}`} style={d(0.4 + i * 0.45 + j * 0.3)}>
                {item.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  )
}

/** Video editing: vertical preview with subtitles, three tracks and a moving playhead. */
export function VideoEditor({ v }: { v: VisualCopy }) {
  const tracks = [
    { label: v.video.cut, Icon: Clapperboard, segments: [28, 22, 30, 20], color: 'bg-brand' },
    { label: v.video.subs, Icon: Type, segments: [18, 26, 20, 24], color: 'bg-ink' },
    { label: v.video.music, Icon: Music, segments: [100], color: 'bg-[#F79A6E]' },
  ]
  return (
    <Frame className="max-w-lg">
      <div className="grid grid-cols-[96px_1fr] gap-4">
        <div className="relative flex aspect-[9/16] items-end justify-center overflow-hidden rounded-xl bg-gradient-to-b from-navy-soft to-ink p-2">
          <span className="mk-build rounded bg-white px-1.5 py-0.5 text-center text-[9px] font-bold leading-tight" style={d(1.5)}>
            {v.phone.hero}
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{v.video.raw}</p>
          <div className="relative space-y-2">
            {tracks.map(({ label, Icon, segments, color }, t) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={13} className="shrink-0 text-ink-muted" />
                <div className="flex h-5 flex-1 gap-0.5 overflow-hidden rounded bg-ink/5">
                  {segments.map((w, i) => (
                    <span key={i} className={`mk-grow-x h-full rounded-sm ${color}`} style={{ width: `${w}%`, ...d(0.3 + t * 0.5 + i * 0.25) }} />
                  ))}
                </div>
              </div>
            ))}
            <span className="absolute -bottom-1 -top-1 left-5 right-0">
              <span className="mk-play absolute inset-y-0 w-0.5 bg-[#ff3b30]" />
            </span>
          </div>
          <p className="mk-pop mt-1 w-fit rounded-full bg-[#e9f8ee] px-3 py-1 text-[11px] font-semibold text-[#1c8a43]" style={d(3.5)}>
            ✓ {v.video.export}
          </p>
        </div>
      </div>
    </Frame>
  )
}

/** The three systems Marco built, each lane showing what it automates, with data moving through it. */
export function AutomationShowcase({ v }: { v: VisualCopy }) {
  const s = v.showcase
  const lanes = [
    { name: 'Marketizzati Flow', tag: s.flowTag, steps: s.flow, icons: [Clapperboard, Share2, MessageSquare, Send] },
    { name: 'ProspectBot', tag: s.prospectTag, steps: s.prospect, icons: [MapPin, Database, FileText, PhoneCall] },
    { name: 'AIGENT', tag: s.aigentTag, steps: s.aigent, icons: [MessageCircle, Bot, MonitorSmartphone, CalendarCheck] },
  ]
  return (
    <Frame className="max-w-xl">
      <div className="space-y-4">
        {lanes.map((lane, l) => (
          <div key={lane.name} className="rounded-2xl bg-brand-cream p-3 sm:p-4">
            <p className="flex items-baseline justify-between gap-2">
              <span className="text-sm font-bold">{lane.name}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-ink">{lane.tag}</span>
            </p>
            <div className="mt-3 flex items-center">
              {lane.steps.map((step, i) => {
                const Icon = lane.icons[i]
                return (
                  <div key={step} className={`flex items-center ${i < lane.steps.length - 1 ? 'flex-1' : ''}`}>
                    <div className="flex w-14 flex-col items-center gap-1 text-center sm:w-16">
                      <span className={`mk-pop flex h-9 w-9 items-center justify-center rounded-xl text-white ${i === 1 ? 'bg-brand' : 'bg-ink'}`} style={d(0.3 + l * 0.9 + i * 0.25)}>
                        <Icon size={16} />
                      </span>
                      <span className="text-[9px] font-semibold leading-tight text-ink-soft sm:text-[10px]">{step}</span>
                    </div>
                    {i < lane.steps.length - 1 && (
                      <div className="mb-5 flex-1 px-0.5">
                        <Dots />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  )
}
