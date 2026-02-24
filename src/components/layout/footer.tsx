import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  const t = useTranslations('common.footer')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-dark.png"
                alt="Marketizzati"
                width={220}
                height={48}
                className="h-20 md:h-24 w-auto"
              />
            </Link>
            <p className="mt-4 text-body-sm text-foreground-secondary leading-relaxed">
              {siteConfig.companyDescription}
            </p>
            <div className="mt-6 flex gap-4">
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/servizi" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('services')}</Link></li>
              <li><Link href="/metodo" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('method')}</Link></li>
              <li><Link href="/consulenza" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('consultation')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/chi-siamo" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('about')}</Link></li>
              <li><Link href="/blog" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-body-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">
              {t('legal')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('privacy')}</Link></li>
              <li><Link href="/cookie" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('cookie')}</Link></li>
              <li><Link href="/termini" className="text-body-sm text-foreground-secondary hover:text-foreground transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-body-xs text-foreground-muted text-center md:text-left">
            <p>© {year} {siteConfig.companyName}. {t('rights')}.</p>
            {siteConfig.partitaIva && (
              <p className="mt-1">P.IVA: {siteConfig.partitaIva}</p>
            )}
            {siteConfig.contact.email && (
              <p className="mt-1"><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors">{siteConfig.contact.email}</a></p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
