import { Trophy } from 'lucide-react'

export default function LeaderboardHeader({ totalParticipants }: { totalParticipants: number }) {
  return <header className="mb-7">
    <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100"><Trophy className="h-6 w-6 text-indigo-600" /></div><div><h1 className="text-3xl font-bold tracking-tight text-slate-900">Leaderboard</h1><p className="mt-1 text-sm text-slate-500">Compare your coding progress with the community</p></div></div>
    <p className="mt-4 flex items-center gap-2 text-sm text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-500" />{totalParticipants.toLocaleString()} active participants</p>
  </header>
}