import dayjs from 'dayjs'
import { FaBirthdayCake, FaPhone, FaUserAlt, FaUserCircle, FaVenusMars } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import { SiFacebook, SiTiktok, SiYoutube } from 'react-icons/si'
import { LuFileUser } from 'react-icons/lu'
import { images } from '~/assets'
import { PiPasswordBold } from 'react-icons/pi'
import TabChangePassword from '~/pages/user/components/TabChangePassword'
import TabProfile from '~/pages/user/components/TabProfile'
import TabRecords from '~/pages/user/components/TabRecords'
import TabBookings from '~/pages/user/components/TabBookings'
import type { Patient } from '~/types/patient '

const {
  examinationEars,
  hospital,
  clinic,
  doctor,
  location,
  eye,
  home_icon,
  doctor_icon,
  medical_facility_icon,
  news_icon,
  about_us_icon,
  record_icon,
  profile_icon,
  password_icon,
  schedule_icon
} = images

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  USER: '/user',
  MEDICALFACILITIES: '/medical-facilities',
  MEDICALFACILITY_DETAIL: '/medical-facilities/:slug',
  SPECIALTIES: '/specialties',
  DOCTORS: '/doctors',
  NEWS: '/news',
  ABOUT: '/about',
  NOT_FOUND: '*'
}

export const SEARCH_PLACEHOLDER = [
  'pages.home.intro_section.search_placeholder.0',
  'pages.home.intro_section.search_placeholder.1'
]

export const DAYS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

export const TIME_SLOT_CODE = {
  SLOT_00_00: '00:00',
  SLOT_00_30: '00:30',

  SLOT_01_00: '01:00',
  SLOT_01_30: '01:30',

  SLOT_02_00: '02:00',
  SLOT_02_30: '02:30',

  SLOT_03_00: '03:00',
  SLOT_03_30: '03:30',

  SLOT_04_00: '04:00',
  SLOT_04_30: '04:30',

  SLOT_05_00: '05:00',
  SLOT_05_30: '05:30',

  SLOT_06_00: '06:00',
  SLOT_06_30: '06:30',

  SLOT_07_00: '07:00',
  SLOT_07_30: '07:30',

  SLOT_08_00: '08:00',
  SLOT_08_30: '08:30',

  SLOT_09_00: '09:00',
  SLOT_09_30: '09:30',

  SLOT_10_00: '10:00',
  SLOT_10_30: '10:30',

  SLOT_11_00: '11:00',
  SLOT_11_30: '11:30',

  SLOT_12_00: '12:00',
  SLOT_12_30: '12:30',

  SLOT_13_00: '13:00',
  SLOT_13_30: '13:30',

  SLOT_14_00: '14:00',
  SLOT_14_30: '14:30',

  SLOT_15_00: '15:00',
  SLOT_15_30: '15:30',

  SLOT_16_00: '16:00',
  SLOT_16_30: '16:30',

  SLOT_17_00: '17:00',
  SLOT_17_30: '17:30',

  SLOT_18_00: '18:00',
  SLOT_18_30: '18:30',

  SLOT_19_00: '19:00',
  SLOT_19_30: '19:30',

  SLOT_20_00: '20:00',
  SLOT_20_30: '20:30',

  SLOT_21_00: '21:00',
  SLOT_21_30: '21:30',

  SLOT_22_00: '22:00',
  SLOT_22_30: '22:30',

  SLOT_23_00: '23:00',
  SLOT_23_30: '23:30'
}

export const TABS_USER = [
  {
    id: 1,
    icon: <FaUserCircle size={18} />,
    icon_mobile: profile_icon,
    title: 'user.profile',
    path: `profile`,
    component: TabProfile
  },
  {
    id: 2,
    icon: <PiPasswordBold size={18} />,
    icon_mobile: password_icon,
    title: 'user.change_password',
    path: `change_password`,
    component: TabChangePassword
  },
  {
    id: 3,
    icon: <LuFileUser size={18} />,
    title: 'user.records',
    icon_mobile: record_icon,
    path: `records`,
    component: TabRecords
  },
  {
    id: 4,
    icon: <IoMdCalendar size={18} />,
    title: 'user.bookings',
    icon_mobile: schedule_icon,
    path: `bookings`,
    component: TabBookings
  }
]

