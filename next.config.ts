import { paraglideWebpackPlugin } from '@inlang/paraglide-js'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        outdir: './src/paraglide',
        project: './project.inlang',
      })
    )

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
      }
    }

    return config
  },
}

export default nextConfig
