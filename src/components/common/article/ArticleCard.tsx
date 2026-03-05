import './style.scss'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { GoDotFill } from 'react-icons/go'
import type { ArticleCardProps } from '~/components/module'

const ArticleCard = ({ article, style = '01' }: ArticleCardProps) => {
  const { title, description, url, image, blog } = article
  return (
    <Box className={`card_article card_article_${style}`}>
      <Box className='card_wrapper'>
        <Link to={url} className='card_image'>
          <Box component={'img'} alt={title} src={image} />
        </Link>
        <Box className='card_content'>
          <Stack className='card_blog' direction={'row'} alignItems={'center'} gap={'2px'}>
            <GoDotFill size={12} color='#FFB54A' />
            <Typography variant='caption1' color='#858585'>
              {blog}
            </Typography>
          </Stack>
          <Link to={url}>
            <Typography variant={style === '01' ? 'h6' : 'label3'} className='truncate_2'>
              {title}
            </Typography>
          </Link>
          <Typography className='card_description' variant={'body2'}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleCard
