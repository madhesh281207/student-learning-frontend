import type {
  PracticeCategoryStats,
  PracticeProblem,
  PracticeStats,
} from "../types/practice";

export const practiceStats: PracticeStats = {
  totalProblems: 240,
  completedProblems: 68,
  inProgressProblems: 12,
  attemptedProblems: 104,

  totalPoints: 24000,
  earnedPoints: 8240,

  currentStreak: 7,
  longestStreak: 21,

  dailyGoal: 5,
  dailyCompleted: 3,

  weeklyCompleted: 19,
  weeklyGoal: 25,

  completionPercentage: 28,
};

export const categoryStats: PracticeCategoryStats[] = [
  {
    category: "arrays",
    label: "Arrays",
    total: 32,
    completed: 14,
    percentage: 44,
  },
  {
    category: "strings",
    label: "Strings",
    total: 24,
    completed: 9,
    percentage: 38,
  },
  {
    category: "linked-list",
    label: "Linked List",
    total: 18,
    completed: 5,
    percentage: 28,
  },
  {
    category: "stack",
    label: "Stack",
    total: 16,
    completed: 6,
    percentage: 38,
  },
  {
    category: "queue",
    label: "Queue",
    total: 14,
    completed: 4,
    percentage: 29,
  },
  {
    category: "trees",
    label: "Trees",
    total: 28,
    completed: 8,
    percentage: 29,
  },
  {
    category: "graphs",
    label: "Graphs",
    total: 26,
    completed: 5,
    percentage: 19,
  },
  {
    category: "dynamic-programming",
    label: "Dynamic Programming",
    total: 22,
    completed: 3,
    percentage: 14,
  },
  {
    category: "sorting",
    label: "Sorting",
    total: 15,
    completed: 7,
    percentage: 47,
  },
  {
    category: "searching",
    label: "Searching",
    total: 14,
    completed: 5,
    percentage: 36,
  },
  {
    category: "greedy",
    label: "Greedy",
    total: 12,
    completed: 2,
    percentage: 17,
  },
  {
    category: "recursion",
    label: "Recursion",
    total: 11,
    completed: 0,
    percentage: 0,
  },
  {
    category: "math",
    label: "Math",
    total: 8,
    completed: 0,
    percentage: 0,
  },
];

const createProblem = (
  problem: PracticeProblem,
): PracticeProblem => problem;

