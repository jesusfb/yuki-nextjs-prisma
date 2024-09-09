import { type NextPage } from 'next'

import { CardTitle } from '@/components/ui/card'

const Page: NextPage<Props> = ({ params }) => {
  return (
    <>
      <CardTitle className="capitalize">{params.slug.map((slug) => slug).join(' / ')}</CardTitle>
    </>
  )
}

export default Page

interface Props {
  params: { slug: string[] }
}
