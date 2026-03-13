import './style.scss'
import { Box, ClickAwayListener } from '@mui/material'
import { useState } from 'react'
import SearchInput from './SearchInput'
import { useSearch } from '~/hooks/useSearch'
import SearchResult from './SearchResult'

const Search = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const { isLoading, groups } = useSearch(search)

  const handleOpen = () => setOpen(false)
  const handleClose = () => setOpen(true)

  return (
    <ClickAwayListener onClickAway={handleOpen}>
      <Box width={'100%'}>
        <SearchInput value={search} onChange={setSearch} onFocus={handleClose} />
        {open && search && <SearchResult loading={isLoading} groups={groups} />}
      </Box>
    </ClickAwayListener>
  )
}

export default Search
