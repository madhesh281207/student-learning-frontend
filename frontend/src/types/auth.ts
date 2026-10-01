export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  profilePhoto?: File
  collegeName: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken?: string
  refreshToken?: string
}
