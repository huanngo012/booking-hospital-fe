import { Suspense } from 'react'
import './App.scss'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Loading } from '~/components'
import { privateRoutes, publicRoutes } from './routes/Routes'
import renderRoutes from './routes/RenderRoutes'

function App() {
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
