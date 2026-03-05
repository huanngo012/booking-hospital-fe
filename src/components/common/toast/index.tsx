import { Snackbar, Alert } from '@mui/material'
import { TOAST_TYPE, type ToastProps } from '~/components/module'

const Toast = ({ open, message, type = TOAST_TYPE.SUCCESS, onClose }: ToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={type} onClose={onClose} variant='filled'>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
