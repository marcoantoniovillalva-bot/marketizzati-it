import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Inter, DM_Sans } from 'next/font/google'
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    title: t('home.title'),
    description: t('home.description'),
    icons: {
      icon: '/images/icon-dark.png',
      apple: '/images/icon-dark.png',
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      locale,
      siteName: 'Marketizzati',
      type: 'website',
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
    <html lang={locale} className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
