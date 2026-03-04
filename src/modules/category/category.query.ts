import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getCategories } from './category.api'
import type { CategoryQueryParams, CategoryResponse } from '~/types/category'

export const useCategories = (params?: CategoryQueryParams, options?: UseQueryOptions<CategoryResponse>) => {
  return useQuery<CategoryResponse>({
    queryKey: ['categories', params],
    queryFn: () => getCategories(params),
    staleTime: 5 * 60 * 1000,
    ...options
  })
}
