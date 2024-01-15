/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // TODO: comment this for production mode
    images: {
      unoptimized: true,
    },
  }
   
  module.exports = nextConfig