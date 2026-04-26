const isProd = process.env.IS_GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/lab-portfolio' : '',
  assetPrefix: isProd ? '/lab-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig