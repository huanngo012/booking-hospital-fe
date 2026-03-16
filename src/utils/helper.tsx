import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { DAYS } from './constant'
import type { MedicalFacility } from '~/types/medical-facility'
import type { FacilityWorkingTime } from '~/types/common'

export const getBase64 = (file: File) => {
  if (!file) return ''
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const removeVietnameseTones = (text: string = '') =>
  text
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()

export const formatMoney = (number: number) => Number(Number(number)?.toFixed(1)).toLocaleString()

export const renderStartFromNumber = (number: number, size: number) => {
  const stars = []
  for (let i = 0; i < +number; i++) {
    stars.push(<AiFillStar color='orange' size={size} />)
  }
  for (let i = 5; i > +number; i--) {
    stars.push(<AiOutlineStar color='orange' size={size} />)
  }
  return stars
}

export const readFileData = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      resolve(e.target?.result)
    }
    reader.onerror = (err) => {
      reject(err)
    }
    reader.readAsDataURL(file)
  })
}

export const formatAddress = (address?: { detail?: string; ward?: string; district?: string; province?: string }) => {
  if (!address) return ''

  return [address.detail, address.ward, address.district, address.province].filter(Boolean).join(', ')
}

export const getGoogleMapEmbedUrl = (address?: {
  detail?: string
  ward?: string
  district?: string
  province?: string
}) => {
  const fullAddress = formatAddress(address)
  return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`
}

export const formatWorkingTimes = (workingTimes: MedicalFacility['workingTimes']) => {
  if (!workingTimes?.length) return ''

  const normalizeDay = (day: number) => (day === 0 ? 7 : day)

  const sorted = [...workingTimes].sort((a, b) => normalizeDay(a.dayOfWeek) - normalizeDay(b.dayOfWeek))

  const groups: string[] = []
  let start = sorted[0]
  let prev = sorted[0]

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i]

    const sameTime = current.startTime === prev.startTime && current.endTime === prev.endTime

    const consecutiveDay = normalizeDay(current.dayOfWeek) === normalizeDay(prev.dayOfWeek) + 1

    if (sameTime && consecutiveDay) {
      prev = current
    } else {
      groups.push(buildLabel(start, prev))
      start = current
      prev = current
    }
  }

  groups.push(buildLabel(start, prev))

  return groups.join('; ')
}

export const buildLabel = (start: FacilityWorkingTime, end: FacilityWorkingTime) => {
  const timeLabel = `(${start.startTime} - ${start.endTime})`

  if (start.dayOfWeek === end.dayOfWeek) {
    return `${DAYS[start.dayOfWeek]} ${timeLabel}`
  }

  return `${DAYS[start.dayOfWeek]} - ${DAYS[end.dayOfWeek]} ${timeLabel}`
}

export const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken')
}
