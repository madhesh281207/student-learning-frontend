import {
  Flame,
  Target,
  Trophy,
  CheckCircle2,
} from "lucide-react";

import type { PracticeStats as PracticeStatsType } from "../../types/practice";

interface PracticeStatsProps {
  stats: PracticeStatsType;
}

export default function PracticeStats({
  stats,
}: PracticeStatsProps) {
  const cards = [
    {
      label: "Problems completed",
      value: stats.completedProblems,
      helper: `of ${stats.totalProblems}`,
      icon: CheckCircle2,
    },
    {
      label: "Current streak",
      value: `${stats.currentStreak} days`,
      helper: `Best: ${stats.longestStreak} days`,
      icon: Flame,
    },
    {
      label: "Points earned",
      value: stats.earnedPoints.toLocaleString(),
      helper: `of ${stats.totalPoints.toLocaleString()}`,
      icon: Trophy,
    },
    {
      label: "Today's goal",
      value: `${stats.dailyCompleted}/${stats.dailyGoal}`,
      helper: "problems completed",
      icon: Target,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {card.label}
                </p>

                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.value}
                </p>

                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                  {card.helper}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}