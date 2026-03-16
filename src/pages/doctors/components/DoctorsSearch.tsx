import { InputAdornment, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { CustomInputField } from '~/components'

interface DoctorsSearchProps {
  value: string
  onChange: (value: string) => void
}

const DoctorsSearch = ({ value, onChange }: DoctorsSearchProps) => {
  const { t } = useTranslation()

  return (
    <Stack className='doctors_search'>
      <CustomInputField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('pages.doctors.search_placeholder')}
        autoComplete='off'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <HiMagnifyingGlass size={20} color='var(--text-tertiary)' />
            </InputAdornment>
          ),
          endAdornment: value && (
            <IoMdClose size={20} color='var(--text-tertiary)' cursor='pointer' onClick={() => onChange('')} />
          )
        }}
      />
    </Stack>
  )
}

export default DoctorsSearch
