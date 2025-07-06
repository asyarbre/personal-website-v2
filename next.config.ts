import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
