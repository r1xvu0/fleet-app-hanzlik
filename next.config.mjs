/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL || 'http://localhost:8080'
  },
  // output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
