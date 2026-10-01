import { dashboardData } from '../data/dashboard'
import type { DashboardData } from '../types/dashboard'

export async function getDashboardData(): Promise<DashboardData> {
  return Promise.resolve(dashboardData)
}
