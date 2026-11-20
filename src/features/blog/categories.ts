import type { Locale } from '@/features/site/lib/routes'

/** Blog categories: the Italian name is the key stored in every post (all languages); labels are per language. */
export const CATEGORIES = ['Siti web', 'Scheda Google e SEO locale', 'Pubblicità Google e ChatGPT', 'AI e automazioni', 'Contenuti e social'] as const
export type Category = (typeof CATEGORIES)[number]

const LABELS: Record<Locale, Record<Category, string>> = {
  it: { 'Siti web': 'Siti web', 'Scheda Google e SEO locale': 'Scheda Google e SEO locale', 'Pubblicità Google e ChatGPT': 'Pubblicità Google e ChatGPT', 'AI e automazioni': 'AI e automazioni', 'Contenuti e social': 'Contenuti e social' },
  es: { 'Siti web': 'Páginas web', 'Scheda Google e SEO locale': 'Ficha de Google y SEO local', 'Pubblicità Google e ChatGPT': 'Publicidad en Google y ChatGPT', 'AI e automazioni': 'IA y automatizaciones', 'Contenuti e social': 'Contenidos y redes sociales' },
  en: { 'Siti web': 'Websites', 'Scheda Google e SEO locale': 'Google profile and local SEO', 'Pubblicità Google e ChatGPT': 'Google and ChatGPT ads', 'AI e automazioni': 'AI and automation', 'Contenuti e social': 'Content and social media' },
}

export const categoryLabel = (category: string, locale: Locale): string =>
  (LABELS[locale] as Record<string, string>)[category] ?? category
