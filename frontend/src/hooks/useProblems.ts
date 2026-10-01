import { useEffect, useState } from 'react'

import { problemService, type ProblemFilters } from '../services/problems/problemService'
import type { Problem } from '../types/problem'

interface UseProblemsResult {
  problems: Problem[]
  isLoading: boolean
  error: string | null
}

export function useProblems(filters: ProblemFilters): UseProblemsResult {
  const [problems, setProblems] = useState<Problem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadProblems() {
      try {
        setIsLoading(true)
        setError(null)
        const result = await problemService.getProblems(filters)
        if (isMounted) {
          setProblems(result)
        }
      } catch {
        if (isMounted) {
          setError('Failed to load problems.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadProblems()

    return () => {
      isMounted = false
    }
  }, [filters.search, filters.difficulty, filters.topic])

  return { problems, isLoading, error }
}
