import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { parseStorageResourceUrl } from '@/features/portal/lib/resource-url'

type Params = {
  params: Promise<{
    id: string
  }>
}

export const runtime = 'nodejs'

function inferContentType(type: string | null) {
  switch (type) {
    case 'pdf':
      return 'application/pdf'
    case 'video':
      return 'video/mp4'
    default:
      return 'text/html; charset=utf-8'
  }
}

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params
  const service = createServiceClient()
  const { data: resource } = await service
    .from('resources')
    .select('id,title,type,file_url,embed_url,is_active')
    .eq('id', id)
    .eq('is_active', true)
    .maybeSingle()

  if (!resource) {
    return NextResponse.json({ error: 'Risorsa non trovata' }, { status: 404 })
  }

  const storageTarget = parseStorageResourceUrl(resource.file_url) || parseStorageResourceUrl(resource.embed_url)

  if (!storageTarget) {
    const fallbackUrl = resource.file_url || resource.embed_url

    if (!fallbackUrl) {
      return NextResponse.json({ error: 'File non configurato' }, { status: 404 })
    }

    return NextResponse.redirect(fallbackUrl)
  }

  const { data, error } = await service.storage
    .from(storageTarget.bucket)
    .download(storageTarget.path)

  if (error || !data) {
    return NextResponse.json({ error: 'File non disponibile' }, { status: 404 })
  }

  const filename = storageTarget.path.split('/').pop() || `${resource.title || 'resource'}`

  return new NextResponse(await data.arrayBuffer(), {
    headers: {
      'Content-Type': data.type || inferContentType(resource.type),
      'Content-Disposition': `inline; filename="${filename.replace(/"/g, '')}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
