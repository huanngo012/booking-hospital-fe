import './style.scss'
import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SEO } from '~/components'
import DoctorsHeader from './components/DoctorsHeader'
import DoctorsBody from './components/DoctorsBody'

const DoctorsPage = () => {
  const { t } = useTranslation()

  return (
    <Box className='doctors_page'>
      <SEO
        title={t('pages.doctors.title_seo', {
          brand: t('seo.brand')
        })}
        description={t('pages.doctors.description_seo')}
      />
      <DoctorsHeader />
      <Container>
        <DoctorsBody />
      </Container>
    </Box>
  )
}

export default DoctorsPage
