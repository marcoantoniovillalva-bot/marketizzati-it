// Section types used in both static files and DB
export type BlogSection =
  | { type: 'intro'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; heading: string; content: string }
  | { type: 'h3'; heading: string; content: string }
  | { type: 'list'; heading?: string; items: string[] }
  | { type: 'callout'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'code'; label?: string; content: string }
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
  /** Optional 4:5 cover for phones (free guides from the video covers). */
  imageTall?: string
  /** Free downloadable guide from one of the videos (shown as a badge). */
  freeGuide?: boolean
  /** 5-second muted clip played on the blog card on hover (public/videos/preview). */
  videoPreview?: string
  /** TikTok video id or URL of the full video, shown at the top of the article. */
  tiktok?: string
  /** Full video served by the site (public/videos/full/<slug>.mp4), played instead of the TikTok embed. */
  video?: string
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
  image_tall?: string | null
  video_preview?: string | null
  tiktok?: string | null
  free_guide?: boolean | null
}

export function rowToPost(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: String(row.date).slice(0, 10),
    readTime: row.read_time,
    category: row.category,
    keywords: row.keywords ?? [],
    image: toPublicMediaUrl(row.image),
    imageAlt: row.image_alt ?? '',
    ...(row.image_tall ? { imageTall: toPublicMediaUrl(row.image_tall) } : {}),
    ...(row.video_preview ? { videoPreview: row.video_preview } : {}),
    ...(row.tiktok ? { tiktok: row.tiktok } : {}),
    ...(row.free_guide ? { freeGuide: true } : {}),
    sections: ((row.sections as BlogSection[]) ?? []).map((section) =>
      section.type === 'image' ? { ...section, url: toPublicMediaUrl(section.url) } : section
    ),
  }
}
import { toPublicMediaUrl } from '@/lib/media-url'
