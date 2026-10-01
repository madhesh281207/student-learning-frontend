import { progressData } from '../../data/progress'
import type { ProgressData } from '../../types/progress'

export interface ProgressService {
  getProgress(): Promise<ProgressData>
}

export const progressService: ProgressService = {
  async getProgress() {
    return progressData
  },
}

export default progressService
