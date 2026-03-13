import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BENEFIT_DOWNLOAD_LEFT, BENEFIT_DOWNLOAD_RIGHT } from '~/utils/constant'
import { theme } from '~/themes'
import { DISPLAY } from '~/utils/responsive'
import { icons, images } from '~/assets'

const { ellipse_image, mobile_app_image } = images
const { AppStoreIcon, CHPlayIcon } = icons

const DownloadSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  return (
    <Box component={'section'} className='download_section' id='downloadSection'>
      <Container>
        <Stack alignItems={'center'} gap={'28px'}>
          <Stack alignItems={'center'} gap={'16px'} className='animate animate--fade-in'>
            <Typography variant={isTablet ? 'h4' : 'h6'}>
              {t('pages.home.download_section.title')}{' '}
              <Typography component='span' variant={isTablet ? 'h4' : 'h6'} color='var(--primary)'>
                MEDPRO
              </Typography>
            </Typography>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'16px'}>
              <Box className='svg-wrapper' width={152}>
                <AppStoreIcon />
              </Box>
              <Box className='svg-wrapper' width={152}>
                <CHPlayIcon />
              </Box>
            </Stack>
          </Stack>
          <Stack
            display={DISPLAY.DESKTOP_ONLY}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            position={'relative'}
            gap={5}
          >
            <Stack
              alignItems={'center'}
              justifyContent={'space-around'}
              gap={'56px'}
              flex={'4'}
              className='animate animate--fade-left'
            >
              {BENEFIT_DOWNLOAD_LEFT.map((item, index) => (
                <Stack
                  key={index}
                  flexDirection={'row'}
                  justifyContent={'flex-end'}
                  gap={'12px'}
                  width={'100%'}
                  paddingRight={index % 2 === 0 ? '30px' : '90px'}
                >
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant='label2' color='var(--secondary)'>
                      {t(item.title)}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='var(--text-secondary)'
                      dangerouslySetInnerHTML={{
                        __html: t(item.description)
                      }}
                    ></Typography>
                  </Box>
                  <Box component='img' src={item.image} alt={t(item.title)} width={'60px'} />
                </Stack>
              ))}
            </Stack>
            <Box
              component='img'
              src={ellipse_image}
              alt=''
              sx={{
                position: 'absolute',
                width: '40%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
              className='animate animate--fade-in'
            />
            <Box
              component='img'
              src={mobile_app_image}
              alt=''
              position={'relative'}
              flex={'3'}
              className='animate animate--fade-in'
            />
            <Stack
              alignItems={'center'}
              justifyContent={'space-around'}
              gap={'56px'}
              flex={'4'}
              className='animate animate--fade-right'
            >
              {BENEFIT_DOWNLOAD_RIGHT.map((item, index) => (
                <Stack
                  key={index}
                  flexDirection={'row'}
                  justifyContent={'flex-start'}
                  gap={'12px'}
                  width={'100%'}
                  paddingLeft={index % 2 === 0 ? '30px' : '90px'}
                >
                  <Box component='img' src={item.image} alt={t(item.title)} width={'60px'} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='label2' color='var(--secondary)'>
                      {t(item.title)}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='var(--text-secondary)'
                      dangerouslySetInnerHTML={{
                        __html: t(item.description)
                      }}
                    ></Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default DownloadSection
