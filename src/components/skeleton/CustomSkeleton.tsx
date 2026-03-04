import './style.scss'
import { Box, Skeleton, Stack } from '@mui/material'
import type { CustomSkeletonProps } from '../module'

const CustomSkeleton = ({ variant }: CustomSkeletonProps) => {
  switch (variant) {
    case 'card-medical-facility':
      return <CardHospitalSectionSkeleton />
    default:
      return null
  }
}

export default CustomSkeleton

const CardHospitalSectionSkeleton = () => {
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