export const MENUS = [
  {
    id: 1,
    title: 'navigation.home',
    icon: home_icon,
    path: PATHS.HOME
  },
  {
    id: 2,
    title: 'navigation.medical_facilities',
    icon: medical_facility_icon,
    path: PATHS.MEDICALFACILITIES
  },
  {
    id: 3,
    title: 'navigation.doctors',
    icon: doctor_icon,
    path: PATHS.DOCTORS
  },
  {
    id: 4,
    title: 'navigation.news',
    icon: news_icon,
    path: PATHS.NEWS
  },
  {
    id: 5,
    title: 'navigation.about_us',
    icon: about_us_icon,
    path: PATHS.ABOUT
  }
]

export const NETWORKS = [
  {
    id: 1,
    name: 'Tiktok',
    icon: <SiTiktok />,
    link: 'https://www.tiktok.com/@medprovn'
  },
  {
    id: 2,
    name: 'Facebook',
    icon: <SiFacebook />,
    link: 'https://www.facebook.com/www.medpro.vn'
  },
  {
    id: 1,
    name: 'Youtube',
    icon: <SiYoutube />,
    link: 'https://www.youtube.com/@medpro-datkhamnhanh'
  }
]

export const LANGUAGES = {
  vi: {
    title: 'languages.vi',
    icon: '/svgs/vi.svg'
  },
  en: {
    title: 'languages.en',
    icon: '/svgs/en.svg'
  }
}

export const SERVICES = [
  {
    id: 1,
    name: 'pages.home.intro_section.services.0',
    icon: images.booking,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 2,
    name: 'pages.home.intro_section.services.1',
    icon: images.examinationEars1,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 3,
    name: 'pages.home.intro_section.services.2',
    icon: images.consult,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 4,
    name: 'pages.home.intro_section.services.3',
    icon: images.schedule,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 5,
    name: 'pages.home.intro_section.services.4',
    icon: images.business_examination,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 6,
    name: 'pages.home.intro_section.services.5',
    icon: images.insurance,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 7,
    name: 'pages.home.intro_section.services.6',
    icon: images.injection,
    link: PATHS.MEDICALFACILITIES
  },
  {
    id: 8,
    name: 'pages.home.intro_section.services.7',
    icon: images.pay,
    link: PATHS.MEDICALFACILITIES
  }
]

export const INFO_FOOTER = [
  {
    title: 'common.address',
    description: 'footer.address'
  },
  {
    title: 'common.website',
    description: 'footer.link_web'
  },
  {
    title: 'common.email',
    description: 'footer.email'
  },
  {
    title: 'common.phone',
    description: 'footer.phone'
  }
]
export const MENU_FOOTER = [
  {
    title: 'footer.menu.0.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'footer.menu.0.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.0.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.0.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.0.sub_menu.3',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.0.sub_menu.4',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.0.sub_menu.5',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'footer.menu.1.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'footer.menu.1.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.1.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.1.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.1.sub_menu.3',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.1.sub_menu.4',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'footer.menu.2.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'footer.menu.2.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.2.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.2.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.2.sub_menu.3',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'footer.menu.3.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'footer.menu.3.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.3.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.3.sub_menu.2',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'footer.menu.4.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'footer.menu.4.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.4.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.4.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'footer.menu.4.sub_menu.3',
        sub_link: '/'
      }
    ]
  }
]
export const IMAGE_FOOTER = [
  '/images/dadangky.webp',
  '/images/bocongthuong.webp',
  '/svgs/app_store.svg',
  '/svgs/ch_play.svg'
]

