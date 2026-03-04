import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CustomSkeleton, MedicalFacilityCard } from '~/components'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { theme } from '~/themes/Theme'

const MedicalFacilitiesSliderSection = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const { data, isLoading } = useMedicalFacilities({
    page: 1,
    limit: 10
  })

  const facilities = data?.data ?? []
  const total = data?.pagination?.total ?? 0

  return (
    <Box component={'section'} className='medical_facilities_section animate animate--fade-in'>
      <Container>
        <Stack gap={2.5}>
          <Box textAlign='center'>
            <Typography variant='h4' color='var(--primary)'>
              {t('home.medical_facilities_section.title')}
            </Typography>
            <Typography variant='label1' color='#858585'>
              {t('home.medical_facilities_section.description', { count: total })}
            </Typography>
          </Box>
          <Box position={'relative'}>
            <Swiper
              slidesPerView={2}
              spaceBetween={16}
              modules={[Navigation, Autoplay]}
              navigation={isDesktop}
              autoplay
              loop
              breakpoints={{
                550: {
                  slidesPerView: 3
                },
                700: {
                  slidesPerView: 4
                },
                1200: {
                  slidesPerView: 5
                }
              }}
              style={{
                position: 'static',
                padding: '20px 10px',
                margin: '-20px -10px'
              }}
            >
              {!isLoading
                ? facilities.map((item, index) => (
                    <SwiperSlide key={index}>{<MedicalFacilityCard facility={item} />}</SwiperSlide>
                  ))
                : [...Array(10)].map((_, index: number) => (
                    <SwiperSlide key={index}>
                      <CustomSkeleton key={index} variant='card-medical-facility' />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default MedicalFacilitiesSliderSection
