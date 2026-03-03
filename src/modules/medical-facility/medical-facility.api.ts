import axios from '~/axios'
import type { MedicalFacilityQueryParams, MedicalFacilityResponse } from '~/types/medical-facility'

export const getMedicalFacilities = (params?: MedicalFacilityQueryParams): Promise<MedicalFacilityResponse> =>
  axios({
    url: '/medical-facility',
    method: 'get',
    params
  })
