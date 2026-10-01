import { ArrowRight, Sparkles } from "lucide-react";

import type { PracticeProblem } from "../../types/practice";

import ProblemCard from "./ProblemCard";

interface RecommendedProblemsProps {
  problems: PracticeProblem[];
  onOpen: (problem: PracticeProblem) => void;
  onBookmark: (problem: PracticeProblem) => void;
  onViewAll: () => void;
}

export default function RecommendedProblems({
  problems,
  onOpen,
  onBookmark,
  onViewAll,
}: RecommendedProblemsProps) {
  if (problems.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />

            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Recommended for you
            </h2>
          </div>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Problems selected based on your current learning progress.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {problems.slice(0, 3).map((problem) => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            onOpen={onOpen}
            onBookmark={onBookmark}
          />
        ))}
      </div>
    </section>
  );
}
