import { useState } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useCategories } from '~/modules/category/category.query'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { type MedicalFacility } from '~/types/medical-facility'
import MedicalFacilityList from './MedicalFacilityList'
import MedicalFacilityDetail from './MedicalFacilityDetail'
import { EmptyState } from '~/components'
import MedicalFacilityCategoryFilter from './MedicalFacilityCategoryFilter'

const MedicalFacilitiesBody = () => {
  const { t } = useTranslation()

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0)
  const [medicalFacility, setMedicalFacility] = useState<MedicalFacility | null>(null)
  const [page, setPage] = useState<number>(1)

  const { data: categoriesResponse, isLoading: isCategoriesLoading } = useCategories()
  const categories = categoriesResponse?.items ?? []

  const { data: medicalFacilitiesResponse, isLoading: isMedicalFacilitiesLoading } = useMedicalFacilities({
    page,
    categoryID: selectedCategoryId === 0 ? undefined : selectedCategoryId
  })

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId)
    setPage(1)
    setMedicalFacility(null)
  }

  const medicalFacilities = medicalFacilitiesResponse?.items ?? []

  const selectedFacility = medicalFacility ?? medicalFacilities[0] ?? null
  const totalPage = medicalFacilitiesResponse?.pagination?.totalPages ?? 0
  const isEmpty = !isMedicalFacilitiesLoading && medicalFacilities.length === 0

  return (
    <Box className='medical_facilities_body'>
      <Stack gap={2.5}>
        <MedicalFacilityCategoryFilter
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelect={handleSelectCategory}
          isLoading={isCategoriesLoading}
        />

        {isMedicalFacilitiesLoading ? (
          <Grid container spacing={3}>
            <Grid size={{ mobile: 12, tablet: 7, desktop: 8 }}>
              <MedicalFacilityList
                medicalFacilities={[]}
                onSelect={setMedicalFacility}
                isLoading
                page={page}
                totalPage={totalPage}
                onChangePage={setPage}
              />
            </Grid>
            <Grid
              size={{ mobile: 12, tablet: 5, desktop: 4 }}
              className='medical_facilities_sidebar'
              display={{
                mobile: 'none',
                tablet: 'block'
              }}
            >
              <MedicalFacilityDetail medicalFacility={null} isLoading />
            </Grid>
          </Grid>
        ) : isEmpty ? (
          <EmptyState title={t('medical_facilities_page.not_found')} />
        ) : (
          <Grid container spacing={3}>
            <Grid size={{ mobile: 12, tablet: 7, desktop: 8 }}>
              <MedicalFacilityList
                medicalFacilities={medicalFacilities}
                selectedId={selectedFacility?._id}
                onSelect={setMedicalFacility}
                page={page}
                totalPage={totalPage}
                onChangePage={setPage}
              />
            </Grid>
            <Grid
              size={{ mobile: 12, tablet: 5, desktop: 4 }}
              className='medical_facilities_sidebar'
              display={{
                mobile: 'none',
                tablet: 'block'
              }}
            >
              <MedicalFacilityDetail medicalFacility={selectedFacility} />
            </Grid>
          </Grid>
        )}
      </Stack>
    </Box>
  )
}

export default MedicalFacilitiesBody
