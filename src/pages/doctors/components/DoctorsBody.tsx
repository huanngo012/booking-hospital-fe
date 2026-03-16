import { Box, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { useDoctors } from '~/modules/doctor/doctor.query'
import DoctorsList from './DoctorsList'
import DoctorsSearch from './DoctorsSearch'
import { useSearchParams } from 'react-router-dom'
import useDebounce from '~/hooks/useDebounce'
import DoctorsSpecialtyFilter from './DoctorsSpecialtyFilter'
import { EmptyState } from '~/components'
import { useTranslation } from 'react-i18next'
import type { Specialty } from '~/types/specialty'

const DoctorsBody = ({ medicalFacilityID, specialtyID }: { medicalFacilityID?: string; specialtyID?: Specialty[] }) => {
  const { t } = useTranslation()

  const [page, setPage] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const param = searchParams.get('name')

  const [search, setSearch] = useState(param ?? '')
  const [specialty, setSpecialty] = useState('')

  const debouncedSearch = useDebounce(search, 500)
  const isReady = search === debouncedSearch

  const { data: doctorsResponse, isLoading: isDoctorsLoading } = useDoctors(
    {
      page,
      name: debouncedSearch,
      medicalFacilityID: medicalFacilityID,
      specialtyName: specialty
    },
    {
      enabled: isReady
    }
  )

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)

    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('name', value)
    } else {
      params.delete('name')
    }

    setSearchParams(params)
  }

  const doctors = doctorsResponse?.items ?? []
  const totalPage = doctorsResponse?.pagination?.totalPages ?? 0
  const isEmpty = !isDoctorsLoading && doctors.length === 0

  return (
    <Box className='doctors_body'>
      <Stack gap={2.5}>
        <Grid container>
          <Grid size={{ mobile: 12, tablet: 7, desktop: 8 }}>
            <DoctorsSearch value={search} onChange={handleSearch} />
          </Grid>
          <Grid size={{ mobile: 12, tablet: 5, desktop: 4 }}>
            <DoctorsSpecialtyFilter defaultData={specialtyID} value={specialty} onClick={setSpecialty} />
          </Grid>
        </Grid>
        {isDoctorsLoading ? (
          <DoctorsList doctors={[]} isLoading page={page} totalPage={totalPage} onChangePage={setPage} />
        ) : isEmpty ? (
          <EmptyState title={t('pages.doctors.not_found')} />
        ) : (
          <DoctorsList
            doctors={doctors}
            isLoading={isDoctorsLoading}
            page={page}
            totalPage={totalPage}
            onChangePage={setPage}
          />
        )}
      </Stack>
    </Box>
  )
}

export default DoctorsBody
