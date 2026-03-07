import type { TextFieldProps } from '@mui/material'
import type { UseFormRegisterReturn } from 'react-hook-form'
import type { MedicalFacility } from '~/types/medical-facility'

export interface CustomSkeletonProps {
  variant: 'card-medical-facility' | 'card-medical-facility-02' | 'card-medical-facility-detail' | 'card-category'
}

export interface BreadcrumbItem {
  title: string
  link?: string
}

export interface BreadcrumbCustomProps {
  data: BreadcrumbItem[]
}

export interface CustomInputFieldProps {
  label?: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  error?: boolean
  helperText?: string
  register?: UseFormRegisterReturn
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onClick?: React.MouseEventHandler<HTMLDivElement>
  InputProps?: TextFieldProps['InputProps']
  sx?: TextFieldProps['sx']
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete']
}

export interface EmptyStateProps {
  title?: string
  message?: string
}

export interface ArticleProps {
  image: string
  url: string
  title: string
  description: string
  blog: string
}

export interface ArticleCardProps {
  article: ArticleProps
  style?: '01' | '02' | '03'
}

export interface MedicalFacilityCardProps {
  facility: MedicalFacility
}

export interface SEOProps {
  title: string
  description?: string
}

export const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
} as const

export type ToastType = (typeof TOAST_TYPE)[keyof typeof TOAST_TYPE]

export interface ToastProps {
  open: boolean
  message: string
  type?: ToastType
  onClose: () => void
}
