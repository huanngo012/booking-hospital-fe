import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { images } from '~/assets'
import { theme } from '~/themes'

const { bg_datkham } = images
const HeroSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  return (
    <Box component={'section'} className='hero_section'>
      <Box className='hero_inner' sx={{ background: `url(${bg_datkham})` }}>
        <Container>
          <Stack
            direction={{
              tablet: 'row'
            }}
            alignItems={'center'}
            justifyContent={'space-between'}
            paddingBlock={'30px'}
          >
            <Stack gap={'16px'} alignItems={isTablet ? 'flex-start' : 'center'} className='animate animate--fade-left'>
              <Typography variant={isTablet ? 'h4' : 'h6'} color='var(--primary)'>
                {t('home.hero_section.title')}
              </Typography>
              <Typography variant={isTablet ? 'label1' : 'label2'} color='var(--secondary)'>
                {t('home.hero_section.description')}
              </Typography>
              <Button variant='contained' color='primary'>
                <Typography variant={isTablet ? 'label1' : 'label2'}>{t('home.hero_section.button')}</Typography>
              </Button>
            </Stack>
            <Box component='img' width={'50%'} src='/images/image_1.webp' alt='' />
          </Stack>
        </Container>
        <Box className='hero_rectangle'></Box>
      </Box>
    </Box>
  )
}

export default HeroSection
