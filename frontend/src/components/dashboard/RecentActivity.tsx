import { Link } from 'react-router-dom'

import type { RecentActivity as RecentActivityItem } from '../../types/dashboard'

interface RecentActivityProps {
  activities: RecentActivityItem[]
}

function RecentActivity({ activities }: RecentActivityProps) {
  function getStatusLabel(status: RecentActivityItem['status']) {
    switch (status) {
      case 'accepted':
        return 'Accepted'
      case 'failed':
        return 'Failed'
      case 'attempted':
        return 'Attempted'
    }
  }

  function getStatusClasses(status: RecentActivityItem['status']) {
    switch (status) {
      case 'accepted':
        return 'bg-green-50 text-green-700'
      case 'failed':
        return 'bg-red-50 text-red-700'
      case 'attempted':
        return 'bg-yellow-50 text-yellow-700'
    }
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="mt-1 text-sm text-gray-500">Your latest problem activity.</p>
        </div>
        <Link to="/profile" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          View history
        </Link>
      </div>

      <div className="divide-y divide-gray-100">
        {activities.length === 0 ? (
          <p className="py-4 text-sm text-gray-500">No recent activity.</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.problemTitle}</p>
                <p className="mt-1 text-xs text-gray-500">{activity.submittedAt}</p>
              </div>
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(activity.status)}`}
              >
                {getStatusLabel(activity.status)}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default RecentActivity
