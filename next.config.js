/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3002',
        ws: true,
      },
    },
  };

module.exports = nextConfig
