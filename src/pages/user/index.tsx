import './style.scss'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { BreadscrumbCustom, SEO } from '~/components'
import { PATHS, TABS_USER } from '~/utils/constant'

const UserPage = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const param = searchParams.get('key')

  const currentTab = TABS_USER.find((tab) => tab.path === param)
  if (!currentTab) return <Navigate to={`${PATHS.USER}?key=${TABS_USER[0].path}`} replace />
  const Component = currentTab.component

  return (
    <Box className='user_page'>
      <SEO
        title={t(`pages.user.${param}.title_seo`, {
          brand: t('seo.brand')
        })}
      />
      <Container>
        {<BreadscrumbCustom data={[{ title: t(`user.${param}`) }]} />}
        <Grid container>
          <Grid
            size={{
              tablet: 4,
              desktop: 3
            }}
            display={{
              mobile: 'none',
              tablet: 'block'
            }}
          >
            <Box className='user_tabs'>
              {TABS_USER.map((item, index) => (
                <Box
                  component={Link}
                  to={`${PATHS.USER}?key=${item.path}`}
                  className={`user_tab ${param === item.path ? 'active' : null}`}
                  key={index}
                >
                  <Box>{item.icon}</Box>
                  <Typography variant='label2'>{t(item.title)}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            size={{
              mobile: 12,
              tablet: 8,
              desktop: 9
            }}
          >
            {Component && <Component />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default UserPage
