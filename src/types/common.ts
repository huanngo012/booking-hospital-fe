import type { TIME_SLOT_CODE } from '~/utils/constant'

export interface QueryParams {
  sort?: string
  fields?: string
  page?: number
  limit?: number
}

export type TimeSlotCode = (typeof TIME_SLOT_CODE)[keyof typeof TIME_SLOT_CODE]

export interface FacilityWorkingTime {
  dayOfWeek: number
  startTime: TimeSlotCode
  endTime: TimeSlotCode
  breakTimes?: {
    start: TimeSlotCode
    end: TimeSlotCode
  }[]
}
