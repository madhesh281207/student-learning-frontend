export type ProgressPeriod = "7d" | "30d" | "90d" | "all";

export type ProgressDifficulty = "Easy" | "Medium" | "Hard";

export type ProgressTrend = "up" | "down" | "neutral";

export interface ProgressOverview {
  totalProblems: number;
  solvedProblems: number;
  attemptedProblems: number;
  totalAttempts: number;
  successfulSubmissions: number;
  failedSubmissions: number;
  successRate: number;
  totalScore: number;
  currentRank: number;
  percentile: number;
  currentStreak: number;
  longestStreak: number;
  averageRuntime: number;
  averageMemory: number;
}

export interface DifficultyProgress {
  difficulty: ProgressDifficulty;
  solved: number;
  total: number;
  percentage: number;
  attempts: number;
  successRate: number;
  averageAttempts: number;
  score: number;
}

export interface TopicProgress {
  id: string;
  name: string;
  solved: number;
  total: number;
  percentage: number;
  attempts: number;
  successRate: number;
  score: number;
  trend: ProgressTrend;
  trendValue: number;
}

export interface ActivityPoint {
  date: string;
  submissions: number;
  accepted: number;
  problemsSolved: number;
  score: number;
}

export interface LanguageProgress {
  language: string;
  submissions: number;
  accepted: number;
  successRate: number;
  problemsSolved: number;
  percentage: number;
}

export interface SubmissionPerformance {
  period: string;
  submissions: number;
  accepted: number;
  failed: number;
  successRate: number;
  averageRuntime: number;
}

export interface RecentSolvedProblem {
  id: string;
  title: string;
  slug: string;
  difficulty: ProgressDifficulty;
  topics: string[];
  solvedAt: string;
  attempts: number;
  score: number;
  language: string;
  runtime: number;
}

export interface WeakTopic {
  id: string;
  name: string;
  successRate: number;
  attempts: number;
  solved: number;
  total: number;
  reason: string;
}

export interface ProgressAchievement {
  id: string;
  title: string;
  description: string;
  value: string;
  unlocked: boolean;
  icon: string;
}

export interface ProgressResponse {
  overview: ProgressOverview;
  difficulty: DifficultyProgress[];
  topics: TopicProgress[];
  activity: ActivityPoint[];
  languages: LanguageProgress[];
  submissionPerformance: SubmissionPerformance[];
  recentSolved: RecentSolvedProblem[];
  weakTopics: WeakTopic[];
  achievements: ProgressAchievement[];
  period: ProgressPeriod;
}
