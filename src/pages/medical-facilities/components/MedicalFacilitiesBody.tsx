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
import MedicalFacilitySearch from './MedicalFacilitySearch'
import useDebounce from '~/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import MedicalFacilityLocationFilter from './MedicalFacilityLocationFilter'

const MedicalFacilitiesBody = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get('name')

  const [search, setSearch] = useState(param ?? '')
  const [province, setProvince] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('')
  const [medicalFacility, setMedicalFacility] = useState<MedicalFacility | null>(null)
  const [page, setPage] = useState<number>(1)

  const { data: categoriesResponse, isLoading: isCategoriesLoading } = useCategories()
  const categories = categoriesResponse?.items ?? []

  const debouncedSearch = useDebounce(search, 500)
  const isReady = search === debouncedSearch

  const { data: medicalFacilitiesResponse, isLoading: isMedicalFacilitiesLoading } = useMedicalFacilities(
    {
      page,
      categoryID: selectedCategoryId === '' ? undefined : selectedCategoryId,
      name: debouncedSearch,
      province: province
    },
    {
      enabled: isReady
    }
  )

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
    setPage(1)
    setMedicalFacility(null)
  }

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

        <Grid container>
          <Grid size={{ mobile: 12, tablet: 7, desktop: 8 }}>
            <MedicalFacilitySearch value={search} onChange={handleSearch} />
          </Grid>
          <Grid size={{ mobile: 12, tablet: 5, desktop: 4 }}>
            <MedicalFacilityLocationFilter value={province} onClick={setProvince} />
          </Grid>
        </Grid>

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
          <EmptyState title={t('pages.medical_facilities.not_found')} />
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
