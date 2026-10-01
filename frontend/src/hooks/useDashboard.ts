import { useEffect, useState } from 'react'

import { getDashboardData } from '../services/dashboardService'
import type { DashboardData } from '../types/dashboard'

interface UseDashboardResult {
  data: DashboardData | null
  isLoading: boolean
  error: string | null
}

export function useDashboard(): UseDashboardResult {
  const [data, setData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadDashboard() {
      try {
        setIsLoading(true)
        setError(null)

        const dashboardData = await getDashboardData()

        if (isMounted) {
          setData(dashboardData)
        }
      } catch {
        if (isMounted) {
          setError('Failed to load dashboard data.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadDashboard()

    return () => {
      isMounted = false
    }
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}
