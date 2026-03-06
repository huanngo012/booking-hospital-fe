import { Route } from 'react-router-dom'
import { Fragment } from 'react'
import { Layout } from '~/components'
import PrivateRoute from './PrivateRoute'
import type { AppRoute } from '~/types/route.type'

const renderRoutes = (routes: AppRoute[], isPrivate = false) =>
  routes.map((route) => {
    const Page = route.component
    const LayoutTag = route.layout ? Layout : Fragment

    const element = (
      <LayoutTag>
        <Page />
      </LayoutTag>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
      />
    )
  })

export default renderRoutes
