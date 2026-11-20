import { llmsContent } from '@/features/site/lib/llms-content'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(await llmsContent(false), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
