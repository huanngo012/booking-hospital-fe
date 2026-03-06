import './style.scss'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import type { CustomInputFieldProps } from '../../module'
import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const CustomInputField = (props: CustomInputFieldProps) => {
  const { label, placeholder, type = 'text', helperText, error, register, defaultValue, required, disabled } = props
  const [isPasswordShowed, setIsPasswordShowed] = useState(false)
  const fieldName = register?.name ?? label

  return (
    <Box className='form-field'>
      <Box component='label' className='form-label' htmlFor={fieldName}>
        <Typography variant='label2'>{label}</Typography>
        {required && (
          <Typography variant='label2' color='var(--alert)'>
            *
          </Typography>
        )}
      </Box>
      <TextField
        defaultValue={defaultValue}
        id={fieldName}
        type={type === 'password' ? (isPasswordShowed ? 'text' : 'password') : 'text'}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: type === 'password' && (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => setIsPasswordShowed((prev) => !prev)}
                edge='end'
                sx={{ marginRight: '2px' }}
              >
                {isPasswordShowed ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
              </IconButton>
            </InputAdornment>
          )
        }}
        autoComplete={type === 'password' ? 'current-password' : fieldName}
        {...register}
      />
    </Box>
  )
}

export default CustomInputField
