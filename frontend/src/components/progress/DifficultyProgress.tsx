import type { DifficultyProgress as DifficultyProgressType } from '../../types/progress'

interface DifficultyProgressProps { data: DifficultyProgressType[] }
const difficultyStyles = {
  Easy: {
    text: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  Medium: {
    text: "text-amber-600 dark:text-amber-400",
    bar: "bg-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
  Hard: {
    text: "text-rose-600 dark:text-rose-400",
    bar: "bg-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/10",
  },
};

const DifficultyProgress = ({ data }: DifficultyProgressProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Difficulty Progress
            </h2>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            How your solved problems are distributed by difficulty.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {data.map((item) => {
          const style = difficultyStyles[item.difficulty];

          return (
            <div key={item.difficulty}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${style.bg} ${style.text}`}>
                    {item.difficulty}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.solved} / {item.total}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {item.percentage}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${item.percentage}%` }} />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-slate-400">Attempts</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.attempts}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Success</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {item.successRate}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Avg. Attempts</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.averageAttempts}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{item.score}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DifficultyProgress;
