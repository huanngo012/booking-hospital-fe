import './style.scss'
import { useTranslation } from 'react-i18next'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MENUS, NETWORKS, PATHS } from '~/utils/constant'
import { Box, Button, Container, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useLocation, Link } from 'react-router-dom'
import LanguagePopUp from './LanguagePopUp'
import { FaUser } from 'react-icons/fa'
import { MdOutlineSmartphone } from 'react-icons/md'
import { DISPLAY } from '~/utils/responsive'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const tab =
    MENUS.find((menu) => (menu.path === '/' ? location.pathname === '/' : location.pathname.startsWith(menu.path)))
      ?.path || false

  const isLoggedIn = false

  const lastScrollY = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const [className, setClassName] = useState<'scroll-up' | 'scroll-down'>('scroll-up')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setClassName('scroll-down')
        document.documentElement.style.setProperty('--header-height', `${headerRef.current?.offsetHeight}px`)
      } else if (currentScrollY < lastScrollY.current) {
        setClassName('scroll-up')
        document.documentElement.style.setProperty('--header-height', `${headerRef.current?.offsetHeight}px`)
      }

      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box ref={headerRef} component={'header'} className={`header header--${className}`}>
      <Container>
        <Stack direction={'row'} alignItems={'center'} gap={'30px'} width={'100%'}>
          <Link to={PATHS.HOME}>
            <Box component='img' src={'/svgs/logo.svg'} alt={'Logo'} width={'150px'} />
          </Link>
          <Box width={'100%'}>
            <Box display={DISPLAY.DESKTOP_ONLY} className='header__menu-top'>
              <Stack direction={'row'} alignItems={'center'}>
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
                        <Typography variant='label2'>{item.name}</Typography>
                      </Stack>
                    </Box>
                    {index !== NETWORKS.length - 1 && '|'}
                  </Fragment>
                ))}
              </Stack>
              <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
                <Button component={'a'} className='dowload-button' variant='contained' href='#downloadSection'>
                  <MdOutlineSmartphone />
                  <Typography variant='button2'>{t('download_app')}</Typography>
                </Button>
                {!isLoggedIn ? (
                  <Button component={Link} className='login-button' variant='outlined' color='primary' to={PATHS.LOGIN}>
                    <FaUser />
                    <Typography variant='button2'>{t('user.account')}</Typography>
                  </Button>
                ) : null}
                <LanguagePopUp />
              </Stack>
            </Box>

            <Stack direction={'row'} alignItems={'center'} width={'100%'} paddingLeft={'12px'}>
              <Stack display={DISPLAY.DESKTOP_ONLY} direction={'row'} flexShrink={'0'} gap={'12px'} minWidth={'180px'}>
                <Box component='img' src={'/svgs/contact.svg'} alt='' width={40} />
                <Stack>
                  <Typography variant='label2'>{t('schedule.appointment_assistance')}</Typography>
                  <Typography variant='h5' color='var(--orange-400)'>
                    {t('schedule.appointment_phone')}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display={DISPLAY.DESKTOP_ONLY}
                direction={'row'}
                gap={'12px'}
                width={'100%'}
                justifyContent={'flex-end'}
                alignItems={'center'}
              >
                <Tabs value={tab}>
                  {MENUS.map((item, index) => (
                    <Tab
                      component={Link}
                      key={index}
                      value={item.path}
                      to={item.path}
                      label={<Typography variant='label2'>{t(item.title)}</Typography>}
                    />
                  ))}
                </Tabs>
              </Stack>
              <Stack className='item-right' display={DISPLAY.MOBILE_ONLY}>
                {/* <LanguagePopUp /> */}
                {/* {isLoggedIn && <ProfilePopup />} */}

                {/* <NavbarPopUp tabs={menu} handleNav={handleChangeTab} activeLink={tab} /> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
