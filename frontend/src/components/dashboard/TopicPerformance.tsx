import type { TopicPerformance as TopicPerformanceItem } from '../../types/dashboard'

interface TopicPerformanceProps {
  topics: TopicPerformanceItem[]
}

function TopicPerformance({ topics }: TopicPerformanceProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Topic Performance</h2>
        <p className="mt-1 text-sm text-gray-500">
          See how you're performing across different topics.
        </p>
      </div>

      <div className="space-y-5">
        {topics.length === 0 ? (
          <p className="text-sm text-gray-500">No topic data available.</p>
        ) : (
          topics.map((topic) => {
            const percentage =
              topic.attempted === 0
                ? 0
                : Math.round((topic.solved / topic.attempted) * 100)

            return (
              <div key={topic.topic}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-gray-700">{topic.topic}</span>
                  <span className="text-sm text-gray-500">
                    {topic.solved}/{topic.attempted}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}

export default TopicPerformance
