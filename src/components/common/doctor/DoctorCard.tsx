import './style.scss'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { DoctorCardProps } from '~/components/type'
import { PATHS } from '~/utils/constant'
import { renderStartFromNumber } from '~/utils/helper'
import { PiHospitalLight, PiStethoscope } from 'react-icons/pi'

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const { user, medical_facility, specialty, slug, position, totalRatings } = doctor
  const { avatar, name } = user
  const { name: nameMedicalFacility } = medical_facility
  const { name: nameSpecialty } = specialty

  const handlePrefetch = (slug: string) => {
    const data = queryClient.getQueryData(['medical-facilities', slug])
    if (data) return

    // queryClient.prefetchQuery({
    //   queryKey: ['medical-facilities', slug],
    //   queryFn: () => getMedicalFacilityBySlug(slug)
    // })
  }

  return (
    <Box className='doctor_card' onMouseEnter={() => handlePrefetch(slug)}>
      <Box className='card_wrapper'>
        <Box className='card_image'>
          <Box component={'img'} alt={name} src={avatar ? avatar : '/logo.svg'} />
        </Box>
        <Box className='card_content'>
          <Stack
            direction={'row'}
            gap={0.5}
            borderBottom={'1px solid var(--border-color)'}
            marginBottom={1}
            paddingBottom={1}
            width={'100%'}
          >
            <Typography variant='h6' className='truncate_2' color='var(--primary)' fontWeight={400}>
              {position}.
            </Typography>
            <Typography variant='h6' className='truncate_2' color='var(--primary)'>
              {name}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={0.5}>
            <Box component={'span'}>
              <PiHospitalLight color='var(--secondary)' />
            </Box>
            <Typography variant='body2' color='var(--secondary)' className='truncate_2 card_address'>
              {nameMedicalFacility}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={0.5} marginBottom={1}>
            <Box component={'span'}>
              <PiStethoscope color='var(--secondary)' />
            </Box>
            <Typography variant='body2' color='var(--secondary)' className='truncate_2 card_address'>
              {nameSpecialty}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={0.5} marginBottom={1}>
            {renderStartFromNumber(totalRatings, 18)?.map((item, index) => (
              <Box key={index} lineHeight={0}>
                {item}
              </Box>
            ))}
          </Stack>
          <Button component={Link} to={`${PATHS.DOCTORS}/${slug}`} variant='outlined'>
            <Typography variant='label2'>{t('common.view_detail')}</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DoctorCard
