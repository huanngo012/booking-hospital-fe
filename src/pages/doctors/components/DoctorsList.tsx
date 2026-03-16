import { Grid, Pagination, Stack } from '@mui/material'
import { CustomSkeleton, DoctorCard } from '~/components'
import type { Doctor } from '~/types/doctor'

interface DoctorsListProps {
  doctors: Doctor[]
  isLoading?: boolean
  page: number
  totalPage: number
  onChangePage: (page: number) => void
}
const DoctorsList = ({ doctors, isLoading, page, totalPage, onChangePage }: DoctorsListProps) => {
  return (
    <Stack gap={2.5}>
      <Grid container spacing={3}>
        {!isLoading
          ? doctors.map((item) => (
              <Grid key={item._id} size={{ mobile: 12, desktop: 6 }}>
                <DoctorCard doctor={item} />
              </Grid>
            ))
          : [...Array(10)].map((_, index: number) => (
              <Grid key={index} size={{ mobile: 12, desktop: 6 }}>
                <CustomSkeleton variant='card-doctor' />
              </Grid>
            ))}
      </Grid>
      {!isLoading && totalPage > 1 && (
        <Stack alignItems={'center'}>
          <Pagination
            count={totalPage}
            page={page}
            onChange={(_, value) => onChangePage(value)}
            shape='rounded'
            color='primary'
          />
        </Stack>
      )}
    </Stack>
  )
}

export default DoctorsList
