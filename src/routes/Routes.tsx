import { AboutPage, HomePage, MedicalFacilitiesPage, NewsPage, NotFoundPage } from '~/pages'
import { paths } from '~/utils/constant'

const privateRoutes = []

const publicRoutes = [
  {
    path: paths.HOME,
    component: HomePage,
    layout: true
  },

  {
    path: paths.MEDICALFACILITIES,
    component: MedicalFacilitiesPage,
    layout: true
  },
  {
    path: paths.NEWS,
    component: NewsPage,
    layout: true
  },
  {
    path: paths.ABOUT,
    component: AboutPage,
    layout: true
  },
  { path: paths.NOT_FOUND, component: NotFoundPage, layout: true }
]

export { publicRoutes, privateRoutes }
