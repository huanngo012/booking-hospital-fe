import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getMedicalFacilities, getMedicalFacilityBySlug } from './medical-facility.api'
import { type MedicalFacilityQueryParams, type MedicalFacility } from '~/types/medical-facility'
import type { PaginatedResponse } from '~/types/common'

type MedicalFacilitiesQueryOptions = Omit<UseQueryOptions<PaginatedResponse<MedicalFacility>>, 'queryKey' | 'queryFn'>

export const useMedicalFacilities = (params?: MedicalFacilityQueryParams, options?: MedicalFacilitiesQueryOptions) => {
  return useQuery<PaginatedResponse<MedicalFacility>>({
    queryKey: ['medical-facilities', params],
    queryFn: () => getMedicalFacilities(params),
    ...options
  })
}

export const useMedicalFacility = (slug: string) => {
  return useQuery<MedicalFacility>({
    queryKey: ['medical-facilities', slug],
    queryFn: () => getMedicalFacilityBySlug(slug),
    enabled: !!slug,
    refetchOnMount: false
  })
}
