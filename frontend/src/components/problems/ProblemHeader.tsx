import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import type { Problem } from "../../types/problem";

interface ProblemHeaderProps {
  problem: Problem;
  onBack: () => void;
  onBookmark: () => void;
}

const difficultyStyles: Record<
  Problem["difficulty"],
  string
> = {
  Easy: "bg-emerald-500/10 text-emerald-500",
  Medium: "bg-amber-500/10 text-amber-500",
  Hard: "bg-red-500/10 text-red-500",
};

export default function ProblemHeader({
  problem,
  onBack,
  onBookmark,
}: ProblemHeaderProps) {
  return (
    <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-medium text-slate-500">
                  Problem
                </span>

                {problem.isDailyChallenge && (
                  <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-500">
                    Daily Challenge
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {problem.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-3 py-1.5 text-sm font-semibold ${difficultyStyles[problem.difficulty]}`}
            >
              {problem.difficulty}
            </span>

            {problem.status === "solved" && (
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-500">
                <CheckCircle2 size={15} />
                Solved
              </span>
            )}

            <button
              onClick={onBookmark}
              className={`rounded-lg border p-2 transition ${
                problem.isBookmarked
                  ? "border-violet-300 bg-violet-50 text-violet-600 dark:border-violet-700 dark:bg-violet-950/40"
                  : "border-slate-200 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              }`}
              aria-label="Bookmark problem"
            >
              <Bookmark
                size={18}
                fill={
                  problem.isBookmarked
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

            <button
              className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              aria-label="Share problem"
            >
              <Share2 size={18} />
            </button>

            <button
              className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              aria-label="More options"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock3 size={16} />
            {problem.estimatedTime} min
          </span>

          <span>
            {problem.acceptanceRate}% acceptance
          </span>

          <span>
            {problem.points} points
          </span>

          <span>
            {problem.solvedCount.toLocaleString()} solved
          </span>
        </div>
      </div>
    </div>
  );
}
