'use client'

import { useMemo, useState } from 'react'
import { assignResourceToEmail, createOrUpdateResource, deleteResource } from '@/actions/admin'
import type { AdminSnapshot } from '../lib/portal-data'
import { Button } from '@/components/ui/button'

type AdminResourceManagerProps = {
  snapshot: AdminSnapshot
}

export function AdminResourceManager({ snapshot }: AdminResourceManagerProps) {
  const [editingId, setEditingId] = useState<string>('new')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const editingResource = useMemo(
    () => snapshot.resources.find((resource) => resource.id === editingId) || null,
    [editingId, snapshot.resources]
  )

  async function copyShareLink(shareUrl: string, resourceId: string) {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopiedId(resourceId)
      window.setTimeout(() => setCopiedId(null), 1800)
    } catch {
      window.prompt('Copia il link della risorsa', shareUrl)
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[30px] border border-surface-border bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Nuova risorsa</p>
        <h3 className="mt-3 font-heading text-2xl text-foreground">
          {editingResource ? `Modifica ${editingResource.title}` : 'Aggiungi o espandi la libreria'}
        </h3>
        <form action={createOrUpdateResource} className="mt-5 space-y-4">
          <input type="hidden" name="resource_id" value={editingResource?.id || ''} />
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <select
              value={editingId}
              onChange={(event) => setEditingId(event.target.value)}
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
            >
              <option value="new">Nuova risorsa</option>
              {snapshot.resources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.title}
                </option>
              ))}
            </select>
            {editingResource && (
              <Button type="button" variant="ghost" onClick={() => setEditingId('new')}>
                Reset
              </Button>
            )}
          </div>
          <input
            name="title"
            required
            defaultValue={editingResource?.title || ''}
            placeholder="Titolo"
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />
          <textarea
            name="description"
            defaultValue={editingResource?.description || ''}
            placeholder="Descrizione"
            rows={4}
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <select name="type" defaultValue={editingResource?.type || 'guide'} className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3">
              <option value="guide">Guide</option>
              <option value="template">Template</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
            <input
              name="sort_order"
              type="number"
              defaultValue={editingResource?.sort_order || snapshot.resources.length + 1}
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
            />
          </div>
          <input
            name="embed_url"
            defaultValue={editingResource?.embed_url || ''}
            placeholder="Embed URL (Gamma, Loom, ecc.)"
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />
          <input
            name="file_url"
            defaultValue={editingResource?.file_url || ''}
            placeholder="File URL opzionale"
            className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="unlock_step_code"
              defaultValue={editingResource?.unlock_step_code || ''}
              placeholder="unlock step code es. strategy"
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3"
            />
            <label className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface px-4 py-3 text-sm">
              <input type="checkbox" name="is_premium" defaultChecked={editingResource?.is_premium || false} />
              Risorsa premium / sbloccabile
            </label>
          </div>
          <label className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface px-4 py-3 text-sm">
            <input type="checkbox" name="is_active" defaultChecked={editingResource ? editingResource.is_active : true} />
            Risorsa attiva
          </label>
          <Button type="submit">{editingResource ? 'Aggiorna risorsa' : 'Salva risorsa'}</Button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Sblocco per email</p>
          <h3 className="mt-3 font-heading text-2xl text-foreground">Assegna una risorsa a un utente preciso</h3>
          <form action={assignResourceToEmail} className="mt-5 grid gap-4 md:grid-cols-[1fr_0.9fr_auto]">
            <input name="email" type="email" placeholder="cliente@email.com" className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3" />
            <select name="resource_id" className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3">
              {snapshot.resources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.title}
                </option>
              ))}
            </select>
            <Button type="submit">Sblocca</Button>
          </form>
        </div>

        <div className="rounded-[30px] border border-surface-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Catalogo attuale</p>
          <div className="mt-5 space-y-3">
            {snapshot.resources.map((resource) => {
              const assignmentCount = snapshot.resourceAssignments.filter((assignment) => assignment.resource_id === resource.id).length

              return (
                <div key={resource.id} className="rounded-2xl bg-background p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-foreground">{resource.title}</p>
                      <p className="mt-1 text-sm text-foreground-secondary">
                        {resource.unlock_step_code ? `Si sblocca su: ${resource.unlock_step_code}` : 'Sempre disponibile'}
                      </p>
                    </div>
                    <div className="text-right text-sm text-foreground-secondary">
                      <p>{resource.is_premium ? 'Premium' : 'Free'}</p>
                      <p>{assignmentCount} assegnazioni manuali</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Button type="button" size="sm" variant="secondary" onClick={() => setEditingId(resource.id)}>
                      Modifica
                    </Button>
                    <Button type="button" size="sm" variant="outline" onClick={() => copyShareLink(resource.shareUrl, resource.id)}>
                      Copia link condivisibile
                    </Button>
                    <form action={deleteResource}>
                      <input type="hidden" name="resource_id" value={resource.id} />
                      <Button type="submit" size="sm" variant="danger">
                        Elimina
                      </Button>
                    </form>
                    {copiedId === resource.id && (
                      <span className="text-xs font-medium text-accent">Link copiato</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
