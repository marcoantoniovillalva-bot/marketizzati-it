'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ResourceCard } from '@/features/portal/components'
import { ResourceViewer } from '@/features/portal/components/resource-viewer'
import { resources, type ResourceItem } from '@/config/resources'

export default function RisorsePage() {
  const t = useTranslations('portal.resources')
  const [viewing, setViewing] = useState<ResourceItem | null>(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-display-sm">{t('title')}</h1>
        <p className="text-foreground-secondary mt-2">{t('subtitle')}</p>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            type={resource.type}
            onView={() => setViewing(resource)}
          />
        ))}
      </div>

      {viewing && (
        <ResourceViewer
          title={viewing.title}
          embedUrl={viewing.embedUrl}
          onClose={() => setViewing(null)}
        />
      )}
    </div>
  )
}
