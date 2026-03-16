import { Box, Stack } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Header from '~/components/layout/header/Header'
import Footer from '~/components/layout/footer/Footer'
import { icons } from '~/assets'

const { ScrollToTopIcon } = icons

const Layout = ({ children }: { children: ReactNode }) => {
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
      <Box component={'main'}>{children}</Box>
      <Footer />
      {showScrollButton && (
        <Box
          className='svg-wrapper'
          position={'fixed'}
          bottom={56}
          right={{
            mobile: 28,
            desktop: 56
          }}
          width={40}
          sx={{
            cursor: 'pointer'
          }}
          zIndex={1000}
          onClick={scrollToTop}
        >
          <ScrollToTopIcon />
        </Box>
      )}
    </Stack>
  )
}

export default Layout