export const BLOGS = [
  {
    title: 'pages.home.blog_section.blogs.0.title',
    des: 'pages.home.blog_section.blogs.0.description',
    img: '/images/blog_1.webp'
  },
  {
    title: 'pages.home.blog_section.blogs.1.title',
    des: 'pages.home.blog_section.blogs.1.description',
    img: '/images/blog_2.webp'
  },
  {
    title: 'pages.home.blog_section.blogs.2.title',
    des: 'pages.home.blog_section.blogs.2.description',
    img: '/images/blog_3.webp'
  }
]

export const BANNERS = [
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F7e9e0dac-8ec7-46b7-bdfb-5ed346e94c3d-care247_nhaaoan_thuaaac_taaoai_nhaa_4_web_chi_tiet_1540x340px_copy.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F5c04f295-fbc8-40c3-9419-d0ba161df7fc-chaam_saac_saaa(c)c_khaaae_4.0_banner_fb_1180x310_2_copy.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F342af2da-3285-4da2-9305-0da8454031ed-desk.jpg&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F5ddb363f-8886-4b33-bde9-f57bec34a86b-care247-tro-ly-ca-nhan-ho-tro-nguoi-dan-di-kham.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F45560a3a-943c-4566-afba-cbfc25d133d2-maaoaau_1.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F5c1cd33f-3934-44e1-91b1-59a36945fe2b-banner_home_desktop_-_1180x310.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F2ef4ca2e-7283-457f-a9c1-e7d9a08d94db-giai-phap-quan-ly-phong-mach.png&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F7a3e3e55-cadf-4210-9e64-f56ee30c7e57-banner-homepage-dat-kham-co-so-y-ye-tren-medpro.jpg&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2F4edacddd-7280-41e0-b6c9-3eb7d438c107-banner_cashback_1180x310_desktop.jpg&w=1200&q=100',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn.medpro.vn%2Fprod-partner%2Fda64c9ee-fdd6-4a13-bc52-fe74255fc079-promote-vaccine-d.jpg&w=1200&q=100'
]
export const STATISTIC_INFO = [
  {
    id: 1,
    title: 'pages.home.statistic_section.items.0',
    icon: examinationEars,
    number: '2.2M+'
  },
  {
    id: 2,
    title: 'pages.home.statistic_section.items.1',
    icon: hospital,
    number: '40+'
  },
  {
    id: 3,
    title: 'pages.home.statistic_section.items.2',
    icon: clinic,
    number: '50+'
  },
  {
    id: 4,
    title: 'pages.home.statistic_section.items.3',
    icon: doctor,
    number: '1000+'
  },
  {
    id: 5,
    title: 'pages.home.statistic_section.items.4',
    icon: location,
    number: '138K+'
  },
  {
    id: 6,
    title: 'pages.home.statistic_section.items.5',
    icon: eye,
    number: '4600+'
  }
]

export const BENEFIT_DOWNLOAD_LEFT = [
  {
    image: '/svgs/icon_dang_ky.svg',
    title: 'pages.home.download_section.items.0.title',
    description: 'pages.home.download_section.items.0.description'
  },
  {
    image: '/svgs/icon_tu_van.svg',
    title: 'pages.home.download_section.items.1.title',
    description: 'pages.home.download_section.items.1.description'
  },
  {
    image: '/svgs/icon_paraclinical_results.svg',
    title: 'pages.home.download_section.items.2.title',
    description: 'pages.home.download_section.items.2.description'
  }
]
export const BENEFIT_DOWNLOAD_RIGHT = [
  {
    image: '/svgs/icon_hospital_fees.svg',
    title: 'pages.home.download_section.items.3.title',
    description: 'pages.home.download_section.items.3.description'
  },
  {
    image: '/svgs/icon_health_care.svg',
    title: 'pages.home.download_section.items.4.title',
    description: 'pages.home.download_section.items.4.description'
  },
  {
    image: '/svgs/icon_collaborative_facilities.svg',
    title: 'pages.home.download_section.items.5.title',
    description: 'pages.home.download_section.items.5.description'
  }
]

