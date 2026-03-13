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
      <SEO
        title={t('pages.medical_facilities.title_seo', {
          brand: t('seo.brand')
        })}
        description={t('pages.medical_facilities.description_seo')}
      />
      <MedicalFacilitiesHeader />
      <Container>
        <MedicalFacilitiesBody />
      </Container>
    </Box>
  )
}

export default MedicalFacilitiesPage
