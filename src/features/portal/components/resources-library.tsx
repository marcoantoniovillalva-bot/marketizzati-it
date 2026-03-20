'use client'

import { useMemo, useState } from 'react'
import type { PortalResource } from '../lib/portal-data'
import { ResourceCard } from './resource-card'
import { ResourceViewer } from './resource-viewer'

type ResourcesLibraryProps = {
  resources: PortalResource[]
}

export function ResourcesLibrary({ resources }: ResourcesLibraryProps) {
  const [viewingId, setViewingId] = useState<string | null>(null)
  const viewing = useMemo(() => resources.find((resource) => resource.id === viewingId) || null, [resources, viewingId])

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description || ''}
          type={resource.type}
          premium={resource.is_premium}
          unlocked={resource.unlocked}
          unlockedBy={resource.unlockedBy}
          unlockStepCode={resource.unlock_step_code}
          fileUrl={resource.file_url}
          shareUrl={resource.unlocked ? resource.shareUrl : null}
          onView={resource.unlocked && resource.embed_url ? () => setViewingId(resource.id) : undefined}
        />
      ))}

      {viewing?.embed_url && (
        <ResourceViewer
          title={viewing.title}
          embedUrl={viewing.embed_url}
          onClose={() => setViewingId(null)}
        />
      )}
    </div>
  )
}
