import type { GENDER, TIME_SLOT_CODE } from '~/utils/constant'
import type { User } from './auth'

export interface QueryParams {
  sort?: string
  fields?: string
  page?: number
  limit?: number
}
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: Pagination
}

export type TimeSlotCode = (typeof TIME_SLOT_CODE)[keyof typeof TIME_SLOT_CODE]
export type Gender = (typeof GENDER)[keyof typeof GENDER]

export interface FacilityWorkingTime {
  dayOfWeek: number
  startTime: TimeSlotCode
  endTime: TimeSlotCode
  breakTimes?: {
    start: TimeSlotCode
    end: TimeSlotCode
  }[]
}

export interface Rating {
  star: number
  postedBy: User
  comment?: string
  updatedAt: Date
}

export interface RatingBody {
  star: number
  comment?: string
}
