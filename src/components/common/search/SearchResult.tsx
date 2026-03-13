import { Box } from '@mui/material'
import type { SearchResultProps } from '~/components/type'
import SearchGroup from './SearchGroup'
import CustomSkeleton from '../skeleton/CustomSkeleton'

const SearchResult = ({ loading, groups }: SearchResultProps) => {
  if (loading) {
    return (
      <Box className='search-recommend-result'>
        {Array.from({ length: 8 }).map((_, index: number) => (
          <CustomSkeleton key={index} variant='card-search' />
        ))}
      </Box>
    )
  }
  return (
    <Box className='search-recommend-result'>
      {groups.map((group) => (
        <SearchGroup key={group.title} title={group.title} items={group.items} viewAllUrl={group.viewAllUrl} />
      ))}
    </Box>
  )
}

export default SearchResult
