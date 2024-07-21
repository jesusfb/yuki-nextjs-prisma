import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

import { siteConfig } from '@/lib/site'

interface Props {
  params: {
    title?: string
    desc?: string
    image?: string
  }
}

export const runtime = 'edge'

export const GET = async (_: NextRequest, { params }: Props): Promise<ImageResponse> => {
  const title = params.title ?? siteConfig.meta.applicationName
  const description = params.desc ?? siteConfig.meta.description
  const image =
    params.image ?? 'https://raw.githubusercontent.com/tiesen243/yuki/main/public/logo.svg'

  return new ImageResponse(
    (
      <div tw="relative w-full h-full px-20 py-28 flex items-center justify-center bg-white text-black">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="logo" tw="w-80 h-80 rounded-xl" />

        <div tw="ml-12 flex flex-col justify-start">
          <h2 tw="text-6xl text-center capitalize">{title}</h2>
          <p tw="text-2xl text-center">{description}</p>
        </div>

        <div tw="absolute flex bottom-4 right-8 text-gray-400">Created by Tiesen</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
