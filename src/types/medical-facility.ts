import type { FacilityWorkingTime, QueryParams } from './common'

export interface MedicalFacilityQueryParams extends QueryParams {
  name?: string
  categoryID?: string | number
}

export interface MedicalFacility {
  _id: string
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
  workingTimes: FacilityWorkingTime[]
}
