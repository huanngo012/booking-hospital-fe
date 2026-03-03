import type { QueryParams } from './common'

export interface MedicalFacilityQueryParams extends QueryParams {
  name?: string
}

export interface MedicalFacility {
  id: string
  name: string
  logo: string
  slug: string
  address: {
    province: string
    district: string
    ward: string
    detail: string
  }
  images: string[]
  description?: string
  totalRatings: number
}
export interface MedicalFacilityResponse {
  status: number
  success: boolean
  data: MedicalFacility[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}
