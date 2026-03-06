import { Box, Pagination, Stack } from '@mui/material'
import { CustomSkeleton, MedicalFacilityCard02 } from '~/components'
import type { MedicalFacility } from '~/types/medical-facility'

interface MedicalFacilityListProps {
  medicalFacilities: MedicalFacility[]
  selectedId?: string
  onSelect: (facility: MedicalFacility) => void
  isLoading?: boolean
  page: number
  totalPage: number
  onChangePage: (page: number) => void
}

const MedicalFacilityList = ({
  medicalFacilities,
  selectedId,
  onSelect,
  isLoading,
  page,
  totalPage,
  onChangePage
}: MedicalFacilityListProps) => {
  return (
    <Stack gap={2.5}>
      {!isLoading
        ? medicalFacilities.map((item) => (
            <Box
              key={item._id}
              onClick={() => onSelect(item)}
              className={item._id}
              sx={{
                '& .medical_facility_card_02': {
                  border: item._id === selectedId ? '2px solid var(--primary)' : undefined
                }
              }}
            >
              <MedicalFacilityCard02 facility={item} />
            </Box>
          ))
        : [...Array(10)].map((_, index: number) => <CustomSkeleton key={index} variant='card-medical-facility-02' />)}

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

export default MedicalFacilityList
