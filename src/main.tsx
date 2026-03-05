import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'
import App from './App.tsx'
import './i18n'
import Providers from './providers'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
