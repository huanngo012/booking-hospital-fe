import { Helmet } from 'react-helmet-async'
import type { SEOProps } from '~/components/type'

export default function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}
