import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CustomInputField } from '~/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PATHS } from '~/utils/constant'
import { useMemo } from 'react'
import { useToast } from '~/hooks/useToast'
import { useRegister } from '~/modules/auth/auth.mutation'
import { TOAST_TYPE } from '~/components/module'

export interface RegisterValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const { t } = useTranslation()

  const { showToast } = useToast()
  const { mutate: registerUser, isPending } = useRegister()

  const registerSchema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(1, { message: t('auth.password_length_required') }),
          email: z.email({ message: t('auth.email_invalid_format') }).trim(),
          password: z.string().min(6, { message: t('auth.password_length_required') }),
          confirmPassword: z.string()
        })
        .refine((data) => data.password === data.confirmPassword, {
          path: ['confirmPassword'],
          message: t('auth.password_not_match')
        }),
    [t]
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    shouldFocusError: false,
    mode: 'onChange'
  })

  const handleRegister = (data: RegisterValues) => {
    if (isPending) return
    registerUser(data, {
      onSuccess: () => {
        showToast(t('pages.login.signup_success'))
      },
      onError: (error) => {
        showToast(error.message, TOAST_TYPE.ERROR)
      }
    })
  }
  return (
    <Box className='form_wrapper login_form_wrapper'>
      <Box className='login_header'>
        <Typography variant='h4'>{t('auth.signup')}</Typography>
      </Box>
      <Box className='login_body'>
        <FormControl component={'form'} onSubmit={handleSubmit(handleRegister)} className='login_form'>
          <Box className='login_form-fields'>
            <CustomInputField
              label={t('auth.name')}
              placeholder={t('auth.name_placeholder')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              register={register('name')}
            />
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
            <CustomInputField
              type='password'
              label={t('auth.confirm_password')}
              placeholder={t('auth.confirm_password_placeholder')}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
              register={register('confirmPassword')}
            />
          </Box>
          <Button variant='contained' type='submit' sx={{ width: '100%', borderRadius: '6px' }}>
            {isPending && <CircularProgress size={18} color='inherit' />}
            <Typography variant='button2'>{t('auth.signup')}</Typography>
          </Button>
        </FormControl>
      </Box>
      <Box className='login_footer'>
        <Typography variant='body2'>{t('pages.login.have_account')}</Typography>
        <Link to={PATHS.LOGIN}>
          <Typography variant='body2' className='login_signup'>
            {t('auth.login')}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default RegisterForm
