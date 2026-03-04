import './style.scss'
import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SEO } from '~/components'
import MedicalFacilitiesHeader from './components/MedicalFacilitiesHeader'
import MedicalFacilitiesBody from './components/MedicalFacilitiesBody'

const MedicalFacilitiesPage = () => {
  const { t } = useTranslation()

  return (
    <Box className='medical_facilities_page'>
      <SEO title={t('medical_facilities_page.title_seo')} description={t('medical_facilities_page.description_seo')} />
      <MedicalFacilitiesHeader />
      <Container>
        <MedicalFacilitiesBody />
      </Container>
    </Box>
  )
}

export default MedicalFacilitiesPage
