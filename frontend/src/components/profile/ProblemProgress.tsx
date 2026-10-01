import { BarChart3 } from "lucide-react";

import type { ProfileProgress as ProfileProgressType } from "../../types/profile";

interface Props {
  progress: ProfileProgressType;
}

export default function ProblemProgress({
  progress,
}: Props) {
  const items = [
    {
      name: "Easy",
      solved: progress.easySolved,
      total: progress.easyTotal,
    },
    {
      name: "Medium",
      solved: progress.mediumSolved,
      total: progress.mediumTotal,
    },
    {
      name: "Hard",
      solved: progress.hardSolved,
      total: progress.hardTotal,
    },
  ];

  const totalSolved = items.reduce(
    (sum, item) => sum + item.solved,
    0,
  );

  const totalProblems = items.reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <BarChart3 size={17} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Problem progress
            </h2>

            <p className="text-xs text-slate-500">
              Your solved problem distribution.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              {totalSolved}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              of {totalProblems} problems
            </p>
          </div>

          <p className="text-sm font-semibold text-indigo-600">
            {((totalSolved / totalProblems) * 100).toFixed(1)}%
          </p>
        </div>

        <div className="space-y-5">
          {items.map((item) => {
            const percentage =
              (item.solved / item.total) * 100;

            return (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {item.name}
                  </span>

                  <span className="text-slate-500">
                    {item.solved}/{item.total}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
