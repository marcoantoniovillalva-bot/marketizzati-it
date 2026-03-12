'use client'

import { motion } from 'framer-motion'

interface VideoEmbedProps {
  canvaId: string
  className?: string
}

export function VideoEmbed({ canvaId, className = '' }: VideoEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative w-full ${className}`}
      style={{ paddingTop: '56.25%' }}
    >
      <iframe
        loading="lazy"
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
        src={`https://www.canva.com/design/${canvaId}/watch?embed`}
        allowFullScreen
        allow="fullscreen"
      />
    </motion.div>
  )
}

// Pre-defined video embeds for each section
export const heroVideoId = 'DAHDu6kH-RQ/UrVpybRPs4KNAXR8ZSqs2g'
export const aiAutomationVideoId = 'DAHDvAerLQ8/QztHtqKP4JNH9IlrdHCCTg'
export const marketingVideoId = 'DAHDvJGSZIs/ZCro6nZKTcNJ1AbU6sRr7g'
export const consulenzaVideoId = 'DAHDvKJMA5g/rK-FY_l-p166ANNHHdPvdQ'
export const formazioneVideoId = 'DAHDvV-weVM/Ur_Mg2b4VzUSmwJU4Ef3Kw'
