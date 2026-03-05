import type { QueryParams } from './common'

export interface CategoryQueryParams extends QueryParams {
  tag?: string
}

export interface Category {
  _id: number
  tag: string
}
