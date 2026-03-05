import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { images } from '~/assets'
import { BreadscrumbCustom } from '~/components'
import { theme } from '~/themes'

const { medical_facilities_banner } = images

const MedicalFacilitiesHeader = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const variant1 = isDesktop ? 'h3' : 'h5'
  const variant2 = isDesktop ? 'h5' : 'label1'

  return (
    <Box className='medical_facilities_header' sx={{ background: `url(${medical_facilities_banner})` }}>
      <Container>
        <Box className='medical_facilities_header-inner'>
          {<BreadscrumbCustom data={[{ title: t('medical_facilities_page.breadcrumb') }]} />}
          <Box className='medical_facilities_header-text'>
            <Typography variant={variant1} color='var(--primary)' className='medical-facilities__title'>
              {t('medical_facilities_page.title')}
            </Typography>

            <Typography variant={variant2} color='var(--secondary)' className='medical-facilities__description'>
              {t('medical_facilities_page.description')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MedicalFacilitiesHeader
