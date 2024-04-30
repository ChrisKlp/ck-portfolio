/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
