import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  styled,
  TextareaAutosize,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { useEditRatingMedicalFacility } from '~/modules/medical-facility/medical-facility.mutation'
import type { Rating } from '~/types/common'
import { IoMdClose } from 'react-icons/io'

interface PopupEditCommentProps {
  id: string
  slug: string
  rating: Rating
}

const PopupEditComment = ({ id, slug, rating }: PopupEditCommentProps) => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const [hoverStar, setHoverStar] = useState(0)

  const [payload, setPayload] = useState({
    star: rating.star,
    comment: rating.comment
  })

  const { mutate } = useEditRatingMedicalFacility(slug)

  const handleSubmit = () => {
    mutate(
      {
        id,
        data: payload
      },
      {
        onSuccess: () => {
          setOpen(false)
        }
      }
    )
  }

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' color='tertiary' onClick={() => setOpen(true)}>
        <Typography variant='body3'>{t('common.edit')}</Typography>
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth='tablet' fullWidth>
        <DialogContent sx={{ padding: '0', height: '70vh' }}>
          <Box className='popup__content'>
            <Box className='popup__header'>
              <Typography variant='h5'>{t('review.title')}</Typography>
              <IconButton aria-label='close' onClick={handleClose}>
                <IoMdClose size={24} />
              </IconButton>
            </Box>
            <Divider
              sx={{
                borderBottom: '1px solid var(--border-color)',
                width: '100%'
              }}
            />
            <Box className='popup__body'>
              <Stack gap={4} width='100%'>
                <StyledTextarea
                  minRows={6}
                  placeholder='Bình luận'
                  value={payload.comment}
                  onChange={(e) =>
                    setPayload((prev) => ({
                      ...prev,
                      comment: e.target.value
                    }))
                  }
                />
                <Stack direction='row' justifyContent={'center'} alignItems={'center'} gap={2}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box
                      key={item}
                      onMouseEnter={() => setHoverStar(item)}
                      onMouseLeave={() => setHoverStar(0)}
                      onClick={() =>
                        setPayload((prev) => ({
                          ...prev,
                          star: item
                        }))
                      }
                      sx={{
                        cursor: 'pointer',
                        transition: 'transform .2s',
                        '&:hover': {
                          transform: 'scale(1.15)'
                        }
                      }}
                    >
                      {(hoverStar || payload.star) >= item ? (
                        <AiFillStar size={32} color='orange' />
                      ) : (
                        <AiOutlineStar size={32} color='var(--grey-400)' />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>
            <Divider
              sx={{
                borderBottom: '1px solid var(--border-color)',
                width: '100%'
              }}
            />
            <Box className='popup__footer'>
              <Button variant='contained' color='tertiary' onClick={handleClose} fullWidth>
                <Typography variant='button2'>{t('common.cancel')}</Typography>
              </Button>
              <Button variant='contained' color='primary' onClick={handleSubmit} fullWidth>
                <Typography variant='button2'>{t('common.comment')}</Typography>
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PopupEditComment

const StyledTextarea = styled(TextareaAutosize)({
  fontFamily: 'inherit',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  fontSize: '16px',
  resize: 'vertical',
  outline: 'none',
  '&:hover': {
    borderColor: 'var(--primary)'
  },
  '&:focus': {
    borderColor: 'var(--primary)'
  }
})
