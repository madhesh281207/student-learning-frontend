import { CheckCircle2, Target, TrendingUp, Users } from 'lucide-react'
import type { LeaderboardStats as Stats } from '../../types/leaderboard'

export default function LeaderboardStats({ stats }: { stats: Stats }) {
  const items = [['Participants', stats.totalParticipants, 'Active learners', Users], ['Problems Solved', stats.totalProblemsSolved, 'Across the platform', CheckCircle2], ['Average Score', stats.averageScore, 'Current average', TrendingUp], ['Highest Score', stats.highestScore, 'Top score', Target]] as const
  return <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{items.map(([label, value, description, Icon]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p><p className="mt-2 text-2xl font-bold text-slate-900">{value.toLocaleString()}</p><p className="mt-1 text-xs text-slate-500">{description}</p></div><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50"><Icon className="h-5 w-5 text-indigo-600" /></div></div></div>)}</div>
}