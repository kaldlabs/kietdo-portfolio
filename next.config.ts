/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bật chế độ xuất tĩnh (static export)
  output: 'export',

  // Tên repository của bạn
  basePath: '/lab-portfolio',
  assetPrefix: '/lab-portfolio/',

  // Tắt tối ưu hóa hình ảnh vì GitHub Pages không hỗ trợ
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;