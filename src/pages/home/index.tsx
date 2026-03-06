import './style.scss'
import { Box } from '@mui/material'
import DownloadSection from './components/DownloadSection'
import IntroSection from './components/IntroSection'
import BlogSection from './components/BlogSection'
import StatisticSection from './components/StatisticSection'
import HeroSection from './components/HeroSection'
import MedicalFacilitiesSliderSection from './components/MedicalFacilitiesSliderSection'
import { SEO } from '~/components'
import { useTranslation } from 'react-i18next'
import BannersSection from './components/BannersSection'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <SEO title={t('pages.home.title_seo')} description={t('pages.home.description_seo')} />
      <IntroSection />
      <BlogSection />
      <BannersSection />
      <MedicalFacilitiesSliderSection />
      <StatisticSection />
      <HeroSection />
      <DownloadSection />
    </Box>
  )
}

export default HomePage
