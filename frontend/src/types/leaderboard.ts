export type LeaderboardPeriod = 'weekly' | 'monthly' | 'all-time'
export type LeaderboardScope = 'global' | 'college'

export interface LeaderboardUser {
  id: string
  rank: number
  username: string
  firstName: string
  lastName: string
  college: string
  score: number
  solvedProblems: number
  totalAttempts: number
  successfulSubmissions: number
  successRate: number
  streak: number
  rankChange: number
  isCurrentUser?: boolean
}

export interface LeaderboardStats {
  totalParticipants: number
  totalProblemsSolved: number
  averageScore: number
  highestScore: number
}

export interface LeaderboardResponse {
  users: LeaderboardUser[]
  topUsers: LeaderboardUser[]
  stats: LeaderboardStats
  currentUser?: LeaderboardUser
  totalPages: number
  currentPage: number
}

export interface LeaderboardFilters {
  period: LeaderboardPeriod
  scope: LeaderboardScope
  search: string
  college: string
}
