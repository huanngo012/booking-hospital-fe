import type { User } from './auth'
import type { Gender, QueryParams } from './common'
import type { MedicalFacility } from './medical-facility'
import type { Specialty } from './specialty'

export interface DoctorQueryParams extends QueryParams {
  name?: string
  specialtyName?: string
  medicalFacilityID?: string
}

export interface Doctor {
  _id: string
  userID: string
  gender: Gender
  slug: string
  specialtyID: number
  medicalFacilityID: number
  description?: string
  roomID?: string
  position?: string
  totalRatings: number
  user: User
  medical_facility: MedicalFacility
  specialty: Specialty
}
