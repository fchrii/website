/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Jika website akan di-deploy di subfolder (contoh: username.github.io/repo-name)
  // Uncomment baris di bawah ini dan sesuaikan dengan nama repository Anda
  // basePath: '/nama-repository',
  // Jika menggunakan gambar dari luar domain
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   webpackBuildWorker: true,
  //   parallelServerBuildTraces: true,
  //   parallelServerCompiles: true,
  // },
};

export default nextConfig;

