import './style.scss'
import { Badge, Box, ClickAwayListener, MenuItem, MenuList, Paper, Popper, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiCaretDown } from 'react-icons/pi'
import { LANGUAGES } from '~/utils/constant'

const LanguagePopUp = () => {
  const { i18n, t } = useTranslation()
  type LanguageKey = keyof typeof LANGUAGES
  const currentLanguage = i18n.language as LanguageKey

  const languagesArray: Array<[string, { title: string; icon: string }]> = Object.entries(LANGUAGES).map(
    ([lng, value]) => [lng, { title: value.title, icon: value.icon }]
  )

  const anchorRefLanguage = useRef(null)
  const [openLanguage, setOpenLanguage] = useState(false)

  const handlerChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpenLanguage(false)
    localStorage.setItem('lng', lng)
  }

  useEffect(() => {
    if (localStorage.getItem('lng')) {
      const curLng: string | null = localStorage.getItem('lng')
      i18n.changeLanguage(curLng ? curLng : i18n.language)
    }
  }, [])
  return (
    <Badge sx={{ cursor: 'pointer' }} ref={anchorRefLanguage} onClick={() => setOpenLanguage(!openLanguage)}>
      <Box className='language-icon'>
        <Box component={'img'} src={LANGUAGES[currentLanguage].icon} className='flag-icon' />
        <PiCaretDown size={16} />
      </Box>

      <Popper
        open={openLanguage}
        anchorEl={anchorRefLanguage.current}
        sx={{ left: '-40px !important', zIndex: '1000' }}
      >
        <ClickAwayListener onClickAway={() => setOpenLanguage(false)}>
          <Paper
            sx={{
              padding: '8px',
              borderRadius: '8px',
              boxShadow: '0px 1px 8px 0px rgba(30, 32, 32, 0.12)'
            }}
          >
            <MenuList
              autoFocusItem={openLanguage}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              {languagesArray.map(([lng, { title, icon }], index) => (
                <MenuItem
                  key={index}
                  onClick={() => handlerChangeLanguage(lng)}
                  selected={currentLanguage === lng}
                  sx={{
                    borderRadius: '8px'
                  }}
                >
                  <Stack direction='row' alignItems='center' justifyContent='flex-start' width='100%' gap='4px'>
                    <Box component={'img'} src={icon} alt={t(title)} className='flag-icon' />
                    <Typography variant={currentLanguage === lng ? 'label2' : 'body2'} color={'var(--text-primary)'}>
                      {t(title)}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Badge>
  )
}
export default LanguagePopUp
