import { useMemo, useState } from 'react'

import ProblemFilters from '../components/problems/ProblemFilters'
import ProblemList from '../components/problems/ProblemList'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import ErrorState from '../components/ui/ErrorState'
import LoadingState from '../components/ui/LoadingState'
import { useProblems } from '../hooks/useProblems'
import { mockProblems } from '../mocks/problems'

function Problems() {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [topic, setTopic] = useState('All')

  const topics = useMemo(
    () => Array.from(new Set(mockProblems.map((problem) => problem.topic))).sort(),
    [],
  )

  const { problems, isLoading, error } = useProblems({ search, difficulty, topic })

  const handleClearFilters = () => {
    setSearch('')
    setDifficulty('All')
    setTopic('All')
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Problems</h1>
        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Solve coding problems and improve your problem-solving skills.
        </p>
      </div>

      <ProblemFilters
        search={search}
        difficulty={difficulty}
        topic={topic}
        topics={topics}
        onSearchChange={setSearch}
        onDifficultyChange={setDifficulty}
        onTopicChange={setTopic}
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {problems.length} problem{problems.length !== 1 ? 's' : ''}
        </p>
      </div>

      {isLoading ? (
        <LoadingState message="Loading problems..." />
      ) : error ? (
        <ErrorState message={error} />
      ) : problems.length === 0 ? (
        <EmptyState
          title="No problems match your filters"
          description="Try adjusting the search or clear the active filters to explore more challenges."
          action={
            <Button variant="secondary" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          }
        />
      ) : (
        <ProblemList problems={problems} />
      )}
    </div>
  )
}

export default Problems
