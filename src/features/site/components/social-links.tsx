import { SOCIAL } from '../lib/links'

/** Brand glyphs (simple paths, 24×24), so no icon package is needed for social logos. */
const PATHS: Record<keyof typeof SOCIAL, string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-10a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z',
  tiktok:
    'M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.4 6.4 0 1 0 5.5 6.3V8.6a8.3 8.3 0 0 0 4.8 1.5V6.7A4.9 4.9 0 0 1 16.6 2z',
  linkedin:
    'M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.6V9h3.5v11.4z',
  facebook:
    'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z',
}

const LABELS: Record<keyof typeof SOCIAL, string> = { instagram: 'Instagram', tiktok: 'TikTok', linkedin: 'LinkedIn', facebook: 'Facebook' }

/** Round social buttons. tone="dark" for navy backgrounds, "light" for white/cream ones. */
export function SocialLinks({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  const style = tone === 'dark' ? 'bg-white/10 text-white hover:bg-brand' : 'bg-ink/5 text-ink hover:bg-brand hover:text-white'
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {(Object.keys(SOCIAL) as (keyof typeof SOCIAL)[]).map((key) => (
        <li key={key}>
          <a href={SOCIAL[key]} target="_blank" rel="noopener noreferrer me" aria-label={LABELS[key]} title={LABELS[key]} className={`flex h-10 w-10 items-center justify-center rounded-full transition ${style}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d={PATHS[key]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
