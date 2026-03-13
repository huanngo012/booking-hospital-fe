import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { BsArrowRight } from 'react-icons/bs'
import { BLOGS } from '~/utils/constant'

const BlogSection = () => {
  const { t } = useTranslation()
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
                <Box component='img' src='/logo.svg' alt={t('common.brand_name')} width={'170px'} />
                <Typography variant={'h5'}>{t('pages.home.blog_section.title')}</Typography>
              </Stack>
              <Stack direction={'row'} gap={'4px'} flex={'8'} className='animate animate--fade-right'>
                <Typography variant={'body2'}>
                  <b>Medpro </b>
                  {t('pages.home.blog_section.description')}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Grid container spacing={1} className='content_bottom animate animate--fade-in'>
            {BLOGS.map((item, index) => (
              <Grid size={{ mobile: 12, tablet: 4 }} key={index} className='blog_card'>
                <Stack gap={'16px'}>
                  <Box component='img' borderRadius={2} src={item.img} alt={item.title} />
                  <Typography variant={'h6'}>{t(item.title)}</Typography>
                  <Typography variant={'body2'}>{t(item.des)}</Typography>
                </Stack>
                <Button variant='outlined' color='primary'>
                  <Typography variant='button2'>{t('common.view_more')}</Typography>
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
