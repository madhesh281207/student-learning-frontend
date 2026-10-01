import {
  categoryStats,
  continueProblems,
  practiceProblems,
  practiceStats,
  recommendedProblems,
} from "../data/practiceData";

import type {
  PracticeCategory,
  PracticeDifficulty,
  PracticeFilters,
  PracticeProblem,
  PracticeProblemResponse,
  PracticeResponse,
} from "../types/practice";

const delay = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const categoryLabels: Record<PracticeCategory, string> = {
  arrays: "Arrays",
  strings: "Strings",
  "linked-list": "Linked List",
  stack: "Stack",
  queue: "Queue",
  trees: "Trees",
  graphs: "Graphs",
  "dynamic-programming": "Dynamic Programming",
  sorting: "Sorting",
  searching: "Searching",
  greedy: "Greedy",
  recursion: "Recursion",
  math: "Math",
};

const normalize = (value: string) =>
  value.toLowerCase().trim();

export const practiceService = {
  async getPractice(
    filters: PracticeFilters,
    page = 1,
    limit = 9,
  ): Promise<PracticeResponse> {
    await delay(500);

    let filtered = [...practiceProblems];

    if (filters.search.trim()) {
      const search = normalize(filters.search);

      filtered = filtered.filter((problem) => {
        const searchableText = [
          problem.title,
          problem.description,
          problem.category,
          ...problem.topics,
          ...problem.concepts,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(search);
      });
    }

    if (filters.difficulty !== "all") {
      filtered = filtered.filter(
        (problem) =>
          problem.difficulty === filters.difficulty,
      );
    }

    if (filters.category !== "all") {
      filtered = filtered.filter(
        (problem) =>
          problem.category === filters.category,
      );
    }

    if (filters.status !== "all") {
      filtered = filtered.filter(
        (problem) =>
          problem.status === filters.status,
      );
    }

    if (filters.bookmarkedOnly) {
      filtered = filtered.filter(
        (problem) => problem.isBookmarked,
      );
    }

    switch (filters.sort) {
      case "difficulty":
        const difficultyOrder: Record<PracticeDifficulty, number> = {
          easy: 1,
          medium: 2,
          hard: 3,
        };

        filtered.sort(
          (a, b) =>
            difficultyOrder[a.difficulty] -
            difficultyOrder[b.difficulty],
        );
        break;

      case "progress":
        filtered.sort(
          (a, b) =>
            b.completionPercentage -
            a.completionPercentage,
        );
        break;

      case "recent":
        filtered.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime(),
        );
        break;

      default:
        filtered.sort((a, b) => {
          if (
            a.isRecommended !== b.isRecommended
          ) {
            return a.isRecommended ? -1 : 1;
          }

          return (
            b.completionPercentage -
            a.completionPercentage
          );
        });
    }

    const totalResults = filtered.length;

    const totalPages = Math.max(
      1,
      Math.ceil(totalResults / limit),
    );

    const safePage = Math.min(
      Math.max(page, 1),
      totalPages,
    );

    const start = (safePage - 1) * limit;

    const problems = filtered.slice(
      start,
      start + limit,
    );

    return {
      problems,
      recommendedProblems,
      continueProblems,
      stats: practiceStats,
      categoryStats,
      totalResults,
      currentPage: safePage,
      totalPages,
    };
  },

  async getProblem(
    id: string,
  ): Promise<PracticeProblemResponse | null> {
    await delay(400);

    const problem = practiceProblems.find(
      (item: PracticeProblem) =>
        item.id === id || item.slug === id,
    );

    if (!problem) {
      return null;
    }

    const relatedProblems = practiceProblems
      .filter(
        (item: PracticeProblem) =>
          item.id !== problem.id &&
          (item.category === problem.category ||
            item.topics.some((topic: string) =>
              problem.topics.includes(topic),
            )),
      )
      .slice(0, 4);

    return {
      problem,
      relatedProblems,
    };
  },

  async toggleBookmark(
    id: string,
  ): Promise<PracticeProblem | null> {
    await delay(250);

    const problem = practiceProblems.find(
      (item: PracticeProblem) => item.id === id,
    );

    if (!problem) {
      return null;
    }

    problem.isBookmarked = !problem.isBookmarked;

    return problem;
  },

  async markStarted(
    id: string,
  ): Promise<PracticeProblem | null> {
    await delay(250);

    const problem = practiceProblems.find(
      (item: PracticeProblem) => item.id === id,
    );

    if (!problem) {
      return null;
    }

    if (problem.status === "not-started") {
      problem.status = "in-progress";
      problem.completionPercentage = Math.max(
        problem.completionPercentage,
        5,
      );
    }

    return problem;
  },

  getCategoryLabel(category: PracticeCategory) {
    return categoryLabels[category];
  },
};
