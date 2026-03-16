import { Box, ClickAwayListener, InputAdornment, MenuItem, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import { useEffect, useMemo, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'
import { CustomInputField } from '~/components'
import { useSpecialties } from '~/modules/specialty/specialty.query'
import type { Specialty } from '~/types/specialty'
import { removeVietnameseTones } from '~/utils/helper'

interface DoctorsSpecialtyFilterProps {
  defaultData?: Specialty[]
  value: string
  onClick: (value: string) => void
}

const DoctorsSpecialtyFilter = ({ defaultData, value, onClick }: DoctorsSpecialtyFilterProps) => {
  const [search, setSearch] = useState(value)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setSearch(value)
  }

  useEffect(() => {
    setSearch(value)
  }, [value])

  const { data } = useSpecialties(
    { limit: 100 },
    {
      enabled: !defaultData?.length
    }
  )

  const specialties = useMemo(() => {
    if (defaultData?.length) return defaultData
    return data?.items ?? []
  }, [defaultData, data])

  const searchedResultList = useMemo(() => {
    if (!search) return specialties

    const keyword = removeVietnameseTones(search.toLowerCase())

    return specialties.filter((item) => removeVietnameseTones(item.name.toLowerCase()).includes(keyword))
  }, [search, specialties])

  return (
    <Box className='doctors_specialty_filter'>
      <ClickAwayListener onClickAway={handleClose}>
        <Box>
          <CustomInputField
            value={search}
            onFocus={handleOpen}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('pages.doctors.search_placeholder_specialty')}
            autoComplete='off'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <GrLocation size={20} color='var(--text-tertiary)' />
                </InputAdornment>
              ),
              endAdornment: search && (
                <IoMdClose
                  size={20}
                  color='var(--text-tertiary)'
                  cursor='pointer'
                  onClick={() => {
                    setSearch('')
                    onClick('')
                  }}
                />
              )
            }}
          />

          {open && searchedResultList.length !== 0 && (
            <Stack className='search-recommend-result ' padding='12px' maxHeight='240px' direction='column' gap={0.5}>
              {searchedResultList.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    onClick(item.name)
                    setSearch(item.name)
                    handleClose()
                  }}
                  selected={item.name === value}
                >
                  <Typography variant='body2'>{item.name}</Typography>
                </MenuItem>
              ))}
            </Stack>
          )}
        </Box>
      </ClickAwayListener>
    </Box>
  )
}

export default DoctorsSpecialtyFilter
