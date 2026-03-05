import { Box, Button, ClickAwayListener, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaUserAlt } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useLogout } from '~/modules/auth/auth.mutation'
import { useUser } from '~/modules/auth/auth.query'
import { PATHS, TABS_USER } from '~/utils/constant'

const ProfilePopup = () => {
  const { t } = useTranslation()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { data: user } = useUser()
  const { mutate: logoutUser } = useLogout()

  const toggleMenu = () => setShowMenu((prev) => !prev)

  const handleLogout = () => {
    logoutUser()
  }
  if (!user) return null

  return (
    <Box className='profile-popup'>
      <ClickAwayListener onClickAway={() => setShowMenu(false)}>
        <Button variant='outlined' color='primary' onClick={toggleMenu}>
          <FaUserAlt />
          <Typography variant='button2'>{user.name}</Typography>
        </Button>
      </ClickAwayListener>
      {showMenu && (
        <Box className='profile-popup_menu'>
          <Box className='profile-popup_item'>
            <Stack>
              <Typography variant='body3'>{t('header.hi')},</Typography>
              <Typography variant='label1' color='var(--primary)'>
                {user.name}
              </Typography>
            </Stack>
          </Box>
          {TABS_USER.map((item, index) => (
            <Link key={index} className='profile-popup_item' to={`${PATHS.USER}?state=${item.path}`}>
              {item.icon}
              <Typography variant='label2'>{t(item.title)}</Typography>
            </Link>
          ))}

          <Box onClick={handleLogout} className='profile-popup_item'>
            <IoLogOut size={24} color='var(--red-400)' />
            <Typography variant='label2' color='var(--red-400)'>
              {t('auth.logout')}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default ProfilePopup
