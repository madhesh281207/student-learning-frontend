import { ArrowRight, Trophy } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { leaderboardUsers } from '../../data/leaderboard'

function LeaderboardPreview() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50"><Trophy className="h-5 w-5 text-indigo-600" /></div><div><h2 className="text-sm font-semibold text-slate-900">Leaderboard</h2><p className="text-xs text-slate-500">Top performers</p></div></div>
        <NavLink to="/leaderboard" className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700">View all<ArrowRight className="h-3.5 w-3.5" /></NavLink>
      </div>
      <div className="divide-y divide-slate-100">{leaderboardUsers.slice(0, 3).map((student) => <div key={student.username} className="flex items-center gap-3 px-5 py-4"><div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">{student.rank}</div><div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">{student.username.slice(0, 2).toUpperCase()}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-slate-800">{student.username}</p><p className="text-xs text-slate-400">{student.score.toLocaleString()} points</p></div></div>)}</div>
    </section>
  )
}

export default LeaderboardPreview