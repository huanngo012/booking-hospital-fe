// import { DataGridProps, GridColDef, GridRowsProp } from '@mui/x-data-grid'
// import { ReactNode } from 'react'

export interface CustomSkeletonProps {
  variant:
    | 'card-search'
    | 'card-hospital-section'
    | 'card-hospital'
    | 'card-doctor'
    | 'card-schedule'
    | 'card-patient'
    | 'card-project'
    | 'card-device-health'
    | 'card-error'
    | 'card-notify'
    | 'card-notify-popup'
    | 'table-booking'
    | 'result-popup'
}

// export interface EmptyPageProps {
//   title?: string
//   message?: string
//   style?: any
// }

// export interface CustomDataGridProps {
//   pageSize?: number
//   totalRow?: number
//   rows?: GridRowsProp
//   columns?: GridColDef[]
//   page?: number
//   setPage?: any
//   slots?: DataGridProps['slots']

//   headerComponent?: ReactNode
//   showPagination?: boolean
//   explainName?: string
// }

// export interface MarkdownEditorProps {
//   value?: any
//   setValue?: any
//   nameKey?: any
//   invalidFields?: any
//   setInvalidFields?: any
//   disabled?: boolean
//   placeholder?: string
// }

export interface CustomSelectProps {
  placeholder?: string
  value?: string
  setValue?: any
  nameKey?: any
  options?: any
  disabled?: boolean
  color?: string
  style?: any
}

// export interface CommentProps {
//   ratings?: any
//   totalRatings?: any
//   clinicID?: any
//   popUpComment?: ReactNode
// }

export interface BreadcrumbItem {
  title: string
  link?: string
}

export interface BreadcrumbCustomProps {
  data: BreadcrumbItem[]
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
