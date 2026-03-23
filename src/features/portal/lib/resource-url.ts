const STORAGE_PREFIX = 'storage://'

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://marketizzati.it').replace(/\/$/, '')
}

export function isStorageResourceUrl(url: string | null | undefined) {
  return Boolean(url?.startsWith(STORAGE_PREFIX))
}

export function parseStorageResourceUrl(url: string | null | undefined) {
  if (!url || !url.startsWith(STORAGE_PREFIX)) {
    return null
  }

  const target = url.slice(STORAGE_PREFIX.length)
  const slashIndex = target.indexOf('/')

  if (slashIndex === -1) {
    return null
  }

  return {
    bucket: target.slice(0, slashIndex),
    path: target.slice(slashIndex + 1),
  }
}

export function getResourceFileRoute(resourceId: string) {
  return `${getSiteUrl()}/api/resources/file/${resourceId}`
}

export function resolveResourceUrl(resourceId: string, url: string | null | undefined) {
  if (!url) {
    return null
  }

  if (isStorageResourceUrl(url)) {
    return getResourceFileRoute(resourceId)
  }

  return url
}

export function getResourceVisibility(resource: { is_premium: boolean; unlock_step_code: string | null }) {
  if (resource.unlock_step_code === 'share-only') {
    return 'share_only' as const
  }

  if (resource.is_premium) {
    return 'restricted' as const
  }

  return 'public' as const
}
