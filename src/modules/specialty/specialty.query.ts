import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import type { PaginatedResponse } from '~/types/common'
import type { Specialty, SpecialtyQueryParams } from '~/types/specialty'
import { getSpecialties } from './specialty.api'

type SpecialtiesQueryOptions = Omit<UseQueryOptions<PaginatedResponse<Specialty>>, 'queryKey' | 'queryFn'>

export const useSpecialties = (params?: SpecialtyQueryParams, options?: SpecialtiesQueryOptions) => {
  return useQuery<PaginatedResponse<Specialty>>({
    queryKey: ['specialties', params],
    queryFn: () => getSpecialties(params),
    ...options
  })
}
