import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaRegEdit } from 'react-icons/fa'
import { LuTrash } from 'react-icons/lu'
import type { Patient } from '~/types/patient '
import { PATIENT_FIELDS } from '~/utils/constant'

const TabRecords = () => {
  const { t } = useTranslation()

  const data: Patient[] = [
    {
      name: 'HUAN NGO',
      dob: '03/04/2024',
      phone: '090****161',
      gender: 'Nam'
    },
    {
      name: 'HUAN NGO',
      dob: '03/04/2024',
      phone: '090****161',
      gender: 'Nam'
    }
  ]

  return (
    <Box className='records-tab'>
      <Box className='records-tab_header'>
        <Typography variant='h6'>{t('pages.user.records.title')}</Typography>
      </Box>
      <Box className='records-tab_body'>
        {data.map((patient, index) => (
          <Box key={index} className='records-tab_item'>
            <List className='records-tab_item-list'>
              {PATIENT_FIELDS.map((item, index) => (
                <ListItem key={item.key} disablePadding className='mobile-menu_item'>
                  <ListItemText
                    primary={
                      <Stack direction={'row'} gap={1}>
                        <Stack direction={'row'} gap={1.25}>
                          <Box color='var(--text-secondary)'>{item.icon}</Box>
                          <Typography variant='body2' color='var(--secondary)'>
                            {t(item.label)}:
                          </Typography>
                        </Stack>
                        <Typography variant='label2' color={index === 0 ? 'var(--primary)' : 'var(--secondary)'}>
                          {patient[item.key]}
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Stack
              direction={'row'}
              justifyContent={'flex-end'}
              gap={2.5}
              padding={'12px 20px'}
              sx={{ background: 'var(--grey-100)' }}
            >
              <Stack direction={'row'} alignItems={'center'} gap={0.5} color={'var(--red-500)'}>
                <Box>
                  <LuTrash size={16} />
                </Box>
                <Typography variant='label2'>{t('patient.delete')}</Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} gap={0.5} color={'var(--primary)'}>
                <Box>
                  <FaRegEdit size={16} />
                </Box>
                <Typography variant='label2'>{t('patient.update')}</Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TabRecords
