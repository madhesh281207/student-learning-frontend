interface PracticeOverviewProps {
  totalProblems: number
  solvedProblems: number
  attemptedProblems: number
  remainingProblems: number
}

const overviewItems = [
  { key: 'total', label: 'Total Problems', description: 'Available for practice' },
  { key: 'solved', label: 'Solved', description: 'Problems you completed' },
  { key: 'attempted', label: 'Attempted', description: 'Problems you have tried' },
  { key: 'remaining', label: 'Remaining', description: 'Problems still to solve' },
] as const

function PracticeOverview({ totalProblems, solvedProblems, attemptedProblems, remainingProblems }: PracticeOverviewProps) {
  const values = { total: totalProblems, solved: solvedProblems, attempted: attemptedProblems, remaining: remainingProblems }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Practice overview">
      {overviewItems.map((item) => (
        <article key={item.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{values[item.key]}</p>
              <p className="mt-1 text-xs text-slate-500">{item.description}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
              {item.key === 'total' && 'Σ'}
              {item.key === 'solved' && '✓'}
              {item.key === 'attempted' && '↗'}
              {item.key === 'remaining' && '○'}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default PracticeOverview
