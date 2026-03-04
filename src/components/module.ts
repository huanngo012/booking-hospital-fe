import type { MedicalFacility } from '~/types/medical-facility'

export interface CustomSkeletonProps {
  variant: 'card-medical-facility' | 'card-medical-facility-02' | 'card-category'
}

export interface BreadcrumbItem {
  title: string
  link?: string
}

export interface BreadcrumbCustomProps {
  data: BreadcrumbItem[]
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
  description: string
}
