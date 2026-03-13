import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, CircularProgress, FormControl, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import z from 'zod'
import { CustomInputField } from '~/components'
import { TOAST_TYPE } from '~/components/type'
import { useToast } from '~/hooks/useToast'
import { useUpdateCurrentUser } from '~/modules/auth/auth.mutation'
import { useUser } from '~/modules/auth/auth.query'

export interface UpdateProfileValues {
  name: string
  address?: string
}

const TabProfile = () => {
  const { t } = useTranslation()
  const { data: user } = useUser()
  const { showToast } = useToast()
  const { mutate: updateCurrentUser, isPending } = useUpdateCurrentUser()

  const [isChange, setIsChange] = useState(false)

  const updateProfileSchema = z.object({
    name: z.string().min(1, { message: t('auth.password_length_required') }),
    address: z.string().optional()
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    shouldFocusError: false,
    mode: 'onChange'
  })

  const handleUpdateProfile = (data: UpdateProfileValues) => {
    if (isPending) return
    updateCurrentUser(data, {
      onSuccess: () => {
        showToast(t('auth.update_profile_success'))
        reset()
        setIsChange(false)
      },
      onError: (error) => {
        showToast(error.message, TOAST_TYPE.ERROR)
      }
    })
  }

  if (!user) return null

  return (
    <Box className='profile-tab'>
      <Box className='profile-tab_header'>
        <Typography variant='h6'>{t('pages.user.profile.title')}</Typography>
        <Typography variant='body2'>{t('pages.user.profile.description')}</Typography>
      </Box>
      <FormControl component={'form'} onSubmit={handleSubmit(handleUpdateProfile)} className='profile-tab_form'>
        <Box className='profile-tab_fields'>
          <CustomInputField type='text' label={t('auth.email')} defaultValue={user.email} disabled />
          <CustomInputField
            type='text'
            label={t('auth.name')}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            register={register('name')}
            disabled={!isChange}
            defaultValue={user.name}
          />
          <CustomInputField
            type='text'
            label={t('auth.address')}
            error={Boolean(errors.address)}
            helperText={errors.address?.message}
            register={register('address')}
            disabled={!isChange}
            defaultValue={user.address}
          />
        </Box>
        <Stack direction={'row'} gap={2}>
          {isChange ? (
            <>
              <Button
                variant='contained'
                fullWidth
                sx={{
                  borderRadius: '6px',
                  background: 'var(--red-500)',
                  '&:hover': { background: 'var(--red-500)' }
                }}
                onClick={() => setIsChange(false)}
              >
                <Typography variant='button2' color='var(--white)'>
                  {t('common.cancel')}
                </Typography>
              </Button>
              <Button variant='contained' fullWidth sx={{ borderRadius: '6px' }} type='submit'>
                {isPending && <CircularProgress size={18} color='inherit' />}
                <Typography variant='button2'>{t('common.save')}</Typography>
              </Button>
            </>
          ) : (
            <Button variant='contained' fullWidth sx={{ borderRadius: '6px' }} onClick={() => setIsChange(true)}>
              <Typography variant='button2'>{t('common.change')}</Typography>
            </Button>
          )}
        </Stack>
      </FormControl>
    </Box>
  )
}

export default TabProfile
