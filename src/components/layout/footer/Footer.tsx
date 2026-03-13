import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { icons } from '~/assets'
import { IMAGE_FOOTER, INFO_FOOTER, MENU_FOOTER } from '~/utils/constant'

const { LogoFooterIcon } = icons

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box
      component='footer'
      position={'sticky'}
      top={'100%'}
      width={'100%'}
      bgcolor={'var(--white)'}
      borderTop={'1px solid var(--divider-color)'}
    >
      <Container>
        <Stack
          direction={{
            mobile: 'column',
            desktop: 'row'
          }}
          gap={'56px'}
          paddingTop={'32px'}
          paddingBottom={'16px'}
        >
          <Stack direction={'column'} gap={1.25}>
            <Box
              className='svg-wrapper'
              width={{
                mobile: 120,
                desktop: 220
              }}
              marginBottom={1.25}
            >
              <LogoFooterIcon />
            </Box>
            {INFO_FOOTER.map((item, index) => (
              <Typography key={index} variant='label2' minWidth={'60px'}>
                {t(item.title)}:{' '}
                <Typography variant='body2' component='span'>
                  {t(item.description)}
                </Typography>
              </Typography>
            ))}
          </Stack>

          <Grid container spacing={3}>
            {MENU_FOOTER.map((item, index) => (
              <Grid size={{ mobile: 6, tablet: 4 }} key={index} display={'flex'} flexDirection={'column'} gap={0.75}>
                <Typography variant='label2'>{t(item.title)} </Typography>
                {item.sub_menu.map((sub_item, index_sub) => (
                  <Link key={index_sub} to={sub_item.sub_link}>
                    <Typography variant='body2'>{t(sub_item.sub_title)}</Typography>
                  </Link>
                ))}
              </Grid>
            ))}

            <Grid size={{ mobile: 6, tablet: 4 }}>
              <Stack direction={'row'} flexWrap={'wrap'} gap={'13px 16px'} width={'100%'}>
                {IMAGE_FOOTER.map((item, index) => {
                  if (item.component === 'img') {
                    return <Box key={index} component='img' src={item.src} width={100} />
                  }
                  const Icon = item.component
                  return (
                    <Box key={index} className='svg-wrapper' width={100} height={30}>
                      <Icon />
                    </Box>
                  )
                })}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
