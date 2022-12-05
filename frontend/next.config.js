/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_API_KEY: process.env.HOST_API_KEY
  }
}


module.exports = nextConfig
