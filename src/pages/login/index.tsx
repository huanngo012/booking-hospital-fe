import './style.scss'
import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { Link, useLocation } from 'react-router-dom'
import { images } from '~/assets'
import { SEO } from '~/components'
import { PATHS } from '~/utils/constant'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

const { login_banner } = images
const LoginPage = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const param = searchParams.get('state')

  const handleRenderStep = () => {
    switch (param) {
      case 'signUp':
        return <RegisterForm />
      default:
        return <LoginForm />
    }
  }

  return (
    <Box className='login_page' sx={{ background: `url(${login_banner})` }}>
      <SEO title={t('pages.login.title_seo')} description={t('pages.login.description_seo')} />
      <Container sx={{ height: '100%' }}>
        <Box className='login_inner'>
          <Box className='login_card'>
            <Link to={PATHS.HOME}>
              <LiaArrowLeftSolid className='button-back' />
            </Link>
            {handleRenderStep()}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LoginPage
