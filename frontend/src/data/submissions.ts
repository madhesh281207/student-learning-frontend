import type { Submission, SubmissionLanguage, SubmissionStatus } from '../types/submission'

const records: Array<[number, number, string, string, SubmissionStatus, SubmissionLanguage, string, string, string, number, number, number]> = [
  [1001, 1, 'Two Sum', 'two-sum', 'Accepted', 'TypeScript', '82 ms', '44.2 MB', '2026-09-25 10:42', 842, 57, 57],
  [1002, 2, 'Valid Parentheses', 'valid-parentheses', 'Wrong Answer', 'TypeScript', '71 ms', '43.8 MB', '2026-09-25 10:15', 713, 31, 45],
  [1003, 2, 'Valid Parentheses', 'valid-parentheses', 'Accepted', 'TypeScript', '69 ms', '43.4 MB', '2026-09-25 10:21', 781, 45, 45],
  [1004, 3, 'Binary Search', 'binary-search', 'Accepted', 'C++', '48 ms', '41.7 MB', '2026-09-24 19:32', 631, 48, 48],
  [1005, 4, 'Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'Time Limit Exceeded', 'Python', '2001 ms', '45.8 MB', '2026-09-24 18:44', 1120, 83, 121],
  [1006, 4, 'Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'Accepted', 'Python', '61 ms', '45.1 MB', '2026-09-24 18:57', 756, 121, 121],
  [1007, 6, 'Palindrome Number', 'palindrome-number', 'Accepted', 'Java', '53 ms', '47.2 MB', '2026-09-23 16:40', 624, 115, 115],
  [1008, 7, 'Reverse Linked List', 'reverse-linked-list', 'Runtime Error', 'C++', '91 ms', '48.5 MB', '2026-09-23 15:28', 932, 12, 37],
  [1009, 8, 'Valid Anagram', 'valid-anagram', 'Accepted', 'TypeScript', '76 ms', '44.8 MB', '2026-09-22 20:12', 713, 52, 52],
  [1010, 9, 'Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'Wrong Answer', 'JavaScript', '88 ms', '46.2 MB', '2026-09-22 19:48', 1290, 48, 95],
  [1011, 9, 'Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'Accepted', 'JavaScript', '79 ms', '45.6 MB', '2026-09-22 20:02', 1371, 95, 95],
  [1012, 11, 'Product of Array Except Self', 'product-of-array-except-self', 'Accepted', 'C++', '54 ms', '46.1 MB', '2026-09-21 18:25', 914, 68, 68],
  [1013, 12, 'Maximum Subarray', 'maximum-subarray', 'Compilation Error', 'TypeScript', '-', '-', '2026-09-21 17:53', 1021, 0, 55],
  [1014, 12, 'Maximum Subarray', 'maximum-subarray', 'Accepted', 'TypeScript', '72 ms', '44.9 MB', '2026-09-21 18:11', 988, 55, 55],
  [1015, 13, 'Binary Tree Level Order Traversal', 'binary-tree-level-order-traversal', 'Accepted', 'Java', '62 ms', '48.8 MB', '2026-09-20 15:42', 1104, 41, 41],
  [1016, 14, 'Number of Islands', 'number-of-islands', 'Wrong Answer', 'Python', '91 ms', '48.2 MB', '2026-09-19 21:14', 1442, 38, 71],
  [1017, 14, 'Number of Islands', 'number-of-islands', 'Accepted', 'Python', '83 ms', '47.6 MB', '2026-09-19 21:35', 1512, 71, 71],
  [1018, 17, 'Merge Intervals', 'merge-intervals', 'Accepted', 'C++', '57 ms', '42.6 MB', '2026-09-18 17:22', 889, 62, 62],
  [1019, 16, 'House Robber', 'house-robber', 'Time Limit Exceeded', 'Java', '2005 ms', '49.1 MB', '2026-09-17 19:46', 972, 91, 104],
  [1020, 16, 'House Robber', 'house-robber', 'Accepted', 'Java', '58 ms', '47.9 MB', '2026-09-17 20:03', 1078, 104, 104],
  [1021, 8, 'Word Ladder', 'word-ladder', 'Wrong Answer', 'TypeScript', '102 ms', '51.4 MB', '2026-09-16 16:38', 1840, 29, 67],
  [1022, 20, 'Trapping Rain Water', 'trapping-rain-water', 'Accepted', 'C++', '49 ms', '41.9 MB', '2026-09-15 18:52', 1211, 56, 56],
]

export const submissions: Submission[] = records.map(([id, problemId, problemTitle, problemSlug, status, language, runtime, memory, submittedAt, codeSize, testCasesPassed, totalTestCases]) => ({ id, problemId, problemTitle, problemSlug, status, language, runtime, memory, submittedAt, codeSize, testCasesPassed, totalTestCases }))
export const submissionLanguages: (SubmissionLanguage | 'All')[] = ['All', 'C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript']
export const submissionStatuses: (SubmissionStatus | 'All')[] = ['All', 'Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Runtime Error', 'Compilation Error']
export const acceptedSubmissions = submissions.filter((submission) => submission.status === 'Accepted')
export const failedSubmissions = submissions.filter((submission) => submission.status !== 'Accepted')
export const submissionAcceptanceRate = submissions.length === 0 ? 0 : Math.round((acceptedSubmissions.length / submissions.length) * 100)
