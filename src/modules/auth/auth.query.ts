import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from './auth.api'
import { type User } from '~/types/auth'
import { getAccessToken } from '~/utils/helper'

export const useUser = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: () => getCurrentUser(),
    enabled: !!getAccessToken(),
    refetchOnMount: false,
    initialData: () => {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : undefined
    }
  })
}
