import axios from '~/axios'
import type { Category, CategoryQueryParams } from '~/types/category'
import type { PaginatedResponse } from '~/types/common'

export const getCategories = (params?: CategoryQueryParams): Promise<PaginatedResponse<Category>> =>
  axios({
    url: '/category',
    method: 'get',
    params
  })
