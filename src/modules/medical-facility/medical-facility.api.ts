import axios from '~/axios'
import type { PaginatedResponse, RatingBody } from '~/types/common'
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

export const addRatingMedicalFacility = ({ id, data }: { id: string; data: RatingBody }) =>
  axios({
    url: `/medical-facility/${id}/rating`,
    method: 'put',
    data
  })

export const deleteRatingMedicalFacility = (id: string) =>
  axios({
    url: `/medical-facility/${id}/rating`,
    method: 'delete'
  })
