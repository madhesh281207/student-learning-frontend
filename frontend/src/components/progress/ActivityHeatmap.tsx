import type { ActivityDay } from '../../types/progress'

interface ActivityHeatmapProps { activity: ActivityDay[] }
function getIntensity(submissions: number) { if (submissions === 0) return 'bg-slate-100'; if (submissions <= 2) return 'bg-slate-300'; if (submissions <= 4) return 'bg-slate-500'; if (submissions <= 6) return 'bg-slate-700'; return 'bg-slate-900' }
function formatDate(date: string) { return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) }

export default function ActivityHeatmap({ activity }: ActivityHeatmapProps) {
  const totalSubmissions = activity.reduce((sum, day) => sum + day.submissions, 0)
  const activeDays = activity.filter((day) => day.submissions > 0).length
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Coding Activity
            </h2>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your submission activity over the selected period.
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto pb-2">
        <div className="grid min-w-[720px] grid-cols-7 gap-2">
          {activity.map((day) => {
            return (
              <div
                key={day.date}
                title={`${formatDate(day.date)}: ${day.submissions} submissions`}
                className={`h-7 w-7 shrink-0 rounded-md ${getIntensity(day.submissions)}`}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
        <span>
          Total submissions: <strong className="text-slate-700 dark:text-slate-200">{totalSubmissions}</strong>
        </span>
        <span>
          Active days: <strong className="text-slate-700 dark:text-slate-200">{activeDays}</strong>
        </span>
      </div>
    </section>
  );
};

