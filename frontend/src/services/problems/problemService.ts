import { mockProblems } from '../../mocks/problems'
import type { Problem } from '../../types/problem'

export interface ProblemFilters {
  search?: string
  difficulty?: string
  topic?: string
}

export interface ProblemService {
  getProblems(filters?: ProblemFilters): Promise<Problem[]>
  getProblemById(id: string): Promise<Problem | null>
}

export const problemService: ProblemService = {
  async getProblems(filters?: ProblemFilters): Promise<Problem[]> {
    let problems = [...mockProblems]

    if (filters?.search) {
      const search = filters.search.toLowerCase()
      problems = problems.filter(
        (problem) =>
          problem.title.toLowerCase().includes(search) ||
          problem.topic.toLowerCase().includes(search),
      )
    }

    if (filters?.difficulty && filters.difficulty !== 'All') {
      problems = problems.filter((problem) => problem.difficulty === filters.difficulty)
    }

    if (filters?.topic && filters.topic !== 'All') {
      problems = problems.filter((problem) => problem.topic === filters.topic)
    }

    return problems
  },

  async getProblemById(id: string): Promise<Problem | null> {
    return mockProblems.find((problem) => problem.id === id) ?? null
  },
}

export default problemService
