import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CustomSkeleton } from '~/components'
import type { Category } from '~/types/category'

interface MedicalFacilityCategoryFilterProps {
  categories: Category[]
  selectedCategoryId: number
  onSelect: (categoryId: number) => void
  isLoading?: boolean
}

const MedicalFacilityCategoryFilter = ({
  categories,
  selectedCategoryId,
  onSelect,
  isLoading
}: MedicalFacilityCategoryFilterProps) => {
  const { t } = useTranslation()
  return (
    <Box position={'relative'}>
      <Swiper
        className='swiper--auto'
        slidesPerView={'auto'}
        spaceBetween={16}
        autoplay
        freeMode
        style={{
          position: 'static',
          padding: '20px 10px',
          margin: '-20px -10px'
        }}
      >
        {!isLoading ? (
          <>
            <SwiperSlide>
              <Button variant={selectedCategoryId === 0 ? 'contained' : 'outlined'} onClick={() => onSelect(0)}>
                <Typography variant='label2'>{t('common.all')}</Typography>
              </Button>
            </SwiperSlide>
            {categories?.map((item) => (
              <SwiperSlide key={item._id}>
                <Button
                  variant={selectedCategoryId === item._id ? 'contained' : 'outlined'}
                  onClick={() => onSelect(item._id)}
                >
                  <Typography variant='label2'>{item.tag}</Typography>
                </Button>
              </SwiperSlide>
            ))}
          </>
        ) : (
          [...Array(8)].map((_, index: number) => (
            <SwiperSlide key={index}>
              <CustomSkeleton key={index} variant='card-category' />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Box>
  )
}

export default MedicalFacilityCategoryFilter
