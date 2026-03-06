import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { PATHS } from '~/utils/constant'
import { getAccessToken } from '~/utils/helper'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = getAccessToken()

  if (!token) {
    return <Navigate to={PATHS.LOGIN} replace />
  }

  return children
}

export default PrivateRoute
