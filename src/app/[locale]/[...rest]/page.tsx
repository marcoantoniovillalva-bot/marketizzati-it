import { notFound } from 'next/navigation'

/** Any unknown address under /it, /es, /en: show the branded not-found page (with a real 404 status). */
export default function CatchAll(): never {
  notFound()
}
