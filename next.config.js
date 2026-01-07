/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only export statically for production builds, not dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  basePath: process.env.NODE_ENV === 'production' ? '/internet-nostalgia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/internet-nostalgia' : '',
  images: {
    unoptimized: true,
    domains: ['img.youtube.com', 'media.giphy.com', 'i.imgur.com'],
  },
}

module.exports = nextConfig

