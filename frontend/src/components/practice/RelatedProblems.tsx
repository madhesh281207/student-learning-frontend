import type { PracticeProblem } from "../../types/practice";

import DifficultyBadge from "./DifficultyBadge";

interface RelatedProblemsProps {
  problems: PracticeProblem[];
  onOpen: (problem: PracticeProblem) => void;
}

export default function RelatedProblems({
  problems,
  onOpen,
}: RelatedProblemsProps) {
  if (problems.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        Related problems
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {problems.map((problem) => (
          <button
            type="button"
            key={problem.id}
            onClick={() => onOpen(problem)}
            className="rounded-xl border border-gray-200 bg-white p-4 text-left transition hover:border-indigo-200 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-900"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                {problem.title}
              </h3>

              <DifficultyBadge
                difficulty={problem.difficulty}
              />
            </div>

            <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
              {problem.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
