import type { Problem } from "../types/problem";

export const problemData: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    status: "solved",
    solved: true,
    topic: "Array",

    description:
      "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice. You can return the answer in any order.",

    examples: [
      {
        id: "example-1",
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation:
          "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        id: "example-2",
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation:
          "The numbers at indices 1 and 2 add up to 6.",
      },
      {
        id: "example-3",
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],

    constraints: [
      {
        id: "constraint-1",
        text: "2 ≤ nums.length ≤ 10⁴",
      },
      {
        id: "constraint-2",
        text: "-10⁹ ≤ nums[i] ≤ 10⁹",
      },
      {
        id: "constraint-3",
        text: "-10⁹ ≤ target ≤ 10⁹",
      },
      {
        id: "constraint-4",
        text: "Only one valid answer exists.",
      },
    ],

    hints: [
      {
        id: "hint-1",
        title: "Think about complements",
        content:
          "For every number, think about the value that must exist with it to reach the target.",
      },
      {
        id: "hint-2",
        title: "Avoid nested loops",
        content:
          "A hash map can help you remember values that you have already seen.",
      },
    ],

    topics: [
      {
        id: "topic-1",
        name: "Array",
      },
      {
        id: "topic-2",
        name: "Hash Map",
      },
    ],

    languages: [
      {
        id: "javascript",
        name: "JavaScript",
        version: "ES2022",
      },
      {
        id: "typescript",
        name: "TypeScript",
        version: "5.x",
      },
      {
        id: "python",
        name: "Python",
        version: "3.12",
      },
      {
        id: "java",
        name: "Java",
        version: "21",
      },
      {
        id: "cpp",
        name: "C++",
        version: "17",
      },
    ],

    acceptanceRate: 74.2,
    totalSubmissions: 182430,
    totalAttempts: 246180,
    solvedCount: 135420,

    estimatedTime: 20,
    points: 100,

    isBookmarked: true,
    isDailyChallenge: false,

    companyTags: [
      "Google",
      "Amazon",
      "Microsoft",
    ],

    relatedProblems: [
      {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        solved: true,
        acceptanceRate: 68.4,
        topics: ["Array", "Hash Map"],
      },
      {
        id: "3sum",
        title: "3Sum",
        difficulty: "Medium",
        solved: false,
        acceptanceRate: 48.2,
        topics: ["Array", "Two Pointers"],
      },
      {
        id: "four-sum",
        title: "4Sum",
        difficulty: "Medium",
        solved: false,
        acceptanceRate: 39.8,
        topics: ["Array", "Two Pointers"],
      },
    ],

    userStats: {
      totalAttempts: 5,
      successfulSubmissions: 3,
      acceptanceRate: 60,
      averageAttempts: 1.7,
      totalSolved: 1,
    },

    recentSubmissions: [
      {
        id: "sub-001",
        problemId: "two-sum",
        submittedAt: "2026-09-25T14:30:00",
        language: "TypeScript",
        result: "Accepted",
        executionTime: 42,
        memoryUsed: 12.4,
        passedTests: 24,
        totalTests: 24,
      },
      {
        id: "sub-002",
        problemId: "two-sum",
        submittedAt: "2026-09-25T14:12:00",
        language: "TypeScript",
        result: "Wrong Answer",
        executionTime: 38,
        memoryUsed: 12.1,
        passedTests: 18,
        totalTests: 24,
      },
      {
        id: "sub-003",
        problemId: "two-sum",
        submittedAt: "2026-09-24T19:20:00",
        language: "Python",
        result: "Wrong Answer",
        executionTime: 51,
        memoryUsed: 14.2,
        passedTests: 11,
        totalTests: 24,
      },
    ],
  },

  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "Easy",
    status: "attempted",
    solved: false,
    topic: "Stack",

    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and open brackets are closed in the correct order.",

    examples: [
      {
        id: "example-1",
        input: 's = "()"',
        output: "true",
      },
      {
        id: "example-2",
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        id: "example-3",
        input: 's = "(]"',
        output: "false",
      },
    ],

    constraints: [
      {
        id: "constraint-1",
        text: "1 ≤ s.length ≤ 10⁴",
      },
      {
        id: "constraint-2",
        text: "s consists only of parentheses characters.",
      },
    ],

    hints: [
      {
        id: "hint-1",
        title: "Use a stack",
        content:
          "A stack naturally models the last opening bracket that needs to be closed.",
      },
    ],

    topics: [
      {
        id: "topic-1",
        name: "String",
      },
      {
        id: "topic-2",
        name: "Stack",
      },
    ],

    languages: [
      {
        id: "javascript",
        name: "JavaScript",
        version: "ES2022",
      },
      {
        id: "typescript",
        name: "TypeScript",
        version: "5.x",
      },
      {
        id: "python",
        name: "Python",
        version: "3.12",
      },
    ],

    acceptanceRate: 71.1,
    totalSubmissions: 141230,
    totalAttempts: 198240,
    solvedCount: 100430,

    estimatedTime: 15,
    points: 100,

    isBookmarked: false,
    isDailyChallenge: true,

    companyTags: [
      "Amazon",
      "Bloomberg",
    ],

    relatedProblems: [
      {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "Medium",
        solved: false,
        acceptanceRate: 52.1,
        topics: ["Stack", "Design"],
      },
    ],

    userStats: {
      totalAttempts: 2,
      successfulSubmissions: 0,
      acceptanceRate: 0,
      averageAttempts: 2,
      totalSolved: 0,
    },

    recentSubmissions: [
      {
        id: "sub-004",
        problemId: "valid-parentheses",
        submittedAt: "2026-09-24T18:10:00",
        language: "TypeScript",
        result: "Wrong Answer",
        executionTime: 31,
        memoryUsed: 11.3,
        passedTests: 13,
        totalTests: 20,
      },
    ],
  },
];

export const getProblemById = (id: string) => {
  return problemData.find((problem) => problem.id === id);
};
