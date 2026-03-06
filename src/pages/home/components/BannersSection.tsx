import { Box, Container } from '@mui/material'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BANNERS } from '~/utils/constant'

const BannersSection = () => {
  return (
    <Box component={'section'} className='banners_section animate animate--fade-in'>
      <Container>
        <Box className='banners_inner'>
          <Box position={'relative'}>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              loop
              autoplay
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              style={{
                position: 'static'
              }}
            >
              {BANNERS.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box component={'img'} src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BannersSection
