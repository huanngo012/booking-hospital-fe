import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true
})

instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.code === 'ERR_NETWORK') return error
    return error.response?.data
  }
)

export default instance
