import {
  CheckCircle2,
  Clock3,
  Lightbulb,
  Play,
  Target,
} from "lucide-react";

import type { PracticeProblem } from "../../types/practice";

import PracticeProgressBar from "./PracticeProgressBar";

interface ProblemDetailSidebarProps {
  problem: PracticeProblem;
  onStart: () => void;
}

export default function ProblemDetailSidebar({
  problem,
  onStart,
}: ProblemDetailSidebarProps) {
  const completed =
    problem.status === "completed";

  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Your progress
        </h3>

        <div className="mt-4">
          <PracticeProgressBar
            value={problem.completionPercentage}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800/60">
            <Clock3 className="h-4 w-4 text-gray-400" />

            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Time
            </p>

            <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
              {problem.estimatedMinutes} min
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800/60">
            <Target className="h-4 w-4 text-gray-400" />

            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Points
            </p>

            <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
              {problem.points}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          {completed ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Review problem
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              {problem.status === "in-progress"
                ? "Continue practice"
                : "Start practice"}
            </>
          )}
        </button>
      </div>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />

          <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">
            Hints available
          </h3>
        </div>

        <p className="mt-2 text-xs leading-5 text-indigo-700/80 dark:text-indigo-300/70">
          This problem contains {problem.hints.length} hint
          {problem.hints.length === 1 ? "" : "s"} to help you learn
          without immediately revealing the solution.
        </p>
      </div>
    </aside>
  );
}
