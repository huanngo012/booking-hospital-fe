import { useEffect, type ReactNode } from 'react'
import { useRefreshToken } from '~/modules/auth/auth.mutation'
import { getAccessToken } from '~/utils/helper'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { mutate } = useRefreshToken()
  useEffect(() => {
    if (getAccessToken()) {
      mutate()
    }
  }, [mutate])

  return children
}

export default AuthProvider
