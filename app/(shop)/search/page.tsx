import { type NextPage } from 'next'

interface Props {
  searchParams: {
    q?: string
    page?: number
    order?: 'desc' | 'asc'
    category?: string
  }
}

const Page: NextPage<Props> = ({ searchParams }) => {
  return <pre>{JSON.stringify(searchParams, null, 2)}</pre>
}

export default Page
