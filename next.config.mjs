/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable React StrictMode for better development practices
  reactStrictMode: true,
};

export default nextConfig; 