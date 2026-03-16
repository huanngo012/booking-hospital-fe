import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { images } from '~/assets'
import { BreadscrumbCustom } from '~/components'
import { theme } from '~/themes'

const { background_banner, doctors_banner } = images

const DoctorsHeader = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const variant1 = isDesktop ? 'h4' : 'h5'

  return (
    <Box className='doctors_header' sx={{ background: `url(${background_banner})` }}>
      <Container>
        <Grid container spacing={1} height={'100%'}>
          <Grid size={{ mobile: 12, desktop: 6 }}>
            <Box className='doctors_header-inner'>
              {<BreadscrumbCustom data={[{ title: t('navigation.doctors') }]} />}
              <Box className='doctors_header-text'>
                <Typography variant={variant1} color='var(--primary)' className='medical-facilities__title'>
                  {t('pages.doctors.title')}
                </Typography>

                <Typography variant={'label1'} color='var(--secondary)' className='medical-facilities__description'>
                  {t('pages.doctors.description')}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ mobile: 12, desktop: 6 }}>
            <Box component={'img'} src={doctors_banner} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default DoctorsHeader
