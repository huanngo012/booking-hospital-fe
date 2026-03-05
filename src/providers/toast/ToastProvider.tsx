import { useState } from 'react'
import { Toast } from '~/components'
import { ToastContext } from './ToastContext'
import { TOAST_TYPE, type ToastType } from '~/components/module'

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<ToastType>(TOAST_TYPE.SUCCESS)

  const showToast = (msg: string, toastType: ToastType = TOAST_TYPE.SUCCESS) => {
    setMessage(msg)
    setType(toastType)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast open={open} message={message} type={type} onClose={handleClose} />
    </ToastContext.Provider>
  )
}

export default ToastProvider
