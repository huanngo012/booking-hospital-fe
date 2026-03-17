import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { renderStartFromNumber } from '~/utils/helper'
import RatingBar from './RatingBar'
import type { RatingOverviewProps } from '~/components/type'

const RatingOverview = ({ ratings, totalRatings }: RatingOverviewProps) => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      <Grid
        size={{
          mobile: 12,
          tablet: 4
        }}
      >
        <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
          <Typography variant='body2'>{totalRatings}/5</Typography>
          <Typography>
            {renderStartFromNumber(totalRatings, 24)?.map((item, index) => (
              <Box component={'span'} key={index}>
                {item}
              </Box>
            ))}
          </Typography>
          <Typography variant='body2'>{t('review.rating_and_comment')}</Typography>
        </Stack>
      </Grid>
      <Grid
        size={{
          mobile: 12,
          tablet: 1
        }}
        display={'flex'}
        justifyContent={'center'}
      >
        <Divider
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            width: {
              mobile: '100%',
              tablet: '1px'
            }
          }}
        />
      </Grid>
      <Grid
        size={{
          mobile: 12,
          tablet: 7
        }}
      >
        {[5, 4, 3, 2, 1].map((star) => (
          <RatingBar
            key={star}
            number={star}
            ratingTotal={ratings.length}
            ratingCount={ratings.filter((r) => r.star === star).length}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default RatingOverview
