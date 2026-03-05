import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { BreadcrumbCustomProps, BreadcrumbItem } from '~/components/module'

const BreadscrumbCustom = ({ data }: BreadcrumbCustomProps) => {
  const { t } = useTranslation()

  const breadcrumbs = [{ title: 'pages.home.title', link: '/' }, ...data]
  return (
    <Box role='presentation' paddingBlock='20px'>
      <Breadcrumbs aria-label='breadcrumb'>
        {breadcrumbs.map((item: BreadcrumbItem, index: number) =>
          item.link ? (
            <Link key={index} to={item.link}>
              <Typography variant='label2'>{t(item.title)}</Typography>
            </Link>
          ) : (
            <Typography variant='label2' color='var(--primary)'>
              {t(item.title)}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadscrumbCustom
