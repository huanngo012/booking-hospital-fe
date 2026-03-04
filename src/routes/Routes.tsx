import { AboutPage, HomePage, MedicalFacilitiesPage, NewsPage, NotFoundPage } from '~/pages'
import { PATHS } from '~/utils/constant'

const privateRoutes = []

const publicRoutes = [
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
