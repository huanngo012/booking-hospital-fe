import './style.scss'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import type { CustomInputFieldProps } from '../../module'
import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const CustomInputField = (props: CustomInputFieldProps) => {
  const {
    label,
    placeholder,
    type = 'text',
    helperText,
    error,
    register,
    defaultValue,
    required,
    disabled,
    value,
    onChange,
    onClick,
    InputProps,
    sx,
    autoComplete = 'on'
  } = props

  const [isPasswordShowed, setIsPasswordShowed] = useState(false)

  const fieldName = register?.name ?? label

  return (
    <Box className='form-field'>
      {label && (
        <Box component='label' className='form-label' htmlFor={fieldName}>
          <Typography variant='label2'>{label}</Typography>
          {required && (
            <Typography variant='label2' color='var(--alert)'>
              *
            </Typography>
          )}
        </Box>
      )}

      <TextField
        id={fieldName}
        value={value}
        defaultValue={defaultValue}
        type={type === 'password' ? (isPasswordShowed ? 'text' : 'password') : type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helperText={helperText}
        onChange={onChange}
        onClick={onClick}
        sx={sx}
        InputProps={{
          ...InputProps,
          endAdornment:
            type === 'password' ? (
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsPasswordShowed((prev) => !prev)}>
                  {isPasswordShowed ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                </IconButton>
              </InputAdornment>
            ) : (
              InputProps?.endAdornment
            )
        }}
        autoComplete={autoComplete}
        {...register}
      />
    </Box>
  )
}

export default CustomInputField
