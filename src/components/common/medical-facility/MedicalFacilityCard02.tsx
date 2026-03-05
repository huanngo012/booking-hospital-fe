import { Box, Button, Stack, Typography } from '@mui/material'
import { renderStartFromNumber } from '~/utils/helper'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoLocationOutline } from 'react-icons/io5'
import { PATHS } from '~/utils/constant'
import type { MedicalFacilityCardProps } from '~/components/module'

const MedicalFacilityCard02 = ({ facility }: MedicalFacilityCardProps) => {
  const { t } = useTranslation()
  const { name, slug, logo, address, totalRatings } = facility

  return (
    <Box className='medical_facility_card_02'>
      <Box className='card_wrapper'>
        <Box className='card_image'>
          <Box component={'img'} alt={name} src={logo ? logo : '/svgs/logo.svg'} />
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
              {address?.detail ? `${address?.detail},` : ''} {address?.ward ? `${address?.ward},` : ''}{' '}
              {address?.district ? `${address?.district},` : ''}
              {address?.province}
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
