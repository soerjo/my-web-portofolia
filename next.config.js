/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.soerjoprod.fun',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig