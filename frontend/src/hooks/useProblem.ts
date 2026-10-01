import { useEffect, useState } from 'react'

import { problemService } from '../services/problems/problemService'
import type { Problem } from '../types/problem'

interface UseProblemResult {
  problem: Problem | null
  isLoading: boolean
  error: string | null
}

export function useProblem(problemId: string | undefined): UseProblemResult {
  const [problem, setProblem] = useState<Problem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadProblem() {
      if (!problemId) {
        setProblem(null)
        setError('Problem ID is missing.')
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError(null)
        const result = await problemService.getProblemById(problemId)
        if (isMounted) {
          setProblem(result)
          if (!result) {
            setError('Problem not found.')
          }
        }
      } catch {
        if (isMounted) {
          setError('Failed to load problem.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadProblem()

    return () => {
      isMounted = false
    }
  }, [problemId])

  return { problem, isLoading, error }
}
