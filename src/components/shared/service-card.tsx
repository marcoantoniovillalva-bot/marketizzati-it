'use client'

import { motion } from 'framer-motion'
import { Target, Palette, Globe, Cpu, TrendingUp, PenTool, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Target, Palette, Globe, Cpu, TrendingUp, PenTool, Zap,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  index?: number
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[icon] ?? Zap

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow p-8 group cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
        <IconComponent size={24} className="text-accent" />
      </div>
      <h3 className="font-heading text-display-xs mb-3">{title}</h3>
      <p className="text-body-md text-foreground-secondary">{description}</p>
    </motion.div>
  )
}
