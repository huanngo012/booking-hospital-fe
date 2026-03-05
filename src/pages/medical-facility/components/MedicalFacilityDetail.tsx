import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MdOutlineAccessTime } from 'react-icons/md'
import { CustomSkeleton } from '~/components'
import type { MedicalFacility } from '~/types/medical-facility'
import { formatWorkingTimes, getGoogleMapEmbedUrl } from '~/utils/helper'

interface MedicalFacilityDetailProps {
  medicalFacility: MedicalFacility | null
  isLoading?: boolean
}

const MedicalFacilityDetail = ({ medicalFacility, isLoading }: MedicalFacilityDetailProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return <CustomSkeleton variant='card-medical-facility-detail' />
  }

  if (!medicalFacility) return null

  const { logo, name, description, workingTimes, address } = medicalFacility

  return (
    <Box className='medical_facilities_detail'>
      <Box className='medical_facilities_detail_header'>
        <Box className='medical_facilities_detail_logo'>
          <Box component={'img'} src={logo} />
        </Box>
        <Typography variant='h6' className='truncate_2' color='var(--primary)' textAlign={'center'}>
          {name}
        </Typography>
        <Stack direction={'row'} alignItems={'center'} gap={0.5} marginTop={'6px'}>
          <Stack>
            <MdOutlineAccessTime size={20} color='var(--orange-400)' />
          </Stack>
          <Typography variant='body2'>{formatWorkingTimes(workingTimes)}</Typography>
        </Stack>
      </Box>
      <Box>
        <Typography variant='body2'>{description}</Typography>
        <Stack gap={1.5} marginTop={1.5}>
          <Typography variant='h6' color='var(--secondary)'>
            {t('medical_facilities.map')}
          </Typography>
          <iframe
            title='google-map'
            src={getGoogleMapEmbedUrl(address)}
            width='100%'
            height='300'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default MedicalFacilityDetail
