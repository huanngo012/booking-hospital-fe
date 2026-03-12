import './style.scss'
import { Box, ClickAwayListener, Stack } from '@mui/material'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useDebounce from '~/hooks/useDebounce'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { formatAddress } from '~/utils/helper'
import SearchGroup from './SearchGroup'
import SearchInput from './SearchInput'
import { useDoctors } from '~/modules/doctor/doctor.query'
import { GENDER, PATHS } from '~/utils/constant'
import { images } from '~/assets'
import CustomSkeleton from '../skeleton/CustomSkeleton'

const { doctorfemale, doctormale } = images
const Search = () => {
  const { t } = useTranslation()

  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const debouncedSearch = useDebounce(search, 500)

  const { data: medicalFacilitiesResponse, isFetching: isFetchingFacilities } = useMedicalFacilities(
    {
      name: debouncedSearch,
      limit: 3
    },
    {
      enabled: !!debouncedSearch
    }
  )
  const { data: doctorsResponse, isFetching: isFetchingDoctors } = useDoctors(
    {
      name: debouncedSearch,
      limit: 3
    },
    {
      enabled: !!debouncedSearch
    }
  )

  const isLoading = isFetchingFacilities || isFetchingDoctors

  const groups = useMemo(() => {
    const medicalFacilities = medicalFacilitiesResponse?.items ?? []
    const doctors = doctorsResponse?.items ?? []
    return [
      {
        title: t('common.medical_facility'),
        items: medicalFacilities.map((item) => ({
          _id: item._id,
          title: item.name,
          meta: formatAddress(item.address),
          image: item.logo,
          url: `${PATHS.MEDICALFACILITIES}/${item.slug}`
        })),
        viewAllUrl: `${PATHS.MEDICALFACILITIES}?name=${search}`
      },
      {
        title: t('common.doctor'),
        items: doctors.map((item) => ({
          _id: item._id,
          title: item.user.name,
          meta: item.position || item.medical_facility?.name,
          image: item.user.avatar || (item.gender === GENDER.MALE ? doctormale : doctorfemale),
          url: `${PATHS.DOCTORS}/${item.slug}`
        })),
        viewAllUrl: `${PATHS.DOCTORS}?name=${search}`
      }
    ]
  }, [medicalFacilitiesResponse, doctorsResponse, search, t])

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box width={'100%'}>
        <SearchInput value={search} onChange={setSearch} onFocus={() => setOpen(true)} />
        {search && open && (
          <Stack className='search-recommend-result'>
            {!isLoading
              ? groups.map((group) => (
                  <SearchGroup
                    key={group.title}
                    title={group.title}
                    items={group.items}
                    viewAllUrl={group.viewAllUrl}
                  />
                ))
              : [...Array(10)].map((_, index: number) => <CustomSkeleton key={index} variant='card-search' />)}
          </Stack>
        )}
      </Box>
    </ClickAwayListener>
  )
}

export default Search
