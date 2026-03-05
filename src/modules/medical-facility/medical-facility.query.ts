import { useQuery } from '@tanstack/react-query'
import { getMedicalFacilities } from './medical-facility.api'
import { type MedicalFacilityResponse, type MedicalFacilityQueryParams } from '~/types/medical-facility'

export const useMedicalFacilities = (params?: MedicalFacilityQueryParams) => {
  return useQuery<MedicalFacilityResponse>({
    queryKey: ['medical-facilities', params],
    queryFn: () => getMedicalFacilities(params)
  })
}
