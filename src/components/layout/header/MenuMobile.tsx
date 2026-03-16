import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaUserAlt } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { IoLogOut } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { images } from '~/assets'
import { useLogout } from '~/modules/auth/auth.mutation'
import { useUser } from '~/modules/auth/auth.query'
import { MENUS, NETWORKS, PATHS, TABS_USER } from '~/utils/constant'

const { down_app_icon } = images

const MenuMobile = () => {
  const { t } = useTranslation()
  const { data: user } = useUser()
  const { mutate: logoutUser } = useLogout()

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <Box className='menu-mobile'>
      <IconButton onClick={toggleMenu}>
        <FiMenu size={24} color='var(--secondary)' />
      </IconButton>

      <Drawer anchor='right' open={open} onClose={toggleMenu}>
        <Box
          className='drawer-wrapper'
          width={{
            mobile: '100vw',
            tablet: '60vw'
          }}
        >
          <Box className='drawer-wrapper-inner'>
            <Box className='drawer-header'>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'10px'}
                width={'100%'}
              >
                <Box component='img' src={'/logo.svg'} alt={t('common.brand_name')} width={'120px'} />
                <IconButton onClick={toggleMenu}>
                  <FiX size={24} color='var(--secondary)' />
                </IconButton>
              </Stack>
            </Box>
            <Box className='drawer-body'>
              <Stack direction={'row'} gap={'10px'} padding={'16px'} sx={{ background: 'var(--white)' }}>
                {!user ? (
                  <>
                    <Button
                      component={Link}
                      to={PATHS.LOGIN}
                      variant='contained'
                      color='primary'
                      fullWidth
                      sx={{ borderRadius: '8px' }}
                    >
                      <Typography variant='button2'>{t('auth.login')}</Typography>
                    </Button>
                    <Button
                      component={Link}
                      to={`${PATHS.LOGIN}?state=signUp`}
                      variant='outlined'
                      color='primary'
                      fullWidth
                      sx={{ borderRadius: '8px' }}
                    >
                      <Typography variant='button2'>{t('auth.signup')}</Typography>
                    </Button>
                  </>
                ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    sx={{ borderRadius: '8px', gap: '12px', paddingBlock: '12px' }}
                  >
                    <FaUserAlt />
                    <Typography variant='button2'>{user.name}</Typography>
                  </Button>
                )}
              </Stack>
              {user && (
                <List className='mobile-menu_list'>
                  {TABS_USER.map((item) => (
                    <ListItem key={item.id} disablePadding className='mobile-menu_item'>
                      <ListItemButton component={Link} to={`${PATHS.USER}?key=${item.path}`}>
                        <ListItemText
                          primary={
                            <Stack direction={'row'} gap={1.5}>
                              <Box component='img' src={item.icon_mobile} alt={t(item.title)} width={22} />
                              <Typography variant='label2'>{t(item.title)}</Typography>
                            </Stack>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}

              <List className='mobile-menu_list'>
                {MENUS.map((item) => (
                  <ListItem key={item.id} disablePadding className='mobile-menu_item'>
                    <ListItemButton component={Link} to={item.path}>
                      <ListItemText
                        primary={
                          <Stack direction={'row'} gap={1.5}>
                            <Box component='img' src={item.icon} alt={t(item.title)} width={22} />
                            <Typography variant='label2'>{t(item.title)}</Typography>
                          </Stack>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'16px'}
                padding={'16px'}
                sx={{ background: 'var(--white)' }}
              >
                <Box component='img' src={down_app_icon} alt={t('header.download_app')} width={42} />
                <Box>
                  <Typography variant='label1'>{t('header.download_app')}</Typography>
                  <Typography variant='body3' color='#858585'>
                    {t('header.download_app_description')}
                  </Typography>
                </Box>
              </Stack>
              {user && (
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  marginTop={'12px'}
                  paddingInline={'16px'}
                >
                  <Button
                    onClick={handleLogout}
                    variant='contained'
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      gap: '12px',
                      paddingBlock: '12px',
                      background: 'var(--red-500)',
                      '&:hover': { background: 'var(--red-500)' }
                    }}
                  >
                    <IoLogOut size={24} color='var(--white)' />
                    <Typography variant='button2' color='var(--white)'>
                      {t('auth.logout')}
                    </Typography>
                  </Button>
                </Stack>
              )}
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                marginBlock={'16px'}
                paddingInline={'16px'}
              >
                {NETWORKS.map((item, index) => (
                  <Fragment key={index}>
                    <Box paddingInline={'12px'}>
                      <Stack
                        component={Link}
                        to={item.link}
                        target='_blank'
                        direction={'row'}
                        alignItems={'center'}
                        gap={'8px'}
                        color={'var(--secondary)'}
                      >
                        {item.icon}
                        <Typography variant='label3'>{item.name}</Typography>
                      </Stack>
                    </Box>
                    {index !== NETWORKS.length - 1 && '|'}
                  </Fragment>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default MenuMobile
