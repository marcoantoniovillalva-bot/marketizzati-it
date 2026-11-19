import type { FaqItem } from '../components/ui'
import type { PageKey } from '../lib/routes'

export interface ServiceBlock {
  label: string
  title: string
  italic?: string
  text?: string
  points?: string[]
  /** Small cards (title + text), e.g. one per trade or per step. */
  cards?: { title: string; text: string }[]
}

/** One service, guide or local page. Rendered by ServiceView. */
export interface ServiceCopy {
  meta: { title: string; description: string }
  label: string
  title: string
  italic: string
  /** First paragraph: the plain answer, with **bold**. Google and ChatGPT read this one. */
  answer: string
  /** buy = website offer (Stripe), ads = ads management (Stripe), quote = WhatsApp only. */
  cta: 'buy' | 'ads' | 'quote'
  visual: 'browser' | 'phone' | 'none'
  blocks: ServiceBlock[]
  faq: FaqItem[]
  /** Pages linked at the bottom ("Leggi anche"). */
  related: PageKey[]
}
