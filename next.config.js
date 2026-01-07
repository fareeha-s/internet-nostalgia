/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only export statically for production builds, not dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  basePath: process.env.NODE_ENV === 'production' ? '/era-lexicon' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/era-lexicon' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

