import { Button, Divider, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { CommentProps } from '~/components/type'
import CommentCard from './CommentCard'
import RatingOverview from './RatingOverview'
import PopupCreateComment from './PopupCreateComment'
import { useUser } from '~/modules/auth/auth.query'
import { Link } from 'react-router-dom'
import { PATHS } from '~/utils/constant'

const Comment = ({ medicalFacility }: CommentProps) => {
  const { t } = useTranslation()

  const { data: user } = useUser()

  const { _id, slug, ratings, totalRatings } = medicalFacility

  const hasRated = ratings.some((r) => r.postedBy._id === user?._id)

  return (
    <Stack gap={3} borderRadius={4} padding={3.75} sx={{ backgroundColor: 'var(--white)' }}>
      <Typography variant='h5'>{t('review.title')}</Typography>
      <Divider />
      <RatingOverview ratings={ratings} totalRatings={totalRatings} />
      <Stack alignItems='center'>
        {!user ? (
          <Button component={Link} to={PATHS.LOGIN} variant='contained' color='primary'>
            <Typography variant='label1'>{t('review.button')}</Typography>
          </Button>
        ) : hasRated ? (
          <Typography variant='label1'>{t('review.already_rated')}</Typography>
        ) : (
          <PopupCreateComment id={_id} slug={slug} />
        )}
      </Stack>
      <Stack gap={2} width={'100%'}>
        {ratings.map((item, index) => (
          <CommentCard key={index} id={_id} slug={slug} rating={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Comment
