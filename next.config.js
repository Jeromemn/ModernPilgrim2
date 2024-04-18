/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'modern-pilgrim-images.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};
