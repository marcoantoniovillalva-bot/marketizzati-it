import { WelcomeCard } from '@/features/portal/components'
import { CourseProgress } from '@/features/portal/components'

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <WelcomeCard />
      <CourseProgress completedDays={[]} />
    </div>
  )
}
