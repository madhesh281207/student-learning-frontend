import type { AuthenticatedUser } from '../../types/user'

export interface AuthService {
  login(email: string, password: string): Promise<AuthenticatedUser>
  logout(): Promise<void>
  getCurrentUser(): Promise<AuthenticatedUser | null>
}

export const authService: AuthService = {
  async login(): Promise<AuthenticatedUser> {
    return {
      id: 'student-001',
      username: 'alex_student',
      firstName: 'Alex',
      lastName: 'Student',
      email: 'student@example.com',
    }
  },

  async logout(): Promise<void> {
    return Promise.resolve()
  },

  async getCurrentUser(): Promise<AuthenticatedUser | null> {
    return null
  },
}

export default authService
