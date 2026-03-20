import { createHmac, timingSafeEqual } from 'crypto'

function getShareSecret() {
  return (
    process.env.RESOURCE_SHARE_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    'marketizzati-share-secret'
  )
}

export function createResourceShareToken(resourceId: string) {
  return createHmac('sha256', getShareSecret()).update(resourceId).digest('hex').slice(0, 24)
}

export function isValidResourceShareToken(resourceId: string, token: string) {
  const expected = createResourceShareToken(resourceId)
  const provided = token.trim()

  if (expected.length !== provided.length) {
    return false
  }

  return timingSafeEqual(Buffer.from(expected), Buffer.from(provided))
}

export function getResourceShareUrl(resourceId: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketizzati.it'
  const token = createResourceShareToken(resourceId)
  return `${siteUrl}/it/condividi/risorsa/${resourceId}/${token}`
}
