'use client'

import { motion } from 'framer-motion'

interface TechLineProps {
  className?: string
}

export function TechLines({ className = '' }: TechLineProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal lines */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      {/* Vertical decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute right-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent"
      />

      {/* Corner accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-accent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-accent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-accent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-accent"
      />
    </div>
  )
}
