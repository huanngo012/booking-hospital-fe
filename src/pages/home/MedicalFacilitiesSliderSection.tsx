import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MedicalFacilityCard } from '~/components'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { theme } from '~/themes/Theme'

const MedicalFacilitiesSliderSection = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const { data } = useMedicalFacilities({
    page: 1,
    limit: 10
  })

  return (
    <Box component={'section'} className='medical_facilities_section animate animate--fade-in'>
      <Box className='container'>
        <Stack gap={2.5}>
          <Box textAlign='center'>
            <Typography variant='h4' color='var(--primary)'>
              {t('home.medical_facilities_section.title')}
            </Typography>
            <Typography variant='label1' color='#858585'>
              {t('home.medical_facilities_section.description', { count: data?.pagination.total ?? 0 })}
            </Typography>
          </Box>
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
                  slidesPerView: 5
                }
              }}
              style={{
                position: 'static',
                paddingBlock: '20px',
                marginBlock: '-20px'
              }}
            >
              {data?.data.map((item, index) => (
                <SwiperSlide key={index}>{<MedicalFacilityCard facility={item} />}</SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default MedicalFacilitiesSliderSection
