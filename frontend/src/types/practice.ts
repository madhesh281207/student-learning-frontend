export type PracticeDifficulty =
  | "easy"
  | "medium"
  | "hard";

export type PracticeStatus =
  | "not-started"
  | "in-progress"
  | "completed";

export type PracticeCategory =
  | "arrays"
  | "strings"
  | "linked-list"
  | "stack"
  | "queue"
  | "trees"
  | "graphs"
  | "dynamic-programming"
  | "sorting"
  | "searching"
  | "greedy"
  | "recursion"
  | "math";

export type PracticeFilterDifficulty =
  | "all"
  | PracticeDifficulty;

export type PracticeSort =
  | "recommended"
  | "difficulty"
  | "progress"
  | "recent";

export interface PracticeExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface PracticeHint {
  id: string;
  title: string;
  content: string;
}

export interface PracticeProblem {
  id: string;
  title: string;
  slug: string;
  description: string;

  difficulty: PracticeDifficulty;

  category: PracticeCategory;
  topics: string[];

  estimatedMinutes: number;

  points: number;

  status: PracticeStatus;

  completionPercentage: number;

  solvedCount: number;
  attemptCount: number;

  successRate: number;

  isRecommended: boolean;
  isFeatured: boolean;

  isBookmarked: boolean;

  examples: PracticeExample[];

  constraints: string[];

  hints: PracticeHint[];

  concepts: string[];

  createdAt: string;
  updatedAt: string;
}

export interface PracticeStats {
  totalProblems: number;
  completedProblems: number;
  inProgressProblems: number;
  attemptedProblems: number;

  totalPoints: number;
  earnedPoints: number;

  currentStreak: number;
  longestStreak: number;

  dailyGoal: number;
  dailyCompleted: number;

  weeklyCompleted: number;
  weeklyGoal: number;

  completionPercentage: number;
}

export interface PracticeCategoryStats {
  category: PracticeCategory;
  label: string;
  total: number;
  completed: number;
  percentage: number;
}

export interface PracticeFilters {
  search: string;
  difficulty: PracticeFilterDifficulty;
  category: PracticeCategory | "all";
  status: PracticeStatus | "all";
  sort: PracticeSort;
  bookmarkedOnly: boolean;
}

export interface PracticeResponse {
  problems: PracticeProblem[];
  recommendedProblems: PracticeProblem[];
  continueProblems: PracticeProblem[];
  stats: PracticeStats;
  categoryStats: PracticeCategoryStats[];

  totalResults: number;
  currentPage: number;
  totalPages: number;
}

export interface PracticeProblemResponse {
  problem: PracticeProblem;
  relatedProblems: PracticeProblem[];
}
