import { Box, Button, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import { MdOutlineAccessTime } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'
import type { MedicalFacility } from '~/types/medical-facility'
import { formatAddress, formatWorkingTimes, renderStartFromNumber } from '~/utils/helper'
import { useTranslation } from 'react-i18next'

const MedicalFacilityDetailHeader = ({ medicalFacility }: { medicalFacility: MedicalFacility }) => {
  const { t } = useTranslation()
  const { logo, images, name, workingTimes, address, totalRatings } = medicalFacility

  return (
    <Box className='medical-facility-detail-header'>
      <Grid container spacing={2.5}>
        <Grid size={{ mobile: 12, tablet: 3.5 }}>
          <Box className='medical-facility-detail-header_card'>
            <Box className='medical-facility-detail-header_logo'>
              <Box component={'img'} src={logo} />
            </Box>
            <Typography variant='h6' className='truncate_2' color='var(--primary)' textAlign={'center'}>
              {name}
            </Typography>
            <Stack direction={'row'} gap={0.5}>
              {renderStartFromNumber(totalRatings, 20)?.map((item, index) => (
                <Box key={index} lineHeight={0}>
                  {item}
                </Box>
              ))}
            </Stack>
            <Box className='medical-facility-detail-header__divider' />
            <Stack direction={'row'} gap={0.5} width={'100%'}>
              <Stack>
                <GrLocation size={20} color='var(--orange-400)' />
              </Stack>
              <Typography variant='body2' color='var(--secondary)'>
                {formatAddress(address)}
              </Typography>
            </Stack>
            <Stack direction={'row'} gap={0.5} width={'100%'}>
              <Stack>
                <MdOutlineAccessTime size={20} color='var(--orange-400)' />
              </Stack>
              <Typography variant='body2' color='var(--secondary)'>
                {formatWorkingTimes(workingTimes)}
              </Typography>
            </Stack>
            <Button fullWidth variant='contained'>
              <Typography variant='label2'>{t('common.book_now')}</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid size={{ mobile: 12, tablet: 8.5 }}>
          <ImageList cols={4} gap={10} className='medical-facility-detail-header_gallery'>
            {images.slice(0, 8).map((item, index) => (
              <ImageListItem key={item} cols={index === 0 ? 3 : 1} rows={index === 0 ? 3 : 1}>
                {images.length > 8 && index === 7 && (
                  <Box className='gallery-overlay'>
                    <Typography variant='label2'>
                      +{images.length - 8} {t('common.images')}
                    </Typography>
                  </Box>
                )}
                <img src={item} alt='' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MedicalFacilityDetailHeader
