import type { WeeklyProgress as WeeklyProgressType } from '../../types/progress'

interface WeeklyProgressProps { weekly: WeeklyProgressType[] }

export default function WeeklyProgress({ weekly }: WeeklyProgressProps) {
  const maximumSolved = Math.max(0, ...weekly.map((week) => week.solved))
  return <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Weekly performance</p><h2 className="mt-1 text-xl font-bold text-slate-900">Solved problems</h2></div><div className="mt-7 flex h-56 items-end gap-4">{weekly.map((week) => { const height = maximumSolved === 0 ? 0 : (week.solved / maximumSolved) * 100; return <div key={week.week} className="flex h-full flex-1 flex-col items-center justify-end"><div className="mb-2 text-xs font-semibold text-slate-700">{week.solved}</div><div className="flex h-40 w-full max-w-16 items-end"><div className="w-full rounded-t-xl bg-slate-800 transition-all duration-500" style={{ height: `${height}%` }} title={`${week.solved} solved`} /></div><p className="mt-3 text-xs font-medium text-slate-500">{week.week}</p><p className="mt-1 text-[11px] text-slate-400">{week.accuracy}% accuracy</p></div> })}</div></section>
}