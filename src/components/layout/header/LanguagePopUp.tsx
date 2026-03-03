import './style.scss'
import { Box, ClickAwayListener, MenuItem, MenuList, Paper, Popper, Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiCaretDown } from 'react-icons/pi'
import { LANGUAGES } from '~/utils/constant'

type LanguageKey = keyof typeof LANGUAGES

const LanguagePopUp = () => {
  const { i18n, t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const currentLanguage = i18n.language as LanguageKey

  const languagesArray = useMemo(
    () => Object.entries(LANGUAGES) as [LanguageKey, { title: string; icon: string }][],
    []
  )

  const handleChangeLanguage = (lng: LanguageKey) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const savedLng = localStorage.getItem('lng') as LanguageKey | null
    if (savedLng && savedLng !== i18n.language) {
      i18n.changeLanguage(savedLng)
    }
  }, [i18n])

  return (
    <Box onClick={handleOpen} sx={{ cursor: 'pointer' }}>
      <Box className='language-icon'>
        <Box component='img' src={LANGUAGES[currentLanguage]?.icon} className='flag-icon' />
        <PiCaretDown size={16} />
      </Box>

      <Popper open={open} anchorEl={anchorEl} placement='bottom-end' sx={{ zIndex: 1200 }}>
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            sx={{
              p: 1,
              borderRadius: 2,
              boxShadow: '0px 1px 8px rgba(30,32,32,0.12)'
            }}
          >
            <MenuList autoFocusItem={open} sx={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '0' }}>
              {languagesArray.map(([lng, { title, icon }]) => (
                <MenuItem
                  key={lng}
                  onClick={() => handleChangeLanguage(lng)}
                  selected={currentLanguage === lng}
                  sx={{ borderRadius: 2 }}
                >
                  <Stack direction='row' alignItems='center' gap={1}>
                    <Box component='img' src={icon} alt={t(title)} className='flag-icon' />
                    <Typography variant={'label2'}>{t(title)}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  )
}

export default LanguagePopUp
