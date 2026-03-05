import { Box, Button, FormControl, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CustomInputField } from '~/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface LoginValues {
  email: string
  password: string
}

const LoginForm = () => {
  const { t } = useTranslation()

  const loginSchema = z.object({
    email: z
      .string({ message: t('login_page.email_required') })
      .min(1, { message: t('login_page.email_required') })
      .refine((value) => emailRegex.test(value), {
        message: t('loginPage.invalid-email-format')
      }),
    password: z.string({ error: '' }).min(8, { message: t('loginPage.password-length-required') })
  })

  const { register, handleSubmit, getValues, setValue, formState } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })

  const { errors } = formState

  const handleLogin = (data: LoginValues) => {
    console.log('huanha')
  }

  return (
    <Box className='form_wrapper login_form_wrapper'>
      <Box className='login_header'>
        <Typography variant='h4'>{t('login_page.login')}</Typography>
      </Box>
      <Box className='login_body'>
        <FormControl onSubmit={handleSubmit(handleLogin)} className='login_form'>
          <Box className='login_form-fields'>
            <CustomInputField
              label={t('login_page.email')}
              placeholder={t('login_page.email_placeholder')}
              helperText={errors.email?.message}
              error={Boolean(errors.email)}
              register={register('email')}
            />
          </Box>
          <Button variant='contained' type='submit' disableElevation>
            <Typography variant='button2'>{t('login_page.login')}</Typography>
          </Button>
        </FormControl>
      </Box>
      <Box className='login_footer'>
        <Typography variant='body2'>{t('login_page.no_account')}</Typography>
        <Link to='/login?state=signUp'>
          <Typography variant='body2' className='login_signup'>
            Đăng kí
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
