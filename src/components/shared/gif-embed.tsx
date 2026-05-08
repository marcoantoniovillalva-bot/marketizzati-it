'use client'

import { motion } from 'framer-motion'

interface GifEmbedProps {
  src: string
  alt: string
  className?: string
}

export function GifEmbed({ src, alt, className = '' }: GifEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative w-full overflow-hidden rounded-2xl ${className}`}
    >
      <video
        src={src}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )
}

export const heroGifUrl = '/media/videos/gif-hero.mp4'
export const aiAutomationGifUrl = '/media/videos/gif-ai-automation.mp4'
export const marketingGifUrl = '/media/videos/gif-digital-marketing.mp4'
export const consulenzaGifUrl = '/media/videos/gif-consulenza.mp4'
export const formazioneGifUrl = '/media/videos/gif-formazione.mp4'
export const youtubeCaseStudyGifUrl = '/media/videos/gif-youtube-casestudy.mp4'
export const lurumiGifUrl = '/media/videos/gif-lurumi.mp4'
