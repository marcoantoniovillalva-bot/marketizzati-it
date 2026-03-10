'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="font-heading text-display-md md:text-display-lg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-foreground-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
