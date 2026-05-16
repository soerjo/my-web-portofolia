/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.soerjoprod.fun',
        port: '',
        pathname: '/test/**',
      },
    ],
  },
}

module.exports = nextConfig