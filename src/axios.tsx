import axios from 'axios'
import { getAccessToken, removeAccessToken, setAccessToken } from './utils/helper'
import { refreshToken } from './modules/auth/auth.api'
import { useQueryClient } from '@tanstack/react-query'
import { PATHS } from './utils/constant'
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  (response) => response.data.data,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refreshtoken')
    ) {
      originalRequest._retry = true

      try {
        const res = await refreshToken()

        const newToken = res.accessToken

        setAccessToken(newToken)

        originalRequest.headers.Authorization = `Bearer ${newToken}`

        return instance(originalRequest)
      } catch {
        const queryClient = useQueryClient()
        removeAccessToken()
        localStorage.removeItem('user')
        queryClient.setQueryData(['user'], null)

        window.location.href = PATHS.LOGIN
      }
    }

    return Promise.reject(error.response?.data)
  }
)

export default instance
