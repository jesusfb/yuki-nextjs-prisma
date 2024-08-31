import { getBaseUrl } from '@/lib/utils'

const robots = () => ({
  rules: [{ userAgent: '*' }],
  sitemap: `${getBaseUrl()}/sitemap.xml`,
  host: getBaseUrl(),
})

export default robots
