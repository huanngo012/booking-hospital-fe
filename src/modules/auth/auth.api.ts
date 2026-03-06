import axios from '~/axios'
import type { Login, LoginResponse, Register, UpdateUser, User } from '~/types/auth'

export const register = (data: Register) =>
  axios({
    url: '/auth/register',
    method: 'post',
    data
  })

export const login = (data: Login): Promise<LoginResponse> =>
  axios({
    url: '/auth/login',
    method: 'post',
    data
  })
export const logout = () =>
  axios({
    url: '/auth/logout',
    method: 'post'
  })

export const refreshToken = (): Promise<Omit<LoginResponse, 'user'>> =>
  axios({
    url: '/auth/refreshtoken',
    method: 'post'
  })

export const getCurrentUser = (): Promise<User> =>
  axios({
    url: '/auth/current',
    method: 'get'
  })

export const updateCurrentUser = (data: UpdateUser): Promise<User> =>
  axios({
    url: '/auth/current',
    method: 'put',
    data
  })
