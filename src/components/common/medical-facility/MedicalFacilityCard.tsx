import './style.scss'
import { Box, Stack, Typography } from '@mui/material'
import { formatAddress, renderStartFromNumber } from '~/utils/helper'
import type { MedicalFacilityCardProps } from '../module'
import { Link } from 'react-router-dom'
import { PATHS } from '~/utils/constant'

const MedicalFacilityCard = ({ facility }: MedicalFacilityCardProps) => {
  const { name, slug, logo, address, totalRatings } = facility
  return (
    <Box className='medical_facility_card'>
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
          <Link to={slug}>
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
