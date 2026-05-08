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

export const heroGifUrl = '/images/Chi sono.jpg'
export const aiAutomationGifUrl = '/images/blog/blog-costi-sito-web.jpg'
export const marketingGifUrl = '/images/blog/blog-facebook-ads-lead.jpg'
export const consulenzaGifUrl = '/images/blog/blog-agenzia-social-media.jpg'
export const formazioneGifUrl = '/images/Certificato Florida University.PNG'
export const youtubeCaseStudyGifUrl = '/images/blog/blog-facebook-ads-lead.jpg'
export const lurumiGifUrl = '/images/blog/blog-costi-sito-web.jpg'
