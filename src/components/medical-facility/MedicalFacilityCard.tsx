import './style.scss'
import { Box, Stack, Typography } from '@mui/material'
import { renderStartFromNumber } from '~/utils/helper'
import type { MedicalFacilityCardProps } from '../module'
import { Link } from 'react-router-dom'
import { paths } from '~/utils/constant'

const MedicalFacilityCard = ({ facility }: MedicalFacilityCardProps) => {
  const { name, slug, logo, address, totalRatings } = facility
  return (
    <Box className='medical_facility_card'>
      <Box className='card_wrapper'>
        <Link to={`${paths.MEDICALFACILITIES}/${slug}`} className='card_image'>
          <Box component={'img'} alt={name} src={logo ? logo : '/svgs/logo.svg'} />
        </Link>

        <Box className='card_content'>
          <Stack direction={'row'} alignItems={'center'}>
            {renderStartFromNumber(totalRatings, 16)?.map((el, index) => (
              <Box key={index} lineHeight={0}>
                {el}
              </Box>
            ))}
          </Stack>
          <Link to={slug}>
            <Typography variant='label2' className='truncate_2'>
              {name}
            </Typography>
          </Link>
          <Typography variant='body3' color='var(--text-secondary)' className='truncate_2 card_address'>
            {address?.detail ? `${address?.detail},` : ''} {address?.ward ? `${address?.ward},` : ''}{' '}
            {address?.district ? `${address?.district},` : ''}
            {address?.province}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MedicalFacilityCard
