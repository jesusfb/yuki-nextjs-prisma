import { seo } from '@/lib/seo'
import { getBaseUrl } from '@/lib/utils'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

interface Props {
  params: {
    title?: string
    desc?: string
    image?: string
  }
}

export const runtime = 'edge'

export const GET = async (_: NextRequest, { params }: Props): Promise<ImageResponse> => {
  const title = params.title ?? String(seo({}).title)
  const description = params.desc ?? seo({}).description

  const style =
    !params.image || params.image === '/logo.svg'
      ? {
          width: '33.333%',
          marginRight: '2rem',
          filter: 'invert(1)',
          WebkitFilter: 'invert(1)',
        }
      : {
          width: '33.333%',
          marginRight: '2rem',
          borderRadius: '0.5rem',
        }

  const src =
    !params.image || params.image === '/logo.svg' ? `${getBaseUrl()}/logo.svg` : params.image

  return new ImageResponse(
    (
      <div tw="relative w-full h-full px-28 flex items-center justify-center bg-black text-white">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Tiesen" src={src} style={style} />

        <div tw="w-2/3 flex flex-col">
          <h2 tw="text-6xl capitalize">{title}</h2>
          <p tw="text-2xl">{description}</p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
