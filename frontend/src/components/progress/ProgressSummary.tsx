import type { ProgressSummary as ProgressSummaryType } from '../../types/progress'

interface ProgressSummaryProps { summary: ProgressSummaryType }

const cards = [
  { key: 'problemsSolved', title: 'Problems Solved', description: 'Completed problems', icon: '✓' },
  { key: 'totalAttempts', title: 'Total Attempts', description: 'All submissions', icon: '↗' },
  { key: 'accuracy', title: 'Accuracy', description: 'Successful submissions', icon: '%' },
  { key: 'currentStreak', title: 'Current Streak', description: 'Consecutive practice days', icon: '🔥' },
] as const

export default function ProgressSummary({ summary }: ProgressSummaryProps) {
  const values = { problemsSolved: summary.problemsSolved, totalAttempts: summary.totalAttempts, accuracy: `${summary.accuracy}%`, currentStreak: `${summary.currentStreak} days` }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article key={card.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div><p className="text-sm font-medium text-slate-500">{card.title}</p><p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{values[card.key]}</p><p className="mt-1 text-xs text-slate-500">{card.description}</p></div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">{card.icon}</div>
          </div>
        </article>
      ))}
    </section>
  )
}