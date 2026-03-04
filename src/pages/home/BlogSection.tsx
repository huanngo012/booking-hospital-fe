import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { BsArrowRight } from 'react-icons/bs'
import { theme } from '~/themes/Theme'
import { BLOGS } from '~/utils/constant'

const BlogSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  return (
    <Box component={'section'} className='blog_section'>
      <Container>
        <Box className='blog_inner'>
          <Box className='content_top'>
            <Stack
              direction={{
                desktop: 'row'
              }}
              alignItems={'flex-start'}
              gap={'16px'}
            >
              <Stack flex={'4'} className='animate animate--fade-left'>
                <Box component='img' src='/svgs/logo.svg' alt='' width={'170px'} />
                <Typography variant={isTablet ? 'h3' : 'h5'}>{t('home.blog_section.title')}</Typography>
              </Stack>
              <Stack direction={'row'} gap={'4px'} flex={'8'} className='animate animate--fade-right'>
                <Typography variant={isTablet ? 'body2' : 'body3'}>
                  <b>Medpro </b>
                  {t('home.blog_section.description')}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Grid container spacing={3} className='content_bottom animate animate--fade-in'>
            {BLOGS.map((item, index) => (
              <Grid size={{ mobile: 12, tablet: 4 }} key={index} className='blog_card'>
                <Stack gap={'16px'}>
                  <Box component='img' borderRadius={'16px'} src={item.img} alt='' />
                  <Typography variant={isTablet ? 'h5' : 'h6'}>{t(item.title)}</Typography>
                  <Typography variant={isTablet ? 'body2' : 'body3'}>{t(item.des)}</Typography>
                </Stack>
                <Button variant='outlined' color='primary'>
                  <Typography variant='button2'>{t('home.blog_section.button')}</Typography>
                  <BsArrowRight size='20px' />
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default BlogSection
