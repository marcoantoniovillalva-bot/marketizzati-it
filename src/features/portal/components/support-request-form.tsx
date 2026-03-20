'use client'

import { useState } from 'react'
import { createClientRequest } from '@/actions/portal'
import type { ClientRequest } from '@/types/database'
import { Button } from '@/components/ui/button'

type SupportRequestFormProps = {
  requests: ClientRequest[]
}

export function SupportRequestForm({ requests }: SupportRequestFormProps) {
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setSaved(false)
    const result = await createClientRequest(formData)
    if (!result?.error) {
      setSaved(true)
    }
    setLoading(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form action={handleSubmit} className="rounded-[28px] border border-surface-border bg-white p-6">
        <div className="grid gap-5">
          <div>
            <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-foreground">
              Tipo richiesta
            </label>
            <select
              id="type"
              name="type"
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
              defaultValue="support"
            >
              <option value="support">Supporto</option>
              <option value="feedback">Feedback</option>
              <option value="revision">Revisione</option>
              <option value="automation">Nuova automazione</option>
            </select>
          </div>
          <div>
            <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-foreground">
              Titolo
            </label>
            <input
              id="title"
              name="title"
              required
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
              placeholder="Es. Voglio automatizzare il follow-up WhatsApp"
            />
          </div>
          <div>
            <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-foreground">
              Descrizione
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent"
              placeholder="Spiega cosa ti serve, dove sei bloccato o che cosa vuoi far fare automaticamente al sistema."
            />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" isLoading={loading}>
              Invia richiesta
            </Button>
            {saved && <span className="text-sm text-success">Richiesta inviata.</span>}
          </div>
        </div>
      </form>

      <div className="rounded-[28px] border border-surface-border bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">Inbox operativa</p>
        <h3 className="mt-3 font-heading text-2xl text-foreground">Richieste aperte</h3>
        <div className="mt-5 space-y-3">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{request.title}</p>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {request.status}
                  </span>
                </div>
                {request.description && <p className="mt-2 text-sm text-foreground-secondary">{request.description}</p>}
              </div>
            ))
          ) : (
            <p className="text-sm text-foreground-secondary">Nessuna richiesta aperta. Quando scrivi a Marketizzati, la traccia resta qui.</p>
          )}
        </div>
      </div>
    </div>
  )
}
