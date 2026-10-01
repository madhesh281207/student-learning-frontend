import { Link } from 'react-router-dom'

import type { ContinueProblem } from '../../types/dashboard'

interface ContinueProblemCardProps {
  problem: ContinueProblem | null
}

function ContinueProblemCard({ problem }: ContinueProblemCardProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Continue Practicing
        </h2>
        <p className="mt-1 text-sm text-gray-500">Pick up where you left off.</p>
      </div>

      {!problem ? (
        <div className="rounded-lg bg-gray-50 p-5 text-sm text-gray-500">
          No active problem right now.
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{problem.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {problem.difficulty}
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {problem.topic}
                </span>
              </div>
            </div>

            <Link
              to={`/problems/${problem.id}`}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Continue Coding
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContinueProblemCard
