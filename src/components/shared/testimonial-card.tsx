'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  result?: string
  index?: number
}

export function TestimonialCard({ quote, name, role, result, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-surface-elevated border border-surface-border rounded-2xl p-8"
    >
      <Quote size={24} className="text-accent mb-4" />
      <p className="text-body-md text-foreground-secondary mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-body-md font-semibold">{name}</p>
        <p className="text-body-sm text-foreground-muted">{role}</p>
        {result && (
          <p className="mt-2 text-body-sm text-accent font-medium">{result}</p>
        )}
      </div>
    </motion.div>
  )
}
