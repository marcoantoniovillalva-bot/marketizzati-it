'use client'

import { useState } from 'react'
import { updateWorkspace } from '@/actions/portal'
import type { ClientWorkspace } from '@/types/database'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type WorkspaceFormProps = {
  workspace: ClientWorkspace | null
}

export function WorkspaceForm({ workspace }: WorkspaceFormProps) {
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setSaved(false)
    setError(null)
    const result = await updateWorkspace(formData)
    if (result?.error) {
      setError(result.error)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setLoading(false)
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Input name="business_name" label="Nome business" defaultValue={workspace?.business_name || ''} />
        <Input name="offer_name" label="Offerta principale" defaultValue={workspace?.offer_name || ''} />
        <Input name="niche" label="Settore / nicchia" defaultValue={workspace?.niche || ''} />
        <Input name="primary_channel" label="Canale primario" defaultValue={workspace?.primary_channel || ''} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input name="main_goal" label="Obiettivo principale" defaultValue={workspace?.main_goal || ''} />
        <Input name="current_stage" label="Fase attuale" defaultValue={workspace?.current_stage || ''} />
      </div>

      <Input name="target_customer" label="Cliente ideale" defaultValue={workspace?.target_customer || ''} />
      <Input name="automation_focus" label="Cosa vuoi automatizzare per primo" defaultValue={workspace?.automation_focus || ''} />

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-foreground">
          Note operative
        </label>
        <textarea
          id="notes"
          name="notes"
          defaultValue={workspace?.notes || ''}
          rows={6}
          className="w-full rounded-2xl border border-surface-border bg-surface px-4 py-3 text-foreground outline-none transition-all focus:ring-2 focus:ring-accent"
          placeholder="Vincoli, materiali da recuperare, cose da evitare, richieste del cliente finale..."
        />
      </div>

      {error && (
        <div className="rounded-2xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" isLoading={loading}>
          Salva workspace
        </Button>
        {saved && <p className="text-sm text-success">Workspace aggiornato.</p>}
      </div>
    </form>
  )
}
