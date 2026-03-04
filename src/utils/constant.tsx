import { FaUserCircle } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import { RiLockPasswordLine } from 'react-icons/ri'
import { SiFacebook, SiTiktok, SiYoutube } from 'react-icons/si'
import { images } from '~/assets'

const { examinationEars, hospital, clinic, doctor, location, eye } = images

export const paths = {
  HOME: '/',
  LOGIN: '/login',
  USER: '/user',
  MEDICALFACILITIES: '/medical-facilities',
  HOSPITAL_DETAIL: '/hospitals/:id',
  SPECIALTIES: '/specialties',
  DOCTORS: '/doctors',
  NEWS: '/news',
  ABOUT: '/about',
  NOT_FOUND: '*'
}

export const paddingScreen = {
  padding: {
    oversize: '0 160px',
    desktop: '0 64px',
    mobile: '10px 32px'
  }
}

export const tabsUser = [
  {
    icon: <FaUserCircle size={24} />,
    text: 'Thông tin cá nhân',
    // component: <TabProfile />,
    path: `profile`
  },
  {
    icon: <RiLockPasswordLine size={24} />,
    text: 'Đổi mật khẩu',
    // component: <TabPassword />,
    path: `password`
  },
  // {
  //   icon: <UserRecord width='24px' height='24px' />,
  //   text: 'Hồ sơ bệnh nhân',
  //   // component: <TabRecord />,
  //   path: `record`
  // },
  {
    icon: <IoMdCalendar size={24} />,
    text: 'Lịch khám',
    // component: <TabBooking />,
    path: `booking`
  }
]

export const MENUS = [
  {
    id: 1,
    title: 'home.home',
    path: paths.HOME
  },
  {
    id: 2,
    title: 'healthcare_facilities.healthcare_facilities',
    path: paths.MEDICALFACILITIES
  },
  {
    id: 4,
    title: 'doctor.doctor',
    path: paths.DOCTORS
  },
  {
    id: 5,
    title: 'news_page.breadcrumb',
    path: paths.NEWS
  },
  {
    id: 6,
    title: 'about_page.breadcrumb',
    path: paths.ABOUT
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
    name: 'home.intro_section.services.0',
    icon: images.booking
  },
  {
    id: 2,
    name: 'home.intro_section.services.1',
    icon: images.examinationEars1
  },
  {
    id: 3,
    name: 'home.intro_section.services.2',
    icon: images.consult
  },
  {
    id: 4,
    name: 'home.intro_section.services.3',
    icon: images.schedule
  },
  {
    id: 5,
    name: 'home.intro_section.services.4',
    icon: images.business_examination
  },
  {
    id: 6,
    name: 'home.intro_section.services.5',
    icon: images.insurance
  },
  {
    id: 7,
    name: 'home.intro_section.services.6',
    icon: images.injection
  },
  {
    id: 8,
    name: 'home.intro_section.services.7',
    icon: images.pay
  }
]

export const INFO_FOOTER = [
  {
    title: 'user.address',
    description: 'menu_footer.address'
  },
  {
    title: 'website',
    description: 'menu_footer.link_web'
  },
  {
    title: 'user.email',
    description: 'menu_footer.email'
  },
  {
    title: 'user.phone',
    description: 'menu_footer.phone'
  }
]
export const MENU_FOOTER = [
  {
    title: 'menu_footer.menu_1.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'menu_footer.menu_1.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_1.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_1.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_1.sub_menu.3',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_1.sub_menu.4',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_1.sub_menu.5',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'menu_footer.menu_2.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'menu_footer.menu_2.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_2.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_2.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_2.sub_menu.3',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_2.sub_menu.4',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'menu_footer.menu_3.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'menu_footer.menu_3.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_3.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_3.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_3.sub_menu.3',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'menu_footer.menu_4.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'menu_footer.menu_4.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_4.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_4.sub_menu.2',
        sub_link: '/'
      }
    ]
  },
  {
    title: 'menu_footer.menu_5.title',
    link: '/',
    sub_menu: [
      {
        sub_title: 'menu_footer.menu_5.sub_menu.0',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_5.sub_menu.1',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_5.sub_menu.2',
        sub_link: '/'
      },
      {
        sub_title: 'menu_footer.menu_5.sub_menu.3',
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
    title: 'blogs.blog_1.title',
    des: 'blogs.blog_1.description',
    img: '/images/blog_1.webp'
  },
  {
    title: 'blogs.blog_2.title',
    des: 'blogs.blog_2.description',
    img: '/images/blog_2.webp'
  },
  {
    title: 'blogs.blog_3.title',
    des: 'blogs.blog_3.description',
    img: '/images/blog_3.webp'
  }
]
export const STATISTIC_INFO = [
  {
    id: 1,
    title: 'home.statistic_section.items.0',
    icon: examinationEars,
    number: '2.2M+'
  },
  {
    id: 2,
    title: 'home.statistic_section.items.1',
    icon: hospital,
    number: '40+'
  },
  {
    id: 3,
    title: 'home.statistic_section.items.2',
    icon: clinic,
    number: '50+'
  },
  {
    id: 4,
    title: 'home.statistic_section.items.3',
    icon: doctor,
    number: '1000+'
  },
  {
    id: 5,
    title: 'home.statistic_section.items.4',
    icon: location,
    number: '138K+'
  },
  {
    id: 6,
    title: 'home.statistic_section.items.5',
    icon: eye,
    number: '4600+'
  }
]

export const BENEFIT_DOWNLOAD_LEFT = [
  {
    image: '/svgs/icon_dang_ky.svg',
    title: 'home.download_section.items.0.title',
    description: 'home.download_section.items.0.description'
  },
  {
    image: '/svgs/icon_tu_van.svg',
    title: 'home.download_section.items.1.title',
    description: 'home.download_section.items.1.description'
  },
  {
    image: '/svgs/icon_paraclinical_results.svg',
    title: 'home.download_section.items.2.title',
    description: 'home.download_section.items.2.description'
  }
]
export const BENEFIT_DOWNLOAD_RIGHT = [
  {
    image: '/svgs/icon_hospital_fees.svg',
    title: 'home.download_section.items.3.title',
    description: 'home.download_section.items.3.description'
  },
  {
    image: '/svgs/icon_health_care.svg',
    title: 'home.download_section.items.4.title',
    description: 'home.download_section.items.4.description'
  },
  {
    image: '/svgs/icon_collaborative_facilities.svg',
    title: 'home.download_section.items.5.title',
    description: 'home.download_section.items.5.description'
  }
]

export const ABOUT_US_ITEMS = [
  {
    id: 1,
    title: 'about_page.items.0.title',
    description: 'about_page.items.0.description'
  },
  {
    id: 2,
    title: 'about_page.items.1.title',
    description: 'about_page.items.1.description'
  },
  {
    id: 3,
    title: 'about_page.items.2.title',
    description: 'about_page.items.2.description'
  },
  {
    id: 4,
    title: 'about_page.items.3.title',
    description: 'about_page.items.3.description'
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
