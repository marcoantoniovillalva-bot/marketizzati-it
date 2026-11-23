import type { FaqItem, Stat } from '../components/ui'
import type { PageKey } from '../lib/routes'

interface Titled {
  label: string
  title: string
  italic: string
}

export interface HomeCopy {
  meta: { title: string; description: string }
  hero: Titled & {
    lead: string
    price: string
    ctaPrimary: string
    ctaWhatsapp: string
    note: string
    browser: { url: string; brand: string; headline: string; cta: string; services: [string, string, string] }
  }
  problem: Titled & { text: string; points: string[] }
  offer: Titled & {
    marketLabel: string
    marketDetail: string
    oneOff: { title: string; note: string }
    monthly: { title: string; note: string }
    includedTitle: string
    included: string[]
    ownership: string
    hosting: string
    stamp: string
    ctaBuy: string
    ctaTalk: string
    source: string
  }
  steps: Titled & { items: { title: string; text: string }[] }
  stats: Stat[]
  services: Titled & {
    items: { key: PageKey; title: string; text: string; tag: string; links: { key: PageKey; label: string }[] }[]
    chat: { title: string; status: string; messages: { from: 'client' | 'agent'; text: string }[] }
    quoteCta: string
  }
  blog: { title: string; text: string; cta: string }
  projects: Titled & { intro: string; cta: string }
  about: Titled & { text: string; badges: string[]; partnersTitle: string; cta: string }
  faq: Titled & { items: FaqItem[]; linkLabel: string }
  final: { title: string; italic: string; text: string; ctaBuy: string; ctaWhatsapp: string }
}
