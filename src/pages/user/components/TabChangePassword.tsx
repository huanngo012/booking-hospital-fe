import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, CircularProgress, FormControl, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import z from 'zod'
import { CustomInputField } from '~/components'
import { TOAST_TYPE } from '~/components/type'
import { useToast } from '~/hooks/useToast'
import { useUpdateCurrentUser } from '~/modules/auth/auth.mutation'

export interface ChangePasswordValues {
  password: string
  newPassword: string
  confirmNewPassword: string
}

const TabChangePassword = () => {
  const { t } = useTranslation()
  const { showToast } = useToast()
  const { mutate: updateCurrentUser, isPending } = useUpdateCurrentUser()

  const changePasswordSchema = useMemo(
    () =>
      z
        .object({
          password: z.string().min(6, { message: t('auth.password_length_required') }),
          newPassword: z.string().min(6, { message: t('auth.password_length_required') }),
          confirmNewPassword: z.string()
        })
        .refine((data) => data.newPassword === data.confirmNewPassword, {
          path: ['confirmNewPassword'],
          message: t('auth.new_password_not_match')
        }),
    [t]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
    shouldFocusError: false,
    mode: 'onChange'
  })

  const handleChangePassword = (data: ChangePasswordValues) => {
    if (isPending) return
    const payload = {
      password: data.password,
      newPassword: data.newPassword
    }
    updateCurrentUser(payload, {
      onSuccess: () => {
        showToast(t('auth.change_password_success'))
        reset()
      },
      onError: (error) => {
        showToast(error.message, TOAST_TYPE.ERROR)
      }
    })
  }

  return (
    <Box className='password-tab'>
      <Box className='password-tab_header'>
        <Typography variant='h6'>{t('pages.user.change_password.title')}</Typography>
        <Typography variant='body2'>{t('pages.user.change_password.description')}</Typography>
      </Box>
      <FormControl component={'form'} onSubmit={handleSubmit(handleChangePassword)} className='password-tab_form'>
        <Box className='password-tab_fields'>
          <CustomInputField
            type='password'
            label={t('auth.old_password')}
            placeholder={t('auth.old_password_placeholder')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            register={register('password')}
            required
          />
          <CustomInputField
            type='password'
            label={t('auth.new_password')}
            placeholder={t('auth.new_password_placeholder')}
            error={Boolean(errors.newPassword)}
            helperText={errors.newPassword?.message}
            register={register('newPassword')}
            required
          />
          <CustomInputField
            type='password'
            label={t('auth.confirm_new_password')}
            placeholder={t('auth.confirm_new_password_placeholder')}
            register={register('confirmNewPassword')}
            required
          />
        </Box>
        <Button variant='contained' type='submit' sx={{ width: '100%', borderRadius: '6px' }}>
          {isPending && <CircularProgress size={18} color='inherit' />}
          <Typography variant='button2'>{t('auth.change_password')}</Typography>
        </Button>
      </FormControl>
    </Box>
  )
}

export default TabChangePassword
