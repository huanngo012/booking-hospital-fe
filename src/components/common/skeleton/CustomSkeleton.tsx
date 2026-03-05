import './style.scss'
import { Box, Skeleton, Stack } from '@mui/material'
import type { CustomSkeletonProps } from '../../module'

const CustomSkeleton = ({ variant }: CustomSkeletonProps) => {
  switch (variant) {
    case 'card-category':
      return <CardCategorySkeleton />
    case 'card-medical-facility':
      return <CardMedicalFacilitySkeleton />
    case 'card-medical-facility-02':
      return <CardMedicalFacility02Skeleton />
    case 'card-medical-facility-detail':
      return <CardMedicalFacilityDetailSkeleton />
    default:
      return null
  }
}

export default CustomSkeleton

const CardMedicalFacilitySkeleton = () => {
  return (
    <Box className='medical_facility_card'>
      <Box className='card_wrapper'>
        <Box className='card_image'>
          <Skeleton animation='wave' variant='rectangular' height={125} width={'100%'} />
        </Box>
        <Box className='card_content'>
          <Stack direction='row' gap={0.5}>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} animation='wave' variant='rectangular' width={16} height={16} />
            ))}
          </Stack>

          <Skeleton animation='wave' variant='rectangular' height={24} width='100%' />
          <Skeleton
            animation='wave'
            variant='rectangular'
            className='truncate_2 card_address'
            height={40}
            width='100%'
          />
        </Box>
      </Box>
    </Box>
  )
}

const CardMedicalFacility02Skeleton = () => {
  return (
    <Box className='medical_facility_card_02'>
      <Box className='card_wrapper'>
        <Box className='card_image'>
          <Skeleton animation='wave' variant='circular' height={100} width={100} />
        </Box>
        <Box className='card_content'>
          <Skeleton animation='wave' variant='rectangular' height={32} width='100%' />
          <Skeleton animation='wave' variant='rectangular' height={28} width='100%' />
          <Stack direction='row' gap={0.5}>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} animation='wave' variant='rectangular' width={18} height={18} />
            ))}
          </Stack>
          <Skeleton animation='wave' variant='rectangular' height={40} width={100} sx={{ borderRadius: '30px' }} />
        </Box>
      </Box>
    </Box>
  )
}

const CardMedicalFacilityDetailSkeleton = () => {
  return (
    <Box className='medical_facilities_detail'>
      <Box className='medical_facilities_detail_header'>
        <Box className='medical_facilities_detail_logo'>
          <Skeleton animation='wave' variant='circular' height={200} width={200} sx={{ marginInline: 'auto' }} />
        </Box>
        <Skeleton animation='wave' variant='rectangular' height={24} width='100%' />
        <Skeleton animation='wave' variant='rectangular' height={28} width='100%' sx={{ marginTop: '6px' }} />
      </Box>
      <Box>
        <Skeleton animation='wave' variant='rectangular' height={200} width='100%' />
        <Stack gap={1.5} marginTop={1.5}>
          <Skeleton animation='wave' variant='rectangular' height={24} width='100%' />
          <Skeleton animation='wave' variant='rectangular' height={300} width='100%' />
        </Stack>
      </Box>
    </Box>
  )
}

const CardCategorySkeleton = () => {
  return (
    <Box>
      <Skeleton
        animation='wave'
        variant='rounded'
        height={42}
        width={120}
        sx={{
          borderRadius: '30px'
        }}
      />
    </Box>
  )
}
