import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const getBase64 = (file: File) => {
  if (!file) return ''
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

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
