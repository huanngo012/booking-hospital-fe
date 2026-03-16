import type { QueryParams } from './common'

export interface Specialty {
  _id: string
  name: string
  slug: string
  description?: string
  images?: string
}

export interface SpecialtyQueryParams extends QueryParams {
  name?: string
}
