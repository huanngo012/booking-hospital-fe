import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes'
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
        <Container className=' animate animate--fade-in'>
          <Stack alignItems='center' gap='16px' textAlign='center' paddingBlock={'30px'}>
            <Typography variant='h5' color='var(--primary)'>
              {t('pages.home.intro_section.sub_title')}
            </Typography>
            <Typography variant={isTablet ? 'h3' : 'h5'} color='var(--secondary)'>
              {t('pages.home.intro_section.title')}
            </Typography>

            <Stack direction={'row'} gap={1} alignItems={'center'} position={'relative'} width='100%'></Stack>
            <Typography variant='body1' color='var(--secondary)'>
              {t('pages.home.intro_section.description')}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container
        className=' animate animate--fade-in'
        sx={{
          marginTop: {
            desktop: '-6%'
          }
        }}
      >
        <Box position={'relative'}>
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={isDesktop}
            breakpoints={{
              768: {
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
      </Container>
    </Box>
  )
}

export default IntroSection
