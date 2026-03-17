import { Box, Grid, Typography } from '@mui/material'
import { AiFillStar } from 'react-icons/ai'
import type { RatingBarProps } from '~/components/type'

const RatingBar = ({ number, ratingCount, ratingTotal }: RatingBarProps) => {
  const percent = ratingTotal ? Math.round((ratingCount * 100) / ratingTotal) : 0

  return (
    <Grid container spacing={1}>
      <Grid size={1} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={0.5}>
        <Typography variant='body2'>{number}</Typography>
        <AiFillStar size={16} color='orange' />
      </Grid>
      <Grid size={11} display={'flex'} alignItems={'center'} gap={1}>
        <Box
          width={'100%'}
          height={6}
          position={'relative'}
          borderRadius={999}
          sx={{
            backgroundColor: 'var(--border-color)'
          }}
        >
          <Box
            position={'absolute'}
            top={0}
            left={0}
            width={`${percent}%`}
            height={'100%'}
            borderRadius={999}
            sx={{
              backgroundColor: 'orange',
              transition: 'width 0.3s ease'
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default RatingBar
