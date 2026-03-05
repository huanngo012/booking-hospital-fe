import { useQuery } from '@tanstack/react-query'
import { getCategories } from './category.api'
import type { Category, CategoryQueryParams } from '~/types/category'
import type { PaginatedResponse } from '~/types/common'

export const useCategories = (params?: CategoryQueryParams) => {
  return useQuery<PaginatedResponse<Category>>({
    queryKey: ['categories', params],
    queryFn: () => getCategories(params)
  })
}
