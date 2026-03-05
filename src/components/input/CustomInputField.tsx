import './style.scss'
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import type { CustomInputFieldProps } from '../module'
import { useRef, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const CustomInputField = (props: CustomInputFieldProps) => {
  const { label, placeholder, type = 'text', onChange, helperText, error, register } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordShowed, setIsPasswordShowed] = useState(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }

  const handleFocus = () => {
    inputRef.current?.getElementsByTagName('input')[0].focus()
  }

  const handleToggleShowPassword = () => {
    setIsPasswordShowed((prev) => !prev)
  }

  return (
    <Box className='form-field'>
      <Box className='form-label' onClick={handleFocus}>
        <Typography variant='label2'>{label}</Typography>
        <Typography variant='label2' color='var(--alert)'>
          *
        </Typography>
      </Box>
      <TextField
        ref={inputRef}
        type={type === 'password' ? (isPasswordShowed ? 'text' : 'password') : 'text'}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        onChange={handleTextChange}
        InputProps={{
          endAdornment: type === 'password' && (
            <InputAdornment position='end'>
              <IconButton aria-label='toggle password visibility' onClick={handleToggleShowPassword} edge='end'>
                {isPasswordShowed ? <IoEyeOutline className='icon' /> : <IoEyeOffOutline className='icon' />}
              </IconButton>
            </InputAdornment>
          )
        }}
        {...register}
      />
    </Box>
  )
}

export default CustomInputField
