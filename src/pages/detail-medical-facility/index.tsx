import { Box, Container, Stack } from '@mui/material'
import './style.scss'
import { BreadscrumbCustom, Loading, SEO } from '~/components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useMedicalFacility } from '~/modules/medical-facility/medical-facility.query'
import NotFoundPage from '../not-found'
import { PATHS } from '~/utils/constant'
import MedicalFacilityDetailHeader from './components/MedicalFacilityDetailHeader'
import MedicalFacilityDetailBody from './components/MedicalFacilityDetailBody'

const MedicalFacilityDetail = () => {
  const { t } = useTranslation()
  const { slug } = useParams()

  const { data, isLoading, isError } = useMedicalFacility(slug as string)

  if (isLoading) return <Loading />

  if (isError || !data) {
    return <NotFoundPage />
  }

  return (
    <Box className='medical_facility_detail_page'>
      <SEO title={data.name} description={data.description} />
      <Container>
        <BreadscrumbCustom
          data={[{ title: t('navigation.medical_facilities'), link: PATHS.MEDICALFACILITIES }, { title: data.name }]}
        />
        <Stack gap={2.5}>
          <MedicalFacilityDetailHeader medicalFacility={data} />
          <MedicalFacilityDetailBody medicalFacility={data} />
        </Stack>
      </Container>
    </Box>
  )
}

export default MedicalFacilityDetail
