import {
  ArrowRight,
  Play,
} from "lucide-react";

import type { PracticeProblem } from "../../types/practice";

import DifficultyBadge from "./DifficultyBadge";
import PracticeProgressBar from "./PracticeProgressBar";

interface ContinuePracticeProps {
  problems: PracticeProblem[];
  onOpen: (problem: PracticeProblem) => void;
}

export default function ContinuePractice({
  problems,
  onOpen,
}: ContinuePracticeProps) {
  const items = problems.filter(
    (problem) =>
      problem.status === "in-progress",
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Continue practicing
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Pick up where you left off.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        {items.slice(0, 4).map((problem, index) => (
          <div
            key={problem.id}
            className={`flex flex-col gap-4 p-5 md:flex-row md:items-center ${
              index !== items.length - 1
                ? "border-b border-gray-100 dark:border-gray-800"
                : ""
            }`}
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Play className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                    {problem.title}
                  </h3>

                  <DifficultyBadge
                    difficulty={problem.difficulty}
                  />
                </div>

                <div className="mt-3 max-w-lg">
                  <PracticeProgressBar
                    value={problem.completionPercentage}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpen(problem)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
