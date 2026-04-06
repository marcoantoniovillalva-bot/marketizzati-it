import { Button } from '@/components/ui/button'
import { createServiceClient } from '@/lib/supabase/server'
import { resolveResourceUrl } from '@/features/portal/lib/resource-url'
import { notFound } from 'next/navigation'

type PublicResourcePageProps = {
  id: string
  token: string
}

export async function PublicResourcePage({ id, token }: PublicResourcePageProps) {
  const service = createServiceClient()
  const { data: resource } = await service
    .from('resources')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .maybeSingle()

  if (!resource) {
    notFound()
  }

  const resolvedEmbedUrl = resolveResourceUrl(resource.id, resource.embed_url || resource.file_url)
  const resolvedFileUrl = resolveResourceUrl(resource.id, resource.file_url || resource.embed_url)
  const primaryUrl = resolvedEmbedUrl || resolvedFileUrl

  return (
    <main className="min-h-dvh bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-[32px] border border-surface-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Marketizzati</p>
          <h1 className="mt-4 font-heading text-display-sm text-foreground">{resource.title}</h1>
          <p className="mt-4 max-w-3xl text-body-md text-foreground-secondary">
            {resource.description || 'Risorsa condivisa direttamente da Marketizzati.'}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground-secondary">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{resource.type}</span>
            <span>{resolvedFileUrl ? 'Disponibile anche come link diretto' : 'Visualizzazione incorporata'}</span>
          </div>
          {resolvedFileUrl && (
            <div className="mt-5">
              <a href={resolvedFileUrl} target="_blank" rel="noreferrer">
                <Button>Apri risorsa</Button>
              </a>
            </div>
          )}
        </section>

        {resolvedEmbedUrl ? (
          <section className="overflow-hidden rounded-[32px] border border-surface-border bg-white">
            <iframe
              title={resource.title}
              src={resolvedEmbedUrl}
              className="min-h-[75vh] w-full"
              allow="fullscreen; autoplay"
              allowFullScreen
            />
          </section>
        ) : primaryUrl ? (
          <section className="rounded-[32px] border border-surface-border bg-white p-8">
            <p className="text-sm text-foreground-secondary">
              Questa risorsa non ha un embed integrato, ma il link diretto e disponibile qui sopra.
            </p>
          </section>
        ) : (
          <section className="rounded-[32px] border border-surface-border bg-white p-8">
            <p className="text-sm text-foreground-secondary">
              Questa risorsa non ha ancora un link configurato. Aggiornala dall&apos;admin di Marketizzati.
            </p>
          </section>
        )}
      </div>
    </main>
  )
}
