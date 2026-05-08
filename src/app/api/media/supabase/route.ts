import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_HOST = 'luhfsvgbpnaxdeydxtrn.supabase.co'
const ALLOWED_PATH_PREFIX = '/storage/v1/object/public/'

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get('src') || ''
  let upstream: URL

  try {
    upstream = new URL(src)
  } catch {
    return NextResponse.json({ error: 'Invalid media URL' }, { status: 400 })
  }

  if (upstream.hostname !== ALLOWED_HOST || !upstream.pathname.startsWith(ALLOWED_PATH_PREFIX)) {
    return NextResponse.json({ error: 'Media source not allowed' }, { status: 400 })
  }

  const response = await fetch(upstream.toString(), {
    headers: { Accept: request.headers.get('accept') || '*/*' },
    next: { revalidate: 60 * 60 * 24 * 30 },
  })

  if (!response.ok || !response.body) {
    return NextResponse.json(
      { error: 'Media unavailable' },
      {
        status: response.status === 402 ? 503 : response.status,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      }
    )
  }

  const headers = new Headers()
  headers.set('Content-Type', response.headers.get('content-type') || 'application/octet-stream')
  headers.set('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=604800')
  const contentLength = response.headers.get('content-length')
  if (contentLength) headers.set('Content-Length', contentLength)

  return new NextResponse(response.body, { status: 200, headers })
}
