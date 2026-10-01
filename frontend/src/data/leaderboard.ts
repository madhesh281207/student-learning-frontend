import type { LeaderboardStats, LeaderboardUser } from '../types/leaderboard'

export const leaderboardUsers: LeaderboardUser[] = [
  ['alex_chen', 'Alex', 'Chen', 'Stanford University', 9850, 248, 47, 2],
  ['sarah_dev', 'Sarah', 'Williams', 'MIT', 9720, 241, 38, -1],
  ['rahul_codes', 'Rahul', 'Kumar', 'IIT Madras', 9560, 236, 52, 1],
  ['emma_logic', 'Emma', 'Johnson', 'Harvard University', 9410, 229, 31, 3],
  ['codewitharjun', 'Arjun', 'Patel', 'IIT Bombay', 9280, 221, 29, -2],
  ['mia_builds', 'Mia', 'Thompson', 'UC Berkeley', 9140, 216, 24, 4],
  ['dev_krish', 'Krish', 'Sharma', 'IIT Delhi', 8990, 211, 19, 0],
  ['nora_codes', 'Nora', 'Wilson', 'University of Toronto', 8860, 205, 17, 2],
  ['sam_dev', 'Sam', 'Brown', 'Carnegie Mellon', 8720, 198, 22, -3],
  ['meera_algo', 'Meera', 'Rao', 'IIT Hyderabad', 8610, 193, 15, 1],
  ['john_codes', 'John', 'Miller', 'Georgia Tech', 8490, 189, 14, -1],
  ['divya_dev', 'Divya', 'Iyer', 'IIT Kanpur', 8370, 184, 26, 5],
  ['liam_stack', 'Liam', 'Anderson', 'University of Michigan', 8250, 179, 12, 0],
  ['coding_riya', 'Riya', 'Shah', 'IIT Kharagpur', 8130, 175, 18, 2],
  ['noah_programs', 'Noah', 'Davis', 'University of Washington', 8010, 170, 9, -2],
  ['ananya_code', 'Ananya', 'Gupta', 'IIT Roorkee', 7920, 166, 21, 3],
  ['ethan_dev', 'Ethan', 'Clark', 'Cornell University', 7810, 161, 11, -4],
  ['isha_logic', 'Isha', 'Nair', 'IIT Guwahati', 7690, 157, 16, 1],
  ['lucas_algo', 'Lucas', 'Martin', 'Princeton University', 7580, 152, 8, -1],
  ['neha_codes', 'Neha', 'Verma', 'NIT Trichy', 7460, 148, 13, 4],
].map(([username, firstName, lastName, college, score, solvedProblems, streak, rankChange], index) => {
  const totalAttempts = (solvedProblems as number) + 64 + index * 3
  const successfulSubmissions = Math.round(totalAttempts * (0.82 + (index % 5) * 0.02))
  return {
    id: `u${String(index + 1).padStart(3, '0')}`,
    rank: index + 1,
    username: username as string,
    firstName: firstName as string,
    lastName: lastName as string,
    college: college as string,
    score: score as number,
    solvedProblems: solvedProblems as number,
    totalAttempts,
    successfulSubmissions,
    successRate: Number(((successfulSubmissions / totalAttempts) * 100).toFixed(1)),
    streak: streak as number,
    rankChange: rankChange as number,
  }
})

export const colleges = ['All Colleges', ...Array.from(new Set(leaderboardUsers.map((user) => user.college)))]

export const leaderboardStats: LeaderboardStats = {
  totalParticipants: 12847,
  totalProblemsSolved: 184293,
  averageScore: 4860,
  highestScore: 9850,
}
