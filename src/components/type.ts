import type { TextFieldProps } from '@mui/material'
import type { UseFormRegisterReturn } from 'react-hook-form'
import type { Rating } from '~/types/common'
import type { Doctor } from '~/types/doctor'
import type { MedicalFacility } from '~/types/medical-facility'

export interface CustomSkeletonProps {
  variant:
    | 'card-medical-facility'
    | 'card-medical-facility-02'
    | 'card-medical-facility-detail'
    | 'card-category'
    | 'card-doctor'
    | 'card-search'
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
  onFocus?: React.FocusEventHandler<HTMLInputElement>
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
export interface DoctorCardProps {
  doctor: Doctor
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

export interface SearchItem {
  _id: string
  title: string
  image?: string
  meta?: string
  url: string
}

export interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onFocus: React.FocusEventHandler<HTMLInputElement>
}

export interface SearchResultProps {
  loading: boolean
  groups: SearchGroupProps[]
}

export interface SearchGroupProps {
  title: string
  items: SearchItem[]
  viewAllUrl?: string
}

export interface SearchCardProps {
  item: SearchItem
}

export interface CommentProps {
  medicalFacility: MedicalFacility
}
export interface RatingOverviewProps {
  ratings: Rating[]
  totalRatings: number
}
export interface RatingBarProps {
  number: number
  ratingCount: number
  ratingTotal: number
}
export interface CommentCardProps {
  id: string
  slug: string
  rating: Rating
}
