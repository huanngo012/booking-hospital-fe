import { Button, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { theme } from '~/themes'
import PopupDelete from '../popup/PopupDelete'
import { useDeleteRatingMedicalFacility } from '~/modules/medical-facility/medical-facility.mutation'

const PopupDeleteComment = ({ id, slug }: { id: string; slug: string }) => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'))

  const [openPopUp, setOpenPopUp] = useState(false)

  const { mutate } = useDeleteRatingMedicalFacility(slug)

  const handleOpenConfirmPopup = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setOpenPopUp(true)
  }
  const handleCloseConfirmPopUp = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenPopUp(false)
  }
  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        setOpenPopUp(false)
      }
    })
  }

  return (
    <>
      <Button variant='outlined' color='tertiary' onClick={handleOpenConfirmPopup}>
        <Typography variant='body3'>{t('common.delete')}</Typography>
      </Button>

      <PopupDelete
        open={openPopUp}
        handleClose={handleCloseConfirmPopUp}
        title={t('popup.delete-title')}
        message={t('popup.delete-confirm')}
        enableCancelButton
        onClick={handleDelete}
      />
    </>
  )
}

export default PopupDeleteComment
