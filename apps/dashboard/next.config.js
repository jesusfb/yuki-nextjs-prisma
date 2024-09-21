/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  transpilePackages: [
    '@yuki/ui',
    '@yuki/db',
    '@yuki/api',
    '@yuki/auth',
    '@yuki/email',
    '@yuki/uploader',
  ],
}

export default config
