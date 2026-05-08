const SUPABASE_STORAGE_PUBLIC_PREFIX =
  'https://luhfsvgbpnaxdeydxtrn.supabase.co/storage/v1/object/public/'

export function toPublicMediaUrl(url: string | null | undefined) {
  if (!url) return ''
  if (!url.startsWith(SUPABASE_STORAGE_PUBLIC_PREFIX)) return url
  return `/api/media/supabase?src=${encodeURIComponent(url)}`
}

export function toAbsoluteSiteUrl(url: string, baseUrl = 'https://www.marketizzati.it') {
  if (!url) return baseUrl
  if (/^https?:\/\//i.test(url)) return url
  return `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`
}
