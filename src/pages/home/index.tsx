import './style.scss'
import { Box } from '@mui/material'
import DownloadSection from './DownloadSection'
import IntroSection from './IntroSection'
import BlogSection from './BlogSection'
import StatisticSection from './StatisticSection'
import HeroSection from './HeroSection'
import MedicalFacilitiesSliderSection from './MedicalFacilitiesSliderSection'
import { SEO } from '~/components'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <SEO title={t('home.title_seo')} description={t('home.description_seo')} />
      <IntroSection />
      <BlogSection />
      <StatisticSection />
      <MedicalFacilitiesSliderSection />
      <HeroSection />
      <DownloadSection />
    </Box>
  )
}

export default HomePage
