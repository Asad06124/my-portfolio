/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static site export to GitHub Pages
  basePath: '/my-portfolio', // Matches your repo name for GitHub Pages URL
  assetPrefix: '/my-portfolio/', // Ensures assets load correctly
};

export default nextConfig;