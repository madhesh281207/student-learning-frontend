import { useCallback, useEffect, useState } from 'react'
import CurrentUserRank from '../components/leaderboard/CurrentUserRank'
import LeaderboardControls from '../components/leaderboard/LeaderboardControls'
import LeaderboardError from '../components/leaderboard/LeaderboardError'
import LeaderboardHeader from '../components/leaderboard/LeaderboardHeader'
import LeaderboardPodium from '../components/leaderboard/LeaderboardPodium'
import LeaderboardStats from '../components/leaderboard/LeaderboardStats'
import LeaderboardTable from '../components/leaderboard/LeaderboardTable'
import { LeaderboardEmpty, LeaderboardPagination, LeaderboardSkeleton } from '../components/leaderboard/LeaderboardStates'
import { getLeaderboard } from '../services/leaderboardService'
import type { LeaderboardPeriod, LeaderboardResponse, LeaderboardScope } from '../types/leaderboard'

const PAGE_SIZE = 10
function Leaderboard() {
  const [period, setPeriod] = useState<LeaderboardPeriod>('all-time')
  const [scope, setScope] = useState<LeaderboardScope>('global')
  const [search, setSearch] = useState('')
  const [college, setCollege] = useState('All Colleges')
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<LeaderboardResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadLeaderboard = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getLeaderboard({ period, scope, college: scope === 'college' && college !== 'All Colleges' ? college : undefined, search, page: currentPage, limit: PAGE_SIZE })
      setData(response)
    } catch (loadError) {
      console.error('Leaderboard loading error:', loadError)
      setError('Unable to load leaderboard data. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [college, currentPage, period, scope, search])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => { void loadLeaderboard() }, 0)
    return () => window.clearTimeout(timeoutId)
  }, [loadLeaderboard])

  const clearFilters = () => { setSearch(''); setCollege('All Colleges'); setCurrentPage(1) }
  const changePeriod = (value: LeaderboardPeriod) => { setPeriod(value); setCurrentPage(1) }
  const changeScope = (value: LeaderboardScope) => { setScope(value); setCurrentPage(1); if (value === 'global') setCollege('All Colleges') }

  return <main className="min-h-full bg-slate-50"><div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><LeaderboardHeader totalParticipants={data?.stats.totalParticipants ?? 0} /><LeaderboardControls period={period} scope={scope} search={search} college={college} onPeriodChange={changePeriod} onScopeChange={changeScope} onSearchChange={(value) => { setSearch(value); setCurrentPage(1) }} onCollegeChange={(value) => { setCollege(value); setCurrentPage(1) }} onClear={clearFilters} />{loading && !data ? <LeaderboardSkeleton /> : error && !data ? <LeaderboardError message={error} onRetry={loadLeaderboard} /> : data ? <><LeaderboardStats stats={data.stats} /><CurrentUserRank user={data.currentUser} />{data.users.length > 0 ? <>{currentPage === 1 && <LeaderboardPodium users={data.topUsers} />}<LeaderboardTable users={data.users} /><LeaderboardPagination currentPage={data.currentPage} totalPages={data.totalPages} onPageChange={setCurrentPage} /></> : <LeaderboardEmpty onClear={clearFilters} />}{error && <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{error}</div>}</> : null}</div></main>
}

export default Leaderboard