export const ABOUT_US_ITEMS = [
  {
    id: 1,
    title: 'pages.about.items.0.title',
    description: 'pages.about.items.0.description'
  },
  {
    id: 2,
    title: 'pages.about.items.1.title',
    description: 'pages.about.items.1.description'
  },
  {
    id: 3,
    title: 'pages.about.items.2.title',
    description: 'pages.about.items.2.description'
  },
  {
    id: 4,
    title: 'pages.about.items.3.title',
    description: 'pages.about.items.3.description'
  }
]

export const PROMINENT_HOSPITALS = [
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fctchhcm%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Ftrungvuong%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Ftesting-partner.s3-hcm1-r1.longvan.net%2Fdf02bed3-ee39-46d5-af2c-7d58c5ddf99b-nd1.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fdkkvangiang%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fnhidonghcm%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fleloi%2Fweb%2Flogo.png%3Ft%3DSat%2520Nov%252027%25202021%252011%3A42%3A44%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbinhthanhhcm%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Ftesting-partner.s3-hcm1-r1.longvan.net%2F0df28078-4876-4490-9aee-d9ed667cbd36-chora.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2F115%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fumc%2Fweb%2Flogo.png%3Ft%3DWed%2520Jan%252005%25202022%252010%3A31%3A47%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbvdktiengiang%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Ftvmbaclieu%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fresource-testing.medpro.com.vn%2Fstatic%2Fimages%2Fdkdongnai2%2Fweb%2Flogo.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvmathcm%2Fweb%2Flogo.png%3Ft%3D11&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fdalieuhcm%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D123&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api-testing.medpro.com.vn%2Fstatic%2Fimages%2Fbvnthcm%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3DWed%2520Apr%252027%25202022%252014%3A42%3A44%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fvanhanh%2Fweb%2Flogo.png%3Ft%3D2222222&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fhoanmytd%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D8888888&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvtwct%2Fweb%2Flogo.png%3Ft%3D22222&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F88db2c0f-c134-428e-9fb6-0cb043214cd9-logo-ps-900.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fleloi%2Fapp%2Fimage%2Flogo_circle.png%3Ft%3D1111111&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fdkanphuoc%2Fweb%2Flogo.png%3Ft%3D222222&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2Fc22cfe55-487e-446a-a585-00993303511c-logo_golden_health_1.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fbvmedicbd%2Fapp%2Fimage%2Flogo_phieu_kham.png%3Ft%3DThu%2520Dec%252022%25202022%252009%3A38%3A53%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2Fa1a543af-a13a-432f-8a17-e48f918f6abf-logo_phuioing_aoing_1.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F4b1fee11-9767-4673-a0eb-e72a3090a7cd-logo-anvien_1.png&w=96&q=75',
  'https://medpro.vn/_next/image?url=https%3A%2F%2Fprod-partner.s3-hcm-r1.longvan.net%2F783a646d-a76b-427b-9b77-e768d71ce962-logo-sbb.png&w=96&q=75'
]

export const PATIENT_FIELDS: {
  key: keyof Patient
  label: string
  icon: React.ReactNode
  format?: (value: string) => string
}[] = [
  { key: 'name', label: 'patient.name', icon: <FaUserAlt size={16} /> },
  {
    key: 'dob',
    label: 'patient.dob',
    icon: <FaBirthdayCake size={16} />,
    format: (v: string) => dayjs(v).format('DD/MM/YYYY')
  },
  { key: 'phone', label: 'patient.phone', icon: <FaPhone size={16} /> },
  { key: 'gender', label: 'patient.gender', icon: <FaVenusMars size={16} /> }
]
