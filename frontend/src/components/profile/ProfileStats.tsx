import {
  CheckCircle2,
  Code2,
  Flame,
  Target,
  Trophy,
} from "lucide-react";

import type { ProfileUser } from "../../types/profile";

interface Props {
  user: ProfileUser;
}

export default function ProfileStats({
  user,
}: Props) {
  const stats = [
    {
      label: "Problems solved",
      value: user.solvedProblems.toLocaleString(),
      icon: Code2,
    },
    {
      label: "Successful submissions",
      value: user.successfulSubmissions.toLocaleString(),
      icon: CheckCircle2,
    },
    {
      label: "Success rate",
      value: `${user.successRate.toFixed(1)}%`,
      icon: Target,
    },
    {
      label: "Current streak",
      value: `${user.currentStreak} days`,
      icon: Flame,
    },
    {
      label: "Total score",
      value: user.totalScore.toLocaleString(),
      icon: Trophy,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon size={17} />
              </div>
            </div>

            <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
