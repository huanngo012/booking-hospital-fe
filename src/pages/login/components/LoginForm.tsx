import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CustomInputField } from '~/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PATHS } from '~/utils/constant'
import { useLogin } from '~/modules/auth/auth.mutation'
import { useToast } from '~/hooks/useToast'
import { TOAST_TYPE } from '~/components/module'

export interface LoginValues {
  email: string
  password: string
}

const LoginForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const { showToast } = useToast()
  const { mutate: loginUser, isPending } = useLogin()

  const loginSchema = z.object({
    email: z.email({ message: t('auth.email_invalid_format') }).trim(),
    password: z.string().min(6, { message: t('auth.password_length_required') })
  })

  const { register, handleSubmit, formState } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    shouldFocusError: false,
    mode: 'onChange'
  })
  const { errors } = formState

  const handleLogin = (data: LoginValues) => {
    if (isPending) return
    loginUser(data, {
      onSuccess: () => {
        navigate(PATHS.HOME)
      },
      onError: (error) => {
        showToast(error.message, TOAST_TYPE.ERROR)
      }
    })
  }

  return (
    <Box className='form_wrapper login_form_wrapper'>
      <Box className='login_header'>
        <Typography variant='h4'>{t('auth.login')}</Typography>
      </Box>
      <Box className='login_body'>
        <FormControl component={'form'} onSubmit={handleSubmit(handleLogin)} className='login_form'>
          <Box className='login_form-fields'>
            <CustomInputField
              label={t('auth.email')}
              placeholder={t('auth.email_placeholder')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              register={register('email')}
            />
            <CustomInputField
              type='password'
              label={t('auth.password')}
              placeholder={t('auth.password_placeholder')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              register={register('password')}
            />
            {/* <Box className='login_options'>
              <Link to={`${PATHS.LOGIN}?state=forgetPassword`}>
                <Typography variant='body2' className='login__forgot'>
                  {t('pages.login.forgot_password')}
                </Typography>
              </Link>
            </Box> */}
          </Box>
          <Button variant='contained' type='submit' disableElevation sx={{ width: '100%', borderRadius: '6px' }}>
            {isPending && <CircularProgress size={18} color='inherit' />}
            <Typography variant='button2'>{t('auth.login')}</Typography>
          </Button>
        </FormControl>
      </Box>
      <Box className='login_footer'>
        <Typography variant='body2'>{t('pages.login.no_account')}</Typography>
        <Link to={`${PATHS.LOGIN}?state=signUp`}>
          <Typography variant='body2' className='login_signup'>
            {t('auth.signup')}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