export const practiceProblems: PracticeProblem[] = [
  createProblem({
    id: "two-sum",
    title: "Two Sum",
    slug: "two-sum",
    description:
      "Given an array of integers and a target value, find two distinct numbers whose sum equals the target.",
    difficulty: "easy",
    category: "arrays",
    topics: ["Arrays", "Hash Map"],
    estimatedMinutes: 15,
    points: 100,
    status: "completed",
    completionPercentage: 100,
    solvedCount: 18452,
    attemptCount: 22410,
    successRate: 82,
    isRecommended: true,
    isFeatured: true,
    isBookmarked: true,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation:
          "The values at indices 0 and 1 add up to the target.",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation:
          "The values 2 and 4 add up to 6.",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Each input has exactly one valid answer.",
    ],
    hints: [
      {
        id: "two-sum-h1",
        title: "Think about lookup",
        content:
          "Instead of checking every pair, consider storing previously seen values.",
      },
      {
        id: "two-sum-h2",
        title: "Complement",
        content:
          "For each number, calculate target - number and check whether it was already seen.",
      },
    ],
    concepts: ["Arrays", "Hash Maps", "Time Complexity"],
    createdAt: "2026-01-10",
    updatedAt: "2026-09-20",
  }),

  createProblem({
    id: "valid-parentheses",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description:
      "Determine whether a string containing brackets is valid according to matching and ordering rules.",
    difficulty: "easy",
    category: "stack",
    topics: ["Stack", "Strings"],
    estimatedMinutes: 15,
    points: 100,
    status: "completed",
    completionPercentage: 100,
    solvedCount: 16231,
    attemptCount: 19432,
    successRate: 84,
    isRecommended: true,
    isFeatured: true,
    isBookmarked: false,
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses, brackets, and braces.",
    ],
    hints: [
      {
        id: "parentheses-h1",
        title: "Use a stack",
        content:
          "Opening brackets can be stored until their matching closing bracket appears.",
      },
    ],
    concepts: ["Stack", "Strings"],
    createdAt: "2026-01-12",
    updatedAt: "2026-09-19",
  }),

  createProblem({
    id: "maximum-subarray",
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    description:
      "Find the contiguous subarray with the largest possible sum.",
    difficulty: "medium",
    category: "arrays",
    topics: ["Arrays", "Dynamic Programming"],
    estimatedMinutes: 25,
    points: 150,
    status: "in-progress",
    completionPercentage: 65,
    solvedCount: 14321,
    attemptCount: 22109,
    successRate: 65,
    isRecommended: true,
    isFeatured: true,
    isBookmarked: true,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation:
          "The subarray [4,-1,2,1] has the largest sum.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
    ],
    hints: [
      {
        id: "maximum-subarray-h1",
        title: "Track the best ending here",
        content:
          "At each position, decide whether extending the current subarray is better than starting fresh.",
      },
      {
        id: "maximum-subarray-h2",
        title: "Dynamic programming",
        content:
          "Maintain the maximum sum of a subarray ending at the current position.",
      },
    ],
    concepts: ["Arrays", "Dynamic Programming", "Kadane's Algorithm"],
    createdAt: "2026-02-02",
    updatedAt: "2026-09-21",
  }),

  createProblem({
    id: "binary-search",
    title: "Binary Search",
    slug: "binary-search",
    description:
      "Search for a target value in a sorted array using an efficient search strategy.",
    difficulty: "easy",
    category: "searching",
    topics: ["Binary Search", "Arrays"],
    estimatedMinutes: 20,
    points: 100,
    status: "completed",
    completionPercentage: 100,
    solvedCount: 17129,
    attemptCount: 19901,
    successRate: 86,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "All values in nums are unique.",
      "nums is sorted in ascending order.",
    ],
    hints: [
      {
        id: "binary-search-h1",
        title: "Use the middle",
        content:
          "Compare the target with the middle element and eliminate half of the search space.",
      },
    ],
    concepts: ["Binary Search", "Arrays", "Logarithmic Complexity"],
    createdAt: "2026-02-15",
    updatedAt: "2026-09-10",
  }),

  createProblem({
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    description:
      "Reverse the direction of a singly linked list and return the new head.",
    difficulty: "easy",
    category: "linked-list",
    topics: ["Linked List", "Pointers"],
    estimatedMinutes: 20,
    points: 100,
    status: "in-progress",
    completionPercentage: 35,
    solvedCount: 13214,
    attemptCount: 18102,
    successRate: 73,
    isRecommended: true,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
    ],
    constraints: [
      "The number of nodes is in the range [0, 5000].",
      "-5000 <= Node.val <= 5000",
    ],
    hints: [
      {
        id: "reverse-list-h1",
        title: "Keep track of three references",
        content:
          "Think about the current node, the previous node, and the next node.",
      },
    ],
    concepts: ["Linked Lists", "Pointers", "Iteration"],
    createdAt: "2026-03-01",
    updatedAt: "2026-09-17",
  }),

  createProblem({
    id: "climbing-stairs",
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    description:
      "Calculate the number of distinct ways to reach the top of a staircase when you can climb one or two steps at a time.",
    difficulty: "easy",
    category: "dynamic-programming",
    topics: ["Dynamic Programming", "Recursion"],
    estimatedMinutes: 20,
    points: 100,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 11892,
    attemptCount: 14900,
    successRate: 79,
    isRecommended: true,
    isFeatured: false,
    isBookmarked: true,
    examples: [
      {
        input: "n = 2",
        output: "2",
      },
      {
        input: "n = 3",
        output: "3",
      },
    ],
    constraints: [
      "1 <= n <= 45",
    ],
    hints: [
      {
        id: "stairs-h1",
        title: "Look at the previous two steps",
        content:
          "The number of ways to reach a step depends on the number of ways to reach the previous two steps.",
      },
    ],
    concepts: ["Dynamic Programming", "Recursion", "Memoization"],
    createdAt: "2026-03-10",
    updatedAt: "2026-09-15",
  }),

  createProblem({
    id: "merge-sorted-arrays",
    title: "Merge Sorted Arrays",
    slug: "merge-sorted-arrays",
    description:
      "Merge two sorted arrays into one sorted sequence while preserving ordering.",
    difficulty: "easy",
    category: "sorting",
    topics: ["Arrays", "Two Pointers", "Sorting"],
    estimatedMinutes: 20,
    points: 100,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 10982,
    attemptCount: 14021,
    successRate: 78,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "a = [1,3,5], b = [2,4,6]",
        output: "[1,2,3,4,5,6]",
      },
    ],
    constraints: [
      "Both input arrays are sorted.",
      "The resulting array must remain sorted.",
    ],
    hints: [
      {
        id: "merge-h1",
        title: "Compare the front elements",
        content:
          "Use two positions and repeatedly choose the smaller current value.",
      },
    ],
    concepts: ["Arrays", "Two Pointers", "Sorting"],
    createdAt: "2026-03-15",
    updatedAt: "2026-09-12",
  }),

  createProblem({
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    description:
      "Find the length of the longest substring that contains no repeated characters.",
    difficulty: "medium",
    category: "strings",
    topics: ["Strings", "Sliding Window", "Hash Map"],
    estimatedMinutes: 30,
    points: 150,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 9781,
    attemptCount: 16122,
    successRate: 61,
    isRecommended: true,
    isFeatured: true,
    isBookmarked: false,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation:
          'The answer is "abc", with length 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
      },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    hints: [
      {
        id: "substring-h1",
        title: "Sliding window",
        content:
          "Maintain a window that contains only unique characters.",
      },
      {
        id: "substring-h2",
        title: "Move the left boundary",
        content:
          "When a duplicate appears, move the left boundary beyond its previous position.",
      },
    ],
    concepts: ["Strings", "Sliding Window", "Hash Maps"],
    createdAt: "2026-04-01",
    updatedAt: "2026-09-22",
  }),

  createProblem({
    id: "binary-tree-level-order",
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order",
    description:
      "Return the values of a binary tree grouped by their depth from the root.",
    difficulty: "medium",
    category: "trees",
    topics: ["Trees", "BFS", "Queue"],
    estimatedMinutes: 30,
    points: 150,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 8210,
    attemptCount: 13002,
    successRate: 63,
    isRecommended: true,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
    ],
    constraints: [
      "The number of nodes is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000",
    ],
    hints: [
      {
        id: "tree-level-h1",
        title: "Breadth-first traversal",
        content:
          "A queue can process nodes level by level.",
      },
    ],
    concepts: ["Binary Trees", "BFS", "Queues"],
    createdAt: "2026-04-10",
    updatedAt: "2026-09-18",
  }),

  createProblem({
    id: "number-of-islands",
    title: "Number of Islands",
    slug: "number-of-islands",
    description:
      "Count the number of connected groups of land cells in a two-dimensional grid.",
    difficulty: "medium",
    category: "graphs",
    topics: ["Graphs", "DFS", "BFS", "Matrix"],
    estimatedMinutes: 35,
    points: 175,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 7441,
    attemptCount: 12871,
    successRate: 58,
    isRecommended: true,
    isFeatured: true,
    isBookmarked: true,
    examples: [
      {
        input:
          '[["1","1","0"],["1","1","0"],["0","0","1"]]',
        output: "2",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m,n <= 300",
    ],
    hints: [
      {
        id: "islands-h1",
        title: "Explore connected cells",
        content:
          "When you find an unvisited land cell, explore all land cells connected to it.",
      },
    ],
    concepts: ["Graphs", "DFS", "BFS", "Matrix"],
    createdAt: "2026-04-18",
    updatedAt: "2026-09-20",
  }),

  createProblem({
    id: "house-robber",
    title: "House Robber",
    slug: "house-robber",
    description:
      "Determine the maximum amount of money that can be collected without selecting adjacent houses.",
    difficulty: "medium",
    category: "dynamic-programming",
    topics: ["Dynamic Programming", "Arrays"],
    estimatedMinutes: 30,
    points: 150,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 7032,
    attemptCount: 11022,
    successRate: 64,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
      },
    ],
    constraints: [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400",
    ],
    hints: [
      {
        id: "robber-h1",
        title: "Choose or skip",
        content:
          "At each house you can either take its value or skip it.",
      },
    ],
    concepts: ["Dynamic Programming", "Arrays"],
    createdAt: "2026-05-01",
    updatedAt: "2026-09-14",
  }),

  createProblem({
    id: "three-sum",
    title: "3Sum",
    slug: "three-sum",
    description:
      "Find all unique triplets in an array whose values add up to zero.",
    difficulty: "medium",
    category: "arrays",
    topics: ["Arrays", "Two Pointers", "Sorting"],
    estimatedMinutes: 35,
    points: 175,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 6241,
    attemptCount: 11901,
    successRate: 52,
    isRecommended: false,
    isFeatured: true,
    isBookmarked: false,
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
    ],
    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5",
    ],
    hints: [
      {
        id: "three-sum-h1",
        title: "Sort first",
        content:
          "Sorting can help you use a two-pointer strategy after fixing one element.",
      },
    ],
    concepts: ["Arrays", "Sorting", "Two Pointers"],
    createdAt: "2026-05-15",
    updatedAt: "2026-09-11",
  }),

  createProblem({
    id: "course-schedule",
    title: "Course Schedule",
    slug: "course-schedule",
    description:
      "Determine whether all courses can be completed given a collection of prerequisite relationships.",
    difficulty: "medium",
    category: "graphs",
    topics: ["Graphs", "Topological Sort", "BFS"],
    estimatedMinutes: 40,
    points: 200,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 5198,
    attemptCount: 10111,
    successRate: 51,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input:
          "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
    ],
    hints: [
      {
        id: "course-h1",
        title: "Look for cycles",
        content:
          "A prerequisite cycle prevents all courses from being completed.",
      },
    ],
    concepts: ["Graphs", "Topological Sort", "Cycle Detection"],
    createdAt: "2026-05-20",
    updatedAt: "2026-09-08",
  }),

  createProblem({
    id: "coin-change",
    title: "Coin Change",
    slug: "coin-change",
    description:
      "Find the minimum number of coins required to make a target amount.",
    difficulty: "medium",
    category: "dynamic-programming",
    topics: ["Dynamic Programming", "Arrays"],
    estimatedMinutes: 35,
    points: 175,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 4810,
    attemptCount: 9822,
    successRate: 49,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: true,
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    constraints: [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4",
    ],
    hints: [
      {
        id: "coin-h1",
        title: "Build from smaller amounts",
        content:
          "The answer for an amount can depend on answers for smaller amounts.",
      },
    ],
    concepts: ["Dynamic Programming", "Arrays"],
    createdAt: "2026-06-01",
    updatedAt: "2026-09-05",
  }),

  createProblem({
    id: "merge-intervals",
    title: "Merge Intervals",
    slug: "merge-intervals",
    description:
      "Merge all overlapping intervals into a collection of non-overlapping intervals.",
    difficulty: "medium",
    category: "sorting",
    topics: ["Arrays", "Sorting", "Intervals"],
    estimatedMinutes: 30,
    points: 150,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 5811,
    attemptCount: 9921,
    successRate: 59,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
    ],
    hints: [
      {
        id: "merge-intervals-h1",
        title: "Sort by start",
        content:
          "Sorting intervals by their starting value makes overlap detection easier.",
      },
    ],
    concepts: ["Sorting", "Intervals", "Arrays"],
    createdAt: "2026-06-08",
    updatedAt: "2026-09-01",
  }),

  createProblem({
    id: "fibonacci",
    title: "Fibonacci Number",
    slug: "fibonacci-number",
    description:
      "Calculate the nth number in the Fibonacci sequence.",
    difficulty: "easy",
    category: "recursion",
    topics: ["Recursion", "Dynamic Programming", "Math"],
    estimatedMinutes: 15,
    points: 75,
    status: "not-started",
    completionPercentage: 0,
    solvedCount: 19400,
    attemptCount: 21002,
    successRate: 92,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "n = 2",
        output: "1",
      },
      {
        input: "n = 4",
        output: "3",
      },
    ],
    constraints: [
      "0 <= n <= 30",
    ],
    hints: [
      {
        id: "fib-h1",
        title: "Start with the base cases",
        content:
          "The first two Fibonacci values form the foundation for later values.",
      },
    ],
    concepts: ["Recursion", "Dynamic Programming", "Math"],
    createdAt: "2026-06-15",
    updatedAt: "2026-08-30",
  }),

  createProblem({
    id: "contains-duplicate",
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    description:
      "Determine whether an array contains any value that appears more than once.",
    difficulty: "easy",
    category: "arrays",
    topics: ["Arrays", "Hash Set"],
    estimatedMinutes: 10,
    points: 75,
    status: "completed",
    completionPercentage: 100,
    solvedCount: 17631,
    attemptCount: 18801,
    successRate: 89,
    isRecommended: false,
    isFeatured: false,
    isBookmarked: false,
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
    ],
    hints: [
      {
        id: "duplicate-h1",
        title: "Remember what you have seen",
        content:
          "A set can efficiently track values encountered earlier.",
      },
    ],
    concepts: ["Arrays", "Hash Sets"],
    createdAt: "2026-07-01",
    updatedAt: "2026-08-29",
  }),
];

export const featuredProblems = practiceProblems.filter(
  (problem) => problem.isFeatured,
);

export const recommendedProblems = practiceProblems.filter(
  (problem) => problem.isRecommended,
);

export const continueProblems = practiceProblems.filter(
  (problem) =>
    problem.status === "in-progress" ||
    problem.status === "not-started",
);
