import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SEO } from '~/components'
import { PATHS } from '~/utils/constant'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Box paddingBlock={'40px'}>
      <SEO title={t('pages.not_found.title_seo')} description={t('pages.not_found.description_seo')} />
      <Container>
        <Stack justifyContent={'center'} alignItems={'center'} gap={'20px'} textAlign={'center'}>
          <Box component={'img'} src='/svgs/404.svg' width={'100%'} maxWidth={500}></Box>
          <Typography variant='label1' color='var(--secondary)'>
            {t('pages.not_found.title')}
          </Typography>
          <Button component={Link} to={PATHS.HOME} variant='outlined'>
            {t('pages.not_found.button')}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default NotFoundPage
