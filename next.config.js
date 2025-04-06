/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  // Enable static image imports
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|webp|json)$/i,
      type: 'asset/resource'
    });
    return config;
  },
};

module.exports = nextConfig; 