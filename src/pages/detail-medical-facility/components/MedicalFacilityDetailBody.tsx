import { Box, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { MedicalFacility } from '~/types/medical-facility'
import { getGoogleMapEmbedUrl } from '~/utils/helper'
import DoctorsBody from '~/pages/doctors/components/DoctorsBody'

const MedicalFacilityDetailBody = ({ medicalFacility }: { medicalFacility: MedicalFacility }) => {
  const { t } = useTranslation()

  const { _id, description, address, specialtyID } = medicalFacility

  return (
    <Box className='medical-facility-detail-body'>
      <Grid container spacing={2.5}>
        <Grid size={{ mobile: 12, desktop: 3.5 }}>
          <Box className='medical-facility-detail-body_sidebar'>
            <Box className='medical-facility-detail-body_description'>
              <Stack gap={1}>
                <Typography variant='h6' color='var(--secondary)'>
                  {t('common.description')}
                </Typography>
                <Typography variant='body2' color='var(--secondary)'>
                  {description}
                </Typography>
              </Stack>
            </Box>
            <Box className='medical-facility-detail-body_map'>
              <Stack gap={1}>
                <Typography variant='h6' color='var(--secondary)'>
                  {t('common.map')}
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
        </Grid>
        <Grid size={{ mobile: 12, desktop: 8.5 }}>
          <DoctorsBody medicalFacilityID={_id} specialtyID={specialtyID} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MedicalFacilityDetailBody
