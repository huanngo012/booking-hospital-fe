import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { SearchGroupProps } from '~/components/module'
import SearchCard from './SearchCard'
import EmptyState from '../empty-state'

const SearchGroup = ({ title, items, viewAllUrl }: SearchGroupProps) => {
  const { t } = useTranslation()
  return (
    <Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='13px'
        sx={{ backgroundColor: '#e6f2ff' }}
      >
        <Typography variant='label2' color='var(--secondary)'>
          {title}
        </Typography>
        {items.length > 0 && viewAllUrl && (
          <Link to={viewAllUrl}>
            <Typography variant='label3' component='i' color='var(--primary)'>
              {t('common.view_all')}
            </Typography>
          </Link>
        )}
      </Stack>
      {items.length > 0 ? items.map((item) => <SearchCard key={item._id} item={item} />) : <EmptyState />}
    </Stack>
  )
}

export default SearchGroup
