import { Box, ClickAwayListener, Container, InputAdornment, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from '~/themes'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { PATHS, SEARCH_PLACEHOLDER, SERVICES } from '~/utils/constant'
import { images } from '~/assets'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { CustomInputField, EmptyState } from '~/components'
import { IoMdClose } from 'react-icons/io'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useTypingPlaceholder } from '~/hooks/useTypingPlaceholder'
import useDebounce from '~/hooks/useDebounce'
import { useMedicalFacilities } from '~/modules/medical-facility/medical-facility.query'
import { formatAddress } from '~/utils/helper'

const { homepage_banner } = images

const IntroSection = () => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const [search, setSearch] = useState('')
  const [openSearchRecommendation, setOpenSearchRecommendation] = useState(false)

  const placeholders = useMemo(() => SEARCH_PLACEHOLDER.map((key) => t(key)), [t])

  const placeholder = useTypingPlaceholder({
    words: placeholders
  })

  const debouncedSearch = useDebounce(search, 500)

  const { data: medicalFacilitiesResponse } = useMedicalFacilities(
    {
      name: debouncedSearch,
      limit: 3
    },
    {
      enabled: !!debouncedSearch
    }
  )
  const medicalFacilities = medicalFacilitiesResponse?.items ?? []

  return (
    <Box component={'section'} className='intro_section'>
      <Box
        className='intro_banner'
        sx={{
          background: `url(${homepage_banner})`
        }}
      >
        <Container className='animate animate--fade-in'>
          <Stack alignItems='center' gap={2} textAlign='center' paddingBlock={'30px'}>
            <Typography variant='h5' color='var(--primary)'>
              {t('pages.home.intro_section.sub_title')}
            </Typography>
            <Typography variant={isTablet ? 'h3' : 'h5'} color='var(--secondary)'>
              {t('pages.home.intro_section.title')}
            </Typography>

            <Stack
              direction={'row'}
              gap={1}
              alignItems={'center'}
              position={'relative'}
              width={'100%'}
              maxWidth={'700px'}
            >
              <ClickAwayListener onClickAway={() => setOpenSearchRecommendation(false)}>
                <Box width={'100%'}>
                  <CustomInputField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => setOpenSearchRecommendation(true)}
                    placeholder={placeholder}
                    autoComplete={'off'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <HiMagnifyingGlass size={20} color='var(--text-tertiary)' />
                        </InputAdornment>
                      ),
                      endAdornment: search !== '' && (
                        <IoMdClose
                          size={20}
                          color='var(--text-tertiary)'
                          cursor='pointer'
                          onClick={() => setSearch('')}
                        />
                      )
                    }}
                  />
                  {search && openSearchRecommendation && (
                    <Stack className='search-recommend-result'>
                      <Stack>
                        <Stack
                          direction='row'
                          justifyContent='space-between'
                          alignItems='center'
                          padding='13px'
                          sx={{ backgroundColor: '#e6f2ff' }}
                        >
                          <Typography variant='label2' color='var(--secondary)'>
                            {t('common.medical_facility')}
                          </Typography>
                          {medicalFacilities.length > 0 && (
                            <Link to={`${PATHS.MEDICALFACILITIES}?name=${search}`}>
                              <Typography variant='label3' component='i' color='var(--primary)'>
                                {t('common.view_all')}
                              </Typography>
                            </Link>
                          )}
                        </Stack>
                        {medicalFacilities.length > 0 ? (
                          medicalFacilities.map((item) => (
                            <Link key={item._id} to={`${PATHS.MEDICALFACILITIES}/${item.slug}`} className='card_search'>
                              <Box component='img' className='card_image' src={item.logo} alt='' />
                              <Stack gap={0.5}>
                                <Typography variant='label2' color='var(--secondary)'>
                                  {item.name}
                                </Typography>
                                <Typography variant='body3' color='var(--text-tertiary)'>
                                  {formatAddress(item.address)}
                                </Typography>
                              </Stack>
                            </Link>
                          ))
                        ) : (
                          <EmptyState title={t('pages.medical_facilities.not_found')} />
                        )}
                      </Stack>
                    </Stack>
                  )}
                </Box>
              </ClickAwayListener>
            </Stack>
            <Typography variant='body1' color='var(--secondary)'>
              {t('pages.home.intro_section.description')}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container
        className='animate animate--fade-in'
        sx={{
          marginTop: {
            desktop: '-6%'
          }
        }}
      >
        <Box position={'relative'}>
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={isDesktop}
            breakpoints={{
              768: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 7
              }
            }}
            style={{
              position: 'static',
              paddingBlock: '20px',
              marginBlock: '-20px'
            }}
          >
            {SERVICES.map((item) => (
              <SwiperSlide key={item.id}>
                <Box component={Link} to={item.link} className='intro_card'>
                  <Box component='img' src={item.icon} alt={item.name} width={'50px'} height={'50px'} />
                  <Typography variant={isTablet ? 'body2' : 'body3'} color='var(--secondary)'>
                    {t(item.name)}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}

export default IntroSection
