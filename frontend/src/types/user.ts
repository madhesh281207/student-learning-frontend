export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  profilePhoto?: string
  collegeName: string
  description?: string
}

export interface AuthenticatedUser {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

export interface ProfileStats {
  totalProblems: number
  totalAttempts: number
  successfulSubmissions: number
}
