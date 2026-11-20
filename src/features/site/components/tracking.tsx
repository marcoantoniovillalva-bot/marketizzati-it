'use client'

import { useEffect } from 'react'

/**
 * Analytics on the public pages, only after "Accetta tutti" in the cookie banner:
 * - GA4 (gtag is loaded in the layout with Consent Mode denied by default; here it gets its config)
 * - Meta Pixel and Microsoft Clarity are not even downloaded before consent
 * - conversion events: WhatsApp, booking (cal.com), email and phone clicks, sent to GA4 and Meta
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
export const CONSENT_EVENT = 'cookie-consent-granted'

type Fn = (...args: unknown[]) => void
type TrackingWindow = Window & { gtag?: Fn; fbq?: Fn & { queue?: unknown[]; loaded?: boolean; version?: string; push?: Fn; callMethod?: Fn }; _fbq?: unknown; clarity?: Fn & { q?: unknown[] } }

const hasConsent = (): boolean => {
  try { return localStorage.getItem('cookie-consent') === 'all' } catch { return false }
}

function addScript(src: string): void {
  if (document.querySelector(`script[src="${src}"]`)) return
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

function loadPixel(w: TrackingWindow): void {
  if (!PIXEL_ID || w.fbq) return
  const q: unknown[][] = []
  const fbq = ((...args: unknown[]) => { if (fbq.callMethod) fbq.callMethod(...args); else q.push(args) }) as NonNullable<TrackingWindow['fbq']>
  fbq.queue = q; fbq.loaded = true; fbq.version = '2.0'; fbq.push = fbq
  w.fbq = fbq; w._fbq = fbq
  addScript('https://connect.facebook.net/en_US/fbevents.js')
  fbq('init', PIXEL_ID)
  fbq('track', 'PageView')
}

function loadClarity(w: TrackingWindow): void {
  if (!CLARITY_ID || w.clarity) return
  const clarity = ((...args: unknown[]) => { (clarity.q = clarity.q ?? []).push(args) }) as NonNullable<TrackingWindow['clarity']>
  w.clarity = clarity
  addScript(`https://www.clarity.ms/tag/${CLARITY_ID}`)
  clarity('consent') // Clarity masks typed text and form fields by default
}

function startTracking(): void {
  const w = window as TrackingWindow
  if (GA_ID && w.gtag) w.gtag('config', GA_ID)
  loadPixel(w)
  loadClarity(w)
}

/** Which conversion a click is: WhatsApp, booking, email or phone. */
function conversionOf(href: string): { ga: string; meta: string; method: string } | null {
  if (/wa\.link|wa\.me|whatsapp\.com/i.test(href)) return { ga: 'generate_lead', meta: 'Contact', method: 'whatsapp' }
  if (/cal\.com/i.test(href)) return { ga: 'generate_lead', meta: 'Schedule', method: 'booking' }
  if (href.startsWith('mailto:')) return { ga: 'generate_lead', meta: 'Contact', method: 'email' }
  if (href.startsWith('tel:')) return { ga: 'generate_lead', meta: 'Contact', method: 'phone' }
  return null
}

export function Tracking(): null {
  useEffect(() => {
    if (hasConsent()) startTracking()
    const onConsent = (): void => startTracking()
    const onClick = (e: MouseEvent): void => {
      const a = (e.target as Element | null)?.closest?.('a')
      const conv = a ? conversionOf(a.getAttribute('href') ?? '') : null
      if (!conv || !hasConsent()) return
      const w = window as TrackingWindow
      w.gtag?.('event', conv.ga, { method: conv.method, page_path: location.pathname })
      w.fbq?.('track', conv.meta, { method: conv.method })
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    document.addEventListener('click', onClick, { capture: true })
    return () => { window.removeEventListener(CONSENT_EVENT, onConsent); document.removeEventListener('click', onClick, { capture: true }) }
  }, [])
  return null
}
