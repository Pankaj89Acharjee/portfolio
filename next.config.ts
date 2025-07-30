/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  eslint: {
    // ✅ Allows builds to succeed even if there are ESLint errors or warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;