import type { AutomationCopy } from '../content/automation'
import { automationPlans } from '../content/plans'
import type { Locale } from '../lib/routes'
import { PlanCards } from './plan-cards'
import { Rich } from './ui'

/** Automation plans like montelli.dev: three pillars, then the plan cards (pay inside the page, or book on cal.com). */
export function AutomationPricing({ copy, locale }: { copy: AutomationCopy; locale: Locale }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 border-b border-ink/10 pb-8 sm:gap-6">
        {copy.pillars.map((p, i) => (
          <div key={p.title}>
            <p className="font-serif text-2xl italic text-brand sm:text-3xl">{i + 1}</p>
            <p className="mt-1 text-sm font-bold sm:text-lg">{p.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-base">
              <Rich text={p.text} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <PlanCards plans={automationPlans(locale)} locale={locale} />
      </div>
    </div>
  )
}
