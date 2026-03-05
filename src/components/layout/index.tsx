import { Box, Stack } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Header from '~/components/layout/header/Header'
import Footer from '~/components/layout/footer/Footer'
import { useTranslation } from 'react-i18next'

const Layout = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation()
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScroll = useCallback(() => {
    setShowScrollButton(window.scrollY > 400)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Stack minHeight={'100vh'} height={'100%'} sx={{ background: 'var(--background)' }}>
      <Header />
      <Box
        marginTop={{
          mobile: '60px',
          desktop: '135px'
        }}
      ></Box>
      <Box component={'main'}>{children}</Box>
      <Footer />

      {showScrollButton && (
        <Box
          component={'img'}
          src='/svgs/scroll_to_top.svg'
          alt={t('common.scroll_to_top')}
          position={'fixed'}
          bottom={'56px'}
          right={{
            mobile: '28px',
            desktop: '56px'
          }}
          width={40}
          sx={{
            fill: 'var(--primary)',
            cursor: 'pointer'
          }}
          zIndex={1000}
          onClick={scrollToTop}
        />
      )}
    </Stack>
  )
}

export default Layout
