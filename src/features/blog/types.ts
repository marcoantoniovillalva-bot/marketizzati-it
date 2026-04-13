export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: number
  category: string
  keywords: string[]
  image: string
  imageAlt: string
  sections: BlogSection[]
}

export type BlogSection =
  | { type: 'intro'; content: string }
  | { type: 'h2'; heading: string; content: string }
  | { type: 'h3'; heading: string; content: string }
  | { type: 'list'; heading?: string; items: string[] }
  | { type: 'callout'; content: string }
  | { type: 'cta'; heading: string; content: string }
