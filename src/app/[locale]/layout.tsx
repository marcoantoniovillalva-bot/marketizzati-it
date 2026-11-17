import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Inter, DM_Sans, Instrument_Serif } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const BASE_URL = 'https://www.marketizzati.it'

const keywordsByLocale: Record<string, string> = {
  it: 'realizzazione siti web, quanto costa un sito web, sito web per artigiani, web agency Milano, web agency Pavia, scheda Google Business Profile, Google Ads, ChatGPT Ads, agenti AI WhatsApp',
  en: 'digital marketing SMB, digital consulting Italy, z start method, marketing automation, digital factory, AI marketing strategy, funnel marketing, high conversion web design',
  es: 'marketing digital PYME, consultoría digital Italia, método z start, automatización marketing, digital factory, estrategia digital IA, funnel marketing',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })

  const canonicalUrl = `${BASE_URL}/${locale}`

  return {
    title: {
      default: t('home.title'),
      template: `%s | Marketizzati`,
    },
    description: t('home.description'),
    keywords: keywordsByLocale[locale] ?? keywordsByLocale.it,
    authors: [{ name: 'Marco Antonio Villalva', url: BASE_URL }],
    creator: 'Marketizzati',
    publisher: 'Marketizzati',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' },
        { url: '/images/icon-dark.png', type: 'image/png' },
      ],
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'it': `${BASE_URL}/it`,
        'en': `${BASE_URL}/en`,
        'es': `${BASE_URL}/es`,
        'x-default': `${BASE_URL}/it`,
      },
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: canonicalUrl,
      siteName: 'Marketizzati',
      locale,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Marketizzati — siti web, pubblicità e agenti AI per artigiani e piccole imprese',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: [`${BASE_URL}/images/og-image.png`],
    },
    verification: {
      google: '',
    },
    other: {
      'theme-color': '#F2541B',
      'msapplication-TileColor': '#090909',
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'it' | 'en' | 'es')) {
    notFound()
  }

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default

  return (
    <html lang={locale} className={`${inter.variable} ${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://djatdyhqliotgnsljdja.supabase.co" />
        {/* Google Consent Mode v2 — must be BEFORE gtag loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              // Default: all denied until user consents
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });

              // Restore consent immediately if user already accepted
              (function() {
                var c = localStorage.getItem('cookie-consent');
                if (c === 'all') {
                  gtag('consent', 'update', {
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                    analytics_storage: 'granted'
                  });
                }
              })();
            `,
          }}
        />
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18067362849" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'AW-18067362849');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
