import {
  BarChart3,
  CircleCheck,
  Gauge,
  Target,
} from "lucide-react";
import type { Problem } from "../../types/problem";

interface ProblemMetaProps {
  problem: Problem;
}

export default function ProblemMeta({
  problem,
}: ProblemMetaProps) {
  const stats = [
    {
      label: "Your attempts",
      value: problem.userStats.totalAttempts,
      icon: Target,
    },
    {
      label: "Successful",
      value: problem.userStats.successfulSubmissions,
      icon: CircleCheck,
    },
    {
      label: "Your success rate",
      value: `${problem.userStats.acceptanceRate}%`,
      icon: Gauge,
    },
    {
      label: "Global acceptance",
      value: `${problem.acceptanceRate}%`,
      icon: BarChart3,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
              <Icon size={18} />
            </div>

            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
