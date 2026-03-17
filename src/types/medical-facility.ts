import type { FacilityWorkingTime, QueryParams, Rating } from './common'
import type { Specialty } from './specialty'

export interface MedicalFacilityQueryParams extends QueryParams {
  name?: string
  categoryID?: string | number
  province?: string
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
  description: string
  ratings: Rating[]
  totalRatings: number
  workingTimes: FacilityWorkingTime[]
  specialtyID?: Specialty[]
}
