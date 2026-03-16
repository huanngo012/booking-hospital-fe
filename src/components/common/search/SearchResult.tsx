import { Box } from '@mui/material'
import type { SearchResultProps } from '~/components/type'
import SearchGroup from './SearchGroup'
import CustomSkeleton from '../skeleton/CustomSkeleton'
import EmptyState from '../empty-state'
import { useTranslation } from 'react-i18next'

const SearchResult = ({ loading, groups }: SearchResultProps) => {
  const { t } = useTranslation()
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
      {groups.length > 0 ? (
        groups.map(
          (group) =>
            group.items.length > 0 && (
              <SearchGroup key={group.title} title={group.title} items={group.items} viewAllUrl={group.viewAllUrl} />
            )
        )
      ) : (
        <Box paddingBlock={2}>
          <EmptyState title={t('pages.home.intro_section.not_found')} />
        </Box>
      )}
    </Box>
  )
}

export default SearchResult
