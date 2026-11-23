import { createSign, timingSafeEqual } from 'node:crypto'
import sitemap from '@/app/sitemap'
import { BASE_URL } from '@/features/site/lib/links'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function authorized(header: string | null): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret || !header) return false
  const expected = Buffer.from(`Bearer ${secret}`)
  const actual = Buffer.from(header)
  return expected.length === actual.length && timingSafeEqual(expected, actual)
}

async function submitIndexNow(urls: string[]): Promise<number> {
  if (!urls.length) return 0
  const key = process.env.INDEXNOW_KEY || '2d84e177d48b22f6e5091c545a2f9bb4'
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(BASE_URL).host, key, keyLocation: `${BASE_URL}/${key}.txt`, urlList: urls }),
  })
  if (!response.ok) throw new Error(`IndexNow HTTP ${response.status}`)
  return urls.length
}

async function submitGoogle(json: string): Promise<void> {
  const account: unknown = JSON.parse(json)
  if (!account || typeof account !== 'object' || !('client_email' in account) || !('private_key' in account) || typeof account.client_email !== 'string' || typeof account.private_key !== 'string') throw new Error('Invalid service account')
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iss: account.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`
  const assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(account.private_key, 'base64url')}`
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }) })
  if (!tokenResponse.ok) throw new Error(`Google token HTTP ${tokenResponse.status}`)
  const token: unknown = await tokenResponse.json()
  if (!token || typeof token !== 'object' || !('access_token' in token) || typeof token.access_token !== 'string') throw new Error('Google token missing')
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(`${BASE_URL}/`)}/sitemaps/${encodeURIComponent(`${BASE_URL}/sitemap.xml`)}`
  const response = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${token.access_token}` } })
  if (!response.ok) throw new Error(`Search Console HTTP ${response.status}`)
}

export async function GET(request: Request): Promise<Response> {
  if (!authorized(request.headers.get('authorization'))) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const cutoff = Date.now() - 26 * 60 * 60 * 1000
  const entries = await sitemap()
  const urls = entries.filter((entry) => entry.lastModified && new Date(entry.lastModified).getTime() >= cutoff).map((entry) => entry.url)
  let indexnow = 0
  let indexnowError: string | undefined
  try { indexnow = await submitIndexNow(urls) } catch { indexnowError = 'IndexNow submission failed' }
  let gsc = 'skipped'
  if (process.env.GOOGLE_SEO_SA_JSON) {
    try { await submitGoogle(process.env.GOOGLE_SEO_SA_JSON); gsc = 'ok' } catch { gsc = 'Search Console submission failed' }
  }
  return Response.json({ indexnow, gsc, ...(indexnowError ? { error: indexnowError } : {}) }, { status: indexnowError ? 502 : 200 })
}
