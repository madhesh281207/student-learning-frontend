import { leaderboardStats, leaderboardUsers } from '../data/leaderboard'
import type { LeaderboardPeriod, LeaderboardResponse, LeaderboardScope } from '../types/leaderboard'

interface GetLeaderboardParams {
  period: LeaderboardPeriod
  scope: LeaderboardScope
  college?: string
  search?: string
  page?: number
  limit?: number
}

const CURRENT_USERNAME = 'dev_krish'

export async function getLeaderboard({ period, scope, college, search, page = 1, limit = 10 }: GetLeaderboardParams): Promise<LeaderboardResponse> {
  await new Promise((resolve) => window.setTimeout(resolve, 300))

  let users = leaderboardUsers.map((user) => {
    const scoreMultiplier = period === 'weekly' ? 0.18 : period === 'monthly' ? 0.48 : 1
    const solvedMultiplier = period === 'weekly' ? 0.2 : period === 'monthly' ? 0.5 : 1
    return { ...user, score: Math.round(user.score * scoreMultiplier), solvedProblems: Math.round(user.solvedProblems * solvedMultiplier) }
  })

  if (scope === 'college' && college) users = users.filter((user) => user.college === college)

  const normalizedSearch = search?.trim().toLowerCase() ?? ''
  if (normalizedSearch) users = users.filter((user) => `${user.username} ${user.firstName} ${user.lastName} ${user.college}`.toLowerCase().includes(normalizedSearch))

  users.sort((left, right) => right.score - left.score)
  users = users.map((user, index) => ({ ...user, rank: index + 1, isCurrentUser: user.username === CURRENT_USERNAME }))

  const topUsers = users.slice(0, 3)
  const totalPages = Math.max(1, Math.ceil(users.length / limit))
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const startIndex = (currentPage - 1) * limit

  return { users: users.slice(startIndex, startIndex + limit), topUsers, stats: leaderboardStats, currentUser: users.find((user) => user.isCurrentUser), totalPages, currentPage }
}