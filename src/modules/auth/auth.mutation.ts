import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login, logout, refreshToken, register, updateCurrentUser } from './auth.api'
import { removeAccessToken, setAccessToken } from '~/utils/helper'

export const useRegister = () => {
  return useMutation({
    mutationFn: register
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAccessToken(data.accessToken)
      localStorage.setItem('user', JSON.stringify(data.user))
      queryClient.setQueryData(['user'], data.user)
    }
  })
}

export const useRefreshToken = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: refreshToken,
    onSuccess: (data) => {
      setAccessToken(data.accessToken)
    },
    onError: () => {
      removeAccessToken()
      localStorage.removeItem('user')
      queryClient.setQueryData(['user'], null)
    }
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeAccessToken()
      localStorage.removeItem('user')
      queryClient.setQueryData(['user'], null)
    }
  })
}

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data))
      queryClient.setQueryData(['user'], data)
    }
  })
}
