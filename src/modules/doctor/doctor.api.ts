import axios from '~/axios'
import type { PaginatedResponse } from '~/types/common'
import type { Doctor, DoctorQueryParams } from '~/types/doctor'

export const getDoctors = (params?: DoctorQueryParams): Promise<PaginatedResponse<Doctor>> =>
  axios({
    url: '/doctor',
    method: 'get',
    params
  })
