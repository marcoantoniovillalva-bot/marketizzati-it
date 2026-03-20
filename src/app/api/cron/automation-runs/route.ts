import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  const expected = process.env.CRON_SECRET

  if (expected && authHeader !== `Bearer ${expected}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const service = createServiceClient()
  const now = new Date()

  const { data: automations, error } = await service
    .from('automation_runs')
    .select('*')
    .in('status', ['active', 'queued'])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const updates = (automations ?? []).map((automation) => ({
    id: automation.id,
    last_run_at: now.toISOString(),
    next_run_at: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    updated_at: now.toISOString(),
  }))

  for (const update of updates) {
    await service.from('automation_runs').update(update).eq('id', update.id)
  }

  return NextResponse.json({ processed: updates.length })
}
