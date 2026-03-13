import { Box, Button, Stack, Typography } from '@mui/material'
import { formatAddress, renderStartFromNumber } from '~/utils/helper'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoLocationOutline } from 'react-icons/io5'
import { PATHS } from '~/utils/constant'
import type { MedicalFacilityCardProps } from '~/components/type'
import { useQueryClient } from '@tanstack/react-query'
import { getMedicalFacilityBySlug } from '~/modules/medical-facility/medical-facility.api'

const MedicalFacilityCard02 = ({ facility }: MedicalFacilityCardProps) => {
  const { t } = useTranslation()
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
    <Box className='medical_facility_card_02' onMouseEnter={() => handlePrefetch(slug)}>
      <Box className='card_wrapper'>
        <Box className='card_image'>
          <Box component={'img'} alt={name} src={logo ? logo : '/logo.svg'} />
        </Box>
        <Box className='card_content'>
          <Typography variant='h5' className='truncate_2' color='var(--secondary)'>
            {name}
          </Typography>
          <Stack direction={'row'} gap={0.5}>
            <Box component={'span'}>
              <IoLocationOutline color='var(--text-secondary)' />
            </Box>
            <Typography variant='body2' color='var(--text-secondary)' className='truncate_2 card_address'>
              {formatAddress(address)}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={0.5}>
            {renderStartFromNumber(totalRatings, 18)?.map((item, index) => (
              <Box key={index} lineHeight={0}>
                {item}
              </Box>
            ))}
          </Stack>
          <Button component={Link} to={`${PATHS.MEDICALFACILITIES}/${slug}`} variant='outlined'>
            <Typography variant='label2'>{t('common.view_detail')}</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default MedicalFacilityCard02
