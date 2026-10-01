import type { Problem } from '../../types/problem'
import ProblemCard from './ProblemCard'

interface ProblemListProps {
  problems: Problem[]
}

function ProblemList({ problems }: ProblemListProps) {
  if (problems.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <h2 className="font-semibold text-gray-900">No problems found</h2>
        <p className="mt-1 text-sm text-gray-500">Try changing your search or filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {problems.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  )
}

export default ProblemList
