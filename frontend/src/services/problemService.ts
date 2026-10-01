import { getProblemById } from "../data/problemData";
import type {
  Problem,
  ProblemServiceResult,
} from "../types/problem";

const delay = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const problemService = {
  async getProblem(
    problemId: string,
  ): Promise<ProblemServiceResult> {
    await delay(600);

    const problem = getProblemById(problemId);

    if (!problem) {
      return {
        success: false,
        message: "Problem could not be found.",
      };
    }

    return {
      success: true,
      data: problem,
    };
  },

  async toggleBookmark(
    problemId: string,
  ): Promise<ProblemServiceResult> {
    await delay(300);

    const problem = getProblemById(problemId);

    if (!problem) {
      return {
        success: false,
        message: "Problem could not be found.",
      };
    }

    problem.isBookmarked = !problem.isBookmarked;

    return {
      success: true,
      data: problem,
    };
  },

  async submitAttempt(
    problemId: string,
    language: string,
  ): Promise<{
    success: boolean;
    message: string;
    result: Problem["recentSubmissions"][number];
  }> {
    await delay(1200);

    return {
      success: true,
      message: "Submission processed successfully.",
      result: {
        id: `sub-${Date.now()}`,
        problemId,
        submittedAt: new Date().toISOString(),
        language,
        result: "Pending",
        passedTests: 0,
        totalTests: 24,
      },
    };
  },
};
