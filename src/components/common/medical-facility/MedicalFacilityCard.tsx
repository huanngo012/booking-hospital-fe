import './style.scss'
import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { formatAddress, renderStartFromNumber } from '~/utils/helper'
import { PATHS } from '~/utils/constant'
import type { MedicalFacilityCardProps } from '~/components/module'
import { useQueryClient } from '@tanstack/react-query'
import { getMedicalFacilityBySlug } from '~/modules/medical-facility/medical-facility.api'

const MedicalFacilityCard = ({ facility }: MedicalFacilityCardProps) => {
  const queryClient = useQueryClient()

  const { name, slug, logo, address, totalRatings } = facility

  const handlePrefetch = (slug: string) => {
    const data = queryClient.getQueryData(['medical-facilities', slug])
    if (data) return

    queryClient.prefetchQuery({
      queryKey: ['medical-facilities', slug],
      queryFn: () => getMedicalFacilityBySlug(slug)
    })
  }

  return (
    <Box className='medical_facility_card' onMouseEnter={() => handlePrefetch(slug)}>
      <Box className='card_wrapper'>
        <Link to={`${PATHS.MEDICALFACILITIES}/${slug}`} className='card_image'>
          <Box component={'img'} alt={name} src={logo ? logo : '/svgs/logo.svg'} />
        </Link>

        <Box className='card_content'>
          <Stack direction={'row'}>
            {renderStartFromNumber(totalRatings, 16)?.map((item, index) => (
              <Box key={index} lineHeight={0}>
                {item}
              </Box>
            ))}
          </Stack>
          <Link to={`${PATHS.MEDICALFACILITIES}/${slug}`}>
            <Typography variant='label2' className='truncate_2'>
              {name}
            </Typography>
          </Link>
          <Typography variant='body3' color='var(--text-secondary)' className='truncate_2 card_address'>
            {formatAddress(address)}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MedicalFacilityCard
