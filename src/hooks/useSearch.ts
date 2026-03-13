import { useMemo } from 'react'
import useDebounce from '~/hooks/useDebounce'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { useDoctors } from '~/modules/doctor/doctor.query'
import { formatAddress } from '~/utils/helper'
import { GENDER, PATHS } from '~/utils/constant'
import { images } from '~/assets'

const { doctorfemale, doctormale } = images

export const useSearch = (search: string) => {
  const debouncedSearch = useDebounce(search, 500)

  const { data: medicalFacilitiesResponse, isFetching: isFetchingFacilities } = useMedicalFacilities(
    { name: debouncedSearch, limit: 3 },
    { enabled: !!debouncedSearch, staleTime: 5 * 60 * 1000 }
  )

  const { data: doctorsResponse, isFetching: isFetchingDoctors } = useDoctors(
    { name: debouncedSearch, limit: 3 },
    { enabled: !!debouncedSearch, staleTime: 5 * 60 * 1000 }
  )

  const isLoading = search !== debouncedSearch || isFetchingFacilities || isFetchingDoctors

  const groups = useMemo(() => {
    const medicalFacilities = medicalFacilitiesResponse?.items ?? []
    const doctors = doctorsResponse?.items ?? []

    return [
      {
        title: 'common.medical_facility',
        items: medicalFacilities.map((item) => ({
          _id: item._id,
          title: item.name,
          meta: formatAddress(item.address),
          image: item.logo,
          url: `${PATHS.MEDICALFACILITIES}/${item.slug}`
        })),
        viewAllUrl: `${PATHS.MEDICALFACILITIES}?name=${debouncedSearch}`
      },
      {
        title: 'common.doctor',
        items: doctors.map((item) => ({
          _id: item._id,
          title: item.user.name,
          meta: item.position || item.medical_facility?.name,
          image: item.user.avatar || (item.gender === GENDER.MALE ? doctormale : doctorfemale),
          url: `${PATHS.DOCTORS}/${item.slug}`
        })),
        viewAllUrl: `${PATHS.DOCTORS}?name=${debouncedSearch}`
      }
    ]
  }, [medicalFacilitiesResponse, doctorsResponse, debouncedSearch])

  return { groups, isLoading }
}
