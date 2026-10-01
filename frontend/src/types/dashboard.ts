export interface DashboardStats {
  problemsAttempted: number
  problemsSolved: number
  successRate: number
  currentStreak: number
}

export interface RecentActivity {
  id: string
  problemTitle: string
  status: 'accepted' | 'failed' | 'attempted'
  submittedAt: string
}

export interface ContinueProblem {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  topic: string
}

export interface TopicPerformance {
  topic: string
  attempted: number
  solved: number
}

export interface DashboardData {
  stats: DashboardStats
  continueProblem: ContinueProblem | null
  recentActivity: RecentActivity[]
  topicPerformance: TopicPerformance[]
}
