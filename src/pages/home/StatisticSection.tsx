import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes/Theme'
import { STATISTIC_INFO } from '~/utils/constant'

const StatisticSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  return (
    <Box component={'section'} className='statistic_section animate animate--fade-in'>
      <Box className='container'>
        <Box
          className='statistic_inner'
          padding={{
            mobile: '10px',
            tablet: '15.5px 40px 35.5px'
          }}
        >
          <Typography variant={isTablet ? 'h4' : 'h5'} color='var(--white)'>
            {t('home.statistic_section.title')}
          </Typography>
          <Grid container spacing={3} marginTop={'16px'}>
            {STATISTIC_INFO.map((item, index) => (
              <Grid size={{ mobile: 4, desktop: 2 }} key={index}>
                <Stack alignItems={'center'} gap={'16px'}>
                  <Box component='img' src={item.icon} alt={t(item.title)} width={'50%'} />
                  <Stack gap={'4px'}>
                    <Typography variant={isTablet ? 'h4' : 'h6'} color='var(--white)'>
                      {item.number}
                    </Typography>
                    <Typography variant={isTablet ? 'label1' : 'label3'} color='#ddedff'>
                      {t(item.title)}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default StatisticSection
