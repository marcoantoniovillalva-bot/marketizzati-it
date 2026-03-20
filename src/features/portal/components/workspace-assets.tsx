import type { ClientAsset } from '@/types/database'
import { Globe, ImageIcon, MessageSquareQuote, Sparkles } from 'lucide-react'

type WorkspaceAssetsProps = {
  assets: ClientAsset[]
}

function iconForAsset(type: string) {
  if (type === 'review') return MessageSquareQuote
  if (type === 'site-audit') return Globe
  return ImageIcon
}

export function WorkspaceAssets({ assets }: WorkspaceAssetsProps) {
  return (
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

            return (
              <div key={asset.id} className="rounded-2xl bg-background p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{asset.title || 'Asset senza titolo'}</p>
                      <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground-muted">
                        {asset.asset_type}
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
  )
}
