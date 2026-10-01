import type { DashboardData } from '../types/dashboard'

export const dashboardData: DashboardData = {
  stats: {
    problemsAttempted: 24,
    problemsSolved: 18,
    successRate: 75,
    currentStreak: 5,
  },
  continueProblem: {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
  },
  recentActivity: [
    {
      id: 'activity-001',
      problemTitle: 'Two Sum',
      status: 'accepted',
      submittedAt: '2 hours ago',
    },
    {
      id: 'activity-002',
      problemTitle: 'Valid Parentheses',
      status: 'failed',
      submittedAt: 'Yesterday',
    },
    {
      id: 'activity-003',
      problemTitle: 'Binary Search',
      status: 'attempted',
      submittedAt: '2 days ago',
    },
  ],
  topicPerformance: [
    { topic: 'Arrays', attempted: 10, solved: 8 },
    { topic: 'Strings', attempted: 6, solved: 5 },
    { topic: 'Searching', attempted: 4, solved: 3 },
    { topic: 'Dynamic Programming', attempted: 4, solved: 2 },
  ],
}
