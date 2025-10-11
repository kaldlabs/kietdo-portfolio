import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // reactCompiler: true,
  },
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/lab-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab-portfolio' : '',
  distDir: 'out',
  trailingSlash: true,
}

export default nextConfig
