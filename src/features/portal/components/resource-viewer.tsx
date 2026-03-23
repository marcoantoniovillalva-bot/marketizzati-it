'use client'

import { X, Maximize, Minimize, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState, useCallback } from 'react'

interface ResourceViewerProps {
  title: string
  embedUrl: string
  directUrl?: string | null
  onClose: () => void
}

export function ResourceViewer({ title, embedUrl, directUrl, onClose }: ResourceViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleClose = useCallback(() => {
    if (isFullscreen && document.fullscreenElement) {
      document.exitFullscreen().then(onClose)
    } else {
      onClose()
    }
  }, [isFullscreen, onClose])

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape' && !document.fullscreenElement) {
        onClose()
      }
    }
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('keydown', handleEsc)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function toggleFullscreen() {
    if (!containerRef.current) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        ref={containerRef}
        className={`
          relative z-10 bg-background overflow-hidden flex flex-col
          ${isFullscreen
            ? 'w-screen h-screen rounded-none'
            : 'w-full max-w-6xl mx-4 rounded-2xl border border-surface-border shadow-2xl'
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-surface-border bg-surface shrink-0">
          <h2 className="font-semibold text-foreground text-lg truncate mr-4">{title}</h2>
          <div className="flex items-center gap-1">
            {directUrl && (
              <a
                href={directUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-foreground-muted transition-colors hover:bg-surface-elevated hover:text-accent"
                title="Apri in una nuova scheda"
              >
                <ExternalLink size={16} />
                <span className="hidden sm:inline">Apri diretto</span>
              </a>
            )}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-surface-elevated text-foreground-muted hover:text-accent transition-colors"
              title={isFullscreen ? 'Esci da schermo intero' : 'Schermo intero'}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-surface-elevated text-foreground-muted hover:text-foreground transition-colors"
              title="Chiudi"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embed */}
        <div className="flex-1 w-full">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            style={{ minHeight: isFullscreen ? 'calc(100vh - 56px)' : '80vh' }}
            allow="fullscreen"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </div>
  )
}
