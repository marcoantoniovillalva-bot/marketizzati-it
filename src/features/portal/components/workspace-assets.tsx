'use client'

import { useState, useTransition } from 'react'
import type { ClientAsset } from '@/types/database'
import { createWorkspaceAsset, removeWorkspaceAsset } from '@/actions/portal'
import { Button } from '@/components/ui/button'
import { Globe, ImageIcon, MessageSquareQuote, Sparkles, Trash2 } from 'lucide-react'

type WorkspaceAssetsProps = {
  assets: ClientAsset[]
}

function iconForAsset(type: string) {
  if (type === 'review') return MessageSquareQuote
  if (type === 'site-audit') return Globe
  return ImageIcon
}

export function WorkspaceAssets({ assets }: WorkspaceAssetsProps) {
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setSaved(false)
    setError(null)

    const result = await createWorkspaceAsset(formData)
    if (result?.error) {
      setError(result.error)
    } else {
      setSaved(true)
    }

    setLoading(false)
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[28px] border border-surface-border bg-white p-6">
        <div className="flex items-center gap-3">
          <Sparkles size={18} className="text-accent" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Import da ProspectBot</p>
            <h3 className="font-heading text-2xl text-foreground">Asset e materiali gia raccolti</h3>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {assets.length > 0 ? (
            assets.map((asset) => {
              const Icon = iconForAsset(asset.asset_type)
              const metadata = asset.metadata || {}
              const textValue = typeof metadata.text === 'string' ? metadata.text : null
              const noteValue = typeof metadata.note === 'string' ? metadata.note : null
              const isManual = asset.source === 'manual'

              return (
                <div key={asset.id} className="rounded-2xl bg-background p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">{asset.title || 'Asset senza titolo'}</p>
                            <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground-muted">
                              {asset.asset_type}
                            </span>
                            <span className="rounded-full bg-accent/10 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                              {asset.source}
                            </span>
                          </div>
                          {asset.url && (
                            <a
                              href={asset.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2 block truncate text-sm text-accent underline"
                            >
                              {asset.url}
                            </a>
                          )}
                        </div>
                        {isManual && (
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            isLoading={isPending}
                            onClick={() =>
                              startTransition(async () => {
                                await removeWorkspaceAsset(asset.id)
                              })
                            }
                          >
                            <Trash2 size={14} />
                          </Button>
                        )}
                      </div>
                      {textValue && <p className="mt-2 text-sm text-foreground-secondary">{textValue}</p>}
                      {noteValue && <p className="mt-2 text-sm text-foreground-secondary">{noteValue}</p>}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-sm text-foreground-secondary">
              Nessun asset importato. Quando converti un lead da ProspectBot, qui arrivano audit sito, review e materiali raccolti.
            </p>
          )}
        </div>
      </div>

      <form action={handleSubmit} className="rounded-[28px] border border-surface-border bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Aggiunta manuale</p>
        <h3 className="mt-3 font-heading text-2xl text-foreground">Carica link, riferimenti e materiali</h3>
        <div className="mt-5 space-y-4">
          <input
            name="title"
            placeholder="Titolo asset"
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <select
              name="asset_type"
              defaultValue="reference"
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
            >
              <option value="reference">Reference</option>
              <option value="site-audit">Site audit</option>
              <option value="review">Review</option>
              <option value="brand">Brand</option>
            </select>
            <input
              name="url"
              placeholder="https://..."
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
            />
          </div>
          <textarea
            name="note"
            rows={5}
            placeholder="Aggiungi note, contesto, vincoli o indicazioni operative."
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />

          {error && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-500">
              {error}
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button type="submit" isLoading={loading}>Salva asset</Button>
            {saved && <p className="text-sm text-success">Asset salvato nel workspace.</p>}
          </div>
        </div>
      </form>
    </div>
  )
}
