import type {
  ActivityPoint,
  DifficultyProgress,
  LanguageProgress,
  ProgressAchievement,
  ProgressOverview,
  ProgressResponse,
  RecentSolvedProblem,
  SubmissionPerformance,
  TopicProgress,
  WeakTopic,
} from "../types/progress";

export const progressOverview: ProgressOverview = {
  totalProblems: 320,
  solvedProblems: 143,
  attemptedProblems: 187,
  totalAttempts: 428,
  successfulSubmissions: 247,
  failedSubmissions: 181,
  successRate: 57.7,
  totalScore: 7820,
  currentRank: 1247,
  percentile: 90.3,
  currentStreak: 7,
  longestStreak: 23,
  averageRuntime: 82,
  averageMemory: 51.4,
};

export const difficultyProgress: DifficultyProgress[] = [
  { difficulty: "Easy", solved: 76, total: 100, percentage: 76, attempts: 124, successRate: 70.2, averageAttempts: 1.63, score: 2280 },
  { difficulty: "Medium", solved: 51, total: 150, percentage: 34, attempts: 196, successRate: 53.1, averageAttempts: 3.84, score: 3570 },
  { difficulty: "Hard", solved: 16, total: 70, percentage: 22.9, attempts: 108, successRate: 35.2, averageAttempts: 6.75, score: 1970 },
];

export const topicProgress: TopicProgress[] = [
  { id: "arrays", name: "Arrays", solved: 28, total: 40, percentage: 70, attempts: 64, successRate: 72.4, score: 1240, trend: "up", trendValue: 8 },
  { id: "strings", name: "Strings", solved: 21, total: 30, percentage: 70, attempts: 47, successRate: 68.9, score: 940, trend: "up", trendValue: 5 },
  { id: "hash-table", name: "Hash Table", solved: 17, total: 25, percentage: 68, attempts: 39, successRate: 66.7, score: 810, trend: "up", trendValue: 4 },
  { id: "two-pointers", name: "Two Pointers", solved: 14, total: 20, percentage: 70, attempts: 28, successRate: 62.5, score: 690, trend: "neutral", trendValue: 0 },
  { id: "binary-search", name: "Binary Search", solved: 11, total: 20, percentage: 55, attempts: 34, successRate: 54.1, score: 570, trend: "up", trendValue: 3 },
  { id: "linked-list", name: "Linked List", solved: 9, total: 18, percentage: 50, attempts: 31, successRate: 47.6, score: 490, trend: "down", trendValue: -6 },
  { id: "stack", name: "Stack", solved: 8, total: 15, percentage: 53.3, attempts: 27, successRate: 44.4, score: 420, trend: "down", trendValue: -4 },
  { id: "queue", name: "Queue", solved: 7, total: 14, percentage: 50, attempts: 22, successRate: 45.5, score: 370, trend: "neutral", trendValue: 0 },
  { id: "trees", name: "Trees", solved: 10, total: 28, percentage: 35.7, attempts: 38, successRate: 39.5, score: 560, trend: "down", trendValue: -8 },
  { id: "graphs", name: "Graphs", solved: 6, total: 22, percentage: 27.3, attempts: 29, successRate: 31, score: 390, trend: "down", trendValue: -10 },
  { id: "dynamic-programming", name: "Dynamic Programming", solved: 5, total: 30, percentage: 16.7, attempts: 25, successRate: 28, score: 310, trend: "down", trendValue: -12 },
  { id: "greedy", name: "Greedy", solved: 7, total: 18, percentage: 38.9, attempts: 24, successRate: 41.7, score: 420, trend: "up", trendValue: 2 },
];

export const activityData: ActivityPoint[] = [
  ["2026-08-29", 2, 1, 1, 35], ["2026-08-30", 4, 3, 2, 80],
  ["2026-08-31", 1, 1, 1, 40], ["2026-09-01", 5, 3, 2, 95],
  ["2026-09-02", 7, 4, 3, 130], ["2026-09-03", 3, 2, 1, 55],
  ["2026-09-04", 6, 4, 2, 100], ["2026-09-05", 8, 5, 3, 145],
  ["2026-09-06", 4, 3, 2, 75], ["2026-09-07", 2, 2, 1, 40],
  ["2026-09-08", 9, 5, 3, 160], ["2026-09-09", 7, 5, 3, 145],
  ["2026-09-10", 5, 3, 2, 90], ["2026-09-11", 10, 7, 4, 190],
  ["2026-09-12", 8, 6, 3, 155], ["2026-09-13", 3, 2, 1, 50],
  ["2026-09-14", 6, 4, 2, 110], ["2026-09-15", 11, 7, 4, 205],
  ["2026-09-16", 8, 5, 3, 145], ["2026-09-17", 5, 4, 2, 95],
  ["2026-09-18", 12, 8, 4, 230], ["2026-09-19", 9, 6, 3, 170],
  ["2026-09-20", 2, 1, 1, 35], ["2026-09-21", 7, 5, 3, 140],
  ["2026-09-22", 10, 7, 4, 200], ["2026-09-23", 6, 4, 2, 115],
  ["2026-09-24", 8, 5, 3, 150], ["2026-09-25", 9, 6, 3, 175],
].map(([date, submissions, accepted, problemsSolved, score]) => ({
  date: String(date),
  submissions: Number(submissions),
  accepted: Number(accepted),
  problemsSolved: Number(problemsSolved),
  score: Number(score),
}));

