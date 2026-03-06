import { useQuery } from '@tanstack/react-query'
import { getMedicalFacilities, getMedicalFacilityBySlug } from './medical-facility.api'
import { type MedicalFacilityQueryParams, type MedicalFacility } from '~/types/medical-facility'
import type { PaginatedResponse } from '~/types/common'

export const useMedicalFacilities = (params?: MedicalFacilityQueryParams) => {
  return useQuery<PaginatedResponse<MedicalFacility>>({
    queryKey: ['medical-facilities', params],
    queryFn: () => getMedicalFacilities(params)
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
