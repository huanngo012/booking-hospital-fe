import { InputAdornment } from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import type { SearchInputProps } from '~/components/module'
import CustomInputField from '~/components/ui/input/CustomInputField'
import { useTypingPlaceholder } from '~/hooks/useTypingPlaceholder'
import { SEARCH_PLACEHOLDER } from '~/utils/constant'

const SearchInput = ({ value, onChange, onFocus }: SearchInputProps) => {
  const { t } = useTranslation()
  const placeholders = useMemo(() => SEARCH_PLACEHOLDER.map((key) => t(key)), [t])

  const placeholder = useTypingPlaceholder({
    words: placeholders
  })
  return (
    <CustomInputField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={onFocus}
      placeholder={placeholder}
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
  )
}

export default SearchInput
