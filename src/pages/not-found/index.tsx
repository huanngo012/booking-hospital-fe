import { Box, Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SEO } from '~/components'
import { paths } from '~/utils/constant'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Box paddingBlock={'40px'}>
      <SEO title={t('not_found_page.title_seo')} description={t('not_found_page.description_seo')} />
      <Box className='container'>
        <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'} textAlign={'center'}>
          <Box component={'img'} src='/svgs/404.svg' width={'100%'} maxWidth={500}></Box>
          <Typography variant='label1' color='var(--secondary)'>
            {t('not_found_page.title')}
          </Typography>
          <Button component={Link} to={paths.HOME} variant='outlined'>
            {t('not_found_page.button')}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default NotFoundPage
