/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio", "images.remotePatterns"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
