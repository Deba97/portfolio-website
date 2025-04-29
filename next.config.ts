import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['nosadebaobaseki.dev'], // Add your domain here for production
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development', // Use unoptimized images in development
  },
};

export default nextConfig;
