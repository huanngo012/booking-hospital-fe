import { useState } from 'react'
import './style.scss'
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MdOutlineAccessTime } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { images } from '~/assets'
import { BreadscrumbCustom, MedicalFacilityCard02, SEO } from '~/components'
import { useCategories } from '~/modules/category/category.query'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { theme } from '~/themes/Theme'
import { getGoogleMapEmbedUrl } from '~/utils/helper'
import { type MedicalFacility } from '~/types/medical-facility'

const { medical_facilities_banner } = images
const MedicalFacilitiesPage = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const variant1 = isDesktop ? 'h3' : 'h5'
  const variant2 = isDesktop ? 'h5' : 'label1'

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0)
  const [medicalFacility, setMedicalFacility] = useState<MedicalFacility | null>(null)
  const [page, setPage] = useState<number>(1)

  const { data } = useCategories()
  const categories = data?.data ?? []

  const { data: fa } = useMedicalFacilities({
    page,
    categoryID: selectedCategoryId === 0 ? undefined : selectedCategoryId
  })

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId)
    setPage(1)
  }

  const facilities = fa?.data ?? []

  return (
    <Box className='medical_facilities_page'>
      <SEO title={t('medical_facilities_page.title_seo')} description={t('medical_facilities_page.description_seo')} />
      <Box className='medical_facilities_header' sx={{ background: `url(${medical_facilities_banner})` }}>
        <Container>
          <Box className='medical_facilities_header-inner'>
            {<BreadscrumbCustom data={[{ title: t('medical_facilities_page.breadcrumb') }]} />}
            <Box className='medical_facilities_header-text'>
              <Typography variant={variant1} color='var(--primary)' className='medical-facilities__title'>
                {t('medical_facilities_page.title')}
              </Typography>

              <Typography variant={variant2} color='var(--secondary)' className='medical-facilities__description'>
                {t('medical_facilities_page.description')}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className='medical_facilities_body'>
        <Container>
          <Stack gap={2.5}>
            <Box position={'relative'}>
              <Swiper className='swiper--auto' slidesPerView={'auto'} spaceBetween={16} autoplay freeMode>
                <SwiperSlide>
                  <Button
                    variant={selectedCategoryId === 0 ? 'contained' : 'outlined'}
                    onClick={() => handleSelectCategory(0)}
                  >
                    <Typography variant='label2'>{t('category.all')}</Typography>
                  </Button>
                </SwiperSlide>
                {categories?.map((item) => (
                  <SwiperSlide key={item._id}>
                    <Button
                      variant={selectedCategoryId === item._id ? 'contained' : 'outlined'}
                      onClick={() => handleSelectCategory(item._id)}
                    >
                      <Typography variant='label2'>{item.tag}</Typography>
                    </Button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Grid container spacing={3}>
              <Grid size={{ mobile: 12, tablet: 8 }}>
                <Stack gap={2.5}>
                  {facilities.map((item) => (
                    <Box
                      key={item._id}
                      onClick={() => setMedicalFacility(item)}
                      className={item._id}
                      sx={{
                        '& .medical_facility_card_02': {
                          border: item._id === medicalFacility?._id ? '2px solid var(--primary)' : undefined
                        }
                      }}
                    >
                      <MedicalFacilityCard02 facility={item} />
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ mobile: 12, tablet: 4 }} className='medical_facilities_sidebar'>
                <Box className='medical_facilities_detail'>
                  <Box className='medical_facilities_detail_header'>
                    <Box className='medical_facilities_detail_logo'>
                      <Box component={'img'} src={medicalFacility?.logo} />
                    </Box>
                    <Typography variant='h6' className='truncate_2' color='var(--primary)' textAlign={'center'}>
                      {medicalFacility?.name}
                    </Typography>
                    <Stack direction={'row'} gap={0.5} marginTop={'6px'}>
                      <Box component={'span'}>
                        <MdOutlineAccessTime size={20} color='var(--orange-400)' />
                      </Box>
                      <Typography variant='body2'>Thứ 2 - Thứ 6 (06:00- 16:30); Thứ 7 (06:00-11:30)</Typography>
                    </Stack>
                  </Box>
                  <Box>
                    <Typography variant='body2'>{medicalFacility?.description}</Typography>
                    <Stack gap={1.5} marginTop={1.5}>
                      <Typography variant='h6' color='var(--secondary)'>
                        {t('medical_facilities.map')}
                      </Typography>
                      <iframe
                        title='google-map'
                        src={getGoogleMapEmbedUrl(medicalFacility?.address)}
                        width='100%'
                        height='300'
                        style={{ border: 0 }}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                      />
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default MedicalFacilitiesPage
