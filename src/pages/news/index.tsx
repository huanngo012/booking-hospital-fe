import './style.scss'
import { Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArticleCard, BreadscrumbCustom, SEO } from '~/components'
import { theme } from '~/themes'

const NewsPage = () => {
  const { t } = useTranslation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  return (
    <Box className='news_page'>
      <SEO title={t('pages.news.title_seo')} description={t('pages.news.description_seo')} />
      <Container>
        {<BreadscrumbCustom data={[{ title: t('navigation.news') }]} />}
        <Stack gap={4}>
          {blogs.map((item, index) => (
            <Box key={index}>
              <Box className='title'>
                <Typography variant='h5' margin='30px 0'>
                  {item.title}
                </Typography>
              </Box>
              {index === 0 ? (
                <Grid container spacing={4}>
                  <Grid size={{ mobile: 12, tablet: 8 }} display={'flex'} flexDirection={'column'} gap={'40px'}>
                    {item.posts.slice(0, 2).map((itemChild, indexChild) => (
                      <Box key={indexChild}>
                        <ArticleCard article={{ ...itemChild, blog: item.title }} />
                      </Box>
                    ))}
                  </Grid>
                  <Grid size={{ mobile: 12, tablet: 4 }} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    {item.posts.slice(2).map((itemChild, indexChild) => (
                      <Box key={indexChild}>
                        <ArticleCard article={{ ...itemChild, blog: item.title }} style='02' />
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              ) : (
                <Box position={'relative'}>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={16}
                    modules={[Navigation]}
                    navigation={isDesktop}
                    breakpoints={{
                      768: {
                        slidesPerView: 3
                      },
                      1200: {
                        slidesPerView: 5
                      }
                    }}
                    style={{
                      position: 'static',
                      paddingBlock: '20px',
                      marginBlock: '-20px'
                    }}
                  >
                    {item.posts.map((itemChild, indexChild) => (
                      <SwiperSlide key={indexChild}>
                        <ArticleCard article={{ ...itemChild, blog: item.title }} style='03' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default NewsPage

const blogs = [
  {
    id: '1',
    title: 'Tin y tế',
    posts: [
      {
        id: '1',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_2d675b6cca504e21b43a4ef1acdda424_9375606bde.jpeg&w=1920&q=100',
        url: '#',
        title: 'Chi phí nạo VA ở Bệnh viện Nhi Đồng 1: những điều cần lưu ý',
        description:
          'Nạo VA là thủ thuật cần thiết nếu trẻ bị viêm VA nặng, tái phát trên 6 lần mỗi năm. Cùng tìm hiểu về chi phí nạo VA ở Bệnh viện Nhi Đồng 1 trong bài viết.'
      },
      {
        id: '2',
        image: 'https://cms.medpro.com.vn/uploads/topic_df59c0450c054864a8cd28451db03730_61ea94db15.jpeg',
        url: '#',
        title:
          'Tầm soát ung thư Bệnh viện Đại học Y Dược TP. HCM: hạng mục khám, chi phí khám, chất lượng dịch vụ, đội ngũ bác sĩ. Tìm hiểu ngay qua bài viết dưới đây.',
        description: 'Tầm soát ung thư Bệnh viện Đại học Y Dược TP. HCM'
      },
      {
        id: '3',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_aac1bc01270b4df5a1a336b0e7871930_2337d6318f.jpeg&w=1920&q=75',
        url: '#',
        title: 'Review khám da liễu tại khoa da liễu Bệnh viện Đai học Y Dược',
        description: ''
      },
      {
        id: '4',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720174482089_34dd6c0aa2.png&w=1920&q=75',
        url: '#',
        title: 'Chi phí đốt điện tim tại Bệnh viện Chợ Rẫy là bao nhiêu?',
        description: ''
      },
      {
        id: '5',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720173386771_4aff437d2e.png&w=1920&q=75',
        url: '#',
        title: 'Chi phí ghép thận ở Bệnh viện Chợ Rẫy là bao nhiêu?',
        description: ''
      },
      {
        id: '6',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720172042772_79a1fffc7e.png&w=1920&q=75',
        url: '#',
        title: 'Thông tin hữu ích xoay quanh khám dịch vụ bệnh viện Chợ Rẫy',
        description: ''
      },
      {
        id: '7',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720170988041_41795ba99e.png&w=1920&q=75',
        url: '#',
        title: 'Khoa Nội tiêu hóa bệnh viện Chợ Rẫy: Thông tin, cách đặt khám',
        description: ''
      },
      {
        id: '8',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720169113810_1807009941.png&w=1920&q=75',
        url: '#',
        title: 'Khoa U gan bệnh viện Chợ Rẫy: Thông tin và đặt lịch',
        description: ''
      },
      {
        id: '9',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1720161547437_a290e8f953.png&w=1920&q=75',
        url: '#',
        title: 'Khám Ung bướu bệnh viện Chợ Rẫy: Thông tin và hướng dẫn khám',
        description: ''
      }
    ]
  },
  {
    id: '2',
    title: 'Tin dịch vụ',
    posts: [
      {
        id: '1',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1719383471561_f06e63c8cc.png&w=1920&q=75',
        url: '#',
        title: 'Review tổng quát Bệnh viện thẩm mỹ Kangnam',
        description: ''
      },
      {
        id: '2',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712127441463_8ad8764036.png&w=1920&q=75',
        url: '#',
        title: 'Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn có trên Medpro',
        description: ''
      },
      {
        id: '3',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712117427596_474634c999.png&w=1920&q=75',
        url: '#',
        title: 'Bệnh viện chuyên khoa Mắt HITEC có mặt trên Medpro',
        description: ''
      },
      {
        id: '4',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1710297482063_a061be24cc.png&w=1920&q=75',
        url: '#',
        title: 'Phòng khám Nhi Chất Lượng Cao Kỳ Đồng có mặt trên Medpro',
        description: ''
      },
      {
        id: '5',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2Ftopic_1db23f562aa9410381cefa80fe2941dc_3bc0ed0939.jpg&w=1920&q=75',
        url: '#',
        title: 'Lịch nghỉ 30/4 - 1/5/2024 của Bệnh viện Phụ sản TP. Cần Thơ và các Bệnh viện trên hệ thống Medpro',
        description: ''
      },
      {
        id: '6',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1710300714186_ea4e99dd9b.png&w=1920&q=75',
        url: '#',
        title: 'Bệnh viện Đa khoa Bảo Sơn đã chính thức có mặt trên Medpro',
        description: ''
      },
      {
        id: '7',
        image:
          'https://medpro.vn/_next/image?url=https%3A%2F%2Fcms.medpro.com.vn%2Fuploads%2F1712115119393_87c4070e36.png&w=1920&q=75',
        url: '#',
        title: 'Phòng khám chuyên khoa cơ xương khớp Mỹ Việt - Sài Gòn có mặt trên Medpro',
        description: ''
      }
    ]
  }
]
