import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18067362849"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18067362849');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
