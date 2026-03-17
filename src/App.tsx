import './App.scss'
import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Loading } from '~/components'
import { privateRoutes, publicRoutes } from './routes/Routes'
import renderRoutes from './routes/RenderRoutes'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'

function App() {
  const { i18n } = useTranslation()
  dayjs.locale(i18n.language)

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {renderRoutes(publicRoutes)}
          {renderRoutes(privateRoutes, true)}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
