/**
 * Old articles that now redirect elsewhere (permanent 308). One list for next.config redirects and for the blog:
 * they never appear in the blog list or in the sitemap, even if a database row still has them published.
 */
export const RETIRED_POSTS: Record<string, string> = {
  // the old price article competed with the price page
  // old price article: people searching "quanto costa fare un sito" land on the price page (was: yearly costs article)
  'costi-realizzazione-sito-web-professionale': '/it/quanto-costa-un-sito-web',
  'come-scegliere-agenzia-social-media-marketing': '/it/social-media-manager',
  'facebook-ads-come-generare-lead-qualificati': '/it/social-media-manager',
}

export const isRetiredPost = (slug: string): boolean => slug in RETIRED_POSTS
