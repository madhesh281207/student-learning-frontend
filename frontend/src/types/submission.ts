export type SubmissionStatus =
  | "accepted"
  | "wrong-answer"
  | "runtime-error"
  | "time-limit"
  | "memory-limit"
  | "compile-error"
  | "pending"
  | "Accepted"
  | "Wrong Answer"
  | "Runtime Error"
  | "Time Limit Exceeded"
  | "Compilation Error"
  | "Pending";

export type SubmissionLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "cpp"
  | "c"
  | "go"
  | "rust"
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Java"
  | "C++"
  | "C"
  | "Go"
  | "Rust";

export type SubmissionFilterStatus =
  | "all"
  | SubmissionStatus;

export type SubmissionDateFilter =
  | "all"
  | "today"
  | "week"
  | "month";

export interface SubmissionTestCase {
  id: string;
  testCaseNumber: number;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  status: "passed" | "failed" | "skipped";
  runtime: number;
  memory: number;
  hidden?: boolean;
}

export interface SubmissionProblem {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string[];
}

export interface SubmissionRecord {
  id: string;
  problem: SubmissionProblem;
  status: SubmissionStatus;
  language: SubmissionLanguage;
  submittedAt: string;
  runtime: number;
  memory: number;
  score: number;
  passedTestCases: number;
  totalTestCases: number;
  executionTime: number;
  codeSize?: number;
  isLatest?: boolean;
  testCases: SubmissionTestCase[];
}

export interface SubmissionStats {
  totalSubmissions: number;
  acceptedSubmissions: number;
  failedSubmissions: number;
  successRate: number;
  averageRuntime: number;
  averageMemory: number;
  problemsAttempted: number;
  problemsSolved: number;
  languagesUsed: number;
  currentStreak: number;
}

export interface SubmissionFilters {
  status: SubmissionFilterStatus;
  language: SubmissionLanguage | "all";
  problem: string;
  date: SubmissionDateFilter;
  difficulty: "all" | "Easy" | "Medium" | "Hard";
}

export interface SubmissionPagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

export interface SubmissionResponse {
  submissions: SubmissionRecord[];
  stats: SubmissionStats;
  pagination: SubmissionPagination;
}

export interface SubmissionDetailResponse {
  submission: SubmissionRecord;
}

export interface SubmissionQuery {
  page: number;
  pageSize: number;
  filters: SubmissionFilters;
}
