import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { executeDueAutomations } from '@/features/portal/lib/automation-engine'

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  const expected = process.env.CRON_SECRET?.trim()

  if (expected && authHeader !== `Bearer ${expected}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const service = createServiceClient()
  try {
    const results = await executeDueAutomations(service, { source: 'cron' })
    return NextResponse.json({
      processed: results.length,
      automations: results.map((result) => ({
        automationId: result.automationId,
        userId: result.userId,
        title: result.title,
      })),
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Automation execution failed' },
      { status: 500 }
    )
  }
}
