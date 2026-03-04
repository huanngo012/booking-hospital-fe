import axios from '~/axios'
import type { CategoryQueryParams, CategoryResponse } from '~/types/category'

export const getCategories = (params?: CategoryQueryParams): Promise<CategoryResponse> =>
  axios({
    url: '/category',
    method: 'get',
    params
  })
