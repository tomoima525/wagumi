/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};
