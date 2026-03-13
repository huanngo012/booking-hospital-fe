import { Box, ClickAwayListener, InputAdornment, MenuItem, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import { useMemo, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'
import { CustomInputField } from '~/components'
import { ADDRESS } from '~/utils/constant'

interface MedicalFacilityLocationFilterProps {
  value: string
  onClick: (value: string) => void
}

const MedicalFacilityLocationFilter = ({ value, onClick }: MedicalFacilityLocationFilterProps) => {
  const [search, setSearch] = useState(value)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const searchedResultList = useMemo(() => {
    if (!search) return ADDRESS

    return ADDRESS.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <Box className='medical_facilities_location_filter'>
      <ClickAwayListener onClickAway={handleClose}>
        <Box>
          <CustomInputField
            value={search}
            onFocus={handleOpen}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('pages.medical_facilities.search_placeholder_address')}
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

export default MedicalFacilityLocationFilter
