import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { images } from '~/assets'
import type { CommentCardProps } from '~/components/type'
import { renderStartFromNumber } from '~/utils/helper'
import { useUser } from '~/modules/auth/auth.query'
import ActionMenu from '../action-menu'
import PopupDeleteComment from './PopupDeleteComment'
import PopupEditComment from './PopupEditComment'

const { defaultAvt } = images

const CommentCard = ({ id, slug, rating }: CommentCardProps) => {
  const { t } = useTranslation()

  const { data: user } = useUser()

  const { star, postedBy, comment, updatedAt } = rating
  const { name, avatar } = postedBy

  return (
    <Stack direction={'row'} gap={2}>
      <Box
        component={'img'}
        src={avatar ? avatar : defaultAvt}
        alt='avatar'
        width={35}
        height={35}
        borderRadius={'50%'}
      />
      <Stack flex='1'>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant='label1'>{name}</Typography>
          <Typography variant='body3'>
            <Box component={'i'}>{dayjs(updatedAt).fromNow()}</Box>
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={1}
          paddingBlock={1}
          paddingInline={2}
          marginTop={1}
          borderRadius={2}
          bgcolor={'var(--divider-color)'}
        >
          <Stack gap={1}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
              <Typography variant='label2'>{t('review.rating')}:</Typography>
              <Stack direction={'row'}>
                {renderStartFromNumber(star, 16)?.map((item, index) => (
                  <Box key={index} lineHeight={0}>
                    {item}
                  </Box>
                ))}
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} gap={0.5}>
              <Typography variant='label2'>{t('review.comment')}:</Typography>
              <Typography variant='body2' sx={{ wordBreak: 'break-all' }}>
                {comment}
              </Typography>
            </Stack>
          </Stack>
          {user && rating.postedBy._id === user._id && (
            <Box minWidth='30px'>
              <ActionMenu
                actionList={
                  <>
                    <PopupEditComment id={id} slug={slug} rating={rating} />
                    <PopupDeleteComment id={id} slug={slug} />
                  </>
                }
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CommentCard
