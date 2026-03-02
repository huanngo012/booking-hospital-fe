import './style.scss'
import { Box } from '@mui/material'
import DownloadSection from './DownloadSection'
import IntroSection from './IntroSection'
import BlogSection from './BlogSection'
import StatisticSection from './StatisticSection'
import HeroSection from './HeroSection'

const HomePage = () => {
  return (
    <Box>
      <IntroSection />
      <BlogSection />
      <StatisticSection />
      <HeroSection />
      <DownloadSection />
    </Box>
  )
}

export default HomePage
