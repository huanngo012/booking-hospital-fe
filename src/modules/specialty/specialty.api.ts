import axios from '~/axios'
import type { PaginatedResponse } from '~/types/common'
import type { Specialty, SpecialtyQueryParams } from '~/types/specialty'

export const getSpecialties = (params?: SpecialtyQueryParams): Promise<PaginatedResponse<Specialty>> =>
  axios({
    url: '/specialty',
    method: 'get',
    params
  })
