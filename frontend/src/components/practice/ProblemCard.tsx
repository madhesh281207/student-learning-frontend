import {
  Bookmark,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import type { PracticeProblem } from "../../types/practice";

import DifficultyBadge from "./DifficultyBadge";
import StatusBadge from "./StatusBadge";
import PracticeProgressBar from "./PracticeProgressBar";

interface ProblemCardProps {
  problem: PracticeProblem;
  onOpen: (problem: PracticeProblem) => void;
  onBookmark: (problem: PracticeProblem) => void;
}

export default function ProblemCard({
  problem,
  onOpen,
  onBookmark,
}: ProblemCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <DifficultyBadge
            difficulty={problem.difficulty}
          />

          <StatusBadge status={problem.status} />
        </div>

        <button
          type="button"
          onClick={() => onBookmark(problem)}
          aria-label={
            problem.isBookmarked
              ? "Remove bookmark"
              : "Bookmark problem"
          }
          className={`rounded-lg p-2 transition ${
            problem.isBookmarked
              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          }`}
        >
          <Bookmark
            className="h-4 w-4"
            fill={
              problem.isBookmarked
                ? "currentColor"
                : "none"
            }
          />
        </button>
      </div>

      <button
        type="button"
        onClick={() => onOpen(problem)}
        className="mt-4 text-left"
      >
        <h3 className="line-clamp-2 text-base font-semibold text-gray-900 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
          {problem.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {problem.description}
        </p>
      </button>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {problem.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" />
          {problem.estimatedMinutes} min
        </span>

        <span>{problem.points} pts</span>

        <span className="ml-auto">
          {problem.solvedCount.toLocaleString()} solved
        </span>
      </div>

      {problem.status !== "not-started" && (
        <div className="mt-4">
          <PracticeProgressBar
            value={problem.completionPercentage}
          />
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        {problem.status === "completed" ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            Completed
          </span>
        ) : (
          <span className="text-xs text-gray-400">
            {problem.category.replace(
              "-",
              " ",
            )}
          </span>
        )}

        <button
          type="button"
          onClick={() => onOpen(problem)}
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-500/10"
        >
          {problem.status === "in-progress"
            ? "Continue"
            : problem.status === "completed"
              ? "Review"
              : "Start"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}