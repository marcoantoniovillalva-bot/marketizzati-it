'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

interface CTABannerProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  microcopy?: string
}

export function CTABanner({ title, subtitle, ctaText, ctaHref, microcopy }: CTABannerProps) {
  return (
    <section className="section-padding bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="font-heading text-display-md md:text-display-lg">
          {title}
        </h2>
        <p className="mt-6 text-body-lg text-foreground-secondary">
          {subtitle}
        </p>
        <Link
          href={ctaHref}
          className="inline-block mt-10 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors text-body-lg"
        >
          {ctaText}
        </Link>
        {microcopy && (
          <p className="mt-4 text-body-sm text-foreground-muted">
            {microcopy}
          </p>
        )}
      </motion.div>
    </section>
  )
}
