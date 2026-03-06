import axios from '~/axios'
import type { PaginatedResponse } from '~/types/common'
import type { MedicalFacility, MedicalFacilityQueryParams } from '~/types/medical-facility'

export const getMedicalFacilities = (
  params?: MedicalFacilityQueryParams
): Promise<PaginatedResponse<MedicalFacility>> =>
  axios({
    url: '/medical-facility',
    method: 'get',
    params
  })

export const getMedicalFacilityBySlug = (slug: string): Promise<MedicalFacility> =>
  axios({
    url: `/medical-facility/${slug}`,
    method: 'get'
  })
