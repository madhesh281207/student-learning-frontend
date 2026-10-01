import {
  CheckCircle2,
  Clock3,
  FileCode2,
  Gauge,
  Target,
  Trophy,
} from "lucide-react";

import type { SubmissionStats as SubmissionStatsType } from "../../types/submission";

interface SubmissionStatsProps {
  stats: SubmissionStatsType;
}

const SubmissionStats = ({ stats }: SubmissionStatsProps) => {
  const cards = [
    {
      label: "Total submissions",
      value: stats.totalSubmissions.toLocaleString(),
      icon: FileCode2,
      description: "All attempts",
    },
    {
      label: "Accepted",
      value: stats.acceptedSubmissions.toLocaleString(),
      icon: CheckCircle2,
      description: `${stats.successRate}% success rate`,
    },
    {
      label: "Problems solved",
      value: stats.problemsSolved.toLocaleString(),
      icon: Trophy,
      description: `of ${stats.problemsAttempted} attempted`,
    },
    {
      label: "Average runtime",
      value: `${stats.averageRuntime} ms`,
      icon: Clock3,
      description: "Across submissions",
    },
    {
      label: "Average memory",
      value: `${stats.averageMemory} MB`,
      icon: Gauge,
      description: "Across submissions",
    },
    {
      label: "Current streak",
      value: `${stats.currentStreak} days`,
      icon: Target,
      description: "Active solving streak",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  {card.description}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Icon size={19} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubmissionStats;
