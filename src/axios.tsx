import axios from 'axios'
import { getAccessToken } from './utils/helper'
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
  function (response) {
    return response.data.data
  },
  function (error) {
    if (error.code === 'ERR_NETWORK') return Promise.reject(error)
    return Promise.reject(error.response?.data || error)
  }
)

export default instance
