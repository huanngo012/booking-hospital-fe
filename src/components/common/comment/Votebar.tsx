import { Box, Stack, Typography } from '@mui/material'
import { AiFillStar } from 'react-icons/ai'

const Votebar = ({
  number,
  ratingCount,
  ratingTotal
}: {
  number: number
  ratingCount: number
  ratingTotal: number
}) => {
  const percent = Math.round((ratingCount * 100) / ratingTotal) || 0

  return (
    <Stack flexDirection='row' alignItems='center' gap='8px'>
      <Stack flexDirection='row' width='10%' alignItems='center' justifyContent='center' gap='4px'>
        <Typography variant='label2'>{number}</Typography>
        <AiFillStar size={16} color='orange' />
      </Stack>

      <Box width='90%'>
        <Box
          sx={{
            width: '100%',
            height: '6px',
            position: 'relative',
            backgroundColor: 'var(--border-color)',
            borderRadius: '99999px'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              width: `${percent}%`,
              backgroundColor: 'orange',
              borderRadius: '99999px',
              transition: 'width 0.3s ease'
            }}
          />
        </Box>
      </Box>
    </Stack>
  )
}

export default Votebar