export const languageProgress: LanguageProgress[] = [
  { language: "TypeScript", submissions: 132, accepted: 83, successRate: 62.9, problemsSolved: 49, percentage: 30.8 },
  { language: "Python", submissions: 111, accepted: 69, successRate: 62.2, problemsSolved: 44, percentage: 26 },
  { language: "Java", submissions: 79, accepted: 42, successRate: 53.2, problemsSolved: 29, percentage: 18.5 },
  { language: "C++", submissions: 68, accepted: 37, successRate: 54.4, problemsSolved: 27, percentage: 15.9 },
  { language: "JavaScript", submissions: 38, accepted: 16, successRate: 42.1, problemsSolved: 14, percentage: 8.8 },
];

export const submissionPerformance: SubmissionPerformance[] = [
  { period: "Week 1", submissions: 31, accepted: 20, failed: 11, successRate: 64.5, averageRuntime: 88 },
  { period: "Week 2", submissions: 37, accepted: 24, failed: 13, successRate: 64.9, averageRuntime: 82 },
  { period: "Week 3", submissions: 44, accepted: 27, failed: 17, successRate: 61.4, averageRuntime: 77 },
  { period: "Week 4", submissions: 52, accepted: 34, failed: 18, successRate: 65.4, averageRuntime: 73 },
  { period: "Week 5", submissions: 48, accepted: 31, failed: 17, successRate: 64.6, averageRuntime: 70 },
  { period: "Week 6", submissions: 55, accepted: 35, failed: 20, successRate: 63.6, averageRuntime: 67 },
];

export const recentSolvedProblems: RecentSolvedProblem[] = [
  { id: "two-sum", title: "Two Sum", slug: "two-sum", difficulty: "Easy", topics: ["Array", "Hash Table"], solvedAt: "2026-09-25T18:30:00", attempts: 1, score: 40, language: "TypeScript", runtime: 58 },
  { id: "valid-parentheses", title: "Valid Parentheses", slug: "valid-parentheses", difficulty: "Easy", topics: ["String", "Stack"], solvedAt: "2026-09-24T21:10:00", attempts: 2, score: 40, language: "Python", runtime: 61 },
  { id: "binary-search", title: "Binary Search", slug: "binary-search", difficulty: "Easy", topics: ["Array", "Binary Search"], solvedAt: "2026-09-23T17:42:00", attempts: 1, score: 45, language: "TypeScript", runtime: 52 },
  { id: "merge-intervals", title: "Merge Intervals", slug: "merge-intervals", difficulty: "Medium", topics: ["Array", "Sorting"], solvedAt: "2026-09-22T19:25:00", attempts: 4, score: 75, language: "Java", runtime: 94 },
  { id: "climbing-stairs", title: "Climbing Stairs", slug: "climbing-stairs", difficulty: "Easy", topics: ["Dynamic Programming"], solvedAt: "2026-09-21T20:40:00", attempts: 2, score: 45, language: "Python", runtime: 49 },
  { id: "maximum-subarray", title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "Medium", topics: ["Array", "Dynamic Programming"], solvedAt: "2026-09-20T18:15:00", attempts: 3, score: 70, language: "C++", runtime: 73 },
  { id: "best-time-stock", title: "Best Time to Buy and Sell Stock", slug: "best-time-stock", difficulty: "Easy", topics: ["Array", "Greedy"], solvedAt: "2026-09-19T16:35:00", attempts: 1, score: 40, language: "TypeScript", runtime: 46 },
  { id: "linked-list-cycle", title: "Linked List Cycle", slug: "linked-list-cycle", difficulty: "Easy", topics: ["Linked List", "Two Pointers"], solvedAt: "2026-09-18T22:10:00", attempts: 3, score: 45, language: "Python", runtime: 69 },
];

export const weakTopics: WeakTopic[] = [
  { id: "dynamic-programming", name: "Dynamic Programming", successRate: 28, attempts: 25, solved: 5, total: 30, reason: "Low acceptance rate across recent attempts" },
  { id: "graphs", name: "Graphs", successRate: 31, attempts: 29, solved: 6, total: 22, reason: "Low success rate and low problem coverage" },
  { id: "trees", name: "Trees", successRate: 39.5, attempts: 38, solved: 10, total: 28, reason: "High attempt count with moderate solve progress" },
  { id: "stack", name: "Stack", successRate: 44.4, attempts: 27, solved: 8, total: 15, reason: "Recent submissions show inconsistent results" },
];

export const progressAchievements: ProgressAchievement[] = [
  { id: "first-solve", title: "First Solve", description: "Solved your first coding problem.", value: "1 problem", unlocked: true, icon: "target" },
  { id: "hundred-solved", title: "Century Solver", description: "Solved 100 coding problems.", value: "100 problems", unlocked: true, icon: "trophy" },
  { id: "seven-day", title: "7 Day Streak", description: "Maintained a coding streak for seven days.", value: "7 days", unlocked: true, icon: "flame" },
  { id: "twenty-five-streak", title: "Streak Master", description: "Maintain a 25 day coding streak.", value: "25 days", unlocked: false, icon: "flame" },
  { id: "two-hundred", title: "Problem Hunter", description: "Solve 200 coding problems.", value: "200 problems", unlocked: false, icon: "target" },
  { id: "ten-thousand-score", title: "Score Chaser", description: "Reach 10,000 total score.", value: "10,000 score", unlocked: false, icon: "trophy" },
];

export const progressData: ProgressResponse = {
  overview: progressOverview,
  difficulty: difficultyProgress,
  topics: topicProgress,
  activity: activityData,
  languages: languageProgress,
  submissionPerformance,
  recentSolved: recentSolvedProblems,
  weakTopics,
  achievements: progressAchievements,
  period: "30d",
};
