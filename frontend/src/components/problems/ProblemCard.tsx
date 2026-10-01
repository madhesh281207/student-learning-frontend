import { useNavigate } from 'react-router-dom'

import type { Problem } from '../../types/problem'

interface ProblemCardProps {
  problem: Problem
}

function ProblemCard({ problem }: ProblemCardProps) {
  const navigate = useNavigate()
  const difficultyClasses = {
    Easy: 'bg-green-50 text-green-700',
    Medium: 'bg-yellow-50 text-yellow-700',
    Hard: 'bg-red-50 text-red-700',
  }

  const handleOpenProblem = () => {
    navigate(`/problems/${problem.id}`)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpenProblem}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleOpenProblem()
        }
      }}
      className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">{problem.title}</h2>
            {problem.solved && (
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                Solved
              </span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyClasses[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
              {problem.topic}
            </span>
          </div>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">{problem.description}</p>
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            navigate(`/problems/${problem.id}`)
          }}
          className="shrink-0 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          View Problem
        </button>
      </div>
    </div>
  )
}

export default ProblemCard
