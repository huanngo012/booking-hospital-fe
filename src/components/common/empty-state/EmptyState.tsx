import { Box, Container, Stack, Typography } from '@mui/material'
import { images } from '~/assets'
import type { EmptyStateProps } from '~/components/module'

const { emptyIcon } = images

const EmptyState = ({ title, message }: EmptyStateProps) => {
  return (
    <Container>
      <Box component='img' src={emptyIcon} alt={title} maxWidth={300} marginInline={'auto'} />
      <Stack marginTop={'24px'} gap={1} textAlign={'center'}>
        {title && <Typography variant='label1'>{title}</Typography>}
        {message && <Typography variant='body2'>{message}</Typography>}
      </Stack>
    </Container>
  )
}

export default EmptyState
