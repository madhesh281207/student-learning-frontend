import type { Problem } from '../types/problem'

const twoSumProblem: Problem = {
  id: 'problem-001',
  title: 'Two Sum',
  difficulty: 'Easy',
  topic: 'Arrays',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  examples: [
    { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' }
  ],
  constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
  inputFormat: 'An array of integers nums and an integer target.',
  outputFormat: 'Return the indices of the two numbers that add up to target.',
  solved: true,
  starterCode: 'function twoSum(nums, target) {\n  // Write your code here\n}'
}

export const mockProblems: Problem[] = [
  twoSumProblem,
  {
    id: 'problem-002',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stacks',
    description:
      'Given a string containing parentheses, determine whether the input string is valid.',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "([)]"', output: 'false' },
    ],
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses characters only.'],
    inputFormat: 'A string containing parentheses.',
    outputFormat: 'Return true if the parentheses are valid, otherwise false.',
    solved: true,
  },
  {
    id: 'problem-003',
    title: 'Binary Search',
    difficulty: 'Easy',
    topic: 'Searching',
    description:
      'Given a sorted array of integers and a target value, return the index of the target if it exists.',
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      'All values in nums are unique.',
      'nums is sorted in ascending order.',
    ],
    inputFormat: 'A sorted integer array nums and an integer target.',
    outputFormat: 'Return the index of target, or -1 if target does not exist.',
    solved: false,
  },
  {
    id: 'problem-004',
    title: 'Merge Sorted Array',
    difficulty: 'Easy',
    topic: 'Arrays',
    description: 'Merge two sorted arrays into a single sorted array.',
    examples: [{ input: 'nums1 = [1,2,3], nums2 = [2,5,6]', output: '[1,2,2,3,5,6]' }],
    constraints: ['Both arrays are sorted in non-decreasing order.', 'The resulting array must also be sorted.'],
    inputFormat: 'Two sorted integer arrays.',
    outputFormat: 'Return the merged sorted array.',
    solved: true,
  },
  {
    id: 'problem-005',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    topic: 'Strings',
    description:
      'Given a string, find the length of the longest substring without repeating characters.',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc".' },
      { input: 's = "bbbbb"', output: '1' },
    ],
    constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces.'],
    inputFormat: 'A string s.',
    outputFormat: 'Return the length of the longest substring without repeating characters.',
    solved: false,
  },
  {
    id: 'problem-006',
    title: 'Climbing Stairs',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description:
      'You are climbing a staircase with n steps. Each time you can climb either one or two steps. Determine how many distinct ways you can reach the top.',
    examples: [{ input: 'n = 2', output: '2' }, { input: 'n = 3', output: '3' }],
    constraints: ['1 <= n <= 45'],
    inputFormat: 'An integer n.',
    outputFormat: 'Return the number of distinct ways to reach the top.',
    solved: false,
  },
  {
    id: 'problem-007',
    title: 'Coin Change',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description:
      'Given coin denominations and a target amount, return the minimum number of coins needed to make that amount.',
    examples: [{ input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1.' }],
    constraints: ['1 <= coins.length <= 12', '1 <= coins[i] <= 2^31 - 1', '0 <= amount <= 10^4'],
    inputFormat: 'An integer array coins and an integer amount.',
    outputFormat: 'Return the minimum number of coins required, or -1 if impossible.',
    solved: false,
  },
  {
    id: 'problem-008',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    topic: 'Arrays',
    description:
      'Given an array representing elevation heights, calculate how much water can be trapped after raining.',
    examples: [{ input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }],
    constraints: ['1 <= height.length <= 2 * 10^4', '0 <= height[i] <= 10^5'],
    inputFormat: 'An integer array representing elevation heights.',
    outputFormat: 'Return the total amount of trapped water.',
    solved: false,
  },
]
