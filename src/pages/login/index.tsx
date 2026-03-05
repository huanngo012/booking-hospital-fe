import './style.scss'
import { Box, Container } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { useLocation, useNavigate } from 'react-router-dom'
import { images } from '~/assets'
import { SEO } from '~/components'
import { PATHS } from '~/utils/constant'
import LoginForm from './components/LoginForm'

const { login_banner } = images
const LoginPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const [param, setParam] = useState(searchParams?.get('state'))

  const handleRenderStep = () => {
    switch (param) {
      case 'signUp':
        return
      default:
        return <LoginForm />
    }
  }

  const handleBack = () => {
    window.history.length > 1 && location.key !== 'default' ? navigate(-1) : navigate(PATHS.HOME)
  }

  return (
    <Box className='login_page' sx={{ background: `url(${login_banner})` }}>
      <SEO title={t('login_page.title_seo')} description={t('login_page.description_seo')} />
      <Container sx={{ height: '100%' }}>
        <Box className='login_inner'>
          <Box className='login_card'>
            <LiaArrowLeftSolid className='button-back' onClick={() => handleBack()} />
            {handleRenderStep()}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LoginPage
