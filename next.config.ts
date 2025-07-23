// ============================================
// 1. UPDATE next.config.ts - Global Configuration
// ============================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',  // Remove basePath since you're using custom domain
  assetPrefix: '', // Remove assetPrefix for custom domain
  eslint: {

    ignoreDuringBuilds: true,
  },
  // ===== PERFORMANCE OPTIMIZATIONS =====
  
  // Image Optimization (Global)
  images: {
    unoptimized: false, // Enable optimization even for static export
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  // Compiler Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },

  // Experimental Features for Performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Webpack Optimizations
  webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Optimize images at build time
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[hash].[ext]',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 60,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.60, 0.70],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 60,
            },
          },
        },
      ],
    });

    return config;
  },

  // Headers for Performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Redirects and Rewrites for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;