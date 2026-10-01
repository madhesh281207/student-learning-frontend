import type {
  SubmissionFilters,
  SubmissionQuery,
  SubmissionRecord,
  SubmissionResponse,
  SubmissionDetailResponse,
} from "../../types/submission";

import {
  submissionData,
  submissionStats,
} from "../../data/submissionData";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const matchesDate = (
  dateString: string,
  filter: SubmissionFilters["date"],
) => {
  if (filter === "all") {
    return true;
  }

  const submissionDate = new Date(dateString);
  const currentDate = new Date();
  const difference =
    currentDate.getTime() - submissionDate.getTime();
  const day = 24 * 60 * 60 * 1000;

  if (filter === "today") {
    return difference <= day;
  }
  if (filter === "week") {
    return difference <= day * 7;
  }
  if (filter === "month") {
    return difference <= day * 30;
  }

  return true;
};

const matchesFilters = (
  submission: SubmissionRecord,
  filters: SubmissionFilters,
) => {
  const matchesStatus =
    filters.status === "all" ||
    submission.status === filters.status;

  const matchesLanguage =
    filters.language === "all" ||
    submission.language === filters.language;

  const matchesDifficulty =
    filters.difficulty === "all" ||
    submission.problem.difficulty === filters.difficulty;

  const search = filters.problem.trim().toLowerCase();
  const matchesProblem =
    search.length === 0 ||
    submission.problem.title.toLowerCase().includes(search);

  const matchesDateFilter = matchesDate(
    submission.submittedAt,
    filters.date,
  );

  return (
    matchesStatus &&
    matchesLanguage &&
    matchesDifficulty &&
    matchesProblem &&
    matchesDateFilter
  );
};

export const getSubmissions = async (
  query: SubmissionQuery,
): Promise<SubmissionResponse> => {
  await delay(450);

  const filtered = submissionData.filter((submission) =>
    matchesFilters(submission, query.filters),
  );

  const totalItems = filtered.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / query.pageSize),
  );
  const safePage = Math.min(Math.max(query.page, 1), totalPages);
  const start = (safePage - 1) * query.pageSize;
  const end = start + query.pageSize;
  const submissions = filtered.slice(start, end);

  return {
    submissions,
    stats: submissionStats,
    pagination: {
      currentPage: safePage,
      totalPages,
      pageSize: query.pageSize,
      totalItems,
    },
  };
};

export const getSubmissionById = async (
  submissionId: string,
): Promise<SubmissionDetailResponse> => {
  await delay(300);

  const submission = submissionData.find(
    (item) => item.id === submissionId,
  );

  if (!submission) {
    throw new Error("Submission not found.");
  }

  return { submission };
};
