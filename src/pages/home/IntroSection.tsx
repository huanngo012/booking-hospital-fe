import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes/Theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { SERVICES } from '~/utils/constant'
import { images } from '~/assets'

const { homepage_banner } = images

const IntroSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Box component={'section'} className='intro_section'>
      <Box
        className='intro_banner'
        sx={{
          background: `url(${homepage_banner})`
        }}
      >
        <Stack
          alignItems='center'
          gap='16px'
          textAlign='center'
          paddingBlock={'30px'}
          className='container animate animate--fade-in'
        >
          <Typography variant='h5' color='var(--primary)'>
            {t('home.intro_section.sub_title')}
          </Typography>
          <Typography variant={isTablet ? 'h3' : 'h5'} color='var(--secondary)'>
            {t('home.intro_section.title')}
          </Typography>

          <Stack direction={'row'} gap={1} alignItems={'center'} position={'relative'} width='100%'></Stack>
          <Typography variant='body1' color='var(--secondary)'>
            {t('home.intro_section.description')}
          </Typography>
        </Stack>
      </Box>
      <Box
        className='container animate animate--fade-in'
        width='100%'
        marginTop={{
          desktop: '-6%'
        }}
      >
        <Box position={'relative'}>
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={isDesktop}
            breakpoints={{
              700: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 7
              }
            }}
            style={{
              position: 'static',
              paddingBlock: '20px',
              marginBlock: '-20px'
            }}
          >
            {SERVICES.map((el, index) => (
              <SwiperSlide key={index}>
                <Box className='intro_card'>
                  <Box component='img' src={el.icon} alt={el.name} width={'50px'} height={'50px'} />
                  <Typography variant={isTablet ? 'body2' : 'body3'} color='var(--secondary)'>
                    {t(el.name)}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export default IntroSection
