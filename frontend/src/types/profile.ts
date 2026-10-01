export type ProfileTab =
  | "overview"
  | "activity"
  | "submissions"
  | "achievements";

export type SubmissionStatus =
  | "accepted"
  | "wrong-answer"
  | "runtime-error"
  | "time-limit"
  | "compile-error";

export interface ProfileUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  college: string;
  description: string;
  joinedDate: string;
  location?: string;
  preferredLanguage: string;
  currentStreak: number;
  longestStreak: number;
  totalProblems: number;
  solvedProblems: number;
  totalAttempts: number;
  successfulSubmissions: number;
  successRate: number;
  totalScore: number;
  rank: number;
}

export interface ProfileProgress {
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
}

export interface ActivityItem {
  id: string;
  type:
    | "problem-solved"
    | "submission"
    | "achievement"
    | "streak"
    | "practice";
  title: string;
  description: string;
  date: string;
  metadata?: string;
}

export interface SubmissionItem {
  id: string;
  problemId: string;
  problemTitle: string;
  difficulty: "Easy" | "Medium" | "Hard";
  language: string;
  status: SubmissionStatus;
  score: number;
  submittedAt: string;
  runtime?: string;
  memory?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  target?: number;
  unlockedAt?: string;
}

export interface ProfileResponse {
  user: ProfileUser;
  progress: ProfileProgress;
  activities: ActivityItem[];
  submissions: SubmissionItem[];
  achievements: Achievement[];
}
