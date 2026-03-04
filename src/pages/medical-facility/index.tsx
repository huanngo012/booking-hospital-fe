import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SEO } from '~/components'

const MedicalFacilitiesPage = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <SEO title={t('medical_facilities_page.title_seo')} description={t('medical_facilities_page.description_seo')} />
    </Box>
  )
}

export default MedicalFacilitiesPage
