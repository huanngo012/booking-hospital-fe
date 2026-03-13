import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import type { SearchCardProps } from '~/components/type'

const SearchCard = ({ item }: SearchCardProps) => {
  return (
    <Link to={item.url} className='card_search'>
      <Box component='img' className='card_image' src={item.image} alt={item.title} />
      <Stack gap={0.5}>
        <Typography variant='label2' color='var(--secondary)'>
          {item.title}
        </Typography>
        <Typography variant='body3' color='var(--text-tertiary)'>
          {item.meta}
        </Typography>
      </Stack>
    </Link>
  )
}

export default SearchCard
