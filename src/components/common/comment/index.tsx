import { Divider, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

import type { CommentProps } from '~/components/type'
import { renderStartFromNumber } from '~/utils/helper'
import { theme } from '~/themes'
import Votebar from './Votebar'

const Comment = ({ ratings, totalRatings }: CommentProps) => {
  const { t } = useTranslation()

  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  return (
    <Stack gap={3} borderRadius={4} padding={3.75} sx={{ backgroundColor: 'var(--white)' }}>
      <Typography variant='h5'>{t('review.title')}</Typography>
      <Divider />
      <Stack
        flexDirection={{
          tablet: 'row'
        }}
        alignItems={'center'}
        gap={2}
        width={'100%'}
      >
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          width={{
            tablet: '40%'
          }}
        >
          <Typography variant='label2'>{totalRatings}/5</Typography>
          <Typography>
            {renderStartFromNumber(totalRatings, 24)?.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </Typography>

          <Typography variant='label2'>{t('review.rating_and_comment')}</Typography>
        </Stack>
        <Divider
          orientation={isTablet ? 'vertical' : 'horizontal'}
          flexItem
          sx={{
            backgroundColor: 'var(--divider-color)'
          }}
        />
        <Stack width={{ tablet: '60%' }}>
          {[5, 4, 3, 2, 1].map((star) => (
            <Votebar
              key={star}
              number={star}
              ratingTotal={ratings?.length || 0}
              ratingCount={ratings?.filter((r) => r.star === star).length ?? 0}
            />
          ))}
        </Stack>
      </Stack>
      <Stack alignItems='center'>
        <Typography variant='label1'>{t('review.button')}</Typography>
        {/* <PopupCreateComment /> */}
      </Stack>
    </Stack>
  )
}

export default Comment
