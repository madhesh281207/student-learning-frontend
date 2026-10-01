import {
  ArrowLeft,
  Bookmark,
  Clock3,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import type { PracticeProblem } from "../../types/practice";

import DifficultyBadge from "./DifficultyBadge";
import StatusBadge from "./StatusBadge";

interface ProblemDetailHeaderProps {
  problem: PracticeProblem;
  onBookmark: () => void;
}

export default function ProblemDetailHeader({
  problem,
  onBookmark,
}: ProblemDetailHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-200 pb-6 dark:border-gray-800">
      <button
        type="button"
        onClick={() => navigate("/practice")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Practice
      </button>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge
              difficulty={problem.difficulty}
              size="md"
            />

            <StatusBadge status={problem.status} />

            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {problem.points} points
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
            {problem.title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400">
            {problem.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              {problem.estimatedMinutes} minutes
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Target className="h-4 w-4" />
              {problem.solvedCount.toLocaleString()} solved
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onBookmark}
          className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            problem.isBookmarked
              ? "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-500/10 dark:text-indigo-400"
              : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
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

          {problem.isBookmarked
            ? "Bookmarked"
            : "Bookmark"}
        </button>
      </div>
    </div>
  );
}
