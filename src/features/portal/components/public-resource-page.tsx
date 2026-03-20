import { Button } from '@/components/ui/button'
import { createServiceClient } from '@/lib/supabase/server'
import { isValidResourceShareToken } from '@/features/portal/lib/resource-sharing'
import { notFound } from 'next/navigation'

type PublicResourcePageProps = {
  id: string
  token: string
}

export async function PublicResourcePage({ id, token }: PublicResourcePageProps) {
  if (!isValidResourceShareToken(id, token)) {
    notFound()
  }

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

  const primaryUrl = resource.embed_url || resource.file_url

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
            <span>{resource.file_url ? 'Disponibile anche come link diretto' : 'Visualizzazione incorporata'}</span>
          </div>
          {resource.file_url && (
            <div className="mt-5">
              <a href={resource.file_url} target="_blank" rel="noreferrer">
                <Button>Apri risorsa</Button>
              </a>
            </div>
          )}
        </section>

        {resource.embed_url ? (
          <section className="overflow-hidden rounded-[32px] border border-surface-border bg-white">
            <iframe
              title={resource.title}
              src={resource.embed_url}
              className="min-h-[75vh] w-full"
              allow="fullscreen; autoplay"
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
