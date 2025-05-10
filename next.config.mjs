/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL || 'http://localhost:8080'
  }
};

export default nextConfig;
