import {
  Award,
  CheckCircle2,
  Flame,
  Gauge,
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";

import type { ProgressOverview as Overview } from "../../types/progress";

interface ProgressOverviewProps {
  overview: Overview;
}

const cards = [
  { key: "solved", label: "Problems Solved", icon: Target },
  { key: "attempts", label: "Total Attempts", icon: Gauge },
  { key: "success", label: "Success Rate", icon: CheckCircle2 },
  { key: "score", label: "Total Score", icon: Trophy },
  { key: "rank", label: "Current Rank", icon: Award },
  { key: "streak", label: "Current Streak", icon: Flame },
] as const;

const ProgressOverview = ({ overview }: ProgressOverviewProps) => {
  const values: Record<(typeof cards)[number]["key"], string> = {
    solved: overview.solvedProblems.toLocaleString(),
    attempts: overview.totalAttempts.toLocaleString(),
    success: `${overview.successRate}%`,
    score: overview.totalScore.toLocaleString(),
    rank: `#${overview.currentRank.toLocaleString()}`,
    streak: `${overview.currentStreak} days`,
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {values[card.key]}
                </p>
              </div>
              <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon className="h-5 w-5" />
              </div>
            </div>

            {card.key === "success" && (
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" />
                Based on all submissions
              </div>
            )}
            {card.key === "streak" && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Longest streak: {overview.longestStreak} days
              </p>
            )}
            {card.key === "rank" && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Top {100 - overview.percentile}% of participants
              </p>
            )}
            {card.key === "solved" && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                {overview.attemptedProblems} problems attempted
              </p>
            )}
            {card.key === "attempts" && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                {overview.successfulSubmissions} successful
              </p>
            )}
            {card.key === "score" && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Percentile: {overview.percentile}%
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressOverview;
