import {
  ArrowRight,
  Flame,
  Target,
} from "lucide-react";

import type { PracticeStats } from "../../types/practice";

interface DailyGoalCardProps {
  stats: PracticeStats;
  onContinue: () => void;
}

export default function DailyGoalCard({
  stats,
  onContinue,
}: DailyGoalCardProps) {
  const percentage = Math.min(
    100,
    Math.round(
      (stats.dailyCompleted /
        Math.max(stats.dailyGoal, 1)) *
        100,
    ),
  );

  const remaining = Math.max(
    0,
    stats.dailyGoal - stats.dailyCompleted,
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/60 dark:border-indigo-900/40 dark:bg-indigo-950/20">
      <div className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Target className="h-6 w-6" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Today's practice goal
                </h2>

                <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-400">
                  <Flame className="h-3.5 w-3.5" />
                  {stats.currentStreak} day streak
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {remaining > 0
                  ? `Complete ${remaining} more ${
                      remaining === 1
                        ? "problem"
                        : "problems"
                    } to reach today's goal.`
                  : "Great work! You've reached today's goal."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Continue practice
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {stats.dailyCompleted} of {stats.dailyGoal} completed
            </span>

            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {percentage}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white dark:bg-gray-800">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
