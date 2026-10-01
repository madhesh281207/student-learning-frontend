import type { ProgressSummary } from '../../types/progress'

interface ProgressCompletionProps { summary: ProgressSummary }

export default function ProgressCompletion({ summary }: ProgressCompletionProps) {
  const percentage = summary.totalProblems === 0 ? 0 : Math.round((summary.problemsSolved / summary.totalProblems) * 100)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Overall progress</p><h2 className="mt-1 text-xl font-bold text-slate-900">Problem completion</h2><p className="mt-2 text-sm leading-6 text-slate-500">You have solved {summary.problemsSolved} out of {summary.totalProblems} available problems.</p></div><div className="text-left md:text-right"><p className="text-3xl font-bold text-slate-900">{percentage}%</p><p className="text-xs text-slate-500">completed</p></div></div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-slate-900 transition-all duration-500" style={{ width: `${percentage}%` }} /></div>
      <div className="mt-3 flex justify-between text-xs text-slate-500"><span>{summary.problemsSolved} solved</span><span>{summary.totalProblems - summary.problemsSolved} remaining</span></div>
    </section>
  )
}