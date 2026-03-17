import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import './index.css'
import App from './App.tsx'
import './i18n'
import Providers from './providers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
