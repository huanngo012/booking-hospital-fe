export interface Register {
  name: string
  email: string
  password: string
}

export interface Login {
  email: string
  password: string
}

export interface User {
  _id: number
  name: string
  email: string
  avatar?: string
  address?: string
  role?: string
}

export interface LoginResponse {
  user: User
  accessToken: string
}
