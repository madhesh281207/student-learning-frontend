interface ProblemFiltersProps {
  search: string
  difficulty: string
  topic: string
  topics: string[]
  onSearchChange: (value: string) => void
  onDifficultyChange: (value: string) => void
  onTopicChange: (value: string) => void
}

function ProblemFilters({
  search,
  difficulty,
  topic,
  topics,
  onSearchChange,
  onDifficultyChange,
  onTopicChange,
}: ProblemFiltersProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="problem-search" className="mb-1.5 block text-sm font-medium text-gray-700">
            Search
          </label>
          <input
            id="problem-search"
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search problems..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div>
          <label htmlFor="difficulty-filter" className="mb-1.5 block text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            id="difficulty-filter"
            value={difficulty}
            onChange={(event) => onDifficultyChange(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          >
            <option value="All">All difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="topic-filter" className="mb-1.5 block text-sm font-medium text-gray-700">
            Topic
          </label>
          <select
            id="topic-filter"
            value={topic}
            onChange={(event) => onTopicChange(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          >
            <option value="All">All topics</option>
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProblemFilters
