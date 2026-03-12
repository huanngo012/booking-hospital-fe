import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import type { PaginatedResponse } from '~/types/common'
import { getDoctors } from './doctor.api'
import type { Doctor, DoctorQueryParams } from '~/types/doctor'

type DoctorsQueryOptions = Omit<UseQueryOptions<PaginatedResponse<Doctor>>, 'queryKey' | 'queryFn'>

export const useDoctors = (params?: DoctorQueryParams, options?: DoctorsQueryOptions) => {
  return useQuery<PaginatedResponse<Doctor>>({
    queryKey: ['categories', params],
    queryFn: () => getDoctors(params),
    ...options
  })
}
