import { Link } from 'react-router-dom'

import ContinueProblemCard from '../components/dashboard/ContinueProblemCard'
import LeaderboardPreview from '../components/dashboard/LeaderboardPreview'
import RecentActivity from '../components/dashboard/RecentActivity'
import StatsGrid from '../components/dashboard/StatsGrid'
import TopicPerformance from '../components/dashboard/TopicPerformance'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ErrorState from '../components/ui/ErrorState'
import LoadingState from '../components/ui/LoadingState'
import { mockUser } from '../mocks/users'
import { useDashboard } from '../hooks/useDashboard'

function Dashboard() {
  const { data, isLoading, error } = useDashboard()

  if (isLoading) {
    return <LoadingState message="Loading dashboard..." />
  }

  if (error || !data) {
    return <ErrorState message={error ?? 'Something went wrong while loading the dashboard.'} />
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Welcome back</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-900">{mockUser.firstName}'s dashboard</h1>
        </div>

        <Link to="/practice">
          <Button variant="primary">Start Practice</Button>
        </Link>
      </Card>

      <StatsGrid stats={data.stats} />

      <div className="grid gap-6 xl:grid-cols-2">
        <ContinueProblemCard problem={data.continueProblem} />
        <RecentActivity activities={data.recentActivity} />
      </div>

      <LeaderboardPreview />

      <TopicPerformance topics={data.topicPerformance} />
    </div>
  )
}

export default Dashboard
