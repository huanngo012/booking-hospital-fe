import {
  AboutPage,
  HomePage,
  LoginPage,
  MedicalFacilitiesPage,
  MedicalFacilityDetail,
  NewsPage,
  NotFoundPage,
  UserPage
} from '~/pages'
import type { AppRoute } from '~/types/route.type'
import { PATHS } from '~/utils/constant'

const privateRoutes: AppRoute[] = [
  {
    path: PATHS.USER,
    component: UserPage,
    layout: true
  }
]

const publicRoutes: AppRoute[] = [
  { path: PATHS.LOGIN, component: LoginPage, layout: false },
  {
    path: PATHS.HOME,
    component: HomePage,
    layout: true
  },

  {
    path: PATHS.MEDICALFACILITIES,
    component: MedicalFacilitiesPage,
    layout: true
  },
  {
    path: PATHS.MEDICALFACILITY_DETAIL,
    component: MedicalFacilityDetail,
    layout: true
  },
  {
    path: PATHS.NEWS,
    component: NewsPage,
    layout: true
  },
  {
    path: PATHS.ABOUT,
    component: AboutPage,
    layout: true
  },
  { path: PATHS.NOT_FOUND, component: NotFoundPage, layout: true }
]

export { publicRoutes, privateRoutes }
