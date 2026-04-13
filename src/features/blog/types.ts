// Section types used in both static files and DB
export type BlogSection =
  | { type: 'intro'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; heading: string; content: string }
  | { type: 'h3'; heading: string; content: string }
  | { type: 'list'; heading?: string; items: string[] }
  | { type: 'callout'; content: string }
  | { type: 'cta'; heading: string; content: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'video'; youtubeId: string; caption?: string }

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

// DB row shape (from Supabase)
export interface BlogPostRow {
  id: string
  slug: string
  title: string
  description: string
  date: string
  read_time: number
  category: string
  keywords: string[]
  image: string
  image_alt: string
  sections: BlogSection[]
  published: boolean
  locale: string
  created_at: string
  updated_at: string
}

export function rowToPost(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: row.date,
    readTime: row.read_time,
    category: row.category,
    keywords: row.keywords ?? [],
    image: row.image ?? '',
    imageAlt: row.image_alt ?? '',
    sections: (row.sections as BlogSection[]) ?? [],
  }
}
