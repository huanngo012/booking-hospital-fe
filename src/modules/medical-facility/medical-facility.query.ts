import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getMedicalFacilities } from './medical-facility.api'
import { type MedicalFacilityResponse, type MedicalFacilityQueryParams } from '~/types/medical-facility'

export const useMedicalFacilities = (
  params?: MedicalFacilityQueryParams,
  options?: UseQueryOptions<MedicalFacilityResponse>
) => {
  return useQuery<MedicalFacilityResponse>({
    queryKey: ['medical-facilities', params],
    queryFn: () => getMedicalFacilities(params),
    staleTime: 5 * 60 * 1000,
    ...options
  })
}
