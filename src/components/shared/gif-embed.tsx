'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className="w-full h-auto object-cover"
        unoptimized
      />
    </motion.div>
  )
}

const SUPABASE_URL = 'https://luhfsvgbpnaxdeydxtrn.supabase.co/storage/v1/object/public/gifd'

export const heroGifUrl = `${SUPABASE_URL}/gif-hero.gif`
export const aiAutomationGifUrl = `${SUPABASE_URL}/gif-ai-automation.gif`
export const marketingGifUrl = `${SUPABASE_URL}/gif-digital-marketing.gif`
export const consulenzaGifUrl = `${SUPABASE_URL}/gif-consulenza.gif`
export const formazioneGifUrl = `${SUPABASE_URL}/gif-formazione.gif`
