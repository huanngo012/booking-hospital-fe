import './style.scss'
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { BreadscrumbCustom, SEO } from '~/components'
import { images } from '~/assets'
import { ABOUT_US_ITEMS, PROMINENT_HOSPITALS } from '~/utils/constant'
import { theme } from '~/themes/Theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const { about_us } = images
const AboutPage = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Box className='about_page'>
      <SEO title={t('about_page.title_seo')} description={t('about_page.description_seo')} />
      <Box className='container'>
        {<BreadscrumbCustom data={[{ title: t('about_page.breadcrumb') }]} />}
        <Grid container spacing={2}>
          <Grid size={{ mobile: 12, tablet: 6, desktop: 7 }}>
            <Stack gap={'20px'}>
              <Typography variant='h5' color='#00b5f1'>
                {t('about_page.title')}
              </Typography>
              <Typography variant='body3'>{t('about_page.description')}</Typography>
            </Stack>
            <Box
              component='img'
              src={about_us}
              width={'100%'}
              display={{
                mobile: 'block',
                tablet: 'none'
              }}
            />
            <Grid container spacing={2} marginTop={'20px'}>
              {ABOUT_US_ITEMS.map((item, index) => (
                <Grid key={index} size={{ mobile: 12, tablet: 6 }}>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    width={'100%'}
                    height={'100%'}
                    padding={'8px 18px'}
                    borderRadius={'16px'}
                    gap={'12px'}
                    sx={{
                      background: 'var(--white)'
                    }}
                  >
                    <Typography variant={isDesktop ? 'h1' : 'h2'} color='var(--orange-400)'>
                      {item.id}
                    </Typography>
                    <Box>
                      <Typography variant={isDesktop ? 'body1' : 'body2'} color='var(--primary)'>
                        {t(item.title)}
                      </Typography>
                      <Typography variant={isDesktop ? 'body1' : 'body2'} color='var(--black)'>
                        {t(item.description)}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            size={{ mobile: 12, tablet: 6, desktop: 5 }}
            display={{
              mobile: 'none',
              tablet: 'block'
            }}
          >
            <Box component='img' src={about_us} width={'100%'} />
          </Grid>
        </Grid>
        <Box
          width={'100%'}
          height={'100%'}
          borderRadius={'20px'}
          maxWidth={'1180px'}
          margin={'auto'}
          textAlign={'center'}
          marginTop={'20px'}
          paddingBlock={'32px'}
          paddingInline={{
            desktop: '100px'
          }}
          sx={{
            background: '#fff'
          }}
        >
          <Typography variant='h5' color='var(--primary)'>
            {t('about_page.prominent')}
          </Typography>
          <Box marginTop={'20px'}>
            <Swiper
              className='swiper_marquee'
              slidesPerView={'auto'}
              spaceBetween={40}
              modules={[Autoplay]}
              autoplay={{
                delay: 1
              }}
              loop
              speed={3000}
              allowTouchMove={false}
            >
              {PROMINENT_HOSPITALS.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box component='img' width={'90px'} height={'90px'} src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutPage
