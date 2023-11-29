/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: '/src/lib/utils/loader.ts'
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'd1ubwt7z1ubyyw.cloudfront.net'
    //   }
    // ]
  }
}

module.exports = nextConfig
