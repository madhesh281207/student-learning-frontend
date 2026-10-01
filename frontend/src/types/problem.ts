export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

export type ProblemStatus =
  | "not-started"
  | "attempted"
  | "solved"
  | "bookmarked";

export type SubmissionResult =
  | "Accepted"
  | "Wrong Answer"
  | "Runtime Error"
  | "Time Limit Exceeded"
  | "Compilation Error"
  | "Pending";

export interface ProblemExample {
  id: string;
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemConstraint {
  id: string;
  text: string;
}

export interface ProblemHint {
  id: string;
  title: string;
  content: string;
}

export interface ProblemTopic {
  id: string;
  name: string;
}

export interface ProblemLanguage {
  id: string;
  name: string;
  version: string;
}

export interface TestCaseResult {
  id: string;
  testCaseNumber: number;
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  status: SubmissionResult;
  executionTime?: number;
  memoryUsed?: number;
}

export interface Submission {
  id: string;
  problemId: string;
  submittedAt: string;
  language: string;
  result: SubmissionResult;
  executionTime?: number;
  memoryUsed?: number;
  passedTests: number;
  totalTests: number;
}

export interface RelatedProblem {
  id: string;
  title: string;
  difficulty: ProblemDifficulty;
  solved: boolean;
  acceptanceRate: number;
  topics: string[];
}

export interface ProblemStats {
  totalAttempts: number;
  successfulSubmissions: number;
  acceptanceRate: number;
  averageAttempts: number;
  totalSolved: number;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: ProblemDifficulty;
  status: ProblemStatus;

  description: string;

  examples: ProblemExample[];

  constraints: ProblemConstraint[];

  hints: ProblemHint[];

  topics: ProblemTopic[];

  languages: ProblemLanguage[];

  acceptanceRate: number;

  totalSubmissions: number;

  totalAttempts: number;

  solvedCount: number;

  estimatedTime: number;

  points: number;

  isBookmarked: boolean;

  isDailyChallenge: boolean;

  companyTags: string[];

  relatedProblems: RelatedProblem[];

  userStats: ProblemStats;

  recentSubmissions: Submission[];

  solved?: boolean;
  topic?: string;
  inputFormat?: string;
  outputFormat?: string;
}

export interface ProblemResponse {
  problem: Problem;
}

export interface ProblemServiceResult {
  success: boolean;
  data?: Problem;
  message?: string;
}
