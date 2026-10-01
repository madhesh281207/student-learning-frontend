import type { DashboardStats } from '../../types/dashboard'

interface StatsGridProps {
  stats: DashboardStats
}

function StatsGrid({ stats }: StatsGridProps) {
  const items = [
    {
      label: 'Problems Attempted',
      value: stats.problemsAttempted,
    },
    {
      label: 'Problems Solved',
      value: stats.problemsSolved,
    },
    {
      label: 'Success Rate',
      value: `${stats.successRate}%`,
    },
    {
      label: 'Current Streak',
      value: `${stats.currentStreak} days`,
    },
  ]

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">{item.label}</p>

          <p className="mt-2 text-2xl font-bold text-gray-900">{item.value}</p>
        </div>
      ))}
    </section>
  )
}

export default StatsGrid
