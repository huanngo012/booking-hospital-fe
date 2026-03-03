import './style.scss'
import { Link } from 'react-router-dom'
import type { ArticleCardProps } from '../module'
import { Box, Stack, Typography } from '@mui/material'
import { GoDotFill } from 'react-icons/go'

const ArticleCard = ({ article, style = '01' }: ArticleCardProps) => {
  return (
    <Box className={`card_article card_article_${style}`}>
      <Box className='card_wrapper'>
        <Link to={article.url} className='card_image'>
          <Box component={'img'} alt={article.title} src={article.image} decoding='async' data-nimg='fill' />
        </Link>
        <Box className='card_content'>
          <Stack className='card_blog' direction={'row'} alignItems={'center'} gap={'2px'}>
            <GoDotFill size={12} color='#FFB54A' />
            <Typography variant='caption1' color='#858585'>
              {article.blog}
            </Typography>
          </Stack>
          <Link to={article.url}>
            <Typography variant={style === '01' ? 'h6' : 'label3'} className='truncate_2'>
              {article.title}
            </Typography>
          </Link>
          <Typography className='card_description' variant={'body2'}>
            {article.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleCard
